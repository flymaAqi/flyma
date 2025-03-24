<template>
    <view style="height: 100%">
        <comNavTab csTit="时间轴">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
			tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧.//我之前做了一个特别酷的时间轴,等我做个兼容就上传上来"
			next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<view class="cu-timeline">
			    <view class="cu-time">昨天</view>
			    <view class="cu-item cur cuIcon-noticefill">
			        <view class="content bg-green shadow-blur">
			            <text>22:22</text>
			            【广州市】快件已到达地球
			        </view>
			    </view>
			    <view class="cu-item text-red cuIcon-attentionforbidfill">
			        <view class="content bg-red shadow-blur">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！</view>
			    </view>
			    <view class="cu-item text-grey cuIcon-evaluate_fill">
			        <view class="content bg-grey shadow-blur">这是第一次，我家的铲屎官走了这么久。</view>
			    </view>
			    <view class="cu-item text-blue">
			        <view class="bg-blue content">
			            <text>20:'00'</text>
			            【月球】快件已到达月球，准备发往地球
			        </view>
			        <view class="bg-cyan content">
			            <text>10:'00'</text>
			            【银河系】快件已到达银河系，准备发往月球
			        </view>
			    </view>
			</view>
			
			<view class="cu-timeline">
			    <view class="cu-time">06-17</view>
			    <view class="cu-item">
			        <view class="content">
			            <text>01:30</text>
			            【喵星】 MX-12138 已揽收，准备发往银河系
			        </view>
			    </view>
			</view>
			
			<view class="cu-timeline">
			    <view class="cu-time">06-17</view>
			    <view class="cu-item">
			        <view class="content">
			            <view class="cu-capsule radius">
			                <view class="cu-tag bg-cyan">上午</view>
			                <view class="cu-tag line-cyan">10:'00'</view>
			            </view>
			            <view class="margin-top">
			                这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
			                在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。
			            </view>
			        </view>
			    </view>
			    <view class="cu-item text-blue">
			        <view class="bg-blue light shadow-blur content">
			            <view class="cu-list menu-avatar radius">
			                <view class="cu-item">
			                    <view
			                        class="cu-avatar round lg"
			                        style="background-image: url(https://image.meiye.art/pic_1632282714190sv72OmGK_kRGxeEWW1D2w)"
			                    ></view>
			                    <view class="content">
			                        <view class="text-grey">海绵宝宝</view>
			                        <view class="text-gray text-sm">
			                            <text class="cuIcon-infofill text-red"></text>
			                            消息未送达
			                        </view>
			                    </view>
			                    <view class="action">
			                        <view class="text-grey text-xs">22:20</view>
			                        <view class="cu-tag round bg-grey sm">5</view>
			                    </view>
			                </view>
			                <view class="cu-item">
			                    <view
			                        class="cu-avatar round lg"
			                        style="background-image: url(https://image.meiye.art/pic_1632282714268sb8l8FLGTXwN-6R3WYg1O)"
			                    >
			                        <view class="cu-tag badge">99+</view>
			                    </view>
			                    <view class="content">
			                        <view class="text-grey">
			                            派大星
			                            <view class="cu-tag round orange sm">SVIP</view>
			                        </view>
			                        <view class="text-gray text-sm">
			                            <text class="cuIcon-redpacket_fill text-red"></text>
			                            收到红包
			                        </view>
			                    </view>
			                    <view class="action">
			                        <view class="text-grey text-xs">22:20</view>
			                        <text class="cuIcon-notice_forbid_fill text-gray"></text>
			                    </view>
			                </view>
			            </view>
			        </view>
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
