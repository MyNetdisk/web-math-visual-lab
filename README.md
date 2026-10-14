# Web Math Visual Lab
> 🧪 前端图形数学交互式实验室，面向 Canvas / Three.js / WebGL / Shader 学习。
> 学习目标：把中学到工科大学数学知识点，通过代码可视化，直观理解图形学底层原理。
> 在线预览：https://<你的github账号>.github.io/web-math-visual-lab/

## ✨ 项目作用
本项目是一个**静态单页网站作品集**，全部使用 Vite + Vue3 + TypeScript 开发，无后端服务，可直接部署到 GitHub Pages。
- 按学习阶段存放所有数学可视化Demo（初中坐标系、三角函数、向量、矩阵变换、微积分、线性代数、概率统计、WebGL着色器实验）
- 每个Demo页面包含：交互式画布、知识点文字说明、参数控制器、源码查看区域
- 沉淀可复用的2D/3D数学工具函数库，作为图形开发基础工具集
- 作为个人作品集，展示前端图形数学学习成果，可放在简历中

## 📂 项目组成 & 目录说明
```
web-math-visual-lab/
├── README.md
├── .gitignore
├── index.html               # 入口主页：实验室首页，带导航菜单
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.ts
│   ├── style.css
│   ├── router.ts            # 简单客户端路由（原生或轻量Vue；也可以纯原生JS，看你喜好）
│   ├── utils/               # ✨你的数学工具库！重点沉淀这里
│   │   ├── math‑2d‑utils.ts  # 距离、旋转、向量2D、deg‑rad转换
│   │   ├── math‑3d‑utils.ts  # 简单3D向量、点积叉积
│   │   └── matrix‑2d‑3d.ts   # 手写齐次变换矩阵（里程碑成果！）
│   ├── demos/               # 【所有Demo集中区，按学习阶段分组】
│   │   ├── 01‑junior‑math/        # 初中阶段
│   │   │   ├── canvas‑coord‑flip/
│   │   │   ├── parabola‑draw/
│   │   │   └── point‑distance/
│   │   ├── 02‑senior‑math/        # 高中阶段：三角函数、向量、3D斜投影
│   │   │   ├── unit‑circle‑sin‑cos/
│   │   │   ├── point‑rotate‑no‑matrix/
│   │   │   ├── vector‑dot‑project/
│   │   │   └── simple‑3d‑sketch/
│   │   ├── 03‑calculus/           # 微积分Demo：切线、数值积分、泰勒sin近似
│   │   ├── 04‑linear‑algebra/     # ⭐线性代数重头戏
│   │   │   ├── matrix‑transform‑2d‑homogeneous/
│   │   │   ├── cross‑product‑3d‑view/
│   │   │   └── simple‑perspective‑demo/
│   │   ├── 05‑probability/        # 统计、正态点云、采样
│   │   └── 06‑webgl‑shader/       # 后期：简单着色器小实验
│   └── components/          # 可复用UI：每个Demo页通用的“说明面板、源码折叠、重置按钮”
└── public/                  # 静态资源：图片、字体、贴图
```

## 🚀 本地启动
### 前置条件
Node.js >= 18

```bash
# 1. 克隆仓库
git clone https://github.com/<你的github账号>/web-math-visual-lab.git
cd web-math-visual-lab

# 2. 安装依赖
npm install

# 3. 本地开发启动（热更新）
npm run dev
```

打开浏览器访问 `http://localhost:5173/web-math-visual-lab/`

## 📦 打包构建
```bash
npm run build
```
产物输出在 `dist` 文件夹。

## 📤 部署到 GitHub Pages
### 安装 gh-pages 部署工具

```
npm i -D gh-pages
```

### 2. package.json scripts

```bash
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 3. 一键部署

```
npm run deploy
```

> 
> 自动构建并推送 dist 目录到 `gh-pages` 分支

### 4. GitHub 仓库设置

仓库 → Settings → Pages

- Source: `gh-pages` branch
- Folder: `/ (root)`

等待几分钟，访问地址：
`https://<你的github账号>.github.io/web-math-visual-lab/`

> 
> ⚠️ 重要说明：使用 Hash 路由模式，避免 GitHub Pages 刷新页面 404 问题。

## 📌 开发规范

1. 新增 Demo：在 `src/demos/对应阶段目录` 新建 Demo.vue 组件，并在 router 中注册路由、导航菜单添加入口
2. 通用数学函数统一放到 `src/utils`，不要在 Demo 里重复写
3. 每个 Demo 页面使用 `DemoWrapper.vue` 包裹，保持页面风格统一
4. 提交代码前不要提交 `node_modules`、`dist`

## 📜 License

MIT