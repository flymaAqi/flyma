<template>
    <view style="height: 100%">
        <comNavTab csTit="卡片设计">
			<view class="container_index">
			    <!-- 预览样式 -->
			    <view class="grid col-1 padding-sm">
			        <view class="padding-sm">
			            <view :class="'bg-' + bg_color + ' padding-sm radius-lg text-center light'">
			                <view class="flex padding-xs justify-between">
			                    <view class="text-xsl">{{ emoji }}</view>
			                    <view>
			                        <view class="padding-xs radius text-right" style="margin-top: -20rpx">
			                            <text>{{ nowTime }}</text>
			                        </view>
			                        <view class="padding-xs radius text-xxxl text-right text-cut padding-tb">
			                            <text class="text-cut">{{ title || '在下方输入标题' }}</text>
			                        </view>
			                        <view class="padding-xs text-right" style="margin-bottom: -20rpx">
										<view>
											<text class="text-gray text-bold text-xl">距离 {{ date }}</text>
										</view>
										<text v-if="formatD0(date)" class="text-xl">还有</text>
			                            <text v-else class="text-bold text-lg">已经</text>
			                            <text class="text-sl">{{ formatD1(date) }}</text>
			                            <text class="text-xl">天</text>
			                        </view>
			                    </view>
			                </view>
			            </view>
			        </view>
			    </view>
			
			    <view class="padding">
			        <!-- 选配色 -->
			        <view class="grid col-1 margin-bottom text-center">
			            <view class="flex">
			                <view class="padding-left-sm">
			                    <view class="text-df padding-top-xs">浅色</view>
			                    <view class="text-df padding-top-sm">深色</view>
			                </view>
			                <checkbox-group class="flex-sub" @change="checkboxChange">
			                    <label class="margin-xs" v-for="(item, index) in checkboxItems" :key="index">
			                        <checkbox :class="'round padding-bottom-xs ' + item.name" :value="item.value" :checked="item.checked" />
			                    </label>
			                </checkbox-group>
			            </view>
			        </view>
			
			        <!-- 设定标题 -->
			        <view class="flex p-xs margin-bottom-sm mb-sm">
			            <view class="flex-sub padding-xs margin-xs radius text-xl">
			                📄
			                <text class="text-black">标题</text>
			            </view>
			            <view class="flex-treble bg-grey light padding-xs margin-xs radius">
			                <input class="text-grey" placeholder-style="color:grey;" @input="bindKeyInput" maxlength="7" placeholder="请输入标题(8字以内)" />
			            </view>
			        </view>
			
			        <!-- 选择日期 -->
			        <view class="flex">
			            <view class="flex-treble bg-grey light padding-sm margin-xs radius-lg text-xxl">
			                <picker mode="date" :value="date" @change="DateChange">
			                    <view class="picker">
			                        📆
			                        <text class="text-xxl" style="color: grey">{{ date }}</text>
			                    </view>
			                </picker>
			            </view>
			            <view
			                class="flex-sub bg-grey light margin-xs radius-lg text-sl"
			                style="display: flex; justify-content: center; text-align: center; align-items: center"
			                @tap="jumpPageChoise"
			                data-page="choiseEmoji"
			                hover-class="item-hover"
			                hover-stay-time="100"
			            >
			                {{ emoji }}
			            </view>
			        </view>
			    </view>
			
			    <view class="margin-lr padding bg-white radius-lg">
			        <view class="flex justify-between">
			            <view class="text-black">操作说明</view>
			        </view>
			        <view class="padding-top">
			            <view class="text-sm">1、单选框选择背景颜色</view>
			            <view class="text-sm padding-tb-xs">2、输入标题，当前显示最大输入7个字</view>
			            <view class="text-sm">3、选择时间及Emoji图标</view>
			            <view class="text-sm padding-tb-xs">4、生成对应的卡片，可应用于倒数日、名片等场景</view>
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
            bg_color: 'gradual-pinknew',
            title: '在下方输入标题',
            date: '',
            emoji: '🌈',

            checkboxItems: [
                {
                    name: 'red',
                    value: 'red'
                },
                {
                    name: 'yellow',
                    value: 'yellow'
                },
                {
                    name: 'olive',
                    value: 'olive'
                },
                {
                    name: 'blue',
                    value: 'blue'
                },
                {
                    name: 'cyan',
                    value: 'cyan'
                },
                {
                    name: 'purple',
                    value: 'purple'
                },
                {
                    name: 'mauve',
                    value: 'mauve'
                },
                {
                    name: 'pink',
                    value: 'pink'
                },
                {
                    name: 'red',
                    value: 'gradual-red'
                },
                {
                    name: 'orange',
                    value: 'gradual-orange'
                },
                {
                    name: 'green',
                    value: 'gradual-green'
                },
                {
                    name: 'blue',
                    value: 'gradual-blue'
                },
                {
                    name: 'cyan',
                    value: 'gradual-cyan'
                },
                {
                    name: 'purple',
                    value: 'gradual-purple'
                },
                {
                    name: 'mauve',
                    value: 'gradual-pinknew'
                },
                {
                    name: 'pink',
                    value: 'gradual-pink'
                }
            ],

            type: '',
            weather: '',
            id_var: '',
            checkboxValues: '',
			nowTime: ''
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var date = new Date();
        this.date = date.toLocaleDateString().replace(new RegExp('/', 'gm'), '-')
		this.nowTime = date.toLocaleDateString().replace(new RegExp('/', 'gm'), '-')
        try {
            uni.setStorageSync('bg_color', this.bg_color);
            uni.setStorageSync('title', this.title);
            uni.setStorageSync('date', this.date);
            uni.setStorageSync('emoji', this.emoji);
            uni.setStorageSync('type', this.type);
            uni.setStorageSync('weather', this.weather);
        } catch (e) {
        }
        if (options.emoji) {
            this.emoji = options.emoji
        }
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        try {
            uni.setStorageSync('isFrash', false);
            this.bg_color = uni.getStorageSync('bg_color'),
            this.title = uni.getStorageSync('title'),
            this.date = uni.getStorageSync('date'),
            this.emoji = uni.getStorageSync('emoji'),
            this.type = uni.getStorageSync('type'),
            this.weather = uni.getStorageSync('weather'),
            this.id_var = uni.getStorageSync('_id')
        } catch (e) {
        } // Do something when catch error
    },
    methods: {
		formatD0(ts) {
		  var d = new Date(ts)
		  var myDate = new Date();
		  return d > myDate
		},
		formatNumber(n) {
		  n = n.toString()
		  return n[1] ? n : '0' + n
		},
		formatD1(ts) {
		  var d = new Date(ts)
		  var myDate = new Date();
		  var theTime = d - myDate
		  var minute = 0; // 分
		  var hour = 0;//小时
		  var day = 0
		  if (theTime > 60) {
		    minute = parseInt(theTime / 60 / 1000);
		    theTime = parseInt(theTime % 60);
		    if (minute > 60) {
		      hour = parseInt(minute / 60);
		    }
		    if (hour > 24) {
		      day = parseInt(hour / 24 + 1);
		    }
		    else if (hour > 0) {
		      day = 1
		    }
		    return day
		  }
		  else {
		    theTime = myDate - d
		    minute = parseInt(theTime / 60 / 1000);
		    theTime = parseInt(theTime % 60);
		    if (minute > 60) {
		      hour = parseInt(minute / 60);
		    }
		    if (hour > 24) {
		      day = parseInt(hour / 24 + 1);
		    }
		    else if (hour > 0) {
		      day = 0
		    }
		    return day
		  }
		},
        checkboxChange: function (e) {
            var that = this;
            let checkboxValues = null;
            let checkboxItems = this.checkboxItems;
            let values = e.detail.value;
            for (i = 0, lenI = checkboxItems.length, void 0; i < lenI; ++i) {
                var i;
                var lenI;
                if (checkboxItems[i].value == values[values.length - 1]) {
                    checkboxItems[i].checked = true;
                    checkboxValues = checkboxItems[i].value;
                } else {
                    checkboxItems[i].checked = false;
                }
            }
            that.checkboxItems = checkboxItems
            that.checkboxValues = checkboxValues
            that.bg_color = checkboxValues
        },

        bindKeyInput: function (e) {
            this.title = e.detail.value
        },

        jumpPageChoise(e) {
            try {
                uni.setStorageSync('emoji', this.emoji);
                uni.setStorageSync('date', this.date);
                uni.setStorageSync('title', this.title);
                uni.setStorageSync('bg_color', this.bg_color);
                uni.setStorageSync('isFrash', true);
            } catch (e) {
            }
            uni.navigateTo({
                url: '/pagesB1/templatePlugin/design/choiseEmoji/choiseEmoji'
            });
        },

        DateChange(e) {
			this.formatD0(this.date)
            this.date = e.detail.value
        }
    }
};
</script>
<style>

</style>
