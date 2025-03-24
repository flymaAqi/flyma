<template>
    <view style="height: 100%">
       <comNavTab csTit="emojl选择">
		   <view class="container_index text-center">
		       <view class="padding-sm text-center">
		           <view class="text-sl">{{ emoji }}</view>
		       </view>
		   
		       <view class="margin bg-white radius shadow-lg" style="max-height: 1100rpx">
		           <scroll-view class="pro_list" scroll-y style="height: 1000rpx">
		               <view class="cu-list grid col-5 no-border">
		                   <view class="cu-item text-xxxl" @tap="emojiChange" :data-value="item.emoji" v-for="(item, index) in iconList" :key="index">
		                       <view>{{ item.emoji }}</view>
		                   </view>
		               </view>
		           </scroll-view>
		       </view>
		       <view class="cu-btn padding-xl bg-gradual-cyan-light" @tap="jumpPage" data-page="addEvent" :data-emoji="emoji" hover-class="item-hover" hover-stay-time="100">
		           <text class="margin-tb-sm text-xxl">确认选择{{ emoji }}</text>
		       </view>
		   </view>
	   </comNavTab>
    </view>
</template>

<script>
export default {
    data() {
        return {
            emojiNum: 1,
            iconList: [
                {
                    emoji: '❤️'
                },
                {
                    emoji: '✨'
                },
                {
                    emoji: '😗'
                },
                {
                    emoji: '😀'
                },
                {
                    emoji: '😄'
                },
                {
                    emoji: '😆'
                },
                {
                    emoji: '🤣'
                },
                {
                    emoji: '🙃'
                },
                {
                    emoji: '🥰'
                },
                {
                    emoji: '😍'
                },
                {
                    emoji: '🤩'
                },
                {
                    emoji: '😘'
                },
                {
                    emoji: '😙'
                },
                {
                    emoji: '😋'
                },
                {
                    emoji: '😛'
                },
                {
                    emoji: '😜'
                },
                {
                    emoji: '😝'
                },
                {
                    emoji: '🤫'
                },
                {
                    emoji: '😑'
                },
                {
                    emoji: '🙄'
                },
                {
                    emoji: '😔'
                },
                {
                    emoji: '😪'
                },
                {
                    emoji: '😕'
                },
                {
                    emoji: '☹️'
                },
                {
                    emoji: '😮'
                },
                {
                    emoji: '😰'
                },
                {
                    emoji: '😓'
                },
                {
                    emoji: '😩'
                },
                {
                    emoji: '😤'
                },
                {
                    emoji: '😡'
                },
                {
                    emoji: '😈'
                },
                {
                    emoji: '💀'
                },
                {
                    emoji: '🤡'
                },
                {
                    emoji: '👻'
                },
                {
                    emoji: '👋'
                },
                {
                    emoji: '🖐️'
                },
                {
                    emoji: '👌'
                },
                {
                    emoji: '👈'
                },
                {
                    emoji: '👉'
                },
                {
                    emoji: '🤙'
                },
                {
                    emoji: '🙏'
                },
                {
                    emoji: '🤳'
                },
                {
                    emoji: '💅'
                },
                {
                    emoji: '👃'
                },
                {
                    emoji: '👂'
                },
                {
                    emoji: '👀'
                },
                {
                    emoji: '👁️'
                },
                {
                    emoji: '👶'
                },
                {
                    emoji: '👧'
                },
                {
                    emoji: '👨‍🦳'
                },
                {
                    emoji: '🙍'
                },
                {
                    emoji: '🙅'
                },
                {
                    emoji: '💁'
                },
                {
                    emoji: '🙇'
                },
                {
                    emoji: '👩‍🍳'
                },
                {
                    emoji: '🧙'
                },
                {
                    emoji: '🚶'
                },
                {
                    emoji: '🧑‍🤝‍🧑'
                },
                {
                    emoji: '👫'
                },
                {
                    emoji: '💏'
                },
                {
                    emoji: '👪'
                },
                {
                    emoji: '👨‍👩‍👧‍👦'
                },
                {
                    emoji: '🌂'
                },
                {
                    emoji: '🎃'
                },
                {
                    emoji: '🌈'
                }
            ],
            gridCol: 5,
            emoji: '😍'
        };
    },
    methods: {
        emojiChange(e) {
            this.emoji = e.currentTarget.dataset.value
        },

        jumpPage(e) {
            uni.setStorage({
                key: 'emoji',
                data: e.currentTarget.dataset.emoji,
                success: function () {
                    uni.navigateBack(); //返回上一个页面
                }
            });
        }
    }
};
</script>
<style>

.button_type {
    height: 100rpx;
    line-height: 100rpx;
    margin-left: 25%;
    bottom: 100rpx;
    font-size: large;
    position: fixed;
    width: 50%;
    text-align: center;
    border-radius: 25rpx;
}
</style>
