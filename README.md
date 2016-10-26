#copyOfApple
`这是一个使用bootstrap、媒体查询、css3、JQ技术的页面，能跨浏览器跨设备兼容`

本页面是仿照[美国苹果官网](http://www.apple.com)

完成了两个页面：

+ [主页apple页面](https://fiona-sun.github.io/copyOfApple/)
+ [子页面ipad页面](https://fiona-sun.github.io/copyOfApple/ipad.html)

其中比较难的部分在于导航栏的制作，三个状态的切换以及屏幕大小改变时导航栏的切换（因注重代码的复用率，故屏幕大小变化时使用同一个导航栏，只做了部分隐藏/显示），详细的代码请参考我的[nav.js]()代码

以及想分享的是:
 
 * 图片大小的切换，background-size的改变，以及图片的改变
 * 手机屏幕对于body使用overflow:hidden不起作用，因为是touch事件的触发，可以考虑使用div代替body进行包裹，或是考虑fixed定位 
 * 媒体查询
  + 获取的max-width是不包括这个值，即小于时才执行;而max-width则包含这个值，即大于等于时执行
  + 媒体查询获取的max-width/min-width都是**浏览器宽度！！包括滚动条的位置**，而使用js或jq获取的window宽度都是**不包括滚动条的宽度**（这绝对是个坑！目前还没找到解决方法T T）

贴上页面效果图
    
- 主页

    + 大屏幕
    
    ![apple大屏幕图](https://Fiona-SUN.github.io/photos/apple-home-large.png)
    
    + 小屏幕
    
    ![apple小屏幕图](https://Fiona-SUN.github.io/photos/apple-home-small.png)


- ipad页面
    
    * 大屏幕
    
    ![ipad大屏幕图](https://fiona-sun.github.io/photos/apple-ipad-large.png)
    
    * 小屏幕
    
    ![ipad小屏幕图](https://Fiona-SUN.github.io/photos/apple-ipad-small.png)
    
>post in 2016/10/26
