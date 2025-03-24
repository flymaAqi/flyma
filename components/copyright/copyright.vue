<template>
    <view>
		<divider>
			<text class="cu-load colorui-text" :class="!compName ? 'loading' : 'over'"></text>
		</divider>
        <view class="text-center padding-tb-sm">
            <view class="colorui-text">Copyright © 2025 Flyma. All Rights Reserved.</view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
		compName: {
			type: Boolean,
			default: true
		}
	},
};
</script>
<style></style>
