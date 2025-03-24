<template>
    <view style="height: 100%">
        <comNavTab csTit="卡券">
				<!-- 样式1 -->
			   <view class="flex solid-bottom margin-top justify-center">
			       <view class="cu-coupon-box radius-lg padding-sm">
			           <view class="flex justify-between">
			               <view class="text-white text-xl text-bold">Flyma会员卡</view>
			               <view class="cu-tag line-white round text-df padding-lr-sm">VIP</view>
			           </view>
			           <view class="flex justify-center align-end padding-tb cu-coupon-content text-white">
			               <text class="text-lg padding-bottom-xs">余额</text>
			               <text class="text-sl">1998</text>
			               <text class="text-lg padding-bottom-xs">元</text>
			           </view>
			           <view class="flex justify-around align-center margin-top-xl text-white">
			               <view class="text-center">
			                   <view>已支出</view>
			                   <view>888元</view>
			               </view>
			               <view class="text-center">
			                   <view>已优惠</view>
			                   <view>108元</view>
			               </view>
			               <view class="text-center">
			                   <view>已使用</view>
			                   <view>188次</view>
			               </view>
			           </view>
			       </view>
			   </view>
			
			   <!-- 样式2 -->
			   <view class="cu-coupon-box2 radius-lg">
			       <view class="cu-tag bg-orange radius text-df padding-lr-sm">即将过期</view>
			       <view class="flex p-xs margin-bottom-sm mb-sm">
			           <view class="flex-sub padding-sm padding-top margin-xs text-red">
			               <text class="text-xxxl">888</text>
			               元
			           </view>
			           <view class="flex-treble padding-left-sm">
			               <view class="text-black text-lg text-bold">888 元优惠券</view>
			               <view class="text-gray padding-top-xs">截止日期：2022-12-14 21:59:59</view>
			           </view>
			       </view>
			   </view>
			
			   <!-- 样式3 -->
			   <view class="cu-coupon-card3"></view>
			
			   <!-- 样式4 -->
			   <view class="cu-coupon-card4"></view>
			
			   <!-- 样式5 -->
			   <view class="cu-coupon-card5">
				   <view>12</view>
				   <text>1231</text>
			   </view>
			
			   <!-- 样式7 -->
			   <view class="padding-tb-sm flex justify-center" style="background-color: #57d4f4">
			       <view class="cu-coupon-card7">
			           <view class="cu-coupon-top">
			               <view class="cu-coupon-title">
			                   <span></span>
			                   <text>活动规则</text>
			                   <span></span>
			               </view>
			           </view>
			           <view class="bottom"></view>
			       </view>
			   </view>
		</comNavTab>
    </view>
</template>

<script setup>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
</script>
<style>
</style>
