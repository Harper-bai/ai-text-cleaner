# AI Word Cleaner Demo

一个静态工具站，用来把 AI 生成的中文正文清洗成更适合复制进 Word 的文本。

## 这是什么

这个项目专注解决一个很窄但高频的问题：

- 用户把 AI 生成的论文正文、开题报告或课程作业复制出来时
- 文本里常常带着 Markdown 痕迹、异常空格、多余空行和断行问题
- 这些内容直接贴进 Word 之前，通常还得手动整理一遍

这个 demo 的目标不是做“论文排版器”，而是做“正文清洗器”。

## 适用范围

适合：

- 中文论文正文
- 开题报告正文
- 课程作业正文
- AI 生成的提纲型正文草稿

当前不处理：

- 封面
- 目录
- 参考文献专用格式
- 表格转 Word 表格
- 学校模板排版

## 当前能力

- 去除常见 Markdown 痕迹
- 清理多余空格和空行
- 保留更自然的正文段落结构
- 双栏输入 / 输出即时预览
- 支持亮色 / 深色切换
- 支持移动端输入 / 输出视图切换

## 本地运行

这是纯静态项目，不需要构建。

可直接用任意静态服务器启动，例如：

```bash
cd ai-word-cleaner-demo
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## 测试

运行样本基准测试：

```bash
node ./scripts/run-samples.mjs
```

当前样本库覆盖：

- 论文正文
- 中英混排
- 提纲改正文
- 学术大纲长文本
- 中文冒号后引用紧跟

## 部署

直接部署整个目录到任意静态托管即可，例如：

- Vercel
- Netlify
- GitHub Pages

正式入口是：

- `index.html`

上线后建议再补两项：

- 最终域名对应的 `canonical`
- 实际可访问的分享图 `og:image`

## 文档入口

- `README.md`：项目介绍、运行和部署方式
- `ARCHITECTURE.md`：代码结构与数据流
- `CONTRIBUTING.md`：后续补规则、补样本、做测试的约定
- `DESIGN.md`：当前界面设计约束
- `CLAUDE.md`：给后续 AI / 代理的项目指令

## 项目结构

```text
index.html              正式页面入口
src/                    清洗逻辑与前端交互
samples/                样本库
scripts/run-samples.mjs 基准测试脚本
ARCHITECTURE.md         架构说明
CONTRIBUTING.md         贡献说明
DESIGN.md               设计约束
```
