<template>
    <view style="height: 100%">
        <comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="个人中心模板" :barCodShow="true">
        <!-- 页面 -->
        <view class="bg-white margin-xs" style="min-height: 90vh">
            <!-- 顶部个人信息 -->
            <view class="bg-gradual-pink-light">
                <view class="flex padding-sm justify-between">
                    <view class="padding-xs text-xxl text-black">
                        <view>
                            小哪吒
                            <text class="text-gray text-df">/ 自由自在</text>
                        </view>
                        <view class="text-gray text-df padding-top-sm">钱塘江帅气潇洒可爱调皮双重人格小霸王</view>
                    </view>
                    <view class="">
                       <image class="cu-avatar xl round" src="https://haowallpaper.com/link/common/file/previewFileImg/16360155533593984" mode="aspectFill"></image>
                    </view>
                </view>
				<!-- 基本数据 -->
				<view class="grid text-center col-4 no-border padding-xs margin-top">
				    <view class="cu-item">
				        <view class="text-black text-bold text-xxl">500</view>
				        <text>信用值</text>
				    </view>
				    <view class="cu-item">
				        <view class="text-black text-bold text-xxl">V3</view>
				        <text>红度值</text>
				    </view>
				    <view class="cu-item">
				        <view class="text-black text-bold text-xxl">95</view>
				        <text>能者</text>
				    </view>
				    <view class="cu-item">
				        <view class="text-black text-bold text-xxl">83</view>
				        <text>任务数</text>
				    </view>
				</view>
            </view>
           
            <!-- 助力/推荐/邀请 -->
            <view class="margin-top-xs padding-lr-sm">
                <view class="bg-gradual-pinknew radius-lg shadow-blur">
                    <view class="flex padding-sm justify-between">
                        <view class="padding-xs text-xxl">
                            <view>挖贝提速</view>
                        </view>
                        <view class="padding-sm">
                            <view>当前加速：30%</view>
                        </view>
                    </view>
                    <view class="flex justify-between">
                        <view class="padding-xs text-xxl">
                            <view class="flex">
                                <view class="margin-left-xl cu-btn round bg-pink light sm">20%</view>
                                <view class="margin-left-xl cu-btn round bg-white sm text-red">30%</view>
                                <view class="margin-left-xl cu-btn round bg-pink light sm">50%</view>
                            </view>
                        </view>
                        <view class="padding-xs">
                            <view class="margin-right-sm cu-btn round bg-pink light sm">100%</view>
                        </view>
                    </view>
                    <view class="flex padding-lr justify-between">
                        <view class="cu-progress round striped active xs">
                            <view class="bg-orange" style="width: 30%"></view>
                            <view class="bg-pink light" style="width: 70%"></view>
                        </view>
                    </view>
                    <view class="flex justify-between">
                        <view class="padding-xs">
                            <view class="flex tet-df">
                                <view class="margin-left-xl"><text class="margin-left">2级</text></view>
                                <view class="margin-left-xl"><text class="margin-left">3级</text></view>
                                <view class="margin-left-xl"><text class="margin-left">4级</text></view>
                            </view>
                        </view>
                        <view class="padding-xs">
                            <view class="margin-right">5级</view>
                        </view>
                    </view>
                    <view class="flex padding-sm justify-between">
                        <view class="padding-xs text-xxl">
                            <view class="flex">
                                <view class="cu-btn round line">助力明细</view>
                                <view class="cu-btn round line margin-left-sm">我的推荐</view>
                            </view>
                        </view>
                        <view class="padding-xs">
                            <view class="cu-btn round bg-white text-red">邀新助力</view>
                        </view>
                    </view>
                </view>
            </view>
            <!-- 常用功能 -->
            <view class="cu-bar margin-top-sm">
                <view class="action">
                    <text class="text-xl">常用功能</text>
                </view>
            </view>
            <view class="cu-list grid col-4 no-border text-black" @tap="$refs.comNav.$refs.tip.change('我命由我不由天!')">
                <view class="cu-item" v-for="(item, index) in iconList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'" style="font-size: 56rpx">
                        <view class="cu-tag badge" v-if="item.badge != 0">
                            <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                        </view>
                    </view>

                    <text>{{ item.name }}</text>
                </view>
            </view>
            <!-- 其他功能 -->
            <view class="cu-bar margin-top-xs">
                <view class="action">
                    <text class="text-xl">其他功能</text>
                </view>
            </view>
            <view @tap="$refs.comNav.$refs.tip.change('我命由我不由天!')" class="cu-list grid col-4 no-border text-black radius-lg">
                <view class="cu-item" v-for="(item, index) in iconOtherList" :key="index">
                    <view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' text-shadow'" style="font-size: 56rpx">
                        <view class="cu-tag badge" v-if="item.badge != 0">
                            <block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
                        </view>
                    </view>

                    <text>{{ item.name }}</text>
                </view>
            </view>
        </view>
		</comNavTab>
    </view>
</template>

<script>
import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
export default {
	components:{
		comNavTab
	},
    data() {
        return {
            iconList: [
                {
                    icon: 'moneybagfill',
                    color: 'blue',
                    badge: 0,
                    name: '能贝'
                },
                {
                    icon: 'presentfill',
                    color: 'red',
                    badge: 0,
                    name: '活动',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'formfill',
                    color: 'purple',
                    badge: 0,
                    name: '订单',
                    bindtap: 'showResource'
                },
                {
                    icon: 'shopfill',
                    color: 'green',
                    badge: 0,
                    name: '投递',
                    bindtap: 'bindPoint'
                },
                {
                    icon: 'likefill',
                    color: 'red',
                    badge: 0,
                    name: '关注',
                    bindtap: 'bindCollect'
                },
                {
                    icon: 'favorfill',
                    color: 'orange',
                    badge: 0,
                    name: '收藏',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'noticefill',
                    color: 'cyan',
                    badge: 0,
                    name: '下载',
                    bindtap: 'showResource'
                },
                {
                    icon: 'rankfill',
                    color: 'blue',
                    badge: 0,
                    name: '统计',
                    bindtap: 'bindPoint'
                }
            ],
            iconOtherList: [
                {
                    icon: 'mail',
                    color: 'black',
                    badge: 0,
                    name: '客服'
                },
                {
                    icon: 'service',
                    color: 'black',
                    badge: 0,
                    name: '投诉建议',
                    bindtap: 'bindZan'
                },
                {
                    icon: 'settings',
                    color: 'black',
                    badge: 0,
                    name: '设置',
                    bindtap: 'showResource'
                }
            ]
        };
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},
    methods: {}
};
</script>
<style>

</style>
