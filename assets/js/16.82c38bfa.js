(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{379:function(t,a,s){"use strict";s.r(a);var e=s(11),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mapreduce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce"}},[t._v("#")]),t._v(" MapReduce")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("ol",[s("li",[t._v("MapReduce是一种处理大数据的编程模型")])]),t._v(" "),s("h2",{attrs:{id:"programming-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#programming-model"}},[t._v("#")]),t._v(" Programming Model")]),t._v(" "),s("ol",[s("li",[t._v("Map\n"),s("ol",[s("li",[t._v("map(k1,v1) -> list(k2,v2)")]),t._v(" "),s("li",[t._v("输入：key/value 键值对")]),t._v(" "),s("li",[t._v("输出：key/value 键值对，即一些中间结果")])])]),t._v(" "),s("li",[t._v("Reduce\n"),s("ol",[s("li",[t._v("reduce(k2,list(v2)) -> list(v2)")]),t._v(" "),s("li",[t._v("输入：key/value 键值对，即map产生的中间结果")]),t._v(" "),s("li",[t._v("输出：最终结果")])])])]),t._v(" "),s("h3",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("h4",{attrs:{id:"word-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#word-count"}},[t._v("#")]),t._v(" Word Count")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// key: document name")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// value: document contents")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each word w in value"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EmitIntermediate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Iterator values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// key: a word")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// values: a list of counts")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" each v in values"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseInt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AsString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("ol",[s("li",[t._v("map为每个单词产生一个中间结果 word/1，1为单词出现的频率")]),t._v(" "),s("li",[t._v("reduce合并一个单词总共出现的频率")])]),t._v(" "),s("h4",{attrs:{id:"distributed-grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distributed-grep"}},[t._v("#")]),t._v(" Distributed Grep")]),t._v(" "),s("ol",[s("li",[t._v("map(document name, document content) -> list(matched line, 1)")]),t._v(" "),s("li",[t._v("reduce(matched line, list(1)) -> list(matched line)")])]),t._v(" "),s("h4",{attrs:{id:"inverted-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inverted-index"}},[t._v("#")]),t._v(" Inverted Index")]),t._v(" "),s("ol",[s("li",[t._v("map(document id, document content) -> list(word, document id)")]),t._v(" "),s("li",[t._v("reduce(word, list(document id)) -> (word, list(document id))")])]),t._v(" "),s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[t._v("#")]),t._v(" Implementation")]),t._v(" "),s("h3",{attrs:{id:"execution-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-overview"}},[t._v("#")]),t._v(" Execution Overview")]),t._v(" "),s("p",[t._v("MapReduce被调用时将执行以下流程")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/RickyWei/blog/img/img/20210301232911.png",alt:"mapreduce overview"}})]),t._v(" "),s("ol",[s("li",[t._v("MapReduce库首先将输入文件分割成 M 块（每块通常16-64MB，此步骤可被多台机器并行执行）；在集群中开启MR程序")]),t._v(" "),s("li",[t._v("其中一个为Master其余为Workers；Master将M个Map任务和R个Reduce任务分配给空闲的Worker")]),t._v(" "),s("li",[t._v("被分配Map任务的Worker读取对应的输入块；解析出每个key/value对并送入用户定义的Map()函数；Map()产生的中间kv结果存放在内存中")]),t._v(" "),s("li",[t._v("每隔一定时间Partition()函数（eg. "),s("code",[t._v("hash(key)%R")]),t._v("）将内存中的这些中间kv结果分到R个区域并写入磁盘；文件位置将会传给Master，Master再将其转发给Reduce Worker（增量式的推送）")]),t._v(" "),s("li",[t._v("当Reduce Worker被Master通知时，它将通过RPC从Map Wroker读取中间结果；当Reduce Wroker读取完所有中间结果后，它将按key排序，所以具有相同key的kv对被放在了一起；")]),t._v(" "),s("li",[t._v("Reduce Worker遍历被排序的中间结果，将每个不同的key和其对应的所有values传入用户定义的Reduce()函数；最终结果被追加到该partition对用的文件中")]),t._v(" "),s("li",[t._v("当所有Map和Reduce完成时，MapReduce调用返回")])]),t._v(" "),s("h2",{attrs:{id:"master-data-structures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-data-structures"}},[t._v("#")]),t._v(" Master Data Structures")]),t._v(" "),s("ol",[s("li",[t._v("存储每个Map和Reduce任务的状态（等待（idle），正在执行，完成）；对非等待的任务存储其Worker ID")]),t._v(" "),s("li",[t._v("存储每个完成的Map任务的中间结果的位置")])]),t._v(" "),s("h2",{attrs:{id:"fault-tolerance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fault-tolerance"}},[t._v("#")]),t._v(" Fault Tolerance")]),t._v(" "),s("h3",{attrs:{id:"worker-failure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#worker-failure"}},[t._v("#")]),t._v(" Worker Failure")]),t._v(" "),s("ol",[s("li",[t._v("Master会定期Ping Worker，当一定时间未收到回复认为Worker故障")]),t._v(" "),s("li",[t._v("所有分配到该Worker的Map/Reduce任务被标为idle状态并等待reschedule到其他Worker")]),t._v(" "),s("li",[t._v("该Worker上已结束的Map任务会被重新执行，因为中间结果保存在local disk；Reduce不会被重新执行，因为结果保存在global file system")]),t._v(" "),s("li",[t._v("当Map任务因为故障从A迁移到B，对应的Reduce任务会被通知，如果该Reduce任务还未从A读取全部数据便会从B读取")])]),t._v(" "),s("h3",{attrs:{id:"master-failure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#master-failure"}},[t._v("#")]),t._v(" Master Failure")]),t._v(" "),s("ol",[s("li",[t._v("一种方法是Master可以实现定期将自己的状态写入checkpoint，新的Master通过checkpoint启动")])]),t._v(" "),s("h2",{attrs:{id:"locality"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locality"}},[t._v("#")]),t._v(" Locality")]),t._v(" "),s("ol",[s("li",[t._v("网络带宽是有限制的")]),t._v(" "),s("li",[t._v("通常一个数据块在GFS上会有3份拷贝，Master在通过这些位置信息尝试安排Map任务在具有该数据副本的机器上；如果不行则尝试安排在离数据副本距离较近的机器上（如在同一个局域网内）")])]),t._v(" "),s("h2",{attrs:{id:"task-granularity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-granularity"}},[t._v("#")]),t._v(" Task Granularity")]),t._v(" "),s("ol",[s("li",[t._v("理想情况下，M和R的数量应远大于机器的数量；这样可以提高动态的负载均衡；加速故障恢复")]),t._v(" "),s("li",[t._v("实际中，Master需要做"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"O"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"M"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"R"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("次的决定并在内存中保存"),s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"O"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"("}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"M"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"2217"}})],1),s("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[s("mjx-c",{attrs:{c:"R"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("的信息")],1),t._v(" "),s("li",[t._v("为了利用局部性，选择的M将使得被分割的问价大小介于16-64MB；R通常为机器数的一个小倍数（eg. machines=2000, M=200000, R=5000）")])]),t._v(" "),s("h2",{attrs:{id:"backup-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#backup-tasks"}},[t._v("#")]),t._v(" Backup Tasks")]),t._v(" "),s("ol",[s("li",[t._v("MapReduce的总执行时间通常因为短板（如某个机器磁盘太慢）变得更长，如果该机器同时被别的MR调用分配任务，因为CPU或IO竞争会更慢")]),t._v(" "),s("li",[t._v("替补任务是当一个MR调用接近完成时，Master为剩余正在执行的任务再分配一个机器，当任意一个机器结束时将该任务标记为完成")])]),t._v(" "),s("h2",{attrs:{id:"refinements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refinements"}},[t._v("#")]),t._v(" Refinements")]),t._v(" "),s("h3",{attrs:{id:"partitioning-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#partitioning-function"}},[t._v("#")]),t._v(" Partitioning Function")]),t._v(" "),s("ol",[s("li",[t._v("默认情况下，我们使用"),s("code",[t._v("hash(key) Mod R")]),t._v("这种partitioning函数，因为它可以产生较为均衡的R个分区")]),t._v(" "),s("li",[t._v("某些情况下，我们希望一些特定的partition函数，比如将一个host的所有URL分在一起"),s("code",[t._v("hash(Hostname(urlkey)) mod R")])])]),t._v(" "),s("h3",{attrs:{id:"ordering-guarantees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ordering-guarantees"}},[t._v("#")]),t._v(" Ordering Guarantees")]),t._v(" "),s("ol",[s("li",[t._v("MR保证再一个partition中，k/v对按key值排序")]),t._v(" "),s("li",[t._v("有序性方便后续可能的查找等操作")])]),t._v(" "),s("h3",{attrs:{id:"combiner-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#combiner-function"}},[t._v("#")]),t._v(" Combiner Function")]),t._v(" "),s("ol",[s("li",[t._v("一些情况下，用户定义的Reduce方法是可结合可交换的（associative and commutative）")]),t._v(" "),s("li",[t._v("我们可以在Map过程中执行Combiner Function（eg. 在word count中，Map可能会输出多个<the, 1>的键值对，我们可以执行Combiner Function做本地合并后再发送到网络中）")]),t._v(" "),s("li",[t._v("Combiner Function和Reduce Function基本相同，区别是输出不同（前者输出将要发送到Reduce的中间结果，后者为最终输出）")])]),t._v(" "),s("h3",{attrs:{id:"input-and-output-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-and-output-types"}},[t._v("#")]),t._v(" Input and Output Types")]),t._v(" "),s("ol",[s("li",[t._v('MapReduce library提供了多种Input/Output类型（eg. "text"模式将每一行作为key/value对，key是改行在文件中的偏移量，value是该行的内容）')]),t._v(" "),s("li",[t._v("用户通过实现"),s("code",[t._v("reader")]),t._v("接口可以定义自己的Input/Output类型；"),s("code",[t._v("reader")]),t._v("不仅可以从文件中读，也可以从内存或数据库等中读取")])]),t._v(" "),s("h3",{attrs:{id:"side-effects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#side-effects"}},[t._v("#")]),t._v(" Side-effects")]),t._v(" "),s("ol",[s("li",[t._v("某些情况下，输出一些额外的辅助文件是很有用的")]),t._v(" "),s("li",[t._v("但是用户需要自己保证这种side-effects的原子性和幂等性（eg. 一个方法是先输出到一个临时文件，最后再原子的重命名）")])]),t._v(" "),s("h3",{attrs:{id:"skipping-bad-records"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skipping-bad-records"}},[t._v("#")]),t._v(" Skipping Bad Records")]),t._v(" "),s("ol",[s("li",[t._v("有时Map或Reduce函数在一些record中存在bug，此时可以选择跳过这些record（因为有时bug因为其他第三方库产生或者忽略一些记录不太影响结果）")]),t._v(" "),s("li",[t._v('MR提供这中可跳过record的mode；每个worker会安装一个signal handler，每当某个record引发错误时，signal handler会发送一个"last gasp" UDP报文给master，当master收到产生于一个record的多个错误，便认为该recod在下次被执行时应该被跳过')])]),t._v(" "),s("h3",{attrs:{id:"local-execution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-execution"}},[t._v("#")]),t._v(" Local Execution")]),t._v(" "),s("ol",[s("li",[t._v("为了更好的debug，MR提供了一个库可以顺序的在本机执行所有MR操作")])]),t._v(" "),s("h3",{attrs:{id:"status-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-information"}},[t._v("#")]),t._v(" Status Information")]),t._v(" "),s("ol",[s("li",[t._v("Master会开启一个内部的HTTP server，该server提供了MR的各种信息")])]),t._v(" "),s("h3",{attrs:{id:"counters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#counters"}},[t._v("#")]),t._v(" Counters")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("Counter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("uppercase"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuppercase "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetCounter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uppercase"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String contents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n    foreach word w in contents"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsCapitalized")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n            uppercase"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Increment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EmitIntermediate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("ol",[s("li",[t._v("MR提供统计某个事件出现次数的特性；用户可以通过创建一个counter对象并在Map/Reduce函数中增加它（eg. 统计有多少单词被处理）")]),t._v(" "),s("li",[t._v("每个Worker中counter的值被放入在对Master的心跳检测ping的回应中")]),t._v(" "),s("li",[t._v("Master会处理每个counter的值（防止值被重复统计等，因为任务可能因为故障而被重新执行）并在MR结束时返回给用户")])]),t._v(" "),s("blockquote",[s("p",[t._v("MapReduce: Simplified Data Processing on Large Clusters")])])])}),[],!1,null,null,null);a.default=r.exports}}]);