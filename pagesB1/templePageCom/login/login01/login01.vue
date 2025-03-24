<template>
	<view style="height: 100%">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="登录页面模板" :barCodShow="true">
			<view class="margin-xs">
				<view class="bg-white radius-lg" style="min-height: 90vh">
					<view class="padding-tb padding-lr">
						<text class="text-xxl text-black">欢迎使用</text>
						<text class="text-xxl text-black text-bold">&nbsp;&nbsp;哞哞顺风车</text>
						<view class="text-gray padding-top-sm">共享出行，绿色环保</view>
					</view>
					<view class="bg-white radius-lg margin-tb-xl">
						<view class="bg-img padding-xs margin-xs radius-lg"
							style="background-image: url(https://image.meiye.art/pic_1628633341089?imageMogr2/thumbnail/450x/interlace/1); height: 600rpx">
						</view>
					</view>
					<view class="padding-bottom-xxl padding-top padding-lr">
						<view class="flex flex-column margin-sm">
							<button class="cu-btn xxl bg-gradual-green"
								@click="$refs.comNav.$refs.tip.change('一键登录成功!')">
								<text class="cuIcon-weixin">&nbsp;</text>
								微信用户一键登录
							</button>
						</view>
						<view class="padding-top-xs text-center text-black text-lg padding-bottom-xxl">手机号登录</view>
					</view>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script setup>
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
</script>
<style>

</style>