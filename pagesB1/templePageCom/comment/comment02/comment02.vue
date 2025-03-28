<template>
	<view style="height: 100%;min-height: 0;" catchtouchmove>
		<!-- 页面 -->
		<scroll-view :scroll-y="true" enable-passive style="height: 100%;">
			<!-- 顶部个人信息 -->
			<view class="bg-white padding-bottom">
				<view class="flex padding-xs justify-between">
					<view class="flex">
						<view class="padding-right-sm text-xl padding-top-xs">
							<text class="cuIcon-back text-black"></text>
						</view>
					</view>
					<view class="flex">
						<view class="padding-tb-xs text-lg text-black">
							<view>弹出模板演示</view>
						</view>
					</view>
					<view class="flex text-xxl">
						<view class="cuIcon-forward text-black padding-top-xs"></view>
					</view>
				</view>
		
				<view class="flex margin-lr-sm padding-tb justify-between">
					<text class="text-xl text-black">
						回复
						<text class="text-gray text-lg">3</text>
					</text>
					<text class="text-lg text-gray">
						默认排序
						<text class="cuIcon-sort"></text>
					</text>
				</view>
		
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<image src="/pagesB1/static/tiandao.jpg" class="cu-avatar lg round" mode="aspectFill"></image>
						<view class="content">
							<view class="text-lg text-bold">诺克缇斯</view>
							<view class="text-gray text-sm">8小时前</view>
						</view>
						<view class="action text-xxl">
							<view class="cuIcon-more"></view>
						</view>
					</view>
					<view class="margin-left padding-left-xl text-black">
						<view class="margin-lr padding-left">
							<text>我只能说最终幻想15,就是所有3A战斗系统以及动作系统的神!</text>
						</view>
						<view class="margin-left-xl margin-right padding-lr bg-gray radius">
							<view class="margin-tb-xs padding-tb-sm bg-gray">
								<text class="text-blue">Amini：</text>
								<text class="text-black">虽然有一个开放世界之耻,但是剧情是相当无敌啊!玩到最后给我哭成泪人了.</text>
							</view>
						</view>
						<view class="margin-left-xl margin-right padding-lr bg-gray radius">
							<view class="margin-tb-xs padding-tb-sm bg-gray">
								<text class="text-blue">Q.</text>
								<view class="cu-tag bg-blue light round sm">作者</view>
								<text class="text-blue">：</text>
								<text class="text-black">
									走着一样路的只能被称为同行者,走着不同道路但能一起并肩前行的才能被称为伙伴!
								</text>
							</view>
						</view>
					</view>
					<view class="flex solid-bottom padding-lr padding-tb-sm justify-end">
						<view class="action text-xl text-black">
							<view class="cuIcon-comment"></view>
						</view>
						<text class="text-gray">回复</text>
						<view class="action text-xl text-black margin-left">
							<view class="cuIcon-appreciate"></view>
						</view>
						<text class="text-gray">赞</text>
						<view class="action text-xl text-black margin-left">
							<view class="cuIcon-footprint"></view>
						</view>
						<text class="text-gray">不踩</text>
					</view>
				</view>
		
				<view class="cu-list menu-avatar no-padding">
					<view class="cu-item">
						<image src="/pagesB1/static/kabutou.jpg" class="cu-avatar lg round" mode="aspectFill"></image>
						<view class="content">
							<view class="text-lg text-bold">盖尔</view>
							<view class="text-gray text-sm">7-31</view>
						</view>
						<view class="action text-xxl">
							<view class="cuIcon-more"></view>
						</view>
					</view>
					<view class="margin-left padding-left-xl text-black">
						<view class="margin-lr padding-left">
							<text>
								你说你不喜欢回合制,那是你还没玩过博德之门3.
								超开放世界,无数个选择,无数个结局.N多种性别,oh对了,
								我是gay尔,期待你们的加入...
							</text>
						</view>
						<view class="margin-left-xl margin-right padding-lr bg-gray radius">
							<view class="margin-tb-xs padding-tb-sm bg-gray">
								<text class="text-blue">Q.</text>
								<view class="cu-tag bg-blue light round sm">作者</view>
								<text class="text-blue">：</text>
								<text class="text-black">玩到一半强行搞基是吧,差点给我掰弯了.</text>
							</view>
						</view>
						<view class="flex solid-bottom padding-lr padding-tb-sm justify-end">
							<view class="action text-xl text-black">
								<view class="cuIcon-comment"></view>
							</view>
							<text class="text-gray">回复</text>
							<view class="action text-xl text-black margin-left">
								<view class="cuIcon-appreciate"></view>
							</view>
							<text class="text-gray">赞</text>
							<view class="action text-xl text-black margin-left">
								<view class="cuIcon-footprint"></view>
							</view>
							<text class="text-gray">踩</text>
						</view>
					</view>
				</view>
		
				<view class="cu-list menu-avatar no-padding">
					<view class="cu-item">
						<image src="/pagesB1/static/seeyou.jpg" class="cu-avatar lg round" mode="aspectFill"></image>
						<view class="content">
							<view class="text-lg text-bold">全面战争·战锤3</view>
							<view class="text-gray text-sm">7-29</view>
						</view>
						<view class="action text-xxl">
							<view class="cuIcon-more"></view>
						</view>
					</view>
					<view class="margin-left padding-left-xl text-black">
						<view class="margin-lr padding-left">
							<text>
								我不管其他游戏的优点是什么,只要是爷们,玩过战锤3就一定会爱上.毕竟谁不想统御城池,领兵打仗,
								什么?你说骑马与砍杀?好吧,算它是个好对手
							</text>
						</view>
						<view class="margin-left-xl margin-right padding-lr bg-gray radius">
							<view class="margin-tb-xs padding-tb-sm bg-gray">
								<text class="text-blue">Q.</text>
								<view class="cu-tag bg-blue light round sm">作者</view>
								<text class="text-blue">：</text>
								<text class="text-black">试过各种阵营各种领袖,玩高难度还是高等精灵和斯卡文鼠人最无脑,oh yes yes.</text>
							</view>
						</view>
					</view>
					<view class="flex solid-bottom padding-lr padding-tb-sm justify-end">
						<view class="action text-xl text-black">
							<view class="cuIcon-comment"></view>
						</view>
						<text class="text-gray">回复</text>
						<view class="action text-xl text-black margin-left">
							<view class="cuIcon-appreciate"></view>
						</view>
						<text class="text-gray">赞</text>
						<view class="action text-xl text-black margin-left">
							<view class="cuIcon-footprint"></view>
						</view>
						<text class="text-gray">踩</text>
					</view>
				</view>
				<view style="height: 25px;"></view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0
			};
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},

			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	};
</script>
<style>

</style>