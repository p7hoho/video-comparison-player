# Video Comparison Player 视频对比播放器
Video Comparison Player 是为视频增强、视频修复开发者提供的对比播放桌面工具，从[这里](https://github.com/bergkamp/video-comparison-player/releases/latest)下载最新版Mac与Windows安装包

主要功能：
* 支持windows与mac
* 支持两个视频或图片左右同步对比播放
* 支持暗黑模式
* 支持快捷键
  * `左右方向`控制分割线
  * `上方向`控制方向键回中
  * `空格`控制播放暂停
* 支持ffprobe读取视频文件参数

![output](https://user-images.githubusercontent.com/36283/122520417-26130180-d046-11eb-96d2-f9448f7e3924.gif)

## 环境设置
node & npm https://nodejs.org/en/download/
node v14.16.0
npm 6.14.11

设置npm源
```bash
npm config set registry https://registry.npm.taobao.org
npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
```
### 设置
```bash
npm install
```
### 开发环境运行
```bash
#客户端调试
npm run dev
```
### 打包
```bash
npm run build
```
