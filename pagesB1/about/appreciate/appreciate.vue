<template>
    <view style="height: 100%">
		<comNavTab csTit="致谢✨">
			<view class="margin-xl bg-white padding-xl radius-lg">
				<reciateT/>
			</view>
			<view class="margin-xl padding-xs bg-white">
				<text class="basis-xl text-blue">
					👉 感谢 \-梅山客-\ 提供友情支持 👈
				</text>
			</view>
			<view class="flex justify-center">
				<view class=" padding-sm solid-right">与君同舟渡</view>
				<view class=" padding-sm solid-left">达岸各自归</view>
			</view>
			<view class="flex justify-center">
				<view class=" padding-sm">词穷致谢,来日方长!</view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue'
	import reciateT from '../reciateT.vue'
export default {
	components:{
		comNavTab,
		reciateT
	}
};
</script>
<style>
</style>