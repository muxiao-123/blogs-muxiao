const mineBar = () => {
  return {
    title: 'Mine',
    collapsable: true,
    sidebarDepth: 1,
    children: [
      ['mine/', 'home'],
      'mine/tree'
    ]
  }
}
const cssBar = function () {
  return {
    title: 'Css',
    collapsable: true,
    sidebarDepth: 1,
    children: [
      ['css/', 'Css']
    ],
  }
}
const htmlBar = function () {
  return {
    title: 'Html',
    collapsable: true,
    children: [
      ['html/', 'Html'],
      'html/m-layout/',
    ],
  }
}
const typescriptBar = () => {
  return {
    title: 'Typescript',
    collapsable: true,
    children: [
      ['typescript/', 'ts']
    ]
  }
}
const nodeBar = function () {
  return {
    title: 'Node',
    collapsable: true,
    children: [
      ['node/', 'Node'],
      ['node/node-express-server', '搭配express'],
      ['node/node-fs', '文件模块']
    ],
  }
}
const viteBar = () => {
  return {
    title: 'Vite',
    collapsable: true,
    children: [
      ['vite/', 'Vite'],
    ]
  }
}
const eslintBar = () => {
  return {
    title: 'Eslint',
    collapsable: true,
    children: [
      ['eslint/', 'Eslint'],
      ['eslint/auto-commit', '自动提交'],
    ]
  }
}
const gitBar = () => {
  return {
    title: 'Git',
    collapsable: true,
    children: [
      ['git/', 'Git'],
      ['git/base', '常用命令']
    ]
  }
}
const markdownBar = () => {
  return {
    title: 'Markdown',
    collapsable: true,
    children: [
      ['md/', 'base']
    ]
  }
}
const issuesBar = () => {
  return {
    title: 'Issues',
    collapsable: true,
    children: [
      ['issues/', '问题归类'],
      ['issues/eslint', 'eslint问题']
    ]
  }
}
const otherBar = () => {
  return {
    title: 'no-base',
    collapsable: true,
    children: [
      ['no-base/', 'No-Base'],
      ['no-base/envirament/', '环境变量'],
      ['no-base/mongo/', 'Mongo'],
      ['no-base/nginx/', 'Nginx'],
      ['no-base/npm/', 'Npm'],
    ]
  }
}

module.exports = {
  title: 'Blogs-Muxiao',
  description: 'map map map good good',
  themeConfig: {
    displayAllHeaders: true,
    activeHeaderLinks: false,
    nav: [
      { text: 'Home', link: 'mine/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: 'mine/' }
          // { text: 'Chinese', link: '/language/chinese/' },
        ]
      }
    ],
    sidebar: [
      ...[
        mineBar(),
        cssBar(),
        htmlBar(),
        typescriptBar(),
        nodeBar(),
        viteBar(),
        eslintBar(),
        gitBar(),
        markdownBar(),
        issuesBar(),
        otherBar()
      ]
    ]
  },
}