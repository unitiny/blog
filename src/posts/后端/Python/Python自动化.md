---
icon: article
date: 2022-01-10
title: Python自动化
category:
- 后端
- Python

tag:
- Python自动化
---

## 提醒：

越是复杂庞大的自动化，越容易失误和成倍的精力。一般只需实现最多部分的重复工作即可，精细部分还得人工操作



## 进阶：

自动化程序是解决重复性的工作，而编写自动化代码要算一个重复性的工作，那何不写一个自动化编写程序的程序呢，只需在excel中写入指令和参数，程序就能照着指令运行



## pyautogui

https://blog.csdn.net/qingfengxd1/article/details/108270159



### selenium

[知乎](https://zhuanlan.zhihu.com/p/111859925)

[启动默认的火狐](https://www.pianshen.com/article/971618086/)

## 注意：

```
pyautogui.click() 会点击上次鼠标pyautogui.moveTo()的位置
```

```
offsetY = int(home.y - time.y)
pyautogui.scroll(clicks=offsetY) 可传变量，但变量要int格式化
```