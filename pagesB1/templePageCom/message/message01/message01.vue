<template>
	<view style="height: 100%;">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="消息列表模板" :barCodShow="true">
			<view class="bg-white" style="height: 92vh;">
				<view class="" style="background-image: linear-gradient(to top, #fffcf8 0%, #fae7c9 100%)">
					<view class="flex padding-sm justify-between">
						<view class="flex padding-top-xs text-xl text-black">消息</view>
						<view class="text-lg">
							<view class="cu-avatar round margin-left bg-gray">
								<view class="flex justify-center cuIcon-peoplelist text-blace"></view>
							</view>
						</view>
					</view>
					<view class="box-serach">
						<view class="cu-bar search radius-lg">
							<view class="search-form round">
								<text class="cuIcon-search"></text>
								<input type="text" placeholder="搜索" confirm-type="search" />
							</view>
						</view>
					</view>
				</view>

				<view class="cu-list menu-avatar padding-tb-sm" @tap="$refs.comNav.$refs.tip.change('看不了消息')">
					<view class="cu-item">
						<view class="cu-avatar round lg bg-oc-blue-3">
							<view class="cuIcon-notice text-white"></view>
						</view>
						<view class="content">
							<view class="text-lg text-black">互动消息</view>
							<view class="text-gray text-sm">暂无通知消息</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar round lg bg-oc-pink-4">
							<view class="cuIcon-deliver text-white"></view>
						</view>
						<view class="content">
							<view class="text-lg text-black">天天抢车位</view>
							<view class="text-gray text-sm">你的车车再不停就要生锈了</view>
						</view>
						<view class="action text-xl text-gray">
							<view class="cuIcon-moreandroid"></view>
							<view class="cu-tag round sm bg-red">4</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar round lg bg-oc-indigo-5">
							<view class="cuIcon-mark text-white"></view>
						</view>
						<view class="content">
							<view class="text-lg text-red">熟熟</view>
							<view class="text-gray text-sm">12.90km · [语音]</view>
						</view>
						<view class="action text-gray">
							<view>6-17</view>
							<view class="cu-tag round sm bg-red">2</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar round lg bg-oc-orange-4">
							<view class="cuIcon-service text-white"></view>
						</view>
						<view class="content">
							<view class="text-lg text-blue">Flyma客服</view>
							<view class="text-gray text-sm">有问题要联系客服.</view>
						</view>
						<view class="action text-gray">
							<view>9-15</view>
							<view class="cu-tag round sm bg-grey">3</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar round lg bg-oc-green-4">
							<view class="cuIcon-discover text-white"></view>
						</view>
						<view class="content">
							<view class="text-lg text-green">小宇宙</view>
							<view class="text-gray text-sm">欢迎来到小宇宙！</view>
						</view>
						<view class="action text-gray">
							<view>12-15</view>
							<view class="cu-tag round sm bg-grey">2</view>
						</view>
					</view>
				</view>
				<view class="round bg-gradual-pinknew align-center" style="position: fixed;width: 320rpx;height: 90rpx;right: 10rpx;bottom: 15%;">
					<view class="flex align-center" style="height: 100%;">
						<view class="margin-left-xs" style="height: 70rpx;width: 76rpx;">
							<image src="/pagesB1/static/tiandao.jpg" style="height: 100%;" class="round" mode="aspectFill"></image>
						</view>
						<view class="margin-left-xs">
							<text class="text-l text-bold">在线配对</text>
							<view class="text-sm">遇见有趣的人</view>
						</view>
						<view class="text-xxl padding-left">
							<text class="cuIcon-close"></text>
						</view>
					</view>
				</view>
			</view>
		</comNavTab>
		<TabBarBubble />
	</view>
</template>

<script>
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	import TabBarBubble from '../../../templateComponents/helang-tabBar/tab-bar-bubble.vue'
	export default {
		components: {
			TabBarBubble,
			comNavTab
		},
		data() {
			return {};
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {}
	};
</script>
<style>

</style>