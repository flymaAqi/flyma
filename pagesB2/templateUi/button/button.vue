<template>
	<view style="height: 100%">
		<comNavTab csTit="按钮">
			<ComTitle titleTxt="按钮形状" 
			pre-txt="<button class=" next-txt="/>按钮<button>" valueTxt="cu-btn" :code-show="true">
				<template #rB>
					<navigator class="action" url="/pagesB2/templateUi/button/design" hover-class="none">
						<text class="text-yellow aqi-txt-blod margin-right-sm">自定义</text>
						<text class="cuIcon-skinfill text-yellow" style="font-size: 20px;"></text>
					</navigator>
				</template>
				<view class="padding flex flex-wrap justify-between align-center aqi-margin-sm">
					<button class="cu-btn">默认</button>
					<button class="cu-btn round">圆角</button>
					<button class="cu-btn icon">
						<text class="cuIcon-emojifill text-blue"></text>
					</button>
				</view>
			</ComTitle>
			<ComTitle titleTxt="按钮尺寸" pre-txt="<button class=" next-txt="/>按钮<button>" valueTxt="cu-btn sm" :code-show="true">
				<view class="padding flex flex-wrap justify-between align-center aqi-margin-sm">
					<button class="cu-btn round sm">小尺寸</button>
					<button class="cu-btn round">默认</button>
					<button class="cu-btn round lg">大尺寸</button>
					<button class="cu-btn round xxl">超大尺寸</button>
					<button class="round" style="width: 100%;margin-top: 10px;">超级大尺寸</button>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="按钮颜色" 
			pre-txt="<button class=" next-txt="/>按钮<button>" :valueTxt="shadow?'cu-btn bg-{color} shadow':'cu-btn bg-{color}'" :code-show="true">
				<template #rB>
					<text class="text-df margin-right-sm">阴影</text>
					<switch class="sm" @change="SetShadow"></switch>
				</template>
				<view class="grid col-5 bg-gradual-pink-light padding-sm aqi-margin-sm">
					<view class="margin-tb-sm text-center" v-for="(item, index) in ColorList" :key="index">
						<button
							:class="'cu-btn round bg-' + item.name + ' ' + (shadow ? 'shadow' : '')">{{ item.title }}</button>
					</view>
				</view>
			</ComTitle>
			
			
			<ComTitle titleTxt="镂空按钮" pre-txt="<button class=" 
			next-txt="/>按钮<button>" :valueTxt="bordersize?'cu-btn lines':'cu-btn line'" :code-show="true">
				<template #rB>
					<radio-group @change="SetBorderSize">
						<label class="margin-left-sm">
							<radio class="blue sm radio" value="" checked></radio>
							<text>细</text>
						</label>
						<label class="margin-left-sm">
							<radio class="blue sm radio" value="s"></radio>
							<text>粗</text>
						</label>
					</radio-group>
				</template>
				<view class="grid col-5 bg-gradual-pink-light padding-sm aqi-margin-sm">
					<view class="margin-tb-sm text-center" v-for="(item, index) in ColorList" :key="index">
						<button v-if="item.name != 'white'"
							:class="'cu-btn round line' + (bordersize ? bordersize : '') + '-' + item.name + ' ' + (shadow ? 'shadow' : '')">{{ item.title }}</button>
					</view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="块状按钮" 
			pre-txt="<button class=" next-txt="/>按钮<button>" valueTxt="cu-btn lg" :code-show="true">
				<view class="padding flex flex-column bg-gradual-pink-light aqi-margin-sm">
					<button class="cu-btn bg-grey lg">玄灰</button>
					<button class="cu-btn bg-red margin-tb-sm lg">嫣红</button>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="操作条按钮组" 
			pre-txt="<button class=" next-txt="/>按钮<button>" tip-txt="//父元素使用btn-group" valueTxt="cu-btn lg" :code-show="true">
				<view class="box bg-gradual-pink-light aqi-margin-sm">
					<view class="cu-bar btn-group">
						<button class="cu-btn bg-orange shadow-blur round lg">保存</button>
					</view>
					<view class="cu-bar btn-group">
						<button class="cu-btn bg-green shadow-blur">取消</button>
						<button class="cu-btn text-green line-green shadow">上传</button>
					</view>
					<view class="cu-bar btn-group">
						<button class="cu-btn bg-green shadow-blur round">保存</button>
						<button class="cu-btn bg-blue shadow-blur round">提交</button>
					</view>
				</view>
			</ComTitle>
			
			<ComTitle titleTxt="无效状态" 
			pre-txt="<button class=" next-txt=" disabled/>按钮<button>" valueTxt="cu-btn lg" :code-show="true">
			<view class="padding bg-gradual-pink-light aqi-margin-sm">
				<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
				<button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
			</view></ComTitle>
			
			<ComTitle titleTxt="按钮加图标" 
			pre-txt="<button class=" next-txt="/>按钮{这里放置自己喜欢的图标}<button>" valueTxt="cu-btn block lg" :code-show="true">
				<view class="padding-xl bg-gradual-pink-light aqi-margin-sm">
					<button class="cu-btn block line-orange lg">
						<text class="cuIcon-upload"></text>
						上传
					</button>
					<button class="cu-btn block bg-blue margin-tb-sm lg">
						<text class="cuIcon-loading2 iconfont-spin"></text>
						加载
					</button>
					<button class="cu-btn block bg-green light margin-tb-sm lg" loading>加载中</button>
				</view>
			</ComTitle>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../componentsB2/comNavTab/comNavTab.vue';
	import ComTitle from '../../componentsB2/ComTitle/ComTitle.vue';
	import {
		color_list
	} from '@/common/commonData.js'
	export default {
		components:{
			comNavTab,
			ComTitle
		},
		data() {
			return {
				ColorList: color_list,
				shadow: '',
				bordersize: ''
			};
		},
		methods: {
			SetShadow(e) {
				this.shadow = e.detail.value
			},

			SetBorderSize(e) {
				this.bordersize = e.detail.value
			}
		}
	};
</script>
<style>
</style>