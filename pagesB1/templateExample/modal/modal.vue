<template>
    <view style="height: 100%">
       <comNavTab csTit="模态框">
		   <ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
		   tip-txt="//组件类我就只写引用方式了,不然代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧."
		   next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" :codeShow="true">
		   	<view class="aqi-margin-sm"></view>
		   </ComTitle>
		   <ComTitle titleTxt="普通窗口"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="Modal" style="height: 84rpx"><text class="text-lg">演示</text></button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal ' + (modalName == 'Modal' ? 'show' : '')">
		       <view class="cu-dialog">
		           <view class="cu-bar bg-gradual-blue-light justify-end">
		               <view class="content">Modal标题</view>
		               <view class="action" @tap="hideModal">
		                   <text class="cuIcon-close text-red"></text>
		               </view>
		           </view>
		           <view class="padding-xl">Modal 内容。</view>
		       </view>
		   </view>
		   
		   <ComTitle titleTxt="底部窗口"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="bottomModal" style="height: 84rpx"><text class="text-lg">演示</text></button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal bottom-modal ' + (modalName == 'bottomModal' ? 'show' : '')">
		       <view class="cu-dialog">
		           <view class="cu-bar bg-gradual-blue-light">
		               <view class="action text-green">确定</view>
		               <view class="action text-blue" @tap="hideModal">取消</view>
		           </view>
		           <view class="padding-xl">Modal 内容。</view>
		       </view>
		   </view>
		   
		   <ComTitle titleTxt="对话窗口"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DialogModal1" style="height: 84rpx">
		               <text class="text-lg">演示1</text>
		           </button>
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DialogModal2" style="height: 84rpx">
		               <text class="text-lg">演示2</text>
		           </button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal ' + (modalName == 'DialogModal1' ? 'show' : '')">
		       <view class="cu-dialog">
		           <view class="cu-bar bg-gradual-blue-light justify-end">
		               <view class="content">Flyma</view>
		               <view class="action" @tap="hideModal">
		                   <text class="cuIcon-close text-red"></text>
		               </view>
		           </view>
		           <view class="padding-xl text-left">适用于其他支持css库的所有平台。</view>
		           <view class="cu-bar bg-gradual-blue-light justify-end">
		               <view class="action">
		                   <button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
		                   <button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
		               </view>
		           </view>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal ' + (modalName == 'DialogModal2' ? 'show' : '')">
		       <view class="cu-dialog">
		           <view class="cu-bar bg-gradual-blue-light justify-end">
		               <view class="content">Flyma</view>
		               <view class="action" @tap="hideModal">
		                   <text class="cuIcon-close text-red"></text>
		               </view>
		           </view>
		           <view class="padding-xl text-left">适用于其他支持css库的所有平台。</view>
		           <view class="cu-bar bg-gradual-blue-light">
		               <view class="action margin-0 flex-sub text-green" @tap="hideModal">
		                   <text class="cuIcon-moneybag"></text>
		                   微信支付
		               </view>
		               <view class="action margin-0 flex-sub text-green solid-left" @tap="hideModal">取消</view>
		               <view class="action margin-0 flex-sub solid-left" @tap="hideModal">确定</view>
		           </view>
		       </view>
		   </view>
		   
		   <ComTitle titleTxt="图片窗口"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="Image" style="height: 84rpx"><text class="text-lg">演示</text></button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal ' + (modalName == 'Image' ? 'show' : '')">
		       <view class="cu-dialog">
		           <view class="bg-img" style="background-image: url(https://image.meiye.art/pic_1632282714190sv72OmGK_kRGxeEWW1D2w); height: 360rpx">
		               <view class="cu-bar justify-end text-white">
		                   <view class="action" @tap="hideModal">
		                       <text class="cuIcon-close"></text>
		                   </view>
		               </view>
		           </view>
		           <view class="cu-bar bg-gradual-blue-light">
		               <view class="action margin-0 flex-sub solid-left" @tap="hideModal">我知道了</view>
		           </view>
		       </view>
		   </view>
		   
		   <ComTitle titleTxt="单选窗口"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="RadioModal" style="height: 84rpx"><text class="text-lg">演示</text></button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal ' + (modalName == 'RadioModal' ? 'show' : '')" @tap="hideModal">
		       <view class="cu-dialog" catchtap>
		           <radio-group class="block">
		               <view class="cu-list menu text-left">
		                   <view class="cu-item" v-for="(item, index) in 5" :key="index">
		                       <label class="flex justify-between align-center flex-sub">
		                           <view class="flex-sub">Item {{ index + 1 }}</view>
		                           <radio class="round"></radio>
		                       </label>
		                   </view>
		               </view>
		           </radio-group>
		       </view>
		   </view>
		   
		   <ComTitle titleTxt="多选窗口(底部弹出)"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="ChooseModal" style="height: 84rpx"><text class="text-lg">演示</text></button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal bottom-modal ' + (modalName == 'ChooseModal' ? 'show' : '')" @tap="hideModal">
		       <view class="cu-dialog">
		           <view class="cu-bar bg-white">
		               <view class="action text-blue" @tap="hideModal">取消</view>
		               <view class="action text-green" @tap="hideModal">确定</view>
		           </view>
		           <view class="grid col-3 padding-sm">
		               <view class="padding-xs" v-for="(item, index) in checkbox" :key="index">
		                   <button :class="'cu-btn orange lg block ' + (item.checked ? 'bg-orange' : 'line-orange')" @tap.stop="ChooseCheckbox(index)">
		                       {{ item.name }}
		                       <view :class="'cu-tag sm round ' + (item.checked ? 'bg-white text-orange' : 'bg-orange')" v-if="item.hot">HOT</view>
		                   </button>
		               </view>
		           </view>
		       </view>
		   </view>
		   
		   <ComTitle titleTxt="侧边抽屉"/>
		   <view class="bg-gradual-blue-light padding-tb">
		       <view class="cu-bar btn-group">
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DrawerModalL" style="height: 84rpx">
		               <text class="text-lg">左侧弹出演示</text>
		           </button>
		           <button class="cu-btn round text-green line-blue shadow" @tap="showModal" data-target="DrawerModalR" style="height: 84rpx">
		               <text class="text-lg">右侧弹出演示</text>
		           </button>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal drawer-modal justify-start ' + (modalName == 'DrawerModalL' ? 'show' : '')" @tap="hideModal">
		       <view class="cu-dialog basis-lg" catchtap :style="'top:' + CustomBar + 'px;height:calc(100vh - ' + CustomBar + 'px)'">
		           <view class="cu-list menu text-left">
		               <view class="cu-item arrow" v-for="(item, index) in 5" :key="index">
		                   <view class="content">
		                       <view>Item {{ index + 1 }}</view>
		                   </view>
		               </view>
		           </view>
		       </view>
		   </view>
		   
		   <view :class="'cu-modal drawer-modal justify-end ' + (modalName == 'DrawerModalR' ? 'show' : '')" @tap="hideModal">
		       <view class="cu-dialog basis-lg" catchtap :style="'top:' + CustomBar + 'px;height:calc(100vh - ' + CustomBar + 'px)'">
		           <view class="cu-list menu text-left">
		               <view class="cu-item arrow" v-for="(item, index) in 5" :key="index">
		                   <view class="content">
		                       <view>Item {{ index + 1 }}</view>
		                   </view>
		               </view>
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
	components: {
		comNavTab,
		ComTitle
	},
    data() {
        return {
            CustomBar: 1,

            checkbox: [
                {
                    value: 0,
                    name: '10元',
                    checked: false,
                    hot: false
                },
                {
                    value: 1,
                    name: '20元',
                    checked: true,
                    hot: false
                },
                {
                    value: 2,
                    name: '30元',
                    checked: true,
                    hot: true
                },
                {
                    value: 3,
                    name: '60元',
                    checked: false,
                    hot: true
                },
                {
                    value: 4,
                    name: '80元',
                    checked: false,
                    hot: false
                },
                {
                    value: 5,
                    name: '100元',
                    checked: false,
                    hot: false
                }
            ],

            modalName: ''
        };
    },
    methods: {
        showModal(e) {
            this.modalName = e.currentTarget.dataset.target
        },

        hideModal(e) {
            this.modalName = null
        },

        ChooseCheckbox(e) {
            this.checkbox[e].checked = !this.checkbox[e].checked
        }
    }
};
</script>
<style>
</style>
