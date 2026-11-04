# OliviaWY.github.io
My personal website

## 初始化 V0.1.0（2026-11-04）

Astro + TypeScript，静态生成（SSG），正式地址 https://spaceofdomi.com。
当前仅有初始化占位页，未开始完整页面设计。

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
