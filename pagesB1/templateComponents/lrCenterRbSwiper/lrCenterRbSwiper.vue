<template>
	<view class="sy-swiper" :style="{
		background: bgColor,
		height: addUnit(height),
		padding: padding,
		borderRadius: addUnit(radius)
	}">
		<view v-if="showButton" class="sy-swiper__operation left" @click="slideLeft" :style="{
			width: addUnit(buttonSize),
			height: addUnit(buttonSize),
			background: buttonBgColor,
			fontSize: addUnit(buttonSize)
		}">
			<slot name="left-button"></slot>
		</view>
		<view class="sy-swiper__panel" @touchstart="onTouchStart" @touchend="onTouchEnd">
			<view class="sy-swiper__panel-item" v-for="(item, index) in images" :key="index" :style="{
	                    transform: itemStyles[index].transform,
	                    zIndex: itemStyles[index].zIndex,
	                    opacity: itemStyles[index].opacity,
						transitionDuration: millisecondsToSeconds(duration) + 's',
						
	                }"><!-- transitionTimingFunction: easing, -->
				<view class="sy-swipContent" :class="lrOrTb ? 'TB-content':'LR-content'"
					@click="$emit('click', item, index)">
					<template v-if="showCenterImage">
						<image :class="index==currentIndex ? 'slit-in-diagonal-1 slide':'slideCenter swing-in-top-bck'" class=""
							:src="item.imgUrl" :mode="imgMode">
						</image>
					</template>
					<template v-else>
						<image :class="index==currentIndex ? 'puff-in-center slide':'slide2 rotate-in-top'" class=""
							:src="item.imgUrl" :mode="imgMode">
						</image>
					</template>
					<view v-if="index===currentIndex && !showCenterImage" class="text-center swipTxt"
						:class="[txtInx==0 ? 'rotate-in-2-br-cw':'swing-in-top-bck',lrOrTb?'swipTxtTB u-line-4':'swipTxtLR u-line-3']">
						<text class="cuIcon-lightfill"></text>{{images[currentIndex].desc}}
					</view>
					<view class="flex justify-center" v-if="showDesc && item.desc && index==currentIndex">
						<text class="desc" :class="{ 'text': descNoWrap ,'desc-lr':!lrOrTb,'desc-tb':lrOrTb}"
							:style="{ background: descBgColor, color: descColor }">
							<template v-if="showCenterImage">
								{{images[currentIndex].desc}}
							</template>
							<template v-else>
								({{index+1}}/{{images.length}})
							</template>
						</text>
					</view>

				</view>
			</view>
		</view>
		<view v-if="showButton" class="sy-swiper__operation right" @click="slideRight" :style="{
			width: addUnit(buttonSize),
			height: addUnit(buttonSize),
			background: buttonBgColor,
			fontSize: addUnit(buttonSize)
		}">
			<slot name="right-button"></slot>
		</view>
	</view>
</template>

