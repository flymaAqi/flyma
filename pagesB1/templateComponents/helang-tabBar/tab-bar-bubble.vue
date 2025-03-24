<template>
	<view class="helang-tab-bar  ">
		<view class="placeholder" v-if="fixedBottom"></view>
		<view class="bar aqi-zx-xxl" :class="{'tabFixed':fixedBottom}">
			<view class="bulgy" :style="bulgyMove"></view>
			<view class="cu-bar tabbar buTab bg-gradual-purple-light" :class="bottomRadious?'aqi-bdr':''">
				<view class="item action" v-for="(item,index) in  tabList" :key="index" :class="[
						current === index?'active text-black':'',
						prevIndex == index?'recover':''
					]" @tap="change(index)">
					<view class="cuIcon-cu-image icon">
						<text
							:class="[current===index?item.icon:item.defaultIcon,item.text==='' && current!=index?'centerIcon':'']"
							style="font-size: 25px;"></text>
					</view>
					<view>{{item.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// 冒泡
		name: "helangTabBarBubble",
		props: {
			// 固定底部
			fixedBottom: {
				type: Boolean,
				default: true
			},
			bottomRadious: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				prevIndex: -1,
				current: 2,
				tabList: [{
						"icon": "cuIcon-homefill",
						"defaultIcon": 'cuIcon-home',
						"text": "首页"
					},
					{
						"icon": "cuIcon-deliver_fill",
						"defaultIcon": 'cuIcon-deliver',
						"text": "产品库"
					},
					{
						"icon": "cuIcon-roundaddfill",
						"defaultIcon": 'cuIcon-roundadd',
						"text": ""
					},
					{
						"icon": "cuIcon-favorfill",
						"defaultIcon": 'cuIcon-favor',
						"text": "社区"
					},
					{
						"icon": "cuIcon-emojifill",
						"defaultIcon": 'cuIcon-emoji',
						"text": "我的"
					},
				]
			};
		},
		computed: {
			bulgyMove() {
				let style = `left:${this.current/this.tabList.length*100}%`;
				return style;
			}
		},
		methods: {
			change(index) {
				if (this.current == index) return;
				this.prevIndex = this.current;
				this.current = index;
			}
		}
	}
</script>

<style lang="scss" scoped>
	// @import "./helang-flex.scss";
	@import "./tab-bar.scss";

	.centerIcon {
		transform: translateY(20rpx) scale(1.2);
	}
	.buTab{
		height: 120rpx;
		padding-top: 5px;
	}

	.helang-tab-bar {
		// 凸起
		.bulgy {
			width: 20%;
			height: 80rpx;
			overflow: hidden;
			position: absolute;
			left: 0;
			top: -30rpx;
			border-radius: 50%;
			transition: left 0.2s ease 0s;
			z-index: 0;
		}

		.item {
			height: 100rpx;
			position: relative;

			&.active {
				color: #e8c439;

				.icon {
					position: relative;
					animation: translate 0.2s ease 0.1s 1 normal;
					animation-fill-mode: forwards;

					&::before {
						content: '';
						display: block;
						position: absolute;
						top: 0;
						box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.9);
						left: 0;
						width: 100%;
						height: 100%;
						z-index: -1;
						opacity: 0;
						border-radius: 50%;
						animation: scale 0.3s ease 0.2s 1 normal;
						animation-fill-mode: forwards;
					}
				}


			}

			&.recover {
				.icon {
					animation: recover 0.3s ease 0s 1 normal;
				}
			}
		}
	}

	// 恢复默认
	@keyframes recover {
		0% {
			transform: translateY(-20rpx) scale(0.3, 0.3);
		}

		100% {
			transform: translateY(0) scale(1, 1);
		}
	}

	// 转换移动
	@keyframes translate {
		0% {
			transform: translateY(0) scale(1, 1);
		}

		100% {
			transform: translateY(-39rpx) scale(1.5, 1.5);
		}
	}

	// 圆圈缩放
	@keyframes scale {
		0% {
			transform: scale(0, 0);
			opacity: 0;
			background-color: #55ffff;
		}

		100% {
			transform: scale(0.66, 1.45);
			opacity: 0.7;
			// border: 1px solid #55ffff;
			background-color: #ffffff;
		}
	}
</style>