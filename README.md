# alpha-event

第一個活動頁，基於 [parcel-template](https://gitlab.halfme.com/frontend-boilerplates/parcel-template)

# Requirement

node.js v.10.16.3 以上 (LTS 版本)

## Getting Started

```bash
# clone the project
git clone git@gitlab.halfme.com:halfme-events/alpha-event.git

# enter the project directory
cd alpha-event

# install dependency
yarn

# develop
yarn dev
```

This will automatically open http://localhost

## Build

```bash

# build for production environment
# 結果會產出於 /dist 資料夾中
yarn build
```

## Project Structure
```shell
├─src
│  ├─/assets     # icon 與 圖片
│  ├─/components # 組件
│  ├─/style      # 樣式：純粹用來引入 tailwind.css 沒必要不要擴充
│  ├─/view       # 頁面容器組件
│  ├─index.html  # html 主檔：使用 posthtml expression 模板，於此引入 main.js
│  └─main.js     # js 主檔：在此引入 樣式 及 js 功能套件
├─.env               # 環境變數
├─content.config.js  # 活動頁內容設定檔
├─postcss.config.js  # postcss設定: tailwind, autoprefixer, purgecss
└─tailwind.config.js # tailwind css 自訂主題設定： container 寬度

```


## Environment Variables
環境變數被設定於 `.env` 中

| 變數名稱 | 說明                                  |
| -------- | ------------------------------------- |
| URL      | 本專案要部署的 url ， 給 meta tags 用 |
| APP_URL  | Api base url                          |

## Contact

chenyu
