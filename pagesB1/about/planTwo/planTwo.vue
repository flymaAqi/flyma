<template>
	<view>
		<comNavTab cs-tit="玫瑰余香计划">
			<view class="card">
				<view class="image">
					<image src="https://uiverse.io/astronaut.png" style="width: 160px;height: 190px;" />
				</view>
				<view class="heading aqi-zx-xxl"></view>
				<view class="myGs2">
					<view>
						<text>莫言曾在接受采访时说过一句话，比尔盖茨捐一个亿不算多，我们村放羊的老爷爷捐五块钱不算少。慈善是源于人的本能，来自内心的需要，甚至可以成为一种信仰。</text>
						<view class="margin-top-sm margin-bottom-sm">
							&nbsp;&nbsp;虽然我只是一个技术白痴💡，但仍想为这信仰助力，然自身不过半斤八两者，因无法真正辨识真假，以至于一直徘徊在知与行的边缘。故于此处设言，期望找寻一个核心为慈善的组织，
							当燃料做炮灰，求之不得，指哪打哪，心甘情愿。若组织需要技术，我可以提供以下服务：
						</view>
						<view class="margin-top-sm margin-bottom-sm">
							<text>&nbsp;&nbsp;1.小程序,APP及网站程序编码</text>
							<view>&nbsp;&nbsp;2.服务器端数据处理(本人Java全栈)</view>
							<view>&nbsp;&nbsp;3.云端数据存储</view>
							<view>&nbsp;&nbsp;4.互联网业务优化</view>
							<view>&nbsp;&nbsp;5.AI大模型本地部署与性能调试</view>
							<view>&nbsp;&nbsp;6.技术支持及咨询</view>
						</view>
						<view class="margin-top-sm margin-bottom-sm">
							&nbsp;&nbsp;本人承诺以上服务皆为组织需要时免费提供；
						</view>
						<view class="margin-top-sm margin-bottom-sm">
							&nbsp;&nbsp;公益不是因为有意义才做，而是做了才有意义，这个世界的美好莫过于爱在循环，传递以微薄之力，星火有燎原之势。如果您身边存在此类组织，
							可以的话请稍微分享推荐一下或联系一下客服，相信世界会因你而精彩！
						</view>
						<view class="text-center">
							<view class="aqi-txtJinColor">
								联系vx🤝<text
									class="cuIcon-weixin bg-gradual-green-light padding-xs round">Blue00008B</text>
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

			}
		},
		methods: {}
	}
</script>

<style scoped>
	.myGs2 {
		padding: 10px;
		margin: auto;
		width: 90%;
		z-index: 99;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(2rpx);
		-webkit-backdrop-filter: blur(2rpx);
		color: rgb(255, 255, 255);
	}

	.card {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #171717;
		color: white;
		z-index: 1;
	}

	.image {
		width: 160px;
		height: 190px;
		top: 50px;
		left: 30px;
		position: relative;
		animation: move 10s ease-in-out infinite;
		z-index: 5;
	}

	.image:hover {
		cursor: -webkit-grab;
		cursor: grab;
	}

	.heading::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 2px;
		opacity: 1;
		box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff, 120px 40px #fff, 90px 430px #fff, 280px 50px #fff,
			310px 220px #fff, 310px 330px #fff, 180px 176px #fff, 220px 20px #fff,
			360px 20px #fff, 340px 140px #fff, 290px 100px #fff, 10px 290px #fff;
		z-index: -1;
		transition: 2s ease;
		animation: 1s glowing-stars linear alternate infinite;
	}


	.image:active {
		cursor: -webkit-grabbing;
		cursor: grabbing;
	}

	.image:active+.heading::before {
		box-shadow:
			240px 10px #9b40fc,
			235px 15px #9b40fc,
			230px 20px #9b40fc,
			/* 1 */
			227px 27px #9b40fc,
			230px 33px #9b40fc,
			235px 38px #9b40fc,
			240px 42px #9b40fc,
			245px 42px #9b40fc,
			253px 40px #9b40fc,
			255px 15px #9b40fc,
			259px 20px #9b40fc,
			/* 2 */
			259px 27px #9b40fc,
			257px 33px #9b40fc,
			248px 10px #9b40fc,
			247px 30px #9b40fc,
			249px 36px #9b40fc,
			257px 45px #9b40fc,
			262px 48px #9b40fc;
		animation: none;
		filter: blur(0);
		border-radius: 2px;
		width: 0.45em;
		height: 0.45em;
		scale: 0.65;
		transform: translateX(1em) translateY(1em);
	}

	.heading::after {
		content: "";
		top: -8.5%;
		left: -8.5%;
		position: absolute;
		width: 7.5em;
		height: 7.5em;
		border: none;
		outline: none;
		border-radius: 50%;
		background: #f9f9fb;
		box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
			0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
		transition: 0.4s ease-in-out;
		z-index: -1;
	}

	.card:hover .heading::after {
		box-shadow: 0px 0px 200px rgba(193, 119, 241, 1),
			0px 0px 200px rgba(135, 42, 211, 1), inset #9b40fc 0px 0px 40px -12px;
	}




	@keyframes move {
		0% {
			transform: translateX(0em) translateY(0em);
		}

		25% {
			transform: translateY(-1em) translateX(-1em);
			rotate: -10deg;
		}

		50% {
			transform: translateY(1em) translateX(-1em);
		}

		75% {
			transform: translateY(-1.25em) translateX(1em);
			rotate: 10deg;
		}

		100% {
			transform: translateX(0em) translateY(0em);
		}
	}

	@keyframes glowing-stars {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0.3;
		}

		100% {
			opacity: 0.9;
		}
	}
</style>