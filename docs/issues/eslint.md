### 出问题
`"plugin:@typescript-eslint/recommended"`
`can't resolve reference #/definitions/directiveConfigSchema from id #`

`Unable to resolve path to module`

- `npm install eslint-plugin-react` 配合 `airbnb` 规则
- 可处理`jsx`
#### import/no-unresolved

js 处理

可使用 `airbnb `

- `ts airbnb-typescript/base`

### 
- `no-param-reassign` 由功能参数的修改或重新分配引起的意外行为。 `error`


- `eslint-config-prettier`用于禁用与`prettier`冲突的规则。
- `eslint-plugin-prettier`将`prettier`当做`eslint`规则来运行。
- `eslint-plugin-compat`检测使用的函数是否兼容浏览器。

- `plugin:prettier/recommended`需作为最后一个扩展，它做了三件事：
- 启用`eslint-plugin-prettier`。
- 在`rules`中设置`prettier/prettier`为`error`。
- 继承`eslint-config-prettier`的配置。