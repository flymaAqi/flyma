<template>
	<view style="height: 100%;">
		<comNavTab csTit="收藏列表">
			<loveList :pageLis="dataPages"></loveList>
			<button v-if="dataPages.length>0" type="primary" style="width: 70%;" @click="remoKey">清空</button>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../templateComponents/comNavTab/comNavTab.vue';
	import {
		ref,
		onMounted
	} from 'vue'
	import loveList from '../templateComponents/loveList/loveList.vue'
	export default {
		components: {
			loveList,
			comNavTab
		},
		setup() {
			onMounted(() => {
				uni.getStorageInfo({
					success(e) {
						// 过滤掉我们有用的缓存，不要删除
						let key = e.keys.filter((item) => {
							if (item != '__DC_STAT_UUID' && item != 'sessionKey' &&
								item != 'token' && item != 'openId' && item !=
								'groupId' && item.startsWith('/')) {
								return item
							}
						})
						key.forEach((item) => {
							uni.getStorage({
								key: item,
								success(e) {
									dataPages.value.push(e.data)
								}
							})
						})
					}
				})
			})
			const dataPages = ref([])

			function remoKey() {
				try {
					uni.clearStorageSync();
					dataPages.value.length=0
				} catch (e) {
					// error
				}
			}

			return {
				remoKey,
				dataPages
			}
		}
	}
</script>

<style scoped>
</style>