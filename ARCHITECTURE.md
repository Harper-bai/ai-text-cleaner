# Architecture

## Overview

`AI Word Cleaner Demo` 是一个纯静态前端项目。

它没有后端、没有数据库、没有构建步骤。页面直接加载浏览器中的模块脚本，在本地完成文本清洗和结果渲染。

## Runtime Model

用户流程：

1. 用户在左侧输入框粘贴 AI 文本
2. 前端监听输入变化
3. 文本进入清洗函数 `cleanText`
4. 清洗后的结果直接渲染到右侧输出区
5. 用户点击复制，将结果写入系统剪贴板

## File Responsibilities

### Entry

- `index.html`
  - 正式页面入口
  - 包含页面结构、样式、交互容器和模块脚本引用

### Frontend

- `src/app.mjs`
  - 页面事件绑定
  - 输入变化监听
  - 输出渲染
  - 复制按钮行为
  - 清空行为
  - 移动端视图切换

### Text Cleaning Engine

- `src/cleaner.mjs`
  - 暴露主入口 `cleanText`
  - 组合所有底层规则
  - 负责最终段落结构整理
  - 负责字符统计 `countVisibleChars`

- `src/rules.mjs`
  - 存放最细粒度的文本规则
  - 包括：
    - 空白归一化
    - 中文标点和空格归一化
    - Markdown 行级清洗
    - 标题识别
    - 标签类行识别
    - 段落折叠

### Samples & Testing

- `samples/cases.mjs`
  - 样本语料库
  - 每条样本包含：
    - `id`
    - `label`
    - `input`
    - `expected`
  - 部分样本还包含：
    - `category`
    - `source`
    - `notes`

- `scripts/run-samples.mjs`
  - 读取样本库
  - 对每条样本运行 `cleanText`
  - 将实际结果和 `expected` 对比
  - 输出 `PASS/FAIL`

## Data Flow

```text
raw input
  -> normalizeWhitespace
  -> normalizeChineseSpacing
  -> normalizeLine
  -> collapseParagraphBreaks
  -> addHeadingBreathingRoom
  -> final normalizeChineseSpacing
  -> rendered output
```

## Design Constraint

当前页面定位是：

- 高级工具站
- 不是产品介绍页
- 不是论文模板排版器
- 工具本体优先于营销叙事

详细设计规则见：

- `DESIGN.md`

## Non-Goals

当前版本明确不做：

- `.docx` 导出
- 学校模板排版
- 参考文献专用格式处理
- Markdown 表格转 Word 表格
- 云端保存 / 登录 / 历史记录

## Why This Architecture

选择纯静态架构的原因：

- 当前问题本质上是本地字符串处理
- 不需要服务端状态
- 更容易部署和给真实用户试用
- 更适合作品集项目的最小实现

## Extension Path

如果未来继续扩展，优先顺序建议是：

1. 增加真实样本
2. 增加文本规则
3. 增强复制体验
4. 再考虑新模式，例如表格模式

不要优先引入后端，除非出现以下需求：

- 账户系统
- 历史记录
- 云端同步
- 文档导出服务
