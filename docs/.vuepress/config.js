// 注意: base的值为github仓库的名称
module.exports = {
  base: '/my_docs/', /* 基础虚拟路径: */
  dest: 'dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: 'TypeScript 入门', // 标题
  description: '学习使用 TypeScript', // 标题下的描述
  themeConfig: { // 主题配置
    sidebar: [ // 左侧导航
      {
        title: '初识 TypeScript', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/day1',
          'chapter1/day2',
          'chapter1/day3'
        ]
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: true,
        children: [
          'chapter2/day1',
          'chapter2/day2',
          'chapter2/day3',
        ]
      },
    ]
  }
}