const HtmlWebpackplugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports={
    mode:"development",
    devServer:{
        port:3000
    },
    plugins:[
        new HtmlWebpackplugin({
            template:'./public/index.html'
        })
    ]

}