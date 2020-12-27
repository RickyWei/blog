(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(v,_,a){v.exports=a.p+"assets/img/index.4dae925d.png"},367:function(v,_,a){v.exports=a.p+"assets/img/skiplist.d33d3e94.png"},427:function(v,_,a){"use strict";a.r(_);var i=a(19),l=Object(i.a)({},(function(){var v=this,_=v.$createElement,i=v._self._c||_;return i("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[i("h1",{attrs:{id:"database"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[v._v("#")]),v._v(" Database")]),v._v(" "),i("h2",{attrs:{id:"事务特性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#事务特性"}},[v._v("#")]),v._v(" 事务特性")]),v._v(" "),i("ol",[i("li",[v._v("Atomicity")]),v._v(" "),i("li",[v._v("Consistent")]),v._v(" "),i("li",[v._v("Isolate")]),v._v(" "),i("li",[v._v("Durable")])]),v._v(" "),i("h2",{attrs:{id:"数据库范式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#数据库范式"}},[v._v("#")]),v._v(" 数据库范式")]),v._v(" "),i("ol",[i("li",[v._v("1NF 列是原子的")]),v._v(" "),i("li",[v._v("2NF 非主属性不能部分依赖主属性")]),v._v(" "),i("li",[v._v("3NF 非主属性间不存在传递依赖")])]),v._v(" "),i("h2",{attrs:{id:"脏读-不可重复读-幻读"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#脏读-不可重复读-幻读"}},[v._v("#")]),v._v(" 脏读，不可重复读，幻读")]),v._v(" "),i("ol",[i("li",[v._v("脏读，A事务还没提交时B事务读取，之后A回滚，B读到脏数据")]),v._v(" "),i("li",[v._v("不可重复读，A事务中会读某个数据多次，B事务在期间修改了数据，A两次读到同一个数据不一致")]),v._v(" "),i("li",[v._v("幻读，A事务修改表中全部数据时，B事务添加了一条数据，A之后发现表中还有未修改数据")])]),v._v(" "),i("h2",{attrs:{id:"隔离级别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[v._v("#")]),v._v(" 隔离级别")]),v._v(" "),i("ol",[i("li",[v._v("读未提交")]),v._v(" "),i("li",[v._v("读已提交，解决脏读")]),v._v(" "),i("li",[v._v("可重复读，解决不可重复读")]),v._v(" "),i("li",[v._v("串行化，解决幻读")])]),v._v(" "),i("h2",{attrs:{id:"各隔离级别加锁情况"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#各隔离级别加锁情况"}},[v._v("#")]),v._v(" 各隔离级别加锁情况")]),v._v(" "),i("ol",[i("li",[v._v("read uncommitted 读不加锁，写排他锁")]),v._v(" "),i("li",[v._v("read committed 每次读mvcc都生成快照，在快照中索引")]),v._v(" "),i("li",[v._v("repeatable read 一次事务只在第一次select生成快照（因为快照只对读操作有效，对写操作无效，所以存在幻读）")]),v._v(" "),i("li",[v._v("serialisable 读写均排他锁")])]),v._v(" "),i("h2",{attrs:{id:"乐观锁和悲观锁"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁和悲观锁"}},[v._v("#")]),v._v(" 乐观锁和悲观锁")]),v._v(" "),i("ol",[i("li",[v._v("乐观锁，每次取数据时认为别人都不会修改，所以不上锁，当提交更新时会判断期间数据有无被他人修改\n"),i("ol",[i("li",[v._v("数据版本，为表增加一个version字段，当读数据时将version字段值一同读出，每次更新数据version+1，当提交时比对version是否过期")]),v._v(" "),i("li",[v._v("时间戳，添加timestamp字段类型，其他同上")])])]),v._v(" "),i("li",[v._v("悲观锁，每次修改数据时都获得锁")])]),v._v(" "),i("h2",{attrs:{id:"innodb的两种行级锁"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#innodb的两种行级锁"}},[v._v("#")]),v._v(" Innodb的两种行级锁")]),v._v(" "),i("ol",[i("li",[v._v("s锁，共享，允许事务读取一行数据")]),v._v(" "),i("li",[v._v("x锁，排他，允许事务更改一行数据")])]),v._v(" "),i("h2",{attrs:{id:"innodb三种行锁算法实现隔离级别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#innodb三种行锁算法实现隔离级别"}},[v._v("#")]),v._v(" innodb三种行锁算法实现隔离级别")]),v._v(" "),i("ol",[i("li",[v._v("record locks，锁定索引上的单个记录，若未定义索引，innodb会隐式创建一个聚族索引，并引用改索引锁定记录")]),v._v(" "),i("li",[v._v("gap locks，锁定一个范围<>")]),v._v(" "),i("li",[v._v("next-key locks，以上的结合，即锁定范围又锁定本身<= =>")])]),v._v(" "),i("h2",{attrs:{id:"mysql的引擎"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mysql的引擎"}},[v._v("#")]),v._v(" mysql的引擎")]),v._v(" "),i("ol",[i("li",[v._v("INNODB")]),v._v(" "),i("li",[v._v("MYISAM")])]),v._v(" "),i("h2",{attrs:{id:"innodb和myisam区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#innodb和myisam区别"}},[v._v("#")]),v._v(" innodb和myisam区别")]),v._v(" "),i("ol",[i("li",[v._v("InnoDB 支持事务，MyISAM 不支持事务，这是 MySQL 将默认存储引擎从 MyISAM 变成 InnoDB 的重要原因之一")]),v._v(" "),i("li",[v._v("InnoDB 支持外键，而 MyISAM 不支持")]),v._v(" "),i("li",[v._v("InnoDB 是聚集索引，MyISAM 是非聚集索引")]),v._v(" "),i("li",[v._v("InnoDB 不保存表的具体行数，执行 select count(*) from table 时需要全表扫描。而MyISAM 用一个变量保存了整个表的行数，执行上述语句时只需要读出该变量即可，速度很快")]),v._v(" "),i("li",[v._v("InnoDB 最小的锁粒度是行锁，MyISAM 最小的锁粒度是表锁。一个更新语句会锁住整张表，导致其他查询和更新都会被阻塞，因此并发访问受限。这也是 MySQL 将默认存储引擎从 MyISAM 变成 InnoDB 的重要原因之一")])]),v._v(" "),i("h2",{attrs:{id:"聚族索引和非聚族索引"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#聚族索引和非聚族索引"}},[v._v("#")]),v._v(" 聚族索引和非聚族索引")]),v._v(" "),i("ol",[i("li",[i("img",{attrs:{src:a(366),alt:"index"}})]),v._v(" "),i("li",[v._v("聚族索引\n"),i("ol",[i("li",[v._v("数据和索引放在一起")]),v._v(" "),i("li",[v._v("一个表仅有一个聚族索引，默认为主键，未定义主键时innodb选择一个唯一的非空索引代替，若没有innodb隐式定义一个主键")])])]),v._v(" "),i("li",[v._v("非聚族索引\n"),i("ol",[i("li",[v._v("数据和索引分离，得到数据要回表查询")])])])]),v._v(" "),i("h2",{attrs:{id:"二级索引"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二级索引"}},[v._v("#")]),v._v(" 二级索引")]),v._v(" "),i("ol",[i("li",[v._v("二级索引即辅助索引")]),v._v(" "),i("li",[v._v("二级索引最终只能拿到主键id，获取内容还需回表")]),v._v(" "),i("li",[v._v("只需要使用到二级索引的查询，不需要进行回表操作的方式称为覆盖索引\n"),i("ol",[i("li",[v._v("再有索引idx_author_name时，"),i("code",[v._v("select id,author,name from book where author = 'author1';")]),v._v("不回表")]),v._v(" "),i("li",[i("code",[v._v("select * from book where author='author1';")]),v._v(" select * 会回表")])])])]),v._v(" "),i("h2",{attrs:{id:"索引的实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#索引的实现"}},[v._v("#")]),v._v(" 索引的实现")]),v._v(" "),i("ol",[i("li",[v._v("B树 / B+树\n"),i("ol",[i("li",[v._v("B树每个节点可以有多个子树，这样一个节点的内容多，树的层数低，有利于磁盘IO（磁盘每次IO会预读，一次可取到一个节点的内容，减少IO次数）")]),v._v(" "),i("li",[v._v("B+树节点只有索引，层数更低，且每次查询都会落到叶子节点，查询稳定")]),v._v(" "),i("li",[v._v("B+树叶子节点有指向右边兄弟的指针，且最后一层数据按索引排列，这样找到起始节点就可以一直向后读到范围结束")])])]),v._v(" "),i("li",[v._v("hash\n"),i("ol",[i("li",[v._v("hash索引查找 O(1)")]),v._v(" "),i("li",[v._v("hash索引只能用来 = IN <= >=，不能用来范围查询")])])])]),v._v(" "),i("h2",{attrs:{id:"最左匹配原则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#最左匹配原则"}},[v._v("#")]),v._v(" 最左匹配原则")]),v._v(" "),i("ol",[i("li",[v._v("mysql可以建立联合索引（多列的索引）")]),v._v(" "),i("li",[v._v("如果你创建一个联合索引, 那 这个索引的任何前缀都会用于查询, (col1, col2, col3)这个联合索引的所有前缀 就是(col1), (col1, col2), (col1, col2, col3), 包含这些列的查询都会启用索 引查询.")]),v._v(" "),i("li",[v._v("其他所有不在最左前缀里的列都不会启用索引, 即使包含了联合索引里的部分列 也不行. 即上述中的(col2), (col3), (col2, col3) 都不会启用索引去查询")])]),v._v(" "),i("h2",{attrs:{id:"mysql模糊查询"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mysql模糊查询"}},[v._v("#")]),v._v(" mysql模糊查询")]),v._v(" "),i("ol",[i("li",[v._v("SELECT 字段 FROM 表 WHERE 某字段 Like 条件\n"),i("ol",[i("li",[v._v("% 匹配任意个字符")]),v._v(" "),i("li",[v._v("_ 匹配单个字符")])])]),v._v(" "),i("li",[v._v("SELECT 字段 FROM 表 WHERE 某字段 REGEXP 正则表达式")])]),v._v(" "),i("h2",{attrs:{id:"模糊查询与索引"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询与索引"}},[v._v("#")]),v._v(" 模糊查询与索引")]),v._v(" "),i("ol",[i("li",[v._v("like %keyword 索引失效\n"),i("ol",[i("li",[v._v("因为任何字符可以匹配 % 无法查找")]),v._v(" "),i("li",[v._v("可逆序后使用索引，"),i("code",[v._v("select * from xxx where mobile_reverse like reverse('%5678');")]),v._v(" mobile_reverse存储mobile的倒叙文本")])])]),v._v(" "),i("li",[v._v("like keyword% 索引有效")]),v._v(" "),i("li",[v._v("like %keyword% 索引失效，也无法反向索引")])]),v._v(" "),i("h2",{attrs:{id:"mysql主从复制"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从复制"}},[v._v("#")]),v._v(" mysql主从复制")]),v._v(" "),i("ol",[i("li",[v._v("做数据热备，当主库挂掉切换到从库")]),v._v(" "),i("li",[v._v("原理\n"),i("ol",[i("li",[v._v("主数据库的更新事件（update，insert，delete）等事件被写入binlog")]),v._v(" "),i("li",[v._v("从库连接主库")]),v._v(" "),i("li",[v._v("主库新建线程，将binlog发送到从库")]),v._v(" "),i("li",[v._v("从库启动后创建io线程将binlog内容写入到relay log")]),v._v(" "),i("li",[v._v("从库创建线程从realylog中，从exec_master_log_pos开始执行命令")])])])]),v._v(" "),i("h2",{attrs:{id:"主从延迟"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#主从延迟"}},[v._v("#")]),v._v(" 主从延迟")]),v._v(" "),i("h2",{attrs:{id:"复制方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#复制方式"}},[v._v("#")]),v._v(" 复制方式")]),v._v(" "),i("ol",[i("li",[v._v("同步复制，等待所有从库复制后主库返回客户端")]),v._v(" "),i("li",[v._v("异步复制，主库执行完请求后理解返回，不等待从库是否接收并执行完")]),v._v(" "),i("li",[v._v("半同步复制，当有一个从库复制后，主库放回客户端")])]),v._v(" "),i("h2",{attrs:{id:"mysql命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mysql命令"}},[v._v("#")]),v._v(" mysql命令")]),v._v(" "),i("ol",[i("li",[v._v("按条件计数\n"),i("ol",[i("li",[i("code",[v._v("SELECT COUNT(*) FROM")]),v._v("students"),i("code",[v._v("GROUP BY")]),v._v("class_id"),i("code",[v._v("> 25;")])]),v._v(" "),i("li",[i("code",[v._v("SELECT COUNT(*) AS")]),v._v("number"),i("code",[v._v(",")]),v._v("class_id"),i("code",[v._v("> 25 AS")]),v._v("type"),i("code",[v._v("FROM")]),v._v("students"),i("code",[v._v("GROUP BY")]),v._v("class_id"),i("code",[v._v("> 25;")])])])])]),v._v(" "),i("h2",{attrs:{id:"redis-使用场景"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis-使用场景"}},[v._v("#")]),v._v(" redis 使用场景")]),v._v(" "),i("ol",[i("li",[v._v("记录帖子点赞数、点击数、评论数")]),v._v(" "),i("li",[v._v("缓存近期热帖")]),v._v(" "),i("li",[v._v("缓存文章详情信息")]),v._v(" "),i("li",[v._v("记录用户会话信息")])]),v._v(" "),i("h2",{attrs:{id:"redis单线程为什么快"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis单线程为什么快"}},[v._v("#")]),v._v(" redis单线程为什么快")]),v._v(" "),i("ol",[i("li",[v._v("纯内存操作")]),v._v(" "),i("li",[v._v("单线程避免线程上下文切换")]),v._v(" "),i("li",[v._v("io复用，epoll lt模式")]),v._v(" "),i("li",[v._v("Redis 的瓶颈最有可能是机器内存或者网络带宽，而非单线程，既然单线程不是 Redis 的性能瓶颈，并且单线程又比较容易实现，所以 Redis 就选择使用单线程来实现")])]),v._v(" "),i("h2",{attrs:{id:"redis功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis功能"}},[v._v("#")]),v._v(" redis功能")]),v._v(" "),i("ol",[i("li",[v._v("数据缓存功能")]),v._v(" "),i("li",[v._v("分布式锁的功能")]),v._v(" "),i("li",[v._v("支持数据持久化")]),v._v(" "),i("li",[v._v("支持事务")]),v._v(" "),i("li",[v._v("支持消息队列")])]),v._v(" "),i("h2",{attrs:{id:"redis数据类型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis数据类型"}},[v._v("#")]),v._v(" redis数据类型")]),v._v(" "),i("ol",[i("li",[v._v("string")]),v._v(" "),i("li",[v._v("hash")]),v._v(" "),i("li",[v._v("list")]),v._v(" "),i("li",[v._v("set")]),v._v(" "),i("li",[v._v("sorted set")])]),v._v(" "),i("h2",{attrs:{id:"redis对比memcache"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis对比memcache"}},[v._v("#")]),v._v(" redis对比memcache")]),v._v(" "),i("ol",[i("li",[v._v("Memcached 所有的值均是简单的字符串，Redis 支持更为丰富的数据类型")]),v._v(" "),i("li",[v._v("Redis 的速度比 Memcached 要快")]),v._v(" "),i("li",[v._v("Redis 可以持久化")]),v._v(" "),i("li",[v._v("Redis 可以设置过期时间")]),v._v(" "),i("li",[v._v("Redis 支持主从同步")])]),v._v(" "),i("h2",{attrs:{id:"redis淘汰策略"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis淘汰策略"}},[v._v("#")]),v._v(" redis淘汰策略")]),v._v(" "),i("ol",[i("li",[v._v("noeviction：禁止淘汰数据；")]),v._v(" "),i("li",[v._v("allkeys-lru：尝试回收最少使用的键，使得新添加的数据有空间存放；")]),v._v(" "),i("li",[v._v("volatile-lru：尝试回收最少使用的键，但仅限于在过期集合的键，使得新添加的数据有空间存放；")]),v._v(" "),i("li",[v._v("allkeys-random：回收随机的键使得新添加的数据有空间存放；")]),v._v(" "),i("li",[v._v("volatile-random：回收随机的键使得新添加的数据有空间存放，但仅限于在过期集合的键；")]),v._v(" "),i("li",[v._v("volatile-ttl：回收在过期集合的键，并且优先回收存活时间较短的键，使得新添加的数据有空间存放")])]),v._v(" "),i("h2",{attrs:{id:"redis持久化的方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化的方式"}},[v._v("#")]),v._v(" redis持久化的方式")]),v._v(" "),i("ol",[i("li",[v._v("rdb\n"),i("ol",[i("li",[v._v("缺省情况下，redis将数据快照存放在磁盘的二进制文件中dump.rdb")]),v._v(" "),i("li",[v._v("可配置持久化策略如多久快照一次，或手动调用save")]),v._v(" "),i("li",[v._v("实现：redis fork子进程写rdb文件，写完后用新文件代替旧文件")])])]),v._v(" "),i("li",[v._v("AOF\n"),i("ol",[i("li",[v._v("追加的方式写每条写操做到文件")]),v._v(" "),i("li",[v._v("重启时优先使用aof重建")])])]),v._v(" "),i("li",[v._v("对比\n"),i("ol",[i("li",[v._v("RDB需要定时持久化，风险是可能会丢两次持久之间的数据，量可能很大")]),v._v(" "),i("li",[v._v("AOF每秒fsync一次指令硬盘，如果硬盘IO慢，会阻塞父进程；风险是会丢失1秒多的数据；在Rewrite过程中，主进程把指令存到mem-buffer中，最后写盘时会阻塞主进程")])])])]),v._v(" "),i("h2",{attrs:{id:"save-和-bgsave-有什么区别"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#save-和-bgsave-有什么区别"}},[v._v("#")]),v._v(" SAVE 和 BGSAVE 有什么区别？")]),v._v(" "),i("ol",[i("li",[v._v("SAVE 直接调用 rdbSave 函数（用于 Redis 持久化的函数），阻塞 Redis 主进程，直到保存完成为止，在主进程阻塞期间，服务器不能处理客户端的任何请求；")]),v._v(" "),i("li",[v._v("BGSAVE 则会创建一个子进程，子进程负责调用 rdbSave 函数，并在保存完成之后向主进程发送完成信号，Redis 服务器在 BGSAVE 执行期间仍然可以继续处理客户端的请求")])]),v._v(" "),i("h2",{attrs:{id:"跳表"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[v._v("#")]),v._v(" 跳表")]),v._v(" "),i("ol",[i("li",[i("img",{attrs:{src:a(367),alt:"skiplist"}})]),v._v(" "),i("li",[v._v("跳跃表是一种基于链表的扩展，跳跃表还是一个链表，是一个有序的链表，在遍历的时候基于比较，但普通链表只能遍历，跳跃表加入了一个层的概念，层级越高元素越少，每次先从高层查找，直到找到合适的位置，从图中可以看到高层的节点远远少于底层的节点数，从而实现了跳跃式查找")])]),v._v(" "),i("h2",{attrs:{id:"redis缓存穿透-缓存击穿和缓存雪崩"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存穿透-缓存击穿和缓存雪崩"}},[v._v("#")]),v._v(" redis缓存穿透，缓存击穿和缓存雪崩")]),v._v(" "),i("ol",[i("li",[v._v("缓存穿透\n"),i("ol",[i("li",[v._v("访问不存在的key，每次请求落在数据库，高并发时挂掉")]),v._v(" "),i("li",[v._v("解决，直把null设为缓存;不管查询数据库是否有数据，都缓存起来，只不过把没有数据的缓存结果的过期时间设置为比较短的一个值，比如 3 分钟")])])]),v._v(" "),i("li",[v._v("缓存击穿\n"),i("ol",[i("li",[v._v("大量数据访问同一个key（如秒杀），缓存过期的瞬间大量请求落在数据库")]),v._v(" "),i("li",[v._v("解决，不过期")])])]),v._v(" "),i("li",[v._v("缓存雪崩\n"),i("ol",[i("li",[v._v("大量key同时过期")]),v._v(" "),i("li",[v._v("解决：随机key的过期时间；热点数据考虑不失效")])])])]),v._v(" "),i("h2",{attrs:{id:"redis-有哪些集群策略"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis-有哪些集群策略"}},[v._v("#")]),v._v(" Redis 有哪些集群策略")]),v._v(" "),i("ol",[i("li",[v._v("主从策略：1 台机器作为写操作，另外 2 台作为读操作，类似于 MySQL 的主从方式；")]),v._v(" "),i("li",[v._v("哨兵策略：增加 1 台机器作为哨兵，监控 3 台主从机器，当主节点挂机的时候，机器内部进行选举，从集群中从节点里指定一台机器升级为主节点，从而实现高可用。当主节点恢复的时候，加入到从节点中继续提供服务；")]),v._v(" "),i("li",[v._v("集群策略：Redis 3.0 之后增加了集群的概念，可实现多主多从的结构，实现正真的高可用")])]),v._v(" "),i("h2",{attrs:{id:"redis高并发高可用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis高并发高可用"}},[v._v("#")]),v._v(" redis高并发高可用")]),v._v(" "),i("ol",[i("li",[v._v("高并发\n"),i("ol",[i("li",[v._v("单机，主从架构，单master写数据，多slave读数据，读写分离")]),v._v(" "),i("li",[v._v("集群，")])])]),v._v(" "),i("li",[v._v("高可用\n"),i("ol",[i("li",[v._v("哨兵，监视master运行状态，当多数认为master挂了，在slave中投票选出一个master")])])])]),v._v(" "),i("h2",{attrs:{id:"如何保证-redis-的数据一致性"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#如何保证-redis-的数据一致性"}},[v._v("#")]),v._v(" 如何保证 Redis 的数据一致性")]),v._v(" "),i("ol",[i("li",[v._v("合理设置缓存的过期时间；")]),v._v(" "),i("li",[v._v("新增、更改、删除数据库操作时同步更新 Redis，可以使用事物机制来保证数据的一致性")])]),v._v(" "),i("h2",{attrs:{id:"什么是缓存预热-有几种实现方式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#什么是缓存预热-有几种实现方式"}},[v._v("#")]),v._v(" 什么是缓存预热？有几种实现方式")]),v._v(" "),i("ol",[i("li",[v._v("缓存预热是指系统上线后，将相关的缓存数据直接加载到缓存系统，这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题。")]),v._v(" "),i("li",[v._v("缓存预热的实现方式，可分为以下两种：\n"),i("ol",[i("li",[v._v("数据量不大的时候，工程启动的时候进行加载缓存动作")]),v._v(" "),i("li",[v._v("数据量大的时候，设置一个定时任务脚本，进行缓存的刷新")])])])]),v._v(" "),i("h2",{attrs:{id:"redis-是如何实现同步的"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#redis-是如何实现同步的"}},[v._v("#")]),v._v(" Redis 是如何实现同步的？")]),v._v(" "),i("ol",[i("li",[v._v("Redis 可以实现主从同步和从从同步。当第一次同步时，主节点做一次 BGSAVE，并同时将后续修改操作记录到内存中，待完成后将 RDB 文件全量同步到复制节点，复制节点接受完成后将 RDB 镜像加载到内存，加载完成后再通知主节点将期间修改的操作记录，同步到复制节点进行重放，这样就完成了同步过程")])]),v._v(" "),i("h2",{attrs:{id:"cap原理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cap原理"}},[v._v("#")]),v._v(" cap原理")]),v._v(" "),i("ol",[i("li",[v._v("CAP原理认为，一个提供数据服务的存储系统无法同时完美的满足\n"),i("ol",[i("li",[v._v("一致性（Consistency，一致性指的是所有节点都能在同一时间返回同一份最新的数据副本")]),v._v(" "),i("li",[v._v("数据可用性（Availability），可用性指的是每次请求都能够返回非错误的响应")]),v._v(" "),i("li",[v._v("分区耐受性（Partition Tolerance），分区容错性指的是服务器间的通信即使在一定时间内无法保持畅通也不会影响系统继续运行")])])]),v._v(" "),i("li",[v._v("Consistency 和 Availability 的矛盾，一致性和可用性，为什么不可能同时成立？答案很简单，因为可能通信失败（即出现分区容错）。如果保证 G2 的一致性，那么 G1 必须在写操作时，锁定 G2 的读操作和写操作。只有数据同步后，才能重新开放读写。锁定期间，G2 不能读写，没有可用性不。如果保证 G2 的可用性，那么势必不能锁定 G2，所以一致性不成立。")])]),v._v(" "),i("h2",{attrs:{id:"raft协议"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#raft协议"}},[v._v("#")]),v._v(" raft协议")]),v._v(" "),i("ol",[i("li",[v._v("raft解决以下三个问题\n"),i("ol",[i("li",[v._v("leader选举：当已有的leader故障时必须选出一个新的leader")]),v._v(" "),i("li",[v._v("日志复制：leader接受来自客户端的命令，记录为日志，并复制给集群中的其他服务器，并强制其他节点的日志与leader保持一致")]),v._v(" "),i("li",[v._v("安全safety措施：通过一些措施确保系统的安全性，如确保所有状态机按照相同顺序执行相同命令的措施")])])]),v._v(" "),i("li",[v._v("Raft协议的每个副本都会处于三种状态之一\n"),i("ol",[i("li",[v._v("Leader：所有请求的处理者，Leader副本接受client的更新请求，本地处理后再同步至多个其他副本")]),v._v(" "),i("li",[v._v("Follower：请求的被动更新者，从Leader接受更新请求，然后写入本地日志文件")]),v._v(" "),i("li",[v._v("Candidate：如果Follower副本在一段时间内没有收到Leader副本的心跳，则判断Leader可能已经故障，此时启动选主过程，此时副本会变成Candidate状态，直到选主结束")]),v._v(" "),i("li",[v._v("开始时大家都是folloer然后拉票，票多的人成为leader，若一次投票没有投出，因为每个follower的等待超时不同，会有先的follower开始第二次选举")])])])])])}),[],!1,null,null,null);_.default=l.exports}}]);