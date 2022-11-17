(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{304:function(t,s,e){"use strict";e.r(s);var a=e(13),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"mongo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongo"}},[t._v("#")]),t._v(" Mongo")]),t._v(" "),s("ol",[s("li",[t._v("查看当前连接数\n"),s("code",[t._v("db.serverStatus().connections")])])]),t._v(" "),s("h4",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" redis")]),t._v(" "),s("ol",[s("li",[t._v("启动 "),s("code",[t._v("redis")]),t._v(" 服务")])]),t._v(" "),s("p",[s("code",[t._v("redis-serve.exe")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("可指定配置文件")])]),t._v(" "),s("p",[s("code",[t._v("redis-serve.exe redis.windows.conf")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("连接 "),s("code",[t._v("redis")])])]),t._v(" "),s("p",[s("code",[t._v("redis-cli.exe")]),t._v("\n有时候中文会乱码  要在 "),s("code",[t._v("redis-cli")]),t._v(" 后面加上 "),s("code",[t._v("--raw")])]),t._v(" "),s("p",[t._v("可指定主机 端口号 密码")]),t._v(" "),s("p",[s("code",[t._v("redis-cli.exe -h 127.0.0.1 -p 6379 -a password")])]),t._v(" "),s("p",[t._v("检查 连接 "),s("code",[t._v("ping")])]),t._v(" "),s("p",[t._v("默认数据库为0  数据库是以0为起点 的增量1")]),t._v(" "),s("p",[s("code",[t._v("set db_number")]),t._v(" 0 设置当前数据库选择\n"),s("code",[t._v("get db_number")]),t._v(" 得到当前数据库编号\n"),s("code",[t._v("select")]),t._v(" 1 切换到1号数据库")]),t._v(" "),s("p",[s("code",[t._v("redis-cli shutdown")]),t._v(" 关闭 "),s("code",[t._v("redis connect")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Error")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Redis connection to "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v(" failed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" connect "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ECONNREFUSED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n    at TCPConnectWrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("afterConnect "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" oncomplete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1141")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("errno")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ECONNREFUSED'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ECONNREFUSED'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("syscall")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connect'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("address")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"使用-redis-redis-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-redis-redis-session"}},[t._v("#")]),t._v(" 使用 redis redis-session")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("package redis connec-redis express-session resdis > 2x redix@4x")]),t._v("导入有错误\n使用指定版本号 "),s("code",[t._v("redis@3.1.2")])])]),t._v(" "),s("ol",[s("li",[t._v("暴露事件")])]),t._v(" "),s("blockquote",[s("p",[t._v("每当连接 redis 服务器时都会有事件发生 是个异步过程 不支持原生 promise\n需引入 polyify  到过 util工具模块 中的 util.promisify 转为promise 使用")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("connect")]),t._v(" 连接")]),t._v(" "),s("li",[s("code",[t._v("ready")]),t._v(" 建立连接后发出")]),t._v(" "),s("li",[s("code",[t._v("end")]),t._v(" 断开")]),t._v(" "),s("li",[s("code",[t._v("error")]),t._v(" 错误")]),t._v(" "),s("li",[s("code",[t._v("reconnecting")]),t._v(" 重连")]),t._v(" "),s("li",[s("code",[t._v("warning")]),t._v("  在设置密码但不需要密码并且使用不推荐使用的选项/功能/类似时发出")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v("redis.createClient()：RedisClient objec")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("如果 Redis 服务器与客户端在同一台机器上运行，请尽可能考虑使用 "),s("code",[t._v("unix")]),t._v(" 套接字以提高吞吐量。")])]),t._v(" "),s("li",[s("p",[t._v("得到服务器实例")])]),t._v(" "),s("li",[s("p",[t._v("同一台机器可能没问题 使用默认值 "),s("code",[t._v("127.0.0.1 6379")])])]),t._v(" "),s("li",[s("p",[t._v("使用"),s("code",[t._v("rediss://...")]),t._v("在该协议 redis_url 将使 "),s("code",[t._v("TLS")]),t._v(" 套接字连接。但是，"),s("code",[t._v("options")]),t._v(" 如果需要，需要传入额外的 "),s("code",[t._v("TLS")]),t._v(" 选项")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nredis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unix_socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nredis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("redis_url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nredis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"options-对象可选参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-对象可选参数"}},[t._v("#")]),t._v(" options 对象可选参数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("host")]),t._v(" - Redis服务器的IP地址。默认值为："),s("code",[t._v("127.0.0.1")])]),t._v(" "),s("li",[s("code",[t._v("port")]),t._v(" - Redis服务器的端口。默认值为："),s("code",[t._v("6379")])]),t._v(" "),s("li",[s("code",[t._v("path")]),t._v(" - Redis服务器的UNIX套接字路径。默认为："),s("code",[t._v("null")])]),t._v(" "),s("li",[s("code",[t._v("url")]),t._v(" - Redis服务器的 URL。格式为 "),s("code",[t._v("redis:]//[[user][:password@]]host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]")]),t._v("。默认为："),s("code",[t._v("null")])]),t._v(" "),s("li",[s("code",[t._v("parser")]),t._v(" - 使用内置的JS解析或使用hiredis解析，在< 2.6的版本中hiredis会默认被安装。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("string_numbers")]),t._v(" - 设置为true时会返回Redis数字字符串代替JavaScript数字字符串。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("return_buffers")]),t._v(" - 设置为true时会向回调函数返回Buffer而不是字符串。默认为：false")]),t._v(" "),s("li",[s("code",[t._v("detect_buffers")]),t._v(" - 设置为true时会向回调函数返回Buffer而不是字符串，不同于 "),s("code",[t._v("return_buffers")]),t._v("，这个参数会针对每一个命令的基础上进行Buffer和字符串之间进行转换。默认为：false")]),t._v(" "),s("li",[s("code",[t._v("socket_keepalive")]),t._v(" - 设置为true时，会保持socket套接字的连接。默认为：true")]),t._v(" "),s("li",[s("code",[t._v("no_ready_check")]),t._v(" - 当建立到Redis 服务器的连接时，仍可以从磁盘加载数据，加载时服务器不会响应任何命令。为了解决这个问题，node_redis会向服务器发送一个INFO命令以检查服务器的状态。默认为：false")]),t._v(" "),s("li",[s("code",[t._v("enable_offline_queue")]),t._v(" - 默认情况下，当Redis 服务器没有活跃的连接时，这个命令会被添加到队列且会立即执行；当此选项设置为false时，会禁用此功能。默认为：true")]),t._v(" "),s("li",[s("code",[t._v("retry_max_delay")]),t._v(" - 默认情况下，客户端会在上次失败后延时一倍时间再次尝试重连，此选项用于设置尝试重连的时候。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("max_attempts")]),t._v(" - 此选项用于设置客户端连接和重新连接的时间。默认为："),s("code",[t._v("3600000")])]),t._v(" "),s("li",[s("code",[t._v("connect_timeout")]),t._v(" - 不再使用，请用 "),s("code",[t._v("retry_strategy")]),t._v(" 选项替代")]),t._v(" "),s("li",[s("code",[t._v("retry_unfulfilled_commands")]),t._v(" - 设置为true时，所有未实现的命令会重新连接后重试。默认为：true")]),t._v(" "),s("li",[s("code",[t._v("password")]),t._v(" - 用于Redis 服务器验证的密码，别名 "),s("code",[t._v("auth_pass")]),t._v("。在< 2.5的版本中必须使用 "),s("code",[t._v("auth_pass")]),t._v("。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("db")]),t._v(" - 设置后会在连接时执行select命令连接到指定数据库。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("family")]),t._v(" - 连接Redis服务器使用的IP协议族，参见Node.js的net模块和nds模块相关介绍。默认为：IPv4")]),t._v(" "),s("li",[s("code",[t._v("disable_resubscribing")]),t._v(" - 设置为true时，客户端断开连接后不会重新订阅。默认为：false")]),t._v(" "),s("li",[s("code",[t._v("rename_commands")]),t._v(" - 传入一个对象，对Redis 命令进行重命名。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("tls")]),t._v(" - 设置连接到Redis 服务器的TLS连接。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("prefix")]),t._v(" - 设置键的前缀。默认为：null")]),t._v(" "),s("li",[s("code",[t._v("retry_strategy")]),t._v(" - 一个包含 "),s("code",[t._v("attempt")]),t._v(" 选项的函数，"),s("code",[t._v("total_retry_time")]),t._v(" 选项会标识重试的次数。默认为：function")])])])}),[],!1,null,null,null);s.default=r.exports}}]);