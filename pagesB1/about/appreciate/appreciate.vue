<template>
    <view style="height: 100%">
		<comNavTab csTit="致谢✨">
			<view class="margin-xl bg-white padding-xl radius-lg">
				<reciateT/>
			</view>
			<view class="margin-xl padding-xl bg-white">
				<view class="text-center margin-bottom text-lg text-bold text-red">️✨</view>
				<view class="text-content">
					<view class="flex flex-wrap" @tap="CopyText" data-link="https://github.com/weilanwl/ColorUI">
						<view class="basis-xl">
							<view class="text-cut" style="width: 500rpx">ColorUI: https://github.com/weilanwl/ColorUI</view>
						</view>
						<view class="cuIcon-copy text-blue"></view>
					</view>
					<view class="flex flex-wrap margin-top-sm" @tap="CopyText"
						data-link="https://github.com/XiaokangLei/ColorUI-GA">
						<view class="basis-xl">
							<view class="text-cut" style="width: 500rpx">ColorUI-GA: https://github.com/XiaokangLei/ColorUI-GA
							</view>
						</view>
						<view class="cuIcon-copy text-blue"></view>
					</view>
					<view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://uniapp.dcloud.io">
						<view class="basis-xl">
							<view class="text-cut" style="width: 500rpx">uniapp: https://uniapp.dcloud.io</view>
						</view>
						<view class="cuIcon-copy text-blue"></view>
					</view>
					<view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://cn.vuejs.org/">
						<view class="basis-xl">
							<view class="text-cut" style="width: 500rpx">vuejs: https://cn.vuejs.org/</view>
						</view>
						<view class="cuIcon-copy text-blue"></view>
					</view>
					<view class="flex flex-wrap margin-top-sm" @tap="CopyText" data-link="https://www.meiye.art/inspiration">
						<view class="basis-xl">
							<view class="text-cut" style="width: 500rpx">MeiYe: https://www.meiye.art/inspiration</view>
						</view>
						<view class="cuIcon-copy text-blue"></view>
					</view>
					<view class="flex flex-wrap margin-top-sm" @tap="CopyText"
						data-link="https://gitee.com/susuhhhhhh/wxmini_demo">
						<view class="basis-xl">
							<view class="text-cut" style="width: 500rpx">WxminiDemo: https://gitee.com/susuhhhhhh/wxmini_demo
							</view>
						</view>
						<view class="cuIcon-copy text-blue"></view>
					</view>
					<view class="flex flex-wrap margin-top-sm" @tap="CopyText"
						data-link="https://gitee.com/susuhhhhhh/wxmini_demo">
						<view class="basis-xl text-blue">
							为开源点赞🥰
						</view>
					</view>
				</view>
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
	},
    data() {
        return {};
    },
    methods: {
        
    }
};
</script>
<style>
</style>