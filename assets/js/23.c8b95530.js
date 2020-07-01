(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{386:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"宏定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏定义"}},[s._v("#")]),s._v(" 宏定义")]),s._v(" "),a("h2",{attrs:{id:"宏定义的本质是-替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏定义的本质是-替换"}},[s._v("#")]),s._v(" 宏定义的本质是 "),a("strong",[s._v("替换")])]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 简单宏定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #define 宏名 字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" PI 3.14")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 带参数宏定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// #define 宏名 （参数表） 宏体")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" ADDONE(x) (x + 1)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"宏替换时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏替换时机"}},[s._v("#")]),s._v(" 宏替换时机")]),s._v(" "),a("p",[s._v("预处理阶段")]),s._v(" "),a("h2",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[s._v("#")]),s._v(" 常见错误")]),s._v(" "),a("ol",[a("li",[s._v("使用必要的括号")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("do{}while(0)")]),s._v(" 包含多条语句")])]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" SQUARE(x) x* x")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SQUARE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tmp = 3 + 3 * 3 + 3")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" SQUARE(x) ((x) * (x))")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SQUARE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tmp = ((3 + 3) * (3 + 3))")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"宏定义规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏定义规则"}},[s._v("#")]),s._v(" 宏定义规则")]),s._v(" "),a("ol",[a("li",[s._v("宏名用大写，末尾无分号")]),s._v(" "),a("li",[s._v("宏定义的参数是无类型的，不做语法检查，不做表达式求解，只替换")]),s._v(" "),a("li",[s._v("宏定义通常在文件的最开头")]),s._v(" "),a("li",[s._v("宏定义可嵌套，但字符串 "),a("code",[s._v('""')]),s._v(" 中永远不包含宏")])]),s._v(" "),a("h2",{attrs:{id:"特殊符号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊符号"}},[s._v("#")]),s._v(" 特殊符号")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "x"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" TOSTR(x) #x")]),s._v("\nstring s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TOSTR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//"123"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// xy")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" CONN(x, y) x##y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// a=123456")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"常用宏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用宏"}},[s._v("#")]),s._v(" 常用宏")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 防止重复包含")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("ifndef")]),s._v(" _HEADER_H")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" _HEADER_H")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HEADER")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("endif")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//预定义的宏")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__DATE__")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__TIME__")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__FILE__")]),s._v("\n__FUNCTION__\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("__LINE__")]),s._v("\n__cplusplus\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//DEBUG")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" DBG(fmt, ...)             \\\n    do {                          \\\n        printf(fmt, __VA_ARGS__); \\\n    } while (0)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);