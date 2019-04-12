var path = require('path')
var webpack = require('webpack')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer


module.exports = {
  plugins: [
    new PrerenderSPAPlugin({
      staticDir: __dirname, // The path to the folder where index.html is.
      routes: ['/', '/about', '/not-found'], // List of routes to prerender.
      renderer: new PuppeteerRenderer(),
      // minify: {
      //   collapseBooleanAttributes: true,
      //   collapseWhitespace: true,
      //   decodeEntities: true,
      //   keepClosingSlash: true,
      //   sortAttributes: true
      // },
    })
  ]
}
