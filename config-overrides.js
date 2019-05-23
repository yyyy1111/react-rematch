const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');
// function resolve(dir){
//   return path.join(__dirname,'.',dir)
// }
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1890ff'
    },
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[local]--[hash:base64:5]'
  }),
  addWebpackAlias({
    // ['@']: resolve('src'),
    ['Header']:path.resolve(__dirname,'src/components/Header'),
  })
    
  
)