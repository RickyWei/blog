(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(t,s,a){t.exports=a.p+"assets/img/lsm.1d35d6e3.png"},366:function(t,s,a){t.exports=a.p+"assets/img/lsmmerge.d1f455d5.png"},367:function(t,s,a){t.exports=a.p+"assets/img/lsmsdu.4518c2e1.png"},448:function(t,s,a){"use strict";a.r(s);var e=a(19),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"the-log-structured-merge-tree"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-log-structured-merge-tree"}},[t._v("#")]),t._v(" The Log-Structured Merge-Tree")]),t._v(" "),e("h2",{attrs:{id:"idea"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idea"}},[t._v("#")]),t._v(" Idea")]),t._v(" "),e("ol",[e("li",[t._v("Use high speed of sequental write of disk")])]),t._v(" "),e("h2",{attrs:{id:"component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component"}},[t._v("#")]),t._v(" Component")]),t._v(" "),e("p",[e("img",{attrs:{src:a(365),alt:"LSM component"}})]),t._v(" "),e("ol",[e("li",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(" stsys in memory all the time")],1),t._v(" "),e("li",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v(" in disk but some of frequence referral page in memory")],1)]),t._v(" "),e("h2",{attrs:{id:"insert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[t._v("#")]),t._v(" Insert")]),t._v(" "),e("ol",[e("li",[t._v("Write insert operation to log in order to recovery in case")]),t._v(" "),e("li",[t._v("Insert new entry to "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1)],1),t._v(" "),e("li",[t._v("When the size of "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(" larger than some threshold, merge to "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1)],1),t._v(" "),e("li",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v(" likes B-tree, but its full")],1)]),t._v(" "),e("h2",{attrs:{id:"merge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),e("p",[e("img",{attrs:{src:a(366),alt:"LSM Merge"}})]),t._v(" "),e("ol",[e("li",[t._v("Read "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v(" unmerged leaf node into emptying block in memory")],1),t._v(" "),e("li",[t._v("Read "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(" from leaf node and merge it with emptying block")],1),t._v(" "),e("li",[t._v("Write merge result into filling block, delete used node from "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1)],1),t._v(" "),e("li",[t._v("Do step 2-3 until the filling block is full, append this block into disk's new position")])]),t._v(" "),e("p",[t._v("Notes")]),t._v(" "),e("ol",[e("li",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(" does not use all ettries to merege. It remains frequent visited entry")],1),t._v(" "),e("li",[e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1)],1),t._v("'s old block can be used for recovery. New block is written on new position")],1),t._v(" "),e("li",[t._v("Usually, there are some unfull filling block, which will be stored in memory for next merge")]),t._v(" "),e("li",[t._v("When set checkpoint, cached info will be written to disk")])]),t._v(" "),e("h2",{attrs:{id:"search-delete-and-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#search-delete-and-update"}},[t._v("#")]),t._v(" Search, delete and update")]),t._v(" "),e("p",[e("img",{attrs:{src:a(367),alt:"LSM SDU"}})]),t._v(" "),e("p",[t._v("Search")]),t._v(" "),e("ol",[e("li",[t._v("Search happens from "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(" to "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"k"}})],1)],1)],1)],1)],1)],1),t._v(" "),e("li",[t._v("Latest T time visited entries are cached in "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(", kT time visited entries are cached in "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"k"}})],1)],1)],1)],1)],1),t._v(". This method can reduce search time")],1)]),t._v(" "),e("p",[t._v("Delete")]),t._v(" "),e("ol",[e("li",[t._v("Delete operation is done by insert")]),t._v(" "),e("li",[t._v("Check if deleted entry exists in "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(", if not, write a kv, which value is entry which is needed to be deleted")],1),t._v(" "),e("li",[t._v("During merge, delete entry which has the same value as the kv")])]),t._v(" "),e("p",[t._v("Update")]),t._v(" "),e("ol",[e("li",[t._v("Set the entry as delete")]),t._v(" "),e("li",[t._v("When merge out from "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1),t._v(", write the new value in "),e("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[e("mjx-math",{staticClass:" MJX-TEX"},[e("mjx-msub",[e("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[e("mjx-c",{attrs:{c:"C"}})],1),e("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[e("mjx-mn",{staticClass:"mjx-n",attrs:{size:"s"}},[e("mjx-c",{attrs:{c:"0"}})],1)],1)],1)],1)],1)],1)])])}),[],!1,null,null,null);s.default=i.exports}}]);