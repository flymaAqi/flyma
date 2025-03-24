<template>
    <view style="height: 100%">
        <comNavTab cs-tit="评分">
			<ComTitle titleTxt="基础样式" />
			<view class="padding text-xxl flex align-center margin-sm bg-white radius-df">
			    <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			        <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
			    </view>
			    <view class="margin-left">
			        <text class="text-xxl text-red">{{ active + 1 }}星</text>
			    </view>
			</view>
			
			<ComTitle titleTxt="按钮大小" />
			<view class="margin-sm bg-white radius-lg">
			    <view class="padding-lr padding-tb-sm text-xl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}星</text>
			        </view>
			    </view>
			
			    <view class="padding-lr padding-tb-sm text-xxl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}星</text>
			        </view>
			    </view>
			
			    <view class="padding-lr padding-tb-sm text-xxxl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-red'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}星</text>
			        </view>
			    </view>
			</view>
			
			<ComTitle titleTxt="按钮颜色" />
			<view class="margin-sm bg-white radius-lg">
			    <view class="padding-lr padding-tb-sm text-xl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-orange'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}星</text>
			        </view>
			    </view>
			
			    <view class="padding-lr padding-tb-sm text-xl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-favor' : 'cuIcon-favorfill') + ' ' + extraClass + ' text-yellow'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}星</text>
			        </view>
			    </view>
			</view>
			
			<ComTitle titleTxt="按钮图标" />
			<view class="margin-sm bg-white radius-lg">
			    <view class="padding-lr padding-tb-sm text-xl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-like' : 'cuIcon-likefill') + ' ' + extraClass + ' text-red'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}星</text>
			        </view>
			    </view>
			
			    <view class="padding-lr padding-tb-sm text-xl flex align-center">
			        <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			            <text :class="(index > active ? 'cuIcon-notification' : 'cuIcon-notificationfill') + ' ' + extraClass + ' text-red'"></text>
			        </view>
			        <view class="margin-left">
			            <text class="text-red">{{ active + 1 }}</text>
			        </view>
			    </view>
			</view>
			
			<ComTitle titleTxt="自定义个数" />
			<view class="padding-lr padding-tb-sm text-xl flex align-center margin-sm bg-white radius-df">
			    <view @tap="click_muti" :data-index="index" v-for="(item, index) in count_muti" :key="index">
			        <text :class="(index > active_muti ? 'cuIcon-like' : 'cuIcon-likefill') + ' ' + extraClass + ' text-red'"></text>
			    </view>
			    <view class="margin-left">
			        <text class="text-red">{{ active_muti + 1 }}星</text>
			    </view>
			</view>
			<ComTitle titleTxt="自定义间隔" />
			<view class="padding-lr padding-tb-sm text-xl flex align-center margin-sm bg-white radius-df">
			    <view @tap="click" :data-index="index" v-for="(item, index) in count" :key="index">
			        <text :class="(index > active ? 'cuIcon-like' : 'cuIcon-likefill') + ' ' + extraClass + ' text-red padding-lr-xs'"></text>
			    </view>
			    <view class="margin-left">
			        <text class="text-red">{{ active + 1 }}星</text>
			    </view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
export default {
    components: {
        comNavTab,
		ComTitle
    },
    data() {
        return {
            count: 5,
            active: 0,
            score: 1,
            count_muti: 8,
            active_muti: 0,
            score_muti: 1,
            extraClass: ''
        };
    },
    methods: {
        /**
         * 点击评分
         */
        click(e) {
            const { score, count } = this;
            const active = e.currentTarget.dataset.index;
            this.active = active
            this.$emit(
                'click',
                {
                    detail: {
                        result: (score / count) * active
                    }
                },
                {}
            );
        },

        /**
         * 点击评分
         */
        click_muti(e) {
            const { score_muti, count_muti } = this;
            const active_muti = e.currentTarget.dataset.index;
            this.active_muti= active_muti
            this.$emit(
                'click_muti',
                {
                    detail: {
                        result: (score_muti / count_muti) * active_muti
                    }
                },
                {}
            );
        }
    }
};
</script>
<style>

</style>
