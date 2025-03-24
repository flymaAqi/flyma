<template>
	<view class="page" style="height: 100%;">
		<view style="position: absolute;">
			<tipToast ref="tips" :vsize="2000" :tipHomeObj="tips"></tipToast>
		</view>
		<flyCardPage :list="bodyList[current]" @endInx="endInx" :page-index="current" @onChange="change" @onClickImage="clickImage">
			<template #footer>
				<view class="tabs-wrapper align-center">
					<view class="tabs-item" :class="{
				  'item-left2': getShowTab[0] == index,
				  'item-left1': getShowTab[1] == index,
				  'item-current': getShowTab[2] == index,
				  'item-right1': getShowTab[3] == index,
				  'item-right2': getShowTab[4] == index,
				  'has-animation':
				    getShowTab[1] == index ||
				    getShowTab[2] == index ||
				    getShowTab[3] == index
				}" @click="swiperChangebyTag({ detail: { current: index } })" v-for="(item, index) in tabList"
						v-show="getShowTab.includes(index)" :key="index" @touchstart="handleTouchStart"
						@touchmove="handleTouchMove" @touchend="handleTouchEnd">
						<view class="item-befor">
							<text :class="item.desc" class="item-img-wrapper text-shadow text-orange text-center"></text>
						</view>
						<view class="item-text text-xl text-bold">
							{{ item.title }}
						</view>
					</view>
				</view>
			</template>
		</flyCardPage>
	</view>
</template>

