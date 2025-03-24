<template>
    <view style="height: 100%">
        <comNavTab cs-tit="商品滑动">
			<ComTitle titleTxt="同组水平滑动">
				<view class="cu-good-act margin-sm bg-purple light">
				    <view class="cu-good-t-box bg-oc-pink-3">
				        <view class="cu-good-title">精选案例</view>
				    </view>
				    <view class="cu-good-point-con">
				        <swiper class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000" :circular="true">
				            <swiper-item v-for="(item, index) in goods_list" :key="index">
				                <view class="cu-good-point-flex" v-for="(its, index1) in item.goods" :key="index1">
				                    <view class="cu-good-point-img radius-lg">
				                    	<imgLoadu load-mode="aspectFill" :img-url="its.img" />
				                    </view>
				                    <view>30积分</view>
				                </view>
				            </swiper-item>
				        </swiper>
				    </view>
				</view>
			</ComTitle>
			<ComTitle titleTxt="同组垂直滑动"/>
			<view class="cu-good-act margin-sm bg-purple light">
			    <view class="cu-good-t-box bg-oc-pink-3">
			        <view class="cu-good-title">精选商品</view>
			    </view>
			    <view class="cu-good-point-con">
			        <swiper class="swiper-box" :vertical="true" :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000" :circular="true">
			            <swiper-item v-for="(item, index) in goods_list" :key="index">
			                <view class="cu-good-point-flex" v-for="(its, index1) in item.goods" :key="index1">
			                    <view class="cu-good-point-img">
									<view style="width: 100%;height: 100%;">
										<imgLoadu load-mode="aspectFill" :img-url="its.img" />
									</view>
			                    </view>
			                    <view>30积分</view>
			                </view>
			            </swiper-item>
			        </swiper>
			    </view>
			</view>
			<ComTitle titleTxt="单个数据滑动"/>
			
			<view class="cu-good-act margin-sm bg-purple light">
			    <view class="cu-good-t-box bg-oc-pink-3">
			        <view class="cu-good-title">精选数据</view>
			    </view>
			    <view :class="'cu-good-point-con ' + (d_num == 1 ? 'cu-good-wd1' : d_num == 2 ? 'cu-good-wd2' : '')">
			        <swiper class="swiper-box" :indicator-dots="false" :autoplay="true" :interval="1500" :duration="1000" :circular="true" :display-multiple-items="d_num">
			            <swiper-item v-for="(item, index) in g_list" :key="index">
			                <view class="cu-good-point-flex-w">
								<view class="cu-good-point-img radius-lg" style="width: 90%;height: 77%;">
									<imgLoadu load-mode="aspectFill" :img-url="item.img" />
								</view>
			                    <view>{{ 40 }}积分</view>
			                </view>
			            </swiper-item>
			        </swiper>
			    </view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import {whImg} from '../../../pagesB1/commonB1/commonJpg.js'
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
export default {
	components:{
		imgLoadu,
		comNavTab,
		ComTitle
	},
    data() {
        return {
            goods_list: [
                {
                    goods: [
                        {
                            img: whImg[3]
                        },
                        {
                            img: whImg[8]
                        },
                        {
                            img: whImg[4]
                        }
                    ]
                },
                {
                    goods: [
                        {
                            img: whImg[5]
                        },
                        {
                            img: whImg[7]
                        },
                        {
                            img: whImg[6]
                        }
                    ]
                },
                {
                    goods: [
                        {
                            img: whImg[9]
                        },
                        {
                            img: whImg[5]
                        },
                        {
                            img: whImg[4]
                        }
                    ]
                }
            ],

            g_list: [
                {
                    img: whImg[8]
                },
                {
                    img: whImg[7]
                },
                {
                    img: whImg[6]
                },
                {
                    img: whImg[5]
                },
                {
                    img: whImg[4]
                },
                {
                    img: whImg[9]
                }
            ],

            d_num: 3,

            its: {
                img: ''
            }
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let len = this.g_list.length;
        this.d_num = len > 2 ? 3 : len
    },
    methods: {}
};
</script>
<style>

</style>
