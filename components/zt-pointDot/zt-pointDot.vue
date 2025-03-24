<template>
	<view>
		<view class="pointOutBox" :style="{ bottom: pointOutBottom + 'rpx' }">
			<!-- 原点及数字 -->
			<view 
			class="pointOut-A" 
			v-if="dotType == 'pointOutA'" 
			:style="{ justifyContent: pointOutJustifyContent }">
				<view 
				class="pointOut" 
				v-for="(item,index) in bannerList.length" 
				:key="index" 
				:style="{ 
					backgroundColor: swiperIndex == index ? pointOutColor : pointOutDefaultColor, 
					width: swiperIndex == index ? '20rpx' : '15rpx', 
					height: swiperIndex == index ? '20rpx' : '15rpx' }" 
				v-if="bannerList.length < pointOutNum"></view>
				<view class="pointOut-pageBox" v-if="bannerList.length >= pointOutNum" :style="{ justifyContent: pointOutJustifyContent }">
					<view class="pointOut-page">{{ swiperIndex + 1 + '/' + bannerList.length }}</view>
				</view>
			</view>
			<!-- 扁平圆柱体及数字 -->
			<view 
			class="pointOut-B" 
			v-if="dotType == 'pointOutB'" 
			:style="{ justifyContent: pointOutJustifyContent }">
				<view 
				class="pointOut" 
				v-for="(item,index) in bannerList.length" 
				:key="index" 
				:style="{ 
					backgroundColor: swiperIndex == index ? pointOutColor : pointOutDefaultColor, 
					width: swiperIndex == index ? '40rpx' : '', 
					borderRadius: swiperIndex == index ? '12rpx' : '' }" 
				v-if="bannerList.length < pointOutNum"></view>
				<view class="pointOut-pageBox" v-if="bannerList.length >= pointOutNum" :style="{ justifyContent: pointOutJustifyContent }">
					<view class="pointOut-page">{{ swiperIndex + 1 + '/' + bannerList.length }}</view>
				</view>
			</view>
			<!-- 斜立方及数字 -->
			<view 
			class="pointOut-B" 
			v-if="dotType == 'pointOutC'" 
			:style="{ justifyContent: pointOutJustifyContent }">
				<view 
				class="pointOutC" 
				v-for="(item,index) in bannerList.length" 
				:key="index" 
				:class="{ 'pointOutAction': swiperIndex == index }"
				:style="{ 
					backgroundColor: swiperIndex == index ? pointOutColor : pointOutDefaultColor }" 
				v-if="bannerList.length < pointOutNum"></view>
				<view class="pointOut-pageBox" v-if="bannerList.length >= pointOutNum" :style="{ justifyContent: pointOutJustifyContent }">
					<view class="pointOut-page">{{ swiperIndex + 1 + '/' + bannerList.length }}</view>
				</view>
			</view>
			<!-- 圆形边框及数字 -->
			<view 
			class="pointOut-B" 
			v-if="dotType == 'pointOutD'" 
			:style="{ justifyContent: pointOutJustifyContent }">
				<view 
				class="pointOutD" 
				v-for="(item,index) in bannerList.length" 
				:key="index" 
				:style="{ 
					backgroundColor: swiperIndex == index ? pointOutColor : pointOutDefaultColor,
					borderColor: swiperIndex == index ? pointOutDefaultColor : pointOutColor }" 
				v-if="bannerList.length < pointOutNum"></view>
				<view class="pointOut-pageBox" v-if="bannerList.length >= pointOutNum" :style="{ justifyContent: pointOutJustifyContent }">
					<view class="pointOut-page">{{ swiperIndex + 1 + '/' + bannerList.length }}</view>
				</view>
			</view>
			<!-- 透视圆数字及数字 -->
			<view 
			class="pointOut-B" 
			v-if="dotType == 'pointOutE'" 
			:style="{ justifyContent: pointOutJustifyContent }">
				<view 
				class="pointOutE" 
				v-for="(item,index) in bannerList.length" 
				:key="index" 
				:style="{ 
					backgroundColor: swiperIndex == index ? pointOutColor : pointOutDefaultColor,
					borderColor: swiperIndex == index ? pointOutDefaultColor : pointOutColor, 
					opacity: swiperIndex == index ? 1 : .85,
					color: swiperIndex == index ? pointOutDefaultColor : pointOutColor }" 
				v-if="bannerList.length < pointOutNum">{{ index + 1 }}</view>
				<view class="pointOut-pageBox" v-if="bannerList.length >= pointOutNum" :style="{ justifyContent: pointOutJustifyContent }">
					<view class="pointOut-page">{{ swiperIndex + 1 + '/' + bannerList.length }}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"zt-pointDot",
		props: {
			swiperIndex: { // 当前显示轮播图片的下标
				type: Number,
				default: 0,
				required: true
			},
			bannerList: { // 轮播图数组/
				type: Object,
				default: {length:5},
				required: true
			},
			dotType: { // 指示点样式/
				type: String,
				default: 'pointOutC'
			},
			pointOutJustifyContent: { // 指示点显示位置左 中 右/
				type: String,
				default: 'center'
			},
			pointOutColor: { // 当前指示点显示颜色/
				type: String,
				default: '#0055ff'
			},
			pointOutDefaultColor: { // 指示点默认颜色/
				type: String,
				default: '#fff'
			},
			pointOutBottom: { // 指示点距离容器底部距离/
				type: Number,
				default: 0
			},
			pointOutNum: { // 设置轮播图长度为多少时以数字形式显示/
				type: Number,
				default: 11
			}
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	// 轮播指示点
	.pointOutBox {
		width: 100%;
		position: absolute;
		left: 0;
		z-index: 999;
	}
	
	.pointOut-A {
		height: 100%;
		margin-left: 50rpx;
		margin-right: 50rpx;
		display: flex;
		align-items: center;
		
		.pointOut {
			width: 15rpx;
			height: 15rpx;
			border-radius: 50%;
			background-color: #eeeeee;
			margin-left: 5rpx;
			margin-right: 5rpx;
			transition: all 0.4s;
		}
		
		.pointOut-pageBox {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 9;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			
			.pointOut-page {
				margin-right: 15rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				padding: 5rpx 15rpx;
				border-radius: 10rpx;
				background-color: rgba(0,0,0,0.6);
			}
		}
	}
	
	.pointOut-B {
		height: 100%;
		margin-left: 50rpx;
		margin-right: 50rpx;
		display: flex;
		align-items: center;
		
		.pointOut {
			width: 12rpx;
			height: 12rpx;
			border-radius: 50%;
			background-color: #e3e3e3;
			margin-left: 5rpx;
			margin-right: 5rpx;
			transition: all .5s;
		}
		
		.pointOutC {
			width: 15rpx;
			height: 15rpx;
			border-radius: 50%;
			background-color: #e3e3e3;
			margin-left: 5rpx;
			margin-right: 5rpx;
			transition: all .5s;
		}
		
		.pointOutD {
			width: 18rpx;
			height: 18rpx;
			border-radius: 50%;
			background-color: #e3e3e3;
			border: 4rpx solid #333;
			margin-left: 5rpx;
			margin-right: 5rpx;
			transition: all .5s;
		}
		
		.pointOutE {
			width: 34rpx;
			height: 34rpx;
			font-size: 20rpx;
			font-weight: 800;
			border-radius: 50%;
			background-color: #e3e3e3;
			color: #fff;
			border: 4rpx solid #333;
			margin-left: 5rpx;
			margin-right: 5rpx;
			transition: all .5s;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		.pointOutAction {
			width: 20rpx;
			height: 20rpx;
			margin-left: 15rpx;
			margin-right: 15rpx;
			border-radius: unset;
			transform: rotate(405deg);
			transition: all .5s;
		}
		
		.pointOutDAction {
			width: 20rpx;
			height: 20rpx;
			margin-left: 5rpx;
			margin-right: 5rpx;
			transition: all .5s;
		}
		
		.pointOut-pageBox {
			width: 100%;
			height: 100%;
			position: relative;
			z-index: 9;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			
			.pointOut-page {
				margin-right: 15rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				padding: 5rpx 15rpx;
				border-radius: 10rpx;
				background-color: rgba(0,0,0,0.6);
			}
		}
	}
</style>
