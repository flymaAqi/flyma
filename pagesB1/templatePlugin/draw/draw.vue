<template>
    <view style="height: 100%">
        <comNavTab csTit="抽奖">
			<view class="margin-tb-xl">
				<colorgaLuckdraw></colorgaLuckdraw>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import colorgaLuckdraw from '@/pagesB1/templateComponents/colorga-luckdraw/colorga-luckdraw.vue'
export default {
	components:{
		colorgaLuckdraw,
		comNavTab,
		ComTitle
	},
    data() {
        return {
            remian_num: 5,
		}
	}
};
</script>
<style>

</style>
