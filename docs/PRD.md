# AI 工具学习网站 - 产品需求文档 (PRD)

## 1. 产品背景
随着 AI 工具的爆发（ChatGPT、Claude、Claude Code、Cursor、MidJourney 等），越来越多用户希望快速上手这些工具。但现有学习资源存在以下问题：
- 官方文档过于晦涩，缺少场景化教程；
- YouTube 视频内容零散、系统化不足，更新速度慢；
- 很多海外用户需要可搜索、可复用的文字教程。

本项目计划打造一个 **面向海外市场的 AI 工具学习中心**，用文章（英文为主）形式，系统、实用地帮助用户学习前沿 AI 工具。

---

## 2. 产品愿景
成为全球用户学习前沿 AI 工具的 **首选学习平台**。  
- 本期目标：以 **英文内容** 为主，服务海外用户；  
- 未来目标：支持国际化（多语言版本，如中文、西班牙语等）；  
- 差异化：深度教程 + 应用场景，而不是泛泛工具介绍。  

---

## 3. 用户角色 & 需求
### 用户角色
1. **开发者 / 工程师**
   - 需求：用 Claude Code、Cursor、ChatGPT 辅助编程；
   - 关注点：有代码示例、具体操作步骤。

2. **职场人士 / 自由职业者**
   - 需求：用 AI 工具提升工作效率（办公、文案、自动化）；
   - 关注点：结合实际应用场景，实用性强。

3. **学生 / 独立学习者**
   - 需求：学习/写作/研究辅助；
   - 关注点：教程简单明了，分步骤操作。

---

## 4. 功能需求 (MVP)
### 4.1 本期必须实现
1. **文章 / 教程系统**
   - 分类：按工具 / 按应用场景；
   - 标签：coding / productivity / marketing；
   - Markdown 格式支持（代码高亮、提示框、图片）；
   - 自动生成目录（TOC）。

2. **首页**
   - Slogan + 行动按钮（Subscribe）；
   - 最新文章推荐；
   - 热门分类；
   - 邮件订阅表单。

3. **搜索功能**
   - 搜索文章标题/标签；
   - 支持关键字模糊。

4. **About 页面**
   - 平台愿景；
   - 作者信息（强调技术背景 + 学习社区定位）；
   - 联系方式（Email / Twitter）。

5. **订阅功能**
   - 集成邮件服务（ConvertKit / Mailchimp / Resend）；
   - 可在首页/文章底部填写订阅。

---

### 4.2 二期功能（未来迭代）
- 用户注册 / 登录；
- 收藏功能/个人文章列表；
- 评论区；
- 高级会员功能（付费教程 PDF / 专属进阶文章）；
- 国际化（i18n，支持多语言切换）。

---

## 5. 信息架构
### 顶层结构
- 首页  
- 分类页  
- 文章页  
- 搜索页  
- About  
- Newsletter  

### 分类规划
- **按工具 (Tools)**
  - ChatGPT
  - Claude
  - Claude Code
  - Cursor
  - MidJourney

- **按场景 (Use Cases)**
  - Coding
  - Productivity
  - Marketing
  - Content Creation

---

## 6. 页面设计
### 首页
- 顶部导航：Logo / 分类 / Subscribe
- Hero Section：一句核心定位 + CTA
- 最新教程列表
- 热门分类（图标 + 链接）
- 邮件订阅区块

### 分类页
- 某个工具或场景的教程列表（标题/缩略图/时间）
- 可分页

### 文章页
- 标题、时间、标签
- 正文（Markdown 渲染）
- 右侧浮动目录（TOC）
- 底部：相关文章推荐 + 邮件订阅

### 搜索页
- 搜索框 + 搜索结果
- 无结果提示

### About 页
- 平台愿景
- 作者介绍
- 联系方式

---

## 7. 技术架构
### 前端
- 框架：Next.js (React)
- 样式：TailwindCSS / Chakra UI
- 内容存储：Markdown 文件（`/content` 目录）
- 渲染：MDX + Contentlayer
- 部署：Vercel

### 后端（未来）
- FastAPI + PostgreSQL
- 部署：Railway
- 用途：会员、收藏等动态功能

### 第三方服务
- 邮件订阅：ConvertKit / Mailchimp / Resend
- 流量统计：Google Analytics / Plausible
- SEO：Next.js 内置 + meta 自动化

---

## 8. UI/UX 风格
- 整体：简洁、现代、专业
- 色彩：
  - 背景：白 / 浅灰
  - 主色：科技蓝 / 紫 (#3B82F6 / #6366F1)
  - 突出按钮：绿色 / 橙色
- 字体：
  - 英文：Inter / Poppins / Roboto
- 布局：
  - 正文 680–720px 宽度
  - 右侧浮动 TOC
  - 留白充足，优先阅读体验

---

## 9. 内容规划（上线内容）
上线时至少 5–8 篇核心文章（英文撰写）：  
1. 《Claude Code Beginner’s Guide》  
2. 《How to Use ChatGPT for Excel Automation》  
3. 《Claude vs ChatGPT for Coding》  
4. 《Boost Your Efficiency with Cursor IDE》  
5. 《MidJourney Getting Started》  
6. 《5 Marketing Use Cases with ChatGPT》

---

## 10. 迭代规划
### 阶段 1（0–1 个月）
- Next.js + Vercel 基本站点
- 上线首页/分类/文章页
- 发布首批 5 篇英文教程
- 收集订阅用户

### 阶段 2（1–3 个月）
- 增加搜索/相关文章推荐
- 发布更多文章，形成系列专题
- 推广至 Reddit / HackerNews / Twitter
- 启动 Newsletter 周刊

### 阶段 3（3–6 个月）
- FastAPI + Railway 接入（收藏/会员）
- 推出 PDF 合集付费版本
- **国际化支持 (i18n)**：增加中文等多语言

---

## 11. 竞争优势
- **先做海外**：英文内容优先，SEO + 流量潜力大；
- **更新快**：追踪前沿工具的第一手教程；
- **深度场景化**：不只是功能点，而是结合实际工作生活场景；
- **国际化**：未来支持多语言，覆盖更大市场。  

---

✅ **最终目标：成为全球用户学习前沿 AI 工具的第一入口和首选学习中心。**

