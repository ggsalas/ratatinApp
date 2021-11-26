const withPlugins = require('next-compose-plugins')

const withTM = require('next-transpile-modules')(['localbase']) // pass the modules you would like to see transpiled

module.exports = withPlugins([withTM])
