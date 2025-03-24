<template>
    <view style="height: 100%">
        <comNavTab csTit="步骤条">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
			tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧.//步骤条一定会有更新!"
			next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<ComTitle titleTxt="基本用法">
				<template #rB>
					<button class="cu-btn bg-blue shadow" @tap="basicsSteps">下一步</button>
				</template>
			</ComTitle>
			<view class="bg-white margin-xs padding radius-df margin-sm">
			    <view class="cu-steps">
			        <view :class="'cu-item ' + (index > basics ? '' : 'text-red')" v-for="(item, index) in basicsList" :key="index">
			            <text :class="'cuIcon-' + item.icon"></text>
			
			            {{ item.name }}
			        </view>
			    </view>
			</view>
			
			<view class="bg-white margin-xs padding radius-df margin-sm">
			    <view class="cu-steps">
			        <view :class="'cu-item ' + (index > basics ? '' : 'text-orange')" v-for="(item, index) in basicsList" :key="index">
			            <text :class="'cuIcon-' + (index > basics ? 'title' : item.icon)"></text>
			
			            {{ item.name }}
			        </view>
			    </view>
			</view>
			
			<view class="bg-white margin-xs padding radius-df margin-sm">
			    <view class="cu-steps steps-arrow">
			        <view :class="'cu-item ' + (index > basics ? '' : 'text-blue')" v-for="(item, index) in basicsList" :key="index">
			            <text :class="'cuIcon-' + item.icon"></text>
			
			            {{ item.name }}
			        </view>
			    </view>
			</view>
			
			<ComTitle titleTxt="数字用法">
				<template #rB>
					<button class="cu-btn bg-blue shadow" @tap="numSteps">下一步</button>
				</template>
			</ComTitle>
			<view class="bg-white margin-xs padding radius-df margin-sm">
			    <view class="cu-steps">
			        <view :class="'cu-item ' + (index > num ? '' : 'text-blue')" v-for="(item, index) in numList" :key="index">
			            <text :class="'num ' + (index == 2 ? 'err' : '')" :data-index="index + 1"></text>
			
			            {{ item.name }}
			        </view>
			    </view>
			</view>
			
			<ComTitle titleTxt="多级显示">
				<template #rB>
					<button class="cu-btn bg-blue shadow" @tap="scrollSteps">下一步</button>
				</template>
			</ComTitle>
			<scroll-view scroll-x class="bg-white padding response cu-steps steps-bottom margin-top-sm" :scroll-into-view="'scroll-' + scroll" scroll-with-animation>
			    <view :class="'cu-item ' + (index > scroll ? '' : 'text-blue') + ' padding-lr-xl'" :id="'scroll-' + index" v-for="(item, index) in 10" :key="index">
			        Level {{ index + 1 }}
			
			        <text class="num" :data-index="index + 1"></text>
			    </view>
			</scroll-view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
export default {
	components:{
		comNavTab,
		ComTitle
	},
    data() {
        return {
            basicsList: [
                {
                    icon: 'usefullfill',
                    name: '开始'
                },
                {
                    icon: 'radioboxfill',
                    name: '等待'
                },
                {
                    icon: 'roundclosefill',
                    name: '错误'
                },
                {
                    icon: 'roundcheckfill',
                    name: '完成'
                }
            ],
            basics: 0,
            numList: [
                {
                    name: '开始'
                },
                {
                    name: '等待'
                },
                {
                    name: '错误'
                },
                {
                    name: '完成'
                }
            ],
            num: 0,
            scroll: 0
        };
    },
    methods: {
        basicsSteps() {
            this.basics = this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1
        },

        numSteps() {
            this.num = this.num == this.numList.length - 1 ? 0 : this.num + 1
        },

        scrollSteps() {
            this.scroll = this.scroll == 9 ? 0 : this.scroll + 1
        }
    }
};
</script>
<style>
</style>
