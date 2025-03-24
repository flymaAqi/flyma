<template>
    <view style="height: 100%">
		<comNavTab csTit="标签">
			<ComTitle titleTxt="标签形状"
			valueTxt="cu-tag" :code-show="true">
				<view class="flex justify-around padding bg-white aqi-margin-sm">
				    <view class="cu-tag margin-right">默认</view>
				    <view class="cu-tag round margin-right">椭圆</view>
				    <view class="cu-tag radius margin-right">圆角</view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="标签尺寸"
			valueTxt="cu-tag sm" :code-show="true">
				<view class="padding bg-white aqi-margin-sm flex justify-around">
				    <view class="cu-tag radius sm margin-right">小尺寸</view>
				    <view class="cu-tag radius margin-right">普通尺寸</view>
					<view class="cu-tag radius margin-right" style="width: 200px;">大尺寸</view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="标签颜色"
			valueTxt="cu-tag bg-{color}" :code-show="true">
				<view class="bg-gradual-blue-light padding-sm flex flex-wrap aqi-margin-sm">
				    <view class="padding-xs" v-for="(item, index) in ColorList" :key="index">
				        <view v-if="item.name != 'gray'" :class="'cu-tag bg-' + item.name + ' radius'">{{ item.title }}</view>
				    </view>
				    <view class="padding-xs" v-for="(item, index) in ColorList" :key="index">
				        <view :class="'cu-tag bg-' + item.name + ' light radius'" v-if="item.name != 'gray' && item.name != 'black' && item.name != 'white'">{{ item.title }}</view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="镂空标签"
			valueTxt="cu-tag line-{color}" :code-show="true">
				<view class="bg-gradual-blue-light padding-sm flex flex-wrap margin-sm radius-lg">
				    <view class="padding-xs" v-for="(item, index) in ColorList" :key="index">
				        <view v-if="item.name != 'white'" :class="'cu-tag line-' + item.name">{{ item.title }}</view>
				    </view>
				    <view class="padding-xs" v-for="(item, index) in ColorList" :key="index">
				        <view v-if="item.name != 'white'" :class="'cu-tag line-' + item.name + ' round'">{{ item.title }}</view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="胶囊样式" 
			tip-txt="//子元素使用cu-tag" valueTxt="cu-capsule bg-{color}" :code-show="true">
				<view class="bg-gradual-blue-light padding-sm flex flex-wrap aqi-margin-sm">
				    <view class="margin-bottom">
				        <view class="cu-capsule margin-right">
				            <view class="cu-tag bg-red">
				                <text class="cuIcon-likefill"></text>
				            </view>
				            <view class="cu-tag line-red">12</view>
				        </view>
				        <view class="cu-capsule margin-right">
				            <view class="cu-tag bg-red">标签</view>
				            <view class="cu-tag line-red">12</view>
				        </view>
				        <view class="cu-capsule round margin-right">
				            <view class="cu-tag bg-blue">
				                <text class="cuIcon-likefill"></text>
				            </view>
				            <view class="cu-tag line-blue">23</view>
				        </view>
				       <view class="cu-capsule round margin-right">
				            <view class="cu-tag bg-blue">标签</view>
				            <view class="cu-tag line-blue">23</view>
				        </view>
				    </view>
				    <view class="">
				        <view class="cu-capsule radius margin-right">
				            <view class="cu-tag bg-orange">
				                <text class="cuIcon-likefill"></text>
				            </view>
				            <view class="cu-tag line-orange">23</view>
				        </view>
				        <view class="cu-capsule radius margin-right">
				            <view class="cu-tag bg-green">标签</view>
				            <view class="cu-tag line-green">23</view>
				        </view>
				        <view class="cu-capsule radius margin-right">
				            <view class="cu-tag bg-brown sm">
				                <text class="cuIcon-likefill"></text>
				            </view>
				            <view class="cu-tag line-brown sm">23</view>
				        </view>
				        <view class="cu-capsule radius margin-left">
				            <view class="cu-tag bg-pink sm">标签</view>
				            <view class="cu-tag line-brown sm">23</view>
				        </view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="提示标签"
			valueTxt="cu-tag badge" :code-show="true">
				<view class="bg-gradual-blue-light padding flex justify-between align-center aqi-margin-sm">
				    <view class="cu-avatar xl radius">
				        L
				        <view class="cu-tag badge">99+</view>
				    </view>
				    <view class="cu-avatar xl radius" >
						<image src="/pagesB1/static/ouBu.jpg" style="width: 100%;height: 100%;"></image>
				        <view class="cu-tag badge">9</view>
				    </view>
				    <view class="cu-avatar xl radius">
				        <view class="cu-tag badge"></view>
				        <text class="cuIcon-people"></text>
				    </view>
				    <view class="cu-avatar xl radius">
				        <view class="cu-tag badge">99+</view>
				    </view>
				</view>
			</ComTitle>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	import {
		color_list
	} from '@/common/commonData.js'
export default {
	components:{
		comNavTab,
		ComTitle
	},
    data() {
        return {
            ColorList: color_list,
            iconList: [
                {
                    icon: 'cardboardfill',
                    color: 'red',
                    badge: 120,
                    name: 'VR'
                },
                {
                    icon: 'recordfill',
                    color: 'orange',
                    badge: 1,
                    name: '录像'
                },
                {
                    icon: 'picfill',
                    color: 'yellow',
                    badge: 8,
                    name: '图像'
                },
                {
                    icon: 'noticefill',
                    color: 'olive',
                    badge: 22,
                    name: '通知'
                }
            ]
        };
    },
    methods: {}
};
</script>
<style>
</style>
