const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/TheAccount.html': path.resolve(__dirname, 'template/js/custom-js/html/TheAccount.html'),
    }
  }
})