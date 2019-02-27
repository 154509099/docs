module.exports = {
    base: '/docs/',
    title: '前端文档库',
    description: '前端文档库中心',
    dest: './dist',
    themeConfig: {
        lastUpdated: '更新时间', // string | boolean
        nav: [
            { text: '指南', link: '/' },
            { text: '技术学习', link: '/study/vscode-debug-document' },
            { text: '编码规范', link: '/specification/vue-style-guide' },
        ],
        sidebar: [
            '/',
            {
                title: '技术学习',
                collapsable: false,
                children: [
                    '/study/vscode-debug-document',
                    '/study/about-work',
                    '/study/some-javascript-recommend',
                    '/study/vue-support-typescript',
                    '/study/vue-cli3-use-typescript',
                    '/study/test-frame-work',
                    '/study/leaflet',
	                '/study/leaflet-plugin',
                    '/study/webpack-tree-shaking',
                    '/study/mongoDb',
                    '/study/about-brackets',
                    '/study/about-react',
                ],
            },
            {
                title: '编码规范',
                collapsable: false,
                children: [
                    '/specification/vue-style-guide',
                    '/specification/javascript-style-guide',
                    '/specification/es-next-style-guide',
                    '/specification/Airbnb-JavaScript-Style-Guide',
                    '/specification/html-style-guide',
                    '/specification/css-style-guide',
                    '/specification/less-code-style',
                ],
            },
            {
                title: '规范设计',
                collapsable: false,
                children: [
                    '/design/project-design-demo',
                    '/design/pagination-component-API-document',
                ],
            },
        ]
    },
};