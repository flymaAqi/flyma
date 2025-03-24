<template>
	<view style="height: 100%">
		<comNavTab cs-tit="新闻资讯模板" :bar-cod-show="true">
			<view class="cu-timeline" style="min-height: 92vh">
				<!-- 搜索 -->
				<view class="cu-bar ">
					<view class="flex padding-left-sm text-xxl text-black"><text class="cuIcon-form"></text></view>
					<view class="search-form text-center">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="大家都在搜：腾讯" confirm-type="search" />
					</view>
				</view>
				<scroll-view scroll-x class="bg-white nav">
					<view class="flex flex-sub text-center">
						<view :class="'cu-item flex-sub ' + (index == TabCur ? 'text-blue cur text-bold' : '')"
							@tap="tabSelect" :data-id="item.id" v-for="(item, index) in tabList" :key="index">
							{{ item.name }}
						</view>
					</view>
				</scroll-view>
				<view style="position: relative;">
					<swiper class="margin-sm" style="height: 310rpx;" :autoplay="true" :circular="true" @change="swiperChange" >
						<swiper-item class="" v-for="(item, index) in swiperList" :key="index">
							<view class="swiper-item" style="height: 310rpx;width: 100%;">
								<image :src="item.url" mode="aspectFill"></image>
								<view class="text-white text-lg margin-left-sm" style="position: absolute;bottom: 10px;">
									数据仅用于展示效果,非真实信息
								</view>
							</view>
						</swiper-item>
					</swiper>
					<zt-pointDot pointOutColor="#00aaff" pointOutDefaultColor="#9d9d9d" dotType="pointOutC" :pointOutBottom="-30" :swiperIndex="currentIndex"
						:bannerList="{length:swiperList.length}"></zt-pointDot>
				</view>
				<view class="cu-card article no-card margin-top-lg" v-for="(item, index) in newsList" :key="index">
				    <view class="cu-item shadow">
				        <view class="content">
				            <view class="">
				                <!-- <view class="text-black text-bold text-lg">{{item.title}}</view> -->
				                <view class="">
				                    <text class="text-black text-bold text-lg text-cut-2">{{ item.title }}</text>
				                </view>
				                <view class="flex justify-between margin-top">
				                    <view class="text-gray text-sm">经验 | 2.1万观看 99赞 12评论</view>
				                </view>
				            </view>
				            <view>
				                <image :src="item.url" mode="aspectFill" class="radius" style="height: 180rpx; width: 230rpx"></image>
				            </view>
				        </view>
				        <view class="flex justify-between">
				            <view class="text-gray text-sm padding-left flex align-center">
				                <view class="cu-avatar sm round" :style="'background-image:url(' + item.url + ');'"></view>
				                <text class="padding-left-xs text-df text-bold">{{ item.user }}</text>
				            </view>
				            <view class="text-gray text-sm padding-right flex align-center">24分钟前</view>
				        </view>
				    </view>
				</view>
				<view style="height: 10px;background-color: #b3b3b3;"></view>
				<view class="cu-card article no-card margin-top solid-bottom" v-for="(item, index) in newsList2"
					:key="index">
					<view class="cu-item shadow">
						<view class="content">
							<view class="desc">
								<view class="text-black text-bold text-lg">{{ item.title }}</view>
								<view class="flex justify-between">
									<view class="text-gray text-sm">{{ item.user }} · {{ item.date }}</view>
									<view class="text-gray text-sm padding-right">{{ item.collection }} 收藏</view>
								</view>
							</view>
							<view>
								<image :src="item.url" mode="aspectFill" class="radius"
									style="height: 150rpx; width: 190rpx"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import {bdimg,jiJian} from '../../../commonB1/commonJpg.js';
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	export default {
		components:{
			comNavTab
		},
		data() {
			return {
				currentIndex:0,
				TabCur: 0,
				scrollLeft: 0,
				tabList: [{
						id: 0,
						name: '关注'
					},
					{
						id: 1,
						name: '推荐'
					},
					{
						id: 2,
						name: '热榜'
					},
					{
						id: 3,
						name: '快讯'
					},
					{
						id: 4,
						name: '视频'
					},
					{
						id: 5,
						name: '科技'
					}
				],
				newsList2: [
				    {
				        title: '矢量插画师：通过摄影作品学习建筑的空间语言',
				        user: '飞屋瑞',
				        date: '2019-05-12',
				        collection: 97,
				        url: jiJian[0]
				    },
				    {
				        title: '微信大改版之UI设计分析！分析点啥？',
				        user: 'moxiao',
				        date: '2019-05-12',
				        collection: 21,
				        url: jiJian[3]
				    },
				    {
				        title: '如何合理创建间距系统，来更快地实现设计方案？',
				        user: '毒眸',
				        date: '2019-05-12',
				        collection: 17,
				        url: jiJian[2]
				    },
				    {
				        title: '百度如何成为小程序生态的最大变量？',
				        user: '罗超频道',
				        date: '2019-05-12',
				        collection: 23,
				        url: jiJian[1]
				    }
				],
				swiperList: [{
						url: bdimg[0]
					},
					{
						url: bdimg[1]
					},
					{
						url: bdimg[2]
					}
				],
				newsList: [{
						title: '抖音的增长烦恼：用户并不是越多越好',
						user: '混沌大学',
						date: '2019-05-12',
						collection: 97,
						url: jiJian[4]
					},
					{
						title: '每天忙成狗却赚钱一丢丢，这是中产阶级吗？',
						user: '造就',
						date: '2019-05-12',
						collection: 21,
						url: jiJian[5]
					},
					{
						title: '对话爱奇艺创始人、CEO龚宇：付费会员还有极大的想象空间',
						user: '毒眸',
						date: '2019-05-12',
						collection: 17,
						url: jiJian[0]
					},
					{
						title: '百度如何成为小程序生态的最大变量？',
						user: '罗超频道',
						date: '2019-05-12',
						collection: 23,
						url: jiJian[1]
					}
				]
			};
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			swiperChange(currnet) {
				this.currentIndex = currnet.detail.current
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	};
</script>
<style>

</style>