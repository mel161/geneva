const config = require('./');

module.exports = {
    autoprefixer: { browsers: ["> 1%","last 2 versions","IE 10", "IE 9"] },
    source: `${config.assetsPath}sass/screen.scss`,
    dest: `${config.buildPath}assets/css/`,
    base: `${config.assetsPath}sass/**/*`,
    settings: {
        outputStyle: 'nested',
        includePaths: [
            './node_modules/normalize-scss/sass/',
            './node_modules/susy/sass/',
            './node_modules/breakpoint-sass/stylesheets/',
        ],
    },
};
