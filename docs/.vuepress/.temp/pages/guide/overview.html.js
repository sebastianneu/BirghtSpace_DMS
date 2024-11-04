import comp from "C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/guide/overview.html.vue"
const data = JSON.parse("{\"path\":\"/guide/overview.html\",\"title\":\"Overview\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]}],\"git\":{\"updatedTime\":1730743245000,\"contributors\":[{\"name\":\"xxThu\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":1}]},\"filePathRelative\":\"guide/overview.md\"}")
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
