## 初级操作

Github越来越受到人们的欢迎，尤其是深受程序员的喜爱，无论学习到什么程度，Github都是你不可或缺的存在。
首先你要去创建一个Github账号，可以访问[这里](https://github.com)先去创建一个账号。
有了账号之后我们可以在创建一个自己仓库。
![创建仓库第一步](http://upload-images.jianshu.io/upload_images/5290967-d1b821b5c0617286.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
当你创建完成之后会跳到下面这张图上去。
![创建仓库第二步](http://upload-images.jianshu.io/upload_images/5290967-f13f02637fe1afc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然后他又会跳到这里，这个时候你的仓库已经创建完成了。这个时候我们要上传代码，就需要使用Git bash了，虽然Github也有客户端，但是不得不说，还是命令行让人比较感动。

先在命令行里面输入：
```
ssh-keygen -t rsa -C "你的邮箱"
```
之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。成功的话会在`~/`下生成`.ssh`文件夹，进去，打开id_rsa.pub，复制里面的key。`~/`目录就是`C/User/"你的用户名" `

![进入个人设置](http://upload-images.jianshu.io/upload_images/5290967-f5ef234fa2c3ee64.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![选择ssh页面](http://upload-images.jianshu.io/upload_images/5290967-21db385b2608054b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在选择右上角绿色的new ssh
title是你为这个ssh起的名字，这个随意，下面的Key填入我们刚才复制的内容，注意是以你的邮箱结尾的哦！

![添加ssh](http://upload-images.jianshu.io/upload_images/5290967-c122c23673e3d97f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
在命令行中输入：`ssh-keygen -t rsa -C "你的邮箱"`来验证一下，验证成功会返回下面这几行代码

![image.png](http://upload-images.jianshu.io/upload_images/5290967-27c42a709c3ea378.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
如果你想将你的代码提交到Github上面还需要绑定你的账号，因为Github每次被提交代码的时候会记录你的用户名。输入
`git config --global user.name "你的用户名"`
`git config --global user.email "你的邮箱"`
绑定你的用户名和邮箱，这个时候已经可以使用Github提供的一些功能了，比如：
##### 克隆一个项目并下载到本地
`git clone "你的仓库的ssh链接"`
比如我的链接就是`git clone git@github.com:a775691134/Live14_DHR.git`
这会将我们克隆的代码下载到我们打开`git bash`的地方
##### 提交你写的代码
```
git add .
git commit -m "本次更新内容概要"
git push origin master
```
##### 把远程仓库的变动更新合并到本地仓库
`git pull`
以上就是Github的一些基本操作，希望大家能够喜欢，求喜欢求关注。

### 高级操作

下面是Github的一些高级操作，包括

##### git status
查看用户文件当前的状态，大致分为以下三种状态：
1. 与当前仓库中文件一致，不需要提交；
2. 目标文件与当前文件不一致，需要提交；
3. 提交但是没有推送。
提交：将本地文件提交到本地的仓库中，但是Github中的文件并没有更新。
推送：将Github中的仓库更新为本地的仓库，也就是把我们本地仓库中文件夹推送到Github的服务器中。

##### git checkout -- .
将本地仓库的文件重新置为上一次未修改前的状态。

##### git reset --hard xxx
已提交到本地，回滚提交

##### git reset --soft xxx
 撤销本地commit

git revert xxx
将要撤销的提交revert为一次新的提交，这样不仅提交被撤销了，而且本地分支也比远程分支多一次提交