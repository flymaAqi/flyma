<template>
	<view class="float-ball-wrapper bg-gradual-cyan-light aqi-zx-xxl aqi-boxShadow round" id="floatBallWrapper"
		:style="[floatBallWrapperStyle]">
		<template v-if="dragable">
			<view class="float-ball aqi-zx-xxl" :style="{ background: background }"
				@touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove"
				@touchend.stop.prevent="touchend">
				<view :class="isShow?'cuIcon-favorfill tr180':'cuIcon-favor tr0'" class="text-yellow aqi-zx-s iconAni"
					style="font-size: 70rpx;"></view>
			</view>
			<view class="slots" :class="[slotsDirectionData]">
				<view :animation="animation"
					class="flex flex-column aqi-opaZero padding-xs aqi-zx-xxl bg-gradual-cyan-light round">
					<view class="cuIcon-forwardfill" style="font-size: 70rpx;height: 100%;width: 100%">
						<button v-show="isShow" style="position: absolute;width: 100%;height: 100rpx;top: 0;border: none;"
							class="aqi-zx-xxl" open-type="share" plain />
					</view>
					<view :class="isLove?'jello-horizontal cuIcon-likefill text-red':'cuIcon-like shake-lr'"
						style="height: 100%;width: 100%;font-size: 70rpx;" @tap="loves" />
					<view class="" style="height: 100%;width: 100%;" @tap="tipShow">
						<view class="cuIcon-messagefill" style="font-size: 70rpx;transition: 0.6s all;">
							<text :class="[tipTit?'aqi-opaOne':'aqi-opaZero',tipX?'left':'right']"
								style="width: 260px;transition: 0.6s all;"
								class="text-sm padding-xs slots radius-xl bg-gradual-green-light margin-left-sm">
								不允许小球左边吸附,因为可能与用户左滑返回起冲突,小球隐藏休息只能拖在右侧哦!
							</text>
						</view>
					</view>
					<view class="" style="height: 100%;width: 100%;" @tap="end_animation">
						<text class="cuIcon-close" style="font-size: 70rpx;"></text>
					</view>
				</view>
				<!-- <slot /> -->
			</view>
		</template>

		<view v-else class="float-ball">
			<view class="slots" :class="[slotsDirectionData]">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	let loading = false;
	let loadingTop = false;
	const animation = uni.createAnimation({
		duration: 500,
		timingFunction: 'ease-out',
		delay: 0,
		transformOrigin: '50% 50% 0'
	}); //动画
	export default {
		name: 'duiFloatBall',
		emits: ['touchFunc','onRemoLove','onLoveTip'],
		props: {
			isLove:{
				type: Boolean,
				default: false
			},
			dragable: {
				type: Boolean,
				default: true
			},
			ballWidth: {
				type: String,
				default: "100rpx"
			},
			background: String,
			position: {
				type: Object,
				default: function() {
					return {
						left: '100%',
						top: '50%'
					};
				}
			},
			immediateIndent: {
				type: Boolean,
				default: true
			},
			needNearEdge: {
				type: Boolean,
				default: true
			},
			nearEdgeDirection: String,
			nearEdgeTransition: {
				type: String,
				default: 'all ease 0.3s'
			},
			nearEdgeIndent: {
				type: Boolean,
				default: true
			},
			nearEdgeIndentDelay: {
				type: Number,
				default: 2000
			},
			nearEdgeIndentDistance: {
				type: Number,
				default: 20
			},
			slotsDirection: {
				type: String,
				default: 'top'
			}
		},
		data() {
			return {
				isShow: false,
				tipTit: false,
				tipX: false,
				slotsDirectionData: 'right',
				touchType: 0,
				starX: 0,
				starY: 0,
				floatBallPositionLeft: 0,
				floatBallPositionTop: 0,
				floatBallWidth: 0,
				floatBallHeight: 0,
				windowWidth: 0,
				windowHeight: 0,
				floatBallWrapperStyle: {
					left: 0,
					top: 0,
					transform: '',
				},
				left: 0,
				top: 0,
				indentTimer: null,
				indentNearEdgeTimer: null,
				totalTranslateX: 0,
				totalTranslateY: 0,
				animation: '',
			};
		},
		created() {
			this.floatBallWrapperStyle.top = this.position.top;
			this.floatBallWrapperStyle.left = this.position.left;
			// if (typeof this.nearEdgeIndentDistance != 'number') {
			// 	console.error('nearEdgeIndentDistance值必须为number类型');
			// }
		},

		mounted() {
			this.end_animation()
			this.setWindowWH();
			this.setFloatBallWH();
		},

		beforeDestroy() {
			this.clearAllTimeout();
		},
		methods: {
			loves() {
				this.isLove ? this.$emit('onRemoLove') : this.$emit('onLoveTip')
			},
			tipShow() {
				this.tipX = this.totalTranslateX < -300 ?  false:  true
				this.tipTit = !this.tipTit
			},
			start_animation() {
				let tx = this.totalTranslateX
				if (tx > (this.windowWidth - this.floatBallWidth - this.floatBallPositionLeft)) {
					tx = tx - this.nearEdgeIndentDistance
					this.floatBallWrapperStyle.transform = `translate(${tx}px,${this.totalTranslateY}px)`;
				}
				this.isShow = true
				animation.height('180px').opacity(1).step();
				this.animation = animation.export()
			},

			end_animation() {
				this.tipTit = false
				animation.height('0px').opacity(0).step();
				this.isShow = false
				this.animation = animation.export()
			},
			touchstart(e) {
				const starX = e.touches[0].clientX;
				const starY = e.touches[0].clientY;
				e.preventDefault();
				this.clearAllTimeout();
				this.floatBallWrapperStyle.transition = 'none';
				this.touchType = 0;
				this.starX = starX;
				this.starY = starY;
			},

			touchmove(e) {
				const clientX = e.touches[0].clientX;
				const clientY = e.touches[0].clientY;
				const moveXDistance = clientX - this.starX;
				const moveYDistance = clientY - this.starY;
				if (Math.abs(moveXDistance) > 10 || Math.abs(moveYDistance) > 10) {
					this.touchType = 1;
				}
				this.tipTit = false
				this.validMove(moveXDistance, moveYDistance);
			},

			touchend(e) {
				const clientX = e.changedTouches[0].clientX;
				const clientY = e.changedTouches[0].clientY;
				const moveXDistance = clientX - this.starX;
				const moveYDistance = clientY - this.starY;
				let xy = moveXDistance + moveYDistance;
				if (xy < 10 && xy > -10) {
					this.start_animation()
					return
				}
				const {
					translateX,
					translateY
				} = this.calcTranslateXY(moveXDistance, moveYDistance);
				if (this.touchType === 0) {
					this.touchCallBackFunc();
				}
				this.totalTranslateX = translateX;
				this.totalTranslateY = translateY;

				if (this.needNearEdge) {
					this.getFloatBallLatestRect().then(rect => {
						let minKey = '';
						let obj = {
							left: rect.left,
							// top:rect.top,顶部隐藏
							right: this.windowWidth - rect.left - this.floatBallWidth,
							// bottom:this.windowHeight - rect.top - this.floatBallHeight,底部隐藏
						}
						let translateX = this.totalTranslateX;
						let translateY = this.totalTranslateY;
						if (this.nearEdgeDirection) {
							minKey = this.nearEdgeDirection;
						} else {
							let min = Math.min();
							for (const key in obj) {
								const val = parseFloat(obj[key]);
								if (val < min) {
									min = val;
									minKey = key;
								}
							}
						}

						this.setNearEdgeAndIndent(minKey);

						if (this.nearEdgeIndent) {
							if (this.nearEdgeIndentDelay !== 0) {
								clearTimeout(this.indentNearEdgeTimer);
								this.indentNearEdgeTimer = setTimeout(() => {
									this.setNearEdgeAndIndent(minKey, this.nearEdgeIndentDistance);
								}, this.nearEdgeIndentDelay);
							} else {
								this.setNearEdgeAndIndent(minKey, this.nearEdgeIndentDistance);
							}
						}

						this.setSlotsDirection(minKey);
					})
				}
			},

			touchCallBackFunc() {
				this.getFloatBallLatestRect().then(rect => {
					const {
						right,
						bottom,
						top,
						left
					} = rect;
					let iSNearEdge = false;
					if (Math.ceil(right) >= this.windowWidth || Math.floor(top) <= 0) {
						iSNearEdge = true;
					}
					if (Math.ceil(bottom) >= this.windowHeight || Math.floor(left) <= 0) {
						iSNearEdge = true;
					}
					this.$emit('touchFunc', {
						iSNearEdge
					});
				})
			},

			validMove(moveXDistance, moveYDistance) {
				const {
					translateX,
					translateY
				} = this.calcTranslateXY(moveXDistance, moveYDistance);
				this.floatBallWrapperStyle.transform = `translate(${translateX}px,${translateY}px)`;
			},

			calcTranslateXY(moveXDistance, moveYDistance) {
				let translateX = this.totalTranslateX + moveXDistance;
				let translateY = this.totalTranslateY + moveYDistance;
				//限制上下距离
				translateY = translateY > 270 ? 270 : translateY < -270 ? -270 : translateY

				if (this.floatBallPositionLeft + translateX < 0) {
					translateX = -this.floatBallPositionLeft;
				}
				if (this.floatBallPositionLeft + translateX + this.floatBallWidth > this.windowWidth) {
					translateX = this.windowWidth - this.floatBallWidth - this.floatBallPositionLeft;
				}
				//上下超过区域取消
				// if (this.floatBallPositionTop + translateY < 0) {
				// 	translateY = -this.floatBallPositionTop;
				// }
				// if (this.floatBallPositionTop + translateY + this.floatBallHeight > this.windowHeight) {
				// 	translateY = this.windowHeight - this.floatBallHeight - this.floatBallPositionTop;
				// }
				return {
					translateX,
					translateY
				};
			},

			setNearEdgeAndIndent(minKey, nearEdgeIndentDistance = 0) {
				let translateX = this.totalTranslateX;
				let translateY = this.totalTranslateY;
				if (nearEdgeIndentDistance < 0) {
					nearEdgeIndentDistance = 0;
				} else if (nearEdgeIndentDistance <= 1) {
					nearEdgeIndentDistance = this.floatBallWidth * nearEdgeIndentDistance;
				}
				switch (minKey) {
					case 'left':
						translateX = -this.floatBallPositionLeft - 0; //不允许左边吸附
						break;
					case 'right':
						translateX = this.windowWidth - this.floatBallWidth - this.floatBallPositionLeft +
							nearEdgeIndentDistance;
						break;
						// case 'top':
						// 	translateY = -this.floatBallPositionTop - nearEdgeIndentDistance;
						// 	break;
						// case 'bottom':
						// 	translateY = this.windowHeight - this.floatBallHeight - this.floatBallPositionTop +
						// 		nearEdgeIndentDistance;
						// 	break;
				}
				if (this.nearEdgeTransition) {
					this.floatBallWrapperStyle.transition = this.nearEdgeTransition;
				}
				this.totalTranslateX = translateX;
				this.totalTranslateY = translateY;
				this.floatBallWrapperStyle.transform = `translate(${translateX}px,${translateY}px)`;
			},

			setSlotsDirection(minKey) {
				let slotsDirection = '';
				switch (minKey) {
					case 'left':
						slotsDirection = 'right';
						break;
					case 'right':
						slotsDirection = 'left';
						break;
					case 'top':
						slotsDirection = 'bottom';
						break;
					case 'bottom':
						slotsDirection = 'top';
						break;
				}
				if (!this.slotsDirection) {
					this.slotsDirectionData = slotsDirection;
				} else {
					this.slotsDirectionData = this.slotsDirection;
				}
			},

			clearAllTimeout() {
				clearTimeout(this.indentTimer);
				clearTimeout(this.indentNearEdgeTimer);
			},

			setIndent(minkey) {
				this.clearAllTimeout();
				this.indentTimer = setTimeout(() => {
					this.setNearEdgeAndIndent(minkey, this.nearEdgeIndentDistance);
				}, this.nearEdgeIndentDelay);
			},

			setFloatBallWH() {
				// #ifndef MP-ALIPAY
				const query = uni.createSelectorQuery().in(this);
				query
					.select('#floatBallWrapper')
					.boundingClientRect((rect) => {
						this.floatBallWidth = rect.width;
						this.floatBallHeight = rect.height;
						this.floatBallPositionLeft = rect.left;
						this.floatBallPositionTop = rect.top;
						this.initSet();
					})
					.exec();
				// #endif
				// #ifdef MP-ALIPAY
				my.createSelectorQuery()
					.select('#floatBallWrapper')
					.boundingClientRect()
					.exec((ret) => {
						this.floatBallWidth = ret[0].width;
						this.floatBallHeight = ret[0].height;
						this.floatBallPositionLeft = ret[0].left;
						this.floatBallPositionTop = ret[0].top;
						this.initSet();
					});
				// #endif
			},

			getFloatBallLatestRect() {
				return new Promise((resolve, rejct) => {
					// #ifndef MP-ALIPAY
					const query = uni.createSelectorQuery().in(this);
					query
						.select('#floatBallWrapper')
						.boundingClientRect((rect) => {
							resolve(rect);
						})
						.exec();
					// #endif
					// #ifdef MP-ALIPAY
					my.createSelectorQuery()
						.select('#floatBallWrapper')
						.boundingClientRect()
						.exec((ret) => {
							resolve(ret[0]);
						});
					// #endif
				})
			},

			setWindowWH() {
				let windowInfo = {};
				// #ifdef H5 || MP-WEIXIN || APP
				windowInfo = uni.getWindowInfo();
				// #endif

				// #ifdef MP-QQ
				windowInfo = qq.getSystemInfoSync();
				// #endif

				// #ifdef MP-ALIPAY
				windowInfo = my.getSystemInfoSync();
				// #endif

				// #ifdef MP-TOUTIAO || MP-LARK
				windowInfo = tt.getSystemInfoSync();
				// #endif

				// #ifdef MP-KUAISHOU
				windowInfo = ks.getSystemInfoSync();
				// #endif

				// #ifdef MP-BAIDU
				windowInfo = swan.getSystemInfoSync();
				// #endif

				// #ifdef MP-JD
				windowInfo = jd.getSystemInfoSync();
				// #endif

				// #ifdef MP-360
				const qhSystemInfo = qh.getSystemInfoSync();
				windowInfo.windowWidth = qhSystemInfo.screenWidth;
				windowInfo.windowHeight = qhSystemInfo.screenHeight;
				// #endif

				this.windowWidth = windowInfo.windowWidth;
				this.windowHeight = windowInfo.windowHeight;
			},

			initSet() {
				let minkey = 'top';
				let translateX = '';
				let translateY = '';
				if (this.position.left == '100%') {
					minkey = 'right';
					translateX = -this.floatBallWidth;
					this.floatBallWrapperStyle.transform = `translateX(${translateX}px)`;
					this.totalTranslateX = translateX;
				} else {
					minkey = 'left';
				}
				if (this.position.top == '100%') {
					minkey = 'bottom';
					translateY = -this.floatBallHeight;
					this.floatBallWrapperStyle.top = this.windowHeight + 'px';
					this.floatBallWrapperStyle.transform = `translateY(${translateY}px)`;
					this.totalTranslateY = translateY;
					this.floatBallPositionTop = this.windowHeight;
				}
				this.setSlotsDirection(minkey);
				if (this.immediateIndent && this.nearEdgeIndent) {
					this.setIndent(minkey);
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import url("/pagesB1/commonB1/animation.css");

	.iconAni {
		transition: 1s all;
	}

	.tr180 {
		transform: rotate(180deg);
	}

	.tr0 {
		transform: rotate(0deg);
	}

	.float-ball-wrapper {
		position: fixed;
		width: 100rpx;
		height: 100rpx;
		z-index: 997;

		.float-ball {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
			border-radius: 50%;

		}

		.slots {
			position: absolute;
			width: fit-content;

			&.right {
				left: calc(100% + 10px);
			}

			&.left {
				right: calc(100% + 10px);
			}

			&.top {
				bottom: calc(100% + 10px);
			}

			&.bottom {
				top: calc(100% + 10px);
			}
		}
	}
</style>