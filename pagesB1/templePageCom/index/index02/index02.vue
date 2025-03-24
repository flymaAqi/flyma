<template>
	<view style="height: 100%">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="首页数据展示模板" :barCodShow="true">
			<!-- 页面 -->
			<view class="cu-timeline" style="min-height: 92vh;margin-bottom: 10rpx;">
				<!-- 搜索 -->
				<view class="box-serach">
					<view class="cu-bar search bg-white radius-lg">
						<view class="search-form round">
							<text class="cuIcon-search"></text>
							<input type="text" placeholder="搜索内容" confirm-type="search" />
						</view>
						<view class="flex padding-right-sm text-xxl text-black"><text class="cuIcon-message"></text>
						</view>
					</view>
				</view>
				<scroll-view scroll-x class="bg-white nav">
					<view class="flex text-center">
						<view :class="'cu-item flex-sub ' + (index == TabCur ? 'text-blue cur text-bold' : '')"
							@tap="tabSelect" :data-id="item.id" v-for="(item, index) in tabList" :key="index">
							{{ item.name }}
						</view>
					</view>
				</scroll-view>
				<!-- 滚动图片 -->
				<swiper class="margin-sm square-dot" :indicator-dots="true" :circular="true"
					:autoplay="true" interval="5000" duration="500">
					<swiper-item v-for="(item, index) in swiperList" :key="index">
						<view v-if="index===0" class="padding-left-sm text-bold padding-top-xxl text-yellow aqi-zx-xxl" style="position: absolute;width: 100%;">
							<view class="text-xxxl">变大的小精灵</view>
							<view class="text-xl margin-top-xl">是否还哈哈哈哈哈</view>
							<text class="cu-tag bg-gradual-orange aqi-zx-xxl radius" style="right: 10px;top: 10px;position: absolute;">静态琥珀</text>
						</view>
						<imgLoadu load-mode="aspectFill" border-radi="5px" :img-url="item.url" />
					</swiper-item>
				</swiper>
				<!-- 常用功能 -->
				<view class="cu-list grid col-5 no-border text-black">
					<view class="cu-item" v-for="(item, index) in iconList" :key="index">
						<view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'"
							style="font-size: 56rpx" @tap="$refs.comNav.$refs.tip.change(item.name)">
							<view class="cu-tag badge" v-if="item.badge != 0">
								<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
							</view>
						</view>
						<text>{{ item.name }}</text>
					</view>
				</view>

				<view class="flex margin-sm justify-start align-center">
					<view @tap="()=>{this.showInx=0}" :class="showInx===0?'bg-gradual-orange':''" class="sm bg-gray line-black shadow radius-lg-top-left padding-xs">
						<text class="cuIcon-light"></text>
						小鹏社区
						<text class="cuIcon-right"></text>
					</view>
					<view @tap="()=>{this.showInx=1}" :class="showInx===1?'bg-gradual-cyan':''" class="cu-btn line-black sm shadow margin-left-sm">
						<text class="cuIcon-we"></text>
						理想社区
						<text class="cuIcon-right"></text>
					</view>
					<view @tap="()=>{this.showInx=2}" :class="showInx===2?'bg-gradual-cyan':''" class="cu-btn round  line-black sm shadow margin-left-sm">
						<text class="cuIcon-brand"></text>
						比亚迪社区
						<text class="cuIcon-right"></text>
					</view>
				</view>

				<view class="margin-sm radius-lg padding-lr-xs solid">
					<view class="bg-white light radius-lg shadow-blur">
						<view class="flex padding-tb justify-between">
							<view class="">
								<view class="bg-gray padding-xs radius">
									<view class="cu-card article no-card bg-gray">
										<view class="cu-item bg-gray">
											<view class="content bg-gray text-center">
												<view style="height: 80rpx;width: 120rpx;">
													<imgLoadu load-mode="aspectFill" border-radi="5px" :img-url="swiperList[0].url" />
												</view>
												<view class="desc">
													<view class="text-content text-cut-2">
														品牌色是 体现产品特性和传播理念 最直观的视觉元素之一。在色彩选取时，需要先明确产品的品牌色。
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
								<view class="bg-gray padding-xs radius margin-top-sm">
									<view class="cu-card article no-card bg-gray">
										<view class="cu-item bg-gray ">
											<view class="content bg-gray">
												<view style="height: 80rpx;width: 120rpx;">
													<imgLoadu load-mode="aspectFill" border-radi="5px" :img-url="swiperList[1].url" />
												</view>
												<view class="desc padding-left-xs">
													<view class="text-content text-cut-2">品牌色的选取一般根据 业务属性与产品性格 进行选取。
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
								<view class="bg-gray padding-xs radius margin-top-sm">
									<view class="cu-card article no-card bg-gray">
										<view class="cu-item bg-gray">
											<view class="content bg-gray">
												<view style="height: 80rpx;width: 120rpx;">
													<imgLoadu load-mode="aspectFill" border-radi="5px" :img-url="swiperList[2].url" />
												</view>
												<view class="desc padding-left-xs">
													<view class="text-content text-cut-2">
														比如支付宝的蓝色给人安全可靠的感觉，橙色的淘宝能激起人们的购物欲，星巴克的绿色给人自然环保的印象等等。
													</view>
													<view></view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
							<view class="">
								<view class="cu-card dynamic no-card">
									<view class="cu-item shadow">
										<view class="grid flex-sub padding-lr col-1">
											<view class="bg-img only-img" style="height: 156rpx;width: 230rpx;">
												<imgLoadu load-mode="aspectFill" border-radi="5px" :img-url="swiperList[1].url" />
											</view>
										</view>
										<view class="cu-list menu-avatar comment padding-sm">
											<view class="flex text-center text-black justify-center">
												<text>小鹏P7</text>
											</view>
											<view class="flex text-center text-red text-bold justify-center padding-xs">
												<text>21.99~40.99w</text>
											</view>
											<view class="flex text-center text-black justify-center margin-top-sm">
												<view class="cu-tag round sm line-black">图片</view>
												<view class="cu-tag round sm line-black margin-left-sm">参数</view>
												<view class="cu-tag round sm line-black margin-left-sm">车型</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="flex margin-lr-xs padding-bottom-sm justify-between">
							<text class="text-lg text-yellow">
								进入小鹏社区
								<text class="cuIcon-right"></text>
							</text>
							<text class="text-lg text-yellow">
								收起
								<text class="cuIcon-fold"></text>
							</text>
						</view>
					</view>
				</view>

				<view class="flex ">
					<view class="flex-sub bg-gray light padding-sm margin-xs radius-df">
						<view>
							<text class="cuIcon-titles text-yellow"></text>
							<text class="text-sm text-gray">产品库车型对比</text>
						</view>
						<view class="margin-top-xs">
							<view class="text-cut text-black padding-sm" style="width: 130px">e-POWER轩逸 VS 秦Plus</view>
						</view>
					</view>
					<view class="flex-sub bg-gray light padding-sm margin-xs radius-df">
						<view>
							<text class="cuIcon-titles text-yellow"></text>
							<text class="text-sm text-gray">岚图梦想家</text>
						</view>
						<view class="margin-top-xs">
							<view class="text-cut text-black padding-sm" style="width: 130px">品牌首款MVP</view>
						</view>
					</view>
				</view>
			</view>
		</comNavTab>
		<TabBarBubble :fixed-bottom="true"></TabBarBubble>
	</view>
