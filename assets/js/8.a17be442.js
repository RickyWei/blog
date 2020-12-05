(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(t,a,s){"use strict";s.r(a);var r=s(19),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#os"}},[t._v("#")]),t._v(" OS")]),t._v(" "),s("h2",{attrs:{id:"linux开机顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux开机顺序"}},[t._v("#")]),t._v(" linux开机顺序")]),t._v(" "),s("ol",[s("li",[t._v("加电")]),t._v(" "),s("li",[t._v("加载BIOS")]),t._v(" "),s("li",[t._v("加载磁盘中MBR（主引导分区）的grub（GRand Unified Bootloader）引导")]),t._v(" "),s("li",[t._v("加载linux内核到内存；运行/sbin/init进程")]),t._v(" "),s("li",[t._v("加载配置文件/etc/inittab")]),t._v(" "),s("li",[t._v("根据/etc/modules.conf /etc/modules.d/加载内核模块")]),t._v(" "),s("li",[t._v("根据运行级别运行rc0.d-rc6.d中相应的脚本程序，完成对应初始化工作和启动对应服务")]),t._v(" "),s("li",[t._v("启动init.d/下的系统进程")]),t._v(" "),s("li",[t._v("出现登录画面")])]),t._v(" "),s("h2",{attrs:{id:"敲击键盘时linux处理过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#敲击键盘时linux处理过程"}},[t._v("#")]),t._v(" 敲击键盘时linux处理过程")]),t._v(" "),s("ol",[s("li",[t._v("键盘控制器产生数据；并缓冲中键盘控制器寄存器中")]),t._v(" "),s("li",[t._v("价盘控制器发送中断请求")]),t._v(" "),s("li",[t._v("操作系统保存被中断进程的上线问；调用键盘的中断处理程序（又键盘的驱动程序初始化时注册）")]),t._v(" "),s("li",[t._v("将键盘控制器缓存的数据转化为ASCII加入读缓冲队列")]),t._v(" "),s("li",[t._v("显示设备驱动定时读取上述读缓冲队列加入自己的写缓冲队列；显示自己写缓冲队列中的数据")]),t._v(" "),s("li",[t._v("恢复被中断的进程")])]),t._v(" "),s("h2",{attrs:{id:"用户态和内核态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户态和内核态"}},[t._v("#")]),t._v(" 用户态和内核态")]),t._v(" "),s("ol",[s("li",[t._v("用户态和内核态"),s("img",{attrs:{src:"imgos/kernelmode.jpg",alt:"user mode&&kernel mode"}})]),t._v(" "),s("li",[t._v("32bit\n"),s("ol",[s("li",[t._v("用户态空间占0G-3G部分，内核态占3G-4G部分（高地址）")]),t._v(" "),s("li",[t._v("用户态和内核态的主要区别是权限不同，分别为（Ring3最低 Ring0最高）")]),t._v(" "),s("li",[t._v("用户态到内核态的切换方式\n"),s("ol",[s("li",[t._v("系统调用")]),t._v(" "),s("li",[t._v("异常")]),t._v(" "),s("li",[t._v("外围设备中断")])])]),t._v(" "),s("li",[t._v("具体切换流程\n"),s("ol",[s("li",[t._v("内核创建进程task_struct时，会为进程创建两个栈，用户栈和内核栈")]),t._v(" "),s("li",[t._v("在用户空间运行时cpu栈指针指向用户栈")]),t._v(" "),s("li",[t._v("切换时先将用户态堆栈指针ss和esp压入内核堆栈")])])])])]),t._v(" "),s("li",[t._v("64bit\n"),s("ol",[s("li",[t._v("总空间大小一般48bit")])])])]),t._v(" "),s("h2",{attrs:{id:"堆栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#堆栈"}},[t._v("#")]),t._v(" 堆栈")]),t._v(" "),s("ol",[s("li",[t._v("程序运行时内存布局"),s("img",{attrs:{src:"imgos/memorylayout.jpg",alt:"memory layout"}})]),t._v(" "),s("li",[t._v("栈帧结构"),s("img",{attrs:{src:"imgos/stackframe.jpg",alt:"stack frame"}})])]),t._v(" "),s("h2",{attrs:{id:"虚拟内存优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟内存优点"}},[t._v("#")]),t._v(" 虚拟内存优点")]),t._v(" "),s("ol",[s("li",[t._v("虚拟内存为每个进程提供了统一的地址空间")]),t._v(" "),s("li",[t._v("使各个程序独立安全，不同进程中的va对应不同pa，不同进程不可能访问到其他进程的pa")]),t._v(" "),s("li",[t._v("因为进程仅被分配虚拟内存页面，这些页面的数据可以映射到物理页面，也可以临时保存到磁盘上（swap）而不占用物理页面；根据需要pageout或pagein")])]),t._v(" "),s("h2",{attrs:{id:"分页与分段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分页与分段"}},[t._v("#")]),t._v(" 分页与分段")]),t._v(" "),s("ol",[s("li",[s("img",{attrs:{src:"imgos/memoryorg.jpg",alt:"memory organization"}})]),t._v(" "),s("li",[t._v("分页\n"),s("ol",[s("li",[t._v("将程序的逻辑地址空间划分为固定大小的页(page)，而物理内存划分为同样大小的页框(page frame)")]),t._v(" "),s("li",[t._v("程序加载时，可将任意一页放人内存中任意一个页框，这些页框不必连续，从而实现了离散分配")])])]),t._v(" "),s("li",[t._v("分段\n"),s("ol",[s("li",[t._v("虚拟内存空间根据用途被分为 代码段 数据段 堆 栈")])])])]),t._v(" "),s("h2",{attrs:{id:"页命中与缺页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页命中与缺页"}},[t._v("#")]),t._v(" 页命中与缺页")]),t._v(" "),s("ol",[s("li",[t._v("page hit & page fault "),s("img",{attrs:{src:"imgos/page2.jpg",alt:"page hit & fault"}})]),t._v(" "),s("li",[t._v("page hit & page fault "),s("img",{attrs:{src:"imgos/page.jpg",alt:"page hit & fault"}})]),t._v(" "),s("li",[t._v("页表存储在内存中")]),t._v(" "),s("li",[t._v("MMU中存在TLB（translation lookaside buffer）用来缓存PTE，加速查找")])]),t._v(" "),s("h2",{attrs:{id:"地址转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#地址转换"}},[t._v("#")]),t._v(" 地址转换")]),t._v(" "),s("ol",[s("li",[t._v("address translation "),s("img",{attrs:{src:"imgos/translation.jpg",alt:"address translation"}})])]),t._v(" "),s("h2",{attrs:{id:"多级页表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多级页表"}},[t._v("#")]),t._v(" 多级页表")]),t._v(" "),s("ol",[s("li",[t._v("多级页表结构 "),s("img",{attrs:{src:"imgos/level.jpg",alt:"multi level page table"}})]),t._v(" "),s("li",[t._v("多级页表减少了页表在内存中的大小")])]),t._v(" "),s("h2",{attrs:{id:"页置换算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页置换算法"}},[t._v("#")]),t._v(" 页置换算法")]),t._v(" "),s("ol",[s("li",[t._v("FIFO 淘汰最早进入内存的页面")]),t._v(" "),s("li",[t._v("LRU 淘汰最近没有使用的页面")]),t._v(" "),s("li",[t._v("LFU 淘汰最不常访问（计数最小）的页面")]),t._v(" "),s("li",[t._v("OPT 淘汰以后不会使用的页面")])]),t._v(" "),s("h2",{attrs:{id:"mmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mmap"}},[t._v("#")]),t._v(" mmap")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("void *mmap(void *addr, size_t len, int prot, int flag, int fd, off_t off );")]),t._v(" "),s("img",{attrs:{src:"imgos/mmap.jpg",alt:"mmap"}})]),t._v(" "),s("li",[t._v("实现\n"),s("ol",[s("li",[t._v("在当前进程的虚拟空间中，寻找一段空闲的满足要求的连续虚拟地址")]),t._v(" "),s("li",[t._v("为次虚拟分区分配一个vm_area_struct结构")]),t._v(" "),s("li",[t._v("将vm_area_struct插入进程的虚拟地址分区链表中")])])]),t._v(" "),s("li",[t._v("有点\n"),s("ol",[s("li",[t._v("普通read() write()会先将数据保存在内核buffer中，导致两次数据拷贝；mmap()直接拷贝到用户空间")]),t._v(" "),s("li",[t._v("mmap()使得用户空间和内核空间可以交互")]),t._v(" "),s("li",[t._v("mmap()同时也是进程间通信的方式")])])]),t._v(" "),s("li",[t._v("落盘时机\n"),s("ol",[s("li",[t._v("一定时间延迟后")]),t._v(" "),s("li",[t._v("调用msync()或munmap()")]),t._v(" "),s("li",[t._v("内存不足")]),t._v(" "),s("li",[t._v("进程退出")])])])]),t._v(" "),s("h2",{attrs:{id:"进程状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程状态"}},[t._v("#")]),t._v(" 进程状态")]),t._v(" "),s("ol",[s("li",[t._v("进程状态 "),s("img",{attrs:{src:"imgos/processstate.png",alt:"process state"}})])]),t._v(" "),s("h2",{attrs:{id:"进程调度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程调度"}},[t._v("#")]),t._v(" 进程调度")]),t._v(" "),s("ol",[s("li",[t._v("FCFS 先来先服务")]),t._v(" "),s("li",[t._v("SJF 短作业优先\n"),s("ol",[s("li",[t._v("长作业可能饥饿")])])]),t._v(" "),s("li",[t._v("基于优先权\n"),s("ol",[s("li",[t._v("非抢占式")]),t._v(" "),s("li",[t._v("抢占式")]),t._v(" "),s("li",[t._v("低优先级可能饥饿")])])]),t._v(" "),s("li",[t._v("响应比优先\n"),s("ol",[s("li",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-msub",[s("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[s("mjx-c",{attrs:{c:"R"}})],1),s("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[s("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[s("mjx-c",{attrs:{c:"p"}})],1)],1)],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mfrac",{attrs:{space:"4"}},[s("mjx-frac",[s("mjx-num",[s("mjx-nstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("等")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("待")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("时")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("间")])],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"+"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("要")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("求")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("夫")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("妇")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("时")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("间")])],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line"),s("mjx-row",[s("mjx-den",[s("mjx-dstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("要")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("求")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("服")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("务")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("时")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("间")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)])]),t._v(" "),s("li",[t._v("时间片轮转")]),t._v(" "),s("li",[t._v("多级反馈队列\n"),s("ol",[s("li",[t._v("按优先级划分多个就绪队列，每个队列的时间片大小随优先级增大而减小")]),t._v(" "),s("li",[t._v("仅当i-1队列为空时，队列i的任务被执行")]),t._v(" "),s("li",[t._v("新线程进入时加入优先级最高的队列，执行完时间片后移入下一个队列")]),t._v(" "),s("li",[t._v("在若干cpu时间后将低优先级队列的进程放入高优先级队列防止饥饿")])])]),t._v(" "),s("li",[t._v("CFS 完全公平算法\n"),s("ol",[s("li",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("分")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("配")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("给")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("进")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("程")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("的")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("运")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("行")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("时")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("间")]),s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mfrac",{attrs:{space:"4"}},[s("mjx-frac",[s("mjx-num",[s("mjx-nstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("调")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("度")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("周")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("期")])],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2217"}})],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("进")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("程")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("权")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("重")])],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line"),s("mjx-row",[s("mjx-den",[s("mjx-dstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("所")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("有")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("进")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("程")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("权")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("重")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("和")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" 其中调度周期是遍历所有task_running状态的进程的时间和")],1),t._v(" "),s("li",[s("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[s("mjx-math",{staticClass:" MJX-TEX"},[s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"v"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"r"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"u"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"n"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"t"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"i"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"m"}})],1),s("mjx-mi",{staticClass:"mjx-i"},[s("mjx-c",{attrs:{c:"e"}})],1),s("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[s("mjx-c",{attrs:{c:"="}})],1),s("mjx-mfrac",{attrs:{space:"4"}},[s("mjx-frac",[s("mjx-num",[s("mjx-nstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("实")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("际")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("运")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("行")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("时")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("间")])],1),s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"2217"}})],1),s("mjx-mn",{staticClass:"mjx-n"},[s("mjx-c",{attrs:{c:"1"}}),s("mjx-c",{attrs:{c:"0"}}),s("mjx-c",{attrs:{c:"2"}}),s("mjx-c",{attrs:{c:"4"}})],1)],1)],1),s("mjx-dbox",[s("mjx-dtable",[s("mjx-line"),s("mjx-row",[s("mjx-den",[s("mjx-dstrut"),s("mjx-mrow",{attrs:{size:"s"}},[s("mjx-mo",{staticClass:"mjx-n"},[s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("进")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("程")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("权")]),s("mjx-utext",{staticStyle:{"font-family":"serif"},attrs:{variant:"normal"}},[t._v("重")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),s("li",[t._v("根据vruntime的大小决定运行顺序（小的优先），红黑树记录vruntime-min_vruntime防止值溢出")]),t._v(" "),s("li",[t._v("权重通过nice值转换，nice越大权重越低")]),t._v(" "),s("li",[t._v("新进程的vruntime的红黑树中记录的min_vruntime，防止旧进程饥饿")]),t._v(" "),s("li",[t._v("休眠进程被唤醒时，vruntime以min_vruntime为基础，并进行少量补偿")]),t._v(" "),s("li",[t._v("进程在cpu间切换时，首先减去当前cpu的min_vruntime转移后加上目标cpu的min_vruntime")])])])]),t._v(" "),s("h2",{attrs:{id:"孤儿进程与僵尸进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#孤儿进程与僵尸进程"}},[t._v("#")]),t._v(" 孤儿进程与僵尸进程")]),t._v(" "),s("ol",[s("li",[t._v("孤儿进程\n"),s("ol",[s("li",[t._v("父进程退出的进程")]),t._v(" "),s("li",[t._v("孤儿进程会被init进程收养")])])]),t._v(" "),s("li",[t._v("僵尸进程\n"),s("ol",[s("li",[t._v("子进程退出但父进程未调用wait()或waitpid()，那么子进程仍然保留在系统中，成为僵尸进程defunct")]),t._v(" "),s("li",[t._v("僵尸进程会占用占用资源")]),t._v(" "),s("li",[t._v("解决\n"),s("ol",[s("li",[t._v("父进程代码中调用wait()或waitpid()")]),t._v(" "),s("li",[t._v("子进程退出时向父进程发送SIGCHILD信号，父进程处理SIGCHILD信号。在信号处理函数中调用wait进行处理僵尸进程")]),t._v(" "),s("li",[t._v("fork()两次，子进程创建孙子进程，子进程直接退出，孙子进程执行操作，此时孙子进程成为孤儿交由init管理")]),t._v(" "),s("li",[t._v("kill，kill不掉时kill僵尸进程的父进程")]),t._v(" "),s("li",[t._v("重启")])])])])])]),t._v(" "),s("h2",{attrs:{id:"打开文件表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开文件表"}},[t._v("#")]),t._v(" 打开文件表")]),t._v(" "),s("ol",[s("li",[t._v("每个进程都有一个打开文件表"),s("img",{attrs:{src:"imgos/filetable.png",alt:"file table"}})])]),t._v(" "),s("h2",{attrs:{id:"fork-vfork-clone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork-vfork-clone"}},[t._v("#")]),t._v(" fork vfork clone")]),t._v(" "),s("ol",[s("li",[t._v("fork() 的子进程是父进程的完全副本\n"),s("ol",[s("li",[t._v("相同\n"),s("ol",[s("li",[t._v("Real user ID, real group ID, effective user ID, and effective group ID")]),t._v(" "),s("li",[t._v("Supplementary group IDs")]),t._v(" "),s("li",[t._v("Process group ID")]),t._v(" "),s("li",[t._v("Session ID")]),t._v(" "),s("li",[t._v("Controlling terminal")]),t._v(" "),s("li",[t._v("The set-user-ID and set-group-ID flags")]),t._v(" "),s("li",[t._v("Current working directory")]),t._v(" "),s("li",[t._v("Root directory")]),t._v(" "),s("li",[t._v("File mode creation mask")]),t._v(" "),s("li",[t._v("Signal mask and dispositions")]),t._v(" "),s("li",[t._v("The close-on-exec flag for any open file descriptors")]),t._v(" "),s("li",[t._v("Environment")]),t._v(" "),s("li",[t._v("Attached shared memory segments")]),t._v(" "),s("li",[t._v("Memory mappings")]),t._v(" "),s("li",[t._v("Resource limits")])])]),t._v(" "),s("li",[t._v("不同\n"),s("ol",[s("li",[t._v("The return values from fork are different.")]),t._v(" "),s("li",[t._v("The process IDs are different.")]),t._v(" "),s("li",[t._v("The two processes have different parent process IDs: the parent process ID of the child is the parent; the  parent process ID of the parent doesn’t change.")]),t._v(" "),s("li",[t._v("The child’s tms_utime, tms_stime, tms_cutime, and tms_cstime values are set to 0")]),t._v(" "),s("li",[t._v("File locks set by the parent are not inherited by the child.")]),t._v(" "),s("li",[t._v("Pending alarms are cleared for the child.")]),t._v(" "),s("li",[t._v("The set of pending signals for the child is set to the empty set")])])]),t._v(" "),s("li",[t._v("fork使用cow写时复制技术，开始时子进程共享父进程空间（页帧），仅当子进程修改数据时复制")])])]),t._v(" "),s("li",[t._v("vfork()\n"),s("ol",[s("li",[t._v("vfork保证子进程先运行，父进程被挂起，适用于子进程立即调用exec()的情形")]),t._v(" "),s("li",[t._v("vfork直接共享父进程空间")]),t._v(" "),s("li",[t._v("vfork的子进程退出时应使用exit() 而非return")])])]),t._v(" "),s("li",[t._v("clone()\n"),s("ol",[s("li",[t._v("clone函数有更多的参数控制如何复制进程，linux的pthread使用clone创建")])])])]),t._v(" "),s("h2",{attrs:{id:"信号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信号"}},[t._v("#")]),t._v(" 信号")]),t._v(" "),s("ol",[s("li",[t._v("常见信号 "),s("img",{attrs:{src:"imgos/signal.jpg",alt:"signal"}})]),t._v(" "),s("li",[t._v("常见信号产生\n"),s("ol",[s("li",[t._v("ctrl+c SIGINT")]),t._v(" "),s("li",[t._v("子进程结束 SIGCHILD")]),t._v(" "),s("li",[t._v("terminal关闭 SIGHUB")])])])]),t._v(" "),s("h2",{attrs:{id:"linux进程优雅退出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux进程优雅退出"}},[t._v("#")]),t._v(" linux进程优雅退出")]),t._v(" "),s("ol",[s("li",[t._v("设置信号处理函数，在进程结束时清理资源")])]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<signal.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<unistd.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SIGINT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SIGINT\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SIGKILL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SIGKILL\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SIGSEGV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SIGSEGV\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" SIGTERM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SIGTERM\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"clear resource...\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"graceful exit \\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("signal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SIGINT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i %d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("h2",{attrs:{id:"进程间通信方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信方式"}},[t._v("#")]),t._v(" 进程间通信方式")]),t._v(" "),s("ol",[s("li",[t._v("无名管道 pipe")]),t._v(" "),s("li",[t._v("有名管道 fifo")]),t._v(" "),s("li",[t._v("信号 signal")]),t._v(" "),s("li",[t._v("消息队列")]),t._v(" "),s("li",[t._v("共享内存")]),t._v(" "),s("li",[t._v("信号量 semaphore")]),t._v(" "),s("li",[t._v("套接字 socket")])]),t._v(" "),s("h2",{attrs:{id:"进程与线程区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程区别"}},[t._v("#")]),t._v(" 进程与线程区别")]),t._v(" "),s("ol",[s("li",[t._v("linux下线程是通过进程实现的（线程是轻量级进程）")]),t._v(" "),s("li",[t._v("同一个进程下的线程共享该进程空间，每增加一个线程内存使用仅多一个栈的大小")])]),t._v(" "),s("h2",{attrs:{id:"线程同步方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程同步方式"}},[t._v("#")]),t._v(" 线程同步方式")]),t._v(" "),s("ol",[s("li",[t._v("互斥量")]),t._v(" "),s("li",[t._v("条件变量")]),t._v(" "),s("li",[t._v("信号量")])]),t._v(" "),s("h2",{attrs:{id:"互斥量的实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#互斥量的实现方式"}},[t._v("#")]),t._v(" 互斥量的实现方式")]),t._v(" "),s("ol",[s("li",[t._v("操作系统testandset()\n"),s("ol",[s("li",[t._v("保证对互斥量的检查和赋值是原子的")])])])]),t._v(" "),s("h2",{attrs:{id:"死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#死锁"}},[t._v("#")]),t._v(" 死锁")]),t._v(" "),s("ol",[s("li",[t._v("死锁条件\n"),s("ol",[s("li",[t._v("互斥条件：一个资源每次只能被一个进程使用")]),t._v(" "),s("li",[t._v("占有且等待：一个进程因请求资源而阻塞时，对已获得的资源保持不放")]),t._v(" "),s("li",[t._v("不可强行占有:进程已获得的资源，在末使用完之前，不能强行剥夺")]),t._v(" "),s("li",[t._v("循环等待条件:若干进程之间形成一种头尾相接的循环等待资源关系")])])]),t._v(" "),s("li",[t._v("处理死锁\n"),s("ol",[s("li",[t._v("死锁预防：通过设置某些限制条件，去破坏死锁的四个条件中的一个或几个条件，来预防发生死锁")]),t._v(" "),s("li",[t._v("死锁避免：允许前三个必要条件，但通过明智的选择，确保永远不会到达死锁点")]),t._v(" "),s("li",[t._v("死锁检测：不须实现采取任何限制性措施，而是允许系统在运行过程发生死锁，但可通过系统设置的检测机构及时检测出死锁的发生，并精确地确定于死锁相关的进程和资源，然后采取适当的措施，从系统中将已发生的死锁清除掉")]),t._v(" "),s("li",[t._v("死锁解除：撤销或挂起一些进程，以便回收一些资源，再将这些资源分配给已处于阻塞状态的进程")])])])]),t._v(" "),s("h2",{attrs:{id:"linux-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-命令"}},[t._v("#")]),t._v(" Linux 命令")]),t._v(" "),s("ol",[s("li",[t._v("如何将进程放置后台和前台\n"),s("ol",[s("li",[s("code",[t._v("./server &")])]),t._v(" "),s("li",[s("code",[t._v("bg jobid")]),t._v(" jobid通过jobs获取")]),t._v(" "),s("li",[s("code",[t._v("fg jobid")])])])]),t._v(" "),s("li",[t._v("命令行中的信号\n"),s("ol",[s("li",[t._v("ctrl+c SIGINT 结束进程")]),t._v(" "),s("li",[t._v("ctrl+z SIGTSTP 将一个正在前台执行的命令放到后台，并且处于暂停状态，不可执行")])])]),t._v(" "),s("li",[t._v("ssh断开后后台进程\n"),s("ol",[s("li",[t._v("在ssh中启动的后台进程会挂")]),t._v(" "),s("li",[s("code",[t._v("nohub ./server &")]),t._v(" 在用户注销或者网络断开时终端会受到HUP信号而关闭所有子进程，nohub让终端忽略")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);