<template>
    <view style="height: 100%">
		<comNavTab csTit="加载">
			<ComTitle titleTxt="常规底部加载" 
			:valueTxt="!isLoad?'cu-load loading':'cu-load over'" :code-show="true">
				<view :class="'cu-load text-gray bg-gradual-pinknew-light ' + (!isLoad ? 'loading' : 'over')"></view>
			</ComTitle>
			
			<!-- 颜色/背景 -->
			<ComTitle titleTxt="颜色/背景"
			:valueTxt="!isLoad?'cu-load bg-blue loading':'cu-load bg-blue over'" :code-show="true">
				<view :class="'cu-load text-orange bg-gradual-pinknew-light ' + (!isLoad ? 'loading' : 'over')"></view>
				<view :class="'cu-load bg-blue ' + (!isLoad ? 'loading' : 'over')"></view>
			</ComTitle>
			
			
			<!-- 加载状态 -->
			<ComTitle titleTxt="加载状态"
			:valueTxt="!isLoad?'cu-load loading':'cu-load over'" :code-show="true">
				<template #rB>
					<text class="text-df margin-right-sm">加载完成</text>
					<switch class="sm" @change="isLoading"></switch>
				</template>
				<view :class="'cu-load bg-grey bg-gradual-pinknew-light ' + (!isLoad ? 'loading' : 'over')"></view>
			</ComTitle>
			
			
			
			<!-- 加载错误 -->
			<ComTitle titleTxt="加载错误"
			valueTxt="cu-load erro" :code-show="true">
				<view class="cu-load bg-red erro"></view>
			</ComTitle>
			
			<!-- 弹框加载 -->
			<ComTitle titleTxt="弹框加载"
			valueTxt="cu-load load-modal" :code-show="true">
				<view class="bg-gradual-pinknew-light padding-tb">
				    <view class="cu-bar btn-group">
				        <button class="cu-btn round text-green line-blue shadow" @tap="loadModalFun" style="height: 84rpx"><text class="text-lg">演示</text></button>
				    </view>
				</view>
				
				<view class="cu-load load-modal" v-if="loadModal">
				    <image src="/static/images/tabbar/basics_cur.png" class="png" mode="aspectFit"></image>
				    <view class="gray-text">加载中...</view>
				</view>
			</ComTitle>
			
			
			
			<!-- 顶部进度条加载 -->
			<ComTitle titleTxt="顶部进度条加载"
			valueTxt="load-progress show" :code-show="true">
				<view class="bg-gradual-pinknew-light padding-tb">
				    <view class="cu-bar btn-group">
				        <button class="cu-btn round text-green line-blue shadow" @tap="loadProgressFun" style="height: 84rpx"><text class="text-lg">演示</text></button>
				    </view>
				</view>
				
				<view :class="'load-progress ' + (loadProgress != 0 ? 'show' : 'hide')" :style="'top:' + CustomBar + 'px;'">
				    <view class="load-progress-bar bg-green" :style="'transform: translate3d(-' + (100 - loadProgress) + '%, 0px, 0px);'"></view>
				    <view class="load-progress-spinner text-green"></view>
				</view>
			</ComTitle>
			
			
			
			<!-- 扩展样式 -->
			<ComTitle titleTxt="扩展样式"></ComTitle>
			
			<view class="margin-sm bg-gradual-pinknew-light radius-lg">
			    <view class="cu-loading-box flex align-center justify-center">
			        <flyma-load></flyma-load>
			    </view>
			    <view class="cu-loading-box flex align-center justify-center">
			        <view class="cu-loading1">
			            <view class="bg-blue" v-for="(item, index) in 8" :key="index"></view>
			        </view>
			    </view>
			    <view class="cu-loading-box flex align-center justify-center">
			        <flyma-load :load-inx="1"></flyma-load>
			    </view>
			    <view class="cu-loading-box flex align-center justify-center">
			        <view class="cu-loading2">
			            <text v-for="(item, index) in 8" :key="index"></text>
			        </view>
			    </view>
			    <!-- 扩展样式三 -->
			    <view class="cu-loading-box flex align-center justify-center">
			        <view class="cu-loading3">
			            <text v-for="(item, index) in 8" :key="index"></text>
			        </view>
			    </view>
			    <!-- 扩展样式四 -->
			    <view class="flex align-center justify-center padding-tb-sm">
			        <view class="cu-loading4">
			            <view class="rect1 bg-blue"></view>
			            <view class="rect2 bg-blue"></view>
			            <view class="rect3 bg-blue"></view>
			            <view class="rect4 bg-blue"></view>
			            <view class="rect5 bg-blue"></view>
			        </view>
			    </view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import {getNavBarHeight} from '../../commonB2/system.js'
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import flymaLoad from '../../componentsB2/flyma-load/flyma-load.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
export default {
	components:{
		comNavTab,
		ComTitle,
		flymaLoad
	},
    data() {
        return {
            CustomBar: getNavBarHeight(),
            loadProgress: 0,
            isLoad: '',
            loadModal: false,
            loadProgressPer: ''
        };
    },
    methods: {
        isLoading(e) {
            this.isLoad = e.detail.value
        },

        loadModalFun() {
            this.loadModal = true
            setTimeout(() => {
                this.loadModal = false
            }, 2000);
        },

        loadProgressFun() {
            this.loadProgress = this.loadProgress + 3,
            this.loadProgressPer = 100 - this.loadProgress + '%'
            if (this.loadProgress < 100) {
                setTimeout(() => {
                    this.loadProgressFun();
                }, 100);
            } else {
                this.loadProgress = 0,
                this.loadProgressPer = '100%'
            }
        }
    }
};
</script>
<style>
</style>
