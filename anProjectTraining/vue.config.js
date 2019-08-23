// module.exports = {
//     devServer: {
//         proxy: 'http://m.you.163.com'
//     }
// }

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://m.you.163.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            },
        }
    }
}

