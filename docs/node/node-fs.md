### fs 模块

#### 常用方法
- `flag` 模式 `r r+ w w+ rx rx+ wx wx+`
- `r+ rx+` 后者如果路径存在打开失败

- fd 文件描述符
- `fs.open(path[, flag, mode], callback(err, fd))`

- `stats` 类 文件信息类对象
- `fs.stat(path, callback(err, stats))`

- `fs.close(path, callback(err))`
- 文件描述符 存缓存数组， 从偏移量开始存， 存字节长度，从文件哪里开始读
- 读取字节数， 字节数缓存区
- `fs.read(fd, buffer, offset, length, position, function(err, bytes, buff))`
- `fs.writeFile(path, data[String|Buffer], options{encoding, mode, flag}, callback(err,))`

- 删除文件
- `fs.unlink(path, callback(err))`

- 绝对路径
- `fs.mkdir(path, callback(err))`
- `fs.rmdir(path, callback(err))`
- `fs.readdir(path, callback(err, dir<Array-))`

- `fs.rename(oldPAth, newPath, callback(err))`

// 截取文件
`fs.ftruncate(fd, bytes, callback(err))`


### formidable 使用 处理表单文件类型

```js
const form = new formidable.IncomingForm(options{})

oprions => { encoding , uploadDir , keepExtensions, allowEmptyFiles ,minFileSize, maxFileSize, maxFields 
  maxFieldsSize, hashAlgorithm ,fileWriteStreamHandler: null [file], multiples ,filename 
  filter 
  filter: function ({name, originalFilename, mimetype}) -- boolean
}
form.parse(req, (err, fileds, files))
```


## 跨域解决方案

图片 `ping` 单一通信 `get` `onload`, `onerror` 监听数据

`script` `jsonp` 双向通信 `get` 不安全 接受，出错不好处理

`postmessage` 通信 接受消息 `onmessage` 事件 `e.data postmessage` 发送消息

`websocket` 完美 持久 双向通信 只建一次连接

`cors` 跨域资源共享 缺点 要在后端设置 允许源等 `cross-orign-resource-share`

`csrf` 跨站请求违造
`xsr` 脚本注入攻击