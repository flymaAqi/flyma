<template>
	<view class="cardPt aqi-zx-xxl" :style="{width: pWidth,height: pHeight}">
		<view class="btn1">
			<view @tap="closePhone" style="width: 100px;height: 80px;background-color: transparent;top: -20px;position: relative;left: -10px;"></view>
		</view>
		<view class="btn2"></view>
		<view class="btn3"></view>
		<view class="initF aqi-zx-xxl">
			<view class="card-int aqi-zx-xl" :class="openPhone?'animation-slide-top animation-reverse':'hiddenBody'">
				<view class="hello">Hello Flyma
					<span class="text-xl">(再次点击home开机)</span>
				</view>
			</view>
		</view>
		<template v-if="openPhone">
			<view class="phoneBody" style="transform:rotate(0deg);">
				<slot name="pBody"></slot>
				<view class="">
					<codeCard v-if="code" class-tit="模板页面留言" pre-txt="" next-txt="" 
					:value-txt="codeMsg"></codeCard>
					<view style="height: 10rpx;" v-if="safeBtom" />
				</view>
			</view>
			<view class="phoneFoot aqi-zx-xxl">
				<slot name="pFoot" v-if="$slots.pFoot"></slot>
			</view>
		</template>
		<view class="top aqi-zx-xxl">
			<view class="camera">
				<view class="int"></view>
			</view>
			<view class="speaker"></view>
		</view>
	</view>
</template>

<script>
	import codeCard from '../codeCard/codeCard.vue'
	export default {
		name:"phoneTem",
		props:{
			pWidth:{
				type:String,
				default:'90%'
			},
			pHeight:{
				type:String,
				default:'85vh'
			},
			code:{
				type:Boolean,
				default:false
			},
			safeBtom: {
				type:Boolean,
				default:false
			}
		},
		components:{
			codeCard
		},
		data() {
			return {
				openPhone: true,
				codeMsg:'模板页面为静态页面,页面可互动内容较少,仅为展示效果.目之所及皆可修改与互动,然精神世界有限,暂不改动(本人太懒)'
			};
		},
		methods:{
			closePhone(){
				this.openPhone = !this.openPhone
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../commonB1/animation.css';
	.phoneFoot{
		position: relative;
		transform: translateY(0);
	}
	.phoneBody{
		background-color: #eaeaea;
		width: 100%;
		height: 100%;
		border-radius: 25px;
		z-index: 1;
		overflow-y: auto;
	}
	.speaker {
	  position: absolute;
	  top: 6px;
	  right: 50%;
	  transform: translate(50%, 0%);
	  width: 40%;
	  height: 2px;
	  border-radius: 2px;
	  background-color: rgb(107, 107, 53);
	}
	
	.camera {
	  position: absolute;
	  top: 6px;
	  right: 84%;
	  transform: translate(50%, 0%);
	  width: 6px;
	  height: 6px;
	  border-radius: 50%;
	  background-color: rgba(255, 255, 255, 0.9);
	}
	.cardPt {
		position: relative;
		background: black;
		border-radius: 35px;
		border: 2px solid rgb(40, 40, 40);
		padding: 6px;
		margin: auto;
		top: 10px;
		margin-bottom: 10px;
	}

	.card-int {
		position: relative;
		background-image: linear-gradient(to right bottom, #ff0000, #ff0045, #ff0078, #ea00aa, #b81cd7, #8a3ad6, #5746cf, #004ac2, #003d94);
		background-size: 200% 200%;
		background-position: 0% 0%;
		height: 100%;
		width: 100%;
		border-radius: 25px;
		transition: all 1.3s ease-in-out;
	}
	.initF{
		position: absolute;
		height: 98%;
		width: 97%;
		border-radius: 25px;
		transition: all 1.3s ease-in-out;
		overflow: hidden;
		pointer-events: none;
	}
	.top {
		position: absolute;
		top: 0px;
		right: 50%;
		transform: translate(50%, 0%);
		width: 35%;
		overflow: hidden;
		height: 18px;
		background-color: black;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.btn1,
	.btn2,
	.btn3,
	.btn4 {
		position: absolute;
		width: 5px;
	}

	.btn1,
	.btn2,
	.btn3 {
		height: 45px;
		top: 30%;
		right: -6px;
		background-color: black;
	}

	.btn2,
	.btn3 {
		transform: scale(-1);
		left: -4px;
	}

	.btn2,
	.btn3 {
		transform: scale(-1);
		height: 30px;
	}

	.btn2 {
		top: 26%
	}

	.btn3 {
		top: 33%
	}

	.hello {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		color: white;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		line-height: 35px;
		height: 100%;
		transition: 0.5s ease-in-out;
	}

	.hiddenBody {
		display: block;
		background-position: 100% 100%;
	}
</style>