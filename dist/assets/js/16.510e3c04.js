(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{286:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("h3",{attrs:{id:"常用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用"}},[t._v("#")]),t._v(" 常用")]),t._v(" "),e("p",[e("code",[t._v("git remote add origin url")])]),t._v(" "),e("p",[e("code",[t._v("git push --set-upstream origin master")])]),t._v(" "),e("h4",{attrs:{id:"回滚提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回滚提交"}},[t._v("#")]),t._v(" 回滚提交")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("reset")]),t._v(" 命令只能回滚最新的提交，无法满足保留最后一次提交只回滚之前的某次提交。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("HEAD^")]),t._v(" 表示上一个版本 几个^ 上几个版本 等于 "),e("code",[t._v("HEAD~1")]),t._v(" "),e("code",[t._v("HEAD~N")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("--soft")]),t._v(" 不删除工作区间的改动代码 撤销 "),e("code",[t._v("commit")]),t._v(" 不撤销 "),e("code",[t._v("add")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("--hard")]),t._v(" 删除工作区间的改动代码 撤销 "),e("code",[t._v("commit")]),t._v(" 且撤销 "),e("code",[t._v("add")])])])]),t._v(" "),e("div",{staticClass:"language-commit extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --soft HEAD^\n")])])]),e("div",{staticClass:"language-add extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git reset --hard HEAD^\n")])])]),e("h4",{attrs:{id:"修改提交注释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改提交注释"}},[t._v("#")]),t._v(" 修改提交注释")]),t._v(" "),e("p",[e("code",[t._v("git commit --amend")]),t._v("进入 "),e("code",[t._v("vim")]),t._v(" 模式")]),t._v(" "),e("p",[e("code",[t._v("git ls-files")]),t._v(" 命令是用来查看暂存区中文件信息")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("--cached(-c)显示暂存区中的文件，git ls-files命令默认的参数\n--deleted(-d)显示删除的文件\n--modified(-m) 显示修改过的文件\n--other(-o)显示没有被git跟踪的文件\n--stage(-s) 显示mode以及文件对应的Blob对象，进而我们可以获取暂存区中对应文件里面的内容。\n")])])]),e("h3",{attrs:{id:"git-remote-v-查看远程仓库地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-remote-v-查看远程仓库地址"}},[t._v("#")]),t._v(" git remote -v 查看远程仓库地址")])])}),[],!1,null,null,null);e.default=r.exports}}]);