<script>
	// 默认左右结构
	import {
		addUnit,
		millisecondsToSeconds
	} from "./util.js";
	export default {
		props: {
			// 图片列表
			images: {
				type: Array,
				default: () => []
			},
			// 以中间图片旋转,true时lrOrTb必须是false
			showCenterImage: {
				type: Boolean,
				default: false
			},
			// true上下,false左右
			lrOrTb: {
				type: Boolean,
				default: false
			},
			padding: {
				type: String,
				default: "0px"
			},
			// 是否自动切换
			autoplay: {
				type: Boolean,
				default: true
			},
			// 动画类型
			easing: {
				type: String,
				default: "ease-in-out"
			},
			// 是否启用不透明度设定
			enableOpacity: {
				type: Boolean,
				default: true
			},
			// 最顶层图片的不透明度 center0.7以下
			baseOpacity: {
				type: Number,
				default: 0.6
			},
			// 当前所在滑块的 index
			current: {
				type: Number,
				default: 0
			},
			// 滑块自动切换时间间隔（ms）
			interval: {
				type: Number,
				default: 2000
			},
			// 滑块切换过程所需时间（ms）
			duration: {
				type: Number,
				default: 800
			},
			// 左右边距
			horizontalMargin: {
				type: [String, Number],
				default: 15
			},
			// 上下边距
			verticalMargin: {
				type: [String, Number],
				default: 10
			},
			// 组件高度 500rpx左右居中,800rpx上下
			height: {
				type: [String, Number],
				default: '500rpx'
			},
			// 是否显示操作按钮
			showButton: {
				type: Boolean,
				default: false
			},
			// 按钮字体大小
			buttonSize: {
				type: [String, Number],
				default: 24
			},
			// 操作按钮背景颜色
			buttonBgColor: {
				type: String,
				default: "rgba(0, 0, 0, 0.26)"
			},
			// 图片裁剪模式，详情见微信原生imageMode
			imgMode: {
				type: String,
				default: "aspectFill"
			},
			// 是否显示图片描述（需要images传递的数据中存在desc属性）
			showDesc: {
				type: Boolean,
				default: true,
			},
			// 底部描述的背景
			descBgColor: {
				type: String,
				default: "rgba(0, 0, 0, 0.3)"
			},
			// 底部描述字体颜色
			descColor: {
				type: String,
				default: "#ffffff"
			},
			// 底部描述字体大小
			descSize: {
				type: [Number, String],
				default: 10
			},
			// 描述是否不换行，超出后用...省略
			descNoWrap: {
				type: Boolean,
				default: false
			},
			// 轮播图片的圆角值
			radius: {
				type: [String, Number],
				default: 4
			},
			// 容器背景色
			bgColor: {
				type: String,
				default: "rgb(238,238,238,0.1)"
			},
		},
		// 切换
		emits: ["click", "change"],
		data() {
			return {
				slideNote: {
					x: 0,
					y: 0
				},
				itemStyles: [],
				screenWidth: 0,
				currentIndex: 0,
				autoSlideInterval: null,
				autoSlideTimeout: null,
				txtInx: 0
			}
		},
		mounted() {
			this.autoplay && this.doSomething();
		},
		onUnload() {
			this.autoSlideInterval = null;
			this.autoSlideTimeout = null;
		},
		beforeDestroy() {
			clearInterval(this.autoSlideInterval);
			clearTimeout(this.autoSlideTimeout);
			this.autoSlideInterval = null;
			this.autoSlideTimeout = null;
		},
		watch: {
			images: {
				handler(newImages) {
					var macInfo = uni.getSystemInfoSync();
					this.screenWidth = macInfo.screenWidth;
					if(this.showCenterImage){
						this.itemStyles = newImages.map((_, index) => (this.getStyleCenter(index)))
					}else{
						this.itemStyles = this.lrOrTb ? newImages.map((_, index) => (this.getStyleTB(index))) : this.itemStyles = newImages.map((_, index) => (this.getStyleLR(index)));;
					}
				},
				deep: true,
				immediate: true
			},
			current: {
				handler(newCurrentIndex) {
					this.scrollToCurrent(newCurrentIndex);
				},
				immediate: true
			}
		},
		methods: {
			addUnit,
			millisecondsToSeconds,
			doSomething() {
				this.$nextTick(() => {
					this.autoSlideInterval = setInterval(() => {
						this.slideRight();
					}, this.interval)
				})
			},
			getStyleTB(eIndex) {
				// <!-- 上下结构 -->
				if (this.currentIndex === eIndex) {
					var right = this.images.length - eIndex;
					return {
						transform: "scale(" + 1 + ") translate(-" + 0 + "%, 0rpx)",
						zIndex: 100,
						opacity: 1,
						// isTop: eIndex === 0
					}
				} else {
					return {
						transform: "scale(" + (1 - eIndex / 10) + ") translate(" + eIndex * 10 + "%," + 66+eIndex * 2 + "rpx)",
						zIndex: 100 - eIndex,
						opacity: this.enableOpacity ? this.baseOpacity / eIndex : 1,
						// isTop: eIndex === 0
					}
				}
			},
			getStyleLR(eIndex) {
				// 左右结构
				if (this.currentIndex === eIndex) {
					var right = this.images.length - eIndex;
					return {
						transform: "scale(" + 1 + ") translate(-" + 15 + "%, 0px)",
						zIndex: 100,
						opacity: 1,
						// isTop: eIndex === 0
					}
				} else {
					return {
						transform: "scale(" + (0.56 - eIndex / 18) + ") translate(" + eIndex * 20 + "%," + (66-eIndex * 20) + "%)",
						zIndex: 100 - eIndex,
						opacity: this.enableOpacity ? this.baseOpacity / eIndex : 1,
						// isTop: eIndex === 0
					}
				}
			},
			getStyleCenter(eIndex) {
				if (eIndex > this.images.length / 2) {
					var right = this.images.length - eIndex;
					return {
						transform: "scale(" + (0.95 - right / this.verticalMargin) + ") translate(-" + right * this
							.horizontalMargin + "%, 0px)",
						zIndex: 100 - right,
						opacity: this.enableOpacity ? this.baseOpacity / right : 1,
						// isTop: eIndex === 0
					}
				} else {
					return {
						transform: "scale(" + (0.95 - eIndex / this.verticalMargin) + ") translate(" + eIndex * this
							.horizontalMargin + "%, 0px)",
						zIndex: 100 - eIndex,
						opacity: this.enableOpacity ? this.baseOpacity / eIndex : 1,
						// isTop: eIndex === 0
					}
				}
			},
			restartTimer() {
				clearInterval(this.autoSlideInterval);
				this.autoSlideInterval = null;

			},
			scrollToCurrent(currentIndex) {
				// 清除现有的定时器，避免干扰
				this.restartTimer();
				// 这里选择用转动的方式，更改图片顺序会导致整个轮播的顺序错落
				for (let i = 0; i < currentIndex; i++) {
					this.slideRight();
				}
			},
			simulateStartMove(x) {
				this.slideNote.x = x;
			},
			onTouchStart(e) {

				this.restartTimer();
				this.slideNote.x = e.changedTouches[0] ? e.changedTouches[0].pageX : 0;
				this.slideNote.y = e.changedTouches[0] ? e.changedTouches[0].pageY : 0;
			},
			async onTouchEnd(e) {
				var newList = JSON.parse(JSON.stringify(this.itemStyles));
				if (e.changedTouches[0].pageX - this.slideNote.x < -10) {
					// 向左滑动
					this.txtInx = 1
					var last = [newList.pop()];
					newList = last.concat(newList);
					this.currentIndex = (this.currentIndex + 1) % this.images.length;

				} else if (e.changedTouches[0].pageX - this.slideNote.x >= 10) {
					// 向右滑动
					this.txtInx = 0
					newList.push(newList[0]);
					newList.splice(0, 1);
					this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
				}

				this.itemStyles = newList;

				if (this.autoplay) {
					await clearInterval(this.autoSlideInterval);
					await clearTimeout(this.autoSlideTimeout);
					// 设置新的定时器，使用 this.interval 值作为间隔时间
					this.autoSlideTimeout = setTimeout(() => {
						this.slideRight();
					}, this.interval);
				}
			},
			slideLeft() {
				this.restartTimer();
				this.simulateStartMove(this.slideNote.x); // 模拟 touchstart，确保 slideNote.x 更新
				this.onTouchEnd({
					changedTouches: [{
						pageX: this.slideNote.x + 20
					}]
				});
				// 触发 change 事件并传递当前的索引
				this.$emit('change', this.currentIndex);
			},
			slideRight() {
				this.restartTimer();
				this.simulateStartMove(this.slideNote.x); // 模拟 touchstart，确保 slideNote.x 更新
				this.onTouchEnd({
					changedTouches: [{
						pageX: this.slideNote.x - 20
					}]
				});
				// 触发change 事件并传递当前的索引
				// this.$emit('change', this.currentIndex);
			}
		}
	}
