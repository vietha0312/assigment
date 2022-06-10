// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        DetailProduct: resolve(__dirname, 'home.html'),
        DetailProduct: resolve(__dirname, 'blog.html'),
       
      }
    }
  }
})