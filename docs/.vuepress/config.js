module.exports = {
    base: '/blog/',
    title: '茴香豆有四种写法呢',
    description: 'need to learn',
    serviceWorker: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/RickyWei' },
            { text: 'LinkedIn', link: 'https://www.linkedin.com/in/ruiji-wei' }
        ],
        sidebar: {
            sidebarDepth: 2,
            '/': [
                {
                    title: '算法',
                    path: '/algorithm/',
                    children: [
                        '/algorithm/力扣数据规模对应算法复杂度',
                        '/algorithm/排序',
                        '/algorithm/堆',
                        '/algorithm/搜索',
                        '/algorithm/贪心',
                        '/algorithm/动态规划',
                        '/algorithm/树',
                    ]
                },
                {
                    title: 'C/C++',
                    path: '/cpp/',
                    children: [
                        'cpp/编译',
                        'cpp/宏定义',
                        'cpp/RAII与智能指针',
                        'cpp/opencv',
                        'cpp/进程备份库CRIU',
                    ]
                },
                {
                    title: '网络',
                    path: '/network/',
                    children: [
                        '/network/应用层',
                        '/network/传输层',
                        '/network/网络层',
                        '/network/链路层',
                        '/network/物理层',
                    ]
                },
                {
                    title: 'OS',
                    path: '/os/',
                    children: [
                        '/os/UnixIO',
                        '/os/Unix文件系统',
                        '/os/Unix进程',
                        '/os/Unix线程',
                        '/os/Unix信号',
                    ]
                },
            ]
        },
        lastUpdated: 'Last Updated'
    },
    plugins: [
        'vuepress-plugin-mathjax',
        'vuepress-plugin-zooming',
        'vuepress-plugin-nprogress',
        'copyright', {
            minLength: 100,
            authorName: 'RickyWei'
        }
    ]
}