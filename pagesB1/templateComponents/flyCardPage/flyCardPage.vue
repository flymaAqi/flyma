<template>
	<view class="tantan-slide" :style="{
		width: winWidth + 'px',
		height: winHeigh + 'px',
	}">
		<!-- 下方喜欢和不喜欢按钮 -->
		<view class="tantan-slide-footer">
			<slot name='footer' v-if='$slots.footer'></slot>
			<view v-if='!$slots.footer' class="tantan-slide-footer-btn" @click="footerBtnClick('dislike')">
				<view class="tantan-slide-footer-icon" :style="{
					backgroundColor: '#f8ba35',
					opacity: dislike,
					zIndex: 1
				}">
					<image style="width: 50rpx;height: 50rpx;" src="/static/tabbar/aqiA1.png">
					</image>
				</view>
				<view class="tantan-slide-footer-icon">
					<image style="width: 50rpx;height: 50rpx;" src="/static/tabbar/aqiA2.png"></image>
				</view>
			</view>
			<view v-if='!$slots.footer' class="tantan-slide-footer-btn" @click="footerBtnClick('love')">
				<view class="tantan-slide-footer-icon" :style="{
					backgroundColor: '#fa547c',
					opacity: love, 
					zIndex: 1
				}">
					<image style="width: 50rpx;height: 50rpx;" src="/static/tabbar/aqiA5.png">
					</image>
				</view>
				<view class="tantan-slide-footer-icon">
					<image style="width: 50rpx;height: 50rpx;" src="/static/tabbar/aqiB3.png"></image>
				</view>
			</view>
		</view>
		<view class="swipGs"></view>
		<view @touchstart.capture="touchStart($event,currentIndex)"
			@touchmove.stop.capture="touchMove($event,currentIndex)" @touchend.capture="touchEnd(currentIndex)"
			class="tantan-slide-box">
			<template v-for="(item, index) in list" :key="index">
				<view  class="tantan-slide-box-item"
					@click.stop="clickImage" :style="[cardTransform(item, index),{'opacity':index<currentIndex?0:1}]"
					:class="currentIndex === index?'':'flyFill'">
					<!-- 这里必须重复写一个模糊,小程序ios端的破bug,纯sbyy -->
					<view :class="currentIndex === index?'':'flyFill'" :style="{'opacity':index<currentIndex?0:1}" class="tantan-slide-direction">
						<uImage :key="index+'k'" :src="item.image" :width="winWidth + 'px'" :height="winHeigh + 'px'">
							<template v-slot:loading>
								<view style="transform: scale(2);">
									<flymaLoad :load-inx="0"/>
								</view>
							</template>
							<template #error>
								<view class="flex flex-column align-center">
									<text class="cuIcon-infofill text-red"></text>
									<text v-text="'图片加载出错了!'" />
								</view>
							</template>
						</uImage>
						<view class="tantan-slide-box-item-bg" v-if="index===0">
							<view class="cu-list menu">
								<view class="cu-item flyTip">
									<view class="heartbeat">
										<text class="cuIcon-pullleft  text-blue margin-left flyicon"></text>
										<view class="text-black text-sm">
											可左滑飞走
										</view>
									</view>
									<view class="text-right heartbeat margin-right">
										<text class="cuIcon-pullright text-blue margin-right flyicon"></text>
										<view class="text-sm text-blue">
											来右滑飞走
										</view>
									</view>
								</view>
							</view>
							<view class="tantan-slide-box-info">
								<view class="text-xxl text-black text-bold" v-if="list[0].title"
									v-text="list[0].title"></view>
								<view class="desc text-lg bg-gradual-blue-light text-bold" v-if="list[0].desc"
									v-text="list[0].desc"></view>
								<view class="tags" v-if="list[0].tags && list[0].tags.length > 0">
									<text class="tag bg-gradual-pink-light" v-for="(item1, index1) in list[0].tags"
										:key="index1" v-text="item1"></text>
								</view>
							</view>
						</view>
					</view>
					
					<!-- 上方不喜欢和喜欢图标 -->
					<view v-if="index === currentIndex">
						<view class="tantan-slide-box-icon tantan-slide-box-dislike" :style="{
								opacity: dislike * 1.5,
								transform: 'scale('+ (dislike + 1 > 2 ? 2 : dislike + 1 )  +')',
							}">
							<view class="cuIcon-likefill text-red text-center"
								style="width: 100%;;font-size: 30px;"></view>
						</view>
						<view class="tantan-slide-box-icon tantan-slide-box-love" :style="{
								opacity: love * 1.5,
								transform: 'scale('+ (love + 1 > 2 ? 2 : love + 1 )  +')',
							}">
							<text class="cuIcon-evaluate_fill text-red text-center"
								style="width: 100%;;font-size: 30px;"></text>
						</view>
					</view>
				</view>
			</template>

		</view>
	</view>
</template>

