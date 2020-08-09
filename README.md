<div align="center">

# 签名档生成器
</div>

## 简介
基于 Nodejs 和 GraphicsMagick 开发的 IP 签名档，可以用来~~装逼~~
## 展示
### 简洁模式
![简洁模式](https://github.com/Hydrostic/ipcounter/blob/master/show_1.png)
### 完整模式
![完整模式](https://github.com/Hydrostic/ipcounter/blob/master/show_2.png)
## 用法
### 在线版
#### 简洁模式
- 图片获取: 
```
https://tool.hydrostic.com:1315/ipcounter
```
- Markdown: 
```markdown
![anything you want](https://tool.hydrostic.com:1315/ipcounter)
```
- HTML:
```html
<img src="https://tool.hydrostic.com:1315/ipcounter" alt="anything you want">
```
#### 完整模式
- 图片获取: 
```
https://tool.hydrostic.com:1315/ipcounter?mode=2&bilibili={your bilibili account}&github={your github account}&mail={your email}&luogu={your luogu account}
```
- Markdown: 
```markdown
![anything you want](https://tool.hydrostic.com:1315/ipcounter?mode=2&bilibili={your bilibili account}&github={your github account}&mail={your email}&luogu={your luogu account})
```
- HTML:
```html
<img src="https://tool.hydrostic.com:1315/ipcounter?mode=2&bilibili={your bilibili account}&github={your github account}&mail={your email}&luogu={your luogu account}" alt="anything you want">
```

### 自部署
```bash
cd #any dir you want
git clone https://github.com/Hydrostic/ipcounter.git
cd ipcounter
npm install #也可使用 cnpm install

# ubuntu
apt-get install graphicsmagick
# centos
yum install graphicsmagick

npm run start # 启动
```
然后服务就跑在 1314 端口上啦!

## 感谢

[xhboke的签名档（php 原版）](https://github.com/xhboke/IP)

[hanlin-studio的签名档（php 改编）](https://github.com/hanlin-studio/IP)

这两个作品带给我的启发

## 授权
MIT