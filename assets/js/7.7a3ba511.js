(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{378:function(t,a,l){"use strict";l.r(a);var i=l(19),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,l=t._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"algorithm"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#algorithm"}},[t._v("#")]),t._v(" Algorithm")]),t._v(" "),l("h2",{attrs:{id:"树的遍历"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#树的遍历"}},[t._v("#")]),t._v(" 树的遍历")]),t._v(" "),l("h2",{attrs:{id:"top-k-问题"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#top-k-问题"}},[t._v("#")]),t._v(" Top K 问题")]),t._v(" "),l("ol",[l("li",[t._v("快排的partition\n"),l("ol",[l("li",[t._v("划分后可得到pivot的位置，再根据此时需要数的个数继续划分，直到k==0")])])]),t._v(" "),l("li",[t._v("堆\n"),l("ol",[l("li",[t._v("若求最大top k，维持一个最小堆，当堆满时将顶部元素和新数比较，若新数较大则移除对顶插入")]),t._v(" "),l("li",[t._v("求最小top k，维持最大堆")])])])]),t._v(" "),l("h2",{attrs:{id:"海量数据问题"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#海量数据问题"}},[t._v("#")]),t._v(" 海量数据问题")]),t._v(" "),l("ol",[l("li",[t._v("bloom filter\n"),l("ol",[l("li",[t._v("bloom filter使用一个m bit保存信息，初始全为0")]),t._v(" "),l("li",[t._v("使用n个hash函数，一个值通过n个hash后将对应位设置为1")]),t._v(" "),l("li",[t._v("查找值存在时，查看n个hash对应的位是否都为1，有重合的问题")])])]),t._v(" "),l("li",[t._v("hash\n"),l("ol",[l("li",[t._v("将大文件的内容经过hash分割未小文件，这样每个小文件的内容相同")]),t._v(" "),l("li",[t._v("若分割后的文件依旧超出内存，则可再次hash")])])]),t._v(" "),l("li",[t._v("bit map\n"),l("ol",[l("li",[t._v("用 1 bit 标记该值是否存在")]),t._v(" "),l("li",[t._v("用 2 bit 标记值是01否00存在，是否重复10")])])]),t._v(" "),l("li",[t._v("heap")])])])}),[],!1,null,null,null);a.default=v.exports}}]);