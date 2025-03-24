<template>
    <view style="height: 100%">
        <comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="消息列表模板" :barCodShow="true">
            <view class="bg-white margin-xs">
                <view class="radius-lg-top solid-bottom">
                    <view class="flex padding-sm justify-between padding-lr">
                        <view class="flex align-center text-xl text-black">消息</view>
                        <view class="flex align-center text-lg">
                            <view class="box-serach" style="width: 220rpx">
                                <view class="cu-bar search radius-lg">
                                    <view class="search-form round">
                                        <text class="cuIcon-search"></text>
                                        <input type="text" placeholder="搜索" confirm-type="search" />
                                    </view>
                                </view>
                            </view>
                            <view class="padding-sm text-xxl">
                                <view class="flex justify-center cuIcon-friend text-blace"></view>
                            </view>
                            <view class="padding-sm text-xxl">
                                <view class="flex justify-center cuIcon-settings text-blace"></view>
                            </view>
                        </view>
                    </view>
                    <view class="padding flex justify-between margin-lr-sm" @tap="$refs.comNav.$refs.tip.change('叮咚')">
                        <view class="text-center">
                            <view class="cu-avatar shadow shadow-lg lg radius bg-gradual-orange">
                                <text class="cuIcon-noticefill"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">通知</view>
                        </view>
                        <view class="text-center">
                            <view class="cu-avatar shadow shadow-lg lg radius bg-gradual-blue">
                                <text class="cuIcon-radiobox"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">@我的</view>
                        </view>
                        <view class="text-center">
                            <view class="cu-avatar shadow shadow-lg lg radius bg-gradual-green">
                                <text class="cuIcon-commentfill"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">评论</view>
                        </view>
                        <view class="text-center">
                            <view class="cu-avatar shadow shadow-lg lg radius bg-gradual-pink">
                                <text class="cuIcon-appreciatefill"></text>
                            </view>
                            <view class="flex justify-center padding-tb-xs text-black">赞</view>
                        </view>
                    </view>
                </view>

                <view class="cu-list menu-avatar padding-tb-sm bg-gray" style="min-height: 64vh">
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-red-6">
                            <view class="cuIcon-notice text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-black">微博视频</view>
                            <view class="text-gray text-sm text-cut" style="width: 500rpx">您2019年05月01日15:22上传的视频转码</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">昨天</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view class="cu-avatar round lg bg-oc-orange-4">
                            <view class="cuIcon-commentfill text-white"></view>
                        </view>
                        <view class="content">
                            <view class="text-lg text-black">未关注人消息</view>
                            <view class="text-gray text-sm">微博任务发来了新消息</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">昨天</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg bg-oc-indigo-5"
                            :style="{'background-image': 'url('+bdimg[2]+')'}"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-red">Eleven1dream</view>
                            <view class="text-gray text-sm">嗨!我来啦~ 来撩你一下![5/15]</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">昨天'00':03</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg bg-oc-orange-4"
                            :style="{'background-image': 'url('+bdimg[1]+')'}"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-black">丹麦小吐司</view>
                            <view class="text-gray text-sm">互粉哦，关注你了</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">4-31</view>
                        </view>
                    </view>
                    <view class="cu-item">
                        <view
                            class="cu-avatar round lg bg-oc-orange-4"
                            :style="{'background-image': 'url('+bdimg[0]+')'}"
                        ></view>
                        <view class="content">
                            <view class="text-lg text-black">野生大母牛</view>
                            <view class="text-gray text-sm">有问题向你求助，快来快来啊阿啊</view>
                        </view>
                        <view class="action text-sm text-gray">
                            <view class="text-gray">3-20</view>
                        </view>
                    </view>
                </view>
            </view>
        </comNavTab>
    </view>
</template>

<script>
import {bdimg} from '../../../commonB1/commonJpg.js';
import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
export default {
	components:{
		comNavTab
	},
    data() {
        return {
			bdimg:bdimg
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
