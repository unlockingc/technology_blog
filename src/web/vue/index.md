---
title: Vue3
---

# Abstract
Vue所有的东西记忆可以分为4大部分：
1. 语法糖
   1. directive
   2. 自定义directive
2. app与生命周期
   1. 暂时不用管
3. 事件与管理
   1. emit/watch
   2. errorHandler
4. component
   1. 单个component
      1. 单文件
         1. 渲染
            1. 直接写html\<template\>
            2. 写一个render函数
               1. h函数
      2. data
      3. method
      4. computed
   2. 两个component的通讯
      1. props
      2. provide/inject
   3. DOM树
      1. el节点
      2. router
   4. 反DOM：
      1. slot
      2. teleport