<template>
	<view style="height: 100%">
		<comNavTab csTit="复选框">
			<ComTitle titleTxt="单选框" valueTxt="cu-form-group" :code-show="true">
				<view class="bg-white aqi-margin-sm">
					<radio-group class="block margin-xs">
						<view class="cu-form-group">
							<view class="title">单选(radio)</view>
							<radio checked></radio>
						</view>
						<view class="cu-form-group">
							<view class="title">定义样式</view>
							<radio class="radio"></radio>
						</view>
						<view class="cu-form-group">
							<view class="title">定义颜色</view>
							<view>
								<radio class="blue radio"></radio>
								<radio class="red margin-left-sm"></radio>
							</view>
						</view>
						<view class="cu-form-group">
							<view class="title">定义大小</view>
							<view>
								<radio class="red margin-left-sm" style="transform: scale(0.5, 0.5)"></radio>
								<radio class="red margin-left-sm" style="transform: scale(0.7, 0.7)"></radio>
								<radio class="red margin-left-sm" style="transform: scale(0.9, 0.9)"></radio>
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
							<checkbox class="round blue" checked></checkbox>
						</view>
						<view class="cu-form-group">
							<view class="title">定义大小</view>
							<view>
								<checkbox class="red margin-left-sm" style="transform: scale(0.5, 0.5)"></checkbox>
								<checkbox class="red margin-left-sm" style="transform: scale(0.7, 0.7)"></checkbox>
								<checkbox class="red margin-left-sm" style="transform: scale(0.9, 0.9)"></checkbox>
							</view>
						</view>
					</view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="边框/背景颜色" valueTxt="cu-form-group {color}" :code-show="true">
				<view class="cu-form-group margin-top-xs bg-white aqi-margin-sm">
					<checkbox class="orange"></checkbox>
					<checkbox class="green"></checkbox>
					<checkbox class="blue"></checkbox>
					<checkbox class="yellow"></checkbox>
					<checkbox class="pink"></checkbox>
					<checkbox class="purple"></checkbox>
					<checkbox class="red"></checkbox>
				</view>

				<view class="cu-form-group bg-white aqi-margin-sm">
					<checkbox class="round orange"></checkbox>
					<checkbox class="round green"></checkbox>
					<checkbox class="round blue"></checkbox>
					<checkbox class="round yellow"></checkbox>
					<checkbox class="round pink"></checkbox>
					<checkbox class="round purple"></checkbox>
					<checkbox class="round red"></checkbox>
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