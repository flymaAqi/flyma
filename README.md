# Flyma UI组件库

<div align=center color=blue>

***微信小程序示例项目***

</div>

<div align=center>
  <img width="180px" style="border-radius: 5%;" bor src="https://www.helloimg.com/i/2025/03/24/67e0c1df2d6ee.jpg">
</div>

## 前言

该项目是基于 ColorUI 为核心，根据ColorUI GA 为基础开发的小程序css组件库。在原版基础上，做了较大的代码改动与性能优化，框架与数据层面选用vue3与uniapp进行改造，对底层代码做了分包与整合，对渲染层面及数据结构做了性能调优，除去静态tabbar(可存放云端，为了开发者方便调试已全部存放本地)，代码包主包体积压缩后仅100kb左右(小程序)，首屏5.2s渲染时间控制在了600ms与500ms之间,后续会持续增加新组件,优化旧组件,敬请期待✨!

- 由于采用了vue3+uniapp开发，在做了iOS与Android的兼容优化后，可同时打包为APP、网站以及小程序，部分css样式可能会有差距，但也只需稍微一调。

![](https://www.helloimg.com/i/2025/03/19/67da4ba5d60f9.png)

# 01.使用UniApp快速开始

- 1、下载 [源码](https://github.com/flymaAqi/flyma) 并解压，复制`/commonB2`文件夹下所有文件到项目根目录(common)

- 2、`App.vue` 引入关键Css `main.css` `icon.css`

  ```js
  /* 根目录common 文件 */
  @import "colorui/main.wxss";
  @import "colorui/icon.wxss";
  ```

- 3、`uni.scss`引入aqiSc.scss文件

  ```js
  /* 根目录uni.scss 文件 */
  @import "aqiSc.scss";
  ```

  **_如需全局分享可直接在min.js引入share.js_**

```js
/* common目录下的share.js引入到你的项目根目录min.js 文件 */
import App from './App'
import share from '@/common/share.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
Vue.mixin(share)
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.mixin(share)
	return {
		app
	}
}
// #endif
```

> **如果以上步骤做完,可以直接使用基础样式进行开发了,但想要引入组件或模板等单页面内容,还需要其他依赖文件;**

| css文件       | 作用                                  |
| ------------- | ------------------------------------- |
| animation.css | 动画依赖,所有动画展示都需要引入该文件 |
| aicon.css     | 扩展icon,部分模板中需要引入           |

| js文件    | 作用                                                         |
| --------- | ------------------------------------------------------------ |
| share.js  | 全局分享,不需要全局控制则无需引入                            |
| system.js | 系统信息文件,所有需要获取用户视口高度以及宽度的组件都需要引入 |

# 02、组件的引入

> 爱学习,爱劳动,爱分享----生活中很多事需要笑着面对

### 1.全局组件

- 新创建的vue项目会有个默认全局组件的目录components
- 如果你没有,那么直接项目根目录创建即可(打错一个字都不行,很严格)
- 创建好后,需要什么组件复制粘贴进来即可引入
- 注意组件.vue文件需要一个同名父目录,比如你是flyma.vue,那么就需要一个叫flyma的父目录

```
//页面引入示例<template>  <flyma/></template>就这么简单,简不简单?简单好用!但是不推荐这么用.
```

“这里要说一个优化技巧,由于小程序特性,主包建议只放一个index页面或公共组件,因为小程序主包也就是首屏加载的资源,需要在极短的时间内加载完毕,而文件过大会导致用户首屏等待时间增加,当使用了分包后,可以在用户进入主包之后,异步加载后续资源,减少用户等待焦虑.所以,你会为了方便而使用这种方式吗?”

------

### 2.单页面组件

> 好,为用户考虑的朋友们,看过来啦

- 页面引入的方式虽然有一丢丢复杂,但是对你们来说还不是轻轻松松嘛!
- 首先分包,去网上搜过程一搜一大堆,我真不想打字了,字有点多


- 分包内创建components文件,将需要的组件复制粘贴进来
- 然后在页面引入

```js
import flyma from '../components/flyma/flyma.vue' //你的路径
```

```js
vue2和vue3选项式的朋友们要再多一个步骤
export default {
	components:{
    	flyma    
    }
}
vue3语法糖setup直接使用
```

- 页面使用

```html
<template>  
    <flyma/>
</template>
```

# 03.使用自定义导航栏

- 1、引入`pagesB2/componentsB2/custom-nav-bar`组件

```js
/* 需要引入的页面 */
import customNavBar from '../custom-nav-bar/custom-nav-bar.vue';
```

- 2、组件内已引入system.js注意将文件路径放置正确


- 3、页面调用

```js
/* 使用 */
<customNavBar :customIndex="false" :title="csTit"></customNavBar>
```

- 4、参数

| 参数        |             作用             |  类型   | 默认值 |
| ----------- | :--------------------------: | :-----: | :----: |
| customIndex | 切换导航栏样式(目前只有一种) | Boolean |  true  |
| title       |             标题             | String  |  主页  |

| 函数     |             作用              |
| -------- | :---------------------------: |
| backPage | 返回上一级,如果没有则返回主页 |

# 04.使用超级导航栏

该导航栏内嵌套了悬浮按钮组件--提示消息组件--代码块组件--底部信息组件,使其在稳定嵌套页面内容时具有高内聚的特性,页面内无需再引入高复用性的组件.

- 1.引入`pagesB2/componentsB2/comNavTab`组件

```js
/* 页面内引入组件 */
import comNavTab from '../componentsB2/comNavTab/comNavTab.vue';
```

- 2.引入你需要的组件注意组件内其他组件的引入路径

  ```js
  /* 默认4个组件 */
  import customNavBar from '../custom-nav-bar/custom-nav-bar.vue';
  import floatTip from '../floatTip/floatTip.vue';
  import tipToast from '../tipToast/tipToast.vue'
  import codeCard from '../codeCard/codeCard.vue'
  ```

- 3.使用

  ```html
  <comNavTab csTit="动画">
      /* 默认有一个slot和一个具名slot */
      <template>页面内容</template>
  </comNavTab>
  ```


| 参数         |     作用     |  类型   |  默认值  |
| ------------ | :----------: | :-----: | :------: |
| copyShow     | 底部组件显隐 | Boolean |   true   |
| csTit        |     标题     | String  |    ""    |
| bar-cod-show |  默认代码块  | Boolean | 默认内容 |
| tipShow      | 提示组件显隐 | Boolean |  false   |

| 函数         |     作用     |
| ------------ | :----------: |
| loveTip      | 收藏内容显示 |
| loveTipClose | 提示组件关闭 |
| remoLove     |   取消收藏   |

# 05.致谢

开源/资源库

- ColorUI: <https://github.com/weilanwl/ColorUI>
- ColorUI GA:[https://github.com/XiaokangLei/ColorUI-GA](https://github.com/XiaokangLei/ColorUI-GA?tab=readme-ov-file#colorui-ga)
- MeiYe: <https://www.meiye.art/inspiration>
- WxminiDemo: <https://gitee.com/susuhhhhhh/wxmini_demo>

# 06.支持

项目内所有组件皆开源免费，有哪里不懂可直接联系作者，如果此项目能为您提供帮助，请点个star吧！