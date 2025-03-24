<template>
	<view style="width: 100%;height: 100%;">
		<uImage :borderRadius="borderRadi" :src="imgUrl" :ani-close="aniClo" :height="'100%'" :mode="loadMode">
			<template v-slot:loading>
				<view :style="[{'transform':'scale('+tsc+')'},{'height':loadHeight}]">
					<flymaLoad :load-inx="loInx"/>
				</view>
			</template>
			<template v-slot:error>
				<view class="flex flex-column align-center">
					<text class="cuIcon-infofill text-red"></text>
				</view>
			</template>
		</uImage>
	</view>
</template>

<script>
	import uImage from './u-image.vue'
	import flymaLoad from '../flyma-load/flyma-load.vue';
	export default {
		name: "imgLoad",
		components:{
			uImage,
			flymaLoad
		},
		props:{
			loadHeight:{
				type:String,
				default:'100%'
			},
			aniClo:{
				type:Boolean,
				default:false
			},
			loInx:{
				type:Number,
				default:1
			},
			tsc:{
				type:Number,
				default:1
			},
			borderRadi:{
				type:String,
				default:'0'
			},
			imgUrl:{
				type:String,
				default:'0'
			},
			loadMode:{
				type:String,
				default:'heightFix'
			}
		},
		setup() {
			
		}
	}
</script>

<style>
</style>