</script>

<style lang="scss" scoped>
	
	.puff-in-center {
		animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	}
	@keyframes puff-in-center {
	  0% {
	    transform: scale(1);
	    filter: blur(15rpx);
	    opacity: 0;
	  }
	  100% {
	    transform: scale(1);
	    filter: blur(0px);
	    opacity: 1;
	  }
	}
	.swing-in-top-bck {
		animation: swing-in-top-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both 0.6s;
	}
	@keyframes swing-in-top-bck {
		0% {
			transform: rotateX(200deg);
			transform-origin: top;
			opacity: 0;
		}
	
		100% {
			transform: rotateX(0deg);
			transform-origin: top;
			opacity: 1;
		}
	}
	.slide-in-elliptic-right-fwd {
		animation: slide-in-elliptic-right-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes slide-in-elliptic-right-fwd {
	  0% {
	    transform: translateX(800px) rotateY(0deg) scale(0);
	    transform-origin: -100% 50%;
	    opacity: 0;
	  }
	  100% {
	    transform: translateX(0) rotateY(0) scale(1);
	    transform-origin: -1800px 50%;
	    opacity: 1;
	  }
	}
	.slit-in-diagonal-1 {
		animation: slit-in-diagonal-1 0.45s ease-out both;
	}
	@keyframes slit-in-diagonal-1 {
	  0% {
	    transform: translateZ(-800px) rotate3d(1, 1, 0, 90deg);
	    animation-timing-function: ease-in;
	    opacity: 0;
	  }
	  54% {
	    transform: translateZ(-160px) rotate3d(1, 1, 0, 87deg);
	    animation-timing-function: ease-in-out;
	    opacity: 1;
	  }
	  100% {
	    transform: translateZ(0) rotate3d(1, 1, 0, 0);
	    animation-timing-function: ease-out;
	  }
	}
	
	
	.rotate-in-2-br-ccw {
		animation: rotate-in-2-br-ccw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	@keyframes rotate-in-2-br-ccw {
	  0% {
	    transform: rotate(45deg);
	    transform-origin: 100% 100%;
	    opacity: 0;
	  }
	  100% {
	    transform: rotate(0);
	    transform-origin: 100% 100%;
	    opacity: 1;
	  }
	}
	.rotate-in-2-br-cw {
		animation: rotate-in-2-br-cw 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.4s;
	}
	
	@keyframes rotate-in-2-br-cw {
		0% {
			transform: rotate(-45deg);
			transform-origin: 100% 100%;
			opacity: 0;
		}
	
		100% {
			transform: rotate(0);
			transform-origin: 100% 100%;
			opacity: 1;
		}
	}
	
	.rotate-in-top {
		animation: rotate-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}
	
	@keyframes rotate-in-top {
		0% {
			transform: rotate(-360deg);
			transform-origin: top;
			opacity: 0;
		}
		100% {
			transform: rotate(0deg);
			transform-origin: top;
			opacity: 1;
		}
	}
	
	.swipTxtTB {
		margin-top: 10rpx;
		height: 20%;
		right: 0%;
	}

	.swipTxt {
		position: absolute;
		letter-spacing: 5rpx;
		color: red;
		text-shadow: 0 0 3px #ff6e6e;
		width: 40%;
		font-size: 30rpx;
	}

	.swipTxtLR {
		top: 0%;
		height: 25%;
		left: 101%;
	}

	.sy-swiper {
		position: relative;
		box-sizing: border-box;

		.sy-swiper__operation {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			border-radius: 50%;
			background: rgba(0, 0, 0, 0.26);
			z-index: 99;

			&:active {
				filter: brightness(70%);
			}
		}

		.sy-swiper__operation.left {
			top: 50%;
			left: 10px;
			transform: translateY(-50%);
		}

		.sy-swiper__operation.right {
			bottom: 50%;
			right: 10px;
			transform: translateY(50%);
		}

		.sy-swiper__panel {
			width: 100%;
			height: 100%;
			overflow: hidden;
			position: relative;

			.sy-swiper__panel-item {
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				left: 0;

				.sy-swipContent {
					height: 100%;
					margin: 1rpx auto;
					position: relative;

					.desc {
						position: absolute;
						width: fit-content;
						padding: 10rpx 20rpx;
						box-sizing: border-box;
						border-radius: 10px;
						font-weight: 400;
						line-height: 32rpx;
						text-transform: none;
					}
				}

				.LR-content {
					width: 70%;

					.slide {
						height: 99%;
						width: 100%;
						border-radius: 20rpx;
					}

					.slide2 {
						height: 100%;
						width: 100%;
						margin-left: 50%;
					}
					.slideCenter{
						height: 100%;
						width: 100%;
					}

					.desc-lr {
						bottom: 10rpx;
					}
				}

				.TB-content {
					width: 100%;

					.slide {
						height: 70%;
						width: 100%;
						border-radius: 20rpx;
					}

					.slide2 {
						height: 25%;
						width: 40%;
						left: -15%;
					}

					.desc-tb {
						bottom: 30%;
					}
				}
			}
		}
	}

	.text {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>