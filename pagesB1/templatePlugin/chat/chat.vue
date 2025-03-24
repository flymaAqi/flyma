<template>
	<view>
		<comNavTab csTit="聊天">
			<phoneTem>
				<template #pBody>
					<view class="cu-bar bg-white titChat aqi-zx-xxl">
						<view class="action margin-top-sm">
							<text class="cuIcon-homefill text-gray"></text>
							首页
						</view>
						<view class="content text-bold" style="margin-top: 10px !important;">老婆大人</view>
						<view class="action margin-top-sm">
							<text class="cuIcon-recordfill text-red"></text>
						</view>
					</view>
					<view style="height: 90rpx;"></view>
					<view class="cu-chat">
						<view class="cu-item self">
							<view class="main">
								<view class="content bg-green">
									<text>咩咩咩! 咩咩咩! 咩咩咩咩咩!</text>
								</view>
							</view>
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[1]" :tsc="0.7"/>
							</view>
							<view class="date">2018年3月23日 13:23</view>
						</view>
					
						<view class="cu-info round">对方撤回一条消息,并踢了你一脚!</view>
					
						<view class="cu-item">
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[0]" :tsc="0.7"/>
							</view>
							<view class="main">
								<view class="content shadow">
									<text>灰太狼,今天再抓不到羊,你就不要回来了!!!</text>
								</view>
							</view>
						</view>
						<view class="cu-item self">
							<view class="main">
								<view class="action">
									<text class="cuIcon-roundclosefill text-red"></text>
								</view>
								<view class="content bg-green">老婆,我一定会回来的!</view>
							</view>
					
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[1]" :tsc="0.7"/>
							</view>
						</view>
						<view class="cu-info">
							<text class="cuIcon-roundclosefill text-red"></text>
							对方拒绝了你的消息
						</view>
					
						<view class="cu-info">
							对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
							<text class="text-blue">发送好友验证</text>
						</view>
					
						<view class="cu-item self">
							<view class="main">
								<view style="width: 500rpx;">
									<imgLoadu load-mode="widthFix" load-height="350rpx" :img-url="imgUrl[2]" />
								</view>
							</view>
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[1]" :tsc="0.7"/>
							</view>
							<view class="date">13:23</view>
						</view>
					
						<view class="cu-item self">
							<view class="main">
								<view class="content">
									<text class="text-bold text-grey">3"</text>
									<text class="cuIcon-subscription text-grey text-xxl padding-right-xl"
										style="transform: scale(1.5) rotate(-135deg) translate(25rpx);"></text>
								</view>
							</view>
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[1]" :tsc="0.7"/>
							</view>
						</view>
					
						<view class="cu-item self">
							<view class="main">
								<view class="action">
									<text class="cuIcon-locationfill text-orange text-xxl"></text>
								</view>
								<view class="content shadow">羊村,监狱</view>
							</view>
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[1]" :tsc="0.7"/>
							</view>
						</view>
					
						<view class="cu-item">
							<view style="width: 110rpx;height: 110rpx;overflow: hidden;" class="round">
								<imgLoadu load-mode="aspectFit" :img-url="imgUrl[0]" :tsc="0.7"/>
							</view>
							<view class="main">
								<view class="content shadow">@#$^&**</view>
								<view class="action text-grey">
									<text class="cuIcon-warnfill text-red text-xxl"></text>
									<text class="text-sm margin-left-sm">翻译错误</text>
								</view>
							</view>
							<view class="date">13:23</view>
						</view>
						<view style="height: 100rpx;"></view>
					</view>
				</template>
				<template #pFoot>
					<view class="inputChat cu-bar input aqi-zx-xxl" :style="'bottom:' + InputBottom + 'px'">
						<view class="action">
							<text class="cuIcon-sound text-grey"></text>
						</view>
					
						<input class="solid-bottom" @blur="InputBlur" :adjust-position="true"
							:focus="false" maxlength="300" cursor-spacing="10" />
					
						<view class="action">
							<text class="cuIcon-emojifill text-grey"></text>
						</view>
					
						<button class="cu-btn bg-green shadow">发送</button>
					</view>
				</template>
			</phoneTem>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import phoneTem from '../../templateComponents/phoneTem/phoneTem.vue'
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
	export default {
		components:{
			phoneTem,
			imgLoadu,
			comNavTab,
			ComTitle
		},
		data() {
			return {
				InputBottom: 0,
				imgUrl:[
					"https://www.helloimg.com/i/2025/03/13/67d24336cd39e.png",
					"https://www.helloimg.com/i/2025/03/13/67d24336bbd87.jpg",
					"https://images.china.cn/attachement/jpg/site1000/20130621/001ec949ff42132df1de0e.jpg"
				]
			};
		},
		methods: {
			InputFocus(e) {
				// this.InputBottom = e.detail.height
			},

			InputBlur(e) {
				this.InputBottom = 0
			}
		}
	};
</script>
<style lang="scss" scoped>
	.inputChat {
		position: fixed;
		width: 100%;
		padding: 15rpx;
		border-bottom-right-radius: 50rpx;
		border-bottom-left-radius: 50rpx;
	}
	.titChat {
		position: fixed;
		width: 100%;
		overflow: hidden;
		border-top-right-radius: 40rpx;
		border-top-left-radius: 40rpx;
	}
</style>