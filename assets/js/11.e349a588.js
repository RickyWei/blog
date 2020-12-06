(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{417:function(t,a,v){"use strict";v.r(a);var _=v(19),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"database"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),v("h2",{attrs:{id:"事务特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务特性"}},[t._v("#")]),t._v(" 事务特性")]),t._v(" "),v("ol",[v("li",[t._v("Atomicity")]),t._v(" "),v("li",[t._v("Consistent")]),t._v(" "),v("li",[t._v("Isolate")]),t._v(" "),v("li",[t._v("Durable")])]),t._v(" "),v("h2",{attrs:{id:"脏读-不可重复读-幻读"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#脏读-不可重复读-幻读"}},[t._v("#")]),t._v(" 脏读，不可重复读，幻读")]),t._v(" "),v("ol",[v("li",[t._v("脏读，A事务还没提交时B事务读取，之后A回滚，B读到脏数据")]),t._v(" "),v("li",[t._v("不可重复读，A事务中会读某个数据多次，B事务在期间修改了数据，A两次读到同一个数据不一致")]),t._v(" "),v("li",[t._v("幻读，A事务修改表中全部数据时，B事务添加了一条数据，A之后发现表中还有未修改数据")])]),t._v(" "),v("h2",{attrs:{id:"隔离级别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[t._v("#")]),t._v(" 隔离级别")]),t._v(" "),v("ol",[v("li",[t._v("读未提交")]),t._v(" "),v("li",[t._v("读已提交，解决脏读")]),t._v(" "),v("li",[t._v("可重复读，解决不可重复读")]),t._v(" "),v("li",[t._v("串行化，解决幻读")])]),t._v(" "),v("h2",{attrs:{id:"redis缓存穿透-缓存击穿和缓存雪崩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存穿透-缓存击穿和缓存雪崩"}},[t._v("#")]),t._v(" redis缓存穿透，缓存击穿和缓存雪崩")]),t._v(" "),v("ol",[v("li",[t._v("缓存穿透\n"),v("ol",[v("li",[t._v("访问不存在的key，每次请求落在数据库，高并发时挂掉")])])]),t._v(" "),v("li",[t._v("缓存击穿\n"),v("ol",[v("li",[t._v("大量数据访问同一个key（如秒杀），缓存过期的瞬间大量请求落在数据库")])])]),t._v(" "),v("li",[t._v("缓存雪崩\n"),v("ol",[v("li",[t._v("大量key同时过期")]),t._v(" "),v("li",[t._v("解决：随机key的过期时间；热点数据考虑不失效")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);