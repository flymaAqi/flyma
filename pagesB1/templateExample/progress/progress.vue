<template>
	<view style="height: 100%">
		<comNavTab csTit="进度条">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
				tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧."
				next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C-V,使用的时候直接<组件名/>引用即可" :codeShow="true">
			</ComTitle>
			<ComTitle titleTxt="条形进度条" />
			<view class="padding bg-white margin-sm radius-lg">
				<view class="cu-progress">
					<view class="bg-red" :style="'width:' + (loading ? '61.8%' : '') + ';'">61.8%</view>
				</view>
				<view class="cu-progress radius margin-top">
					<view class="bg-red" :style="'width:' + (loading ? '61.8%' : '') + ';'">61.8%</view>
				</view>
				<view class="cu-progress round margin-top">
					<view class="bg-red" :style="'width:' + (loading ? '61.8%' : '') + ';'">61.8%</view>
				</view>
			</view>
			<ComTitle titleTxt="环形进度条" />
			<view class="flex flex-wrap margin-sm bg-white radius-lg">
				<!-- #ifdef MP-WEIXIN -->
				<canvas2dRing ref="canvas2dRing" v-for="(item, index) in data_list" :key="index" type="2d"
					:id="'can' + index" :canvasWidth="80" f_weight="bold" :lineColor="item.lineColor"
					:value="item.value" valueColor="#333" :f_size="15" :lineWidth="item.lineWidth"
					:title="'flyma'"></canvas2dRing>
				<!-- #endif -->
				<view class="padding">
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
							<text class="cu-progress__circle__percent text-black">{{ value }}%</text>
						</view>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="进度条尺寸" />
			<view class="padding margin-sm bg-white radius-lg">
				<view class="cu-progress round">
					<view class="bg-red" :style="'width:' + (loading ? '61.8%' : '') + ';'"></view>
				</view>
				<view class="cu-progress round margin-top sm">
					<view class="bg-red" :style="'width:' + (loading ? '61.8%' : '') + ';'"></view>
				</view>
				<view class="cu-progress round margin-top xs">
					<view class="bg-red" :style="'width:' + (loading ? '61.8%' : '') + ';'"></view>
				</view>
			</view>
			<ComTitle titleTxt="进度条颜色">
				<template #rB>
					<view class="action" @tap="showModal" data-target="ColorModal">
						<text class="text-df margin-right-sm">自定义</text>
						<view :class="'padding bg-' + color + ' solid radius shadow-blur'"></view>
					</view>
				</template>
			</ComTitle>
			<view :class="'padding margin-sm radius-df ' + (color == 'white' ? 'bg-grey' : 'bg-white')">
				<view class="cu-progress round">
					<view :class="'bg-' + color" :style="'width:' + (loading ? '61.8%' : '') + ';'"></view>
				</view>
			</view>
			<ComTitle titleTxt="进度条动画">
				<template #rB>
					<text class="text-df margin-right-sm">动态</text>
					<switch class="sm margin-right-sm" @change="SetActive"></switch>
				</template>
			</ComTitle>
			<view class="padding margin-sm bg-white radius-lg">
				<view :class="'cu-progress round sm striped ' + (active ? 'active' : '')">
					<view class="bg-green" :style="'width:' + (loading ? '60%' : '') + ';'"></view>
				</view>
				<view :class="'cu-progress round sm margin-top-sm striped ' + (active ? 'active' : '')">
					<view class="bg-orange" :style="'width:' + (loading ? '40%' : '') + ';'"></view>
				</view>
				<view :class="'cu-progress round sm margin-top-sm striped ' + (active ? 'active' : '')">
					<view class="bg-blue" :style="'width:' + (loading ? '80%' : '') + ';'"></view>
				</view>
			</view>
			<ComTitle titleTxt="进度条比例" />
			<view class="padding margin-sm bg-white radius-df">
				<view class="cu-progress radius striped active">
					<view class="bg-red" :style="'width:' + (loading ? '30%' : '') + ';'">30%</view>
					<view class="bg-olive" :style="'width:' + (loading ? '45%' : '') + ';'">45%</view>
					<view class="bg-cyan" :style="'width:' + (loading ? '25%' : '') + ';'">25%</view>
				</view>
				<view class="cu-progress radius striped active margin-top-sm">
					<view class="bg-red" :style="'width:' + (loading ? '10%' : '') + ';'">10%</view>
					<view class="bg-olive" :style="'width:' + (loading ? '60%' : '') + ';'">60%</view>
					<view class="bg-cyan" :style="'width:' + (loading ? '30%' : '') + ';'">30%</view>
				</view>
			</view>
			<ComTitle titleTxt="进度条布局" />
			<view class="padding margin-sm bg-white radius-df">
				<view class="flex">
					<view class="cu-progress round">
						<view class="bg-green" :style="'width:' + (loading ? '100%' : '') + ';'"></view>
					</view>
					<text class="cuIcon-roundcheckfill text-green margin-left-sm"></text>
				</view>
				<view class="flex margin-top">
					<view class="cu-progress round">
						<view class="bg-green" :style="'width:' + (loading ? '80%' : '') + ';'"></view>
					</view>
					<text class="margin-left">80%</text>
				</view>
			</view>

			<view :class="'cu-modal ' + (modalName == 'ColorModal' ? 'show' : '')">
				<view class="cu-dialog">
					<view class="cu-bar justify-end solid-bottom">
						<view class="content">选择颜色</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="grid col-5 padding">
						<view class="padding-xs" @tap="SetColor" :data-color="item.name"
							v-for="(item, index) in ColorList" :key="index">
							<view :class="'padding-tb bg-' + item.name + ' radius'">{{ item.title }}</view>
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
	import canvas2dRing from '../../templateComponents/canvas2d-ring/canvas2d-ring.vue'
	import {
		color_list
	} from '@/common/commonData.js'
	export default {
		components:{
			canvas2dRing,
			comNavTab,
			ComTitle
		},
		data() {
			return {
				ColorList: color_list,
				color: 'red',
				canvasW: 220,
				canvasH: 220,

				data_list: [{
						value: 0,
						lineColor: 'red',
						lineWidth: 0
					},
					{
						value: 10,
						lineColor: 'red',
						lineWidth: 2
					},
					{
						value: 20,
						lineColor: 'red',
						lineWidth: 2
					},
					{
						value: 30,
						lineColor: 'red',
						lineWidth: 3
					},
					{
						value: 40,
						lineColor: 'green',
						lineWidth: 3
					},
					{
						value: 50,
						lineColor: 'green',
						lineWidth: 3
					},
					{
						value: 60,
						lineColor: 'green',
						lineWidth: 3
					},
					{
						value: 70,
						lineColor: 'green',
						lineWidth: 4
					},
					{
						value: 80,
						lineColor: '#37c0fe',
						lineWidth: 4
					},
					{
						value: 90,
						lineColor: '#37c0fe',
						lineWidth: 4
					},
					{
						value: 100,
						lineColor: '#37c0fe',
						lineWidth: 4
					},
					{
						value: 101,
						lineColor: '#37c0fe',
						lineWidth: 5
					}
				],

				// 环形进度条参数 圆环直径
				circleDiam: 80,
				// 中心圆直径
				cententDiam: 70,
				bgColor: '#e9e9e9',
				curColor: 'linear-gradient(#7affaf, #7a88ff)',
				value: 80,

				loading: false,
				modalName: '',
				active: '',
				rotateLeft: '',
				rotateRight: '',
				backgroundRight: '',
				durationLeft: '',
				durationRight: ''
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
			setTimeout(() => {
				this.loading = true
				this.rotateCircle(this.value);
			}, 500);

		},
		mounted() {
			this.getRings();
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},

			hideModal(e) {
				this.modalName = null
			},

			SetColor(e) {
				this.color = e.currentTarget.dataset.color
				this.modalName = null
			},

			SetActive(e) {
				this.active = e.detail.value
			},

			getRings() {
				this.data_list.forEach((item, index) => {
					this.$refs.canvas2dRing[index].showCanvasRing();
				});
			},

			drawNew(step) {
				const query = uni.createSelectorQuery().in(this);
				query
					.select('#myCanvas')
					.fields({
						node: true,
						size: true
					})
					.exec(this.init.bind(this));
			},

			init(res) {
				const canvas = res[0].node;
				const ctx = canvas.getContext('2d');
				const dpr = uni.getSystemInfoSync().pixelRatio;
				canvas.width = res[0].width * dpr;
				canvas.height = res[0].height * dpr;
				ctx.scale(dpr, dpr);
				var gradient = ctx.createLinearGradient(200, 100, 100, 200);
				gradient.addColorStop('0', '#a57b5f');
				gradient.addColorStop('0.5', '#cc9ad1');
				gradient.addColorStop('1.0', '#b84e88');
				ctx.strokeStyle = gradient;
				ctx.lineWidth = 10;
				ctx.lineCap = 'round';
				ctx.beginPath();
				ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
				ctx.stroke();
			},

			// 多彩环形进度条
			rotateCircle(value) {
				let rotateLeft = '';
				let rotateRight = '';
				let backgroundRight = '';
				let durationLeft = '0s';
				let durationRight = '0s';
				if (value >= 50) {
					rotateLeft = `rotate(${((value - 50) / 100) * 360}deg)`;
					rotateRight = `rotate(0deg)`;
					backgroundRight = 'inherit';
					durationLeft = '0.25s';
					durationRight = '0s';
				} else {
					rotateLeft = 'rotate(0deg)';
					rotateRight = `rotate(${(value / 100) * 360}deg)`;
					backgroundRight = this.bgColor;
					durationLeft = '0';
					durationRight = '0.25s';
					if (this.oldValue >= 50) {
						durationRight = '0s';
					}
				}
				// 记录上次的值
				this.oldValue = value;
				this.rotateLeft = rotateLeft
				this.rotateRight = rotateRight
				this.backgroundRight = backgroundRight
				this.durationLeft = durationLeft
				this.durationRight = durationRight
			}
		}
	};
</script>
<style>
</style>