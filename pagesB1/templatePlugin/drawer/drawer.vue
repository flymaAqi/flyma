<template>
    <view>
        <scroll-view scroll-y :class="'cu-drawer-page ' + (modalName == 'viewModal' ? 'show' : '')">
           <comNavTab csTit="全屏抽屉">
			   <view class="padding margin text-center">
			       <view class="cu-btn bg-blue lg block shadow radius margin-xl" @tap="showModal" data-target="viewModal">打开抽屉</view>
			   </view>
			   
			   <view class="margin padding bg-white radius-lg">
			       <view class="flex justify-between">
			           <view class="text-black">操作说明</view>
			       </view>
			       <view class="padding-tb">
			           <view class="text-sm">1、点击『打开抽屉』左侧显示抽屉内容</view>
			           <view class="text-sm padding-tb-xs">2、点击抽屉右侧空白区域或右下键箭头标志，返回主页面</view>
			           <view class="text-sm">3、可用于展示商品大类、个人信息等场景</view>
			       </view>
			   </view>
			   <ComTitle titleTxt="全屏抽屉" code-show="true" value-txt="cu-drawer-window show"></ComTitle>
		   </comNavTab>
        </scroll-view>

        <view :class="'cu-drawer-close ' + (modalName == 'viewModal' ? 'show' : '')" @tap="hideModal">
            <text class="cuIcon-pullright"></text>
        </view>

        <scroll-view scroll-y :class="'cu-drawer-window ' + (modalName == 'viewModal' ? 'show' : '')">
            <aboutHome></aboutHome>
			<view style="height: 100rpx;"></view>
        </scroll-view>
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
            modalName: ''
        };
    },
    methods: {
        showModal(e) {
            this.modalName = e.currentTarget.dataset.target
        },

        hideModal(e) {
            this.modalName = null
        },
    }
};
</script>
<style>
</style>
