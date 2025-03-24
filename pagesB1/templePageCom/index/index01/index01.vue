<template>
	<view style="height: 100%">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="首页数据展示模板">
			<phoneTem :pHeight="'86vh'" :code="true" :safe-btom="true">
				<template #pBody>
					<!-- 页面 -->
					<view class="cu-timeline radius-lg">
						<view class="">
							<view class="cu-bar  bg-white">
								<view class="action text-black">
									<text>山东</text>
									<text class="cuIcon-triangledownfill"></text>
								</view>
								<view class="search-form round">
									<text class="cuIcon-search"></text>
									<input type="text" placeholder="报酬高" confirm-type="search" />
								</view>
								<view class="flex padding-sm text-xxl text-black">
									<text class="cuIcon-message"></text>
								</view>
							</view>
						</view>
						<swiper class="margin-lr-sm margin-top-xs" :indicator-dots="true" :circular="true"
							:autoplay="true" interval="5000" duration="500">
							<swiper-item v-for="(item, index) in swiperList" :key="index">
								<view v-if="index===0" class="padding-left-sm text-bold padding-top-xxl aqi-zx-xl" style="position: absolute;width: 100%;">
									<view class="text-l">上面下达了一个任务</view>
									<view class="text-xxl text-orange">猫咪守护计划</view>
									<text class="cu-tag bg-gradual-orange radius" style="left: 30px;top: 10px;">请查收</text>
								</view>
								<imgLoadu load-mode="aspectFill" :img-url="item.url" :tsc="1.2"/>
							</swiper-item>
							
						</swiper>

						<!-- 常用功能 -->
						<view class="cu-list grid col-4 no-border text-black margin-top-xs">
							<view class="cu-item" @tap="$refs.comNav.$refs.tip.change(item.name)" v-for="(item, index) in iconList"
								:key="index">
								<view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'"
									style="font-size: 56rpx">
									<view class="cu-tag badge" v-if="item.badge != 0">
										<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
									</view>
								</view>
								<text>{{ item.name }}</text>
							</view>
						</view>
						<view class="flex solid-bottom margin-lr padding-tb justify-between">
							<text class="text-xl text-black">最新任务</text>
							<text class="text-lg text-gray">
								更多任务
								<text class="cuIcon-right"></text>
							</text>
						</view>

						<view class="margin-lr" v-for="(item, index) in newList" :key="index">
							<view class="flex padding-top-xs justify-between">
								<view class="flex padding-top-xs">
									<text class="text-xl text-black">{{ item.title }}</text>
									<view class="cu-tag bg-orange sm radius" v-if="item.tag">{{ item.tag }}</view>
								</view>
								<text class="text-xxl text-red padding-top-xs">
									<text class="text-bold">{{ item.pay }}</text>
									<text class="text-gray text-lg">/时薪</text>
								</text>
							</view>

							<view class="flex padding-bottom-sm justify-start">
								<text class="text-gray">
									<text class="cuIcon-location"></text>
									{{ item.location }}
								</text>
								<text class="margin-left-lg text-gray">
									<text class="cuIcon-time"></text>
									{{ item.time }}
								</text>
							</view>
							<view class="flex padding-bottom-sm solid-bottom justify-between">
								<view>
									<view class="cu-tag line-blue radius" v-for="(item, index1) in item.tagList"
										:key="index1">
										{{ item }}
									</view>
								</view>
								<text class="text-gray">
									查看详情
									<text class="cuIcon-right"/>
								</text>
							</view>
						</view>
					</view>
				</template>
			</phoneTem>
		</comNavTab>
		
	</view>
</template>

<script>
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	import imgLoadu from '../../../templateComponents/u-image/imgLoadu.vue'
	import {bdimg} from '../../../../pagesB1/commonB1/commonJpg.js'
	import phoneTem from '../../../templateComponents/phoneTem/phoneTem.vue'
	export default {
		components: {
			phoneTem,
			imgLoadu,
			comNavTab
		},
		data() {
			return {
				swiperList: [{
						url: bdimg[2]
					},
					{
						url: bdimg[1]
					},
					{
						url: bdimg[3]
					}
				],

				iconList: [{
						icon: 'appreciatefill',
						color: 'blue',
						badge: 0,
						name: '热门推荐'
					},
					{
						icon: 'locationfill',
						color: 'red',
						badge: 10,
						name: '附近任务',
						bindtap: 'bindZan'
					},
					{
						icon: 'selectionfill',
						color: 'purple',
						badge: 0,
						name: '金牌雇主',
						bindtap: 'showResource'
					},
					{
						icon: 'countdownfill',
						color: 'green',
						badge: 0,
						name: '信用最高',
						bindtap: 'bindPoint'
					}
				],

				newList: [{
						title: '找人帮忙搬家',
						tag: '金牌雇主',
						location: '宇宙中心·曹县',
						pay: '60',
						time: '3~5小时',
						tagList: ['高信用', '加急']
					},
					{
						title: '寻找后端java工程师',
						tag: '',
						location: '山东·西红柿',
						pay: '100',
						time: '24小时',
						tagList: ['高信用', '高报酬']
					},
					{
						title: '制作晴天娃娃',
						tag: '',
						location: '安徽·蚌埠',
						pay: '50',
						time: '2小时',
						tagList: ['技术好', '有耐心']
					}
				],
			};
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
		}
	};
</script>
<style>
	.indexTabMa{
		
		
	}
</style>