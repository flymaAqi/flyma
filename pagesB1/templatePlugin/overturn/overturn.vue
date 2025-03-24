<template>
    <view style="height: 100%">
        <comNavTab csTit="卡片翻转">
			<view class="flex justify-center margin-top-xxl padding-top-xxl">
				<image mode="aspectFill" @tap.stop.prevent="showb1" src="../../static/kabutou.jpg" :class="styleA?'tyF':'tyT'" class="cu-overturn-box radius-lg"></image>
				<image mode="aspectFill" @tap.stop.prevent="showb2" :class="styleB?'tyF':'tyT'" src="../../static/tiandao.jpg" class="cu-overturn-box cu-b2 radius-lg"></image>
			</view>
			
			<view class="margin padding-top" style="margin-top: 39vh">
				<codeCard value-txt="tyF"></codeCard>
			    <view class="margin-top bg-white padding radius-lg">
			        <view class="text-sm text-black">操作说明：</view>
			        <view class="text-gray text-sm padding-top-xs">点击图片将会翻转图片显示另一张图片。</view>
			        <view class="text-gray text-sm padding-top-xs">可用于抽奖、盲盒等场景</view>
			    </view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
export default {
	components:{
		comNavTab,
		ComTitle
	},
    data() {
        return {
            styleA: true,
            styleB: false
        };
    },
    methods: {
        showb1() {
            this.styleA = false
            this.styleB = true
        },

        showb2() {
            this.styleA = true
            this.styleB = false
        }
    }
};
</script>
<style>
.tyF{
	transform: rotateY(0deg);
}
.tyT{
	transform: rotateY(180deg);
}
</style>
