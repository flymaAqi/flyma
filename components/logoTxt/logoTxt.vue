<template>
	<view style="height: 94%;">
		<view class="cmyk margin-left" v-if="cuInx===0">
			<text class="bleT">FLY</text>
			<text class="pikT">M</text>
			<text class="yeT">A</text>
			<text class="blkT">+</text>
			
			<view class="flex flex-column cmykBot padding-top">
				<text class="bleT">组件 + 模板</text>
				<text class="yeT">享受<text class="pikT">"飞马"</text>般开发速度</text>
			</view>
		</view>
		<view class="padding-lr" v-else>
			<view :class="txtTip.titTop?'tipMTop':'tipBottom'" class="text-xxl bleT" v-show="txtTip.title!=''">{{txtTip.title}}</view>
			<view :class="txtTip.titLeft?'tipLeft aqi-textMode-lr':'tipRight aqi-textMode-rl'" class="tipText flex flex-column padding-top">
				<text class="text-bold pikT text-white text-xxl">{{txtTip.tipTit}}</text>
				<text class="text-l text-white blkT text-bold margin-lr-xs">{{txtTip.tip}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "logoTxt",
		props:{
			cuInx:{
				type:Number
			},
			txtTip:{
				type:Object,
				default:{
					title:'这没啥好看的,去寻找更精彩的吧',
					tipTit:'彩蛋提示',
					tip:'长按章鱼哥大门的鼻子',
					titTop: true,
					titLeft: false
				}
			},
		},
		setup() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.tipBottom{
		position: absolute;
		bottom: 30px;
	}
	.tipMTop{
		position: relative;
		top: 30px;
	}
	.tipRight{
		top: 80px;
		right: 0;
	}
	.tipLeft{
		top: 50px;
	}
	.tipText{
		position: relative;
		width: 100%;
		height: fit-content;
		max-height: 35vh;
	}
	.cmyk {
		position: absolute;
		font-size: 10vw;
		font-weight: 700;
		bottom: 40px;
		// color: #000000;
	}
	.cmykBot{
		font-size: 55rpx;
	}


	.bleT {
		text-shadow: -1.5px -1.5px 0 rgba(0, 255, 255, 0.8);
	}

	.pikT {
		text-shadow: 1.5px 1.5px 0 rgba(255, 0, 255, 0.9);
	}

	.yeT {
		text-shadow: -2px 2px 3px rgba(255, 255, 0, 0.9);
	}

	.blkT {
		text-shadow: 2px -2px 0 rgba(0, 0, 0, 0.3);
	}
</style>