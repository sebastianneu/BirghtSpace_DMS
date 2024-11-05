<template>
    <div id="app">
      <Header />
      <main>
        <Content />
      </main>
      <Footer /> <!-- 使用默认的 Footer 组件 -->
    </div>
  </template>
  
  <script setup>
  import Header from './Header.vue'
  import Footer from './Footer.vue' // 引入 Footer 组件，如果需要
  </script>
  
  <style>
  /* 自定义样式 */
  </style>
  

  docs\.vuepress\layouts\CustumLayout.vue