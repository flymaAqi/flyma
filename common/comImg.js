import {
	ref
} from 'vue'
const forDaImgs = ref([
	"https://image.meiye.art/pic_TD-cynMjlT7Obwb2acwR9",
	"https://image.meiye.art/pic_16325760999522VaK4dkVWNSR24HZS_WY6",
]);
const dataImgs = [
	"https://image.meiye.art/pic_TD-cynMjlT7Obwb2acwR9",
	"https://image.meiye.art/pic_16325760999522VaK4dkVWNSR24HZS_WY6",
	"https://image.meiye.art/pic_1632282714292JcbiBtoiYx1_l_iirVhuI",
	"https://haowallpaper.com/link/common/file/previewFileImg/16360432664432000",
	"https://haowallpaper.com/link/common/file/previewFileImg/16360156156120448",
	"https://haowallpaper.com/link/common/file/previewFileImg/16360155533593984"
];

const forLiData = ref([{},{
	title:'这没啥好看的,去寻找更精彩的吧',
	tipTit:'彩蛋提示',
	tip:'长按章鱼哥大门的鼻子',
	titTop: false,
	titLeft: false
}])
const dataMsg = [{},{
	title:'这没啥好看的,去寻找更精彩的吧',
	tipTit:'彩蛋提示',
	tip:'长按章鱼哥大门的鼻子',
	titTop: false,
	titLeft: false
},{
	title:'',
	tipTit:'好看吗',
	tip:'其实长按图片任何一个地方都可以',
	titTop: true,
	titLeft: true
}, {
	title:'注:图片来源于网络',
	tipTit:'',
	tip:'',
	titTop: true,
	titLeft: true
}, {
	title:'',
	tipTit:'',
	tip:'人心中的成见是座大山',
	titTop: true,
	titLeft: false
},{
	title:'最酷的事 在这个世界上  做你自己',
	tipTit:'So?',
	tip:'',
	titTop: false,
	titLeft: false
}];
export {
	dataMsg,
	forLiData,
	forDaImgs,
	dataImgs
}