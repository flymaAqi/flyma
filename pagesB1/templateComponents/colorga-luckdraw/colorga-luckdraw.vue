<template>
	<view class="cu-draw-con flex flex-column align-center">
		<view class="cu-draw-draw_sc flex flex-row align-center">
			<swiper class="cu-draw-swiper" :vertical="true" :autoplay="true" :circular="true" interval="3000"
				display-multiple-items="1">
				<block v-for="(item, idx) in 2" :key="idx">
					<swiper-item>
						<view class="padding-left">
							<text>恭喜用户</text>
							<text class="text-blue">135XXXX5678</text>
							<text>抽中10元话费</text>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<view class="cu-draw-box">
			<view class="cu-draw-b_box">
				<view class="flex flex-row cu-draw-prize_box">
					<template v-for="(item, index) in prize_list" :key="index">
						<view
							:class="'radius-lg cu-draw-prize_item flex flex-column margin-lr-xs solids ' + (item.active ? 'cu-draw-active' : '') + (luckMode && !item.active ? ' solidsMode':'')">
							<view class="cu-draw-prize_img">
								<view class="drImg">
									<imgLoadu borderRadi="20px" load-mode="aspectFill" :img-url="item.icon" />
								</view>
							</view>
							<text class="aqi-txtJinColor">{{ item.name }}</text>
						</view>
					</template>
				</view>
			</view>
		</view>
		<view class="bg-gradual-green cu-draw-prize_item margin-lr-xs" style="border-radius: 50px 50px 20px 20px;">
			<view class="flex padding-sm padding-lr" @tap="lottery">
				<view class="flex text-xxl">开 始 抽 奖</view>
			</view>
		</view>
		<view class="">
			您还有
			<text class="text-blue">{{ remian_num }}次</text>
			抽奖机会
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {whImg} from '../../../pagesB1/commonB1/commonJpg.js'
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
	const remian_num = ref(3); //抽奖次数
	const prize_list = ref([{
			icon: whImg[6],
			name: '钻石会员',
			active: false
		},
		{
			icon: whImg[3],
			name: 'iPhone15 pro',
			active: false
		},
		{
			icon: whImg[9],
			name: '10元话费',
			active: false
		},
		{
			icon: whImg[8],
			name: '20元话费',
			active: false
		},
		{
			icon: whImg[7],
			name: '50元话费',
			active: false
		},
		{
			icon: whImg[6],
			name: '黄金会员',
			active: false
		},
		{
			icon: whImg[5],
			name: '铂金会员',
			active: false
		},
		{
			icon: whImg[4],
			name: '白银会员',
			active: false
		},
		{
			icon: whImg[3],
			name: '谢谢惠顾',
			active: false
		},
		
	]);
	let lock = ref(false);
	const prizeListIndex = ref([0, 1, 2, 3, 4, 5, 6, 7, 8]); //抽奖顺序的索引
	let Timer = ref(null); // 抽奖动画
	let LotteryEnd = ref(false);
	let nowRunIndex = ref(0); //抽奖结束
	let active = ref(false);
	let luckMode = ref(false);
	// 禁止弹框底层滑动
	const catchTouchMove = () => {
		return false;
	}
	// 范围随机数
	const randomRange = (lower, upper) => {
		console.log(Math.floor(Math.random() * (upper - lower)) + lower)
		return Math.floor(Math.random() * (upper - lower)) + lower;
	}
	// 抽奖活动
	function lottery(){
		// 防止重复点击
		if (lock.value || remian_num.value===0) {
			return;
		}
		lock.value = true
		luckMode.value=true
		remian_num.value-=1
		luckChose(randomRange(0, 9)).then((e) => {
			console.log(e[0].name)
			uni.showToast({
				title: '恭喜!抽中了' + e[0].name,
				icon: 'success'
			});
			setTimeout(()=>{
				luckMode.value=false
			},1000)
		});
	}
	//ative样式的索引，
	const luckChose = (luckIndex) => {
		return new Promise((resolve, reject) => {
			// let that = this;
			let maxTime = randomRange(3500, 4000); //抽奖的时间3.5s-4s之间
			let rI = 0.01;
			if (nowRunIndex.value == 0) {
				//初始化从索引0开始显示抽奖激活的边框
				prize_list.value[0].active = true
			}

			function runAni(_t) {
				Timer.value = setTimeout(() => {
					let list = prize_list.value;
					++nowRunIndex.value;
					if (nowRunIndex.value >= prizeListIndex.value.length) {
						nowRunIndex.value = 0;
					} else {
						('');
					}
					let Pindex = prizeListIndex.value[nowRunIndex.value];
					list.map((item, index) => {
						item.active = Pindex == index;
					});
					prize_list.value = list

					if (LotteryEnd.value && luckIndex == nowRunIndex.value) {
						clearTimeout(Timer.value);
						LotteryEnd.value = false;
						lock.value = false
						resolve(
							list.filter((v) => {
								return v.active;
							})
						);
					} else {
						rI += 0.5;
						runAni(_t + rI);
					}
				}, _t);
			}
			runAni(20);
			setTimeout(() => {
				LotteryEnd.value = true
			}, maxTime);
		});
	}
