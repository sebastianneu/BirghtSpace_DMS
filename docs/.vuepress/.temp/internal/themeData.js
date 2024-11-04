export const themeData = JSON.parse("{\"logo\":\"/images/brightspace logo horizontal color 300CMYK.png\",\"repo\":\"xxThu/vuepress-starter\",\"docsDir\":\"docs\",\"editLinkText\":\"Edit this page on GitHub\",\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Guide\",\"children\":[\"guide/overview.md\",\"guide/indicator.md\",\"guide/safe.md\",\"guide/jos.md\"]}],\"sidebar\":{\"/guide/\":[{\"text\":\"Guide\",\"children\":[\"/guide/overview.md\",\"/guide/indicator.md\",\"/guide/safe.md\",\"/guide/jos.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
