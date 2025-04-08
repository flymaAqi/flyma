<template>
	<view style="">
		<view class="UCenter-bg" style="width: 100%;height: 260px;">
			<view style="width: 100%;height: 100%;" class="align-center text-center">
				<image :lazy-load="true" src="https://image.meiye.art/pic_pHatLkGTDAQl_mTf8Ayts" style="height: 40%;width: 100%;" class="maskImg"></image>
				<image src="/static/flyma.png" style="width: 200px;height: 200px;opacity: 0.8;top: 20%;"></image>
			</view>
			<view class="badge round text-xxl text-bold text-blue text-blod shadow">
				Flyma
				<text class="badgeText badgeTextAni"/>
				<text class="text-pink text-xl">v3.1.1</text>
			</view>
		</view>
		<view class="cf margin-bottom align-center flex">
			<view class="aqi-boxShadow fl bg-gradual-pink-light aqi-zx-xxl"
				style="border-top-right-radius: 50px;border-bottom-right-radius: 50px;width: 45%;" @tap="fx()">
				<view class="flex text-center align-center padding-xs">
					<view>
						<view class="text-bold text-lg">故事大王</view>
						<view class="padding-right-xs cuIcon-creativefill text-gray" style="white-space: nowrap;width: fit-content;">从前有个...</view>
					</view>
					<view class="" style="font-size: 70rpx;">
						<text class="cuIcon-forwardfill"></text>
					</view>
				</view>
			</view>
			<view class="text-center" style="width: 45%;height: 40px;">
				<image src="https://www.helloimg.com/i/2025/03/18/67d95ffe5009f.png" style="width: 40px;height: 40px;"></image>
			</view>
			<view @tap="toPage" data-url="/pagesB1/about/lovePageList" class="aqi-boxShadow bg-gradual-green-light"
				style="width: 45%;border-top-left-radius: 50px;border-bottom-left-radius: 50px;right: 0;position: relative;">
				<view class="flex text-center align-center padding-xs">
					<view class="flex-sub" style="font-size: 70rpx;">
						<text class="cuIcon-likefill text-red"></text>
					</view>
					<view class="flex-twice">
						<view class="text-bold text-lg">收藏列表</view>
						<view class="padding-right-xs cuIcon-tagfill text-gray" style="white-space: nowrap;width: fit-content;">收藏的页面</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list menu card-menu">
			<view class="cu-item arrow" @tap="toPage" data-url="/pagesB1/about/about/about">
				<view class="content">
					<text class="cuIcon-profilefill text-blue"></text>
					<text>关于小程序/App</text>
				</view>
			</view>
			<view class="cu-item arrow" @tap="toPage" data-url="/pagesB1/about/log/log">
				<view class="content">
					<text class="cuIcon-formfill text-blue"></text>
					<text>更新日志⛱</text>
				</view>
			</view>
			<view class="cu-item arrow" @tap="toPage" data-url="/pagesB1/about/appreciate/appreciate">
				<view class="content">
					<text class="cuIcon-wefill text-red"></text>
					<text>致谢✨</text>
				</view>
			</view>
			<view class="cu-item arrow" @tap="toPage" data-url="/pagesB1/about/planTwo/planTwo">
				<view class="content">
					<text class="cuIcon-likefill text-red"></text>
					<text>玫瑰余香计划🙏</text>
				</view>
			</view>
			<view class="cu-item arrow" @tap="toPage" data-url="/pagesB1/about/planOne/planOne">
				<view class="content">
					<text class="cuIcon-group_fill text-green"></text>
					<text>有劲没处使计划🤝</text>
				</view>
			</view>
			<view class="cu-item" @tap="CopyText" data-link="https://github.com/flymaAqi/flyma">
				<view class="content">
					<text class="cuIcon-github text-black"></text>
					<text>源码开源</text>
				</view>
				<text class="text-gray text-sm margin-right-sm" style="position: absolute;right: 20px;">https://github.com/flymaAqi/flyma</text>
				<view class="cuIcon-copy text-blue"></view>
			</view>
		</view>
		<view class="cu-list menu card-menu">
			<!-- #ifdef MP-WEIXIN -->
			<!-- 联系作者 -->
			<view class="cu-item" @tap="goUrl">
				<view class="content">
					<text class="cuIcon-mobile text-blue"></text>
					<text>安卓App下载</text>
				</view>
				<text class="text-gray text-sm margin-right-sm" style="position: absolute;right: 20px;">https://fir.xcxwo.com/flymaAqi</text>
				<view class="cuIcon-copy text-blue"></view>
			</view>
			<view class="cu-item">
				<button class="cu-btn content" open-type="contact">
					<text class="cuIcon-service text-orange text-xl"></text>
					<text class="text-l text-black">联系作者</text>
				</button>
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<view class="cu-item" @tap="openWx" data-link="https://www.helloimg.com/i/2025/03/24/67e0c1df2d6ee.jpg">
				<view class="content">
					<text class="cuIcon-weixin text-green"></text>
					<text>微信小程序</text>
				</view>
				<text class="text-gray text-sm margin-right-xl padding-right-sm">微信小程序搜索Flyma UI组件库</text>
				<image src="https://www.helloimg.com/i/2025/03/24/67e0c1df2d6ee.jpg" style="height: 70rpx;position: absolute;right: 10px;" mode="heightFix"></image>
			</view>
			<view class="cu-item" @tap="CopyText" data-link="Flyma">
				<view class="content">
					<text class="cuIcon-weixin text-green"></text>
					<text>微信公众号</text>
				</view>
				<text class="text-gray text-sm margin-right-sm" style="position: absolute;right: 30px;">微信公众号搜索Flyma</text>
				<view class="cuIcon-copy text-blue"></view>
			</view>
			<!-- #endif -->
			<view class="cu-item">
				<button class="cu-btn content" open-type="feedback">
					<text class="cuIcon-write text-cyan text-xl"></text>
					<text class="text-l text-black">意见反馈</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				templateCount: 0,
				usersCount: 0,
				modelTotal: 0,
				visitTotal: 0,
			};
		},
		methods: {
			goUrl(){
				uni.navigateTo({
					url:'/pagesB1/about/webUrl'
				})
			},
			CopyText(e) {
				uni.setClipboardData({
					data: e.currentTarget.dataset.link,
					success: (res) => {
						uni.showToast({
							title: '链接已复制',
							duration: 1000
						});
					}
				});
			},
			openWx(e){
				uni.setClipboardData({
					data: 'Flyma UI组件库',
					success: (res) => {
						uni.showToast({
							title: '小程序名称已复制',
							duration: 1000
						});
					}
				});
				uni.previewImage({
					indicator:'number',
					urls:[e.currentTarget.dataset.link]
				})
			},
			fx(){
				uni.showToast({
					position:'top',
					image:'/static/flyma.png',
					title:'等待更新'
				})
			},
			toPage(e) {
				uni.navigateTo({
					url: e.currentTarget.dataset.url
				});
			}
		},
	};
</script>
<style lang="scss" scoped>
	.maskImg{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		mask: linear-gradient(0deg, transparent, #ffffff);
	}
	
	.UCenter-bg {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>