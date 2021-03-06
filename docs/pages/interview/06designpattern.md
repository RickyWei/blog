# Design

## 设计原则

1. 单一职责原则(Single Responsibility Principle)；就一个类而言， 应该仅有一个引起它变化的原因
2. 开放封闭原则（Open Close Principle）；类、模块、函数等应该是可以拓展的，但是不可修改
3. 里氏替换原则（Liskov Substitution Principle）；所有引用基类的地方必须能透明地使用其子类的对象
4. 依赖倒置原则（Dependence Inversion Principle）；高层模块不应该依赖于低层模块，两者都应该依赖于抽象。抽象不应该依赖于细节，细节应该依赖于抽象
5. 接口隔离原则（InterfaceSegregation Principles）；一个类对另一个类的依赖应该建立在最小的接口上
6. 迪米特原则（Law of Demeter）；一个软件实体应当尽可能少地与其他实体发生相互作用

## 单例

1. 保证一个类只能产生一个实例
2. 构造函数，拷贝构造，赋值构造函数，析构函数为private类型
3. 类里有个获取实例的静态函数，可以全局访问

```cpp
// 饿汉默认线程安全

// 懒汉加锁解决
SingleInstance *SingleInstance::GetInstance() {
  // double check
  // avoid to get mutex frequently
  if (m_SingleInstance == NULL) {
    std::unique_lock<std::mutex> lock(m_Mutex);
    if (m_SingleInstance == NULL) {
      m_SingleInstance = new (std::nothrow) SingleInstance;
    }
  }

  return m_SingleInstance;
}

// c++11 局部静态变量只初始化一次
Single &Single::GetInstance() {
  // 局部静态特性的方式实现单实例
  static Single s;
  return s;
}
```

## 设计扫码登录

1. 浏览器打开网页，向服务器请求二维码
2. 服务器收到请求后生成uuid并存入redis并设置超时时间；过期后需要刷新二维码
3. 浏览器轮询或长连接（服务器轮询）
4. 手机扫码，因为手机端已登录，扫码请求时携带登录信息
5. 服务器解析出登录信息，绑定uuid和用户信息，返回确认信息给手机端
6. 手机端用户确认
7. 浏览器轮询查到状态为扫描成功，登录成功，并将uuid和用户信息保存

## 红包金额算法

1. 二倍均值法
   1. 假设剩余红包金额 m，剩余人数n，$每轮金额=随机区间[0.01, \frac{m*2}{n}-0.01]$
   2. 除了最后一次，任何人金额不会超过人均的两倍（100元10人，不会超过20）
   3. 当前面人手气好时，注意保证后面人最少0.01
2. 线段分割法
   1. 总共 n 人抢红包，直接选 n-1 个点将红包分为 n 份

## 抢红包系统

1. 系统为每个红包生成唯一id
2. 根据红包id进行hash使得不同红包的所有处理分布在不同的server上，server进行逻辑处理并配备数据库
3. 抢红包只查询数据缓存，不落在数据库
4. 对于过期红包，已完成红包，已领取用户做拦截处理
5. 超过两天后的红包访问量下降，热数据库只存放近几天的数据，其他放入冷数据库
6. 故障处理
   1. 下单缓存故障，红包在数据库生成
   2. 抢红包缓存故障，降级为数据库查询，同时数据库限流
   3. 资金入库多层降级，拆红包后单据实时落地，资金转账多层处理

## 秒杀系统

1. 业务特点
   1. 瞬时流量大
   2. 参与用户多，商品数量少
   3. 请求读多写少
   4. 秒杀状态转换实时性高
2. 前端
   1. 页面静态化，通过CDN分流
   2. 禁止重复提交，用户提交后按钮置灰
   3. 用户限流，同一用户某段时间内只能提交一次请求，如通过IP限流
3. 后端
   1. 业务分离，秒杀业务和其他业务隔离
   2. 消息队列缓存请求，服务器根据自身处理能力从队列中获取任务，数据库订阅消息减库存，成功返回秒杀成功，失败返回秒杀结束
   3. 可将读写请求分离，redis缓存执行写操作
   4. 压力测试

## 网页检测和优化

1. 自己测试是否有相同的问题
2. 如果自己也有问题，打开调试功能查看加载最慢的请求
3. 查看服务器负载，如果负载都不高，查看nginx等是否有错误日志
4. 查看mysql的慢查询日志，看是否有查询太慢

## redis日活，连续登录

1. bitmap每个offset对应一个userid，key为日期（2020:12:27），value为如果该用户登陆过对应offset为1
2. 日活，周活，月活可以所有天数间取or，连续登录可以两天间的值取and
3. `setbit key offset value` -> `setbit onlineuser id 1`; `getbit key offset` `bitcount key start end`

## redis推荐去重

1. 使用bitmap

## rpc

![rpc](https://raw.githubusercontent.com/RickyWei/blog/img/img/rpc.png)

1. 主要组成
   1. 服务端：服务接口，服务实现，服务暴露（把自己ip注册到注册中心，可以被客户端发现）
   2. 客户端：服务接口，服务引用
2. 流程
   1. 服务消费方（client）以本地调用方式调用服务；
   2. client stub接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体；
   3. client stub找到服务地址，并将消息发送到服务端；
   4. server stub收到消息后进行解码；
   5. server stub根据解码结果 反射调用 本地的服务；
   6. 本地服务执行并将结果返回给server stub；
   7. server stub将返回结果打包成消息并发送至消费方；
   8. client stub接收到消息，并进行解码；
   9. 服务消费方得到最终结果

## mq

1. 应用场景
   1. 异步处理：处理如短信下发、状态推送、用户注册、数据同步等功能，提高系统的并发能力，集中力量处理重要的部分（同步处理），将非核心功能丢给MQ
   2. 系统解耦：可在模块、服务、接口等不同粒度上实现解耦
   3. 重试补偿：在跨机器数据传输的整个过程中，只要任意一个环节出错，都会导致问题的产生。可以通过MQ的重试补偿机制去尽可能的处理掉这些异常
   4. 流量削锋：对于秒杀场景下的下单处理。服务器收到消息后，首先写入消息队列，然后按照自己的消息处理能力做处理
   5. 日志处理：可以定时将日志写入MQ，并且主动订阅日志记录
2. 组件
   1. 消息服务器Broker：消息服务器，作为server提供消息核心服务
   2. 消息生产者Producer：发送消息到消息队列
   3. 消息消费者Consumer：从消息队列接收消息
   4. 消息队列Queue：一个先进先出的消息存储区域。消息按照顺序发送接收，一旦消息被消费处理，该消息将从队列中删除
3. 消息模式
   1. 点对点，FIFO每个消息只能被某一个消费者消费一次
   2. 订阅和发布

## fastdfs

- [fastdfs](http://www.ityouknow.com/fastdfs/2018/01/06/distributed-file-system-fastdfs.html)

---
欢迎关注微信~~

![wechat](https://raw.githubusercontent.com/RickyWei/blog/img/img/wechat.jpg)