

# WEB技术总览

## 目的
本文作为WEB技术的大纲，给出了每一个详细模块在WEB的作用，和网页运行的基本原理。

## 总览图

> Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web^[2]^

WEB前端三大科技：HTML、CSS、JavaScript。也就是说，一个网页最多包含三种文件：html、css、js。

什么是WEB？这里特指互联网中的网页。


<iframe src='https://app.boardos.online/board/embed/6155a17f8b048703ada5cd54?target=ou1NToVxHhAWkYCp_h4pr' width='100%' height='480px' style='min-width: 640px; min-height: 480px; background-color: #f4f4f4; border: 1px solid #efefef' sandbox='allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>

如图，网页是服务端计算机给客户端计算机提供的一种页面展示服务。客户端（如chrome（user agent））通过HTTP协议和服务端交流，索要需要的资源，并将其渲染给用户。


### Example

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>I'm the simplest website page.</p>
  </body>
</html>
```


<iframe src="https://codesandbox.io/embed/admiring-wozniak-50hf6?autoresize=1&fontsize=14&hidenavigation=1&moduleview=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="admiring-wozniak-50hf6"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

::: tip
点击左侧中间按钮编辑
:::

## What and Why

### HTTP
HTTP[^wiki^](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)是一种通讯协议(应用层[^wiki^](https://en.wikipedia.org/wiki/OSI_model))，它两个机器使用它传输信息的机器能更方便高效。通讯协议有很多，但是职责不同。比如FTP/POP/SMTP/IMTP。它们存在的目的在于制定一定的标准，从而使特定的具体事务变得简单清晰。

HTTP的诞生，主要是用于在机器间传输人类可读的媒体文件，当然作为一个出色应用层的协议，他现在也“兼职”一些其他事务。

他已于2015年步入2.0版本。

### HTML
HTML：HyperText markup language
Hyper在希腊词根中表示超^[1]^,简单可以理解为夹杂诸如色彩，图片，视频等花哨元素的文本。

HTML的诞生和发展动力内核源于互联网为HyperText提供了快速的传播媒介和展示平台。

那么markup language是什么意思。markup:标记。我们要展示一些内容，并且需要操纵内容的能力。那么我们就要给内容中的每一部分起名字，这个过程就是markup，而标记的结果，就是DOM。

比如我作为一个老师，我说明天马小东你站第一排，韩红雷你站最后一排，小胖你明天穿校服。马小东、韩红雷、小胖就是名字。有了名字，我就不用说，第一千个字符，你放大一下自己，第一千到第两千个字符，你环绕一下第八张图片。

这实际上就是一种协议，一种约定。

::: tip DOM
Document Object Model，是HTML语言对各个元素标记后形成的元素树，元素树的每一个节点就是一个元素对象（object）。对HTML进行解读形成如下图的DOM树，每个DOM节点都有三个值：property(class、id etc);attribute(href etc); content(`<?>content</?>`)
:::

<iframe src='https://app.boardos.online/board/embed/6155a17f8b048703ada5cd54?target=hzHvrVzfVsDMwHZnO2M_D' width='100%' height='480px' style='min-width: 640px; min-height: 480px; background-color: #f4f4f4; border: 1px solid #efefef' sandbox='allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>


### [CSS](./css.md)
CSS[^wiki^](https://en.wikipedia.org/wiki/CSS)是在DOM中选择元素进行背景、边框等样式渲染的一种说明性语言

### [Javascript](./javascript.md)
Javascript[^wiki^](https://en.wikipedia.org/wiki/JavaScript)正如引用中所述，与HTML，CSS并称Web三大技术。

那么他的最初意图和一直以来的主要作用是，作为让网页产生交互性和动态元素的脚本语言。

但现在，给予javascript的功能也不断的逐渐丰富。成为了web中的唯一工具语言。正如python语言在软件界的地位一般。

### PHP/Python .etc

PHP，Python，Java等语言主要被用来设计用户不需要看的的服务器端的逻辑。例如页面模版，内容组织，数据库操作等。

也就是说，如果一个网站，只有一个单一的静态页面，比如一个html文件。那么他就不选PHP等服务器端语言的支持。

PHP作为杰出的web服务端语言，基于他的著名动态网站框架（Web CMS系统）wordpress已经被全球超过60%网站使用

## 推荐站点
### Wiki型
1. [MDN : Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS)
   + 著名浏览器firefox背后开源公司Mozilla的开发者文档库 
2. [w3schools](https://www.w3schools.com/)
   + 互联网技术新手大纲，支持在线实验
3. [w3schools.com.cn](https://www.w3school.com.cn/)
   + w3school中文站点。内容 
4. [菜鸟教程](https://www.runoob.com/)
   + 一个比肩w3school的新手大纲，竟然是个人运营的

### Code Online
1. [codepen](https://codepen.io/)
   1. 在线前端代码编辑器，可同步至github，免费版功能略少
2. [codesandbox](https://codesandbox.io/)
   1. 同上，免费版功能稍多


## 引用
[1] : [https://www.dictionary.com/browse/hyper-](https://www.dictionary.com/browse/hyper-)

[2] : [https://en.wikipedia.org/wiki/JavaScript](https://en.wikipedia.org/wiki/JavaScript)