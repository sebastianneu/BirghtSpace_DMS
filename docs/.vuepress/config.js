import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
// import { NavbarOptions } from '@vuepress/theme-default'


export default defineUserConfig({
  lang: 'en-US',
  base: '/vuepress-starter/',
  title: ' ',
  description: ' ',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['title', {}, 'BrightSpace']
  ],
  theme: defaultTheme({
    logo: '/images/brightspace logo horizontal color 300CMYK.png',
    repo: 'xxThu/vuepress-starter',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    navbar : [
     { text: 'Home', link: '/',},
    //  { text: 'Guide', link:'/get-started',},
    //  { text: 'Examples', link:'/examples/examples'},
     { text: 'Guide', 
      children: [
        
        'guide/overview.md',
        'guide/indicator.md',
        'guide/safe.md',
        'guide/jos.md',
        // 'guide/.md',
  
      ]
    },
    //  {
    //   text: 'Group',
    //   children: [
    //     {
    //       text: 'SubGroup1',
    //       prefix: 'sub1/',
    //       children: [
    //         'foo.md', // resolved as `/guide/group/sub1/bar.md`
    //         'bar.md', // resolved as `/guide/group/sub1/bar.md`

    //         // an external link
    //         {
    //           text: 'Example',
    //           link: 'https://example.com',
    //         },
    //       ],
    //     },
    //     {
    //       text: 'SubGroup2',
    //       prefix: 'sub2/',
    //       // for project links, .md or .html suffix is optional
    //       children: [
    //         'foo', // resolved as `/guide/group/sub2/foo.md`
    //         'bar', // resolved as `/guide/group/sub2/bar.md`

    //         // link not inside SubGroup2
    //         '/baz/', // resolved as `/baz/README.md`
    //       ],
    //     },
    //   ],
    // },


    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/overview.md',
            '/guide/indicator.md',
            '/guide/safe.md',
            '/guide/jos.md',
          ],
        },
      ],
    },

  }),

  plugins: [
    searchPlugin(),
    shikiPlugin({
      theme: 'github-dark',  // 选择主题
      langs: ['js', 'html', 'css','md'], // 指定语言
    }),
  ],

  bundler: viteBundler(),
})
