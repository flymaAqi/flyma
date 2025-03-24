<template>
	<view style="height: 100%;min-height: 0;">
		<comNavTab ref="comNav" :copy-show="false" csTit="半成品索引列表页面">
			<scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-' + listCurID" style="height: 92vh"
				:scroll-with-animation="true" :enable-back-to-top="true">
				<block v-for="(item, index) in list" :key="index">
					<view :class="'padding indexItem-' + list[index]" :id="'indexes-' + list[index]"
						:data-index="list[index]">{{ list[index] }}</view>

					<view class="cu-list menu-avatar no-padding bg-white">
						<view class="cu-item" v-for="(item, sub) in 2" :key="sub">
							<image class="cu-avatar radius lg" :src="imgs[sub]" mode="aspectFill"></image>
							<view class="content">
								<view class="text-black">
									<text class="text-Abc text-xl">{{ list[index] }}imine</text>
								</view>
								<view class="text-gray text-sm">+ 056 5650 7031</view>
							</view>
						</view>
					</view>
				</block>
			</scroll-view>

			<view class="indexBar" style="height: 100vh">
				<view class="indexBar-box" @touchstart="tStart" @touchend="tEnd" @touchmove.stop.prevent="tMove">
					<view class="indexBar-item" :id="index" @touchstart="getCur" @touchend="setCur"
						v-for="(item, index) in list" :key="index">{{ list[index] }}</view>
				</view>
			</view>

			<!-- 选择显示 -->
			<view v-if="!hidden" class="indexToast">
				{{ listCur }}
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	export default {
		components:{
			comNavTab
		},
		data() {
			return {
				imgs:[
					'/pagesB1/static/seeyou.jpg',
					'/pagesB1/static/ouBu.jpg'
				],
				hidden: true,
				list: '',
				listCur: '',
				boxTop: '',
				barTop: '',
				listCurID: '',
				movableY: '',
				sub: ''
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
			let list = [];
			for (let i = 0; i < 26; i++) {
				list[i] = String.fromCharCode(65 + i);
			}
			this.list = list
			this.listCur = list[0]
		},
		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady() {
			let that = this;
			uni.createSelectorQuery()
				.in(uni)
				.select('.indexBar-box')
				.boundingClientRect(function(res) {
					that.boxTop = res.top
				})
				.exec();
			uni.createSelectorQuery()
				.in(uni)
				.select('.indexes')
				.boundingClientRect(function(res) {
					that.barTop = res.top
				})
				.exec();
		},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			//获取文字信息
			getCur(e) {
				this.hidden = false
				this.listCur = this.list[e.target.id]
			},

			setCur(e) {
				this.hidden = true
				this.listCur = this.listCur
			},

			//滑动选择Item
			tMove(e) {
				let y = e.touches[0].clientY;
				let offsettop = this.boxTop;
				let that = this; //判断选择区域,只有在选择区才会生效
				if (y > offsettop) {
					let num = parseInt((y - offsettop) / 20);
					this.listCur = that.list[num]
				}
			},

			//触发全部开始选择
			tStart() {
				this.hidden = false
			},

			//触发结束选择
			tEnd() {
				this.hidden = true
				this.listCurID = this.listCur
			},

			indexSelect(e) {
				let that = this;
				let barHeight = this.barHeight;
				let list = this.list;
				let scrollY = Math.ceil((list.length * e.detail.y) / barHeight);
				for (let i = 0; i < list.length; i++) {
					if (scrollY < i + 1) {
						that.listCur = list[i]
						that.movableY = i * 20
						return false;
					}
				}
			}
		}
	};
</script>
<style>
	.indexes {
		position: relative;
	}

	.indexBar {
		position: fixed;
		right: 0px;
		bottom: 0px;
		padding: 20rpx 20rpx 20rpx 60rpx;
		display: flex;
		align-items: center;
	}

	.indexBar .indexBar-box {
		width: 40rpx;
		height: auto;
		background: #fff;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
	}

	.indexBar-item {
		flex: 1;
		width: 40rpx;
		height: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24rpx;
		color: #888;
		line-height: 36rpx;
	}

	movable-view.indexBar-item {
		width: 40rpx;
		height: 40rpx;
		z-index: 9;
		position: relative;
	}

	movable-view.indexBar-item::before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 10rpx;
		height: 20rpx;
		width: 4rpx;
		background-color: #f37b1d;
	}

	.indexToast {
		position: fixed;
		top: 0;
		right: 80rpx;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		width: 100rpx;
		height: 100rpx;
		border-radius: 10rpx;
		margin: auto;
		color: #fff;
		line-height: 100rpx;
		text-align: center;
		font-size: 48rpx;
	}
</style>