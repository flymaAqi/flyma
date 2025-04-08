<template>
    <view style="height: 100%">
        <comNavTab csTit="关于">
			<view class="margin-xl bg-white flex padding-lg">
			    <view class="text-content" style="letter-spacing: 0.1rem;">
			        <view class="margin-top-lg text-xl text-blue">Hello！访问者</view>
			        <text :user-select="true">
						&nbsp;&nbsp;欢迎使用Flyma!
						该项目基于 ColorUI 为核心，根据ColorUI GA 为基础开发的css组件库+UI模板。
						在原版基础上，做了较大的代码改动与性能优化，框架与数据层面选用vue3与uniapp进行改造，对所有代码做了分包与整合，对数据结构及渲染层面做了性能调优，
						当前代码包主包体积压缩后仅100kb左右，首屏渲染时间控制在了600ms与400ms之间，后续会持续更新与性能调优，开发者可略过以下开源介绍。
			        </text>
					<view class="margin-top-sm margin-bottom-sm">
						&nbsp;&nbsp;最初只为找寻灵感与代码优化，慢慢积累了很多流行组件与性能优化的经验，偶尔和朋友或一些在校生之间交谈技术，分享经验。
						由于大家时间碎片化，可能今天突然来个夜猫子，明天再突然有个大闹钟，身不累他心也累呀!索性就开发出了该小程序-APP，以后有任何功能需求，
						组件需求或样式需求，可以直接来到这里逛一逛，相中什么，便拿走什么，方便了大家，也解放了自己。
					</view>
					<view class="margin-bottom-sm">
						&nbsp;&nbsp;该小程序/APP基于开源中走来，同样也会向开源中走去，不敢说在为开源做贡献，这可能更像是在为开源回敬。
						曾经初踏编程这条路的时候，有过很多疑惑与不解，为什么要学的技术文献都是英文的，为什么说最新的知识要等待国外输入进来，
						为什么访问不到外网优质代码等等，这些疑问和心酸使我陷入学习的迷宫。
					</view>
					<view class="margin-bottom-sm">
						&nbsp;&nbsp;??:这里有条路,可助你走出迷宫。??:这边有绳子，抓住我们一起走。??:前面有我留的记号，跟着记号走。??:这里还有~~~~~!在这迷宫内遇到很多陌生人,他们帮助我找到方向,渡过江河,
						他们不要求回报,只是不以为然默默的发光发亮，这-就是开源！如今我希望也可以加入这一个一个的问号，为曾经的自己提供帮助。
					</view>
					<view>
						&nbsp;&nbsp;所以该怎么介绍呢，还需要介绍吗。此小程序/APP内所有样式，组件与模板，皆开源免费，并持续更新优化，
						如果这对你有所帮助，点个小红心支持一下，嘿嘿开个玩笑。如果你有更好的想法或建议可直接联系客服或移步至Github提交Issues。
					</view>
			        <view class="margin-top-sm text-cyan" style="letter-spacing: 0px;">感谢在人生晦暗时曾出现的提灯人!</view>
			        <view class="margin-top text-right text-blue">
						<image src="/static/flyma.png" style="height: 80rpx;width: 80rpx;margin-bottom: -15px;right: -10px;"></image>
						<text>By Aqi.</text>
					</view>
			        <view class="margin-top-sm text-right text-blue">2025/03/08</view>
			    </view>
			</view>
						
			<view class="margin-xl bg-blur round padding-sm">
			    <view class="text-content text-grey text-sm">
					注：小程序/APP内所有文字和图片皆为展示效果所用，无其他任何含义,图片来源网络，如有问题请联系客服更改！
				</view>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue'
	import reciateT from '../reciateT.vue'
export default {
	components:{
		comNavTab,
		reciateT
	},
    data() {
        return {};
    },
    methods: {
        CopyText(e) {
            uni.setClipboardData({
                data: e.currentTarget.dataset.link,
                success: (res) => {
                    uni.showToast({
                        title: '已复制',
                        duration: 1000
                    });
                }
            });
        },
    }
};
</script>
<style>
</style>
