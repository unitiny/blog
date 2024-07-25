---
icon: article
date: 2022-01-10
title: Git笔记
category:
- 运维

tag:
- Git
---

## 语法：

mkdir name 创建文件夹

git init  创建git项目

git add read.txt 向git库添加文件

git commit -m “explain” 向库提交多个文件，-m后面是注释

git status  查看当前状态，若有修改文件但未提交会有提醒

git diff read.txt  查看文件修改之处

git log --pretty=oneline 查看修改日志信息

git reset --hard HEAD^ 回退到上一个版本，多加^表示再上一个版本

git checkout -- file 撤销修改

git checkout -b dev 或 git switch -c dev  创建并切换分支dev

git checkout master 或 git switch master 切换到master分支

git branch  查看当前分支

git merge dev 合并dev到master分支上

git branch -d dev 删除dev分支

git remote -v 查看当前remote状态

git push origin --delete master  删除远程master分支

git push -u origin master 正常上传master分支

git remote set-url origin https://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@github.com/unitiny/chess-back.git   重设远程url



## 记录

### token

```
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
```





## 问题

#### fatal: unable to access 'xxx': Failed to connect to github.com port 443: Timed out

[解决](https://blog.csdn.net/m0_45388819/article/details/115795229)



#### fatal:remote error:You can't push to git://github.com/username/*.git

[解决](https://blog.csdn.net/qq_24135817/article/details/79830630)

```
用ssh的链接才行不知为什么
```



#### fatal: unable to connect to github.com:github.com[0: 140.82.112.3]: errno=Unknown erro

[网址](https://www.cnblogs.com/riddly/p/16134255.html)