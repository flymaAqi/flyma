<template>
	<view style="position: relative">
		<view style="height:420px; top:20px;position: relative;" v-if="!underImgOkList[0]">
			<!-- <view class="myGs2"></view> -->
			<image :class="isFull?swiperBS[1]:''" src="/static/flyma.png" mode="aspectFill"
				style="width: 100%;height:360px;"></image>
			<view style="transform: scale(1.7);position: absolute;left: 50%;top: 40%;" class="cu-loading-box cu-loading1 aqi-zx-xl ">
			    <view class="bg-blue" v-for="(item, index) in 8" :key="index"></view>
			</view>
		</view>
		<template v-else>
			<!-- 这里单独开一层，用于处理底层轮播图，需要定位位置、根据下面的轮播来处理对应的数据 -->
			<view class="qm-banner-underImg uperUderImg">
				<view class="aniH" v-for="(item,index) in forDaImgs" :key="index" :style="{'opacity':index === currentIndex?'1':'0'}">
					<image :class="isFull?swiperBS[1]:''" :src="item" mode="aspectFill"
						style="width: 100%;height:100%;"></image>
				</view>
			</view>
			<swiper @longpress="tast" @touchend="tast2" indicator-dots class="v-qm-banner" style="height:420px" interval="2000" :circular="!cirShow" :autoplay="cirShow" :current="currentIndex"
				@change="swiperChange"><!-- :autoplay="underImgOkList[1]" -->
				<swiper-item :class="(isFull ? swiperBS[0] : '')" class="swiper-item" style="" v-for="(item2,index2) in forLiData" :key="index2">
					<logoTxt :cuInx="index2" :txtTip="item2"></logoTxt>
				</swiper-item>
			</swiper>
		</template>
	</view>
</template>

<script>
	import {
		onMounted,
		ref,
	} from 'vue'
	import {
		dataMsg,
		forLiData,
		forDaImgs,
		dataImgs
	} from '@/common/comImg.js'
	export default {
		props: {
			swiperBS: {
				type: Array,
				default: ['filtBlur', 'filtSatu']
			}
		},
		setup() {
			const currentIndex = ref(0);
			const isFull = ref(false);
			const underImgOkList = ref([false, false, false, false, false,false,false])
			const cirShow = ref(true)
			const timer = ref(null)
			const timerInx = ref(0)
			function tast() {
				isFull.value = true
			}

			function tast2() {
				isFull.value = false
				if (timer.value) {
					clearTimeout(timer.value);  
				}
				timerInx.value++
				console.log(timerInx.value)
				timer.value = setTimeout(() => {
					if (timerInx.value === 2) {  
						openImg()
					}
					timerInx.value = 0
				}, 250);  
			}
			// 轮播变动
			function swiperChange(currnet) {
				if(dataImgs.length != forDaImgs.value.length){
					setTimeout(()=>{//防止动画抖动
						forDaImgs.value = dataImgs
						forLiData.value = dataMsg
					},500);
				}
				if(cirShow.value){
					setTimeout(()=>{//防止动画抖动
						cirShow.value = false
					},500);
				}
				currentIndex.value = currnet.detail.current
			}
			function openImg(){
				uni.previewImage({
					indicator:'number',
					current:currentIndex.value,
					urls:forDaImgs.value
				})
			}
			onMounted(() => {
				dataImgs.forEach((item, index) => {//提前获取图片信息
					uni.getImageInfo({
						src: item,
						success() {
							underImgOkList.value[index] = true
						}
					})
				})
			})
			return {
				currentIndex,
				isFull,
				underImgOkList,
				tast,
				tast2,
				cirShow,
				swiperChange,
				dataMsg,
				forLiData,
				forDaImgs,
				dataImgs,
				openImg
			}
		}
	}
</script>

<style lang="scss">

	.filtBlur {
		// transform: translateZ(0);
		filter: blur(5rpx);
	}

	.filtSatu {
		// transform: translateZ(0);
		filter: saturate(260%); //饱和度
	}


	.qm-banner-underImg {
		position: absolute;
	}

	.uperUderImg {
		width: 100%;
		height: 100%;
	}

	.aniH {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;
		height: 100%;
		transform: translate(0%, 0) translateZ(0);
		mask: linear-gradient(0deg, transparent,110px, #ffffff);
		transition: 1.5s;
	}
</style>