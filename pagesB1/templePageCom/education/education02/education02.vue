<template>
	<view style="height: 100%">
		<comNavTab csTit="有声书模板" :bar-cod-show="true">
			<view class="bg-white">
				<view class="flex padding-xs justify-between">
					<view class="flex">
						<view class="padding-right-sm text-xl padding-top-xs">
							<text class="cuIcon-back text-black"></text>
						</view>
					</view>
				</view>
				<view class="padding-tb-sm padding-lr">
					<text class="text-xxl text-black text-bold">有声书</text>
					<view class="text-df text-black text-bold padding-top-xs">随时随地，有温度、有情感地听本书</view>
				</view>
				<view class="bg-white">
					<view class="bg-mask margin-sm radius-lg" style="height: 360rpx;">
						<view class="" style="width: 100%;height: 360rpx;position: absolute;">
							<imgLoadu :ani-clo="true" load-mode="aspectFill" img-url="https://www.helloimg.com/i/2025/03/13/67d24336bbd87.jpg"/>
						</view>
						<view class="padding-left-sm padding-top-xxl text-yellow">
							<view class="text-xl padding-left-sm">灰太狼专家亲自音译</view>
							<view class="text-xl">《要领》太狼大课堂</view>
							<view class="flex padding-top-xl margin-top">
								<view class="bg-yellow margin-left-sm light padding-xs radius">
									<text class="text-black text-bold">免费收听</text>
								</view>
							</view>
							<view class="aqi-textMode-rl textRight">
								<text class=" text-bold text-xxl">灰太狼</text>
								<view class=" text-sm">狼堡最帅的男狼</view>
								<text class=" text-sm">抓小羊要领与注意事项</text>
							</view>
						</view>
					</view>
				</view>
				<view class="padding-tb padding-lr">
					<view class="flex justify-between">
						<text class="text-xl text-black text-bold">所有有声书</text>
						<view class="text-df text-gray flex align-center">
							<checkbox class="grey" style="transform: scale(0.58, 0.58)"></checkbox>
							仅显示未收听
						</view>
					</view>
					<button class="cu-btn round margin-top bg-black">最新</button>
					<button class="cu-btn round margin-top margin-left-sm">最热</button>
				</view>

				<view class="flex margin-lr-sm padding-tb justify-start">
					<view class="bg-img radius margin-lr-xs"
						style="background-image: url(https://image.meiye.art/pic_CYD_28h6ew2rYJFmR9Neh?imageMogr2/thumbnail/450x/interlace/1); height: 220rpx; width: 160rpx">
					</view>
					<view class="text-black margin-left-sm" style="width: 420rpx">
						<view class="text-left margin-top-sm">
							<text class="text-lg text-black text-bold">《心智与阅读》有声书</text>
						</view>
						<view class="text-left margin-top-xs">
							<text class="text-black">著名教育与心理学家教你如何提升阅读能力</text>
						</view>
						<view class="text-left margin-top-sm">
							<text class="text-black">49.99点/会员价 29.99点</text>
						</view>
					</view>
					<view class="margin-left-sm text-xl flex justify-center align-center" style="width: 40rpx">
						<view class="cuIcon-right"></view>
					</view>
				</view>

				<view class="flex margin-lr-sm padding-tb justify-start">
					<view class="bg-img radius margin-lr-xs"
						style="background-image: url(https://image.meiye.art/pic_qjTGt13__1CvXWJxOo3Z7?imageMogr2/thumbnail/450x/interlace/1); height: 220rpx; width: 160rpx">
					</view>
					<view class="text-black margin-left-sm" style="width: 420rpx">
						<view class="text-left margin-top-sm">
							<text class="text-lg text-black text-bold">《几度成功》有声书</text>
						</view>
						<view class="text-left margin-top-xs">
							<text class="text-black">科学研究揭示高绩效团队的3个终极密码</text>
						</view>
						<view class="text-left margin-top-sm">
							<text class="text-black">49.99点/会员价 29.99点</text>
						</view>
					</view>
					<view class="margin-left-sm text-xl flex justify-center align-center" style="width: 40rpx">
						<view class="cuIcon-right"></view>
					</view>
				</view>

				<view class="flex margin-lr-sm padding-tb justify-start">
					<view class="bg-img radius margin-lr-xs"
						style="background-image: url(https://image.meiye.art/pic_1uwlbRtyrU6opIfZs69-O?imageMogr2/thumbnail/450x/interlace/1); height: 220rpx; width: 160rpx">
					</view>
					<view class="text-black margin-left-sm" style="width: 420rpx">
						<view class="text-left margin-top-sm">
							<text class="text-lg text-black text-bold">《打造最优工作节奏》有声书</text>
						</view>
						<view class="text-left margin-top-xs">
							<text class="text-black">利用大脑天行高效工作</text>
						</view>
						<view class="text-left margin-top-sm">
							<text class="text-black">49.99点/会员价 29.99点</text>
						</view>
					</view>
					<view class="margin-left-sm text-xl flex justify-center align-center" style="width: 40rpx">
						<view class="cuIcon-right"></view>
					</view>
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
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {}
	};
</script>
<style>
	.textRight{
		top: -250rpx;
		right: -260px;
		max-height: 300rpx;
		max-width: 200rpx;
	}
</style>