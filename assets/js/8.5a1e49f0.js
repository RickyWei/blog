(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(v,_,a){v.exports=a.p+"assets/img/index.4dae925d.png"},421:function(v,_,a){"use strict";a.r(_);var l=a(19),s=Object(l.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"database"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[v._v("#")]),v._v(" Database")]),v._v(" "),l("h2",{attrs:{id:"事务特性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#事务特性"}},[v._v("#")]),v._v(" 事务特性")]),v._v(" "),l("ol",[l("li",[v._v("Atomicity")]),v._v(" "),l("li",[v._v("Consistent")]),v._v(" "),l("li",[v._v("Isolate")]),v._v(" "),l("li",[v._v("Durable")])]),v._v(" "),l("h2",{attrs:{id:"数据库范式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数据库范式"}},[v._v("#")]),v._v(" 数据库范式")]),v._v(" "),l("ol",[l("li",[v._v("1NF 列是原子的")]),v._v(" "),l("li",[v._v("2NF 非主属性不能部分依赖主属性")]),v._v(" "),l("li",[v._v("3NF 非主属性间不存在传递依赖")])]),v._v(" "),l("h2",{attrs:{id:"脏读-不可重复读-幻读"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#脏读-不可重复读-幻读"}},[v._v("#")]),v._v(" 脏读，不可重复读，幻读")]),v._v(" "),l("ol",[l("li",[v._v("脏读，A事务还没提交时B事务读取，之后A回滚，B读到脏数据")]),v._v(" "),l("li",[v._v("不可重复读，A事务中会读某个数据多次，B事务在期间修改了数据，A两次读到同一个数据不一致")]),v._v(" "),l("li",[v._v("幻读，A事务修改表中全部数据时，B事务添加了一条数据，A之后发现表中还有未修改数据")])]),v._v(" "),l("h2",{attrs:{id:"隔离级别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[v._v("#")]),v._v(" 隔离级别")]),v._v(" "),l("ol",[l("li",[v._v("读未提交")]),v._v(" "),l("li",[v._v("读已提交，解决脏读")]),v._v(" "),l("li",[v._v("可重复读，解决不可重复读")]),v._v(" "),l("li",[v._v("串行化，解决幻读")])]),v._v(" "),l("h2",{attrs:{id:"各隔离级别加锁情况"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#各隔离级别加锁情况"}},[v._v("#")]),v._v(" 各隔离级别加锁情况")]),v._v(" "),l("ol",[l("li",[v._v("read uncommitted 读不加锁，写排他锁")]),v._v(" "),l("li",[v._v("read committed 每次读mvcc都生成快照，在快照中索引")]),v._v(" "),l("li",[v._v("repeatable read 一次事务只在第一次select生成快照（因为快照只对读操作有效，对写操作无效，所以存在幻读）")]),v._v(" "),l("li",[v._v("serialisable 读写均排他锁")])]),v._v(" "),l("h2",{attrs:{id:"乐观锁和悲观锁"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁和悲观锁"}},[v._v("#")]),v._v(" 乐观锁和悲观锁")]),v._v(" "),l("ol",[l("li",[v._v("乐观锁，每次取数据时认为别人都不会修改，所以不上锁，当提交更新时会判断期间数据有无被他人修改\n"),l("ol",[l("li",[v._v("数据版本，为表增加一个version字段，当读数据时将version字段值一同读出，每次更新数据version+1，当提交时比对version是否过期")]),v._v(" "),l("li",[v._v("时间戳，添加timestamp字段类型，其他同上")])])]),v._v(" "),l("li",[v._v("悲观锁，每次修改数据时都获得锁")])]),v._v(" "),l("h2",{attrs:{id:"innodb的两种行级锁"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#innodb的两种行级锁"}},[v._v("#")]),v._v(" Innodb的两种行级锁")]),v._v(" "),l("ol",[l("li",[v._v("s锁，共享，允许事务读取一行数据")]),v._v(" "),l("li",[v._v("x锁，排他，允许事务更改一行数据")])]),v._v(" "),l("h2",{attrs:{id:"innodb三种行锁算法实现隔离级别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#innodb三种行锁算法实现隔离级别"}},[v._v("#")]),v._v(" innodb三种行锁算法实现隔离级别")]),v._v(" "),l("ol",[l("li",[v._v("record locks，锁定索引上的单个记录，若未定义索引，innodb会隐式创建一个聚族索引，并引用改索引锁定记录")]),v._v(" "),l("li",[v._v("gap locks，锁定一个范围")]),v._v(" "),l("li",[v._v("next-key locks，以上的结合，即锁定范围又锁定本身")])]),v._v(" "),l("h2",{attrs:{id:"mysql的引擎"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql的引擎"}},[v._v("#")]),v._v(" mysql的引擎")]),v._v(" "),l("ol",[l("li",[v._v("INNODB")]),v._v(" "),l("li",[v._v("MYISAM")])]),v._v(" "),l("h2",{attrs:{id:"innodb和myisam区别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#innodb和myisam区别"}},[v._v("#")]),v._v(" innodb和myisam区别")]),v._v(" "),l("ol",[l("li",[v._v("InnoDB 支持事务，MyISAM 不支持事务，这是 MySQL 将默认存储引擎从 MyISAM 变成 InnoDB 的重要原因之一")]),v._v(" "),l("li",[v._v("InnoDB 支持外键，而 MyISAM 不支持")]),v._v(" "),l("li",[v._v("InnoDB 是聚集索引，MyISAM 是非聚集索引")]),v._v(" "),l("li",[v._v("InnoDB 不保存表的具体行数，执行 select count(*) from table 时需要全表扫描。而MyISAM 用一个变量保存了整个表的行数，执行上述语句时只需要读出该变量即可，速度很快")]),v._v(" "),l("li",[v._v("InnoDB 最小的锁粒度是行锁，MyISAM 最小的锁粒度是表锁。一个更新语句会锁住整张表，导致其他查询和更新都会被阻塞，因此并发访问受限。这也是 MySQL 将默认存储引擎从 MyISAM 变成 InnoDB 的重要原因之一")])]),v._v(" "),l("h2",{attrs:{id:"聚族索引和非聚族索引"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#聚族索引和非聚族索引"}},[v._v("#")]),v._v(" 聚族索引和非聚族索引")]),v._v(" "),l("ol",[l("li",[l("img",{attrs:{src:a(364),alt:"index"}})]),v._v(" "),l("li",[v._v("聚族索引\n"),l("ol",[l("li",[v._v("数据和索引放在一起")]),v._v(" "),l("li",[v._v("一个表仅有一个聚族索引，默认为主键，未定义主键时innodb选择一个唯一的非空索引代替，若没有innodb隐式定义一个主键")])])]),v._v(" "),l("li",[v._v("非聚族索引\n"),l("ol",[l("li",[v._v("数据和索引分离，得到数据要回表查询")])])])]),v._v(" "),l("h2",{attrs:{id:"索引的实现"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#索引的实现"}},[v._v("#")]),v._v(" 索引的实现")]),v._v(" "),l("ol",[l("li",[v._v("B树 / B+树\n"),l("ol",[l("li",[v._v("B树每个节点可以有多个子树，这样一个节点的内容多，树的层数低，有利于磁盘IO（磁盘每次IO会预读，一次可取到一个节点的内容，减少IO次数）")]),v._v(" "),l("li",[v._v("B+树节点只有索引，层数更低，且每次查询都会落到叶子节点，查询稳定")]),v._v(" "),l("li",[v._v("B+树叶子节点有指向右边兄弟的指针，且最后一层数据按索引排列，这样找到起始节点就可以一直向后读到范围结束")])])]),v._v(" "),l("li",[v._v("hash\n"),l("ol",[l("li",[v._v("hash索引查找 O(1)")]),v._v(" "),l("li",[v._v("hash索引只能用来 = IN <= >=，不能用来范围查询")])])])]),v._v(" "),l("h2",{attrs:{id:"最左匹配原则"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#最左匹配原则"}},[v._v("#")]),v._v(" 最左匹配原则")]),v._v(" "),l("ol",[l("li",[v._v("mysql可以建立联合索引（多列的索引）")]),v._v(" "),l("li",[v._v("如果你创建一个联合索引, 那 这个索引的任何前缀都会用于查询, (col1, col2, col3)这个联合索引的所有前缀 就是(col1), (col1, col2), (col1, col2, col3), 包含这些列的查询都会启用索 引查询.")]),v._v(" "),l("li",[v._v("其他所有不在最左前缀里的列都不会启用索引, 即使包含了联合索引里的部分列 也不行. 即上述中的(col2), (col3), (col2, col3) 都不会启用索引去查询")])]),v._v(" "),l("h2",{attrs:{id:"mysql模糊查询"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql模糊查询"}},[v._v("#")]),v._v(" mysql模糊查询")]),v._v(" "),l("ol",[l("li",[v._v("SELECT 字段 FROM 表 WHERE 某字段 Like 条件\n"),l("ol",[l("li",[v._v("% 匹配任意个字符")]),v._v(" "),l("li",[v._v("_ 匹配单个字符")])])]),v._v(" "),l("li",[v._v("SELECT 字段 FROM 表 WHERE 某字段 REGEXP 正则表达式")])]),v._v(" "),l("h2",{attrs:{id:"模糊查询与索引"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询与索引"}},[v._v("#")]),v._v(" 模糊查询与索引")]),v._v(" "),l("ol",[l("li",[v._v("like %keyword 索引失效\n"),l("ol",[l("li",[v._v("因为任何字符可以匹配 % 无法查找")]),v._v(" "),l("li",[l("code",[v._v("select * from xxx where mobile_reverse like reverse('%5678');")]),v._v(" mobile_reverse存储mobile的倒叙文本")])])]),v._v(" "),l("li",[v._v("like keyword% 索引有效")]),v._v(" "),l("li",[v._v("like %keyword% 索引失效，也无法反向索引")])]),v._v(" "),l("h2",{attrs:{id:"mysql主从复制"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从复制"}},[v._v("#")]),v._v(" mysql主从复制")]),v._v(" "),l("ol",[l("li",[v._v("做数据热备，当主库挂掉切换到从库")]),v._v(" "),l("li",[v._v("原理\n"),l("ol",[l("li",[v._v("书数据库的更新事件（update，insert，delete）等事件被写入binlog")]),v._v(" "),l("li",[v._v("从库连接主库")]),v._v(" "),l("li",[v._v("主库新建线程，将binlog发送到从库")]),v._v(" "),l("li",[v._v("从库启动后创建io线程将binlog内容写入到relay log")]),v._v(" "),l("li",[v._v("从库常见线程从realylog中，从exec_master_log_pos开始执行命令")])])])]),v._v(" "),l("h2",{attrs:{id:"主从延迟"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#主从延迟"}},[v._v("#")]),v._v(" 主从延迟")]),v._v(" "),l("h2",{attrs:{id:"复制方式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#复制方式"}},[v._v("#")]),v._v(" 复制方式")]),v._v(" "),l("ol",[l("li",[v._v("异步复制，主库执行完请求后理解返回，不等待从库是否接收并执行完")]),v._v(" "),l("li",[v._v("同步复制，等待所有从库复制后主库返回客户端")]),v._v(" "),l("li",[v._v("半同步复制，当有一个从库复制后，主库放回客户端")])]),v._v(" "),l("h2",{attrs:{id:"mysql命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql命令"}},[v._v("#")]),v._v(" mysql命令")]),v._v(" "),l("ol",[l("li",[v._v("按条件计数\n"),l("ol",[l("li",[l("code",[v._v("SELECT COUNT(*) FROM")]),v._v("students"),l("code",[v._v("GROUP BY")]),v._v("class_id"),l("code",[v._v("> 25;")])]),v._v(" "),l("li",[l("code",[v._v("SELECT COUNT(*) AS")]),v._v("number"),l("code",[v._v(",")]),v._v("class_id"),l("code",[v._v("> 25 AS")]),v._v("type"),l("code",[v._v("FROM")]),v._v("students"),l("code",[v._v("GROUP BY")]),v._v("class_id"),l("code",[v._v("> 25;")])])])])]),v._v(" "),l("h2",{attrs:{id:"redis缓存穿透-缓存击穿和缓存雪崩"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存穿透-缓存击穿和缓存雪崩"}},[v._v("#")]),v._v(" redis缓存穿透，缓存击穿和缓存雪崩")]),v._v(" "),l("ol",[l("li",[v._v("缓存穿透\n"),l("ol",[l("li",[v._v("访问不存在的key，每次请求落在数据库，高并发时挂掉")])])]),v._v(" "),l("li",[v._v("缓存击穿\n"),l("ol",[l("li",[v._v("大量数据访问同一个key（如秒杀），缓存过期的瞬间大量请求落在数据库")])])]),v._v(" "),l("li",[v._v("缓存雪崩\n"),l("ol",[l("li",[v._v("大量key同时过期")]),v._v(" "),l("li",[v._v("解决：随机key的过期时间；热点数据考虑不失效")])])])]),v._v(" "),l("h2",{attrs:{id:"redis单线程为什么快"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis单线程为什么快"}},[v._v("#")]),v._v(" redis单线程为什么快")]),v._v(" "),l("ol",[l("li",[v._v("纯内存操作")]),v._v(" "),l("li",[v._v("单线程避免线程上下文切换")]),v._v(" "),l("li",[v._v("io复用，epoll lt模式")])]),v._v(" "),l("h2",{attrs:{id:"redis对比memcache"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis对比memcache"}},[v._v("#")]),v._v(" redis对比memcache")]),v._v(" "),l("ol",[l("li",[v._v("redis支持多种数据类型，memcache仅支持字符串")]),v._v(" "),l("li",[v._v("redis可做数据持久化")])]),v._v(" "),l("h2",{attrs:{id:"redis持久化的方式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis持久化的方式"}},[v._v("#")]),v._v(" redis持久化的方式")]),v._v(" "),l("ol",[l("li",[v._v("rdb\n"),l("ol",[l("li",[v._v("缺省情况下，redis将数据快照存放在磁盘的二进制文件中dump.rdb")]),v._v(" "),l("li",[v._v("可配置持久化策略如多久快照一次，或手动调用save")]),v._v(" "),l("li",[v._v("实现：redisfork子进程写rdb文件，写完后用新文件代替旧文件")])])]),v._v(" "),l("li",[v._v("AOF\n"),l("ol",[l("li",[v._v("追加的方式写每条写操做到文件")]),v._v(" "),l("li",[v._v("重启时优先使用aof重建")])])])]),v._v(" "),l("h2",{attrs:{id:"跳表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[v._v("#")]),v._v(" 跳表")]),v._v(" "),l("h2",{attrs:{id:"redis数据类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis数据类型"}},[v._v("#")]),v._v(" redis数据类型")]),v._v(" "),l("ol",[l("li",[v._v("string")]),v._v(" "),l("li",[v._v("hash")]),v._v(" "),l("li",[v._v("list")]),v._v(" "),l("li",[v._v("set")]),v._v(" "),l("li",[v._v("sorted set")])]),v._v(" "),l("h2",{attrs:{id:"redis高并发高可用"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#redis高并发高可用"}},[v._v("#")]),v._v(" redis高并发高可用")]),v._v(" "),l("ol",[l("li",[v._v("高并发\n"),l("ol",[l("li",[v._v("单机，主从架构，单master写数据，多slave读数据，读写分离")]),v._v(" "),l("li",[v._v("集群，")])])]),v._v(" "),l("li",[v._v("高可用\n"),l("ol",[l("li",[v._v("哨兵，监视master运行状态，当多数认为master挂了，在slave中投票选出一个master")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);