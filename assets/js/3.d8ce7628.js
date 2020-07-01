(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{361:function(t,e,a){t.exports=a.p+"assets/img/dns.ee50275f.jpg"},362:function(t,e,a){t.exports=a.p+"assets/img/url.b722148e.png"},363:function(t,e,a){t.exports=a.p+"assets/img/httprequestheader.9cc09f56.png"},364:function(t,e,a){t.exports=a.p+"assets/img/httpcache.f09fe25a.png"},365:function(t,e,a){t.exports=a.p+"assets/img/HTTPNegoServer.7019ed3a.png"},366:function(t,e,a){t.exports=a.p+"assets/img/https1.8b5117b6.png"},390:function(t,e,a){"use strict";a.r(e);var s=a(26),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"应用层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),s("h2",{attrs:{id:"dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),s("h3",{attrs:{id:"域名层级结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#域名层级结构"}},[t._v("#")]),t._v(" 域名层级结构")]),t._v(" "),s("p",[t._v("主机名.次级域名.顶级域名.根域名")]),t._v(" "),s("h3",{attrs:{id:"dns记录类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns记录类型"}},[t._v("#")]),t._v(" DNS记录类型")]),t._v(" "),s("ol",[s("li",[t._v("A：地址记录（Address），返回域名指向的IP地址")]),t._v(" "),s("li",[t._v("NS：域名服务器记录（Name Server），返回保存下一级域名信息的服务器地址该记录只能设置为域名，不能设置为IP地址")]),t._v(" "),s("li",[t._v("MX：邮件记录（Mail eXchange），返回接收电子邮件的服务器地址")]),t._v(" "),s("li",[t._v("CNAME：规范名称记录（Canonical Name），返回另一个域名，即当前查询的域名是另一个域名的跳转")]),t._v(" "),s("li",[t._v("PTR：逆向查询记录（Pointer Record），只用于从IP地址查询域名")])]),t._v(" "),s("h3",{attrs:{id:"ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ttl"}},[t._v("#")]),t._v(" TTL")]),t._v(" "),s("p",[t._v("TTL 设置了DNS cache过期时间，较短的 TTL 是的记录能够快速刷新")]),t._v(" "),s("h3",{attrs:{id:"dns解析过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析过程"}},[t._v("#")]),t._v(" DNS解析过程")]),t._v(" "),s("p",[s("img",{attrs:{src:a(361),alt:"DNS解析过程"}})]),t._v(" "),s("ol",[s("li",[t._v("查询local DNS server，本地DNS服务器一般都是你的网络接入服务器商提供，比如中国电信，中国移动")]),t._v(" "),s("li",[t._v("查询www.163.com的DNS请求到达本地DNS服务器之后\n"),s("ol",[s("li",[t._v("本地DNS服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果")]),t._v(" "),s("li",[t._v("没有缓存时，本地DNS服务器还要向DNS根服务器进行查询")])])]),t._v(" "),s("li",[t._v("根DNS服务器没有记录具体的域名和IP地址的对应关系，而是告诉本地DNS服务器，你可以到域服务器上去继续查询，并给出域服务器的地址")]),t._v(" "),s("li",[t._v("本地DNS服务器继续向域服务器发出请求，在这个例子中，请求的对象是.com域服务器.com域服务器收到请求之后，也不会直接返回域名和IP地址的对应关系，而是告诉本地DNS服务器，你的域名的解析服务器的地址")]),t._v(" "),s("li",[t._v("最后，本地DNS服务器向域名的解析服务器发出请求，这时就能收到一个域名和IP地址对应关系，本地DNS服务器不仅要把IP地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问")])]),t._v(" "),s("h2",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" Http")]),t._v(" "),s("h3",{attrs:{id:"http1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-0"}},[t._v("#")]),t._v(" http1.0")]),t._v(" "),s("h4",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),s("p",[t._v("scheme://host[:port#]/path/…/[?query-string][#anchor]\n"),s("img",{attrs:{src:a(362),alt:"url"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("功能")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("scheme")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("访问服务器以获取资源时要使用哪种协议，比如，http，https 和 FTP 等")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("host")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP 服务器的 IP 地址或域名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("port#")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP 服务器的默认端口是 80，这种情况下端口号可以省略，如果使用了别的端口，必须指明")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("path")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("访问资源的路径")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("query-string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("发给 http 服务器的数据")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("anchor")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("锚")])])])]),t._v(" "),s("h4",{attrs:{id:"请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求"}},[t._v("#")]),t._v(" 请求")]),t._v(" "),s("p",[t._v("HTTP 的请求报文分为三个部分：请求行、请求头、请求体")]),t._v(" "),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token request-line"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("GET")]),t._v(" /books/?sex=man&name=Professional HTTP/1.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Host:")]),t._v(" www.example.com\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("User-Agent:")]),t._v(" Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.6)\nGecko/20050225 Firefox/1.0.1\n"),s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Connection:")]),t._v(" Keep-Alive\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:a(363),alt:"http request header"}})]),t._v(" "),s("h5",{attrs:{id:"请求行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求行"}},[t._v("#")]),t._v(" 请求行")]),t._v(" "),s("p",[t._v("请求行（Request line）分为三个部分：请求方法、请求地址和协议版本")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("方法名")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("功能")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("GET")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("向指定的资源发出“显示”请求，使用 GET 方法应该只用在读取数据上，而不应该用于产生“副作用”的操作中")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("POST")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求文本中。这个请求可能会创建新的资源或者修改现有资源，或两者皆有。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("PUT")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("向指定资源位置上传其最新内容")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("DELETE")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("请求服务器删除 Request-URI 所标识的资源")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("OPTIONS")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("使服务器传回该资源所支持的所有HTTP请求方法。用*来代替资源名称，向 Web 服务器发送 OPTIONS 请求，可以测试服务器功能是否正常运作")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("HEAD")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("与 GET 方法一样，都是向服务器发出指定资源的请求，只不过服务器将不传回资源的本文部分，它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中关于该资源的信息（原信息或称元数据）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("TRACE")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("显示服务器收到的请求，主要用于测试或诊断")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("CONNECT")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("HTTP/1.1 中预留给能够将连接改为通道方式的代理服务器。通常用于 SSL 加密服务器的链接（经由非加密的 HTTP 代理服务器）")])])])]),t._v(" "),s("h5",{attrs:{id:"请求头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求头"}},[t._v("#")]),t._v(" 请求头")]),t._v(" "),s("p",[t._v("请求头用 "),s("strong",[t._v("键: 值")]),t._v(" 表示，注意冒号后面有一个空格")]),t._v(" "),s("h5",{attrs:{id:"请求体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求体"}},[t._v("#")]),t._v(" 请求体")]),t._v(" "),s("h4",{attrs:{id:"响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应"}},[t._v("#")]),t._v(" 响应")]),t._v(" "),s("h5",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("状态码")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("对应的信息")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("1xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("提示信息—表示请求已接收，继续处理")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("2xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于表示请求已被成功接收、理解、接收")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("3xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于表示资源（网页等）被永久转移到其它 URL，也就是所谓的重定向")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("4xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("客户端错误—请求有语法错误或者请求无法实现")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("5xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("服务器端错误—服务器未能实现合法的请求")])])])]),t._v(" "),s("ul",[s("li",[t._v("204 No Content 服务器接受的请求已成功处理，但返回的响应报文的主体部分不包含实体（浏览器页面不更新，仅发送信息给服务器）")]),t._v(" "),s("li",[t._v("206 Partial Content 客户端进行了范围请求，而服务器成功执行了这部分请求")]),t._v(" "),s("li",[t._v("301 Moved Permanently 永久性重定向，请求的资源已经分配了新的URI，以后应该使用资源现在所指的URI")]),t._v(" "),s("li",[t._v("302 Found 临时性重定向，请求的资源临时分配了新的URI，希望用户本次可以使用新的URI访问\n注意：当301,302,303响应状态码返回时，几乎所有的浏览器会把POST改成GET，并删除请求报文内的主体，之后请求会自动再次发送")]),t._v(" "),s("li",[t._v("304 Not Modified 服务器端资源未改变，可直接使用客户端未过期的缓存，不包含任何响应的主体部分")]),t._v(" "),s("li",[t._v("400 Bad Request 请求报文中存在语法错误")]),t._v(" "),s("li",[t._v("401 Unauthorized 请求需要有通过HTTP认证的认证信息。另外如果之前已进行一次请求，则表示用户认证失败")]),t._v(" "),s("li",[t._v("403 Forbidden 对请求资源的访问被服务器拒绝了，如未获得文件系统的访问授权，访问权限出现某些问题")]),t._v(" "),s("li",[t._v("404 Not Found 服务器上没有请求的资源")]),t._v(" "),s("li",[t._v("499 client has closed connection 服务器端处理的时间过长，客户端主动断开链接，ngix定义的状态码")]),t._v(" "),s("li",[t._v("500 Internal Server Error 服务器在执行请求时发生了错误，Bug或临时故障")]),t._v(" "),s("li",[t._v("503 Service Unavailable 服务器暂时处于超负荷或正在进行停机维护，现在无法处理请求")])]),t._v(" "),s("h5",{attrs:{id:"响应头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应头"}},[t._v("#")]),t._v(" 响应头")]),t._v(" "),s("h5",{attrs:{id:"响应体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应体"}},[t._v("#")]),t._v(" 响应体")]),t._v(" "),s("h4",{attrs:{id:"http-缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存"}},[t._v("#")]),t._v(" http 缓存")]),t._v(" "),s("p",[s("img",{attrs:{src:a(364),alt:"http cache"}})]),t._v(" "),s("h4",{attrs:{id:"http-分块传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-分块传输"}},[t._v("#")]),t._v(" http 分块传输")]),t._v(" "),s("h4",{attrs:{id:"http-内容协商"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-内容协商"}},[t._v("#")]),t._v(" http 内容协商")]),t._v(" "),s("p",[t._v("在服务端驱动型协商机制或者主动协商机制中，浏览器（或者其他任何类型的用户代理）会随同 URL 发送一系列的消息头。这些消息头描述了用户倾向的选择。服务器则以此为线索，通过内部算法来选择最佳方案提供给客户端")]),t._v(" "),s("p",[s("img",{attrs:{src:a(365),alt:"http negotiation"}})]),t._v(" "),s("h4",{attrs:{id:"http-虚拟主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-虚拟主机"}},[t._v("#")]),t._v(" http 虚拟主机")]),t._v(" "),s("h4",{attrs:{id:"http-通信数据转发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-通信数据转发"}},[t._v("#")]),t._v(" http 通信数据转发")]),t._v(" "),s("h3",{attrs:{id:"http1-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http1-1"}},[t._v("#")]),t._v(" http1.1")]),t._v(" "),s("ol",[s("li",[t._v("m 默认使用长连接，一次TCP能进行多粗http通信")]),t._v(" "),s("li",[t._v("+ 默认持久连接")]),t._v(" "),s("li",[t._v("+ 管线化")]),t._v(" "),s("li",[t._v("+ 断点续传\n"),s("ol",[s("li",[t._v("使用范围请求，在http请求增加请求头 Ranges: bytes=0-")]),t._v(" "),s("li",[t._v("多重范围请求秩序包含多个范围 bytes=0-50, 100-150")]),t._v(" "),s("li",[t._v("响应包含\n"),s("ul",[s("li",[t._v("Accept-Ranges: none(不支持)/bytes（支持时，单位）")]),t._v(" "),s("li",[t._v("content-Range: bytes 0-1023/146515")])])])])]),t._v(" "),s("li",[t._v("+ host字段")]),t._v(" "),s("li",[t._v("+ Cache-Control\n"),s("ol",[s("li",[t._v("用来代替http1.0的 Expires")])])])]),t._v(" "),s("h3",{attrs:{id:"http2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2-0"}},[t._v("#")]),t._v(" http2.0")]),t._v(" "),s("ol",[s("li",[t._v("+ 使用二进制，而非明文文本格式传输")]),t._v(" "),s("li",[t._v("+ 完全多路复用")]),t._v(" "),s("li",[t._v("+ 报头压缩")]),t._v(" "),s("li",[t._v("+ 服务可主动推送到客户端缓存中")])]),t._v(" "),s("h3",{attrs:{id:"https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[t._v("#")]),t._v(" https")]),t._v(" "),s("ol",[s("li",[t._v("https = http + TLS/SSL\n"),s("img",{attrs:{src:a(366),alt:"https"}})])])])}),[],!1,null,null,null);e.default=l.exports}}]);