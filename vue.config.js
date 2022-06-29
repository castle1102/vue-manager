 module.exports = {
    assetsDir: 'assets',
     //修改打包路径
    publicPath: process.env.NODE_ENV === 'production'
    ? 'Vue-ego'
    : '/',
    //反向代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8989/api',//
                // target:process.env.VUE_APP_BASE_URL,//
                ws: true,
                changeOrigin: true,
                pathRewrite:{//重写路径
                    '^/api':''
                }
            },
        },
    }
   
}
