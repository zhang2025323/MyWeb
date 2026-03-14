<template>
  <div class="App">
    <!-- 添加音频元素 -->
    <audio ref="audioPlayer" autoplay loop>
      <source src="@/assets/干.mp3" type="audio/mpeg">
    </audio>

    <!-- 添加音乐控制按钮 -->
    <button @click="toggleMusic" class="music-control">
      {{ isPlaying ? '停止喝鸡汤' : '播放鸡汤' }}
    </button>

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

  data() {
    return {
      isPlaying: false
    }
  },
  mounted() {
    // 尝试自动播放
    this.$refs.audioPlayer.play().then(() => {
      this.isPlaying = true;
    }).catch(error => {
      console.log("自动播放被阻止，需要用户交互:", error);
    });
  },
  methods: {
    toggleMusic() {
      if (this.isPlaying) {
        this.$refs.audioPlayer.pause();
      } else {
        this.$refs.audioPlayer.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }


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

/* 添加音乐控制按钮样式 */
.music-control {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgb(123, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.music-control:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>