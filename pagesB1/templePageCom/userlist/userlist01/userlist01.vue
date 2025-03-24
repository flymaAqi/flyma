<template>
	<view style="height: 100%">
		<comNavTab ref="comNav" :tipShow="true" :copy-show="false" csTit="用户列表模板" :barCodShow="true">
			<view class="flex bg-white">
				<view class="flex-treble">
					<view class="flex">
						<view class="padding-lr text-xsl margin-top">
							Chats
						</view>
						<view class="text-xsl text-black text-bold margin-top">
							Calls
						</view>
					</view>
				</view>
				<view class="flex-sub">
					<view class="flex justify-end text-black text-xxl">
						<view class="cuIcon-phone padding-sm padding-top-lg"></view>
					</view>
				</view>
			</view>
			<view class="bg-white">
				<block v-for="(item, index) in list" :key="index">
					<view class="flex padding-tb-lg">
						<view class="flex-treble">
							<view class="flex">
								<view class="padding-lr-sm">
									<image :src="item.avatar" mode="aspectFill" class="cu-avatar xl round"></image>
								</view>
								<view class="padding-xs text-xl text-black">
									<view class="text-bold">{{ item.name }}</view>
									<view :class="'text-' + item.color + ' text-sm padding-tb-xs'">
										{{ item.type }}
									</view>
									<view class="text-gray text-sm">
										{{ item.time }}
									</view>
								</view>
							</view>
						</view>
						<view class="flex-sub">
							<view class="flex justify-end text-black text-xxl">
								<view class="cuIcon-recordfill padding-sm padding-top-lg"></view>
								<view class="cuIcon-dianhua padding-sm padding-top-lg"></view>
							</view>
						</view>
					</view>
				</block>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../../templateComponents/comNavTab/comNavTab.vue';
	export default {
		components:{
			comNavTab
		},
		data() {
			return {
				list: [{
						name: 'Josephine Bunner',
						color: 'gray',
						type: 'Outgoing Video Call',
						time: '16 Mar',
						avatar: '/pagesB1/static/ouBu.jpg'
					},
					{
						name: 'Ricky Spenser',
						color: 'gray',
						type: 'Incoming Call (2)',
						time: '16 Mar',
						avatar: '/pagesB1/static/kabutou.jpg'
					},
					{
						name: 'Ray Alton',
						color: 'red',
						type: 'Missed Call',
						time: '16 Mar',
						avatar: '/pagesB1/static/seeyou.jpg'
					},
					{
						name: 'George Atkins',
						color: 'red',
						type: 'Missed Call',
						time: '16 Mar',
						avatar: '/pagesB1/static/tiandao.jpg'
					},
					{
						name: 'Josephine Bunner',
						color: 'gray',
						type: 'Outgoing Video Call',
						time: '16 Mar',
						avatar: '/pagesB1/static/tiandao.jpg'
					},
					{
						name: 'Ricky Spenser',
						color: 'gray',
						type: 'Incoming Call (2)',
						time: '16 Mar',
						avatar: '/pagesB1/static/tiandao.jpg'
					},
					{
						name: 'Ray Alton',
						color: 'red',
						type: 'Missed Call',
						time: '16 Mar',
						avatar: '/pagesB1/static/tiandao.jpg'
					}
				]
			};
		},
		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {},
		methods: {}
	};
</script>
<style>

</style>