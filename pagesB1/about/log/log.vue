<template>
    <view style="height: 100%">
		<comNavTab csTit="更新日志">
			<view class="cu-timeline">
			    <template v-for="(item, index) in logData" :key="index">
			        <view class="cu-item" :class="item.titIcon">
						<view v-if="item.warning" class="text-center aqi-textLine-style-double aqi-textLine-bottom">{{item.warning}}</view>
						<view class="text-blue">{{ item.data }}</view>
			            <view :class="item.bgg" class=" light content shadow margin-top-sm">
			                <view class="cu-capsule radius">
								<text :class="item.titIcon" class="margin-right text-bold" style="font-size: 30rpx;">{{item.title}}</text>
			                    <view class="cu-tag bg-gradual-green-light round">{{ item.version }}</view>
			                </view>
			                <view class="margin-top-sm solid-bottom text-content" v-for="(item, index1) in item.info" :key="index1">
			                    <view>{{ item }}</view>
			                </view>
							<view v-show="item.tip" class="padding-lr padding-top text-gray text-sm">{{item.tip}}</view>
							<view v-if="item.imgUrls" style="max-height: 240px;overflow: hidden;">
								<view v-for="(itemB,index) in item.imgUrls" :key="index" @tap="openImg(index,item.imgUrls)">
									<imgLoadu load-mode="widthFix" :lo-inx="0" load-height="230rpx" :tsc="1.5" :img-url="itemB" />
								</view>
							</view>
			            </view>
			        </view>
			    </template>
			</view>
		</comNavTab>
    </view>
</template>

<script>
	import comNavTab from '../../templateComponents/comNavTab/comNavTab.vue'
	import imgLoadu from '../../templateComponents/u-image/imgLoadu.vue'
export default {
	components:{
		comNavTab,
		imgLoadu
	},
    data() {
        return {
			dataList:[],
            logData: [
				{
					bgg:'bg-gradual-red-light',
					titIcon:'cuIcon-countdown text-purple',
					title:'兼容优化--安装更新',
				    version: 'v3.1.1',
				    data: '2025/04/08',
				    info: ['1.打卡地图优化', '2.引入App更新功能', '3.小程序与App平台兼容优化','4.对底部全局信息整合为高内聚组件']
				},
				{
					bgg:'bg-gradual-green-light',
					titIcon:'cuIcon-mobile text-cyan',
					title:'安卓优化--文件大修',
				    version: 'v3.1.0',
				    data: '2025/04/06',
				    info: ['1.针对Android的bug修复及优化', '2.对底层css文件修复优化', '3.卡片设计优化及时间格式化', '4.静态资源优化',]
				},
                {
					bgg:'bg-gradual-purple-light',
					titIcon:'cuIcon-paintfill text-orange',
					title:'持续更新--继续调优',
                    version: 'v3.0.2',
                    data: '2025/03/18',
                    info: ['1.新增tabbar组件', '2.新增音乐播放器组件已引入模板使用', '3.针对所有待加载资源优化', '4.将云端tabbar图片放进本地供开发者调试','5.发布安卓APP稳定版']
                },
                {
					imgUrls:[
						"https://www.helloimg.com/i/2025/03/19/67da4ba5d60f9.png",
						"https://www.helloimg.com/i/2025/03/19/67da4ba737c24.png"
					],
					tip:'亲测此次优化后首屏加载时间控制在600ms到400ms之间(开启网络缓存或数据加载完后再去请求图片)',
					bgg:'bg-gradual-blue-light',
					titIcon:'cuIcon-selectionfill text-green',
					title:'第二次重大更新',
                    version: 'v3.0.1',
                    data: '2025/03/08',
                    info: ['1.再次完全拆分重组当前项目', '2.针对小程序实施专门性能调优', '3.拆解分包,压缩后主包仅100kb左右', '4.取消所有全局注册组件,组件集体分类引入', '5.针对iOS与Android的兼容优化', '6.新增文字效果组件','7.新增轮播显示点组件','8.新增icon图标文件','9.新增动画效果文件','10.重置关于页面新增收藏列表','11.引入全局分享代码统一调用','12.针对部分css与js判断代码优化']
				},
                {
					bgg:'bg-gradual-orange-light',
					titIcon:'cuIcon-mobilefill text-pink',
					title:'性能调优--持续更新',
                    version: 'v2.1.0',
                    data: '2025/02/09',
                    info: ['1.新增loading样式', '2.对所有loading样式优化并组合使用', '3.新增code代码提示块','4.新增popup弹出组件','5.新增飞卡样式组件','6.对完全体模板页面结构重组与优化','7.新增悬浮按钮组件','8.全局注册悬浮按钮,所有页面引入优化','9.新增手机里面玩手机组件'],
					tip:'想不出什么高大上的词汇,那就接接地气吧！',
					warning:'以下版本已不可获取'
				},
                {
					bgg:'bg-gradual-pink-light',
					titIcon:'cuIcon-servicefill text-red',
					title:'bug出没--修复bug',
                    version: 'v2.0.2',
                    data: '2025/01/18',
                    info: ['1.对轮播组件流畅性问题修复及代码优化', '2.整合页面组件统一调用', '3.下拉刷新bug修复及优化','4.新增轮播组件(这个狠好看)']
                },
                {
					bgg:'bg-gradual-blue-light',
					titIcon:'cuIcon-medal text-green',
					title:'第一次大更新',
                    version: 'v2.0.1',
                    data: '2025/01/09:多云转晴',
                    info: ['1.大部分组件内部结构更新,降低耦合', '2.大部分组件基础样式大更新', '3.拆解组件,合成高内聚组件','4.底层css样式大更新','5.首屏数据渲染优化','6.增加新轮播组件以及刷新组件','7.增加新导航栏组件','8.重构tabbar','9.为部分延时器增加防抖函数','10.代码开源'],
					tip:'开源之路道阻且长,能坚持到何时便看命运怎么安排去吧!'
                },
                {
					titIcon:'cuIcon-repair text-yellow',
					title:'大修组件--优化组件',
                    version: 'v1.1.0',
                    data: '2024/11/22',
                    info: ['1.删除部分组件及组件结构重构', '2.重构数据结构', '3.css动画性能调优', '4.js文件大整合','5.魔改数据列表渲染组件'],
					tip:'所谓魔改,即不按原本结构狂野般大幅修改,一些玩游戏打mod的和一些lsp都懂吧,后续可能还有更精彩的!'
                },
                {
					bgg:'bg-gradual-green',
					titIcon:'cuIcon-circle text-blue',
					title:'打乱重组--代码重构',
                    version: 'v1.0.1',
                    data: '2024/09/10',
                    info: ['1.ColorUI + ColorUI AG基础代码整合重构', '2.清除setData语法', '3.vue3整体重构','4.css文件清理整合','5.大修页面全局变量']
                }
            ]
        };
    },
	methods:{
		openImg(inx,item){
			uni.previewImage({
				indicator:'number',
				current:inx,
				urls:item
			})
		}
	}
};
</script>
<style>
</style>
