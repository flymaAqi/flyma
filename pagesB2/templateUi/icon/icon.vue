<template>
	<view style="height: 100%">
		<comNavTab csTit="图标">
			<view class="cu-bar bg-white search fixed" :style="'top:' + CustomBar + 'px'">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索icon" confirm-type="search" @input="searchIcon" />
				</view>
			</view>
			<view :style="'margin-top:' + CustomBar + 'px'">
				<ComTitle titleTxt="大小/颜色" :valueTxt="shadow?'cuIcon-{icon_name} text-shadow':'cuIcon-{icon_name}'" :code-show="true">
					<template #rB>
						<text class="text-df margin-right-sm">阴影</text>
						<switch class="sm" @change="SetShadow"></switch>
					</template>
					<view class="cu-list grid col-4 bg-white aqi-margin-sm">
						<view class="cu-item" v-for="(item, index) in iconList" :key="index">
							<view :class="'cuIcon-' + item.icon + ' xl text-' + item.color + ' ' + (shadow ? 'text-shadow' : '')">
								<text>{{ item.icon }}</text>
							</view>
						</view>
						<view class="cu-item" v-for="(item, index) in iconList" :key="index">
							<view :class="'cuIcon-' + item.icon + ' text-' + item.color + ' ' + (shadow ? 'text-shadow' : '')"
								style="font-size: 64rpx"></view>
					
							<text>{{ item.icon }}</text>
						</view>
					</view>
				</ComTitle>
			</view>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-titles text-blue"></text>
					扩展
				</view>
				<view class="action"></view>
			</view>
			
			<view class="cu-list grid col-4 bg-white margin-sm radius-lg">
				<!-- <view class="cu-item text-xxxl text-black" v-for="(item, index) in iconNew" :key="index">
					<view v-if="item.isShow" :class="'icon-' + item.name"></view>
			
					<text class="text-cut padding-xs">{{ item.name }}</text>
				</view> -->
			</view>
			
			<ComTitle titleTxt="全部图标"></ComTitle>
			
			<view class="cu-list grid col-4 bg-white margin-sm radius-lg">
				<view class="cu-item text-black" v-for="(item, index) in icon" :key="index" @tap="CopyText('cuIcon-' + item.name)">
					<view v-if="item.isShow" :class="'cuIcon-' + item.name + ' xl'"></view>
			
					<text class="text-cut padding-xs">{{ item.name }}</text>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import {getNavBarHeight} from '../../commonB2/system.js'
	import {icon,iconList,iconNew} from './iconList.js'
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				CustomBar: getNavBarHeight(),
				icon: icon,
				iconList: iconList,
				iconNew: iconNew,
				shadow: ''
			};
		},
		methods: {
			SetShadow(e) {
				this.shadow= e.detail.value
			},

			/**
			 * 搜索图标
			 */
			searchIcon(e) {
				let key = e.detail.value.toLowerCase();
				let list = this.icon;
				for (let i = 0; i < list.length; i++) {
					let a = key;
					let b = list[i].name.toLowerCase();
					if (b.search(a) != -1) {
						list[i].isShow = true;
					} else {
						list[i].isShow = false;
					}
				}
				this.icon= list
			},

			/**
			 * 复制内容到剪切板
			 */
			CopyText(en) {
				uni.setClipboardData({
					data: en,
					success: (res) => {
						uni.showToast({
							title: '已复制',
							duration: 1000
						});
					}
				});
			}
		}
	};
</script>
<style>
</style>