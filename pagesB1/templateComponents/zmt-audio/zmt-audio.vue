<template>
	<view>
		<view class="bg-white padding-bottom radius-xl" style="margin-top: 320rpx; z-index: -1; height: 960rpx">
			<view style="padding-top: 300rpx">
				<view class="text-xl text-black text-bold text-center">{{nowMusic.title}}</view>
				<view class="text-center padding-top-sm">
					<text class="text-sm text-gray text-center">{{nowMusic.desc}}</text>
				</view>
				<view class="margin-top-xl text-center text-xxxl text-black padding-top-lg">
					<text class="cuIcon-refresh padding-right-xl"></text>
					<text class="cuIcon-likefill text-red padding-lr-xl"></text>
					<text class="cuIcon-sort padding-left-xl"></text>
				</view>
				<view class="padding margin-lr margin-top-lg">
					<view class="flex" v-if="duration!=0">
						<view class="text-black padding-right-xs">{{currentTime}}</view>
						<view :class="'cu-progress round margin-top-xs xs striped ' + (innerAudioContextStatus ? 'active' : '')">
							<view class="bg-green" :style="'width:'+currentProgress+'%;'"></view>
						</view>
						<view class="text-black padding-left-xs">{{ duration }}</view>
					</view>
					<view style="transform: scale(1.2);height: 40rpx;" v-else>
						<flymaLoad />
					</view>
				</view>
				<view class="margin-top">
					<view class="flex justify-center">
						<view class="margin-right text-xxxl text-black flex align-center"><text
								class="cuIcon-backwardfill"></text></view>
						<view @tap="setPlay(true)" v-if="innerAudioContextStatus==false"
							class="cu-avatar xl round margin-lr-xl bg-oc-gray-9"><text
								class="cuIcon-playfill text-brown"></text></view>
						<view @tap="setPlay(false)" v-if="innerAudioContextStatus==true"
							class="cu-avatar xl round margin-lr-xl bg-oc-gray-9"><text
								class="cuIcon-rankfill text-brown"></text></view>
						<view class="margin-left text-xxxl text-black flex align-center"><text
								class="cuIcon-play_forward_fill"></text></view>
					</view>
				</view>
				<view class="padding-lr margin-xxl">
					<view class="radius-lg" style="
		                height: 560rpx;
		                margin-top: -1200rpx;
		                z-index: 99;
						overflow: hidden;
						box-shadow: 0rpx 50rpx 60rpx rgba(107, 159, 79, 0.2);
		                position: relative;">
						<imgLoadu load-mode="aspectFill" :loInx="0" img-url="https://image.meiye.art/pic_OWpuhnG3xf_DPrBUtIX04" />
					</view>
				</view>
			</view>
		</view>

	</view>
