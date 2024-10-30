import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  lang: 'en-US',
  base: '/vuepress-starter/',
  title: ' ',
  description: ' ',
  docsDir: 'docs',
  theme: defaultTheme({
    logo: '/images/brightspace logo horizontal color 300CMYK.png',
    repo: 'xxThu/vuepress-starter',
    navbar: [
     { text: 'Home', link: '/',},
     { text: 'Guide', link:'/get-started',},
    //  { text: 'Examples', link: '/examples/examples'},
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


  }),

  plugins: [
    searchPlugin(),
  ],

  bundler: viteBundler(),
})
