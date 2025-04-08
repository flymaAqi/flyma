<template>
	<view style="height: 100%">
		<comNavTab csTit="头像">
			<ComTitle titleTxt="头像形状" value-txt="cu-avatar round" :codeShow="true">
				<view class="aqi-margin-sm bg-white bg-gradual-cyan-light">
					<view class="padding">
						<view class="cu-avatar round"
							:style="{'background-image':'url('+avatar[1]+')'}">
						</view>
						<view class="cu-avatar radius-df margin-left"
							:style="{'background-image':'url('+avatar[2]+')'}">
						</view>
						<view class="cu-avatar margin-left"
							:style="{'background-image':'url('+avatar[0]+')'}">
						</view>
					</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="头像尺寸" value-txt="cu-avatar sm{xl....}" :codeShow="true">
				<view class="aqi-margin-sm bg-gradual-blue-light">
					<view class="padding-sm">
						<view class="cu-avatar sm round margin-left"
							:style="{'background-image':'url('+avatar[0]+')'}">
						</view>
						<view class="cu-avatar round margin-left"
							:style="{'background-image':'url('+avatar[2]+')'}">
						</view>
						<view class="cu-avatar lg round margin-left"
							:style="{'background-image':'url('+avatar[1]+')'}">
						</view>
						<view class="cu-avatar xl round margin-left"
							:style="{'background-image':'url('+avatar[3]+')'}">
						</view>
					</view>
				
					<view class="padding-lr-sm">
						<view class="cu-avatar sm round margin-left bg-red">A</view>
						<view class="cu-avatar round margin-left bg-red">B</view>
						<view class="cu-avatar lg round margin-left bg-red">C</view>
						<view class="cu-avatar xl round margin-left bg-red">D</view>
					</view>
				
					<view class="padding-sm">
						<view class="cu-avatar sm round margin-left bg-blue">高</view>
						<view class="cu-avatar round margin-left bg-blue">颜</view>
						<view class="cu-avatar lg round margin-left bg-blue">
							<text>值</text>
						</view>
						<view class="cu-avatar xl round margin-left bg-blue">
							<text class="avatar-text">UI库</text>
						</view>
					</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="内嵌文字" nextTxt="><text>文字</text></view>" value-txt="cu-avatar" :codeShow="true">
				<view class="aqi-margin-sm padding bg-gradual-blue-light">
					<view class="cu-avatar radius bg-gray">
						<text class="cuIcon-people"></text>
					</view>
					<view class="cu-avatar radius margin-left bg-gray">
						<text>新</text>
					</view>
					<view class="cu-avatar radius margin-left bg-gray">
						<text>年</text>
					</view>
					<view class="cu-avatar radius margin-left bg-gray">
						<text>快</text>
					</view>
					<view class="cu-avatar radius margin-left bg-gray">
						<text>乐</text>
					</view>
				</view>
			</ComTitle>

			<ComTitle valueTxt="bg-{color}" :codeShow="true" titleTxt="头像颜色">
				<view class="aqi-margin-sm bg-gradual-blue-light">
					<view :class="'cu-avatar round lg bg-' + item.name + ' margin-xs'" v-for="(item, index) in ColorList"
						:key="index">
						<text class="avatar-text">{{ item.name }}</text>
					</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="头像组" valueTxt="cu-avatar-group" :codeShow="true">
				<view class="aqi-margin-sm bg-gradual-blue-light">
					<view class="cu-avatar-group">
						<view class="cu-avatar round"
							:style="{'background-image':'url('+avatar[1]+')'}">
						</view>
						<view class="cu-avatar round"
							:style="{'background-image':'url('+avatar[2]+')'}">
						</view>
						<view class="cu-avatar round"
							:style="{'background-image':'url('+avatar[3]+')'}">
						</view>
						<view class="cu-avatar round"
							:style="{'background-image':'url('+avatar[0]+')'}">
						</view>
					</view>
					<view class="cu-avatar-group">
						<view class="cu-avatar round lg"
							:style="{'background-image':'url('+avatar[0]+')'}">
						</view>
						<view class="cu-avatar round lg"
							:style="{'background-image':'url('+avatar[1]+')'}">
						</view>
						<view class="cu-avatar round lg"
							:style="{'background-image':'url('+avatar[2]+')'}">
						</view>
						<view class="cu-avatar round lg"
							:style="{'background-image':'url('+avatar[3]+')'}">
						</view>
					</view>
				</view>
			</ComTitle>

			<ComTitle titleTxt="头像标签" :code-show="true" valueTxt="cu-tag badge">
				<view class="padding aqi-margin-sm bg-gradual-blue-light">
					<view class="cu-avatar round lg margin-left"
						:style="{'background-image':'url('+avatar[1]+')'}">
						<view class="cu-tag badge cuIcon-female bg-blue"></view>
					</view>
					<view class="cu-avatar round lg margin-left"
						:style="{'background-image':'url('+avatar[2]+')'}">
						<view class="cu-tag badge cuIcon-female bg-pink"></view>
					</view>
					<view class="cu-avatar round lg margin-left"
						:style="{'background-image':'url('+avatar[3]+')'}">
						<view class="cu-tag badge cuIcon-male bg-blue"></view>
					</view>
					<view class="cu-avatar round lg margin-left"
						:style="{'background-image':'url('+avatar[0]+')'}">
						<view class="cu-tag badge cuIcon-male bg-pink"></view>
					</view>
				</view>
			</ComTitle>

			
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	import {
		dataImgs
	} from '@/common/comImg.js'
	import {
		color_list,
	} from '@/common/commonData.js'
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				ColorList: color_list,
				avatar: dataImgs
			};
		},
		methods: {}
	};
</script>
<style>
</style>