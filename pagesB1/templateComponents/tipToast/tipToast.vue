<template>
	<view>
		<view class="toast-fixed-center aqi-zx-xxl" v-if="show" style="top: 30% !important;">
			<view v-if="tipHomeObj.type" class="radius-lg padding animation-slide-top text-lg bg-gradual-red">
				<text :class="tipHomeObj.icon"></text>
				{{tipHomeObj.title}}
			</view>
			<view v-else
				:class="'radius-lg padding animation-slide-top text-lg ' + (tipObj.type == 'ok' ? 'bg-green light' : 'bg-red light')">
				<text :class="tipObj.icon"></text>
				{{tipObj.title}}
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		debounce
	} from '@/common/commonData.js'
	import {
		ref
	} from 'vue';
	const props = defineProps({
		tipHomeObj: {
			type: Object,
			default: {
				type: false,
				title: '成功!',
				icon: 'cuIcon-roundcheck'
			}
		},
		vsize: {
			type: Number,
			default: 1000
		}
	})
	const show = ref(false)
	defineExpose({
		change,
	})
	const tipObj = ref({
		type: 'ok',
		title: '成功!',
		icon: 'cuIcon-roundcheck'
	})
	
	function change(x,t=null) {
		if (x) {
			tipObj.value.title = x
		}
		if (!show.value) {
			show.value = !show.value
			debounce((x) => {
				show.value = !show.value
			}, t?t:props.vsize).apply()
		}
	}
</script>

<style>
</style>