# Voxel Admin uni-app

![Status](https://img.shields.io/badge/Status-待开发-orange)
![uni-app](https://img.shields.io/badge/uni--app-3-2A993B)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Apache_2.0-blue)
![Version](https://img.shields.io/badge/version-1.0.0--beta-orange)

**Voxel Admin uni-app** 是管理端移动端：基于 uni-app 3 与 Vue 3，目标覆盖 H5 / 微信小程序等多端，对接 **ADMIN** 账号体系（`/api/v1/admin/*`）。当前为脚手架阶段，完整业务能力持续建设中。

## 目录

- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [工程结构](#工程结构)
- [快速开始](#快速开始)
- [默认账号](#默认账号)
- [License](#license)

## 功能特性

API 前缀统一为 `/api/v1/admin/*`。标注 **（规划中）** 的模块尚未完整实现。

| 模块 | 说明 |
| --- | --- |
| 认证与会话 | 账号 / 邮箱 / 手机号登录；本地存储 `Authorization` token（小程序端不以 Cookie 为主） |
| 工作台 | Dashboard 概览、常用应用入口 **（规划中）** |
| 动态菜单 | 基于后端资源树渲染能力入口 **（规划中）** |
| 通用资源页 | 列表、详情、表单、筛选、分页等 CRUD，按资源配置扩展 **（规划中）** |
| 个人中心 | 资料、头像裁剪与基础设置（脚手架页面） |
| 联调示例 | 工作台内字典、请求等接口联调页（开发调试用） |

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | uni-app 3 · Vue 3 · Vite · TypeScript |
| UI | uview-pro · UnoCSS · uCharts |
| 状态 | Pinia |
| 网络 | 直连后端 API（Header `Authorization`） |
| 其他 | ESLint · Prettier |

## 工程结构

```text
voxel-admin-uniapp/
└── src/
    ├── api/
    ├── components/
    ├── constants/
    ├── layouts/
    ├── pages/          # auth / dashboard / workbench / profile
    ├── static/
    ├── stores/
    ├── utils/
    ├── pages.json
    └── manifest.json
```

## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 本地运行（H5）

建议先启动管理端后端（默认 `http://127.0.0.1:8000`）：

```bash
pnpm install
pnpm dev:h5
```

默认环境见 [`.env`](.env)：

| 变量 | 说明 | 默认 |
| --- | --- | --- |
| `VITE_APP_TITLE` | 应用标题 | `Voxel Admin` |
| `VITE_API_URL` | 后端基址 | `http://127.0.0.1:8000` |
| `VITE_PORT` | H5 开发端口 | `5174` |

若本机同时跑门户 Web（常用 `5174`），请改 `VITE_PORT`（例如 `5175`）。

### 微信小程序

```bash
pnpm dev:mp-weixin
pnpm build:mp-weixin
```

发布前在 `src/manifest.json` 配置各端 appid，并在小程序后台配置合法请求域名。真机调试时将 `VITE_API_URL` 改为设备可访问的后端地址。

### 常用命令

```bash
pnpm dev:h5         # H5 开发
pnpm build:h5       # H5 构建
pnpm type-check
pnpm lint && pnpm format
```

生产构建：`pnpm build:h5`。[`.env.production`](.env.production) 中 `VITE_API_URL` 为空时走同源 `/api/`，需网关反代。本目录不提供 Dockerfile。

## 默认账号

| 端 | 账号 | 密码 |
| --- | --- | --- |
| Admin | `superadmin` | `123456` |

以对接后端库内种子为准。仅供本地演示。

## License

本项目基于 [Apache License 2.0](LICENSE) 开源。完整条款见 [LICENSE](LICENSE)。
