(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{294:function(v,_,n){"use strict";n.r(_);var s=n(13),e=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"环境变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[v._v("#")]),v._v(" 环境变量")]),v._v(" "),_("h4",{attrs:{id:"java环境变量配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java环境变量配置"}},[v._v("#")]),v._v(" JAVA环境变量配置：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("新建系统变量 "),_("code",[v._v("JAVA_HOME")]),v._v(" 为jdk的安装目录：如 "),_("code",[v._v("C:\\Program Files (x86)\\Java\\jdk1.7.0_13")])])]),v._v(" "),_("li",[_("p",[_("code",[v._v("path")]),v._v(" 编辑 输入 "),_("code",[v._v("%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin;")])])]),v._v(" "),_("li",[_("p",[v._v("新建 "),_("code",[v._v("CLASSPATH")]),v._v(" 变量 变量值填写 ."),_("code",[v._v(";%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\tools.jar")])])])]),v._v(" "),_("p",[v._v("命令行输入 java -version 验证即可。")]),v._v(" "),_("hr"),v._v(" "),_("h4",{attrs:{id:"淘宝镜像配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#淘宝镜像配置"}},[v._v("#")]),v._v(" 淘宝镜像配置：")]),v._v(" "),_("p",[v._v("持久使用：")]),v._v(" "),_("p",[_("code",[v._v("npm config set registry https://registry.npm.taobao.org")])]),v._v(" "),_("p",[v._v("验证是否成功：")]),v._v(" "),_("p",[_("code",[v._v("npm config get registry")])]),v._v(" "),_("p",[v._v("换回npm")]),v._v(" "),_("p",[_("code",[v._v("npm config set registry https://registry.npmjs.org")])]),v._v(" "),_("hr"),v._v(" "),_("h4",{attrs:{id:"生成ssh-密钥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生成ssh-密钥"}},[v._v("#")]),v._v(" 生成ssh 密钥")]),v._v(" "),_("p",[_("code",[v._v("cd ~/.ssh")]),v._v("\n检查是否存在")]),v._v(" "),_("p",[_("code",[v._v('ssh-keygen -t rsa -C "....@qq.com"')]),v._v("\n将 "),_("code",[v._v(".ssh")]),v._v(" 目录下的 "),_("code",[v._v("id_rsa.pub")]),v._v(" 内容复制到github 上设置ssh上")]),v._v(" "),_("hr"),v._v(" "),_("h4",{attrs:{id:"nginx-安装配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nginx-安装配置"}},[v._v("#")]),v._v(" nginx 安装配置")]),v._v(" "),_("p",[v._v("直接在cmd 上运行 nginx")]),v._v(" "),_("p",[_("code",[v._v("start nginx")])]),v._v(" "),_("p",[v._v("检查任务是否存在")]),v._v(" "),_("p",[_("code",[v._v('tastlist /fi "imagename eq nginx.exe"')])]),v._v(" "),_("p",[v._v("结果")]),v._v(" "),_("p",[v._v("映像名称                       PID 会话名              会话#       内存使用\n========================= ======== ================ =========== ============\nnginx.exe                     5924 Console                    1      8,088 K\nnginx.exe                     6728 Console                    1      8,172 K")]),v._v(" "),_("p",[v._v("优化配置")]),v._v(" "),_("p",[v._v("修改 nginx.conf 配置后")]),v._v(" "),_("p",[v._v("默认为nginx 安装目录下 执行")]),v._v(" "),_("p",[v._v("使用 "),_("code",[v._v("nginx -t -c conf/nginx.conf")]),v._v(" 命令 动态更新配置")]),v._v(" "),_("p",[v._v("successful 即成功")]),v._v(" "),_("blockquote",[_("p",[v._v("nginx: the configuration file I:\\HHDSoft\\web-serve\\nginx-1.22.0/conf/nginx.conf syntax is ok\nnginx: configuration file I:\\HHDSoft\\web-serve\\nginx-1.22.0/conf/nginx.conf test is successful")])]),v._v(" "),_("p",[v._v("failed 失败\n失败解决方案 检查路径是否正确")]),v._v(" "),_("p",[_("code",[v._v("start nginx")]),v._v(" 启动 如果没有的话\n"),_("code",[v._v("nginx -s reload")]),v._v(" 否者 直接 重启")]),v._v(" "),_("p",[_("code",[v._v("nginx -s stop")]),v._v(" 快速关闭\n"),_("code",[v._v("nginx -s quit")]),v._v(" 完整有序关闭")]),v._v(" "),_("p",[v._v("重启 nginx")])])}),[],!1,null,null,null);_.default=e.exports}}]);