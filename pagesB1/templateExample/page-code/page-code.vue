<template>
	<view>
		<comNavTab csTit="代码块">
			<ComTitle titleTxt="基础代码示例"
			valueTxt="示例样式" :code-show="true"></ComTitle>
			<ComTitle titleTxt="单类信息书写示例"/>
			<codeCard titTxt="信息示例" :forComTit="false" tip-txt="信息"
			 next-txt="/><后缀>" 
			 preTxt="<前缀" valueTxt="信息提示/代码"></codeCard>
		</comNavTab>
	</view>
</template>

<script>
	import codeCard from '../../templateComponents/codeCard/codeCard.vue';
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	export default {
		components:{
			codeCard,
			comNavTab,
			ComTitle
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
