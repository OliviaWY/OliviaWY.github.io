# OliviaWY.github.io
My personal website

## 初始化 V0.1.0（2026-11-04）

Astro + TypeScript，静态生成（SSG），正式地址 https://spaceofdomi.com。
已接入“多米的小小艺术花园”，包括风格/画家筛选、作品赏析、可选背景音乐及六幅按日期排列的多米原创作品。

## 艺术花园迁移 V1.0（2026-11-04）

- `src/pages/index.astro`：艺术花园首页，保留原有浏览器交互。
- `public/`：原站脚本、样式和作品图片。原创画作按文件名日期排序。
- 本地 `npm run check` 和 `npm run build` 已通过。
- 发布结果、正式域名访问及 HTTPS 状态需在部署完成后独立核验。

### 本地开发

使用 `.nvmrc` 指定的 Node.js 版本：

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

### 目录

- `src/pages/`：Astro 页面路由。
- `public/`：直接复制到构建产物的静态资源。
- `scripts/copy-cname.mjs`：校验并原样复制根目录 CNAME 到 dist。
- `astro.config.mjs`：正式域名和静态输出配置；自定义域名不配置仓库子路径 base。
- `.github/workflows/deploy.yml`：PR 执行检查和构建；main 推送自动部署，亦支持 main 手动触发。
- `dist/`：构建产物，不提交 Git。

### GitHub Pages 上线前设置

1. 在 Settings → Pages → Build and deployment 中将 Source 设为 **GitHub Actions**。
2. 保留 Custom domain 为 `spaceofdomi.com`，保留既有 HTTPS 设置；不改 DNS。
3. 检查 Actions 获准运行工作流，github-pages 环境允许 main 部署。
4. 确认后合并到 main，观察工作流部署结果，再验证正式域名及 HTTPS。

根目录 `CNAME` 保留为域名文件的唯一来源，`npm run build` 将其原样复制至
`dist/CNAME`。Actions 部署使用仓库 Pages 的自定义域名设置；产物 CNAME
不能代替该设置。工作流不会通过 API 自动开启 Pages 或改写域名。

### 发布检查（2026-11-04）

已登录核实 Pages 原先从 main 根目录发布，现已切换为 GitHub Actions。
Custom domain 仍为 spaceofdomi.com。原根目录 CNAME 保留不变。
GitHub 显示证书正在申请，HTTPS 开关暂不可用。

公共 DNS 查询返回四条 GitHub Pages A 记录，同时包含额外的
192.64.119.3；GitHub 复查亦曾报告 NotServedByPagesError。
该额外记录可能影响访问与证书签发，需在域名管理处核实；本次未改 DNS。

### 域名修复（2026-11-04 17:14）

用户授权后，已从 Namecheap 移除 @ 指向 http://www.spaceofdomi.com/ 的
URL Redirect Record。四条 GitHub Pages A 记录、www CNAME、所有权验证 TXT
和邮件相关记录均保留。两个权威 DNS 和公共 DNS 复查均已只返回 GitHub 地址；
GitHub 页面显示 DNS check successful，HTTP 页面及 www 跳转已验证。

安全证书仍由 GitHub 申请中，尚未启用 Enforce HTTPS；证书可用后再启用并
验证安全访问。最新状态以 Settings → Pages 为准。


## 亲子美育 V4.0（2026-11-05）

- 默认面向5—6岁，提供看一看、说一说、试一试三步，保留家长可选的八个扩展角度。
- 34个作品条目有102条默认中文引导语；每题显示方法来源与本站改编说明。
- `public/education.js` 保存法国、意大利、英国、西班牙9个官方来源、分龄建议和逐幅问题。
- `public/education-guide.html` 提供完整家长指南与逐幅来源对应；`education-prompts-v4.json` 可下载全部问题记录。
- 来源支持设计原则，不代表机构背书、各国统一课程或效果最优证明。
- 旧版部分现代／当代博物馆外链图片仍有加载问题；图片无法显示时暂停看图任务。
