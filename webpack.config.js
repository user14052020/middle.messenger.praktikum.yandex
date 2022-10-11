const { merge } = require('webpack-merge'); //[1]

const commonConfig = require('./webpack.common'); //[2]

module.exports = (env) => {
    console.log(env);
    let confgFileName = ''
    if(typeof  env.production !== 'undefined'){
        confgFileName = 'production.js';
    }else{
        confgFileName = 'development.js';
    }
    const config = require('./webpack.' + confgFileName); //[3]
    return merge(commonConfig, config); //[4]
};