</script>
<style scoped>
	/* ==================
    扩展样式-抽奖
 ==================== */
	.solidsMode::after {
		background-color: #464646;
		opacity: 0.4;
	}
	.cu-draw-con {
		margin: 0rpx auto;
		width: 95%;
		border-radius: 30rpx;
		background:
			linear-gradient(to bottom, transparent, #ffffff 200rpx),
			linear-gradient(to right, #ffff7f 40%, #55ff7f);
		box-shadow: 0px 15px 5px 3px #e95c74;
		box-sizing: border-box;
		padding: 20rpx;
	}

	.cu-draw-draw_sc {
		width: 637rpx;
		height: 69rpx;
		background: rgba(236, 215, 219, 0.53);
		border-radius: 34rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin-bottom: 20rpx;
	}

	.cu-draw-swiper {
		height: 100%;
		font-size: 28rpx;
		color: #fff;
		flex: 1;
		line-height: 69rpx;
	}

	.cu-draw-box {
		width: 100%;
		box-shadow: -6px 8px 81px 0px rgb(255, 192, 203, 0.73), 0px 0px 24px 0px #ffffff inset;
		border-radius: 30rpx;
		box-sizing: border-box;
		padding: 9rpx;
		margin-bottom: 25rpx;
	}

	.cu-draw-b_box {
		width: 100%;
		background:
			linear-gradient(to right, #ffaaff 20%, #ffaa7f);
		border-radius: 30rpx;
		box-shadow: 0px 0px 10px 0px rgb(255, 192, 203, 0.53), 0px 0px 27px 0px #ffffff inset;
		box-sizing: border-box;
		padding: 19rpx 10rpx;
	}

	.cu-draw-prize_box {
		flex-wrap: wrap;
		position: relative;
		z-index: 99;
		width: 100%;
		/* background-color: #55ff7f; */
	}

	.cu-draw-prize_item {
		width: 30%;
		height: 164rpx;
		margin-bottom: 14rpx;
		font-size: 24rpx;
		font-weight: bold;
		/* box-sizing: border-box; */
		padding-top: 10rpx;
		justify-content: center;
		text-align: center;
	}

/* 	.cu-draw-prize_start {
		padding-top: 0 !important;
		background-color: #ffff7f;
	} */

	.drImg {
		width: 120rpx;
		height: 120rpx;
		margin: auto;
	}

	.cu-draw-active {
		position: relative;
		border: 5rpx solid #ffff00;
		box-shadow: none;
		border-radius: 15%;
	}

	.cu-draw-active::after {
		content: '';
		position: absolute;
		background:
			linear-gradient(to bottom, transparent, #55ffff 400rpx),
			linear-gradient(to right, #aaff7f 10%, #ffff7f);
		z-index: -1;
	}
</style>