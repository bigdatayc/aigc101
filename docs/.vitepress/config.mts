import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小羊的学习笔记",
  description: "分享大数据和ai技术和总结",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-E310Y4FH69' }
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E310Y4FH69');
      `
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '编程基础',
        items: [
          { text: '网络协议', link: '/编程基础/网络协议/' },
          { text: '系统设计', link: '/编程基础/系统设计/' },
          { text: 'git', link: '/编程基础/git/' },
          { text: '算法', link: '/编程基础/算法/' }
        ]
      },
      { text: '大数据开发', link: '/大数据开发/' },
      { text: 'AIGC', link: '/AIGC/' },
      { text: '职场发展', link: '/职场发展/' },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'EOBXTAKFA3',
        apiKey: 'e6e870cbd7627ad4fa7bc6d495588a99',
        indexName: 'aigc101'
      }
    },
    sidebar: generateSidebar(),
    socialLinks: [
      { icon: 
        {
        svg: '<svg t="1630026121740" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2954" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#CE000D" p-id="2955"></path></svg>'
        }
        , link: 'https://hadoop.blog.csdn.net/' 
      }
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">鄂ICP备2024048768号</a>',
      copyright: 'Copyright © 2024-present 数据小羊'
    }
  }
})

function generateSidebar() {
  const rootDir = path.join(__dirname, '..')
  const sidebar = {}

  // 读取根目录下的文件夹
  const dirs = fs.readdirSync(rootDir).filter(file => 
    fs.statSync(path.join(rootDir, file)).isDirectory() && !file.startsWith('.')
  )

  dirs.forEach(dir => {
    const dirPath = path.join(rootDir, dir)
    sidebar[`/${dir}/`] = generateSidebarForDir(dirPath, `/${dir}/`)
  })

  return sidebar
}

function generateSidebarForDir(dirPath: string, baseUrl: string) {
  const files = fs.readdirSync(dirPath)
  const items = []

  files.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // 递归处理子目录
      items.push({
        text: file,
        collapsed: true, // 默认折叠子目录
        items: generateSidebarForDir(filePath, `${baseUrl}${file}/`)
      } as never) // 添加类型断言
    } else if (file.endsWith('.md')  && file !== 'index.md') {
      // 处理 Markdown 文件
      const name = file.slice(0, -3)
      items.push({
        text: name,
        link: `${baseUrl}${name}`
      } as never) // 添加类型断言
    }
  })

  return items
}
