---
icon: article
date: 2022-01-10
title: Go-Redis
category:
- 后端
- Go
- 项目笔记

tag:
- Go-Redis
---

## Redis

### redis通信协议

![image-20221024172412379](./image-20221024172412379.png)



- 正常回复

	```
	+OK\r\n
	```

	

- 错误回复

	```
	-Error Msg\r\n
	```

	

- 整数

	```
	:123456\r\n
	```

	

- 多行字符串

	```
	$7\r\nunitiny\r\n
	```

	

- 数组

	```
	*3\r\n$3\r\nSET\r\n$3\r\nKEY\r\n$5\r\nVALUE\r\n
	```