<template>
	<view style="height: 100%">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="音乐页面模板" :barCodShow="true">
			<view class="scrollPage">
				<view class="bg-black">
					<view class="flex padding-sm justify-between text-white">
						<view class="flex padding-top-xs text-xxxl">
							<text class="cuIcon-close"></text>
						</view>
						<view class="text-xxxl">
							<view class="flex justify-center cuIcon-more text-blace"></view>
						</view>
					</view>
					<zmtAudio ref="zmaudio"></zmtAudio>
					<view class="padding-tb">
						<view class="flex justify-between">
							<view class="flex">
								<image src="/pagesB1/static/ouBu.jpg" mode="aspectFill" class="cu-avatar round margin-left-sm"></image>
								<image src="/pagesB1/static/tiandao.jpg" mode="aspectFill" class="cu-avatar round margin-left-sm"></image>
								<image src="/pagesB1/static/kabutou.jpg" mode="aspectFill" class="cu-avatar round margin-left-sm"></image>
								<view class="cu-avatar round margin-left bg-oc-gray-7"><text class="cuIcon-more"></text>
								</view>
							</view>
							<view class="flex">
								<view class="padding-right-sm">
									<button class="cu-btn round">200条评论</button>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</comNavTab>
	</view>
</template>

<script>
	import zmtAudio from '../../../templateComponents/zmt-audio/zmt-audio.vue'
	import { onUnload } from '@dcloudio/uni-app';
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	export default {
		components: {
			zmtAudio,
			comNavTab
		},
		data() {
			return {
				originalBack:0
			};
		},
		onUnload() {
		    this.$refs.zmaudio.unloadAudio();
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {
			
		}
	};
</script>
<style>
	.scrollPage {
		height: 100%;
		min-height: 86vh;
	}
</style>