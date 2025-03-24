<template>
	<view>
		<comNavTab csTit="仿真手机模型">
			<phoneTem ref="phone">
				<template #pBody>
					<view class="align-center text-center margin-top-xl">
						<text class="aqi-textShadow-wh text-blue">编写点啥好看呢？</text>
						<view class="aqi-textShadow-wh text-red">反正这样肯定不好看</view>
						<view class="aqi-textShadow-wh text-green">你们说该i放点啥好看呢？</view>
					</view>
				</template>
			</phoneTem>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import phoneTem from '../../templateComponents/phoneTem/phoneTem.vue';
	export default {
		components:{
			phoneTem,
			comNavTab
		},
		data() {
			return {
				
			}
		},
		mounted() {
			this.$refs.phone.closePhone()
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
