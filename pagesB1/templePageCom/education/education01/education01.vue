<template>
	<view style="height: 100%">
		<comNavTab csTit="电子书模板" :bar-cod-show="true">
			<view class="" style="min-height: 92vh">
				<view class="bg-white">
					<view class="flex padding-xs justify-between">
						<view class="flex">
							<view class="padding-right-sm text-xl padding-top-xs">
								<text class="cuIcon-back text-black"></text>
							</view>
						</view>
						<view class="flex">
							<view class="padding-tb-xs text-lg text-black">
								<view>电子书</view>
							</view>
						</view>
						<view class="flex text-xxl">
							<view class="cuIcon-forward text-black padding-top-xs"></view>
						</view>
					</view>
					<view class="flex margin-lr-sm padding-tb justify-start">
						<view class="radius margin-lr-xs" style="height: 230rpx; width: 160rpx;overflow: hidden;">
							<imgLoadu load-mode="aspectFill" img-url="https://image.meiye.art/pic_170117397708978"/>
						</view>
						<view class="text-black margin-left-sm" style="width: 480rpx">
							<view class="text-right">
								<view class="cu-avatar text-bold round bg-black">書</view>
							</view>
							<view class="text-left margin-top-sm">
								<text class="text-xl text-black text-bold">云边有个小卖部</text>
							</view>
							<view class="text-left margin-top-xs">
								<text class="text-black">读书应是休闲的爱好,思想的拓展,灵魂的共鸣,人生的感慨.</text>
							</view>
						</view>
					</view>

					<view class="padding-tb solid-bottom">
						<view class="flex text-center bg-white">
							<view class="flex flex-sub flex-column">
								<view class="text-xl text-black text-bold">14.2万</view>
								<view class="margin-top-xs text-sm text-gray">字数</view>
							</view>
							<view class="flex flex-sub flex-column">
								<view class="text-xl text-black text-bold">5.8MB</view>
								<view class="margin-top-xs text-sm text-gray">文件大小</view>
							</view>
							<view class="flex flex-sub flex-column">
								<view class="text-xl text-black text-bold">754</view>
								<view class="margin-top-xs text-sm text-gray">阅读次数</view>
							</view>
						</view>
					</view>

					<view class="margin-tb-sm margin-left text-black text-bold text-lg">主角</view>

					<view class="cu-list margin-tb padding-bottom">
						<view class="cu-item arrow flex">
							<view class="margin-left" style="height: 120rpx; width: 100rpx;">
								<imgLoadu load-mode="aspectFill" border-radi="10px" img-url="https://image.meiye.art/pic_w39Fne1THpuso0aecpa1W"/>
							</view>
							<view class="flex align-center">
								<text class="text-black text-bold padding-lr-sm">刘十三</text>
							</view>
						</view>
					</view>
				</view>

				<view class="cu-list menu" style="margin-top: -10rpx;height: 100rpx;">
					<view class="cu-item arrow">
						<view class="content">
							<view class="cuIcon-edit text-black text-bold">
								<text class="text-black text-bold padding-lr-sm">免费试读</text>
							</view>
						</view>
					</view>
				</view>
				<view class="bg-white margin-top-sm padding-tb">
					<view class="margin-tb-xs margin-left text-black text-bold text-lg">电子书简介</view>
					<view class="margin padding-bottom" style="line-height: 48rpx">
						鬼谷子,墨菲定律,人性的弱点,领导力法则,微表情/微行为心理学等等,
						这些书大家应该至少眼熟一项吧.花了钱,买了书,你就是被大数据宰的猪，如果你想改变，靠这些是远远不够的，
						你若是真想研究历史,学习古人的思想,就去观看古人写的或是写实古人的史书,不要去看被笼统概括的观点书,这些书是出版商为了成本阉割过后的,
						再说想研究什么人性,什么心理学,你就从秦朝到现代之间随便一个历史阶段,选一个阶段,把这个王朝的兴衰看个遍,自然就学到了什么人性啊
						心理学啊什么这弱点那弱点,老祖宗全给你概括了。同志们，做事三思而后行，看书是好习惯，但看书如吃饭，找点好吃的，有营养的书籍，补足了内心，也丰富了精神世界。
						再来说刘十三，张嘉佳的书偏向感性，带点洋葱性质，故事都比较沁人心弦，抑郁症患者谨慎观看。
					</view>
				</view>
				<view class="bg-black" style="height: 120rpx;">
					<view class="text-center text-bold text-xxl">
						<text class="text-grey aqi-textLine-center aqi-textLine-style-color">499.66元</text>
						<text class="text-bold texthh">&nbsp;19.99元&nbsp;购买</text>
					</view>
					<view class="text-center text-green">会员价&nbsp;1.99元；</view>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import imgLoadu from '../../../templateComponents/u-image/imgLoadu.vue';
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	export default {
		components: {
			imgLoadu,
			comNavTab
		},
		data() {
			return {};
		},
		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom() {},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {}
	};
</script>
<style scoped>
	.bg-img-blur {
		height: 650rpx;
		filter: blur(60rpx);
		z-index: -999;
		background-image: url('https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1');
	}
</style>