<script>
	import tipToast from '../templateComponents/tipToast/tipToast.vue'
	import flyCardPage from '../templateComponents/flyCardPage/flyCardPage.vue'
	export default {
		components: {
			flyCardPage,
			tipToast
		},
		data() {
			return {
				tips:{
					type: true,
					title: '看这么多了还要看,不给看了',
					icon: 'cuIcon-flashbuyfill'
				},
				flyList: [],
				current: 0,
				bodyList: [
					[{
						title: '首页模板',
						desc: '用户首次启动时可浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/pic_fqsdojCiT71c1eVDCcs3v?imageMogr2/thumbnail/450x/interlace/1'
					},{
						image:'https://image.meiye.art/pic_OErySANY88_5sgwYg_0zF?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '登录页模板',
						desc: '用户登录或注册所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/Fv_O73hw9yJYuEihQIN0lWD5fWS8?imageMogr2/thumbnail/450x/interlace/1',
					},{
						image:'https://image.meiye.art/FhQOTLhaPo1ACuYB3ZytJOLCF9R3?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '消息列表模板',
						desc: '用于查看社交或客服消息所浏览页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/pic_D-o_OJU88Fw58VHh3o3A5?imageMogr2/thumbnail/450x/interlace/1'
					},{
						image:'https://image.meiye.art/FjtMfxoT9WG2yRR7WiUE7g-eIKtm?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '用户列表模板',
						desc: '用于查看社交名单所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/FkaecKbfz38Iif_8d7X9nSuOShY4?imageMogr2/thumbnail/450x/interlace/1'
					},{
						image:'https://image.meiye.art/FtxJNlV5aj0hCFnMevbzlfrlGrL-?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '个人中心模板',
						desc: '用于查看用户或个体信息时所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/pic_rtbm-gwTiDPTHOcu9B_Ih?imageMogr2/thumbnail/450x/interlace/1'
					},{
						image:'https://image.meiye.art/pic_0GLUfuwa7SUr4KaBj8I_F?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '音乐模板',
						desc: '用于播放音乐时所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/pic_X3iEdz_HGCq6uBStVoPZp?imageMogr2/thumbnail/450x/interlace/1',
					}],
					[{
						title: '书籍小说模板',
						desc: '用于查看书籍或小说等类别内容时所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/FmLFwcasCk8AdQVo_RKCIXRzNLlk?imageMogr2/thumbnail/450x/interlace/1',
					},{
						image:'https://image.meiye.art/Fsc2hoRcsbBFKeDUfX8AgZQCL4Y9?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '新闻资讯模板',
						desc: '用于查看新闻或当红消息等类别内容时所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/Fo_HyTiSjyaC0L-fpf4RXEI7eN3b?imageMogr2/thumbnail/450x/interlace/1',
					},{
						image:'https://image.meiye.art/FpqquGpGUNwtHNY5R_s7ugcDjmUE?imageMogr2/thumbnail/470x/interlace/1'
					}],
					[{
						title: '评论列表模板',
						desc: '用于查看评论等类别内容时所浏览的页面',
						tags: ['精简', '高性能'],
						image:'https://image.meiye.art/Fq2GZHKgSIgIdYL3-cGv4PfD5KYv?imageMogr2/thumbnail/450x/interlace/1'
					},{
						image:'https://image.meiye.art/Fnjvt-Yfz28V7herjbGLEez4YGp2?imageMogr2/thumbnail/450x/interlace/1'
					}],
					[{
						title: '当前页面同样也是一个模板',
						desc: '接下来请欣赏人间美颜',
						tags: ['可爱', '甜美','万里挑一'],
						image:'https://pic1.zhimg.com/50/v2-fc82ae5d95b116d105932e8bdf38b920_720w.jpg?source=2c26e567'
					},]
				],
				tabList: [{
						title: "首页",
						desc: "cuIcon-homefill",
						urls:[
							'./index/index02/index02',
							'./index/index01/index01'
						]
					},
					{
						title: "登录页",
						desc: "cuIcon-commandfill",
						urls:[
							'./login/login01/login01',
							'./login/login02/login02'
						]
					},
					{
						title: "消息列表",
						desc: "cuIcon-edit",
						urls:[
							'./message/message01/message01',
							'./message/message02/message02',
						]
					},
					{
						title: "用户列表",
						desc: "cuIcon-group_fill",
						urls:[
							'./userlist/userlist01/userlist01',
							'./userlist/userlist02/userlist02',
						]
					},
					{
						title: "个人中心",
						desc: "cuIcon-friendfill",
						urls:[
							'./user/user01/user01',
							'./user/user02/user02',
						]
					},
					{
						title: "音乐",
						desc: "cuIcon-musicfill",
						urls:[
							'./music/music01/music01',
						]
					},
					{
						title: "书籍小说",
						desc: "cuIcon-newshotfill",
						urls:[
							'./education/education01/education01',
							'./education/education02/education02',
						]
					},
					{
						title: "新闻资讯",
						desc: "cuIcon-upstagefill",
						urls:[
							'./news/news01/news01',
							'./news/news03/news03',
						]
					},
					{
						title: "评论列表",
						desc: "cuIcon-communityfill",
						urls:[
							'./comment/comment01/comment01',
							'./comment/comment03/comment03',
						]
					},
					{
						title: "惊鸿",
						desc: "cuIcon-camerafill",
						urls:[
							'./uitemplate/home/home'
						]
					},
				]
			}
		},
		computed: {
			getShowTab() {
				let {
					current,
					tabList
				} = this
				let len = tabList.length
				let arr = [
					current - 2 >= 0 ? current - 2 : current - 2 + len,
					current - 1 >= 0 ? current - 1 : current - 1 + len,
					current,
					current + 1 < len ? current + 1 : current + 1 - len,
					current + 2 < len ? current + 2 : current + 2 - len
				]
				return arr
			},

		},
		mounted() {
			this.bodyList[this.bodyList.length-1]=this.bodyList[this.bodyList.length-1].concat(this.testData());
		},
		methods: {
			endInx(){
				this.$refs.tips.change()
			},
			handleTouchStart(e) {
				this.touchStartX = e.touches[0].pageX
			},
			handleTouchMove(e) {
				const touchCurrentX = e.touches[0].pageX
				const touchCurrentX2 = this.touchStartX
				if (touchCurrentX < this.touchStartX && touchCurrentX > 0) { //左滑减少
					if (touchCurrentX < touchCurrentX2 - 40) {
						this.touchStartX = touchCurrentX
						this.current == this.tabList.length - 1 ? this.current = 0 : this.current += 1
					}
				} else { //右滑增加
					if (touchCurrentX > touchCurrentX2 + 40) {
						this.touchStartX = touchCurrentX
						this.current == 0 ? this.current = this.tabList.length - 1 : this.current -= 1
					}
				}

			},
			handleTouchEnd(e) {
				// 清空触摸起始位置
				this.touchStartX = null
			},
			swiperChangebyTag(e) {
				this.current = e.detail.current
			},
			change(data) {//滑动图片
				var cx = data.currentIndex
				var mcu = this.current
				this.bodyList[mcu][cx].x=0
				this.bodyList[mcu][cx].y=0
			    
			},
			clickImage(data) {//点击图片
				uni.navigateTo({
					url:this.tabList[this.current].urls[data.currentIndex]
				})
				
			},
			testData() {
				const arr = []
				/* 测试数据*/
				const imgs = [
					"https://pic1.zhimg.com/50/v2-fc82ae5d95b116d105932e8bdf38b920_720w.jpg?source=2c26e567",
					"https://picx.zhimg.com/50/v2-2ff9dc184a4fa00fa1e0c493013d8d13_720w.jpg?source=2c26e567",
					"https://picx.zhimg.com/50/v2-a4b356c00dfc7c92c5b69d533e99aa8f_720w.jpg?source=2c26e567",
					"https://picx.zhimg.com/50/v2-ad949fa892116bd98fa02968fb517dd5_720w.jpg?source=2c26e567",
					"https://picx.zhimg.com/50/v2-94d1226578c67f8f25893b5972acaa43_720w.jpg?source=2c26e567",
					'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0704%2Fc7a27a1ej00qvpu700019c000hs00vlc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
					'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0704%2F9f81e6aaj00qvpu70001xc000hs00vmc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
					'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0704%2F55bf2cb3j00qvpu70002cc000hs012jc.jpg&thumbnail=660x2147483647&quality=80&type=jpg',
					'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0704%2F2017725bj00qvpu70001jc000hs00zxc.jpg&thumbnail=660x2147483647&quality=80&type=jpg'
				]
				//高性能随机数
				var ranNum = 5;
				for (var i = 0; i < ranNum; i++) {
				    var ran = Math.floor(Math.random() * (imgs.length - i));
					let data = {
						image: imgs[ran]
					}
				    arr.push(data)
				    imgs[ran] = imgs[imgs.length - i - 1];
				};
				return arr
			}
		}
	}
