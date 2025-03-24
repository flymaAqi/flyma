<template>
    <view style="height: 100%">
      <comNavTab csTit="开关">
		  <ComTitle titleTxt="基本样式"
		  valueTxt="" pre-txt="<switch class=" next-txt=">开关</swicth>" :code-show="true">
		  	<view class="aqi-margin-sm">
		  	    <view class="cu-form-group radius-lg-top">
		  	        <view class="title">未启用</view>
		  	        <switch></switch>
		  	    </view>
		  	    <view class="cu-form-group">
		  	        <view class="title">已启用</view>
		  	        <switch checked></switch>
		  	    </view>
		  	    <view class="cu-form-group">
		  	        <view class="title">禁用-默认未启用</view>
		  	        <switch disabled></switch>
		  	    </view>
		  	    <view class="cu-form-group radius-lg-bottom">
		  	        <view class="title">禁用-默认已启用</view>
		  	        <switch checked disabled></switch>
		  	    </view>
		  	</view>
		  </ComTitle>
		  
		  <ComTitle titleTxt="定义颜色"
		  valueTxt="red" pre-txt="<switch class=" next-txt=">开关</swicth>" :code-show="true">
			<view class="aqi-margin-sm">
			    <view class="cu-form-group margin-top radius-lg-top">
			        <view class="title">定义颜色</view>
			        <switch class="red" checked></switch>
			        <switch class="blue" checked></switch>
			    </view>
			
			    <view class="cu-form-group">
			        <view class="title">定义图标</view>
			        <switch class="switch-sex" checked></switch>
			        <switch class="switch-music" checked></switch>
			    </view>
			
			    <view class="cu-form-group radius-lg-bottom">
			        <view class="title">方形开关</view>
			        <switch class="orange radius" checked></switch>
			    </view>
			</view>
		  </ComTitle>
		  
		  
		  
		  <ComTitle titleTxt="改变数据"
		  valueTxt="switch-sex" pre-txt="<switch class=" next-txt=" @change='switchSex'>开关</swicth>" :code-show="true">
				<view class="cu-form-group aqi-margin-sm">
				    <view class="title">当前值：{{ sex }}</view>
				    <switch class="switch-sex" @change="switchSex"></switch>
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
            sex: '女',
            ischecked: undefined,
            undefined: ''
        };
    },
    methods: {
        /**
         * 开关事件
         * @param {*} e
         */
        switchSex: function (e) {
            if (e.detail.value) {
                this.sex = '男'
            } else {
                this.sex = '女'
            }
        },
    }
};
</script>
<style lang="scss" scoped>
</style>
