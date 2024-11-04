import comp from "C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"BrightSpace\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"BrightSpace\",\"heroImage\":\"/images/brightspace logo horizontal color 300CMYK.png\",\"actions\":[{\"text\":\"Database and Monitoring System\",\"link\":\"/guide/overview.html\",\"type\":\"primary\"}],\"footer\":\"Funded by the European Union | BrightSpace Grant agreement ID 101060075\"},\"headers\":[],\"git\":{\"updatedTime\":1730743545000,\"contributors\":[{\"name\":\"Xinxin Yang\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":3},{\"name\":\"xxThu\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
