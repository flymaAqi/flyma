<template>
    <view style="height: 100%">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="登录页面模板" :barCodShow="true">
       
            <view class="bg-white" style="min-height: 93vh">
                <view class="padding-tb padding-lr text-center">
                    <text class="text-xxl text-black">手机号快捷登录</text>
                </view>
                <view class="margin-lr padding">
                    <view class="padding-tb-sm solid-bottom-blue">
                        <input placeholder="请输入手机号"/>
                    </view>
                    <view class="flex justify-between padding-tb-sm solid-bottom-blue">
                        <input placeholder="请输入验证码" />
                        <view class="text-gray">获取验证码</view>
                    </view>
                </view>

                <view class="padding-tb-xxl padding-top padding-lr-xs">
                    <view class="flex flex-column margin-sm">
                        <button @click="$refs.comNav.$refs.tip.change('登录失败!')" class="cu-btn xxl bg-gradual-pinknew round">登录</button>
                    </view>
                    <view class="padding-top text-center text-blue text-lg padding-bottom-xxl">账号密码登录 | 登录遇到问题</view>
                </view>

                <view class="padding-tb-xxl padding-top padding-lr-xs" style="margin-top: 20vh">
                    <view class="padding-top text-center text-gray text-df">——— 社交账号直接登录 ———</view>
                    <view class="padding text-center" @tap="$refs.comNav.$refs.tip.change('登录!')">
                        <view class="cu-avatar round margin-right bg-green"><text class="cuIcon-weixin text-lg"></text></view>
                        <view class="cu-avatar round margin-right bg-cyan"><text class="aicon-qq text-lg"></text></view>
                        <view class="cu-avatar round margin-right bg-red"><text class="cuIcon-weibo text-lg"></text></view>
                        <view class="cu-avatar round margin-right bg-black"><text class="aicon-apple text-lg"></text></view>
                    </view>
                    <view class="padding-lr-xl text-center text-gray padding-top-sm">
                        未注册的手机号登录时将自动注册，且代表您已经同意
                        <text class="solids-bottom">用户协议</text>
                        和
                        <text class="solid-bottom">隐私政策</text>
                    </view>
                </view>
            </view>
        </comNavTab>
    </view>
</template>

<script setup>
import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
</script>
<style>
@import url("../../../commonB1/aicon.css");
</style>
