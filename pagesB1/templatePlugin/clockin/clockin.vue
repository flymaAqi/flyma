<template>
	<view style="height: 100%">
		<comNavTab csTit="打卡">
			<view class="bg-white margin-sm radius-lg" style="min-height: 86vh">
				<!-- 顶部个人信息-头像、布局 -->
				<view class="flex padding-sm justify-between solid-bottom">
					<view class="flex">
						<view class="padding-lr-xs">
							<image mode="aspectFill" class="cu-avatar lg round" src="../../static/tiandao.jpg"></image>
						</view>
						<view class="padding-xs text-xl text-black">
							<view>甲斗</view>
							<view class="text-sm text-gray padding-top-xs">火星朝阳区三里屯店</view>
						</view>
					</view>
					<view class="text-gray text-sm padding-right padding-top-sm">工号：1000200000</view>
				</view>
				<!-- 打卡信息-时间轴 -->
				<view class="margin-sm margin-top">
					<view class="text-gray padding-bottom">打卡信息：</view>
					<view class="cu-timeline">
						<view class="cu-item cur cuIcon-noticefill" :class="status != 0?'text-blue':''">
							<view class="content bg-blue light shadow-blur" v-if="status != 0">
								<text class="cuIcon-time">{{ now_time_stop }}</text>
								<view class="cuIcon-location padding-top-xs">{{current_address}}</view>
							</view>
							<view class="content bg-gray shadow-blur" v-else>
								<text class="text-orange">上班未打卡</text>
							</view>
						</view>
						<view class="cu-item cur cuIcon-noticefill" :class="status === 3?'text-blue':''">
							<view class="content bg-blue light shadow-blur" v-if="status === 3">
								<text class="cuIcon-time">{{ now_time_stop_end }}</text>
								<view class="cuIcon-location padding-top-xs">{{current_address}}</view>
							</view>
							<view class="content bg-gray shadow-blur" v-else>
								<text class="text-orange">下班未打卡</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 打卡按钮 -->
				<view class="margin-top-xl">
					<view class="flex justify-center">
						<view class="cu-clockin-time flex justify-center align-center" :animation="animationData"
							@tap.stop.prevent="clockInStart" v-if="status == 0">
							<view class="text-white" style="z-index: 99">
								<text>上班打卡 {{ now_time }}</text>
							</view>
						</view>
						<view class="cu-clockin-time_over flex justify-center align-center"
							@tap.stop.prevent="clockInStart" v-if="status == 1">
							<text class="text-white" style="z-index: 99">已打卡 {{ now_time_stop }}</text>
						</view>
						<view class="cu-clockin-time flex justify-center align-center" :animation="animationData"
							@tap.stop.prevent="clockInEnd" v-if="status == 2">
							<text class="text-white" style="z-index: 99">下班打卡 {{ now_time }}</text>
						</view>
						<view class="cu-clockin-time_over flex justify-center align-center"
							@tap.stop.prevent="clockInStart" v-if="status == 3">
							<text class="text-white" style="z-index: 99">已打卡 {{ now_time_stop_end }}</text>
						</view>
					</view>
					<view class="margin-tb padding-tb flex justify-center align-center">
						当前位置：
						<text class="cuIcon-location">{{ current_address }}</text>
						<text class="padding-left text-orange" @tap="getUserLocation">刷新</text>
					</view>
				</view>
				<button class="" type="warn" style="width: 70%;" @tap="chooseLocation">作弊神器(自选位置)</button>
			</view>
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
				now_time: '',
				current_address: '北京朝阳三里屯店',
				status: 0,
				//0---》上班未打卡 1----》上班已打卡 2-----下班未打卡》
				now_time_stop: '',
				//已打卡时间
				now_time_stop_end: '',
				//下班已打卡时间
				animationData: '' //打卡动画栈
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
			this.getCurrentTime();
			this.getUserLocation();
			this.now_time = this.getTime()
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			clockInStart() {
				this.clinkInStart(1)
			},
			// 上班打卡
			clinkInStart(x) {
				uni.vibrateShort({
				  success: () => {
				  },
				})
				// uni.vibrateLong(); //使手机震动400m
				let animationData = uni.createAnimation({
					timingFunction: 'ease-in',
					duration: 800
				});
				animationData.rotateY(180).step();

				this.animationData = animationData.export()
				// 导出动画栈
				setTimeout(() => {
					this.status = x
					//上班已打卡
					this.now_time_stop = this.getTime()
					setTimeout(() => {
						animationData.rotateY(0).step();
						this.animationData = animationData.export()
						this.status = x != 3 ? 2 : 3
					}, 3000)
				}, 1000)
			},

			// 下班打卡
			clockInEnd() {
				this.clinkInStart(3)
				uni.vibrateLong({
				  success: () => {
				  },
				})
				//上班已打卡
				this.now_time_stop_end = this.now_time
			},

			getCurrentTime: function() {
				var time = setInterval(() => {
					this.now_time = this.getTime()
				}, 1000);
			},

			getTime() {
				let dateTime = '';
				let hh = new Date().getHours();
				let mf = 0
				let ss = '0'
				if (new Date().getMinutes() < 10) {
					mf = '0' + new Date().getMinutes();
				} else {
					mf = new Date().getMinutes();
				}
				if (new Date().getSeconds() < 10) {
					ss = '0' + new Date().getSeconds();
				} else {
					ss = new Date().getSeconds();
				}
				dateTime = hh + ':' + mf + ':' + ss;
				return dateTime;
			},
			// 手动选点
			chooseLocation() {
				uni.chooseLocation({
					success: res => {
						const kms = methodJisuan(this.MyW, this.MyJ, res.latitude, res.longitude);
						this.kmAndM = kms
						if (this.kmAndM.km < 11) {
							this.userAddress.wsLatitude = res.latitude + ''; //维度
							this.userAddress.wsLongitude = res.longitude + ''; //经度
							this.userAddress.wsAddressComple = res.address; //中文地址
							this.userAddress.wsAddressJuti = res.name; //具体名称
						} else {
							this.$refs['showToast'].error('地址限制在10公里内!');
						}
					},
					fail: (res) => {
					},
					complete() {
					}
				});
			},
			// 获取当前的地址
			getUserLocation: function() {
				uni.showLoading({
					mask:true
				})
				this.current_address = ''
				let that = this;
				uni.getLocation({
					// #ifdef H5
					type: 'wgs84',
					// #endif
					// #ifndef H5
					type: 'gcj02', // 使用的坐标系类型
					// #endif
					geocode: true, // 是否返回地址信息
					success: (res) => {
						var latitude = parseFloat(res.latitude); // 纬度
						var longitude = parseFloat(res.longitude); // 经度
						uni.request({
							url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${encodeURIComponent(latitude)},${encodeURIComponent(longitude)}&key=O6QBZ-77ICX-HGE4V-ZSAV2-RUKR2-LPBED&get_poi=1`,
							method: 'GET',
							success: (res) => {
								this.current_address = res.data.result.address
							}
						})
					},
					fail: (res) => {
						uni.showToast({
							title: '获取位置信息失败',
							icon: 'none'
						});
					},
					complete:()=>{
						uni.hideLoading()
					}
				})
			},
		}
	};
</script>
<style>
</style>