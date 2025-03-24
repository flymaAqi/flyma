<template>
	<view style="height: 100%">
		<comNavTab csTit="操作条">
			
			<ComTitle titleTxt="线条" valueTxt="aqi-textLine-{direction} aqi-textLine-style-{style}" :code-show="true">
				<view class="bg-gradual-pink-light aqi-margin-sm">
					<view class="text-xxxl text-center aqi-textLine-top padding-sm">
						<text class="cuIcon-roundcheckfill text-green">文字上线条</text>
					</view>
					<view class="padding-sm text-xxxl text-center aqi-textLine-bottom">
						<text class="cuIcon-roundcheckfill text-green">文字下线条</text>
					</view>
					<view class="padding-sm text-xxxl text-center aqi-textLine-center">
						<text class="cuIcon-roundcheckfill text-green">文字弃用线条</text>
					</view>
					<view class="padding-sm text-xxxl text-center aqi-textLine-bottom aqi-textLine-style-dian">
						<text class="cuIcon-roundcheckfill text-green">文字虚线线条</text>
					</view>
					<view class="padding-sm text-xxxl text-center aqi-textLine-bottom aqi-textLine-style-lang">
						<text class="cuIcon-roundcheckfill text-green">文字波浪线条</text>
					</view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="组件文字">
				<view style="position: relative;height: 200px;">
					<logoTxt :cu-inx="0"></logoTxt>
				</view>
			</ComTitle>
			<ComTitle titleTxt="大小"></ComTitle>

			<view class="padding-sm">
				<view class="bg-gradual-pink-light flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class="text-xsl padding">
							<text class="cuIcon-roundcheckfill text-green">文字</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：60，用于图标、数字等特大显示"
							value-txt="text-xsl" tipTxt="//当然还有更大的,要不是这里放不下,高低掏出来给你看看"></codeCard>
					</view>
				</view>

				<view class="bg-gradual-pink-light margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class="text-sl padding">
							<text class="cuIcon-roundcheckfill text-green">文字</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：40，用于图标、数字等较大显示"
							value-txt="text-sl"></codeCard>
					</view>
				</view>
				<view class="bg-gradual-pink-light margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class=" text-xxl padding">
							<text class="text-price text-red">80.'00'</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：22，用于金额数字等信息"
							value-txt="text-xxl"></codeCard>
					</view>
				</view>
				<view class="bg-gradual-pink-light margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class=" text-xl padding">
							<text class="text-black text-bold">您的订单已提交成功！</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：18，页面大标题，用于结果页等单一信息页"
							value-txt="text-xl"></codeCard>
					</view>
				</view>
				<view class="bg-gradual-pink-light margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class=" text-lg padding">
							<text class="text-black">您的订单已提交成功！</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：16，页面小标题，首要层级显示内容"
							value-txt="text-lg-xl"></codeCard>
					</view>
				</view>
				<view class="bg-gradual-pink-light margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class=" text-sm padding">您的订单已提交成功！</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：14，页面默认字号，用于摘要或阅读文本"
							value-txt="text-sm"></codeCard>
					</view>
				</view>
				<view class="bg-gradual-pink-light padding-xs margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class=" text-sm padding">
							<text class="text-grey">衬衫的价格是9磅15便士</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：12，页面辅助信息，次级内容等"
							value-txt="text-df"></codeCard>
					</view>
				</view>
				<view class="bg-gradual-pink-light bg-gradual-pink-light margin-top flex align-center radius-df">
					<view class="flex-sub text-center">
						<view class=" text-xs padding">
							<text class="text-gray">谢谢你 在这世界的角落 发现了我</text>
						</view>
						<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="字号：10，说明文本，标签文字等关注度低的文字"
							value-txt="text-df"></codeCard>
					</view>
				</view>
			</view>

			<ComTitle titleTxt="颜色"></ComTitle>
			<view class="bg-gradual-pink-light margin-sm radius-lg">
				<view class="grid col-5 ">
					<view class="padding-sm" v-for="(item, index) in color_list" :key="index">
						<view v-if="item.name != 'white'" :class="'text-' + item.name + ' text-center'">
							{{ item.title }}
						</view>
					</view>
				</view>
				<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="文字颜色" value-txt="text-{color_name}">
				</codeCard>
			</view>

			<ComTitle titleTxt="阴影"></ComTitle>
			<view class="bg-gradual-pink-light margin-sm radius-lg">
				<view class="grid col-5">
					<view class="padding-sm" v-for="(item, index) in color_list" :key="index">
						<view v-if="item.name != 'white'" :class="'text-center text-shadow text-' + item.name">
							<view class="cuIcon-ellipse text-xxl"></view>
						</view>
					</view>
				</view>
				<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="元素阴影"
					value-txt="text-shadow text-{color_name}"></codeCard>
			</view>


			<ComTitle titleTxt="截断"></ComTitle>

			<view class="bg-gradual-pink-light margin-sm radius-lg padding-top">
				<view class="text-cut padding margin-left bg-blue light radius" style="width: 660rpx;">
					根据元素宽度截断显示,根据元素宽度截断显示,根据元素宽度截断显示,</view>
				<view class="padding bg-blue light margin-left radius margin-top" style="width: 500rpx">
					<text class="text-cut-2">根据元素宽度与行数限制截断显示,根据元素宽度与行数限制截断显示,根据元素宽度与行数限制截断显示,</text>
				</view>
				<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="文字截断" value-txt="text-cut-{number}">
				</codeCard>
			</view>

			<ComTitle titleTxt="对齐"></ComTitle>

			<view class="bg-gradual-pink-light margin-sm radius-lg">
				<view class="text-left padding">谢谢你 在这世界的角落 发现了我</view>
				<view class="text-center padding">恭喜你 在这世界的角落 发现了我</view>
				<view class="text-right padding">祝福你 在这世界的角落 发现了我</view>
				<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="窗口文字对齐" value-txt="text-{direction}">
				</codeCard>
			</view>

			<ComTitle titleTxt="特殊文字"></ComTitle>

			<view class="padding-sm text-center">
				<view class="bg-gradual-pink-light radius-df">
					<view class=" padding">
						<text class="text-price">80.'00'</text>
					</view>
					<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="价格文本，利用伪元素添加'¥'符号"
						value-txt="text-price"></codeCard>
				</view>
				<view class="bg-gradual-pink-light margin-top radius-df">
					<view class=" padding">
						<text class="text-Abc">Flyma</text>
					</view>
					<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="英文单词首字母大写" value-txt="text-Abc">
					</codeCard>
				</view>
				<view class="bg-gradual-pink-light margin-top radius-df">
					<view class=" padding">
						<text class="text-ABC">Flyma</text>
					</view>
					<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="全部字母大写" value-txt="text-ABC"></codeCard>
				</view>
				<view class="bg-gradual-pink-light margin-top radius-df">
					<view class=" padding">
						<text class="text-abc">Flyma</text>
					</view>
					<codeCard preTxt="<text class=" nextTxt="/><text>" titTxt="全部字母小写" value-txt="text-abc"></codeCard>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script setup>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	import codeCard from '../../componentsB2/codeCard/codeCard.vue';
	import {
		color_list
	} from '@/common/commonData.js'
</script>
<style>
</style>
