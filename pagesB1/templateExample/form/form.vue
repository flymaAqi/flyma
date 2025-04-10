<template>
	<view style="height: 100%">
		<comNavTab csTit="表单">
			<codeCard titTxt="组件导言" tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧."
			 next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C--ctrl+V,使用的时候直接<组件名/>引用即可" 
			 preTxt="HBuilder X例:在" valueTxt="components"></codeCard>
			<form>
				<ComTitle titleTxt="输入条"/>
				<view class="cu-form-group margin-top-sm">
					<view class="title">这里</view>
					<input placeholder="两字短标题" />
				</view>

				<view class="cu-form-group">
					<view class="title">只是展</view>
					<input placeholder="三字标题" />
				</view>

				<view class="cu-form-group">
					<view class="title">示样式而</view>
					<input placeholder="统一标题的宽度" />
				</view>

				<view class="cu-form-group">
					<view class="title">已没有交互</view>
					<input placeholder="输入框带个图标" />
					<text class="cuIcon-locationfill text-orange"></text>
				</view>

				<view class="cu-form-group">
					<view class="title">和存储功能审</view>
					<input placeholder="输入框带个按钮" />
					<button class="cu-btn bg-green shadow">验证码</button>
				</view>

				<view class="cu-form-group">
					<view class="title">核能学点技术知识吗</view>
					<input placeholder="输入框带标签" />
					<view class="cu-capsule radius">
						<view class="cu-tag bg-blue">+87</view>
						<view class="cu-tag line-blue">核无眼</view>
					</view>
				</view>
				<ComTitle titleTxt="选择器"/>
				<view class="cu-form-group margin-top">
					<view class="title">普通选择</view>
					<picker @change="PickerChange" :value="index" :range="picker">
						<view class="picker">
							{{ index ? picker[index] : '禁止换行，超出容器部分会以 ... 方式截断' }}
						</view>
					</picker>
				</view>

				<view class="cu-form-group">
					<view class="title">多列选择</view>
					<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange"
						:value="multiIndex" :range="multiArray">
						<view class="picker">
							{{ multiArray[0][multiIndex[0]] }}，{{ multiArray[1][multiIndex[1]] }}，{{ multiArray[2][multiIndex[2]] }}
						</view>
					</picker>
				</view>

				<view class="cu-form-group">
					<view class="title">时间选择</view>
					<picker mode="time" :value="time" start="00:01" end="23:59" @change="TimeChange">
						<view class="picker">
							{{ time }}
						</view>
					</picker>
				</view>

				<view class="cu-form-group">
					<view class="title">日期选择</view>
					<picker mode="date" :value="date" @change="DateChange">
						<view class="picker">
							{{ date }}
						</view>
					</picker>
				</view>

				<view class="cu-form-group">
					<view class="title">地址选择器</view>
					<view class="picker" style="max-width: 70%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;" @tap="openAddress">
						<text class="margin-right">{{ region[0] }}，{{ region[1] }}，{{ region[2] }}</text>
						<text class="cuIcon-right text-green" style="position: absolute;right: 10px;font-size: 17px;"></text>
					</view>
				</view>
				<ComTitle titleTxt="图片选择"/>
				<view class="cu-bar bg-white margin-top-sm">
					<view class="action">图片上传</view>
					<view class="action">{{ imgList.length }}/4</view>
				</view>

				<view class="cu-form-group">
					<view class="grid col-4 grid-square flex-sub">
						<view class="bg-img" @tap="ViewImage" :data-url="imgList[index]"
							v-for="(item, index) in imgList" :key="index">
							<image :src="imgList[index]" mode="aspectFill"></image>

							<view class="cu-tag bg-red" @tap.stop.prevent="DelImg" :data-index="index">
								<text class="cuIcon-close"></text>
							</view>
						</view>
						<view class="solids" @tap="ChooseImage" v-if="imgList.length < 4">
							<text class="cuIcon-cameraadd"></text>
						</view>
					</view>
				</view>
				<ComTitle titleTxt="多行文本输入"/>
				<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
				<view class="cu-form-group margin-top-sm">
					<textarea maxlength="-1" :disabled="modalName != null" @input="textareaAInput"
						placeholder="多行文本输入框"></textarea>
				</view>

				<view class="cu-form-group align-start margin-top-sm">
					<view class="title">文本框</view>
					<textarea maxlength="-1" :disabled="modalName != null" @input="textareaBInput"
						placeholder="多行文本输入框"></textarea>
				</view>
			</form>
			<datePicks ref="scroll" @change='chooseSuccess'/>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import datePicks from '../../templateComponents/date-picks/date-picks.vue';
	export default {
		components: {
			comNavTab,
			ComTitle,
			datePicks
		},
		data() {
			return {
				StatusBar: 1,
				CustomBar: 1,
				index: null,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],

				objectMultiArray: [
					[{
							id: 0,
							name: '无脊柱动物'
						},
						{
							id: 1,
							name: '脊柱动物'
						}
					],
					[{
							id: 0,
							name: '扁性动物'
						},
						{
							id: 1,
							name: '线形动物'
						},
						{
							id: 2,
							name: '环节动物'
						},
						{
							id: 3,
							name: '软体动物'
						},
						{
							id: 3,
							name: '节肢动物'
						}
					],
					[{
							id: 0,
							name: '猪肉绦虫'
						},
						{
							id: 1,
							name: '吸血虫'
						}
					]
				],

				multiIndex: [0, 0, 0],
				time: '13:01',
				date: '2022-12-25',
				region: ['北京市', '北京市', '朝阳区'],
				imgList: [],
				modalName: null,
				textareaAValue: '',
				textareaBValue: '',
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},

			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			//打开地址选择器
			openAddress() {
				this.$refs.scroll.open()
			},
			//地址选择成功
			chooseSuccess(e) {
				this.region = e.value
			},
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						switch (data.multiIndex[0]) {
							case 0:
								data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
								data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
								break;
							case 1:
								data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
								data.multiArray[2] = ['鲫鱼', '带鱼'];
								break;
						}
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						break;
					case 1:
						switch (data.multiIndex[0]) {
							case 0:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
										break;
									case 1:
										data.multiArray[2] = ['蛔虫'];
										break;
									case 2:
										data.multiArray[2] = ['蚂蚁', '蚂蟥'];
										break;
									case 3:
										data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
										break;
									case 4:
										data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
										break;
								}
								break;
							case 1:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['鲫鱼', '带鱼'];
										break;
									case 1:
										data.multiArray[2] = ['青蛙', '娃娃鱼'];
										break;
									case 2:
										data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
										break;
								}
								break;
						}
						data.multiIndex[2] = 0;
						break;
				}
				// this.setData(data);
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			},

			TimeChange(e) {
				this.time = e.detail.value
			},

			DateChange(e) {
				this.date = e.detail.value
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4,
					//默认9
					sizeType: ['original', 'compressed'],
					//可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'],
					//从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},

			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},

			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除图片吗？',
					cancelText: '取消',
					confirmText: '确定',
					success: (res) => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1);
							this.imgList = this.imgList
						}
					}
				});
			},

			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},

			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	};
</script>
<style>
</style>