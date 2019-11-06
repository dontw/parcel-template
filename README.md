# alpha-event

活動頁們，基於 [parcel-template](https://gitlab.halfme.com/frontend-boilerplates/parcel-template)

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

# Compress png image
# 使用第三方 api https://tinypng.com 壓縮圖檔，每月限額 500 次
# api key 為 Zh5R5cXFqZVl7qFkJZSFMLsYXVs9mYHT
yarn tinypng

# Minify svg image
# 使用 svgo 壓縮圖檔
yarn svgo
```

This will automatically open http://localhost

## Build

```bash
# build for uat enviroment
# 結果會產出於 /dist 資料夾中
yarn build:uat

# build for production environment
# 結果會產出於 /dist 資料夾中
yarn build
```

## Project Structure

```shell
├─/docker         # nginx 路徑設定在這裡面！
├─src
│  ├─/assets              # icon 與 圖片
│  ├─/components          # 組件
│  ├─/eventContentConfigs # 各活動頁內容組成
│  ├─/html                # 各活動頁html組成(人肉 prerender)
│  ├─/public              # 各活動頁靜態檔
│  ├─/style               # 樣式：純粹用來引入 tailwind.css 沒必要不要擴充，組件自訂樣式可用 picostyle
│  ├─/utils               # 共用 functions
│  ├─/view                # 頁面容器組件
│  ├─index.html           # html 主檔：使用 posthtml expression 模板，於此引入 main.js
│  └─main.js              # js 主檔：在此引入 樣式 及 js 功能套件
├─.env                            # 環境變數
├─.env.development                # 環境變數(開發 & uat)
├─html-prender-content.config.js  # 所有活動頁 html 組成 (自動 prerender)
├─postcss.config.js               # postcss設定: tailwind, autoprefixer, purgecss
├─posthtml.config.js              # posthtml設定: html 變數模板 posthtml-expressions
└─tailwind.config.js              # tailwind css 自訂主題設定： container 寬度

```

## Environment Variables

環境變數被設定於 `.env` 中

| 變數名稱 | 說明                                  |
| -------- | ------------------------------------- |
| CURR_ENV | 專案辨識目前環境用                    |
| URL      | 本專案要部署的 url ， 給 meta tags 用 |
| APP_URL  | Api base url                          |

## Contact

chenyu
