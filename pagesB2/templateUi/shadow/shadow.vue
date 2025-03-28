<template>
	<view style="height: 100%">
		<comNavTab csTit="阴影">
			<ComTitle titleTxt="基本样式" valueTxt="shadow bg-white" :codeShow="true">
				<view class="padding text-center aqi-margin-sm bg-white">
					<view class="padding-xl radius shadow bg-white radius-df">默认阴影</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="颜色阴影" valueTxt="shadow bg-blue" :codeShow="true">
				<view class="padding text-center aqi-margin-sm bg-white">
					<view class="padding-xl radius shadow bg-blue radius-df">根据背景颜色而改变的阴影</view>
					<view class="padding-xl radius shadow bg-green margin-top radius-df">根据背景颜色而改变的阴影</view>
					<view class="padding-xl radius shadow bg-red margin-top radius-df">根据背景颜色而改变的阴影</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="扩展样式" valueTxt="shadow shadow-lg bg-white" :codeShow="true">
				<view class="padding text-center aqi-margin-sm bg-white">
					<view class="padding-xl radius shadow shadow-lg bg-white radius-df">长阴影</view>
					<view class="padding-xl radius shadow shadow-lg bg-blue margin-top-lg radius-df">长阴影</view>
					<view class="padding-xl radius shadow-warp bg-white margin-top-lg radius-df">翘边阴影</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="图片阴影" valueTxt="shadow-blur bg-red bg-img" :codeShow="true">
				<view class="padding aqi-margin-sm text-center bg-white">
					<view class="padding-xl radius shadow-blur shadow bg-red margin-top bg-img radius-df"
						style="background-image: url(https://image.meiye.art/pic_16315109642566PfLKIIH4ZEITSu8a3yNu)">
						<view>根据背景图而改变的阴影</view>
					</view>
					<view class="padding-xl radius shadow-blur shadow bg-red margin-top bg-img radius-df"
						style="background-image: url(https://image.meiye.art/pic_VF1F5E-Pe0S0X0wTj9ABL)">
						<view>根据背景图而改变的阴影</view>
					</view>
				</view>
			</ComTitle>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				size: ''
			};
		},
		methods: {
			SetSize(e) {
				this.size = e.detail.value
			}
		}
	};
</script>
<style>
</style>