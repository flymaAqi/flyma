<template>
	<view style="height: 100%">
		<comNavTab csTit="评论模板" :bar-cod-show="true">
			<view class="bg-white" style="min-height: 92vh">
				<view class="flex padding-sm justify-between solid-bottom">
					<view class="flex padding-top-xs">
						<image src="/pagesB1/static/tiandao.jpg" class="cu-avatar round" mode="aspectFill"></image>
					</view>
					<view class="text-xxl">
						<view class="flex justify-center cuIcon-peoplelist text-black"></view>
						<view class="text-sm">我的关注</view>
					</view>
				</view>

				<view class="cu-list menu-avatar">
					<!-- 个人信息：头像、昵称、日期和会员等级 -->
					<view class="cu-item">
						<image src="/pagesB1/static/kabutou.jpg" class="cu-avatar lg round" mode="aspectFill"></image>
						<view class="content">
							<view class="text-lg text-brown">吴天毅_7845</view>
							<view class="cu-tag margin-right round bg-yellow sm">Lv3</view>
						</view>
						<view class="text-gray text-sm">6月20号</view>
					</view>
				</view>
				<!-- 评论内容 -->
				<view class="text-black">
					<view class="margin-lr padding-left">
						<text class="text-lg">非常满意</text>
					</view>
					<!-- 打分 -->
					<view class="margin-lr padding-left padding-top">
						<view class="rate padding-bottom-xs text-lg flex align-center">
							<text class="padding-right-xs">打分</text>
							<view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
								<text
									:class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
							</view>
						</view>
					</view>
					<!-- 商品信息 -->
					<view class="margin-left-xl margin-right bg-gray radius">
						<view class="flex justify-between">
							<view class="flex">
								<view class="padding-xs">
									<image src="https://image.meiye.art/pic_6oCVKYUh4zLkWrhfRLYMV" class="cu-avatar lg radius"></image>
								</view>
								<view class="padding-xs padding-top-sm text-df text-black">
									<view class="text-bold">谭鸭血老火锅(簋街店)</view>
									<view class="text-gray text-sm padding-top-xs">东城区 东直门 四川火锅</view>
								</view>
							</view>
							<view class="flex justify-center">
								<view class="flex align-center text-xxl text-gray padding-lr-sm">
									<view class="cuIcon-favor"></view>
									<text class="text-lg">1531</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 浏览 -->
					<view class="margin-lr padding-left padding-top-xs">
						<text class="text-df text-gray">浏览 43</text>
					</view>
					<!-- 提示、评论、分享 -->
					<view class="flex justify-between text-gray padding-top-xs">
						<view class="margin-lr padding-left padding-top-xs text-lg">
							<text class="cuIcon-appreciate"></text>
							<text class="text-df text-gray">成为第一个点赞的人</text>
						</view>
						<view class="margin-lr padding-left padding-top-xs text-lg">
							<text class="cuIcon-comment"></text>
							<text class="text-df padding-left-xs padding-right-sm">1</text>
							<text class="cuIcon-forward"></text>
						</view>
					</view>
					<!-- 评论回复 -->
					<view class="margin-lr padding-left padding-top-sm padding-bottom-xs solid-bottom">
						<text class="text-df text-blue">谭鸭血老火锅(商家)：</text>
						<text class="text-black">亲爱滴阁下您好，感谢您光临谭鸭血篇街店用餐，本店每日隆重推出38通抵100元限时抢购。</text>
					</view>
				</view>
				<view class="cu-list menu-avatar solid-top">
					<!-- 个人信息：头像、昵称、日期和会员等级 -->
					<view class="cu-item">
						<image src="/pagesB1/static/tiandao.jpg" class="cu-avatar lg round" mode="aspectFill"></image>
						<view class="content">
							<view class="text-lg text-brown">吴天毅_7845</view>
							<view class="cu-tag margin-right round bg-yellow sm">Lv3</view>
						</view>
						<view class="text-gray text-sm">6月20号</view>
					</view>
				</view>
				<!-- 评论内容 -->
				<view class="text-black">
					<view class="margin-lr padding-left">
						<text class="text-lg">老板的热情特别赞 味道也好</text>
					</view>
					<!-- 打分 -->
					<view class="margin-lr padding-left padding-top">
						<view class="rate padding-bottom-xs text-lg flex align-center">
							<text class="padding-right-xs">打分</text>
							<view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
								<text
									:class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
							</view>
						</view>
					</view>
					<!-- 商品信息 -->
					<view class="margin-left-xl margin-right bg-gray radius">
						<view class="flex justify-between">
							<view class="flex">
								<view class="padding-xs">
									<image src="https://image.meiye.art/pic_ZxETwcievAXp43tUu2V08" class="cu-avatar lg radius"></image>
								</view>
								<view class="padding-xs padding-top-sm text-df text-black">
									<view class="text-bold">苍蝇胡同(秦安街总店)</view>
									<view class="text-gray text-sm padding-top-xs">东城区 东直门 四川火锅</view>
								</view>
							</view>
							<view class="flex justify-center">
								<view class="flex align-center text-xxl text-gray padding-lr-sm">
									<view class="cuIcon-favor"></view>
									<text class="text-lg">1297</text>
								</view>
							</view>
						</view>
					</view>
					<!-- 浏览 -->
					<view class="margin-lr padding-left padding-top-xs">
						<text class="text-df text-gray">浏览 40</text>
					</view>
					<!-- 提示、评论、分享 -->
					<view class="flex justify-between text-gray padding-top-xs">
						<view class="margin-lr padding-left padding-top-xs text-lg">
							<text class="cuIcon-appreciate"></text>
							<text class="text-df text-gray">成为第一个点赞的人</text>
						</view>
						<view class="margin-lr padding-left padding-top-xs text-lg">
							<text class="cuIcon-comment"></text>
							<text class="text-df padding-left-xs padding-right-sm">1</text>
							<text class="cuIcon-forward"></text>
						</view>
					</view>
					<!-- 评论回复 -->
					<view class="margin-lr padding-left padding-top-sm padding-bottom-xs solid-bottom">
						<text class="text-df text-blue">苍蝇胡同(商家)：</text>
						<text class="text-black">再次感谢您慷慨的五星!再次感谢!</text>
					</view>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	export default {
		components:{
			comNavTab
		},
		data() {
			return {
				count: 5,
				active: 0,
				score: 1,
				extraClass: ''
			};
		},
		/**
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			/**
			 * 点击评分
			 */
			click(e) {
				const {
					score,
					count
				} = this;
				const active = e.currentTarget.dataset.index;
				this.active = active
				this.$emit(
					'click', {
						detail: {
							result: (score / count) * active
						}
					}, {}
				);
			}
		}
	};
</script>
<style>

</style>