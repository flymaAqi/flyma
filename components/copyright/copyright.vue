<template>
    <view>
		<!-- #ifndef MP-WEIXIN -->
		<view style="position: absolute;z-index: 99999999999999;">
			<updateHome :updateInfo="updateInfo" ref="uadHome"></updateHome>
		</view>
		<!-- #endif -->
		<divider>
			<text class="cu-load colorui-text" :class="!compName ? 'loading' : 'over'"></text>
		</divider>
        <view class="text-center padding-tb-sm">
            <view class="colorui-text">Copyright © 2025 Flyma. All Rights Reserved.</view>
        </view>
		<!-- #ifndef MP-WEIXIN -->
		<view class="text-center padding-bottom">
		    <view class="text-cyan text-bold aqi-textLine-bottom" @tap="updateForFlyma(true)">检查更新</view>
		</view>
		<!-- #endif -->
    </view>
</template>

<script>
export default {
    props: {
		compName: {
			type: Boolean,
			default: true
		}
	},
	data(){
		return{
			updateInfo:{}
		};
	},
	mounted() {
		// #ifndef MP-WEIXIN
		if(uni.getStorageSync('flymaVersion')){
			return
		}else{
			this.updateForFlyma(false)
		}
		// #endif
	},
	methods:{
		// #ifndef MP-WEIXIN
		updateForFlyma(c){
			if(c){
				uni.showLoading({
					mask:true,
					title:'检查中...'
				})
			};
			const tht = this
			// 获取当前app的版本
			const systemInfo = uni.getSystemInfoSync();
			// #ifdef APP
			var version_number = systemInfo.appWgtVersion;
			// #endif
			// #ifdef H5
			var version_number = systemInfo.appVersion;
			// #endif
			tht.updateInfo.version_number = version_number;
			uni.setStorage({
				key:"flymaVersion",
				data:version_number
			})
			uni.request({
				url: 'http://api.appmeta.cn/apps/latest/67f09b0423389f7ba75e6f00?api_token=c81017ad78e3f371915437f8ea9850f8',
				success: (e) => {
					tht.updateInfo.install_url = e.data.install_url;
					tht.updateInfo.versionShort = e.data.versionShort;
					tht.updateInfo.changelog = e.data.changelog.split("\n");
					if (e.statusCode === 200 || c === true) {
						if(c){
							uni.hideLoading()
						};
						tht.$refs['uadHome'].openPop()
					}
				}
			})
		}
		// #endif
	}
};
</script>
