<template>
	<view style="background-color: #a3a3a3;">
		<comNavTab cs-tit="有劲没处使计划">
			<view class='music-card playing'>
				<view class='image'></view>
				<view class='wave'></view>
				<view class='wave'></view>
				<view class='wave'></view>
				<view class='info'>
					<text class='title'>承接各类互联网业务开发</text>
					<view class='artist'>高能·高效·高服务</view>
				</view>
			</view>
			<view class="cu-list aqi-boxShadow bg-green light grid no-border col-3 margin radius-xl">
				<view class="cu-item" v-for="(item,index) in appAi" :key="index">
					<view style="">
						<image :src="item.img" mode="heightFix" style="height: 120rpx;border-radius: 20px;"></image>
					</view>
					<text style="color: #0055ff;">{{item.tit}}</text>
				</view>
			</view>
			<view class="aqi-txt-blod">
				<view class="flex padding-lg">
					<view class="text-content" style="letter-spacing: 0.1rem;">
						<!-- <view class="margin-top-lg text-xl text-white">dddd</view> -->
						<text :user-select="true">
							&nbsp;&nbsp;如果你恰好有以上互联网业务开发需求，如果你想要一款量身定制的移动应用，如果你有新互联网项目计划，如果你恰好不知该怎么实行？
							不妨来试试这里，首先我们是一对一式专享服务，假如你是小白，我会分析你提出的互联网项目可行性，我会告诉你该项目最贴近现实的互联网环境，
							我会告诉你一切你最需要知道甚至你不想听到的内容，我会尽力解答你所有的疑惑，并给出可行方案；
						</text>
						<view class="margin-top-sm">
							&nbsp;&nbsp; 那话不多说，先看价格：
						</view>
					</view>
				</view>
				<view class="cu-coupon-box2 text-center align-center justify-center"
					style="height: 60px;margin-top: -10px;">
					<view class="flex align-center" style="height: 100%;">
						<view class="flex-sub align-center">
							<view class="grid col-1">
								<view class="text-blue">
									微信小程序:
								</view>
							</view>
						</view>
						<view class="flex-twice text-left">
							<view class="grid col-1">
								<view class="text-sm text-green">
									简便·轻量·1百至8千元之间视需求不等；
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-coupon-box2 radius-lg text-center align-center justify-center"
					style="height: 60px;margin-top: -10px;">
					<view class="flex align-center" style="height: 100%;">
						<view class="flex-sub align-center">
							<view class="grid col-1">
								<view class="text-pink">
									网站应用:
								</view>
							</view>
						</view>
						<view class="flex-twice text-left">
							<view class="grid col-1">
								<view class="text-sm text-orange">
									高效·高能·1百至5千元之间视需求不等；
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-coupon-box2 text-center align-center justify-center"
					style="height: 60px;margin-top: -10px;">
					<view class="flex align-center" style="height: 100%;">
						<view class="flex-sub align-center">
							<view class="grid col-1">
								<view class="text-orange">
									APP软件:
								</view>
							</view>
						</view>
						<view class="flex-twice text-left">
							<view class="grid col-1">
								<view class="text-sm text-pink">
									高效·简便·5百至1万元之间视需求不等；
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="flex padding-lr-lg">
					<view class="text-content" style="letter-spacing: 0.1rem;">
						<text :user-select="true">
							&nbsp;&nbsp;如果你嫌太花哨，太麻烦，那么可以直接跟我说，帮忙做个几百元的小程序，为哪些群体(或年龄段)使用，用来干什么，我会构思好一切，再反馈给你，
							是不是像个AI，对呀，如果我们人类能像AI一样只反馈最真实最有效的信息，那我们是不是远远超越AI了呢？只要有信任存在，人一定比AI更真实，更高效，更方便，更可靠！
						</text>
						<view class="margin-top-sm">
							&nbsp;&nbsp;由于是一对一式专享服务，及对服务内容与代码质量的保证，所以我可能会看需求接单，如果有数据体量特别大的项目，我会向你推荐一些可选的优质企业，因为我个人能力与时间毕竟有限，
							开发周期过于漫长的话，对我们双方都不太好，望理解！
						</view>
						<view class="margin-top-sm">
							&nbsp;&nbsp;因主职原因，还有一个硬性条件，就是不论项目体量大小，每个月我只承接最多两个项目，我的原则是，把每个对接的项目都以最优的方案编写，价格只是对时间的交换，
							代码是对事业的尊重，不论是百元千元还是万元，代码质量都将以最高质量编写，并将源代码全权交付。另外，我卖的不是时间更不是代码，而是服务，是为人民服务的服务。
						</view>
						<view class="margin-top-sm text-center aqi-textShadow-wh">
							&nbsp;&nbsp;先交付，后收费。不满意，无责退！
						</view>
						<view class="text-center padding-top-xs">
							<view class="aqi-txtJinColor">
								商务合作🤝<text class="cuIcon-weixin bg-gradual-green-light padding-xs round">Blue00008B</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue'
	export default {
		components: {
			comNavTab
		},
		data() {
			return {
				imgs: [
					"https://image.meiye.art/pic_7i-Nu_SPrYQUWTrfgxWSb",
					"https://image.meiye.art/pic_1701006672436518" //毒师
				],
				appAi: [{
						tit: 'APP软件开发',
						img: 'https://image.meiye.art/FtGkCpI2KdYbfh9oZws3tMK1Dcxx'
					},
					{
						tit: '微信小程序开发',
						img: '/pagesB1/static/myXcx.png'
					},
					{
						tit: '网站应用开发',
						img: '/pagesB1/static/myWz.png'
					},
					{
						tit: '单网页开发',
						img: '/pagesB1/static/myWy.png'
					},
					{
						tit: '单模板开发',
						img: 'https://image.meiye.art/pic_1706935889786'
					},
					{
						tit: '单组件开发',
						img: 'https://image.meiye.art/Fo9TpyaU486kzY5UBv9Xmd7xb9kA'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	.music-card {
		/* // margin: 100px auto; */
		background: #e7e7e7;
		box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
		overflow: hidden;
		position: relative;
		width: 100%;
		height: 500px;
		/* border-radius: 6px; */
	}

	.image {
		background: url('https://image.meiye.art/pic_1701006672436518') no-repeat 80%;
		background-size: cover;
		position: absolute;
		z-index: 1;
		opacity: 0.5;
		height: 450px;
		width: 100%;
		mask: linear-gradient(0deg, transparent, #ffffff);
	}

	.wave {
		position: absolute;
		height: 860px;
		width: 860px;
		opacity: 0.5;
		left: 0;
		top: 0;
		margin-left: -50%;
		margin-top: -130%;
		background: radial-gradient(#353535, #383737);
	}


	.playing .wave {
		border-radius: 40%;
		animation: wave 3000ms infinite linear;
	}



	.playing .wave:nth-child(2) {
		animation-duration: 4000ms;
	}



	.playing .wave:nth-child(3) {
		animation-duration: 5000ms;
	}



	.info {
		position: absolute;
		bottom: 20px;
		left: 0;
		right: 0;
		text-align: center;
	}

	.title {
		font-size: 1.4em;
		font-weight: 400;
		color: #333;
		margin-bottom: 8px;
		text-transform: uppercase;
		font-family: 'Reem Kufi', sans-serif;
	}

	.artist {
		color: #41c35f;
		font-size: 1.2em;
		letter-spacing: 0.08em;
		font-family: 'Reem Kufi', sans-serif;
		margin-top: 10px;
	}
</style>