## 编辑器使用 vscode

#### 安装
https://code.visualstudio.com/ 下载对应系统的 stable 安装包安装

#### 插件

- Project Manager 项目管理
- Debugger for Chrome 调试工具
- Angular 8 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
- TSLint
- Path Intellisense 路径提示
- GitLens git 工具
- Prettier - Code formatter 格式化工具
- sass
- Beautify 格式化
- Angular Generator


#### 个性化配置
```
{
  "workbench.editor.enablePreview": false,
  "git.autofetch": true,
  "workbench.colorTheme": "Panda Syntax",
  "html.format.indentHandlebars": true,
  "html.format.endWithNewline": true,
  "html.format.indentInnerHtml": true,
  "editor.codeLens": false,
  "editor.renderWhitespace": "none",
  "editor.autoIndent": true,
  "editor.fontSize": 14,
  "editor.formatOnPaste": false,
  "editor.formatOnType": true,
  "editor.formatOnSave": true,
  "editor.letterSpacing": 1,
  "editor.tabSize": 2,
  "editor.wordWrap": "off",
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.associations": {
    "*.ts": "typescript",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "typescript.preferences.importModuleSpecifier": "non-relative",
  "explorer.confirmDelete": false,
  "search.exclude": {
    "**/dist": true
  },
  "gitlens.views.repositories.files.layout": "tree",
  "window.zoomLevel": 0,
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "search.followSymlinks": false,
  "vsicons.projectDetection.autoReload": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  }
}
```

## 包管理工具 yarn
https://yarnpkg.com/zh-Hans/ 下载安装包安装或者使用 npm install -g yarn，推荐安装包安装

#### yarn 命令

- 添加一个依赖
  - yarn add [package]
  - yarn add [package]@[version]
  - yarn add [package]@[tag]

- 更新一个依赖
  - yarn upgrade [package]
  - yarn upgrade [package]@[version]
  - yarn upgrade [package]@[tag]


- 移除一个依赖
  - yarn remove [package]


- 更新依赖
  - yarn upgrade-interactive --latest



## 工程安装

1. 安装最新的 nodejs 以及 npm
2. npm install -g @angular/cli
3. npm install –g typescript
4. yarn install --network-timeout 1000000
5. yarn start
