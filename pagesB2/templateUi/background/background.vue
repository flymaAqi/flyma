<template>
    <view style="height: 100%;">
		<comNavTab csTit="背景">
			<ComTitle titleTxt="十级纯色背景" valueTxt="bg-oc-{color}" :code-show="true">
				<view class="grid col-4 padding-xs bg-gradual-blue-light aqi-margin-sm">
				    <view class="padding-xs" v-for="(items, index) in ColorListNew" :key="index">
				        <block v-for="(item, j) in 10" :key="j">
				            <view :class="'bg-oc-' + items.name + '-' + j + ' radius padding-tb-xs text-center margin-tb-xs'">
				                <view class="text-sm">{{ items.name }}-{{ j }}</view>
				            </view>
				        </block>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="深色背景" valueTxt="bg-{color}" :code-show="true">
				<view class="grid col-3 padding-sm aqi-margin-sm bg-gradual-blue-light">
				    <view class="padding-sm" v-for="(item, index) in colorList" :key="index">
				        <view :class="'bg-' + item.name + ' padding-sm radius-lg text-center'">
				            <view class="padding-top-xs">{{ item.name }}</view>
				        </view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="浅色背景" valueTxt="bg-{color} light" :code-show="true">
				<view class="grid col-3 bg-gradual-blue-light aqi-margin-sm padding-sm">
					<view class="padding-sm" v-for="(item, index) in colorList" :key="index">
						<view v-if="index < 12" :class="'bg-' + item.name + ' padding-tb-sm padding-lr-xs radius-lg text-center light'">
							<view class="padding-top-xs">{{ item.name }} light</view>
						</view>
					</view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="渐变背景" valueTxt="bg-gradual-r{color}" :code-show="true">
				<view class="grid col-2 bg-gradual-blue-light aqi-margin-sm padding-sm">
				    <view class="padding-sm">
				        <view class="bg-gradual-red padding radius-lg text-center shadow-blur">
				            <view class="text-lg">red</view>
				            <view class="margin-top-sm">#f43f3b-#ec008c</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-orange padding radius-lg text-center shadow-blur">
				            <view class="text-lg">orange</view>
				            <view class="margin-top-sm">#ff9700-#ed1c24</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-green padding radius-lg text-center shadow-blur">
				            <view class="text-lg">green</view>
				            <view class="margin-top-sm">#39b54a-#8dc63f</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-blue padding radius-lg text-center shadow-blur">
				            <view class="text-lg">blue</view>
				            <view class="margin-top-sm">#0081ff-#1cbbb4</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-purple padding radius-lg text-center shadow-blur">
				            <view class="text-lg">purple</view>
				            <view class="margin-top-sm">#9000ff-#5e'00'ff</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-pink padding radius-lg text-center shadow-blur">
				            <view class="text-lg">pink</view>
				            <view class="margin-top-sm">#ec008c-#6739b6</view>
				        </view>
				    </view>
				
				    <view class="padding-sm">
				        <view class="bg-gradual-pinknew padding radius-lg text-center shadow-blur">
				            <view class="text-lg">pinknew</view>
				            <view class="margin-top-sm">#fea894-#ff1047</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-cyan padding radius-lg text-center shadow-blur">
				            <view class="text-lg">天青</view>
				            <view class="margin-top-sm text-Abc">#06edfe - #48b2fe</view>
				        </view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="渐变高亮" valueTxt="bg-gradual-{color}-light" :code-show="true">
				<view class="grid col-2 bg-gradual-blue-light aqi-margin-sm padding-sm">
				    <view class="padding-sm">
				        <view class="bg-gradual-red-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">red</view>
				            <view class="margin-top-sm">#f9d3d0</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-orange-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">orange</view>
				            <view class="margin-top-sm">#fcdec7</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-green-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">green</view>
				            <view class="margin-top-sm">#cfeece</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-blue-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">blue</view>
				            <view class="margin-top-sm">#bfe0ff</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-purple-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">purple</view>
				            <view class="margin-top-sm">dfd0f7</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-pink-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">pink</view>
				            <view class="margin-top-sm">#edd1f2</view>
				        </view>
				    </view>
				
				    <view class="padding-sm">
				        <view class="bg-gradual-pinknew-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">pinknew</view>
				            <view class="margin-top-sm">#f7cee5</view>
				        </view>
				    </view>
				    <view class="padding-sm">
				        <view class="bg-gradual-cyan-light padding radius-lg text-center shadow-blur">
				            <view class="text-lg">cyan</view>
				            <view class="margin-top-sm">#cdefff</view>
				        </view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="图片背景" valueTxt="bg-img bg-mask" :code-show="true">
				<view class="bg-gradual-blue-light aqi-margin-sm padding-sm">
				    <view
				        class="bg-img bg-mask padding-sm margin-sm radius-lg"
				        :style="{backgroundImage:'url('+imgUrls[0]+')'}"
				    >
				        <view class="padding-xl text-white">
				            <view class="padding-xs text-xl">悬浮文字</view>
				            <view class="padding-xs">Only the guilty need fear me.</view>
				        </view>
				    </view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="透明背景(文字层)" tip-txt="//图片背景使用上面的图片背景" valueTxt="bg-shadeTop padding-bottom-xl" :code-show="true">
				<view class="bg-gradual-blue-light aqi-margin-sm padding-sm">
				    <view class="grid col-2 padding-xs">
				        <view
				            class="bg-img padding-bottom-xl"
				            :style="{backgroundImage:'url('+imgUrls[4]+')'}"
				        >
				            <view class="bg-shadeTop padding padding-bottom-xl">上面开始</view>
				        </view>
				        <view
				            class="bg-img padding-top-xl flex align-end"
				            :style="{backgroundImage:'url('+imgUrls[5]+')'}"
				        >
				            <view class="bg-shadeBottom padding padding-top-xl flex-sub">下面开始</view>
				        </view>
				    </view>
				</view>
			</ComTitle>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	import {
		dataImgs
	} from '@/common/comImg.js'
	import {color_list} from '@/common/commonData.js'
export default {
	components:{
		comNavTab,
		ComTitle
	},
    data() {
        return {
			colorList: color_list,
			imgUrls: dataImgs,
            ColorListNew: [
                {
                    name: 'red'
                },
                {
                    name: 'orange'
                },
                {
                    name: 'yellow'
                },
                {
                    name: 'pink'
                },
                {
                    name: 'grape'
                },
                {
                    name: 'violet'
                },
                {
                    name: 'indigo'
                },
                {
                    name: 'blue'
                },
                {
                    name: 'cyan'
                },
                {
                    name: 'teal'
                },
                {
                    name: 'green'
                },
                {
                    name: 'lime'
                },
                {
                    name: 'gray'
                }
            ],

            j: ''
        };
    },
    methods: {}
};
</script>
<style>
</style>
