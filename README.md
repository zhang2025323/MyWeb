# 导航百宝箱

一个美观、实用的个人导航网站，包含各种常用网站链接、AI工具、学习资源等。

## ✨ 特性

- 🎨 **科技感设计** - 动态粒子效果、渐变背景、扫描线动画
- 📱 **响应式布局** - 完美适配移动端和PC端
- 🎵 **背景音乐** - 两个纯音乐播放器，支持自动互斥
- 🔗 **丰富的链接** - 包含AI工具、学习资源、实用工具等分类
- 🎯 **悬浮提示** - 鼠标悬停显示链接详细信息
- 📐 **自适应高度** - 无限增加链接和组件都不会溢出
- 🎪 **绿色主题** - 清新的绿色科技风格

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看效果

### 打包构建

```bash
npm run build
```

### 部署到GitHub Pages

```bash
npm run deploy
```

## 📁 项目结构

```
MyNavigating/
├── src/
│   ├── assets/          # 静态资源（图标、音乐）
│   ├── components/      # Vue组件
│   │   ├── LinkCategory.vue   # 链接分类组件
│   │   ├── WebHeader.vue      # 顶部标题栏
│   │   ├── WebMain.vue        # 主内容区域1
│   │   ├── WebMainTwo.vue     # 主内容区域2
│   │   └── WebFooter.vue      # 页脚
│   ├── data/            # 数据文件
│   │   └── links.js     # 链接数据
│   ├── App.vue          # 根组件
│   ├── main.js          # 入口文件
│   └── style.css        # 全局样式
├── public/              # 公共资源
├── index.html           # HTML模板
└── package.json         # 项目配置
```

## 📝 添加链接

### 在现有分类中添加链接

编辑 `src/data/links.js`，在对应的链接数组中添加：

```javascript
{
  name: '链接名称',
  url: 'https://...',
  description: '链接描述'
}
```

### 创建新分类

1. 在 `src/data/links.js` 中定义新的链接数组
2. 在对应的WebMain组件中添加新的LinkCategory

### 创建新的内容区域

复制 `WebMain.vue` 或 `WebMainTwo.vue`，修改链接数据后在 `App.vue` 中引入即可。

## 🛠️ 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 下一代前端构建工具
- **JavaScript** - 原生JavaScript实现
- **CSS3** - 现代化样式和动画

## 📱 预览

访问：[你的GitHub Pages地址]

## 👤 作者

zhang2025323

## 📄 许可证

MIT License
