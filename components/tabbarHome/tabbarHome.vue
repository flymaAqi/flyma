<template>
	<view style="width: 100%;position: relative;">
		<view class="cf margin-bottom margin-top align-center flex">
			<view class="aqi-boxShadow fl bg-gradual-blue-light"
				style="border-top-right-radius: 50px;border-bottom-right-radius: 50px;">
				<view class="flex text-center align-center">
					<view class="flex-sub text-bold">
						<view>
							<!-- <text>样式</text> -->
							<image :src="resV[csIndex].titImg" style="height: 90rpx;width: 90rpx;" />
						</view>
					</view>
					<view class="flex-twice">
						<view class="" style="width: 100%;white-space: nowrap;">{{resV[csIndex].title}}累计</view>
						<text :class="resV[csIndex].iconS" style="font-size: 40rpx;">{{resV[csIndex].titSize}}</text>
					</view>
					<view class="flex-treble">
						<view class="cu-progress__circle"
							:style="'background:' + curColor + '; height: ' + circleDiam + 'px; width: ' + circleDiam + 'px;'">
							<view class="cu-progress__circle--left" :style="
						           'transform:' +
						           rotateLeft +
						           '; width: ' +
						           circleDiam +
						           'px; height: ' +
						           circleDiam +
						           'px; clip:rect(0, ' +
						           circleDiam / 2 +
						           'px, auto, 0); background:' +
						           bgColor +
						           '; transition-duration:' +
						           durationLeft +
						           ';'
						       "></view>
							<view class="cu-progress__circle--right" :style="
							       'transform:' +
							       rotateRight +
							       '; width: ' +
							       circleDiam +
							       'px; height: ' +
							       circleDiam +
							       'px; clip:rect(0, auto, auto, ' +
							       circleDiam / 2 +
							       'px); background: ' +
							       backgroundRight +
							       '; transition-duration:' +
							       durationRight +
							       ';'
							   "></view>
							<!-- 内部圆环背景色、高宽、中心点 -->
							<view class="cu-progress__mask bg-white" :style="
						           'width: ' +
						           cententDiam +
						           'px; height: ' +
						           cententDiam +
						           'px; left: ' +
						           (circleDiam - cententDiam) / 2 +
						           'px; top: ' +
						           (circleDiam - cententDiam) / 2 +
						           'px'
						       ">
								<text class="cu-progress__circle__percent text-black">占比{{ value }}%</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view @click="goB1" class="aqi-boxShadow bg-gradual-orange-light"
				style="width: 45%;border-top-left-radius: 50px;border-bottom-left-radius: 50px;right: 0;position: absolute;">
				<view class="flex justify-between text-center align-center padding-top-xs padding-bottom-xs">
					<view class="grid col-1">
						<text class="padding-left-lg text-bold" style="font-size: 30rpx;">完全体UI模板</text>
						<text style="" class="cu-tag margin-left-sm margin-top-xs round bg-green">登录模板/音乐模板等...</text>
					</view>
					<view class="" style="font-size: 60rpx; right: 15rpx;position: relative;">
						<text class="cuIcon-forwardfill"></text>
					</view>
				</view>
			</view>
		</view>
	</view>
	<view class="nav-list aqi-zx-xxl">
		<navigator animation-type="none" hover-class="none" :url="item.url"
			:style="[{animation: 'show '+item.timeAni}]" v-for="(item, index) in homeList" :key="index"
			:class="'aqi-border-l shadow nav-li bg-'+ item.color">
			<view style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">
				<image style="height: 100%;width: 100%;" src="./sanj.svg"></image>
			</view>
			<view class="nav-title text-bold">{{ item.title }}</view>
			<view class="flex">
				<view class="flex-sub nav-name" style="white-space: nowrap;">{{ item.name }}</view>
				<view class="flex-sub nav-des text-right align-end">flyma</view>
			</view>
			<text :class="'cuIcon-' + item.cuIcon"></text>
		</navigator>
		
	</view>
</template>

<script>
	import {
		ref,
	} from 'vue';
	export default {
		props: {
			csIndex: {
				type: Number,
				default: 0
			},
			homeList: {
				type: Array,
				default: []
			}
		},
		mounted() {
			this.progessValue();
		},
		watch: {
			csIndex() {
				this.progessValue();
			}
		},
		setup() {
			const resV = ref([{
					title: '样式',
					titSize: 14,
					titImg: '/static/tabbar/aqiA1.png',
					iconS: 'cuIcon-skinfill',
					titB: 30,
				},
				{
					title: '组件',
					titSize: 16,
					titImg: '/static/tabbar/aqiB4.png',
					iconS: 'cuIcon-discoverfill',
					titB: 50,
				},
				{
					title: '扩展',
					titSize: 12,
					titImg: '/static/tabbar/aqiB3.png',
					iconS: 'cuIcon-game',
					titB: 20,
				}
			]);
			// 环形进度条参数 圆环直径
			const circleDiam = ref(80);
			const cententDiam = ref(70);
			const bgColor = ref('#e9e9e9');
			const curColor = 'linear-gradient(#7affaf, #7a88ff)'
			const value = ref(50);
			const rotateLeft = ref();
			const rotateRight = ref();
			const backgroundRight = ref();
			const durationLeft = ref();
			const durationRight = ref(null)

			function progessValue() {
				rotateCircle(value.value = resV.value[this.csIndex].titB);
			}

			function rotateCircle(values) {
				let rotateLefts = '';
				let rotateRights = '';
				let backgroundRights = '';
				let durationLefts = '0s';
				let durationRights = '0s';
				if (values > 50) {
					rotateLefts = `rotate(${((values - 50) / 100) * 360}deg)`;
					rotateRights = `rotate(0deg)`;
					backgroundRights = 'inherit';
					durationLefts = '1s';
					durationRights = '0s';
				} else {
					rotateLefts = 'rotate(0deg)';
					rotateRights = `rotate(${(values / 100) * 360}deg)`;
					backgroundRights = bgColor.value;
					durationLefts = '0s';
					durationRights = '1s';
					// if (this.oldValue >= 50) {
					// 	durationRight = '0s';
					// }
				}

				// 记录上次的值
				// this.oldValue = value;
				rotateLeft.value = rotateLefts
				rotateRight.value = rotateRights
				backgroundRight.value = backgroundRights
				durationLeft.value = durationLefts
				durationRight.value = durationRights
			}

			function goB1() {
				uni.navigateTo({
					url: '/pagesB1/templePageCom/comPagesHome'
				})
			}
			return {
				goB1,
				circleDiam,
				cententDiam,
				bgColor,
				curColor,
				value,
				rotateLeft,
				rotateRight,
				backgroundRight,
				durationLeft,
				rotateCircle,
				progessValue,
				durationRight,
				resV
			}
		}
	}
</script>