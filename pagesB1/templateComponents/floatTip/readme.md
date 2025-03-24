

## float-ball 悬浮球

<div align=center color=blue>

***微信小程序示例项目***

</div>

<div align=center>

***微信小程序示例项目***

</div>

> **组件名：dui-float-ball**


一个移动端好用的，可自由拖拽，可自动回弹的悬浮球组件

> **注意事项**
> 为了避免错误使用，给大家带来不好的开发体验，请在使用组件前仔细阅读下面的文档，可以帮你避免一些错误。



### 基本用法

在 `template` 中直接使用组件

```html
<template>
	<dui-float-ball></dui-float-ball>
</template>
```


## API

###  Props

|  属性名	|    类型	| 默认值		| 说明											|
| :-:		| :-:		| :-:			| :-:										|
| dragable	| Boolean	| `true`			| 是否自由拖动悬浮球						|
| ballText	| String	| -			| 		小球内文本内容				|
| ballTextColor	| String	| `#fff`			| 		小球内文本颜色				|
| ballTextSize	| String	| `28rpx`			| 		小球内文本大小				|
| background| String	| 无  		    | 设置backgroud。设置背景色或图片，例如 `#f40`，`url(https://www.xxx.com/xxx.jpg)`				|
| position	| Object	| `{left:0,top:'50%'}`| 悬浮球初始位置。只能设置left和top值,left设置`100%`时靠最右边贴边					|
| immediateIndent	| Boolean	| `true`	| 是否立即缩进。nearEdgeIndent开启时生效|
| needNearEdge	| Boolean	| `true`		| 是否自动贴边									|
| nearEdgeDirection	| String|-			| 自动贴边方向。needNearEdge开启时生效，可选值`left`,`right`,`top`,`bottom`,未设置则自动贴近距离最近的方向				|
| nearEdgeTransition| String	| `all ease 0.3s`| 贴边动画	|
| nearEdgeIndent| Boolean	| `true`| 贴边后是否缩进悬浮球|
| nearEdgeIndentDelay| Number	| `1000`| 贴边后延时缩进悬浮球，单位ms|
| nearEdgeIndentDistance| Number	| `30`| 贴边缩进距离。如设置值大于0且小于等于1时，那么缩进距离为小球的百分比。|
| slotsDirection| String	| - | 插槽没容相对悬浮球的方向。有添加插槽时生效，可选值`left`,`right`,`top`,`bottom`|

### Slots
|  名称	|    说明		|
| :-:	| :-:		    |
|  default | 默认插槽，跟随悬浮球展示的内容 |

###  Events

|  参数		|    类型	| 说明							|
| :-:		|  :-:		| :-:							|
| touchFunc	| Function	| 悬浮按钮点击事件|

#### touchFunc事件回调参数

|  参数		|    类型	| 说明							|
| :-:		|  :-:		| :-:							|
| iSNearEdge| Boolean	| 当前悬浮球是否为贴边或缩进状态 |