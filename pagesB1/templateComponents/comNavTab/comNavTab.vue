<template>
	<view>
		<customNavBar :customIndex="false" :title="csTit"></customNavBar>
		<!-- #ifdef MP-WEIXIN -->
		<shouCangTips/>
		<!-- #endif -->
		<slot name="pageBody"></slot>
		<slot></slot>
		<floatTip @onLoveTip="loveTip" @onRemoLove="remoLove" :isLove="pageRount.loves" />
		<tipToast ref="tip" @cloShow="loveTipClose" v-if="tipShow || loveTit"></tipToast>
		<codeCard v-if="barCodShow" class-tit="模板页面留言" pre-txt="" next-txt=""
			value-txt="模板页面为静态页面,页面可互动内容较少,仅为展示效果.目之所及皆可修改与互动,然艺术细胞较少,暂不改动(本人太懒)"></codeCard>
		<copyright v-if="copyShow"></copyright>
	</view>
</template>

<script setup>
	import customNavBar from '../custom-nav-bar/custom-nav-bar.vue'
	import {
		ref,
		onMounted
	} from 'vue';
	import floatTip from '../floatTip/floatTip.vue';
	// #ifdef MP-WEIXIN
	import shouCangTips from '../shouCangTips/shouCangTips.vue';
	// #endif
	import tipToast from '../tipToast/tipToast.vue'
	import codeCard from '../codeCard/codeCard.vue'
	const props = defineProps({
		csTit: {
			type: String
		},
		copyShow: {
			type: Boolean,
			default: true
		},
		barCodShow: {
			type: Boolean,
			default: false
		},
		tipShow: {
			type: Boolean,
			default: false
		},
	})
	onMounted(() => {
		var pages = getCurrentPages() // 获取栈实例
		let currentRoute = pages[pages.length - 1]['$page']['fullPath']; // 获取当前页面路由
		pageRount.value.pageR = currentRoute;
		uni.getStorage({
			key: currentRoute,
			success() {
				pageRount.value.loves = true
			}
		})
	})
	const tip = ref(null)
	const loveTit = ref(false)
	const pageRount = ref({
		loves: false,
		pageR: ''
	})

	function loveTip() {
		loveTit.value = true
		pageRount.value.loves = true
		if(pageRount.value.pageR === '/pagesB1/about/lovePageList'){
			setTimeout(()=>{
				pageRount.value.loves = false
				tip.value.change('俄罗斯套娃?收藏列表里收藏一个收藏列表,哼!小聪明', 4000)
			},500)
		}else{
			uni.setStorage({
				key: pageRount.value.pageR,
				data: {
					tit: props.csTit,
					pageUrl: pageRount.value.pageR
				},
				success() {
					setTimeout(() => {
						tip.value.change('喜欢的页面可在收藏列表内查看.', 2000)
					}, 200)
				}
			})
		}
	}

	function remoLove() {
		uni.removeStorage({
			key: pageRount.value.pageR,
			success() {
				pageRount.value.loves = false
			}
		})
	}

	function loveTipClose() {
		loveTit.value = false
	}
</script>
<style>
</style>