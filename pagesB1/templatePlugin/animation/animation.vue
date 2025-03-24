<template>
	<view>
		<comNavTab csTit="动画">
			<ComTitle titleTxt="渐显动画" valueTxt="{animation-name}" :code-show="true">
				<view class="flex flex-wrap justify-around">
					<view class="basis-sm margin-tb-sm" v-for="(item, index) in aniListNew" :key="index">
						<image :class="animation == item.name ? item.name : ''" style="width: 100%;" mode="widthFix"
							src="../../static/tiandao.jpg"></image>
						<button class="text-xs" type="primary" @tap="toggle"
							:data-class="item.name">{{ item.name }}</button>
					</view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="渐隐动画" valueTxt="animation-{name}" :code-show="true">
				<view class="padding-sm">
					<view class="flex flex-wrap justify-around">
						<button
							:class="'cu-btn bg-' + item.color + ' animation-' + (animation == item.name + 's' ? item.name : '') + ' animation-reverse margin-sm basis-sm shadow'"
							@tap="toggle" :data-class="item.name + 's'" v-for="(item, index) in list" :key="index">
							{{ item.name }}
						</button>
					</view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="延迟执行" valueTxt="animation-slide-bottom" tip-txt="//执行时机style自定义"
				:code-show="true">
				<view class="padding-sm">
					<view class="flex flex-wrap justify-around">
						<button
							:class="'bg-' + item.color + ' cu-btn ' + (toggleDelay ? 'animation-slide-bottom' : '') + ' margin-sm basis-sm shadow'"
							:style="'animation-delay: ' + (index + 1) * 0.1 + 's;'" v-for="(item, index) in list"
							:key="index">
							0.{{ index + 1 }}s
						</button>
					</view>
				</view>
				<template #rB>
					<button class="cu-btn bg-cyan shadow" @tap="toggleDelayFun">开始执行</button>
				</template>
			</ComTitle>
			<ComTitle titleTxt="Gif动画" valueTxt="animation-{name}">
				<view class="margin flex">
					<view class="bg-black flex-sub margin-right">
						<image
							src="https://image.meiye.art/FtVzlE42mb4MfUkz9qcbCKq8Qv_a?imageMogr2/thumbnail/450x/interlace/1"
							mode="aspectFit" class="gif-black response" style="height: 240rpx"></image>
					</view>
					<view class="bg-white flex-sub">
						<image src="https://image.meiye.art/FpKQhWyO0YoE1kZPmT9c_m8C4vJZ" mode="aspectFit"
							class="gif-white response" style="height: 240rpx"></image>
					</view>
				</view>
				
				<view class="margin flex">
					<view class="bg-gradual-blue flex-sub margin-right">
						<image
							src="https://image.meiye.art/Ftfhr4rPXzZM3Z8cBehxgQHH2Gj6?imageMogr2/thumbnail/450x/interlace/1"
							mode="aspectFit" class="gif-black response" style="height: 240rpx"></image>
					</view>
					<view class="bg-white flex-sub">
						<image
							src="https://image.meiye.art/Fv_9m3UnYTFOeiY79X01nBupGyKx?imageMogr2/thumbnail/450x/interlace/1"
							mode="aspectFit" class="gif-white response" style="height: 240rpx"></image>
					</view>
				</view>
				
				<view class="margin flex">
					<view class="bg-white flex-sub margin-right">
						<image
							src="https://image.meiye.art/FhSukauLzxBHoNQUq_YCqRN0CCKz?imageMogr2/thumbnail/450x/interlace/1"
							mode="aspectFit" class="gif-white response" style="height: 240rpx"></image>
					</view>
					<view class="bg-black flex-sub">
						<image
							src="https://image.meiye.art/Fg7PS0IesulBHFZwCvfx9-pj6fgs?imageMogr2/thumbnail/450x/interlace/1"
							mode="aspectFit" class="gif-black response" style="height: 240rpx"></image>
					</view>
				</view>
			</ComTitle>
			
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				aniListNew: [{
					name: 'swirl-in-fwd'
				}, {
					name: 'roll-in-top'
				}, {
					name: 'jello-horizontal'
				}, {
					name: 'rotate-in-right'
				}, {
					name: 'wobble-hor-top'
				}, {
					name: 'shake-lr'
				}],
				list: [{
						name: 'fade',
						color: 'red'
					},
					{
						name: 'scale-up',
						color: 'orange'
					},
					{
						name: 'scale-down',
						color: 'olive'
					},
					{
						name: 'slide-top',
						color: 'green'
					},
					{
						name: 'slide-bottom',
						color: 'cyan'
					},
					{
						name: 'slide-left',
						color: 'blue'
					},
					{
						name: 'slide-right',
						color: 'purple'
					},
					{
						name: 'shake',
						color: 'mauve'
					}
				],

				toggleDelay: false,
				animation: ''
			};
		},
		methods: {
			toggle(e) {
				var anmiaton = e.currentTarget.dataset.class;
				this.animation = anmiaton
				setTimeout(() => {
					this.animation = ''
				}, 1000);
			},

			toggleDelayFun() {
				this.toggleDelay = true
				setTimeout(() => {
					this.toggleDelay = false
				}, 1000);
			}
		}
	};
</script>
<style>
	@import '../../commonB1/animation.css';

	image[class*='gif-'] {
		border-radius: 6rpx;
		display: block;
	}
</style>