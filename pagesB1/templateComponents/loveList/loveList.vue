<template>
	<view style="width: 100%;position: relative;">
		<view class="nav-list aqi-zx-xxl margin-top">
			<navigator animation-type="none" hover-class="none" :url="item.pageUrl"
				:style="[{animation: 'show '+(index * 0.3 + 0.5)+'s'}]" v-for="(item, index) in pageLis" :key="index"
				:class="lisColor[index>5?index%5:index]" class="aqi-border-l shadow nav-li">
				<view style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: -1;">
					<image style="height: 100%;width: 100%;" src="./sanj.svg"></image>
				</view>
				<view class="nav-title">{{ item.tit }}</view>
				<view class="flex">
					<view class="flex-sub nav-name" style="white-space: nowrap;">收藏</view>
					<view class="flex-sub nav-des text-right align-end">flyma</view>
				</view>
				<text>{{index+1}}</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			cuInx:{
				type:Number
			},
			pageLis:{
				type:Array,
				default:[]
			},
		},
		setup() {
			const lisColor = [
				"bg-gradual-blue-light",
				"bg-gradual-green-light",
				"bg-gradual-orange-light",
				"bg-gradual-pink-light",
				"bg-gradual-red-light",
				"bg-gradual-cyan-light",
			];
			return{
				lisColor,
			}
		}
	}
</script>