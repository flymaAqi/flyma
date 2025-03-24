<template>
	<view style="height: 100%">
		<comNavTab csTit="轮播">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
			tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧.//轮播后续会直接更新封装好的组件,敬请期待吧!"
			next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<ComTitle titleTxt="全屏限高轮播"/>
			<swiper class="square-dot" style="height: 200px;" :indicator-dots="true" :circular="true" :autoplay="true"
				interval="5000" duration="500">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<imgLoadu :load-mode="true?'widthFix':'aspectFill'" :img-url="item.url" />
				</swiper-item>
			</swiper>
			<ComTitle titleTxt="常规限高轮播"/>
			<swiper class="margin round-dot" :indicator-dots="true" style="height: 200px;"
				:circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item class="radius" v-for="(item, index) in swiperList" :key="index">
					<imgLoadu load-mode="aspectFill" :img-url="item.url" />
				</swiper-item>
			</swiper>
			<ComTitle titleTxt="卡片式轮播"/>
			<swiper class="card-swiper round-dot" :indicator-dots="true"
				:circular="true" @change="cardSwiper" previousMargin="0.01rpx" indicator-color="#8799a3"
				indicator-active-color="#0081ff">
				<swiper-item :class="cardCur == index ? 'cur' : ''" v-for="(item, index) in swiperList" :key="index">
					<view class="swiper-item">
						<imgLoadu load-mode="aspectFill" :img-url="item.url" />
					</view>
				</swiper-item>
			</swiper>
			<ComTitle titleTxt="高斯+渐隐">
				<template #rB>
					<button class="aqi-xbt" @click="swBsGb">
						更换幻术<text class="cuIcon-lightfill"/>
					</button>
				</template>
			</ComTitle>
			<view class="margin-xs">
				<AniSwiperImg :swiperBS="swBs"></AniSwiperImg>
			</view>
			<ComTitle titleTxt="堆叠式轮播"/>
			<view class="tower-swiper" @touchmove="towerMove" @touchstart="towerStartFun" @touchend="towerEnd">
				<view :class="'tower-item ' + (item.zIndex == 1 ? 'none' : '')"
					:style="'--index:' + item.zIndex + ';--left:' + item.mLeft" v-for="(item, index) in swiperListT"
					:key="index">
					<view class="swiper-item">
						<imgLoadu load-mode="aspectFill" :img-url="item.url" />
					</view>
				</view>
			</view>
			<ComTitle titleTxt="3D轮播"/>
			<swiper class="swiper-3d" :current="swiperCurrent" circular previous-margin="120rpx" next-margin="120rpx"
				@animationfinish="swiperChange" :circular="true" :autoplay="true" interval="5000" duration="500">
				<swiper-item class="item" :wx:index="index" v-for="(item, index) in swiperList" :key="index">
					<view style="width: 100%;height: 100%;" :class="swiperCurrent == index ? 'active' : 'no-active'">
						<imgLoadu load-mode="aspectFill" :img-url="item.url" />
					</view>
					
				</swiper-item>
			</swiper>
			<ComTitle titleTxt="超·3D轮播">
				<template #rB>
					<button class="aqi-xbt" @click="swip3DBX">
						点击变形<text class="cuIcon-lightfill"/>
					</button>
				</template>
			</ComTitle>
			<view class="margin-xs">
				<lrCenterRbSwiper v-if="swip3DH===0" height="500rpx" :showCenterImage="true" :images="images2"
					:current="0" :interval="3000"><!-- @click="clickHandler" @change="changeHandler" -->
				</lrCenterRbSwiper>
				<lrCenterRbSwiper v-else-if="swip3DH===1" height="500rpx" :images="images2" :current="0"
					:interval="3000"><!-- @click="clickHandler" @change="changeHandler" -->
				</lrCenterRbSwiper>
				<lrCenterRbSwiper v-else height="800rpx" :lrOrTb="true" :images="images2" :current="0" :interval="3000">
					<!-- @click="clickHandler" @change="changeHandler" -->
				</lrCenterRbSwiper>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import lrCenterRbSwiper from '@/pagesB1/templateComponents/lrCenterRbSwiper/lrCenterRbSwiper.vue'
	import {
		kehuan
	} from '@/common/commonData.js'
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
	
	export default {
		components:{
			lrCenterRbSwiper,
			imgLoadu,
			comNavTab,
			ComTitle
		},
		data() {
			return {
				cardCur: 0,
				swiperCurrent: 0,
				swip3DH: 0,
				swBs: ['filtSatu', 'filtBlur'],
				imgUrl:kehuan,
				images2: [{
						imgUrl: "/pagesB1/static/ouBu.jpg",
						txtInx: "swing-in-top-bck 0",
						desc: "太阳落下便无法看见,但是呢就算看不见,它依然在地平线的彼方闪耀光芒。",
					},
					{
						imgUrl: "/pagesB1/static/kabutou.jpg",
						txtInx: "",
						desc: "男人应该冷静,沸腾的开水只会蒸发.",
					},
					{
						imgUrl: "/pagesB1/static/tiandao.jpg",
						txtInx: "swing-in-top-bck qs",
						desc: "世界是以自己为中心转的,这样想的话就会觉得开心了.",
					},
					{
						imgUrl: "/pagesB1/static/seeyou.jpg",
						txtInx: "swing-in-top-bck qa",
						desc: "走着一样路的只能被称为同行者,走着不同道路但能一起并肩前行的才能被称为伙伴。",
					},
					{
						imgUrl: "/pagesB1/static/seeyou.jpg",
						txtInx: "swing-in-top-bck qa",
						desc: "走着一样路的只能被称为同行者,走着不同道路但能一起并肩前行的才能被称为伙伴。",
					}
				],
				swiperList: [{
						id: 0,
						type: 'image',
						url: kehuan[8]
					},
					{
						id: 1,
						type: 'image',
						url: kehuan[7]
					},
					{
						id: 2,
						type: 'image',
						url: kehuan[6]
					},
					{
						id: 3,
						type: 'image',
						url: kehuan[5]
					},
					{
						id: 4,
						type: 'image',
						url: kehuan[4]
					},
				],
				swiperListT: [{
						id: 0,
						type: 'image',
						url: kehuan[8]
					},
					{
						id: 1,
						type: 'image',
						url: kehuan[7]
					},
					{
						id: 2,
						type: 'image',
						url: kehuan[6]
					},
					{
						id: 3,
						type: 'image',
						url: kehuan[5]
					},
					{
						id: 4,
						type: 'image',
						url: kehuan[4]
					},
					{
						id: 5,
						type: 'image',
						url: kehuan[5]
					},
					{
						id: 6,
						type: 'image',
						url: kehuan[3]
					},
				],
				towerStart: '',
				direction: ''
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
			this.towerSwiper('swiperListT');
			// 初始化towerSwiper 传已有的数组名即可
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			swBsGb() {
				const b = this.swBs[0];
				this.swBs[0] = this.swBs[1];
				this.swBs[1] = b;
			},
			swip3DBX() {
				if (this.swip3DH >= 2) {
					this.swip3DH = 0;
				} else {
					this.swip3DH += 1
				}
			},
			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},

			// towerSwiper
			// 初始化towerSwiper
			towerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
					list[i].mLeft = i - parseInt(list.length / 2);
				}
				this.swiperListT = list
			},

			// towerSwiper触摸开始
			towerStartFun(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			towerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// towerSwiper计算滚动
			towerEnd(e) {
				let direction = this.direction;
				let list = this.swiperListT;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < list.length; i++) {
						list[i - 1].mLeft = list[i].mLeft;
						list[i - 1].zIndex = list[i].zIndex;
					}
					list[list.length - 1].mLeft = mLeft;
					list[list.length - 1].zIndex = zIndex;
					this.swiperListT = list
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = list.length - 1; i > 0; i--) {
						list[i].mLeft = list[i - 1].mLeft;
						list[i].zIndex = list[i - 1].zIndex;
					}
					list[0].mLeft = mLeft;
					list[0].zIndex = zIndex;
					this.swiperListT = list
				}
			},

			swiperChange(e) {
				if (e.detail.source == 'touch' || e.detail.source == 'autoplay') {
					this.swiperCurrent = e.detail.current
				}
			}
		}
	};
</script>
<style>
</style>