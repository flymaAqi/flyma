<template>
	<view class="u-image" :style="[wrapStyle]">
		<image :style="{'borderRadius':borderRadius}" v-show="!isError && !loading" :src="src" :mode="mode" @error="onErrorHandler" @load="onLoadHandler"
			 class="u-image__image" :show-menu-by-longpress="showMenuByLongpress"></image>
		<view :style="aniClose?'position: absolute;':''" :class="[showLoading && loading || src=='7'?'aqi-opaOne':'aqi-opaZero aqi-absout']" class="u-image__loading bg-gradual-blue-light">
			<slot v-if="$slots.loading" name="loading" />
		</view>
		<view v-if="showError && isError && !loading && src!='7'" class="u-image__error bg-gradual-blue-light">
			<slot v-if="$slots.error" name="error" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'u-image',
		// emits: ["click", "error", "load"],
		props: {
			// 图片地址
			src: {
				type: [String, null],
				default: ''
			},
			aniClose:{
				type: Boolean,
				default: true
			},
			// 裁剪模式
			mode: {
				type: String,
				default: 'aspectFill'
			},
			// 宽度，单位任意
			width: {
				type: [String, Number],
				default: '100%'
			},
			// 高度，单位任意
			height: {
				type: [String, Number],
				default: 'auto'
			},
			// 圆角，单位任意
			borderRadius: {
				type: [String, Number],
				default: 0
			},
			// 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
			lazyLoad: {
				type: Boolean,
				default: true
			},
			// 开启长按图片显示识别微信小程序码菜单
			showMenuByLongpress: {
				type: Boolean,
				default: true
			},

			// 是否显示加载中的图标或者自定义的slot
			showLoading: {
				type: Boolean,
				default: true
			},
			// 是否显示加载错误的图标或者自定义的slot
			showError: {
				type: Boolean,
				default: true
			},
			// 是否需要淡入效果
			fade: {
				type: Boolean,
				default: true
			},
			// 只支持网络资源，只对微信小程序有效
			webp: {
				type: Boolean,
				default: false
			},
			// 过渡时间，单位ms
			duration: {
				type: [String, Number],
				default: 500
			},
		},
		data() {
			return {
				// 图片是否加载错误，如果是，则显示错误占位图
				isError: false,
				// 初始化组件时，默认为加载中状态
				loading: true,
				// 不透明度，为了实现淡入淡出的效果
				opacity: 1,
				// 过渡时间，因为props的值无法修改，故需要一个中间值
				durationTime: this.duration,
				// 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
				backgroundStyle: {}
			};
		},
		watch: {
			src: {
				// immediate: true,
				handler(n) {
					if (!n) {
						// 如果传入null或者''，或者false，或者undefined，标记为错误状态
						this.isError = true;
						this.loading = false;
					} else {
						this.isError = false;
						this.loading = true;
					}
				}
			}
		},
		computed: {
			wrapStyle() {
				let style = {};
				// 如果设置圆角，必须要有hidden，否则可能圆角无效
				style.width = this.width
				style.height = this.height
				return style;
			}
		},
		methods: {
			// 图片加载失败
			onErrorHandler(err) {
				this.loading = false;
				this.isError = true;
				// this.$emit('error', err);
			},
			// 图片加载完成，标记loading结束
			onLoadHandler() {
				setTimeout(() => {
					this.isError = false;
					this.loading = false;
				}, 1500);
			},
			// 移除图片的背景色
			removeBgColor() {
				// 淡入动画过渡完成后，将背景设置为透明色，否则png图片会看到灰色的背景
				this.backgroundStyle = {
					backgroundColor: 'transparent'
				};
			}
		}
	};
</script>

<style scoped lang="scss">
	.u-image {
		position: relative !important;
		transition: opacity 0.5s ease-in-out;
		
		&__image {
			width: 100%;
			height: 100%;
		}

		&__loading,
		&__error {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction:row;
			align-items: center;
			justify-content: center;
			transition: 1s all;
			// font-size: 46rpx;
		}
	}
</style>