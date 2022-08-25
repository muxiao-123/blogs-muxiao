### Mongo

1. 查看当前连接数
`db.serverStatus().connections`

#### redis

1. 启动 `redis` 服务

`redis-serve.exe`

2. 可指定配置文件

`redis-serve.exe  redis.windows.conf`

3. 连接 `redis`

`redis-cli.exe` 
有时候中文会乱码  要在 `redis-cli` 后面加上 `--raw`

可指定主机 端口号 密码

`redis-cli.exe -h 127.0.0.1 -p 6379 -a password`

检查 连接 `ping`

默认数据库为0  数据库是以0为起点 的增量1

`set db_number` 0 设置当前数据库选择
`get db_number` 得到当前数据库编号
`select` 1 切换到1号数据库

`redis-cli shutdown` 关闭 `redis connect`

```js
Error: Redis connection to 127.0.0.1:6379 failed - connect ECONNREFUSED 127.0.0.1:6379
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1141:16) {
  errno: 'ECONNREFUSED',
  code: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 6379
}
  ```

#### 使用 redis redis-session

> `package redis connec-redis express-session  resdis > 2x redix@4x`导入有错误
> 使用指定版本号 `redis@3.1.2`

1. 暴露事件

> 每当连接 redis 服务器时都会有事件发生 是个异步过程 不支持原生 promise 
> 需引入 polyify  到过 util工具模块 中的 util.promisify 转为promise 使用
- `connect` 连接
- `ready` 建立连接后发出
- `end` 断开
- `error` 错误
- `reconnecting` 重连
- `warning`  在设置密码但不需要密码并且使用不推荐使用的选项/功能/类似时发出

2. `redis.createClient()：RedisClient objec`

- 如果 Redis 服务器与客户端在同一台机器上运行，请尽可能考虑使用 `unix` 套接字以提高吞吐量。
- 得到服务器实例
- 同一台机器可能没问题 使用默认值 `127.0.0.1 6379`
- 使用`rediss://...`在该协议 redis_url 将使 `TLS` 套接字连接。但是，`options` 如果需要，需要传入额外的 `TLS` 选项

  ```js
  redis.createClient([options])
  redis.createClient(unix_socket[, options])
  redis.createClient(redis_url[, options])
  redis.createClient(port[, host][, options])
  ```

### options 对象可选参数

- `host` - Redis服务器的IP地址。默认值为：`127.0.0.1`
- `port` - Redis服务器的端口。默认值为：`6379`
- `path` - Redis服务器的UNIX套接字路径。默认为：`null`
- `url` - Redis服务器的 URL。格式为 `redis:]//[[user][:password@]]host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]`。默认为：`null`
- `parser` - 使用内置的JS解析或使用hiredis解析，在< 2.6的版本中hiredis会默认被安装。默认为：null
- `string_numbers` - 设置为true时会返回Redis数字字符串代替JavaScript数字字符串。默认为：null
- `return_buffers` - 设置为true时会向回调函数返回Buffer而不是字符串。默认为：false
- `detect_buffers` - 设置为true时会向回调函数返回Buffer而不是字符串，不同于 `return_buffers`，这个参数会针对每一个命令的基础上进行Buffer和字符串之间进行转换。默认为：false
- `socket_keepalive` - 设置为true时，会保持socket套接字的连接。默认为：true
- `no_ready_check` - 当建立到Redis 服务器的连接时，仍可以从磁盘加载数据，加载时服务器不会响应任何命令。为了解决这个问题，node_redis会向服务器发送一个INFO命令以检查服务器的状态。默认为：false
- `enable_offline_queue` - 默认情况下，当Redis 服务器没有活跃的连接时，这个命令会被添加到队列且会立即执行；当此选项设置为false时，会禁用此功能。默认为：true
- `retry_max_delay` - 默认情况下，客户端会在上次失败后延时一倍时间再次尝试重连，此选项用于设置尝试重连的时候。默认为：null
- `max_attempts` - 此选项用于设置客户端连接和重新连接的时间。默认为：`3600000`
- `connect_timeout` - 不再使用，请用 `retry_strategy` 选项替代
- `retry_unfulfilled_commands` - 设置为true时，所有未实现的命令会重新连接后重试。默认为：true
- `password` - 用于Redis 服务器验证的密码，别名 `auth_pass`。在< 2.5的版本中必须使用 `auth_pass`。默认为：null
- `db` - 设置后会在连接时执行select命令连接到指定数据库。默认为：null
- `family` - 连接Redis服务器使用的IP协议族，参见Node.js的net模块和nds模块相关介绍。默认为：IPv4
- `disable_resubscribing` - 设置为true时，客户端断开连接后不会重新订阅。默认为：false
- `rename_commands` - 传入一个对象，对Redis 命令进行重命名。默认为：null
- `tls` - 设置连接到Redis 服务器的TLS连接。默认为：null
- `prefix` - 设置键的前缀。默认为：null
- `retry_strategy` - 一个包含 `attempt` 选项的函数，`total_retry_time` 选项会标识重试的次数。默认为：function