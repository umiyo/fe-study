module.exports = ctx => ({
  locales: {
    '/': {
      title: '知识库',
      description: 'Front-end Roadmap'
    }
  },
  themeConfig: {
    smoothScroll: true,
    locales: {
      '/': {
        nav: require('./nav/index'),
        sidebar: {
          '/css/': getCssSidebar('CSS', 'SCSS'),
          '/log/': getLogSidebar('日志')
        }
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/index.js',
  ]
})

function getCssSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
        'CSS3'
      ]
    },
    {
      title: groupB,
      collapsable: true,
      children: []
    }
  ]
}

function getLogSidebar (group) {
  return [
    {
      title: group,
      collapsable: true,
      children: [
        '',
        '2020-10-01'
      ]
    }
  ]
}
