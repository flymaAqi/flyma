<template>
	<view style="height: 100%">
		<comNavTab csTit="瀑布流">
			<view class="cu-waterfall bg-white padding-bottom-xl">
				<view class="flex-sub">
					<view class="cu-card case margin-top-sm padding-left-sm" v-for="(item, index) in leftData" :key="index">
						<view class="cu-item">
							<view class="image" style="width: 100%;height: 100%;">
								<imgLoadu load-mode="widthFix" :img-url="item.image" />
							</view>
						</view>
					</view>
				</view>
				<view class="flex-sub">
					<view class="cu-card case margin-top-sm padding-lr-sm" v-for="(item, index) in rightData" :key="index">
						<view class="cu-item">
							<view class="image" style="width: 100%;height: 100%;">
								<imgLoadu load-mode="widthFix" :img-url="item.image" />
							</view>
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
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
	import {
		kehuan
	} from '@/common/commonData.js'
	export default {
		components: {
			imgLoadu,
			comNavTab,
			ComTitle
		},
		data() {
			return {
				leftHeight: 0,
				rightHeight: 0,
				leftInx: 0,
				rightInx: 0,
				leftData: [
					{
						title: '瀑布流示例3',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},],
				rightData: [
					{
						title: '瀑布流示例2',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例3',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: '7'
					},],
				orgData: [{
						title: '瀑布流示例1',
						name: 'WaterFall',
						image: kehuan[0]
					},
					{
						title: '瀑布流示例2',
						name: 'WaterFall',
						image: kehuan[1]
					},
					{
						title: '瀑布流示例3',
						name: 'WaterFall',
						image: kehuan[2]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[3]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[4]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[5]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[6]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[7]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[8]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[9]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[10]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[11]
					},
					{
						title: '瀑布流示例4',
						name: 'WaterFall',
						image: kehuan[12]
					}
				]
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
			this.create(this.orgData);
		},
		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload() {
			this.leftHeight = 0;
			this.rightHeight = 0;
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			async create(data) {
				let promiseArr = [];
				let that = this
				for (let i in data) {
					let p = await new Promise((resolve, reject) => {
						uni.getImageInfo({
							src: data[i].image,
							complete: (res) => {
								let proportion = res.height / res.width;
								data[i].height = 375 * proportion;
								that.sort(data[i]);
								resolve(data[i]);
							}
						});
					});
					// promiseArr.push(p);
				}
				// Promise.all(promiseArr).then((res) => {
				// 	this.sort(res);
				// 	this.leftData = leftData
				// 	this.rightData = rightData
				// });
			},

			sort(data) {
				if (this.leftHeight <= this.rightHeight) {
					this.leftHeight += data.height;
					if(this.leftInx<5){
						this.leftData[this.leftInx]=data;
					}else{
						this.leftData.push(data);
					}
					this.leftInx+=1
					
				} else {
					this.rightHeight += data.height;
					if(this.rightInx<6){
						this.rightData[this.rightInx]=data;
					}else{
						this.rightData.push(data);
					}
					this.rightInx+=1
				}
			}
		}
	};
</script>
<style>
</style>