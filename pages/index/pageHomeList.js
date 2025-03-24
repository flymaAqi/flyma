import {
	ref
} from 'vue'
const pluginList = [
	{
		title: '微动画 ',
		name: 'animation',
		timeAni: '1.3s',
		url: '/pagesB1/templatePlugin/animation/animation',
		color: 'mauve light',
		cuIcon: 'form'
	},
	{
		title: '全屏抽屉',
		name: 'drawer',
		timeAni: '1.6s',
		url: '/pagesB1/templatePlugin/drawer/drawer',
		color: 'pink light',
		cuIcon: 'list'
	},
	{
		title: '聊天',
		name: 'chat',
		timeAni: '1.9s',
		url: '/pagesB1/templatePlugin/chat/chat',
		color: 'green light',
		cuIcon: 'message'
	},
	{
		title: '瀑布流',
		timeAni: '1.3s',
		name: 'waterfall',
		url: '/pagesB1/templatePlugin/waterfall/waterfall',
		color: 'blue light',
		cuIcon: 'pic'
	},
	{
		title: '卡片翻转',
		name: 'overturn',
		timeAni: '1.6s',
		url: '/pagesB1/templatePlugin/overturn/overturn',
		color: 'red light',
		cuIcon: 'camerarotate'
	},
	{
		title: '骨架屏',
		name: 'skeleton',
		timeAni: '1.9s',
		url: '/pagesB1/templatePlugin/skeleton/skeleton',
		color: 'pink light',
		cuIcon: 'news'
	},
	{
		title: '抽奖',
		name: 'draw',
		timeAni: '1.3s',
		url: '/pagesB1/templatePlugin/draw/draw',
		color: 'pink light',
		cuIcon: 'present'
	},
	{
		title: '历史搜索',
		name: 'search',
		timeAni: '1.6s',
		url: '/pagesB1/templatePlugin/search/search',
		color: 'mauve light',
		cuIcon: 'search'
	},
	{
		title: '打卡',
		name: 'clockin',
		timeAni: '1.9s',
		url: '/pagesB1/templatePlugin/clockin/clockin',
		color: 'cyan light',
		cuIcon: 'mobile'
	},
	{
		title: '卡券',
		name: 'coupon',
		timeAni: '1.3s',
		url: '/pagesB1/templatePlugin/coupon/coupon',
		color: 'brown light',
		cuIcon: 'news'
	},
	{
		title: '商品滑动',
		name: 'goods',
		timeAni: '1.6s',
		url: '/pagesB1/templatePlugin/goods/goods',
		color: 'green light',
		cuIcon: 'shop'
	},
	{
		title: '卡片设计',
		name: 'design',
		timeAni: '1.9s',
		url: '/pagesB1/templatePlugin/design/design',
		color: 'blue light',
		cuIcon: 'attentionfavor'
	}
];
const exampleList = [{
		title: '轻提示',
		name: 'toast',
		url: '/pagesB1/templateExample/toast/toast',
		timeAni: '0.7s',
		color: 'mauve light',
		cuIcon: 'creative'
	},
	{
		title: '滚动提示',
		name: 'tips',
		url: '/pagesB1/templateExample/tips/tips',
		timeAni: '1s',
		color: 'cyan light',
		cuIcon: 'notice'
	},
	{
		title: '日历',
		name: 'calendar',
		url: '/pagesB1/templateExample/calendar/calendar',
		timeAni: '1.3s',
		color: 'green light',
		cuIcon: 'read'
	},
	{
		title: '表单',
		name: 'form',
		url: '/pagesB1/templateExample/form/form',
		timeAni: '1.5s',
		color: 'red light',
		cuIcon: 'form'
	},
	{
		title: '步骤条',
		name: 'steps',
		url: '/pagesB1/templateExample/steps/steps',
		timeAni: '1.9s',
		color: 'cyan light',
		cuIcon: 'order'
	},
	{
		title: '代码块',
		name: 'page-code',
		url: '/pagesB1/templateExample/page-code/page-code',
		timeAni: '2.2s',
		color: 'purple light',
		cuIcon: 'font'
	},
	{
		title: '仿真手机模型',
		name: 'new-phone',
		url: '/pagesB1/templateExample/new-phone/new-phone',
		timeAni: '1.3s',
		color: 'pink light',
		cuIcon: 'clothes'
	},
	{
		title: '评分',
		name: 'rate',
		url: '/pagesB1/templateExample/rate/rate',
		timeAni: '1.6s',
		color: 'orange light',
		cuIcon: 'selection'
	},
	{
		title: '滚动数字',
		name: 'aniNum',
		url: '/pagesB1/templateExample/aniNum/aniNum',
		timeAni: '1.9s',
		color: 'blue light',
		cuIcon: 'countdown'
	},
	{
	    title: '进度条',
	    name: 'progress',
		url: '/pagesB1/templateExample/progress/progress',
		timeAni: '1.5s',
	    color: 'orange light',
	    cuIcon: 'time'
	},
];
const examLinshi = ref([{
		title: '操作条',
		name: 'bar',
		url: '/pagesB1/templateExample/bar/bar',
		timeAni: '0.7s',
		color: 'purple light',
		cuIcon: 'form'
	},
	{
		title: '列表',
		name: 'list',
		url: '/pagesB1/templateExample/list/list',
		timeAni: '1s',
		color: 'pink light',
		cuIcon: 'list'
	},
	{
		title: '卡片',
		name: 'card',
		url: '/pagesB1/templateExample/card/card',
		timeAni: '1.3s',
		color: 'brown light',
		cuIcon: 'news'
	},
	{
		title: '时间轴',
		name: 'timeline',
		url: '/pagesB1/templateExample/timeline/timeline',
		timeAni: '1.6s',
		color: 'orange light',
		cuIcon: 'time'
	},
	{
		title: '轮播',
		name: 'swiper',
		url: '/pagesB1/templateExample/swiper/swiper',
		timeAni: '1.9s',
		color: 'olive light',
		cuIcon: 'album'
	},
	{
		title: '模态框',
		name: 'modal',
		url: '/pagesB1/templateExample/modal/modal',
		timeAni: '2.2s',
		color: 'grey light',
		cuIcon: 'squarecheck'
	},
]);
const wayList = [{
		title: '标题',
		name: 'title',
		url: '/pagesB2/templateUi/title/title',
		color: 'blue light',
		timeAni: '0.7s',
		cuIcon: 'edit'
	},
	{
		title: '头像',
		name: 'avatar',
		url: '/pagesB2/templateUi/avatar/avatar',
		color: 'red light',
		timeAni: '1s',
		cuIcon: 'cameraadd'
	},
	{
		title: '开关',
		name: 'switch',
		url: '/pagesB2/templateUi/switch/switch',
		color: 'mauve light',
		timeAni: '1.3s',
		cuIcon: 'repair'
	},
	{
		title: '加载',
		name: 'loading',
		url: '/pagesB2/templateUi/loading/loading',
		color: 'green light',
		timeAni: '1.5s',
		cuIcon: 'loading2'
	},
	{
		title: '边框',
		name: 'border',
		url: '/pagesB2/templateUi/border/border',
		color: 'pink light',
		timeAni: '1.8s',
		cuIcon: 'square'
	},
	{
		title: '阴影',
		name: 'shadow',
		url: '/pagesB2/templateUi/shadow/shadow',
		color: 'olive light',
		timeAni: '2s',
		cuIcon: 'hot'
	},
	{
		title: '复选框',
		name: 'checkbox',
		url: '/pagesB2/templateUi/checkbox/checkbox',
		color: 'mauve light',
		timeAni: '0.7s',
		cuIcon: 'keyboard'
	},
	{
		title: '手风琴',
		name: 'piano',
		url: '/pagesB2/templateUi/piano/piano',
		color: 'orange light',
		timeAni: '0.9s',
		cuIcon: 'repeal'
	},
];
const wayLinshi = ref([{
		title: '布局',
		name: 'layout',
		url: '/pagesB2/templateUi/layout/layout',
		color: 'blue light',
		timeAni: '0.7s',
		cuIcon: 'news'
	},
	{
		title: '背景',
		name: 'background',
		url: '/pagesB2/templateUi/background/background',
		color: 'cyan light',
		timeAni: '1s',
		cuIcon: 'colorlens'
	},
	{
		title: '文本',
		name: 'txt',
		url: '/pagesB2/templateUi/aSenvenText/aSenvenText',
		color: 'purple light',
		timeAni: '1.3s',
		cuIcon: 'font'
	},
	{
		title: '图标 ',
		name: 'icon',
		url: '/pagesB2/templateUi/icon/icon',
		color: 'mauve light',
		timeAni: '1.6s',
		cuIcon: 'emoji'
	},
	{
		title: '按钮',
		name: 'button',
		url: '/pagesB2/templateUi/button/button',
		color: 'pink light',
		timeAni: '1.9s',
		cuIcon: 'btn'
	},
	{
		title: '标签',
		name: 'tag',
		url: '/pagesB2/templateUi/tag/tag',
		color: 'brown light',
		timeAni: '2.2s',
		cuIcon: 'tag'
	},
]);
export {
	wayList,
	wayLinshi,
	exampleList,
	examLinshi,
	pluginList
}