<template>
    <view style="height: 100%">
		<comNavTab csTit="消息提示">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
			tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧.//消息提示已经有样板了,等复刻"
			next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<view style="position: relative;" >
				<view class="cu-load aqi-load aqi-zx-xxl" :class="' ' + (statusTop == 'success' ? 'bg-green light' : 'bg-red light')" :animation="animation" style="height: 0">
				    {{ messageTop }}
				    <text class="cuIcon-roundclose lg padding-right-xs" v-show="showTop"></text>
				</view>
			</view>
			<ComTitle titleTxt="页面中心弹出"/>
			<view class="cu-bar bg-gradual-pinknew-light margin-top">
			    <view class="action">
			        <text class="cuIcon-title text-blue"></text>
			        成功的消息框
			    </view>
			    <view class="action">
			        <button class="cu-btn bg-blue shadow" @tap="click1">演示</button>
			    </view>
			</view>
			
			<view class="cu-bar bg-gradual-pinknew-light margin-top">
			    <view class="action">
			        <text class="cuIcon-title text-blue"></text>
			        错误的消息框
			    </view>
			    <view class="action">
			        <button class="cu-btn bg-blue shadow" @tap="click2">演示</button>
			    </view>
			</view>
			
			<view class="cu-bar bg-gradual-pinknew-light margin-top">
			    <view class="action">
			        <text class="cuIcon-title text-blue"></text>
			        时间为5秒
			    </view>
			    <view class="action">
			        <button class="cu-btn bg-blue shadow" @tap="click3">演示</button>
			    </view>
			</view>
			
			<view class="cu-bar bg-gradual-pinknew-light margin-top">
			    <view class="action">
			        <text class="cuIcon-title text-blue"></text>
			        触发回调方法
			    </view>
			    <view class="action">
			        <button class="cu-btn bg-blue shadow" @tap="click4">演示</button>
			    </view>
			</view>
			
			<view class="toast-fixed-center" v-if="show" style="z-index: 99">
			    <view :class="'radius-lg padding animation-slide-top text-lg ' + (status == 'success' ? 'bg-green light' : 'bg-red light')">
			        <text class="cuIcon-info"></text>
			        {{ message }}
			    </view>
			</view>
			
			<ComTitle titleTxt="顶部弹出"/>
			<view class="cu-bar bg-gradual-pinknew-light margin-top">
			    <view class="action">
			        <text class="cuIcon-title text-blue"></text>
			        成功的消息框
			    </view>
			    <view class="action">
			        <button class="cu-btn bg-blue shadow" @tap="click5">演示</button>
			    </view>
			</view>
			<view class="cu-bar bg-gradual-pinknew-light margin-top">
			    <view class="action">
			        <text class="cuIcon-title text-blue"></text>
			        错误的消息框
			    </view>
			    <view class="action">
			        <button class="cu-btn bg-blue shadow" @tap="click6">演示</button>
			    </view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
let loading = false;
let loadingTop = false;
const animation = uni.createAnimation({
    duration: 400,
    timingFunction: 'ease-out',
    delay: 0,
    transformOrigin: '50% 50% 0'
}); //动画
import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
export default {
	components:{
		comNavTab,
		ComTitle
	},
    data() {
        return {
            show: false,
            status: '',
            message: '',
            time: 0,
            showTop: false,
            statusTop: '',
            messageTop: '',
            timeTop: 2000,
            animation: ''
        };
    },
    methods: {
        /**
         * 轻提示展示
         * @param {*} status
         * @param {*} message
         * @param {*} time
         * @param {*} fun
         */
        setShow(status, message, time = 2000, fun = false) {
            if (loading) {
                return;
            }
            loading = true;
            try {
                this.status = status
				this.message = message
				this.time = time
				this.show = true
                setTimeout(() => {
                    this.show = false
                    loading = false;
                    // 触发回调函数
                    if (fun) {
                        this.end();
                    }
                }, time);
            } catch {
                loading = false;
            }
        },

        /**
         * 轻提示弹出样式1-4
         */
        click1() {
            this.setShow('success', '提交成功，我们将在1个工作日内通知您');
        },

        click2() {
            this.setShow('error', '提交失败');
        },

        click3() {
            this.setShow('success', '停留时间5秒', 5000);
        },

        click4() {
            this.setShow('success', '提交成功，我们将在1个工作日内通知您', 3000, true);
        },

        /**
         * 轻提示回调函数
         */
        end() {
            uni.showToast({
                title: '触发回调方法'
            });
        },

        /**
         * 顶部弹出【成功】
         */
        click5() {
            this.setShowTop('success', '提交成功，我们将在1个工作日内通知您');
        },

        /**
         * 顶部弹出【失败】
         */
        click6() {
            this.setShowTop('error', '提交失败');
        },

        /**
         * 顶部弹出
         * @param {*} statusTop
         * @param {*} messageTop
         * @param {*} timeTop
         */
        setShowTop(statusTop, messageTop, timeTop = 3000) {
            if (loadingTop) {
                return;
            }
			this.showTop = true
            loadingTop = true;
            try {
                this.statusTop = statusTop
                this.messageTop = messageTop
                this.timeTop = timeTop
                this.start_animation();
                setTimeout(() => {
                    this.end_animation();
                    loadingTop = false;
					this.showTop = false
                    this.$emit('end');
                }, timeTop);
            } catch {
                loadingTop = false;
            }
        },

        /**
         * 顶部弹出动画
         */
        start_animation() {
            animation.height('80rpx').opacity(1).step();
            this.animation = animation.export()
        },

        end_animation() {
            animation.height('0rpx').opacity(0).step();
            this.animation = animation.export()
        }
    }
};
</script>
<style>
.aqi-load{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
</style>
