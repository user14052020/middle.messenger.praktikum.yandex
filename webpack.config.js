const { merge } = require('webpack-merge'); //[1]

const commonConfig = require('./webpack.common'); //[2]

module.exports = (env) => {

    let configFileName = ''
    if(typeof  env.production !== 'undefined'){
        configFileName = 'production.js';
    }else{
        configFileName = 'development.js';
    }
    const config = require('./webpack.' + configFileName); //[3]
    return merge(commonConfig, config); //[4]
};