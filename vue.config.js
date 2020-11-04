const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // 跨域配置
    devServer: {
        port: 8000, // 端口
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true
            },
            '/douban': {
                target: 'https://movie.douban.com'
            }
        }
    },
    // 静态文件目录
    // assetsDir: '',
    // 编译后的地址，可以根据环境进行设置
    // lintOnSave: true, // 是否开启编译时是否不符合eslint提示 
    css: {
        // loaderOptions: {
        //     sass: {
        //         prependData: `@import "~@/assets/scss/index.scss";`
        //     }
        // }
    },
    // 文件目录配置
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
        .set('page', resolve('page'))
        .set('utils', resolve('utils'))
    },
    // // 代码分析
    // configureWebpack: {
    //     plugins: [
    //         new BundleAnalyzerPlugin()
    //     ]
    // }
};