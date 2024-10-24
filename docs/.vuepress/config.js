import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/vuepress-starter/',
  title: 'BrightSpace',
  description: 'BrightSpace Site',
  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    navbar: [
     { text: 'Home', link: '/',},
     { text: 'Get Started', link:'/get-started',},
     { text: 'Examples', link: '/examples/examples'},
     {
      text: 'Dropdown',
      children: [
        {
          text: 'SubGroup1',
          prefix: 'sub1/',
          children: [
            'foo.md', // resolved as `/guide/group/sub1/bar.md`
            'bar.md', // resolved as `/guide/group/sub1/bar.md`

            // an external link
            {
              text: 'Example',
              link: 'https://example.com',
            },
          ],
        },
        {
          text: 'SubGroup2',
          prefix: 'sub2/',
          // for project links, .md or .html suffix is optional
          children: [
            'foo', // resolved as `/guide/group/sub2/foo.md`
            'bar', // resolved as `/guide/group/sub2/bar.md`

            // link not inside SubGroup2
            '/baz/', // resolved as `/baz/README.md`
          ],
        },
      ],
    },


    ],


  }),



  bundler: viteBundler(),
})
