
<template name="Tips">
	<view>
		<view class="tipsWrap aqi-zx-xxl" v-if="showTips" :style="{'top':top,'left': paddingLeft}">
			<view class="tip-top">
				<img class="tipsimg" src="./1.png" alt="">
				<view class="top-img">
					<image src="./2.png" mode="aspectFit"></image>
				</view>
				<view class="top-text">
					<text>添加到我的小程序</text>
					<text>访问小程序更便捷</text>
				</view>
			</view>
			<view class="tip-bottom" @click="closeTips">
				我知道了
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Tips",
		data() {
			return {
				isFirst: true, //是否首次
				showTips: false, //是否展示
				top: '',
				right: '',
				paddingLeft: '',
			};
		},
		mounted() {
			// #ifndef H5
			this.getTopAndLeft()
			const _that = this;
			_that.showTips = true;
			//获取本地缓存
			let first_init = uni.getStorageSync('isFirst');
			
			if (first_init) {
				_that.showTips = false;
			} else {
				_that.showTips = true;
			}
			// #endif
		},
		methods: {
			/**
			 * @description:适配机型，动态获取胶囊的位置，动态赋值提示框的高度 
			 * @return {menuButtonInfo}  微信小程序的胶囊位置信息
			 */
			getTopAndLeft() {
				let menuButtonInfo = uni.getMenuButtonBoundingClientRect() // 获取胶囊的位置
				this.top = `${menuButtonInfo.bottom + 4}px` // 赋值高度
				this.right = menuButtonInfo.right + 'px' // 赋值left
				/**
				 * 区分安卓和ios系统  安卓和ios胶囊真机差16px
				 */
				if (['ios'].includes(uni.getSystemInfoSync().platform)) {
					this.paddingLeft = `${menuButtonInfo.left - 108}px`
				} else {
					this.paddingLeft = `${menuButtonInfo.left - 92}px` // 193为箭头到左侧的宽度
				}
			},
			closeTips() {
				const _that = this;
				_that.showTips = false;
				uni.setStorage({
					key: 'isFirst',
					data: '0'
				})
			},
		}
	}
</script>

<style lang='scss' scoped>
	.tipsWrap {
		position: fixed;
		z-index: 99999;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 340rpx;
		height: 209rpx;
		display: flex;
		background-size: 340rpx 209rpx
	}

	.tip-top {
		height: 129rpx;
		width: 100%;
		
		display: flex;
		.tipsimg {
			position: absolute;
			height: 100%;
			width: 100%;
			z-index: -1;
		}
		.top-img {
			width: 84rpx;
			overflow: hidden;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.top-text {
			display: flex;
			flex-flow: column;
			padding-top: 38rpx;
			margin-left: -2rpx;
			color: #FFFFFF;
			font-size: 28rpx;
			font-weight: 400;
			line-height: 38rpx;
			letter-spacing: -1rpx;
		}
	}

	.tip-bottom {
		border-top: 2rpx solid rgba(105, 103, 103, .16);
		margin-top: -2rpx;
		height: 80rpx;
		width: calc(80% + 8rpx);
		display: flex;
		justify-content: center;
		align-items: center;
		color: #FFC75A;
		font-size: 26rpx;
		font-weight: 600;
	}

	.closeIcon {
		font-size: 20rpx !important;
		margin-left: 10rpx;
		padding: 0 8rpx;
		background: #FFFFFF;
		border-radius: 12rpx;
	}
</style>