<template>
    <view style="height: 100%">
		<comNavTab csTit="边框">
			<ComTitle titleTxt="边框" :valueTxt="size?'solids-{direction}':'solid-{direction}'" :code-show="true">
				<template #rB>
					<text class="text-df margin-right-sm">粗边框</text>
					<switch class="sm" @change="SetSize"></switch>
				</template>
				<view class="padding bg-white text-center aqi-margin-sm">
				    <view :class="'padding solid' + (size ? 's' : '')">四周</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-top margin-top'">上</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-right margin-top'">右</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-bottom margin-top'">下</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-left margin-top'">左</view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="虚线边框" valueTxt="dashed-{direction}" :code-show="true">
				<view class="padding bg-white text-center aqi-margin-sm">
				    <view class="padding dashed">四周</view>
				    <view class="padding dashed-top margin-top">上</view>
				    <view class="padding dashed-right margin-top">右</view>
				    <view class="padding dashed-bottom margin-top">下</view>
				    <view class="padding dashed-left margin-top">左</view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="颜色示例(蓝色)" :valueTxt="size?'solids-{direction}-{color}':'solid-{direction}-{color}'" :code-show="true">
				<template #rB>
					<text class="text-df margin-right-sm">粗边框</text>
					<switch class="sm" @change="SetSize"></switch>
				</template>
				<view class="padding bg-white text-center aqi-margin-sm">
				    <view :class="'padding solid' + (size ? 's' : '') + '-blue'">四周</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-top-blue margin-top'">上</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-right-blue margin-top'">右</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-bottom-blue margin-top'">下</view>
				    <view :class="'padding solid' + (size ? 's' : '') + '-left-blue margin-top'">左</view>
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
