<template>
    <view style="height: 100%">
		<comNavTab csTit="滚动提示">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
			tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧.//滚动提示应该不会有更新了"
			next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<view class="scrollPage bg-gradual-blue-light">
				<ComTitle titleTxt="基础样式"/>
			    <swiper class="tips-swiperitem margin" :autoplay="true" :vertical="true" :circular="true" interval="2000" duration="500">
			        <block v-for="(item, index) in Headlines" :key="index">
			            <swiper-item @touchmove.stop.prevent="falseFun">
			                <view class="radius-lg bg-orange light">
			                    <view class="padding-xs text-xl">
			                        <text class="cuIcon-magic text-orange"></text>
			                        <text class="text-df">{{ item.title }}</text>
			                    </view>
			                </view>
			            </swiper-item>
			        </block>
			    </swiper>
			
			    <view class="tips-box margin-bottom">
			        <swiper
			            class="tips-new-swiper bg-orange light"
			            :vertical="true"
			            :autoplay="true"
			            :circular="true"
			            interval="3000"
			            duration="500"
			            display-multiple-items="1"
			            easing-function="easeInOutCubic"
			        >
			            <block v-for="(item, idx) in Headlines" :key="idx">
			                <swiper-item>
			                    <view class="padding-left"><text class="cuIcon-magic text-orange">{{ item.title }}</text></view>
			                </swiper-item>
			            </block>
			        </swiper>
			    </view>
			
				<ComTitle titleTxt="形状/颜色"/>
			    <swiper class="tips-swiperitem margin" :autoplay="true" :vertical="true" :circular="true" interval="2000" duration="500">
			        <block v-for="(item, index) in Headlines" :key="index">
			            <swiper-item @touchmove.stop.prevent="falseFun">
			                <view class="radius bg-orange light">
			                    <view class="padding-xs text-xl">
			                        <text class="cuIcon-magic text-orange"></text>
			                        <text class="text-df">{{ item.title }}</text>
			                    </view>
			                </view>
			            </swiper-item>
			        </block>
			    </swiper>
			
			    <swiper class="tips-swiperitem margin-tb" :autoplay="true" :vertical="true" :circular="true" interval="2000" duration="500">
			        <block v-for="(item, index) in Headlines" :key="index">
			            <swiper-item @touchmove.stop.prevent="falseFun">
			                <view class="bg-pink light">
			                    <view class="padding-xs text-xl">
			                        <text class="cuIcon-magic text-pink"></text>
			                        <text class="text-df">{{ item.title }}</text>
			                    </view>
			                </view>
			            </swiper-item>
			        </block>
			    </swiper>
			
				<ComTitle titleTxt="左右方向"/>
			    <swiper class="tips-swiperitem margin-tb" :autoplay="true" :circular="true" interval="2000" duration="500">
			        <block v-for="(item, index) in Headlines" :key="index">
			            <swiper-item @touchmove.stop.prevent="falseFun">
			                <view class="bg-pink light">
			                    <view class="padding-xs text-xl">
			                        <text class="cuIcon-magic text-pink"></text>
			                        <text class="text-df">{{ item.title }}</text>
			                    </view>
			                </view>
			            </swiper-item>
			        </block>
			    </swiper>
			
				<ComTitle titleTxt="点击跳转"/>
			    <swiper class="tips-swiperitem margin-tb" :autoplay="true" :circular="true" interval="2000" duration="500">
			        <block v-for="(item, index) in Headlines" :key="index">
			            <swiper-item @touchmove.stop.prevent="falseFun" @tap="linesclick" :data-url="item.url">
			                <view class="bg-orange light">
			                    <view class="padding-xs text-xl">
			                        <text class="cuIcon-magic text-orange"></text>
			                        <text class="text-df">{{ item.title }}</text>
			                    </view>
			                </view>
			            </swiper-item>
			        </block>
			    </swiper>
			
				<ComTitle titleTxt="两行滚动"/>
			    <swiper class="tips-bot-swiper bg-gradual-pinknew-light radius-df padding-left-sm" :vertical="true" :autoplay="true" interval="3000" display-multiple-items="2">
			        <block v-for="(item, idx) in 3" :key="idx">
			            <swiper-item>
			                <view class="flex text-orange" style="align-items: baseline">
			                    <text class="padding-top-xs" :decode="true">2021-11-25 &nbsp;&nbsp;&nbsp;17:38</text>
			                    <text :decode="true">&nbsp;&nbsp;123</text>
			                </view>
			            </swiper-item>
			        </block>
			    </swiper>
			
				<ComTitle titleTxt="多行滚动"/>
			    <view class="tips-boxs margin-tb margin-lr-sm">
			        <view class="tips-box_i bg-gradual-pinknew-light radius-lg padding-lr padding-top-xs">
			            <swiper
			                class="tips-swiper"
			                :vertical="true"
			                :autoplay="true"
			                :circular="true"
			                interval="3000"
			                :style="'height: ' + (list.length > 6 ? '460' : list.length * 60) + 'rpx;'"
			                :display-multiple-items="list.length > 6 ? 7 : list.length"
			            >
			                <block v-for="(item, idx) in list" :key="idx">
			                    <swiper-item>
			                        <view class="flex" style="align-items: baseline">
			                            <text :decode="true" class="text-gray">{{ item.create_time }} &nbsp;&nbsp;&nbsp;</text>
			                            <text :decode="true" class="text-orange">&nbsp;&nbsp;抽中了{{ item.prize_name }}</text>
			                        </view>
			                    </swiper-item>
			                </block>
			            </swiper>
			        </view>
			    </view>
			</view>
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
            Headlines: [
                {
                    id: 0,
                    title: '孩儿立志出乡关',
                    url: '/pages/about/about/about'
                },
                {
                    id: 1,
                    title: '学不成名誓不还',
                    url: '/pages/about/about/about'
                },
				{
				    id: 2,
				    title: '埋骨何须桑梓地',
				    url: '/pages/about/about/about'
				},
				{
				    id: 3,
				    title: '人生无处不青山',
				    url: '/pages/about/about/about'
				}
            ],
            list: [
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '一等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '三等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '二等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '四等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '五等奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '参与奖'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '会员卡'
                },
                {
                    create_time: '2021-1-1 12:00',
                    prize_name: '优惠券'
                }
            ]
        };
    },
    methods: {
        /**
         * 点击跳转
         * @param {*} e
         */
        linesclick: function (e) {
            var swip = e.currentTarget.dataset;
            uni.navigateTo({
                url: swip.url
            });
        },

        falseFun() {
            console.log('占位：函数 false 未声明');
        }
    }
};
</script>
<style>

</style>
