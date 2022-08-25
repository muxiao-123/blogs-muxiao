## node-express-server

### 使用nodemailer 模块发送邮件

> `npm install nodemailer`

### 步骤

`SMTP MSA MTA`
> `smtp` 简单邮件传输协议 `SMTP://...`
> `MSA` 邮件提交代理 可信的 防止邮件被标记为垃圾箱中， 免费使用 qq gmail 等
> `mta` 邮件传输代理 邮件在互联网上传输

#### 创建实例
- `const nodemailer = require('nodemailer')`

#### 创建提交代理
- 代理对象
- 最简单的
- 内置代理服务 qq, gmail 等， 其他灭有的 要自信配置
- `auth` 通过代理服务器信息， 登录第三方软件中 pass 一般是授权码

`const tansporter = { servive: 'qq', auth: { user: '', pass: '' } }`

- 没有的 简单配置

```js
{ host: 'smtp.qq.com', port: 540, servive: 'qq', auth: {} }
```

- 通用选项
```js
{ port: '587', host: 'localhost', auth: { user: '', pass: '', } authMethod: ''}
```
- `port` – is the port to connect to (defaults to 587 if is secure is false or 465 if true)
host
- `auth` – defines authentication data (see authentication section below)
- `authMethod` -defines preferred authentication method, defaults to ‘PLAIN’

- `TLS` 选项 传输层安全协议 安全套接字 `SSL` 的规范
```js
{ secure: '', tls.servername: '' ignoreTLS: '' requireTLS: '' }
```
`secure` – if true the connection will use TLS when connecting to server. If false (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to true if you are connecting to port 465. For port 587 or 25 keep it false

`tls` – defines additional node.js TLSSocket options to be passed to the socket constructor, eg. {rejectUnauthorized: true}.

`tls.servername` - is optional hostname for TLS validation if host was set to an IP address

`ignoreTLS` – if this is true and secure is false then TLS is not used even if the server supports STARTTLS extension

`requireTLS` 
`const transporter = nodemailer.createTransport(transporter[, default])`
#### 通过代理发送邮件
```js
cosnt content = { from: 'sendEmail', to: 'acceptEmail', subject: 'subject', text: 'text', html: `<h>html<h/>` }
```

- `transporter.sendEmail(content)`

#### 发送是个异步过程 可返回一个promise 对象


#### 会话持久话设置

- 内存 `session` 不好

- 数据库 `session` `session-mongoose` 不好 仅支持 `express 2x,3x connect 2x`

#### 使用redis

> package redis connec-redis express-session  resdis > 2x redix@4x导入有错误
> 使用指定版本号 redis@3.1.2

##### 暴露事件

> 每当连接redis 服务器时都会有事件发生 是个异步过程 不支持原生promise 
> 需引入 polyify  到过 util工具模块 中的 util.promisify 转为promise 使用
1. connect 连接
2. ready 建立连接后发出
3. end 断开
4. error 错误
5. reconnecting 重连
6. warning  在设置密码但不需要密码并且使用不推荐使用的选项/功能/类似时发出

###### redis.createClient()：RedisClient objec

- 如果 Redis 服务器与客户端在同一台机器上运行，请尽可能考虑使用 unix 套接字以提高吞吐量。
- 得到服务器实例
- 同一台机器可能没问题 使用默认值 127.0.0.1 6379
- 使用'rediss://...在该协议redis_url将使TLS套接字连接。但是，options如果需要，需要传入额外的 TLS 选项
  redis.createClient([options])
  redis.createClient(unix_socket[, options])
  redis.createClient(redis_url[, options])
  redis.createClient(port[, host][, options])

### express-session

通过传入对象 实例化一个 `session`
只是保存 `sessionID` 在 `cookie` 自身上， 内容还是保存在服务器上
default 为一个 `memoryStore` 内存 `session` 不适用生产环境
可使用 `connect-redis` 或 `connect-mongodb` 转为数据库 `session` 持久话设置
redis 内存数据库 速度快 `mongodb` 文件数据库 运行稍慢
@ > @1.5 可以不适用 `cookie-parser` 中间件

#### options

```js
{ genid,cookie,secret, name,store,trustProxy,resaveSession,rollingSessions,saveUninitializedSession }
cookie: { httpOnly, domain, expires, maxAge, path, sameSite, secure,}
```

#### 暴露方法

- `regenerate sessionID`
`session.regenerate(callback)`

- `session.destroy(callback)`

- Reloads the session data from the store and re-populates the
`req.session` object. Once complete, the `callback` will be invoked.
reload()

- Save the session back to the store
- This method is automatically called at the end of the HTTP response
save()

- Updates the `.maxAge` property, not need callback
touch()

### `Store` 继承 `EventEmitter` 

方法有
```js
store.all(callback)

store.destroy(sid, callback)

store.clear(callback)

store.length(callback)

store.get(sid, callback)

store.set(sid, session, callback)

store.touch(sid, session, callback)
```
