<template>
	<view style="height: 100%">
		<comNavTab csTit="复选框">
			<ComTitle titleTxt="单选框" valueTxt="cu-form-group" :code-show="true">
				<view class="bg-white aqi-margin-sm">
					<radio-group class="block margin-xs">
						<view class="cu-form-group">
							<view class="title">单选(radio)</view>
							<radio></radio>
						</view>
						<view class="cu-form-group">
							<view class="title">定义样式</view>
							<radio checked class="radio"></radio>
						</view> 
						<view class="cu-form-group">
							<view class="title">定义颜色</view>
							<view>
								<!-- #ifdef MP-WEIXIN -->
								<radio class="radio red"></radio>
								<radio class="margin-left-sm"></radio>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								<radio class="radio" fore-color="red" borderColor="green" activeBackgroundColor="green"></radio>
								<radio class="radio" fore-color="cyan" borderColor="orange" activeBackgroundColor="orange"></radio>
								<!-- #endif -->
							</view>
						</view>
						<view class="cu-form-group">
							<view class="title">定义大小</view>
							<view>
								<radio class="red radio margin-left-sm" style="transform: scale(0.5, 0.5)"></radio>
								<radio class="red radio margin-left-sm" style="transform: scale(0.7, 0.7)"></radio>
								<radio class="red radio margin-left-sm" style="transform: scale(0.9, 0.9)"></radio>
							</view>
						</view>
					</radio-group>
				</view>
			</ComTitle>
			<ComTitle titleTxt="多选框" valueTxt="cu-form-group" :code-show="true">
				<view class="bg-white aqi-margin-sm">
					<view class="margin-xs">
						<view class="cu-form-group">
							<view class="title">复选(checkbox)</view>
							<checkbox></checkbox>
						</view>

						<view class="cu-form-group">
							<view class="title">定义形状</view>
							<checkbox class="round" checked></checkbox>
						</view>

						<view class="cu-form-group">
							<view class="title">定义颜色</view>
							<!-- #ifdef MP-WEIXIN -->
							<checkbox class="checkbox red margin-left-sm"></checkbox>
							<!-- #endif -->
							<!-- #ifndef MP-WEIXIN -->
							<checkbox fore-color="red" active-background-color="cyan" active-border-color="green" checked></checkbox>
							<!-- #endif -->
						</view>
						<view class="cu-form-group">
							<view class="title">定义大小</view>
							<view>
								<!-- #ifdef MP-WEIXIN -->
								<checkbox class="red margin-left-sm" style="transform: scale(0.5, 0.5)"></checkbox>
								<checkbox class="red checkbox  margin-left-sm" style="transform: scale(0.7, 0.7)"></checkbox>
								<checkbox class="red margin-left-sm" style="transform: scale(0.9, 0.9)"></checkbox>
								<!-- #endif -->
								<!-- #ifndef MP-WEIXIN -->
								<checkbox class="margin-left-sm" style="transform: scale(0.5, 0.5)"></checkbox>
								<checkbox class="margin-left-sm" style="transform: scale(0.7, 0.7)"></checkbox>
								<checkbox class="margin-left-sm" style="transform: scale(0.9, 0.9);" fore-color="red" active-border-color="red"></checkbox>
								<!-- #endif -->
							</view>
						</view>
					</view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="边框/背景颜色" valueTxt="cu-form-group {color}" :code-show="true">
				<view class="cu-form-group margin-top-xs bg-white aqi-margin-sm">
					<!-- #ifdef MP-WEIXIN -->
					<checkbox class="checkbox orange"></checkbox>
					<checkbox class="checkbox green"></checkbox>
					<checkbox class="checkbox blue"></checkbox>
					<checkbox class="checkbox yellow"></checkbox>
					<checkbox class="checkbox pink"></checkbox>
					<checkbox class="checkbox purple"></checkbox>
					<checkbox class="checkbox red"></checkbox>
					<!-- #endif -->
					<!-- #ifndef MP-WEIXIN -->
					<checkbox fore-color="cyan" active-background-color="orange" active-border-color="green" border-color="orange"></checkbox>
					<checkbox fore-color="cyan" active-background-color="green" active-border-color="green" border-color="green"></checkbox>
					<checkbox fore-color="cyan" active-background-color="blue" active-border-color="green" border-color="blue"></checkbox>
					<checkbox fore-color="cyan" active-background-color="yellow" active-border-color="green" border-color="yellow"></checkbox>
					<checkbox fore-color="cyan" active-background-color="pink" active-border-color="green" border-color="pink"></checkbox>
					<checkbox fore-color="cyan" active-background-color="purple" active-border-color="green" border-color="purple"></checkbox>
					<checkbox fore-color="cyan" active-background-color="red" active-border-color="green" border-color="red"></checkbox>
					<!-- #endif -->
				</view>
			</ComTitle>
		</comNavTab>
	</view>

</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	export default {
		components: {
			comNavTab,
			ComTitle
		},
		data() {
			return {};
		},
		methods: {}
	};
</script>