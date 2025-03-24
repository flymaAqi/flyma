<template>
	<view style="height: 100%">
		<comNavTab csTit="列表">
			<ComTitle titleTxt="组件引用提示" preTxt="HBuilder X例:在" valueTxt="components"
				tip-txt="//组件类我就只写引用方式了,代码太多了,本code组件还不支持多行代码直接展示,后续看又懒又笨的主人会不会更新吧."
				next-txt="目录新建组件,组件名填写一致,把你想要的效果直接ctrl+C-V,使用的时候直接<组件名/>引用即可" :codeShow="true">
				<view class="aqi-margin-sm"></view>
			</ComTitle>
			<scroll-view :scroll-y="modalName == null" :class="'page ' + (modalName != null ? 'show' : '')">
				<ComTitle titleTxt="吃火锅就吃九宫格--宫格列表">
					<template #rB>
						<button class="cu-btn bg-blue shadow" @tap="showModal" data-target="gridModal">设置</button>
					</template>
				</ComTitle>
				<view class="margin-top-xs">
					<view :class="'cu-modal ' + (modalName == 'gridModal' ? 'show' : '')" @tap="hideModal">
						<view class="cu-dialog">
							<radio-group class="block" @change="gridchange">
								<view class="cu-list menu text-left">
									<view class="cu-item" v-for="(item, index) in 3" :key="index">
										<label class="flex justify-between align-center flex-sub">
											<view class="flex-sub">{{ item + 2 }} 列</view>
											<radio class="round" :value="item + 2+''" :checked="gridCol == item + 2" @tap="hideModal">
											</radio>
										</label>
									</view>
								</view>
							</radio-group>
							<view class="cu-list menu text-left solid-top">
								<view class="cu-item">
									<view class="content">
										<text class="text-gray">边框</text>
									</view>
									<view class="action">
										<switch @change="gridswitch"></switch>
									</view>
								</view>
							</view>
						</view>
					</view>

					<view
						:class="'cu-list bg-gradual-blue-light grid col-' + gridCol + ' ' + (gridBorder ? '' : 'no-border')">
						<view class="cu-item" v-for="(item, index2) in iconList" :key="index2">
							<view :class="'cuIcon-' + item.icon + ' text-' + item.color">
								<view class="cu-tag badge" v-if="item.badge != 0">
									<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
								</view>
								<text>{{ item.name }}</text>
							</view>
						</view>
					</view>
				</view>
				<ComTitle titleTxt="选项列表">
					<template #rB>
						<button class="cu-btn bg-blue shadow" @tap="showModal" data-target="menuModal">设置</button>
					</template>
				</ComTitle>
				<view class="margin-top-xs">
					<view :class="'cu-modal ' + (modalName == 'menuModal' ? 'show' : '')" @tap="hideModal">
						<view class="cu-dialog" catchtap>
							<scroll-view scroll-y style="height: 300rpx">
								<view class="cu-list menu text-left solid-top">
									<view class="cu-item">
										<view class="content">
											<text class="text-gray">短边框</text>
										</view>
										<view class="action">
											<switch @change="menuBorderFun"></switch>
										</view>
									</view>
									<view class="cu-item">
										<view class="content">
											<text class="text-gray">箭头</text>
										</view>
										<view class="action">
											<switch @change="menuArrowFun"></switch>
										</view>
									</view>
									<view class="cu-item">
										<view class="content">
											<text class="text-gray">卡片</text>
										</view>
										<view class="action">
											<switch @change="menuCardFun"></switch>
										</view>
									</view>
									<view class="cu-item">
										<view class="content">
											<text class="text-grey">短边框</text>
										</view>
										<view class="action">
											<switch @change="menuBorderFun"></switch>
										</view>
									</view>
									<view class="cu-item">
										<view class="content">
											<text class="text-grey">箭头</text>
										</view>
										<view class="action">
											<switch @change="menuArrowFun"></switch>
										</view>
									</view>
									<view class="cu-item">
										<view class="content">
											<text class="text-grey">卡片</text>
										</view>
										<view class="action">
											<switch @change="menuCardFun"></switch>
										</view>
									</view>
								</view>
							</scroll-view>
						</view>
					</view>

					<view
						:class="'cu-list menu ' + (menuBorder ? '' : '') + ' ' + (menuCard ? 'card-menu margin-top' : '')">
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<view class="content">
								<text class="cuIcon-circlefill text-grey"></text>
								<text class="text-grey">图标 + 标题</text>
							</view>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<view class="content">
								<image src="/pagesB1/static/tiandao.jpg" class="round" mode="aspectFill"></image>
								<text class="text-grey">图片 + 标题</text>
							</view>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<button class="cu-btn content" open-type="contact">
								<text class="cuIcon-btn text-olive"></text>
								<text class="text-grey">Open-type 按钮</text>
							</button>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
								<text class="cuIcon-discoverfill text-orange"></text>
								<text class="text-grey">Navigator 跳转</text>
							</navigator>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<view class="content">
								<text class="cuIcon-emojiflashfill text-pink"></text>
								<text class="text-grey">头像组</text>
							</view>
							<view class="action">
								<view class="cu-avatar-group">
									<view class="cu-avatar round sm"
										:style="{'background-image':'url('+imgUrl[4]+')'}">
									</view>
									<view class="cu-avatar round sm"
										:style="{'background-image':'url('+imgUrl[7]+')'}">
									</view>
									<view class="cu-avatar round sm"
										:style="{'background-image':'url('+imgUrl[6]+')'}">
									</view>
									<view class="cu-avatar round sm"
										:style="{'background-image':'url('+imgUrl[5]+')'}">
									</view>
								</view>
								<text class="text-grey text-sm">4 人</text>
							</view>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<view class="content">
								<text class="cuIcon-btn text-green"></text>
								<text class="text-grey">按钮</text>
							</view>
							<view class="action">
								<button class="cu-btn round bg-blue shadow">
									<text class="cuIcon-upload"></text>
									上传
								</button>
							</view>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<view class="content">
								<text class="cuIcon-tagfill text-red"></text>
								<text class="text-grey">标签</text>
							</view>
							<view class="action">
								<view class="cu-tag round bg-orange light">音乐</view>
								<view class="cu-tag round bg-olive light">电影</view>
								<view class="cu-tag round bg-blue light">旅行</view>
							</view>
						</view>
						<view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
							<view class="content">
								<text class="cuIcon-warn text-green"></text>
								<text class="text-grey">文本</text>
							</view>
							<view class="action">
								<text class="text-grey text-sm">小目标还没有实现！</text>
							</view>
						</view>
						<view class="cu-item">
							<view class="content padding-tb-sm">
								<view>
									<text class="cuIcon-clothesfill text-blue margin-right-xs"></text>
									多行Item
								</view>
								<view class="text-gray text-sm">
									<text class="cuIcon-infofill margin-right-xs"></text>
									小目标还没有实现！
								</view>
							</view>
							<view class="action">
								<switch class="switch-sex sm" @change="switchSex"></switch>
							</view>
						</view>
					</view>
				</view>
				<ComTitle titleTxt="消息列表" />
				<view class="cu-list menu-avatar bg-white">
					<view class="cu-item">
						<view class="cu-avatar lg">
							<image src="../../static/ouBu.jpg" mode="heightFix" style="height: 100%;" />
							<view class="cu-tag badge">99+</view>
						</view>
						<view class="content">
							<view class="text-grey">欧布</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut2">
									<text class="cuIcon-infofill text-red margin-right-xs"></text>
									太阳落下便无法看见,但是呢就算看不见,它依然在地平线的彼方闪耀光芒.
								</text>
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-grey sm">5</view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar lg">
							<image src="../../static/kabutou.jpg" mode="aspectFill" style="height: 100%;" />
							<view class="cu-tag badge">5</view>
						</view>
						<view class="content">
							<view class="text-grey">
								<text class="text-cut">天道总司</text>
								<view class="cu-tag round bg-orange sm">战士</view>
							</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									走着一样路的只能被称为同行者,走着不同道路但能一起并肩前行的才能被称为伙伴!
								</text>
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cuIcon-notice_forbid_fill text-gray"></view>
						</view>
					</view>
					<view class="cu-item">
						<view class="cu-avatar lg">
							<image src="../../static/tiandao.jpg" mode="aspectFill" style="height: 100%;" />
							<view class="cu-tag badge">99+</view>
						</view>
						<view class="content">
							<view class="text-pink">
								<text class="text-cut">KABUTOU</text>
							</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">男人应该冷静,沸腾的开水只会蒸发.</text>
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">5</view>
						</view>
					</view>
					<view class="cu-item grayscale">
						<image src="../../static/tiandao.jpg" mode="aspectFill" class="cu-avatar lg" />
						<view class="content">
							<view>
								<text class="text-cut">甲斗</text>
								<view class="cu-tag round bg-orange sm">断开连接...</view>
							</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">世界是以自己为中心转的,这样想的话就会觉得开心了.</text>
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-red sm">5</view>
						</view>
					</view>
					<view class="cu-item cur">
						<view class="cu-avatar lg">
							<image src="../../static/seeyou.jpg" mode="aspectFill" style="height: 100%;" />
							<view class="cu-tag badge"></view>
						</view>
						<view class="content">
							<view>
								<text class="text-cut">明天好</text>
								<view class="cu-tag round bg-orange sm">6人</view>
							</view>
							<view class="text-gray text-sm flex">
								<text class="text-cut">
									好运：
									<text class="cuIcon-locationfill text-orange margin-right-xs"></text>
									正在传送中...
								</text>
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cuIcon-notice_forbid_fill text-gray"></view>
						</view>
					</view>
				</view>
				<ComTitle titleTxt="左滑列表" />
				<view class="cu-list menu-avatar bg-white">
					<view :class="'cu-item ' + (modalName == 'move-box-' + index ? 'move-cur' : '')"
						@touchstart="ListTouchStartFun" @touchmove="ListTouchMove" @touchend="ListTouchEnd"
						:data-target="'move-box-' + index" v-for="(item, index) in 4" :key="index">
						<view class="cu-avatar lg">
							<image src="../../static/seeyou.jpg" mode="aspectFill" style="height: 100%;" />
							<view class="cu-tag badge"></view>
						</view>

						<view class="content">
							<view class="text-grey">明天见</view>
							<view class="text-gray text-sm">
								<text class="cuIcon-infofill text-red"></text>
								消息未送达
							</view>
						</view>

						<view class="action">
							<view class="text-grey text-xs">22:20</view>
							<view class="cu-tag round bg-grey sm">5</view>
						</view>

						<view class="move">
							<view class="bg-grey">置顶</view>
							<view class="bg-red">删除</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</comNavTab>
	</view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue';
	import ComTitle from '../../templateComponents/ComTitle/ComTitle.vue';
	import {
		kehuan
	} from '@/common/commonData.js'
	export default {
		components: {
			comNavTab,
			ComTitle
		},
		data() {
			return {
				imgUrl:kehuan,
				iconList: [{
						icon: 'cardboardfill',
						color: 'red',
						badge: 120,
						name: 'VR'
					},
					{
						icon: 'recordfill',
						color: 'orange',
						badge: 1,
						name: '录像'
					},
					{
						icon: 'picfill',
						color: 'yellow',
						badge: 0,
						name: '图像'
					},
					{
						icon: 'noticefill',
						color: 'olive',
						badge: 22,
						name: '通知'
					},
					{
						icon: 'upstagefill',
						color: 'cyan',
						badge: 0,
						name: '排行榜'
					},
					{
						icon: 'clothesfill',
						color: 'blue',
						badge: 0,
						name: '皮肤'
					},
					{
						icon: 'questionfill',
						color: 'mauve',
						badge: 0,
						name: '帮助'
					},
					{
						icon: 'commandfill',
						color: 'purple',
						badge: 0,
						name: '问答'
					},
					{
						icon: 'brandfill',
						color: 'mauve',
						badge: 0,
						name: '版权'
					}
				],
				gridCol: 3,
				skin: false,
				modalName: '',
				gridBorder: '',
				menuBorder: '',
				menuArrow: '',
				menuCard: '',
				ListTouchStart: '',
				ListTouchDirection: ''
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},

			hideModal(e) {
				this.modalName = null
			},

			gridchange: function(e) {
				this.gridCol = e.detail.value
			},

			gridswitch: function(e) {
				this.gridBorder = e.detail.value
			},

			menuBorderFun: function(e) {
				this.menuBorder = e.detail.value
			},

			menuArrowFun: function(e) {
				this.menuArrow = e.detail.value
			},

			menuCardFun: function(e) {
				this.menuCard = e.detail.value
			},

			switchSex: function(e) {
				this.skin = e.detail.value
			},

			// ListTouch触摸开始
			ListTouchStartFun(e) {
				this.ListTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.ListTouchDirection = e.touches[0].pageX - this.ListTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.ListTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.ListTouchDirection = null
			}
		}
	};
</script>
<style>
</style>