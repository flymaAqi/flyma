<template>
	<view class="layout">
		<view class="navbar aqi-zx-xxl bg-blur">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px',marginLeft:getLeftIconLeft()+'px'}">
				<view class="cu-bar" style="width: 100%;">
					<view v-if="customIndex">
						<view class="cu-tag text-xl text-white criTagRightBorder">{{title}}</view>
						<view class="content">
							<image src="/static/flyma.png" mode="widthFix" style="width: 32px;"></image>
						</view>
					</view>
					<view v-else>
						<view class="text-lg text-bold margin-left-xs" @tap="backPage()">
							<text class="cuIcon-back"></text>
							返回
						</view>
						<view class="content text-bold">{{title}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fill" :style="{height:(getNavBarHeight()+0)+'px'}"/>
	</view>
	
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		getStatusBarHeight,
		getTitleBarHeight,
		getNavBarHeight,
		getLeftIconLeft,
	} from "../../commonB1/system.js"
	defineProps({
		title: {
			type: String,
			default: "主页-样式"
		},
		customIndex: {
			type: Boolean,
			default: true
		}
	})

	function backPage() {
		let pages = getCurrentPages();
		if(pages.length>1){
			uni.navigateBack()
		}else{
			uni.redirectTo({
				url:'/pages/index/index'
			})
		}
	}
</script>

<style lang="scss" scoped>
	.criTagRightBorder{
		padding: 14px;
		border-radius:  0 100rpx 100rpx 0;
		border: 1px solid #ffff00;
		background-color: rgba(255, 255, 255, 0.2) !important;
	}
	.Btn {
		width: fit-content;
		height: 60rpx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 5px 8px 8px rgba(255, 0, 0, 0.4);
	}
	
	.layout {
		.navbar {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			.statusBar {}

			.titleBar {
				display: flex;
				align-items: center;
				padding-left: 5rpx;
				.titleI {
					width: fit-content;
					font-size: 40rpx;
					font-weight: 700;
				}

				.search {
					margin: auto;
					width: 200rpx;
					height: 50rpx;
					border-radius: 60rpx;
					background: rgb(255, 255, 255, 0.4);
					border: 1px solid #fff;
					color: #999;
					font-size: 28rpx;
					display: flex;
					align-items: center;
					.text {
						padding-left: 10rpx;
					}
				}
				
			}
		}
		.fill {}
	}
</style>