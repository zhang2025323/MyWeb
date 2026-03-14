<template>
  <div class="App">
    <!-- 头部组件 -->
    <WebHeader></WebHeader>
    <!-- 主体组件 -->
    <WebMain></WebMain>
    <!-- 底部组件 -->
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHeader from "./components/WebHeader.vue";
import WebMain from "./components/WebMain.vue";
import WebFooter from "./components/WebFooter.vue";

export default {
  components: {
    // '组件名'：组件对象（组件对象可以省略不写，组件名的规范，最好大驼峰）
    WebHeader,
    WebMain,
    WebFooter,
  },
};
</script>

<style>
.App {
  background-color: rgb(123, 0, 0);
  margin: auto;
  max-width: 100%;
  overflow-x: hidden; /* 隐藏横向滚动条 */
  min-height: 100vh; /* 确保页面至少占满整个视口高度 */
  display: flex; /* 使用 Flex 布局 */
  flex-direction: column; /* 垂直排列子元素 */
}

.WebMain {
  flex: 1; /* 让主体部分占据剩余空间 */
}
</style>