</template>
<script>
	import File from "./static/js/file.js"
	import imgLoadu from '../u-image/imgLoadu.vue';
	import flymaLoad from '../flyma-load/flyma-load.vue';
	import { onLoad, onUnload } from '@dcloudio/uni-app'
	export default {
		data() {
			return {
				innerAudioContext: null,
				innerAudioContextStatus: false,
				duration: 0, //总时长
				currentTime: '00:00', //当前播放时间
				currentProgress: 0, //当前进度条播放进度
			}
		},
		components:{
			imgLoadu,
			flymaLoad
		},
		props: {
			musicList: {},
			nowMusic: {
				type: Object,
				default: {
					title: '虫儿飞',
					desc: '虫儿飞,虫儿飞,你在思念谁?',
					url: 'https://h5.1ting.com/file?url=/2023/10/12/12a_ydtl/02.mp3',
					autoPlay: true, //是否自动播放
					loop: false //是否循环播放
				}
			}
		},
		mounted() {
			//初始化状态并获取音频总时长
			this.initInnerAudioContext();
		},
		// onHide() {
		// 	//进入后台暂停播放
		// 	if (this.innerAudioContext) {
		// 		this.pauseAudio(this.innerAudioContext);
		// 	}
		// },
		watch: { //监听数据变化
			nowMusic: {
				handler(item) {
					var that = this;
					this.destroyInnerAudioContext();
					setTimeout(function() {
						that.initInnerAudioContext(item);
						that.setPlay('start');
					}, 300);

				},
			},
		},
		methods: {
			//播放/暂停
			setPlay(status) {
				var that = this;
				if (status && !that.innerAudioContext) {
					this.initInnerAudioContext(); //再次检测音频是否被初始化
					that.playAudio(that.innerAudioContext);
				} else if (status && that.innerAudioContext) {

					that.playAudio(that.innerAudioContext);
				} else if (!status && that.innerAudioContext) {
					that.pauseAudio(that.innerAudioContext);
				}

				//如果播放结束，则终止播放，更改播放按钮状态
				that.innerAudioContext.onEnded(() => {
					// that.$emit('onEnded', true);
					that.destroyInnerAudioContext();
				});
				that.innerAudioContext.onTimeUpdate(() => {
					var currentTime = Math.ceil(that.innerAudioContext.currentTime);
					if (currentTime > 0) {
						// that.$emit('onTimeUpdate', that.innerAudioContext.currentTime);
						that.currentTime = this.convertSecondsToMinutesAndSeconds(currentTime);
						//计算出当前进度条播放进度
						that.currentProgress = Math.ceil((currentTime / Math.ceil(this.innerAudioContext
							.duration)) * 100);
					}

				});
			},
			//开始播放
			playAudio(innerAudioContext) {
				var that = this;
				innerAudioContext.play();
				innerAudioContext.onPlay(() => {
					// that.$emit('onPlay', true);
					that.innerAudioContextStatus = true;
				});
			},
			//暂停播放
			pauseAudio(innerAudioContext) {
				var that = this;
				innerAudioContext.pause();
				innerAudioContext.onPause(() => {
					that.$emit('onPause', true);
					that.innerAudioContextStatus = false;
				});
			},
			unloadAudio(){
				this.pauseAudio(this.innerAudioContext);
			},
			//销毁播放事件
			destroyInnerAudioContext() {
				this.innerAudioContext.stop();
				this.innerAudioContextStatus = false;
				//销毁播放事件
				this.innerAudioContext.destroy();
				this.innerAudioContext = null;
			},
			//初始化状态并获取总播放时长
			initInnerAudioContext(nowMusic = null) {
				if (!this.innerAudioContext) {
					if (nowMusic == null) {
						nowMusic = this.nowMusic;
					}
					this.innerAudioContext = uni.createInnerAudioContext();
					this.innerAudioContext.src = nowMusic.url
					this.innerAudioContext.loop = nowMusic.loop
					this.innerAudioContext.play();
				}
				const that = this
				this.innerAudioContext.onCanplay(() => {
					this.innerAudioContext.pause();
					let intervalID = setInterval(() => {
						if (that.innerAudioContext.duration != 0) {
							clearInterval(intervalID); // 清除定时器
							that.duration = that.convertSecondsToMinutesAndSeconds(parseInt(that
								.innerAudioContext
								.duration));
						}
					}, 200);
				});
			},
			//将秒数转化为分钟：秒
			convertSecondsToMinutesAndSeconds(seconds) {
				var minutes = Math.floor(seconds / 60);
				if (minutes < 10) {
					minutes = '0' + minutes;
				}
				var remainingSeconds = seconds % 60;
				if (remainingSeconds < 10) {
					remainingSeconds = '0' + remainingSeconds;
				}

				return minutes + ':' + remainingSeconds;
			},
			//下载音频
			setDownLoad(url) {
				var that = this;
				const fileDir = '/chaojiai/' //创建的文件夹名
				const root = File.root() //系统根目录
				const filePath = root + fileDir
				File.mkdirs(filePath); //创建文件夹
				//用时间戳作为文件名
				var fileName = 'chaoji' + new Date().getTime() + '.mp3';
				File.Download(url, fileName);
			}
		}
	}
</script>
<style scoped>
	.zmt-audio-play-box image {
		width: 15px;
		height: 15px;
		margin-top: 13px;
		margin-left: 2px;
	}

	.zmt-audio-play-box {
		width: 40px;
		height: 40px;
		background: rgba(0, 0, 0, 0.4);
		z-index: 30;
		text-align: center;
		line-height: 40px;
		border-radius: 50%;
		margin-left: calc((100% - 40px)/2);
		margin-top: calc((100% - 40px)/2);
	}

	/*相对定位*/
	.relative {
		position: relative;
	}

	/*绝对定位*/
	.absolute {
		position: absolute;
	}

	/*固定定位*/
	.fixed {
		position: fixed;
	}

	.zmt-progress-right image {
		width: 1.3rem;
		height: 1.3rem;
		margin-left: 10%;
	}

	.zmt-progress-right {
		width: 4.5rem;
		height: 1.5rem;
		margin-top: -.7rem;
	}

	.zmt-progress-left {
		width: calc(100% - 5rem);
		height: 1.5rem;
	}

	.zmt-download image {
		width: 50%;
		height: 50%;
	}

	.zmt-download {
		width: 3.5rem;
		height: 3.5rem;
		text-align: right;
		margin-right: .5rem;
	}

	.zmt-authors {
		width: calc(100% - 4rem);
	}

	.ellipsis {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.left {
		float: left;
	}

	.right {
		float: right;
	}

	.zmt-author {
		width: 100%;
		line-height: 1.2rem;
		color: #999;
		font-size: .8rem;
	}

	.zmt-progress {
		margin-top: .5rem;
		width: 100%;
	}

	.zmt-title {
		width: 100%;
		line-height: 1.5rem;
		color: #333;
		font-weight: bold;
		font-size: .9rem;
		float: left;
	}

	.zmt-content {
		/* width: calc(100% - 5.5rem); */
		float: left;
		height: 80%;
		margin-left: .5rem;
	}

	.zmt-audio-images {
		width: 100px;
		height: 100px;
	}

	.zmt-audio-image {
		height: 80%;
		/* aspect-ratio: 1 / 1; */
		/* margin-left: .5rem; */
		/* border-radius: 5px; */
		/* overflow: auto; */
		float: left;
	}

	.zmt-audio-box {
		width: 100%;
		height: 100%;
		background: #efefef;
	}

	/*清楚浮动*/
	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
	}
</style>