const color_list = [{
		title: '嫣红',
		name: 'red',
		color: '#e54d42'
	},
	{
		title: '桔橙',
		name: 'orange',
		color: '#f37b1d'
	},
	{
		title: '明黄',
		name: 'yellow',
		color: '#fbbd08'
	},
	{
		title: '橄榄',
		name: 'olive',
		color: '#8dc63f'
	},
	{
		title: '森绿',
		name: 'green',
		color: '#39b54a'
	},
	{
		title: '天青',
		name: 'cyan',
		color: '#1cbbb4'
	},
	{
		title: '海蓝',
		name: 'blue',
		color: '#0081ff'
	},
	{
		title: '姹紫',
		name: 'purple',
		color: '#6739b6'
	},
	{
		title: '木槿',
		name: 'mauve',
		color: '#9c26b0'
	},
	{
		title: '桃粉',
		name: 'pink',
		color: '#e03997'
	},
	{
		title: '棕褐',
		name: 'brown',
		color: '#a5673f'
	},
	{
		title: '玄灰',
		name: 'grey',
		color: '#8799a3'
	},
	{
		title: '草灰',
		name: 'gray',
		color: '#aaaaaa'
	},
	{
		title: '墨黑',
		name: 'black',
		color: '#333333'
	},
	{
		title: '雅白',
		name: 'white',
		color: '#ffffff'
	}
];
const kehuan = [
	"../../static/ouBu.jpg",//欧布
	"../../static/kabutou.jpg",//天道总司
	"../../static/tiandao.jpg",//天道,
	"../../static/seeyou.jpg",//seeyou
	"https://image.meiye.art/pic_1632282714291Q5cAm3lwmuYxUIt6JQwqq",//珊迪
	"https://image.meiye.art/pic_1632282714268sb8l8FLGTXwN-6R3WYg1O",//派大星
	"https://image.meiye.art/pic_1632282714190sv72OmGK_kRGxeEWW1D2w",//海绵宝宝
	"https://image.meiye.art/pic_1632282714266g-a22YPBPcx3GoXEKFJ3s",//蟹老板
	"https://image.meiye.art/pic_1632282714267yspx4UFSUeHju_ZfJjMlZ",//痞老板
	"https://image.meiye.art/pic_16315109642566PfLKIIH4ZEITSu8a3yNu",//hk
	"https://image.meiye.art/pic_ar-Uj7K3c3bUKRC52fMGB",
	"https://image.meiye.art/pic_VF1F5E-Pe0S0X0wTj9ABL",
	"https://image.meiye.art/pic_h8mQYabDSvBPwqjpLvest",
];
//防抖
const onStart = debounce(() => {
	listAni.value = true
}, 100);
function debounce(func, wait) {
	let timeout = null;
	return function(...args) { //以数组形式接收多个参数
		const context = this;
		if (timeout) {
			clearTimeout(timeout);
			timeout=null
		}
		timeout = setTimeout(() => {
			func.apply(context, args);
		}, wait);
	};
}
export {
	color_list,
	debounce,
	kehuan,
}