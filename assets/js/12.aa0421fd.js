(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{360:function(e,t,r){e.exports=r.p+"assets/img/sharedptrfunc.3982d8d5.jpg"},432:function(e,t,r){"use strict";r.r(t);var a=r(19),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"raii-and-smart-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raii-and-smart-pointer"}},[e._v("#")]),e._v(" RAII and Smart Pointer")]),e._v(" "),a("h2",{attrs:{id:"raii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raii"}},[e._v("#")]),e._v(" RAII")]),e._v(" "),a("p",[e._v("RAII(Resource Acquisition Is Initialization) uses the properity that stack lock object calls destructor automatically when leaves scope to manage resource")]),e._v(" "),a("ol",[a("li",[e._v("Wrap resource into a class\n"),a("ol",[a("li",[e._v("Constructor, requests resource or throw exception")]),e._v(" "),a("li",[e._v("Destructor, release resource and never thrw exception")])])]),e._v(" "),a("li",[e._v("Always use resouce through RAII class")])]),e._v(" "),a("h2",{attrs:{id:"smart-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smart-pointer"}},[e._v("#")]),e._v(" Smart Pointer")]),e._v(" "),a("p",[e._v("Smart pointer is a kind of RAII, uses reference count to manage resource")]),e._v(" "),a("h3",{attrs:{id:"shared-ptr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-ptr"}},[e._v("#")]),e._v(" shared_ptr")]),e._v(" "),a("ol",[a("li",[e._v("Strange reference, release resource when ref count == 0")]),e._v(" "),a("li",[a("img",{attrs:{src:r(360),alt:"shared_ptr function"}})]),e._v(" "),a("li",[e._v("If the container, like "),a("code",[e._v("vector<shared_ptr>")]),e._v(", has element of shared_ptr, we need to delete it from container to reduce ref count to 0 or use weak_ptr")]),e._v(" "),a("li",[e._v("boost::bind() will copy the parameter. If argument has type of shared_ptr, the life time must longer than the boost::function object")])]),e._v(" "),a("h3",{attrs:{id:"weak-ptr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weak-ptr"}},[e._v("#")]),e._v(" weak_ptr")]),e._v(" "),a("ol",[a("li",[e._v("Weak reference, dose not increate ref count")]),e._v(" "),a("li",[e._v("Can use weak_ptr to avoid circular reference")]),e._v(" "),a("li",[e._v("Can be prompted to shared_ptr")]),e._v(" "),a("li",[e._v("Weak callback means do something when object exists otherwise nothing. Try to promote weak_ptr to shared_ptr to check existence of an object.")])]),e._v(" "),a("h3",{attrs:{id:"unique-ptr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unique-ptr"}},[e._v("#")]),e._v(" unique_ptr")]),e._v(" "),a("ol",[a("li",[e._v("唯一")])])])}),[],!1,null,null,null);t.default=s.exports}}]);