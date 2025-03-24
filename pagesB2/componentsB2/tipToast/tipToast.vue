<template>
	<view>
		<view class="toast-fixed-center aqi-zx-xxl" v-if="show" style="top: 30% !important;max-width: 75vw !important;width: fit-content !important;">
			<view style=""
				:class="'radius-lg padding animation-slide-top text-lg ' + (tipObj.type == 'ok' ? 'bg-green light' : 'bg-red light')">
				<text :class="tipObj.icon"></text>
				{{tipObj.title}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {debounce} from '@/common/commonData.js'
	import {
		ref
	} from 'vue';
	const tipObj = ref({
		type: 'ok',
		title: '成功!',
		icon: 'cuIcon-roundcheck'
	})
	const show = ref(false)
	defineExpose({
		change,
	})
	function change(x,t) {
		tipObj.value.title = x
		if(!show.value){
			show.value = !show.value
			debounce((x)=>{
				this.$emit('cloShow')
				show.value = !show.value
			},t).apply()
		}
	}
</script>

<style>
</style>