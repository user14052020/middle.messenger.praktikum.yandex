// postcss.config.js
module.exports = {
    plugins: [
        require('precss')({/* ...options */}),
        // require('autoprefixer')({ browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  }),

    ]
}