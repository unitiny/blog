---
icon: article
date: 2022-01-10
title: Python Django笔记
category:
- 后端
- Python

tag:
- Python Django
---

## 安装

```python
pip install django

django-admin.py startproject projectname  # 创建项目
python manage.py startapp myweb     	  # 创建第一个应用，应和manage.py同层级

python manage.py migrate  		# 数据库迁移
python manage.py runserver		# 启动django
```





## 语法

### setting配置

```python
Path(__file__).resolve().parent.parent   # 找到根目录

LANGUAGE_CODE = 'zh-Hans'  # 配置语言

TIME_ZONE = 'Asia/Shanghai'  # 时间区域
```





## 功能

设置请求头

```
ALLOWED_HOSTS = ['www.baidu.com']  #在setting中
```



## 问题

### pycharm的newproject左侧没有项目选项

https://www.jb51.net/article/196282.htm



## 注意