</template>

<script>
	import {cartImg} from '../../../commonB1/commonJpg.js'
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	import imgLoadu from '../../../templateComponents/u-image/imgLoadu.vue'
	import TabBarBubble from '../../../templateComponents/helang-tabBar/tab-bar-bubble.vue'
	export default {
		components:{
			TabBarBubble,
			imgLoadu,
			comNavTab
		},
		data() {
			return {
				showInx:0,
				swiperList: [{
						id: 0,
						url: cartImg[2]
					},
					{
						id: 1,
						url: cartImg[1]
					},
					{
						id: 2,
						url: cartImg[0]
					}
				],
				iconList: [{
						icon: 'moneybagfill',
						color: 'blue',
						badge: 10,
						name: '每日简报'
					},
					{
						icon: 'repairfill',
						color: 'yellow',
						badge: 0,
						name: '小知识',
						bindtap: 'bindZan'
					},
					{
						icon: 'sponsorfill',
						color: 'pink',
						badge: 100,
						name: '政策补贴',
						bindtap: 'showResource'
					},
					{
						icon: 'recordfill',
						color: 'purple',
						badge: 0,
						name: '直播',
						bindtap: 'bindPoint'
					},
					{
						icon: 'medalfill',
						color: 'green',
						badge: 0,
						name: '专题活动',
						bindtap: 'bindPoint'
					}
				],
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
						name: '原创'
					},
					{
						id: 3,
						name: '新闻'
					},
					{
						id: 4,
						name: '视频'
					},
					{
						id: 5,
						name: '评测'
					}
				]
			};
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id,
					this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	};
</script>
<style>
	/* pages/template/index/index02/index02.wxss */
	.cu-bar .search-form-new {
		background-color: #f5f5f5;
		line-height: 64rpx;
		height: 72rpx;
		font-size: 24rpx;
		color: var(--black);
		flex: 1;
		display: flex;
		align-items: center;
		/* margin: 0 30rpx; */
	}

	.cu-bar .search-form-new+.action {
		margin-right: 30rpx;
	}

	.cu-bar .search-form-new input {
		flex: 1;
		padding-right: 30rpx;
		height: 64rpx;
		line-height: 64rpx;
		font-size: 26rpx;
		background-color: transparent;
	}

	.cu-bar .search-form-new [class*='cuIcon-'] {
		margin: 0 0.5em 0 0.8em;
	}

	.cu-bar .search-form-new [class*='cuIcon-']::before {
		top: 0rpx;
	}

	.box-search {
		margin: 20rpx 0;
	}

	.box-search view.cu-bar {
		margin-top: 20rpx;
	}

	.cu-card.article {
		display: block;
	}

	.cu-card.article>.cu-item {
		padding-bottom: 0rpx;
	}

	.cu-card.article>.cu-item .content {
		display: flex;
		padding: 0 0rpx;
	}

	.cu-card.article>.cu-item .content>image {
		width: 120rpx;
		height: 2.8em;
		margin-right: 16rpx;
		border-radius: 8rpx;
	}

	.cu-card.article>.cu-item .content .desc {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.cu-card.article>.cu-item .content .text-content {
		font-size: 24rpx;
		color: #888;
		height: 2.8em;
		overflow: hidden;
		width: 240rpx;
	}

	.cu-bar .action.border-title {
		position: relative;
		top: 0rpx;
	}

	.cu-bar .action.border-title text[class*='bg-']:last-child {
		position: absolute;
		bottom: 1.2rem;
		min-width: 1rem;
		height: 12rpx;
		left: 0;
	}
</style>