<script>
	import flymaLoad from '../flyma-load/flyma-load.vue';
	import uImage from '../u-image/u-image.vue'
	export default {
		name: 'tantan',
		components: {
			uImage,
			flymaLoad
		},
		props: {
			list: {
				type: Array,
				default: () => []
			},
			visible: {
				type: Number,
				default: 5
			},
			loadIndex: {
				type: [Number, String],
				default: 1
			},
			pageIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				winWidth: 0,
				winHeigh: 0,
				/*记录x y轴*/
				x: {
					start: 0,
					move: 0,
					end: 0
				},
				y: {
					start: 0,
					move: 0,
					end: 0
				},
				/*下标*/
				currentIndex: 0,
				/*滑动*/
				swipering: false,
				/*滑动中*/
				slideing: false,
				love: 0,
				dislike: 0,
				direction: '',
				animationData: {}
			}
		},
		mounted() {
			const res = uni.getSystemInfoSync()
			this.winWidth = res.screenWidth
			this.winHeigh = res.screenHeight
		},
		watch: {
			pageIndex: function() {
				this.currentIndex = 0
			}
		},
		methods: {
			cardTransform(item, index) {
				let len = this.list.length
				let css = {
					'zIndex': len - index,
					'transform': 'rotate(' + ((item.x || 0) / 30) + 'deg) translate3d(' + (item.x || 0) + 'px,' + (item
						.y || 0) + 'px, ' + 0 + 'px)'
				}
				css['transitionDuration'] = !this.swipering ? '600ms' : '0ms';
				return css
			},
			touchStart(e, index) {
				if (this.slideing || this.list.length == this.currentIndex) {
					return
				};
				if (typeof this.list[index].x === 'undefined' && typeof this.list[index].y === 'undefined') {
					this.$set(this.list[index], 'y', 0)
					this.$set(this.list[index], 'x', 0)
				}
				this.swipering = true
				this.x.start = Number.parseInt(e.touches[0].pageX)
				this.y.start = Number.parseInt(e.touches[0].pageY)
			},
			touchMove(e, index) {
				if (this.slideing || this.list.length == this.currentIndex) {
					return
				}
				this.x.move = Number.parseInt(e.touches[0].pageX)
				this.y.move = Number.parseInt(e.touches[0].pageY)
				this.list[index].x = this.x.move - this.x.start
				this.list[index].y = this.y.move - this.y.start
				if (Number.parseInt(this.list[index].x) > 0) {
					this.love = Number.parseInt(this.list[index].x) / (100 * 2)
				} else {
					this.dislike = Math.abs(Number.parseInt(this.list[index].x) / (100 * 2))
				}
			},
			endAndImg(index, endFor) {
				this.list[index].x = 0
				this.list[index].y = 0
				this.slideing = false
				this.love = 0
				this.dislike = 0
				if (endFor) {
					if(this.pageIndex!==9){
						this.currentIndex = 0
					}else{
						this.$emit('endInx')
					}
				}
			},
			touchEnd(index) {
				if (this.slideing || ((this.list.length - 1) - this.currentIndex < Number(this.loadIndex))) {
					//判断超过边界就刷新从头开始否则回到原位置
					this.loadIndex === 1 &&
						this.list[index].x < -this.winWidth / 2 + this.winWidth / 5 ||
						this.list[index].x > this.winWidth / 2 - this.winWidth / 5 ? this.endAndImg(index, true) :
						undefined
					// this.$emit('load', this.currentIndex)
				}
				this.swipering = false
				if (
					this.list[index].x > 0 &&
					this.list[index].x > this.winWidth / 2 - this.winWidth / 5
				) {
					this.touchEndNext(index)
				} else if (
					this.list[index].x < 0 &&
					this.list[index].x < -this.winWidth / 2 + this.winWidth / 5
				) {
					this.touchEndNext(index)
				} else {
					this.endAndImg(index, false)
				}
			},
			touchEndNext(index) {
				this.slideing = true
				this.list[index].x = this.list[index].x * 5
				this.list[index].y = this.list[index].y * 5
				this.touchEndDone()
			},
			touchEndDone() {
				return new Promise(resolve => {
					setTimeout(() => {
						this.slideing = false
						this.$emit('onChange', {
							currentIndex: this.currentIndex,
							currentItem: this.list[this.currentIndex],
							type: this.love !== 0 ? 'love' : 'dislike'
						})
						this.currentIndex++
						this.x.move = 0
						this.y.move = 0
						this.slideing = false
						this.btnClickType = false
						this.love = 0
						this.dislike = 0
						resolve()
					}, 200)
				})
			},
			footerBtnClick(type) {
				if (((this.list.length - 1) - this.currentIndex < Number(this.loadIndex))) {
					if (this.loadIndex === 1) {
						this.list[index].x = 0
						this.list[index].y = 0
						this.slideing = false
						this.love = 0
						this.dislike = 0
					}
					this.$emit('load', this.currentIndex)
				}

				if (this.btnClickType) {
					return
				}
				if (this.list.length == this.currentIndex) {
					this.$emit('onChange', {
						currentIndex: this.currentIndex,
						currentItem: null,
						type: this.love !== 0 ? 'love' : 'dislike'
					})
					return
				}

				this.btnClickType = true
				let w = 0
				if (type === 'love') {
					w = this.winWidth * 1.5
					this.love = 1
				} else if (type === 'dislike') {
					w = -this.winWidth * 1.5
					this.dislike = 1
				}
				this.$set(this.list[this.currentIndex], 'x', w)
				this.touchEndDone()
			},
			clickImage(e) {
				this.direction = this.winWidth / 2 > e.detail.x ? 'left' : 'right'
				/*#ifdef APP-PLUS || H5*/

				let animation = uni.createAnimation({
					transformOrigin: 'bottom',
					duration: 500,
					timingFunction: 'ease',
				})

				this.animation = animation

				this.animation.rotateZ(this.direction === 'left' ? -3 : 3).scale(0.95).step().rotateZ(this.direction ===
					'left' ? 0 : 0).scale(1).step()
				this.animationData = animation.export()

				setTimeout(function() {
					this.animation.rotateY(0).step()
					this.animationData = animation.export()
				}.bind(this), 300)
				/*#endif*/
				this.$emit('onClickImage', {
					type: 'click',
					currentIndex: this.currentIndex,
					currentItem: this.list[this.currentIndex],
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	
	@import url("../../commonB1/animation.css");

	.flyFill {
		filter: blur(20rpx);
	}

	.flyOpti {
		opacity: 0;
	}

	.swipGs {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 190rpx;
		z-index: 9;
		backdrop-filter: blur(7rpx);
		-webkit-backdrop-filter: blur(8rpx);
		// color: rgb(255, 255, 255);
		transform: translateZ(0);
		background-image: linear-gradient(to bottom, transparent, rgba(85, 255, 255, 0.5) 90%);
	}

	.tantan-slide {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.tantan-slide-box {
		position: relative;
		width: 100%;
		height: 100%;
		perspective: 2100rpx;
		perspective-origin: 50% -30%;
		transform-style: preserve-3d;
		margin: auto;
	}

	.tantan-slide-box-item {
		transform-style: preserve-3d;
		display: flex;
		width: 100%;
		height: 100%;
		border-radius: 24rpx;
		position: absolute;
		// opacity: 0;
		transform: translate3d(0px, 0px, 0px) rotate(0deg);
		transition: 300ms;
		color: #fff;
	}

	.tantan-slide-box-item.on {
		display: block;
	}

	.tantan-slide-box-item-bg {

		height: 460rpx;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 1;

		.flyTip {
			position: absolute;
			width: 100%;
			top: -50%;
			background-color: rgba(255, 255, 255, 0);

			.flyicon {
				font-size: 60rpx;
				opacity: 0.7;
			}
		}

	}

	.tantan-slide-box-icon {
		position: absolute;
		width: 70rpx;
		height: 70rpx;
		top: 45rpx;
		border-radius: 100%;
		background-color: #fff;
		z-index: 1;
		opacity: 0;
		transition: 100ms;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tantan-slide-box-love {
		left: 50rpx;
	}

	.tantan-slide-box-dislike {
		right: 50rpx;
	}

	.tantan-slide-footer {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 9999;
		padding: 30rpx 0;
		display: flex;
		justify-content: center;
	}

	.tantan-slide-footer-btn {
		height: 96rpx;
		width: 180rpx;
		margin: 0 16rpx;
		border-radius: 50rpx;
		display: flex;
		justify-content: center;
		align-content: center;
		position: relative;
		transition: 100ms;
	}

	.tantan-slide-footer-btn:active {
		transform: scale(0.9);
	}

	.tantan-slide-footer-icon {
		width: 100%;
		height: 100%;
		border-radius: 50rpx;
		transition: 200ms;
		background-color: rgba(158, 158, 158, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}

	.tantan-slide-img {
		position: relative;
		will-change: transform;
		width: 100%;
		height: 100%;
		/* border-radius: 40rpx; */
	}

	.tantan-slide-img.on {
		transform: scale(1);
		width: 50rpx;
		height: 50rpx;
	}

	.tantan-slide-box-info {
		padding: 0 32rpx;

		color: #ffffff;
	}

	.tantan-slide-box-info .desc {
		width: fit-content;
		line-height: 1.2;
		margin-top: 30rpx;
		// padding: 5rpx;
	}

	.tantan-slide-box-info .tags {
		margin-top: 24rpx;
	}

	.tantan-slide-box-info .tag {
		height: 48rpx;
		font-size: 27rpx;
		padding: 0 16rpx;
		margin-left: 10rpx;
		border-radius: 10rpx;
	}

	.tantan-slide-direction {
		width: 100%;
		height: 100%;
	}
</style>