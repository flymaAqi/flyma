<template>
	<view style="height: 100%">
		<comNavTab csTit="导航栏">
			<view class="margin-bottom-xs"></view>
			<codeCard titTxt="组件导言" :forComTit="true" tip-txt="//组件类我就只写引用方式了,不然代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧."
			 next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" 
			 preTxt="HBuilder X例:在" valueTxt="components"></codeCard>
			<ComTitle titleTxt="顶部操作条"/>
			<view class="margin-tb-xs">
				<view class="cu-bar bg-white margin-top-xs">
					<view class="action">
						<text class="cuIcon-back text-gray"></text>
						返回
					</view>
					<view class="content text-bold">Flyma</view>
				</view>
				<view class="cu-bar bg-white margin-top-xs">
					<view class="action">
						<text class="cuIcon-homefill text-gray"></text>
						首页
					</view>
					<view class="content text-bold">Flyma</view>
					<view class="action">
						<text class="cuIcon-recordfill text-red"></text>
					</view>
				</view>
				<view class="cu-bar bg-blue margin-top-xs">
					<view class="action">
						<text class="cuIcon-close"></text>
						关闭
					</view>
					<view class="content text-bold">Flyma</view>
				</view>
				<view class="cu-bar bg-blue light search margin-top-xs">
					<view class="cu-avatar round"
						style="background-image: url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)">
					</view>
					<view class="content">Flyma</view>
					<view class="action">
						<text class="cuIcon-more"></text>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="搜索操作条"/>
			<view class="margin-top-xs">
				<view class="cu-bar search bg-white margin-top-xs">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索内容" confirm-type="search" />
					</view>
					<view class="action">
						<button class="cu-btn bg-blue shadow-blur round">搜索</button>
					</view>
				</view>
				<view class="cu-bar search bg-white margin-top-xs">
					<image src="/static/flyma.png" class="cu-avatar round" mode="scaleToFill"></image>
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索内容" confirm-type="search" />
					</view>
					<view class="action">
						<text>北京</text>
						<text class="cuIcon-triangledownfill"></text>
					</view>
				</view>
				<view class="cu-bar bg-red search margin-top-xs">
					<image src="/pagesB1/static/tiandao.jpg" class="cu-avatar round" mode="aspectFill"></image>
					<view class="search-form radius">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索内容" confirm-type="search" />
					</view>
					<view class="action">
						<text>北京</text>
						<text class="cuIcon-triangledownfill"></text>
					</view>
				</view>
				<view class="cu-bar bg-cyan search margin-top-xs">
					<view class="search-form radius">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索内容" confirm-type="search" />
					</view>
					<view class="action">
						<text class="cuIcon-close"></text>
						<text>取消</text>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="底部操作条"/>
			<view class="margin-top-xs">
				<view class="cu-bar tabbar bg-white margin-top-xs">
					<view class="action">
						<view class="cuIcon-cu-image">
							<view class="cuIcon-homefill"></view>
						</view>
						<view class="text-blue">主页</view>
					</view>
					<view class="action">
						<view class="cuIcon-cu-image">
							<view class="cuIcon-similar"></view>
							<view class="cu-tag badge">99</view>
						</view>
						<view class="text-gray">设计</view>
					</view>
					<view class="action">
						<view class="cuIcon-cu-image">
							<view class="cuIcon-my"/>
							<view class="cu-tag badge"></view>
						</view>
						<view class="text-gray">关于</view>
					</view>
				</view>
				<view class="cu-bar tabbar margin-bottom-xl bg-black margin-top-xs">
					<view class="action text-orange">
						<view class="cuIcon-homefill"></view>
						首页
					</view>
					<view class="action text-gray">
						<view class="cuIcon-similar"></view>
						分类
					</view>
					<view class="action text-gray">
						<view class="cuIcon-recharge"></view>
						积分
					</view>
					<view class="action text-gray">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="action text-gray">
						<view class="cuIcon-my">
							<view class="cu-tag badge"></view>
						</view>
						我的
					</view>
				</view>
				<view class="cu-bar tabbar margin-bottom-xl bg-white margin-top-xs">
					<view class="action text-green">
						<view class="cuIcon-homefill"></view>
						首页
					</view>
					<view class="action text-gray">
						<view class="cuIcon-similar"></view>
						分类
					</view>
					<view class="action text-gray add-action">
						<button class="cu-btn cuIcon-add bg-green shadow"></button>
						发布
					</view>
					<view class="action text-gray">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="action text-gray">
						<view class="cuIcon-my">
							<view class="cu-tag badge"></view>
						</view>
						我的
					</view>
				</view>
				<view class="cu-bar tabbar bg-black margin-top-xs">
					<view class="action text-green">
						<view class="cuIcon-homefill"></view>
						首页
					</view>
					<view class="action text-gray">
						<view class="cuIcon-similar"></view>
						分类
					</view>
					<view class="action text-gray add-action">
						<button class="cu-btn cuIcon-add bg-green shadow"></button>
						发布
					</view>
					<view class="action text-gray">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="action text-gray">
						<view class="cuIcon-my">
							<view class="cu-tag badge"></view>
						</view>
						我的
					</view>
				</view>
				<view class="cu-bar bg-white tabbar border shop margin-top-xs">
					<button class="action" open-type="contact">
						<view class="cuIcon-service text-green">
							<view class="cu-tag badge"></view>
						</view>
						Service
					</button>
					<view class="action text-orange">
						<view class="cuIcon-favorfill"></view>
						Collection
					</view>
					<view class="action">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="bg-red submit">Buy Now</view>
				</view>
				<view class="cu-bar bg-white tabbar border shop margin-top-xs">
					<button class="action" open-type="contact">
						<view class="cuIcon-service text-green">
							<view class="cu-tag badge"></view>
						</view>
						Service
					</button>
					<view class="action">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="bg-orange submit">Add to cart</view>
					<view class="bg-red submit">Buy Now</view>
				</view>
				<view class="cu-bar bg-white tabbar border shop margin-top-xs">
					<button class="action" open-type="contact">
						<view class="cuIcon-service text-green">
							<view class="cu-tag badge"></view>
						</view>
						Service
					</button>
					<view class="action">
						<view class="cuIcon-shop"></view>
						Shop
					</view>
					<view class="action">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="btn-group">
						<button class="cu-btn bg-red round shadow-blur">Buy Now</button>
					</view>
				</view>
				<view class="cu-bar bg-white tabbar border shop margin-top-xs">
					<button class="action" open-type="contact">
						<view class="cuIcon-service text-green">
							<view class="cu-tag badge"></view>
						</view>
						Service
					</button>
					<view class="action">
						<view class="cuIcon-cart">
							<view class="cu-tag badge">99</view>
						</view>
						Cart
					</view>
					<view class="btn-group">
						<button class="cu-btn bg-orange round shadow-blur">Add to cart</button>
						<button class="cu-btn bg-red round shadow-blur">Buy Now</button>
					</view>
				</view>
			</view>
			<ComTitle titleTxt="输入操作条"/>
			<view class="margin-top-xs">
				<view class="cu-bar input margin-top-xs">
					<view class="action">
						<text class="cuIcon-sound text-grey"></text>
					</view>
					<input class="solid-bottom" :focus="false" maxlength="300" cursor-spacing="10" />
					<view class="action">
						<text class="cuIcon-emojifill text-grey"></text>
					</view>
					<button class="cu-btn bg-blue shadow-blur">发送</button>
				</view>
				<view class="cu-bar input margin-top-xs">
					<image src="/pagesB1/static/tiandao.jpg" class="cu-avatar round" mode="aspectFill"></image>
					<view class="action">
						<text class="cuIcon-roundaddfill text-grey"></text>
					</view>
					<input class="solid-bottom" maxlength="300" cursor-spacing="10" />
					<view class="action">
						<text class="cuIcon-emojifill text-grey"></text>
					</view>
					<button class="cu-btn bg-blue shadow-blur">发送</button>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script setup>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import codeCard from '../../templateComponents/codeCard/codeCard.vue';
</script>
<style>
</style>