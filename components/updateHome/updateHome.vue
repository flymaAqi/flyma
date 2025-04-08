<template>
	<uniPopup :isMaskClick="false" type="top" ref="popup">
		<view style="position: relative;height: 100px;"/>
		<view style="margin: 10px;" class="bg-gradual-purple-light radius-xl padding-bottom-sm">
			<view style="position: absolute;right: 12px;font-size: 35px;" @tap="closePop">
				<text class="cuIcon-roundclose"></text>
			</view>
			<view style="position: absolute;font-size: 35px;" @tap="closePop">
				<text class="cuIcon-roundclose"></text>
			</view>
			<view v-if="updShow" style="position: absolute;font-size: 35px;bottom: 0;" @tap="closePop">
				<text class="cuIcon-roundclose"></text>
			</view>
			<view v-if="updShow" style="position: absolute;font-size: 35px;bottom: 0;right: 12px;" @tap="closePop">
				<text class="cuIcon-roundclose"></text>
			</view>
			<template v-if="updShow">
				<view class="UCenter-bg margin-sm" style="width: 100%;height: fit-content;">
					<view style="width: 100%;margin-top: -30px;margin-bottom: -20px;" class="align-center text-center">
						<image src="/static/flyma.png" style="width: 200px;height: 200px;"></image>
					</view>
					<text class="text-xl">当前版本:</text>
					<view class="badge round text-xxl text-bold text-blue text-blod shadow margin-top-sm bg-gradual-cyan">
						Flyma
						<text class="badgeText badgeTextAni" />
						<text class="text-pink text-xl">v{{ updateInfo.version_number }}</text>
					</view>
					<text class="text-xl margin-top-sm">最新版本:</text>
					<view class="badge round text-xxl text-bold text-blue text-blod shadow margin-top-sm bg-gradual-cyan">
						Flyma
						<text class="badgeText badgeTextAni" />
						<text class="text-pink text-xl">v{{ updateInfo.versionShort }}</text>
					</view>
					<view class="content text-center margin-top-sm">
						<view>👌您当前为最新版本！</view>
						👉如需测试更新功能请点击“测试更新”
						<view class="text-blue text-xl aqi-textLine-bottom" @tap="updShowUpd">测试更新</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="UCenter-bg margin-sm" style="width: 100%;height: fit-content;">
					<view style="width: 100%;margin-top: -30px;margin-bottom: -20px;" class="align-center text-center">
						<image src="/static/flyma.png" style="width: 200px;height: 200px;"></image>
					</view>
					<text class="text-xl">Flyma有更新版本啦！</text>
					<view class="badge round text-xxl text-bold text-blue text-blod shadow margin-top-sm bg-gradual-cyan">
						Flyma
						<text class="badgeText badgeTextAni" />
						<text class="text-pink text-xl">v{{ updateInfo.versionShort }}</text>
					</view>
				</view>
				<view class="cu-list card-menu bg-gradual-green padding-sm">
					<view class="text-lg">
						<text class="cuIcon-formfill text-blue"></text>
						<text>更新内容：⛱</text>
					</view>
					<view class="margin-xs">
						<view class="content" v-for="(item,index) in updateInfo.changelog">
							<text class="">✨{{item}}</text>
						</view>
						<view class="content text-center margin-top-sm" @tap="openUrl('https://fir.xcxwo.com/flymaAqi')">
							👉如遇更新失败请点击网址手动更新:
							<text class="text-blue">https://fir.xcxwo.com/flymaAqi</text>
						</view>
					</view>
				</view>
				<view class="cu-list menu card-menu" v-if="updateSta">
					<view class="cu-item bg-gradual-cyan">
						<view class="bg-gradual-green text-xl padding-xs padding-left-sm radius" @tap="handleUpgrade"
							data-link="https://www.helloimg.com/i/2025/03/24/67e0c1df2d6ee.jpg">
							<text>立即更新✨</text>
						</view>
						O/R
						<view class="bg-gradual-pink text-xl padding-xs padding-left-sm radius" @tap="closePop">
							<text>暂不更新👋</text>
						</view>
					</view>
				</view>
				
				<view class="padding margin-lr margin-top-lg" v-else>
					<view class="UCenter-bg">
						<text>下载更新中...</text>
					</view>
					<view class="flex">
						<view class="cu-progress round margin-top-xs xs striped active">
							<view class="bg-green" :style="'width:'+currentPercent+'%;'"></view>
						</view>
						<view class="text-black padding-left-xs">{{ currentPercent }}%</view>
					</view>
				</view>
			</template>
		</view>
	</uniPopup>
</template>

<script>
	import {
		downloadApp,
		installApp
	} from './updateUtis.js'
	import uniPopup from '@/pagesB1/templateComponents/unipop-plus/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		props: {
			updateInfo: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				currentPercent: 0,
				updateSta: true,
				updShow: this.updateInfo.version_number === this.updateInfo.versionShort
			};
		},
		methods: {
			updShowUpd(){
				uni.showLoading({
					mask:true,
				})
				this.$refs['popup'].close()
				setTimeout(()=>{
					uni.hideLoading();
					this.updShow = false
					this.$refs['popup'].open()
				},500);
			},
			closePop(){
				this.updShow = this.updateInfo.version_number === this.updateInfo.versionShort
				this.$refs['popup'].close()
			},
			openPop() {
				this.$refs['popup'].open()
			},
			openUrl(url) {
				plus.runtime.openURL(
					url,
					// 打开url失败，执行，如打开的是tabao://但是手机没安装，就会执行报错
					function(err) {

					}
				);
			},
			//更新
			handleUpgrade() {
				this.updateSta = false
				downloadApp(this.updateInfo.install_url, current => {
					//下载进度监听
					this.currentPercent = current
				}).then(fileName => {
					//下载完成
					if (fileName) {
						//自动安装App
						installApp(fileName, () => {
						})
					}
				}).catch(e => {

				})
			}
		},
	};
</script>
<style lang="scss" scoped>
	.UCenter-bg {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>