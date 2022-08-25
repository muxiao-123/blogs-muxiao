## ts项目

### 配合husky
`npm pkg set <command>="cmd"`
`npm pkg set  scripts.prepare="husky install"`

```sh
npm set-script prepare "husky install"
npm run prepare
```

Add a hook:
```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

Make a commit:

```sh
git commit -m "Keep calm and commit"
# `npm test` will run
```

### 配合commitlint
```
install @commitlint/cli @commitlint/config-conventional
```

```sh
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

- husky 提交前钩子 执行lint操作
- commitlint 规范 提交注释
### 例子
- type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
- chore: some somepage
### type
- build 版本
- chore 日常
- ci
- docs 文档
- feat
- fix 修复
- perf
- refactor
- revert
- style
- test 测试


### 配合 lint-staged
- 在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的
- 但是整个项目上运行lint速度会很慢
- lint-staged能够让lint只检测暂存区的文件
- 速度快
pre-commit hook 做某些事情

```
lint-staged: { '*': [command] }
```

### 配合 prettier 格式化代码
--write 格式化 修改源代码
```
pretiter: {
  "semi": false,
  "singleQuote": true
}
```

### eslint 搭配 typescript airbnb prettier
#### npm包作用

```
eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
eslint-config-airbnb eslint-config-airbnb-typescript
eslint-config-prettier eslint-plugin-prettier
```

1.  `@typescript-eslint/parser` 提取js代码供eslint检查 默认解释器为 `estree` 与`@typescript-eslint/parser` 兼容
2.  `@typescript-eslint/eslint-plugin` 提供一个标准的内置rules配置 可在extends中直接使用 
    `/eslint-recommended`
    `/recommended` 可能有问题 can't not resolve #/define**/* from id 问题 路径解析出问题？
    eslint-config-import eslint-config-promise eslint-config-[etc]?

3.  `eslint-config-airbnb` 提供js 检查支持（jsx也就可以）
    `airbnb` 会包含对react的支持
    `airbnb/base` 不会包含对react的支持

4.  `eslint-config-airbnb-typescript` 提供对ts检查支持
    `airbnb-typescript` 会包含react（jsx）的支持
    `airbnb-typescript/base` 仅基础

5. `eslint-config-prettier` 提供对pretiier的支持(即关闭和prettier冲突的规则) = 用于禁用与prettier冲突的规则
    `eslint-plugin-prettier` 使用prettier检查格式 = 将prettier当做eslint规则来运行
    `plugin:prettier/recommended`
    启用`eslint-plugin-prettier`
    在rules中设`prettier/prettier`为error
    继承`eslint-config-prettier`的配置

  `eslint-plugin-compat` 检测使用的函数是否兼容浏览器 可选

#### 配置参考

##### commitlint
```
{
  "extend": ["@commitlint/config-conventional"]
}
```

##### eslint
```
  {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "ESNext",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    },
    "project": ["./tsconfig.json"]
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "airbnb/base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "no-console": 0,
    "eol-last": "error",
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-restricted-syntax": 0,
    "semi": 0
  }
}
```

##### tsconfig
```
{
  "compilerOptions": {
    "moduleResolution": "node",
    "target": "ESNext",
    "module": "ESNext",
    "lib": [ "es2015", "es2016", "es2017", "ES2018", "dom"],
    "declaration": true,
    "declarationDir": "dist/types",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    // 阻止 --noImplicitAny对缺少索引签名的索引对象报错 default false。
    // "suppressImplicitAnyIndexErrors": true,
    // 禁用在函数类型里对泛型签名进行严格检查 default: false
    "noStrictGenericChecks": true,
    "strict": true,
    "sourceMap": false,
    "types": [],
    "outDir": "dist/lib"
  },
  "include": ["src"]
}
```

##### lint-staged
```
{
   "*.ts": [
      "prettier --write",
      "git add"
    ]
}
```

##### pretiter

```
  "prettier": {
    "semi": false,
    "singleQuote": true
  },
```