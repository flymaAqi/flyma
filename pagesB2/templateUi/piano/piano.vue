<template>
	<view style="height: 100%">
		<comNavTab csTit="手风琴">
			<ComTitle titleTxt="基础展开" valueTxt="unfold piano-hidden-content" :code-show="true">
				<view class="cu-list margin-top menu" v-for="(item, index) in list" :key="index">
					<view class="cu-item" @tap="click" :data-index="index+1">
						<view class="content padding-tb-sm">
							<view>{{ item.name }}</view>
						</view>
						<view class="action padding-left-xs">
							<text :class="'cuIcon-' + (chInx === (index+1) ? 'unfold' : 'right')"></text>
						</view>
					</view>

					<view :class="'cu-item ' + (chInx === (index+1) ? '' : 'piano-hidden-content')"
						v-for="(child, index1) in item.content" :key="index1">
						<view class="content">
							<text>{{ child }}</text>
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
	export default {
		components: {
			comNavTab,
			ComTitle
		},
		data() {
			return {
				list: [{
						name: '这里是标题，点击可展开',
						content: ['内容一', '内容二'],
					},
					{
						name: '这里是第二个标题，点击展开',
						content: ['内容一', '内容二'],
					},
					{
						name: '这里是第三个标题，点击展开',
						content: ['内容一', '内容二'],
					}
				],
				value: false,
				chInx: 0
			};
		},
		methods: {
			// 点击列表,收缩与展示
			click(event) {
				let inx = event.currentTarget.dataset.index;
				this.chInx = inx === this.chInx ? 0 : inx
			},

			checkboxChange(e) {
				this.value = !this.value
			}
		}
	};
</script>