<template>
	<view style="height: 100%">
		<comNavTab csTit="卡片">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
				tip-txt="//组件类我就只写引用方式了,不然代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧."
				next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<ComTitle titleTxt="基础卡片">
				<template #rB>
					<text class="text-df margin-right-sm">全屏</text>
					<switch class="sm" :checked="isCard" @change="isCardFun"></switch>
				</template>
			</ComTitle>
			<view :class="'cu-card case ' + (isCard ? 'no-card' : 'margin')">
				<view class="cu-item shadow">
					<view class="image">
						<view style="width: 100%;height: 500rpx;overflow: hidden;">
							<imgLoadu load-mode="widthFix" load-height="100%" :img-url="imgUrl[4]" />
						</view>
						<view class="cu-tag bg-blue">嘿!</view>
						<view class="cu-bar bg-shadeBottom">
							<text class="text-cut"> 嗨,你好呀,今天你开心了吗?</text>
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="aqi-avater aqi-h-xl" style="width: 130rpx;">
								<imgLoadu :border-radi="'40px'" :img-url="imgUrl[5]" load-height="110rpx"/>
							</view>
							<view class="content flex-sub">
								<view class="text-grey">珊迪</view>
								<view class="text-gray text-sm flex justify-between">
									十天前
									<view class="text-gray text-sm">
										<text class="cuIcon-attentionfill margin-lr-xs"></text>
										10
										<text class="cuIcon-appreciatefill margin-lr-xs"></text>
										20
										<text class="cuIcon-messagefill margin-lr-xs"></text>
										30
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<ComTitle titleTxt="动态类卡片">
				<template #rB>
					<text class="text-df margin-right-sm">全屏</text>
					<switch class="sm" :checked="isCard" @change="isCardFun"></switch>
				</template>
			</ComTitle>
			<view :class="'cu-card dynamic ' + (isCard ? 'no-card' : 'margin')">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="aqi-avater aqi-h-xl" style="width: 130rpx;">
								<imgLoadu :border-radi="'40px'" :img-url="imgUrl[5]" />
							</view>
							<view class="content flex-sub">
								<view>海绵宝宝</view>
								<view class="text-gray text-sm flex justify-between">2022年12月3日</view>
							</view>
						</view>
					</view>
					<view class="text-content">创意是基于本质而来的解决方案。本质是什么，是不会因为其他外在条件而改变的东西。</view>
					<view :class="'grid flex-sub padding-lr ' + (isCard ? 'col-3 grid-square' : 'col-1')">
						<view v-for="(item, index) in isCard ? 9 : 1" :key="index">
							<view :class="'bg-img ' + (isCard ? '' : 'only-img')">
								<imgLoadu :load-mode="isCard?'widthFix':'aspectFill'" load-height="210rpx" :tsc="1.5" :img-url="imgUrl[5]" />
							</view>
						</view>
					</view>
					<view class="text-gray text-sm text-right padding">
						<text class="cuIcon-attentionfill margin-lr-xs"></text>
						10
						<text class="cuIcon-appreciatefill margin-lr-xs"></text>
						20
						<text class="cuIcon-messagefill margin-lr-xs"></text>
						30
					</view>
					<view class="cu-list menu-avatar comment solids-top">
						<view class="cu-item">
							<view class="aqi-avater aqi-h-sm aqi-avater-start" style="width: 100rpx;">
								<imgLoadu :border-radi="'40px'" :img-url="imgUrl[5]" />
							</view>
							<view class="content">
								<view class="text-grey">斯图尔特</view>
								<view class="text-gray text-content text-df">格鲁，你被自己的光芒变的盲目。</view>
								<view class="bg-gray padding-sm radius margin-top-sm text-sm">
									<view class="flex">
										<view>格鲁：</view>
										<view class="flex-sub">妹妹，你在帮他们给黑暗找借口吗?</view>
									</view>
								</view>
								<view class="margin-top-sm flex justify-between">
									<view class="text-gray text-df">2022年12月4日</view>
									<view>
										<text class="cuIcon-appreciatefill text-red"></text>
										<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
									</view>
								</view>
							</view>
						</view>
						<view class="cu-item">
							<view class="aqi-avater aqi-h-sm aqi-avater-start" style="width: 100rpx;">
								<imgLoadu :border-radi="'40px'" :img-url="imgUrl[7]" />
							</view>
							<view class="content">
								<view class="text-grey">格鲁</view>
								<view class="text-gray text-content text-df">妹妹，如果不是为了飞翔，我们要这翅膀有什么用?</view>
								<view class="bg-gray padding-sm radius margin-top-sm text-sm">
									<view class="flex">
										<view>斯图尔特：</view>
										<view class="flex-sub">如果不能立足于大地，要这双脚又有何用?</view>
									</view>
								</view>
								<view class="margin-top-sm flex justify-between">
									<view class="text-gray text-df">2022年12月4日</view>
									<view>
										<text class="cuIcon-appreciate text-gray"></text>
										<text class="cuIcon-messagefill text-gray margin-left-sm"></text>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<ComTitle titleTxt="文章类卡片">
				<template #rB>
					<text class="text-df margin-right-sm">全屏</text>
					<switch class="sm" :checked="isCard" @change="isCardFun"></switch>
				</template>
			</ComTitle>
			<view :class="'cu-card article ' + (isCard ? 'no-card' : 'margin') + ' margin-top'">
				<view class="cu-item shadow">
					<view class="title">
						<view class="text-cut">每一个创意都是重新思考。</view>
					</view>
					<view class="content">
						<view style="height: 240rpx;">
							<imgLoadu :img-url="imgUrl[7]" />
						</view>
						<view class="desc padding-left">
							<view class="text-content">创意是基于本质而来的解决方案。本质是什么，是不会因为其他外在条件而改变的东西。</view>
							<view>
								<view class="cu-tag bg-red light sm round">创意无限</view>
								<view class="cu-tag bg-green light sm round">史诗</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view :class="'cu-card article ' + (isCard ? 'no-card' : 'margin') + ' margin-top'">
				<view class="cu-item shadow">
					<view class="title">
						<view class="text-cut">每一个创意都是重新思考。</view>
					</view>
					<view class="content">
						<view class="desc padding-right-sm">
							<view class="text-content">创意是基于本质而来的解决方案。本质是什么，是不会因为其他外在条件而改变的东西。</view>
							<view>
								<view class="cu-tag bg-red light">创意无限</view>
								<view class="cu-tag bg-green light round">史诗</view>
							</view>
						</view>
						<view style="height: 240rpx;">
							<imgLoadu :img-url="imgUrl[7]" />
						</view>
					</view>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import {
		kehuan
	} from '@/common/commonData.js'
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
	export default {
		components: {
			imgLoadu,
			comNavTab,
			ComTitle
		},
		data() {
			return {
				imgUrl: kehuan,
				isCard: false
			};
		},
		methods: {
			isCardFun(e) {
				this.isCard = e.detail.value
			}
		}
	};
</script>
<style>

</style>