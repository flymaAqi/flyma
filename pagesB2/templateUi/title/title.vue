<template>
	<view style="height: 100%">
		<comNavTab csTit="标题">
			<ComTitle titleTxt="示例标题" valueTxt="text-xl text-bold text-blue" :code-show="true">
				<view class="aqi-margin-sm bg-black bg-gradual-purple-light">
					<view class="cu-bar radius-lg-top">
						<view class="action border-title">
							<text class="text-xl text-bold">示例标题1</text>
							<text class="bg-grey" style="width: 2rem"></text>
							<!-- 底部样式 last-child选择器 -->
						</view>
					</view>
					<view class="cu-bar">
						<view class="action border-title">
							<text class="text-xl text-bold text-blue">示例标题2</text>
							<text class="bg-gradual-blue" style="width: 3rem"></text>
						</view>
					</view>
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-green">示例标题3</text>
							<text class="bg-green"></text>
							<!-- last-child选择器 -->
						</view>
					</view>
					<view class="cu-bar">
						<view class="action sub-title">
							<text class="text-xl text-bold text-blue">示例标题4</text>
							<text class="text-ABC text-blue">about</text>
							<!-- last-child选择器 -->
						</view>
					</view>
					<view class="cu-bar">
						<view class="action">
							<text class="text-xl text-bold">示例标题4</text>
							<text class="text-Abc text-gray self-end margin-left-sm">about</text>
						</view>
					</view>
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-titles text-blue"></text>
							<text class="text-xl text-bold">示例标题5</text>
						</view>
					</view>
					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-title text-blue"></text>
							<text class="text-xl text-bold">示例标题6</text>
						</view>
					</view>
					<view class="cu-bar margin-top">
						<view class="action sub-title">
							<text class="cuIcon-titles text-green"></text>
							<text class="text-xl text-green text-bold">示例标题7</text>
							<text class="bg-green"></text>
						</view>
						<view class="action">
							<button class="aqi-xbt">
								BUTTON<text class="cuIcon-right"/>
							</button>
						</view>
					</view>
				</view>
			</ComTitle>



			<ComTitle titleTxt="级别标题" valueTxt="text-df text-bold" :code-show="true">
				<view class="aqi-margin-sm bg-white bg-gradual-purple-light">
					<view class="cu-bar radius-lg-top">
						<view class="action">
							<text class="cuIcon-titles text-green"></text>
							<text class="text-xl text-bold">一级标题</text>
						</view>
					</view>

					<view class="cu-bar">
						<view class="action">
							<text class="cuIcon-titles text-green"></text>
							<text class="text-lg text-bold">二级标题</text>
						</view>
					</view>

					<view class="cu-bar radius-lg-bottom">
						<view class="action">
							<text class="cuIcon-title text-green"></text>
							<text class="text-df text-bold">三级标题</text>
						</view>
					</view>
				</view>
			</ComTitle>



			<ComTitle titleTxt="居中标题" tip-txt="//父元素框起来,子元素就是居中显示" valueTxt="flex justify-center" :code-show="true">
				<view class="aqi-margin-sm bg-white bg-gradual-purple-light">
					<view class="cu-bar radius-lg-top flex justify-center">
						<view class="action border-title">
							<text class="text-xl text-bold">示例标题1</text>
							<text class="bg-grey" style="width: 2rem"></text>
						</view>
					</view>
					<view class="cu-bar flex justify-center">
						<view class="action border-title">
							<text class="text-xl text-bold text-blue">示例标题2</text>
							<text class="bg-gradual-blue" style="width: 3rem"></text>
						</view>
					</view>
					<view class="cu-bar flex justify-center">
						<view class="action sub-title">
							<text class="text-xl text-bold text-green">示例标题3</text>
							<text class="bg-green"></text>
						</view>
					</view>
				</view>
			</ComTitle>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				title: '精选推荐'
			};
		}
	};
</script>
<style>
</style>