<template>
	<view>
		<comNavTab cs-tit="滚动数字">
			<ComTitle titleTxt="十位数" />
			<view class="margin bg-white">
				<view class="padding-bottom flex flex-column text-center">
					<view class="flex-column text-orange">
						<view class="text-xxl text-bold">{{ numbers[0] }}</view>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="百位数" />
			<view class="margin bg-white">
				<view class="padding-bottom flex flex-column text-center">
					<view class="flex-column text-blue">
						<view class="text-xxl text-bold">{{ numbers[1] }}</view>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="千位数" />
			<view class="margin bg-white">
				<view class="padding-bottom flex flex-column text-center">
					<view class="flex-column text-pink">
						<view class="text-xxl text-bold">{{ numbers[2] }}</view>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="万位数---(看完需要硬控你十秒)" />
			<view class="margin bg-white">
				<view class="padding-bottom flex flex-column text-center">
					<view class="flex-column text-green">
						<view class="text-xxl text-bold">{{ numbers[3] }}</view>
					</view>
				</view>
			</view>
			<view style="width: 100%;" class="text-center" v-if="numClk">
				<button class="cu-btn bg-gradual-purple-light" @tap="onNUm">没看清，想再被控10秒</button>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	export default {
		components: {
			comNavTab,
			ComTitle
		},
		data() {
			return {
				numbers:[0,0,0,0],
				numClk:false,
			}
		},
		mounted() {
			this.attached(0,80)
			this.attached(1,180)
			this.attached(2,1280)
			this.attached(3,11380)
		},
		methods: {
			onNUm(){
				this.numClk = false
				this.numbers[0],this.numbers[1],this.numbers[2],this.numbers[3] = 0
				this.attached(0,80)
				this.attached(1,180)
				this.attached(2,1280)
				this.attached(3,12380)
			},
			attached(inx,num) {
				let that = this;
				let i = 0;
				numDH();
				function numDH() {
					if (i < num) {
						setTimeout(function() {
							that.numbers[inx] = i;
							i>200?i+=100:i++;
							numDH();
						},i>200?50:20);
					} else {
						if(inx===3){
							that.numClk = true
						}
						that.numbers[inx] = that.coutNum(num);
					}
				}
			},

			coutNum(e) {
				if (e > 1000 && e < 10000) {
					e = (e / 1000).toFixed(1) + 'k';
				}
				if (e > 10000) {
					e = (e / 10000).toFixed(1) + 'W';
				}
				return e;
			},
		}
	}
</script>

<style>

</style>