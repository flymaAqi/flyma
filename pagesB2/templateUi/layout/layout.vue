<template>
	<view style="height: 100%">
		<comNavTab csTit="布局">
			<view class="padding-top-xxl" :style="{top:CustomBar+'px'}">
				<scroll-view scroll-x class="bg-white nav text-center fixed" :style="'top:' + CustomBar + 'px'">
					<view :class="'cu-item ' + (index == TabCur ? 'text-blue cur' : '') + ' text-bold'" @tap="tabSelect"
						:data-id="index" v-for="(item, index) in tabNav" :key="index">
						{{ tabNav[index] }}
					</view>
				</scroll-view>
				<block v-if="TabCur == 0">
					<ComTitle titleTxt="内外边距" valueTxt="{样式}-{距离}" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-lr padding-tb-sm">
								<view class="">内外边距{size}的尺寸有 xs、sm、默认、lg、xl、xxl</view>
								<view class="padding-top-sm">对应大小分别为：10rpx、20rpx、30rpx、40rpx、50rpx、60rpx</view>
							</view>
							<view class="margin-lr-sm">
								<view class="flex flex-wrap padding text-center">
									<view class="basis-df padding-bottom-xs">外边距</view>
									<view class="basis-df padding-bottom-xs">内边距</view>
									<view class="basis-df">.margin-{size}</view>
									<view class="basis-df">.padding-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">水平方向外边距</view>
									<view class="basis-df padding-bottom-xs">水平方向内边距</view>
									<view class="basis-df">.margin-lr-{size}</view>
									<view class="basis-df">.padding-lr-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">垂直方向外边距</view>
									<view class="basis-df padding-bottom-xs">垂直方向内边距</view>
									<view class="basis-df">.margin-tb-{size}</view>
									<view class="basis-df">.padding-tb-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">上外边距</view>
									<view class="basis-df padding-bottom-xs">上内边距</view>
									<view class="basis-df">.margin-top-{size}</view>
									<view class="basis-df">.padding-top-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">右外边距</view>
									<view class="basis-df padding-bottom-xs">右内边距</view>
									<view class="basis-df">.margin-right-{size}</view>
									<view class="basis-df">.padding-right-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">下外边距</view>
									<view class="basis-df padding-bottom-xs">下内边距</view>
									<view class="basis-df">margin-bottom-{size}</view>
									<view class="basis-df">.padding-bottom-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">左外边距</view>
									<view class="basis-df padding-bottom-xs">左内边距</view>
									<view class="basis-df">.margin-left-{size}</view>
									<view class="basis-df">.padding-left-{size}</view>
								</view>
							</view>
						</view>
					</ComTitle>
					
					<ComTitle titleTxt="圆角样式" valueTxt="radius-{size}" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-lr padding-tb-sm">
								<view class="">圆角{size}的尺寸有 默认、df、lg、xl</view>
								<view class="padding-top-sm">对应大小分别为：8rpx、16rpx、24rpx、32rpx</view>
							</view>
							<view class="bg-white margin-lr-sm radius-lg-bottom">
								<view class="flex flex-wrap padding text-center">
									<view class="basis-df padding-bottom-xs">四角</view>
									<view class="basis-df">.radius-{size}</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">顶部两角</view>
									<view class="basis-df">.radius-{size}-top</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">底部两角</view>
									<view class="basis-df">.radius-{size}-bottom</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">左上右下两角</view>
									<view class="basis-df">.radius-{size}-top-left</view>
								</view>
								<view class="flex flex-wrap padding solid-top text-center">
									<view class="basis-df padding-bottom-xs">右上坐下两角</view>
									<view class="basis-df">.radius-{size}-top-right</view>
								</view>
							</view>
						</view>
					</ComTitle>
				</block>
			
				<block v-if="TabCur == 1">
					<ComTitle titleTxt="固定尺寸" valueTxt="basis-{size}" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-xs radius-lg">
								<view class="flex flex-wrap">
									<view class="basis-xs bg-blue light margin-xs padding-sm radius">xs(20%)</view>
									<view class="basis-df"></view>
									<view class="basis-sm bg-blue light margin-xs padding-sm radius">sm(40%)</view>
									<view class="basis-df"></view>
									<view class="basis-df bg-blue light margin-xs padding-sm radius">sub(50%)</view>
									<view class="basis-lg bg-blue light margin-xs padding-sm radius">lg(60%)</view>
									<view class="basis-xl bg-blue light margin-xs padding-sm radius">xl(80%)</view>
									<view class="basis-xxl bg-blue light margin-xs padding-sm radius">xxl(100%)</view>
								</view>
							</view>
						</view>
					</ComTitle>
					<ComTitle titleTxt="比例布局" tip-txt="//放置多个元素,并同时使用flex-{layout}" valueTxt="flex-sub" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								比例布局
							</view>
							<view class="padding-sm">
								<view class="flex">
									<view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
									<view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
								</view>
								<view class="flex">
									<view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
									<view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
								</view>
								<view class="flex">
									<view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
									<view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
								</view>
								<view class="flex">
									<view class="flex-sub bg-blue light padding-sm margin-xs radius">1/6</view>
									<view class="flex-twice bg-blue light padding-sm margin-xs radius">1/3</view>
									<view class="flex-treble bg-blue light padding-sm margin-xs radius">1/2</view>
								</view>
								<view class="flex">
									<view class="flex-treble bg-blue light padding-sm margin-xs radius">3/4</view>
									<view class="flex-sub bg-blue light padding-sm margin-xs radius">1/4</view>
								</view>
							</view>
						</view>
					</ComTitle>
					<ComTitle titleTxt="水平对齐(justify)" valueTxt="flex justify-start" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								水平对齐(justify)
							</view>
							<view class="flex solid-bottom padding-xs justify-start">
								<view class="bg-blue light padding-sm margin-xs radius">start</view>
								<view class="bg-blue light padding-sm margin-xs radius">start</view>
							</view>
							<view class="flex solid-bottom padding-xs justify-end">
								<view class="bg-blue light padding-sm margin-xs radius">end</view>
								<view class="bg-blue light padding-sm margin-xs radius">end</view>
							</view>
							<view class="flex solid-bottom padding-xs justify-center">
								<view class="bg-blue light padding-sm margin-xs radius">center</view>
								<view class="bg-blue light padding-sm margin-xs radius">center</view>
							</view>
							<view class="flex solid-bottom padding-xs justify-between">
								<view class="bg-blue light padding-sm margin-xs radius">between</view>
								<view class="bg-blue light padding-sm margin-xs radius">between</view>
							</view>
							<view class="flex solid-bottom padding-xs justify-around">
								<view class="bg-blue light padding-sm margin-xs radius">around</view>
								<view class="bg-blue light padding-sm margin-xs radius">around</view>
							</view>
						</view>
					</ComTitle>
					<ComTitle titleTxt="垂直对齐(align)" valueTxt="flex align-start" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								
							</view>
							<view class="flex solid-bottom padding-sm align-start">
								<view class="bg-blue light padding-lg margin-xs radius">Align</view>
								<view class="bg-blue light padding-sm margin-xs radius">start</view>
							</view>
							<view class="flex solid-bottom padding-sm align-end">
								<view class="bg-blue light padding-lg margin-xs radius">Align</view>
								<view class="bg-blue light padding-sm margin-xs radius">end</view>
							</view>
							<view class="flex solid-bottom padding-sm align-center">
								<view class="bg-blue light padding-lg margin-xs radius">Align</view>
								<view class="bg-blue light padding-sm margin-xs radius">center</view>
							</view>
						</view>
					</ComTitle>
				</block>
			
				<template v-if="TabCur === 2">
					<ComTitle titleTxt="等分列" valueTxt="grid col-{size}" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								等分列
							</view>
							<view class="padding-sm">
								<view :class="'grid col-' + (itx1 + 1) + ' margin-bottom-sm text-center'" v-for="(item,itx1) in 5" :key="itx1">
									<view :class="(itx2 % 2 == 0 ? 'bg-green light' : 'bg-blue light')" class="padding-sm solid-bottom text-lg" v-for="(item, itx2) in (itx1 + 1) * 2" :key="itx2">
										{{ itx2 }}
									</view>
								</view>
							</view>
						</view>
					</ComTitle>
					<ComTitle titleTxt="等高" valueTxt="grid col-4 grid-square" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								等高
							</view>
							<view class="padding-sm">
								<view class="grid col-2 grid-square">
									<view class="bg-img" v-for="(item,index) in gridImg" :key="index">
										<view v-if="!imgLoad[index]" style="position: absolute;left: 35%;top: 40%;transform: scale(1.5);" class="flex align-center justify-center padding-tb-sm">
										    <view class="cu-loading4">
										        <view class="rect1 bg-blue"></view>
										        <view class="rect2 bg-blue"></view>
										        <view class="rect3 bg-blue"></view>
										        <view class="rect4 bg-blue"></view>
										        <view class="rect5 bg-blue"></view>
										    </view>
										</view>
										<image @load="imgLoadF(index)" :src="item" :lazy-load="true"></image>
									</view>
								</view>
							</view>
						</view>
					</ComTitle>
				</template>
			
				<block v-if="TabCur == 3">
					<ComTitle titleTxt="float布局" tip-txt="//父元素class加上'cf',子元素使用f-左右方向进行布局" valueTxt="fl" :code-show="true">
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								简介
							</view>
							<view class="padding-lr padding-tb-sm">
								<view>基本代码：display: table; 以表格的方式进行显示。</view>
								<view class="padding-top-sm">
									在宽度上会根据内容多少或设置来表现；在高度上，对齐最大的一个高度，因为在表格里面的一行，最大的一个高度会把这一行的高度给撑开。
								</view>
							</view>
						</view>
									
						<view class="aqi-margin-sm bg-gradual-blue-light">
							<view class="padding-sm text-lg">
								<text class="cuIcon-title text-blue"></text>
								示例
							</view>
							<view class="padding-xs">
								<view class="cf padding-sm">
									<view class="bg-blue light radius fl padding-sm">float</view>
									<view class="bg-blue light radius fr padding-sm">float</view>
								</view>
								<view class="cf padding-sm">
									<view class="bg-blue light radius fl padding-sm">float</view>
									<view class="bg-blue light radius fr padding-sm">float</view>
								</view>
								<view class="cf padding-sm">
									<view class="bg-blue light radius padding-sm">float</view>
								</view>
							</view>
						</view>
					</ComTitle>
				</block>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	import {getNavBarHeight} from '../../commonB2/system.js'
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				imgLoad:[false,false,false,false],
				CustomBar: getNavBarHeight(),
				TabCur: 0,
				tabNav: ['基础布局', 'Flex布局', 'Grid布局', 'float布局'],
				scrollLeft: '',
				gridImg:[
					"https://www.helloimg.com/i/2025/03/22/67de1ecdeba56.jpg",
					"https://www.helloimg.com/i/2025/03/18/67d9605c897b8.png",
					"https://www.helloimg.com/i/2025/03/22/67de1ecc4c6d0.jpg",
					"https://www.helloimg.com/i/2025/03/22/67de1ecc4c6d0.jpg"
				]
			};
		},
		methods: {
			/**
			 * 顶部Tab
			 */
			tabSelect(e) {
				let inx = e.currentTarget.dataset.id;
				this.TabCur = inx,
				this.scrollLeft = (inx - 1) * 60
			},
			imgLoadF(inx){
				this.imgLoad[inx] = true;
			},
			handleSwiper(e) {
				let {
					current,
					source
				} = e.detail;
				if (source === 'autoplay' || source === 'touch') {
					const TabCur = current;
					this.TabCur = TabCur
				}
			}
		}
	};
</script>