</script>


<style lang="scss" scoped>
	.page{
		width: 100%;
	}
	.tabs-wrapper {
		position: absolute;
		// bottom: 0;
		margin-top: -12% !important;
		width: 100%;
		display: flex;
		box-sizing: border-box;


		.tabs-item {
			position: absolute;
			transform: translate3d(0, 0, 0);
			display: flex;
			opacity: 0;
			flex-direction: column;

			.item-img-wrapper {
				font-size: 50px;
			}
			.item-befor{
				width: 150rpx;
				height: 120rpx;
				overflow: hidden;
				text-align: center;
				&::before {
					content: '';
					display: block;
					position: absolute;
					top: 0;
					box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.6);
					left: 0;
					width: 100%;
					height: 100%;
					z-index: -1;
					opacity: 0.7;
					border-radius: 50%;
					animation: scale 0.3s ease 0.2s 1 normal;
					animation-fill-mode: forwards;
				}
			}

			.item-text {
				position: relative;
				margin-top: -20rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
			}

			&.has-animation {
				transition: all 0.3s;
			}

			&.item-left2 {
				opacity: 0.3 !important;
				transform: translate3d(10rpx, 0, 0) scale3d(0.7, 0.7, 0.7);
			}

			&.item-left1 {
				opacity: 0.6 !important;

				transform: translate3d(140rpx, 0, 0) scale3d(0.85, 0.85, 0.85);
			}

			&.item-current {
				opacity: 1 !important;
				transform: translate3d(300rpx, 0, 0);
			}

			&.item-right1 {
				opacity: 0.6 !important;
				transform: translate3d(460rpx, 0, 0) scale3d(0.85, 0.85, 0.85);
			}

			&.item-right2 {
				opacity: 0.3 !important;
				transform: translate3d(590rpx, 0, 0) scale3d(0.7, 0.7, 0.7);
			}
		}
	}
</style>