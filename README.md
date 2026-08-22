# HEI Admin uni-app

![Status](https://img.shields.io/badge/Status-待开发-orange)
![uni-app](https://img.shields.io/badge/uni--app-3-2A993B)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Apache_2.0-blue)
![Version](https://img.shields.io/badge/version-1.0.0--beta-orange)

**HEI Admin uni-app** 是 HEI 系列的管理端移动端：基于 uni-app 3 与 Vue 3，目标覆盖 H5 / 微信小程序等多端，对接 **ADMIN** 账号体系（`/api/v1/admin/*`）。同一套代码可挂载 [hei-boot](https://github.com/jiangbyte/hei-boot)、[hei-gin](https://github.com/jiangbyte/hei-gin) 等姊妹后端，通过环境变量切换 API 地址即可。

> **项目状态：待开发** — 当前为脚手架阶段，仅包含登录、工作台等基础页面与接口联调示例，完整业务能力持续建设中。  
> 当前版本：`1.0.0-beta` · 协议：[Apache License 2.0](LICENSE)

## 目录

- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [常用命令](#常用命令)
- [生产构建](#生产构建)
- [工程结构](#工程结构)
- [姊妹项目](#姊妹项目)
- [License](#license)

## 功能特性

移动端管理端能力规划如下，API 前缀统一为 `/api/v1/admin/*`。标注 **（规划中）** 的模块尚未完整实现。

| 模块 | 说明 |
| --- | --- |
| 认证与会话 | 账号 / 邮箱 / 手机号登录；本地存储 `Authorization` token（小程序端不以 Cookie 为主） |
| 工作台 | Dashboard 概览、常用应用入口 **（规划中）** |
| 动态菜单 | 基于后端资源树 `/sys/resources/current` 渲染能力入口 **（规划中）** |
| 通用资源页 | 列表、详情、表单、筛选、分页等通用 CRUD 能力，按资源配置扩展 **（规划中）** |
| 个人中心 | 资料、头像裁剪与基础设置（当前为脚手架页面） |
| 联调示例 | 工作台内字典、请求等接口联调页（开发调试用） |

完整业务菜单与按钮是否可见，将取决于后端返回的资源与授权，与 [hei-admin](https://github.com/jiangbyte/hei-admin) Web 管理端保持一致。

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | uni-app 3 · Vue 3 · Vite · TypeScript |
| UI | uview-pro · UnoCSS · uCharts |
| 状态 | Pinia |
| 网络 | 直连后端 API（Header `Authorization`） |
| 其他 | ESLint · Prettier |

## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 本地运行（H5）

```bash
# 建议先启动姊妹后端，默认 http://127.0.0.1:8000
pnpm install
pnpm dev:h5
```

默认环境见 [`.env`](.env)：

| 变量 | 说明 | 默认 |
| --- | --- | --- |
| `VITE_APP_TITLE` | 应用标题 | `HEI Admin` |
| `VITE_API_URL` | 后端基址（H5 / 小程序直连） | `http://127.0.0.1:8000` |
| `VITE_PORT` | H5 开发端口 | `5174` |

> 若本机同时跑 [hei-portal](https://github.com/jiangbyte/hei-portal)（也默认 `5174`），请改本项目 `VITE_PORT`（例如 `5175`）避免冲突。

### 微信小程序

```bash
pnpm dev:mp-weixin
pnpm build:mp-weixin
```

其它平台命令见 [`package.json`](package.json)。发布前在 `src/manifest.json` 配置各端 appid，并在小程序后台配置合法请求域名。

默认演示账号见各后端仓库 README（Admin：`superadmin` / `123456`）。

## 常用命令

```bash
pnpm dev:h5         # H5 开发
pnpm build:h5       # H5 构建
pnpm type-check     # 类型检查
pnpm lint           # ESLint
pnpm format         # Prettier
```

## 生产构建

```bash
pnpm build:h5
```

[`.env.production`](.env.production) 中 `VITE_API_URL` 为空时，请求走同源 `/api/`，需由网关或 nginx 反代到后端。本目录**不提供** Dockerfile。

## 工程结构

```text
hei-admin-uniapp/
└── src/
    ├── api/            # 接口封装
    ├── components/     # 通用组件
    ├── constants/      # 常量
    ├── layouts/        # 布局
    ├── pages/          # 页面（auth / dashboard / workbench / profile）
    ├── static/         # 静态资源
    ├── stores/         # Pinia
    ├── utils/          # 工具
    ├── pages.json      # 页面路由
    └── manifest.json   # 应用配置
```

## 姊妹项目

| 项目 | 说明 | 协议 |
| --- | --- | --- |
| [hei-boot](https://github.com/jiangbyte/hei-boot) | Spring Boot 后端（推荐） | Apache License 2.0 |
| [hei-gin](https://github.com/jiangbyte/hei-gin) | Go / Gin 后端 | Apache License 2.0 |
| [hei-fastapi](https://github.com/jiangbyte/hei-fastapi) | FastAPI 后端 | Apache License 2.0 |
| [hei-admin](https://github.com/jiangbyte/hei-admin) | 管理端 Web 前端（Vue 3） | Apache License 2.0 |
| [hei-portal](https://github.com/jiangbyte/hei-portal) | 门户前端（React） | Apache License 2.0 |

小程序端无法使用 Cookie 会话，请保持 Header `Authorization` 方案。真机调试时将 `VITE_API_URL` 改为设备可访问的后端地址（勿使用仅本机回环且设备不可达的地址）。

## License

本项目基于 [Apache License 2.0](LICENSE) 开源，可自由使用、修改与分发。完整条款见仓库根目录 [LICENSE](LICENSE) 文件。
