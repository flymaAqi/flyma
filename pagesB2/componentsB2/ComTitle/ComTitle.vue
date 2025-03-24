<template>
	<view>
		<view class="cu-bar margin-tb-xl titBackColor">
			<view class="action sub-title">
				<text class="cuIcon-titles text-blace"></text>
				<text class="text-xl text-bold">{{titleTxt}}</text>
				<text class="bg-cyan"></text>
			</view>
			<view class="action" style="color: aliceblue;">
				<slot name="rB"></slot>
				<!-- <button v-if="titButton" class="aqi-xbt" @click="swip3DBX">
					{{titButton}}<u-icon name="arrow-right-double"></u-icon>
				</button> -->
			</view>
		</view>
		<slot></slot>
		<codeCard v-if="codeShow" :for-com-tit="codeShow" :tip-txt="tipTxt" :titTxt="titleTxt" :value-txt="valueTxt" :pre-txt="preTxt" :next-txt="nextTxt"></codeCard>
	</view>
</template>

<script>
	import codeCard from '../codeCard/codeCard.vue'
	export default {
		name: "ComTitle",
		components:{
			codeCard
		},
		props: {
			titleTxt: {
				type: String,
				default: '示例'
			},
			titButton: {
				type: String,
				default: ''
			},
			preTxt: {
				type: String,
				default: '<view class='
			},
			valueTxt: {
				type: String,
				default: 'text-xl'
			},
			nextTxt:{
				type: String,
				default: '></view>'
			},
			codeShow:{
				type: Boolean,
				default: false
			},
			tipTxt: {
				type: String
			}
		},
		data() {
			return {};
		}
	}
</script>

<style>
	.titBackColor {
		background: linear-gradient(16deg, #c6ffdd 10%, #9ae6e6 40%, #267474 90%);
	}
</style>