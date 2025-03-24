export default {
	onShareAppMessage(res) {
		var pages = getCurrentPages() // 获取栈实例
		let currentRoute = pages[pages.length - 1]['$page']['fullPath']; // 获取当前页面路由
		if (res.from === 'button') {
			return {
				title: 'Flyma+css高效UI组件库',
				path: currentRoute,
			};
		}
		if (res.from === 'menu') {
			return {
				title: 'Flyma+css高效UI组件库',
				path: currentRoute,
			};
		}
	},
    created() {
        //#ifdef MP-WEIXIN
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage']
        });
        //#endif
    },
}