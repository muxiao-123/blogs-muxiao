### 环境变量

#### JAVA环境变量配置：

1. 新建系统变量 `JAVA_HOME` 为jdk的安装目录：如 `C:\Program Files (x86)\Java\jdk1.7.0_13`

2. `path` 编辑 输入 `%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`

3. 新建 `CLASSPATH` 变量 变量值填写 .`;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar` 

命令行输入 java -version 验证即可。

---

#### 淘宝镜像配置：

持久使用：

`npm config set registry https://registry.npm.taobao.org`

验证是否成功：

`npm config get registry`

换回npm

`npm config set registry https://registry.npmjs.org`

---

#### 生成ssh 密钥

`cd ~/.ssh`
检查是否存在

`ssh-keygen -t rsa -C "....@qq.com"`
将 `.ssh` 目录下的 `id_rsa.pub` 内容复制到github 上设置ssh上

---

#### nginx 安装配置

直接在cmd 上运行 nginx

`start nginx`

检查任务是否存在

`tastlist /fi "imagename eq nginx.exe"`

结果

映像名称                       PID 会话名              会话#       内存使用
========================= ======== ================ =========== ============
nginx.exe                     5924 Console                    1      8,088 K
nginx.exe                     6728 Console                    1      8,172 K

优化配置

修改 nginx.conf 配置后

默认为nginx 安装目录下 执行

使用 `nginx -t -c conf/nginx.conf` 命令 动态更新配置

successful 即成功

> nginx: the configuration file I:\HHDSoft\web-serve\nginx-1.22.0/conf/nginx.conf syntax is ok
> nginx: configuration file I:\HHDSoft\web-serve\nginx-1.22.0/conf/nginx.conf test is successful


failed 失败
失败解决方案 检查路径是否正确

`start nginx` 启动 如果没有的话
`nginx -s reload` 否者 直接 重启

`nginx -s stop` 快速关闭
`nginx -s quit` 完整有序关闭

重启 nginx 
