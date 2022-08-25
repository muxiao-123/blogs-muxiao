### 命令
### 常用
`git remote add origin url`

`git push --set-upstream origin master`

#### 回滚提交
- `reset` 命令只能回滚最新的提交，无法满足保留最后一次提交只回滚之前的某次提交。

- `HEAD^` 表示上一个版本 几个^ 上几个版本 等于 `HEAD~1` `HEAD~N`
- `--soft` 不删除工作区间的改动代码 撤销 `commit` 不撤销 `add`
- `--hard` 删除工作区间的改动代码 撤销 `commit` 且撤销 `add`

```commit
git reset --soft HEAD^
```
``` add
git reset --hard HEAD^
```

#### 修改提交注释 
`git commit --amend `进入 `vim` 模式

`git ls-files` 命令是用来查看暂存区中文件信息

```
--cached(-c)显示暂存区中的文件，git ls-files命令默认的参数
--deleted(-d)显示删除的文件
--modified(-m) 显示修改过的文件
--other(-o)显示没有被git跟踪的文件
--stage(-s) 显示mode以及文件对应的Blob对象，进而我们可以获取暂存区中对应文件里面的内容。
```

### git remote -v 查看远程仓库地址