const nav = require('./utils/nav')
const sidebar = require('./utils/sidebar')
// 注意: base的值为github仓库的名称
module.exports = {
  base: '/my_docs/', /* 基础虚拟路径: */
  dest: 'docs/.vuepress/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '在线文档笔记', // 标题
  description: '一个在线文档笔记', // 标题下的描述
  themeConfig: { // 主题配置
    logo: '/vue3_logo.png',
    nav, // 头部导航栏
    sidebar // 左侧导航栏
  }
}