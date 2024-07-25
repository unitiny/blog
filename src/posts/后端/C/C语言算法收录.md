---
icon: article
date: 2022-01-10
title: C语言算法收录
category:
- 后端
- C

tag:
- C语言算法收录
---

## 辗转相除法可求最大公约数和最小公倍数

```c
# include <stdio.h>
int main()
{
  long int n,m,t,max,min;
  scanf("%ld%ld",&n,&m);
  max=n,min=m;
  while(min!=0){
    t=max%min;
    max=min;
    min=t;
  }
  printf("%ld\n",max+m*n/max);
  return 0;
}
```

 

## 查找字符串某字母定位

```c
char *match(char *s, char ch) 
/* 函数返回值的类型是字符指针 */ 
{ 
while(*s != '\0') 
if(*s == ch) 
return(s); 
/* 若在字符串s 中找到字符ch，返回相应的地址 */ 
else 
s++; 
return(NULL); 
/* 在s 中没有找到ch，返回空指针 */ 
}
```

 

## 数组比较大小并排序

```c
for (int i = 0; i < n; i++)
{
    for(int j=i;j<n;j++)
        if (a[i] > a[j])
        {
            a[i] ^= a[j];
            a[j] ^= a[i];
            a[i] ^= a[j];
      }
}
```

 

## 冒泡排序法  两两对比，逐渐把最大最小数移到后面

```c
for (int i = 0; i < n; i++)
{
    for(int j=0;j<n-1-i;j++)
        if (a[j] > a[j+1])
        {
            a[j] ^= a[j+1];
            a[j+1] ^= a[j];
            a[j] ^= a[j+1];
      }
}
```

 

## 一维指针的应用

```c
char* p[5] = { NULL };  //数组
//给指针分配内存
for (int i = 0; i < 5; i++)
    p[i] = (char*)malloc(sizeof(char) * 20);
//赋值指针并计算长度
cout << "输入五个字符串:" << endl;
for (int i = 0; i < 5; i++)
{
    char* temp;
    cin >> p[i];  //并非改变地址，而是给这个地址的内容赋值
    temp = p[i];
    while (*p[i]!='\0')
    {
        p[i]=*(p+i)+1;
        n++;
    }
    p[i] = temp;   
    a[i] = n;
    n = 0;
}
```

 

## 字符串处理

### 介绍：

用字符指针实现函数mystrcat(char *s, char *t)，将字符串t 复制到字符串s 的末端， 

并且返回字符串s 的首地址

或者直接用strcat函数

```c
char* mystrcat(char* s, char* t)
{
	char* temp;
	temp = s;
	while (*s != '\0')
		s++;
	while (*t)	{
		*s = *t;
		s++; 
		t++;
	}
	*s = '\0';
	return temp;
}
```