<template>
    <view style="height: 100%">
        <comNavTab csTit="骨架屏">
			<codeCard tip-txt="//骨架屏一般用于数据未加载时的视觉表现,减少用户白屏等待焦虑." pre-txt="<skeletons loading=" value-txt="true" next-txt="/></skeletons>"></codeCard>
			<ComTitle title-txt="基本样式">
				<template #rB>
					开启骨架屏
					<switch @change="openSkeleton" class="margin-left-xs" :checked="loading"></switch>
				</template>
			</ComTitle>
			<view class="bg-white">
			    <view class="cu-card case no-card" v-for="(item, index) in data_var" :key="index">
			        <skeletons :loading="item.loading" :column="4" :columnWidth="['50%', '90%', '70%', '80%']" endHeight="36rpx">
			            <view class="padding">
			                <view class="text-lg text-black">岁月静好</view>
			                <view class="text-lg padding-tb-xs">你的努力一定会被旁人看在眼里。</view>
			                <view class="text-lg">谢谢你 在这世界的角落 发现了我</view>
			                <view class="text-lg padding-top-xs">追踪着鹿的猎人是看不见山的。</view>
			            </view>
			        </skeletons>
			    </view>
			</view>
			
			<ComTitle title-txt="基本样式">
				<template #rB>
					两列
					<switch @change="openSkeleton" class="margin-left-xs" :checked="loading"></switch>
				</template>
			</ComTitle>
			<view class="bg-white skeleton-double-column">
			    <view class="cu-card case no-card" v-for="(item, index) in data_var" :key="index">
			        <skeletons :loading="item.loading" :column="4" :columnWidth="['50%', '90%', '70%', '80%']" endHeight="36rpx">
			            <view class="padding">
			                <view class="text-lg text-black">岁月静好</view>
			                <view class="text-lg padding-tb-xs">谢谢你</view>
			                <view class="text-lg">在这世界的角落</view>
			                <view class="text-lg padding-top-xs">发现了我</view>
			            </view>
			        </skeletons>
			    </view>
			</view>
			
			<ComTitle title-txt="基本样式">
				<template #rB>
					带有头像
					<switch @change="openSkeleton" class="margin-left-xs" :checked="loading"></switch>
				</template>
			</ComTitle>
			<view class="bg-white padding-tb">
			    <view class="cu-card article no-card" v-for="(item, index) in data_var" :key="index">
			        <skeletons :loading="item.loading" avatar :column="4" :columnWidth="['60%', '90%', '70%', '70%']" endHeight="36rpx">
			            <view class="flex">
			                <view class="cu-avatar lg round margin-left bg-red">
			                    <text class="text-lg">小可</text>
			                </view>
			                <view class="padding-sm">
			                    <view class="text-lg text-black">岁月静好</view>
			                    <view class="text-lg padding-tb-xs">你的努力一定会被旁人看在眼里。</view>
			                    <view class="text-lg">谢谢你 在这世界的角落 发现了我</view>
			                    <view class="text-lg padding-top-xs">追踪着鹿的猎人是看不见山的。</view>
			                </view>
			            </view>
			        </skeletons>
			    </view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import skeletons from '../../templateComponents/skeletons/skeletons.vue'
export default {
	components:{
		skeletons,
		comNavTab,
		ComTitle
	},
    data() {
        return {
            loading: false,
            sample: [
                {
                    tagName: '小可'
                },
                {
                    tagName: '小可'
                }
            ],
            data_var: []
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let _data = this.sample;
        _data.forEach((v) => {
            v.loading = false;
        });
        this.data_var = _data
    },
    methods: {
        /**
         * 开启骨架屏
         */
        openSkeleton() {
            this.loading = !this.loading
            let _data = this.sample;
            _data.forEach((v) => {
                v.loading = false;
            });
            this.data_var = _data
            if (this.loading == false) {
                _data.forEach((v) => {
                    v.loading = false;
                });
            }
            if (this.loading == true) {
                _data.forEach((v) => {
                    v.loading = true;
                });
            }
            this.data_var = _data
        }
    }
};
</script>
<style>
</style>
