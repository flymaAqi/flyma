<template>
	<view style="height: 100%;" class="Jpage">
		<view style="height: 99vh;width: 100%;" :style="{'display':isShare?'none':'block'}" class="text-center">
			<view style="top: 50%;position: relative;">
				<view class="text-blod text-xl text-red margin-bottom">css轻量、高效UI组件库</view>
				<view class="badge round text-xxl text-bold text-blue text-blod shadow" style="width: 50%;left: 25%;">
					Flyma
					<text class="badgeText badgeTextAni" />
					<text class="text-pink text-xl">v3.0.2</text>
				</view>
				<view class="aqi-txt-blod aqi-txtJinColor aqi-textLine-style-lang aqi-textLine-bottom margin-top">前往小程序看看吧！</view>
			</view>
		</view>
		<scroll-view :scroll-top="toView" enable-passive @scrolltolower="tabbarInx===3?()=>{}:lowerBottom()"
			:lower-threshold="50" class="new-scro-home" scroll-y="true" :show-scrollbar="false" style="height: 99vh;">
			<view v-show="tabbarInx!=3">
				<!-- 图片渐隐组件 -->
				<AniSwiperImg key="aniTop"></AniSwiperImg>
				<!-- pluginList:妙想,wayLinshi:样式,examLinshi:组件 -->
				<tabbarHome :cs-index="tabbarInx===3?0:tabbarInx"
					:homeList="tabbarInx===2?pluginList:homeInx===0?wayLinshi:examLinshi"></tabbarHome>
			</view>
			<!-- 个人中心 -->
			<aboutHome v-if="tabbarInx===3"></aboutHome>
			<!-- 底部提示 -->
			<copyright :compName="bottomLoad"></copyright>
			<!-- 安全区 -->
			<view class="cu-tabbar-height"></view>
		</scroll-view>

		<!-- 操作台 -->
		<view class="cu-bar tabbar foot bg-blur aqi-zx-xxl">
			<view class="action" @tap="tabbarPage" :data-inx="0">
				<view class="cuIcon-cu-image">
					<image :src="tabbarInx === 0 ? '/static/tabbar/aqiA1.png' : '/static/tabbar/aqiA1_1.png'"
						style="transform: scale(2);"></image>
				</view>
				<view :class="tabbarInx === 0 ? 'text-blue' : 'text-gray'" class="margin-top-xs">样式</view>
			</view>

			<view class="action" @tap="tabbarPage" :data-inx="1">
				<view class="cuIcon-cu-image">
					<image :src="tabbarInx === 1 ? '/static/tabbar/aqiB4.png' : '/static/tabbar/aqiB2_2.png'"
						style="transform: scale(2);"></image>
				</view>
				<view :class="tabbarInx === 1 ? 'text-blue' : 'text-gray'" class="margin-top-xs">组件</view>
			</view>
			<view class="action" @tap="tabbarPage" :data-inx="2">
				<view class="cuIcon-cu-image">
					<image :src="tabbarInx === 2 ? '/static/tabbar/aqiB3.png' : '/static/tabbar/aqiB3_3.png'"
						style="transform: scale(2);"></image>
				</view>
				<view :class="tabbarInx === 2 ? 'text-blue' : 'text-gray'" class="margin-top-xs">扩展</view>
			</view>
			<view class="action" @tap="tabbarPage" :data-inx="3">
				<view class="cuIcon-cu-image">
					<image :src="tabbarInx === 3 ? '/static/tabbar/aqiA5.png' : '/static/tabbar/aqiA5_5.png'"
						style="transform: scale(2);"></image>
				</view>
				<view :class="tabbarInx === 3 ? 'text-blue' : 'text-gray'" class="margin-top-xs">关于</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		ref,
		shallowRef
	} from 'vue';
	import {
		debounce,
	} from '@/common/commonData.js'
	import {
		exampleList,
		wayList,
		examLinshi,
		wayLinshi,
		pluginList
	} from '../index/pageHomeList.js';
	export default {
		// 分享到朋友圈
		onShareTimeline() {
			return {
				title: 'Flyma+css高效UI组件库',
			};
		},
		setup() {
			//触底事件
			function lowerBottom() {
				if (homeInx.value === 0) {
					let wayLs = wayLinshi.value.length;
					wayLs - 6 != wayList.length ? onStart(bottomLoad.value = false) : ''
				} else if (homeInx.value === 1) {
					let exLs = examLinshi.value.length;
					exLs - 6 != exampleList.length ? onStart(bottomLoad.value = false) : ''
				}
			}
			const toView = shallowRef(0)
			const isShare = shallowRef(true)
			// 监听页面显示的事件
			const tabbarInx = ref(0)
			const homeInx = ref(0)

			const bottomLoad = ref(true)
			const pageSize = ref([{
					inx: 0,
					size: 0
				}, {
					inx: 0,
					size: 0
				},

			])
			//防抖,多次触底只执行一次更新
			const onStart = debounce(() => {
				getPageList(6)
			}, 300);
			//每次更新指定条内容渲染
			function getPageList(x) {
				if (homeInx.value === 0) {
					var index = pageSize.value[0].inx
					var wl = wayList.length
					if (index != wl) {
						var i = 0;
						for (i; i < x; i++) {
							if (index == wl) {
								bottomLoad.value = true
								pageSize.value[0].inx = index
								return
							} else {
								wayLinshi.value.push(wayList[index]);
								index += 1
							}
						}
						pageSize.value[0].inx = index
					}
				} else {
					var el = exampleList.length
					var index = pageSize.value[1].inx
					if (index != el) {
						var i = 0;
						for (i; i < x; i++) {
							if (index == el) {
								bottomLoad.value = true
								pageSize.value[1].inx = index
								return
							} else {
								examLinshi.value.push(exampleList[index]);
								index += 1
							}
						}
						pageSize.value[1].inx = index
					}
				}
				bottomLoad.value = true
			}
			//更改组件内容显示
			function tabbarPage(e) {
				var ex = e.currentTarget.dataset.inx;
				tabbarInx.value = ex
				homeInx.value = ex
				ex === 3 ? homeInx.value = 0 : toView.value = toView.value > 10 ? toView.value : ++toView.value
			}
			return {
				tabbarInx,
				homeInx,
				tabbarPage,
				bottomLoad,
				getPageList,
				examLinshi,
				wayLinshi,
				lowerBottom,
				toView,
				pluginList,
				isShare
			}
		}
	};
</script>

<style>
</style>