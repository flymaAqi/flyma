<template>
	<view style="height: 100%">
		<comNavTab>
			<view class="padding-xl">
				<view
					:class="'flex justify-center align-center bg-white text-center radius-lg ' + (block ? 'flex-column' : '')"
					style="height: 280rpx">
					<button :class="
			                'cu-btn ' +
			                (border ? 'line' : 'bg') +
			                (bordersize ? bordersize : '') +
			                '-' +
			                color +
			                ' ' +
			                (round ? 'round' : '') +
			                ' ' +
			                size +
			                ' ' +
			                (shadow ? 'shadow' : '') +
			                ' ' +
			                (block ? 'block' : '')
			            ">
						我是一个按钮
					</button>
				</view>
				<view class="padding text-center">
					123
				</view>
			</view>
			
			<view class="margin-sm">
				<view class="cu-form-group margin-top radius-lg-top" @tap="showModal" data-target="ColorModal">
					<view class="title">选择颜色</view>
					<view :class="'padding bg-' + color + ' solid radius shadow-blur'"></view>
				</view>
			
				<view class="cu-form-group">
					<view class="title">是否圆角</view>
					<switch class="sm" @change="SetRound"></switch>
				</view>
			
				<view class="cu-form-group">
					<view class="title">选择尺寸</view>
					<radio-group @change="SetSize">
						<label class="margin-left-sm">
							<radio class="blue sm radio" value="sm"></radio>
							<text>小</text>
						</label>
						<label class="margin-left-sm">
							<radio class="blue sm radio" value="" checked></radio>
							<text>中</text>
						</label>
						<label class="margin-left-sm">
							<radio class="blue sm radio" value="lg"></radio>
							<text>大</text>
						</label>
						<label class="margin-left-sm">
							<radio class="blue sm radio" value="xxl"></radio>
							<text>超大</text>
						</label>
					</radio-group>
				</view>
			
				<view class="cu-form-group">
					<view class="title">是否添加阴影</view>
					<switch class="sm" @change="SetShadow"></switch>
				</view>
			
				<view class="cu-form-group radius-lg-bottom">
					<view class="title">是否镂空</view>
					<switch class="sm" @change="SetBorder"></switch>
				</view>
			</view>
			
			<view class="cu-form-group margin-sm radius" v-if="border">
				<view class="title">边框粗细</view>
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
			</view>
			
			<view :class="'cu-modal ' + (modalName == 'ColorModal' ? 'show' : '')">
				<view class="cu-dialog">
					<view class="cu-bar justify-end solid-bottom">
						<view class="content">选择颜色</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close text-red"></text>
						</view>
					</view>
					<view class="grid col-5 padding">
						<view class="padding-xs" @tap="SetColor" :data-color="item.name" v-for="(item, index) in ColorList"
							:key="index">
							<view v-if="item.name != 'white'" :class="'padding-tb bg-' + item.name + ' radius'">
								{{ item.title }}</view>
						</view>
					</view>
				</view>
			</view>
		</comNavTab>
	</view>
</template>

<script>
	import {
		color_list
	} from '@/common/commonData.js'
	export default {
		data() {
			return {
				ColorList: color_list,
				color: 'blue',
				modalName: '',
				round: '',
				size: '',
				shadow: '',
				border: '',
				bordersize: false,
				block: false
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},

			hideModal(e) {
				this.modalName = null
			},

			SetRound(e) {
				this.round = e.detail.value
			},

			SetSize(e) {
				this.size = e.detail.value
			},

			SetColor(e) {
				this.color = e.currentTarget.dataset.color,
					this.modalName = null
			},

			SetShadow(e) {
				this.shadow = e.detail.value
			},

			SetBorder(e) {
				this.border = e.detail.value
				if (!e.detail.value) {
					this.bordersize = false
				}
			},

			SetBorderSize(e) {
				this.bordersize = e.detail.value
			}
		}
	};
</script>
<style>
</style>