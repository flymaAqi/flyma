
const SYSTEM_INFO = uni.getSystemInfoSync();
const scHeight = SYSTEM_INFO.screenHeight;
const safeB = SYSTEM_INFO.safeArea.bottom;
const safeT = SYSTEM_INFO.safeArea.top;
const statusBarH = SYSTEM_INFO.statusBarHeight;
const wHeight = SYSTEM_INFO.windowHeight;

const getStatusBarHeight = ()=> statusBarH || 15;

const getTitleBarHeight = ()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top,height} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight())+2	
	}else{
		return 40;
	}
}

const  getNavBarHeight = ()=> getStatusBarHeight()+getTitleBarHeight();

const pageHeight = ()=>{
	if(safeT !== 0){
		//不等于说明有底部安全区
		return safeB - getNavBarHeight() - 82;//50底部导航和30顶部导航2是安全区
	}else{
		return safeB - (getNavBarHeight() + 52);//说明包含顶部导航
	}
	
}
const getLeftIconLeft = ()=> {
	// #ifdef MP-TOUTIAO
		let {leftIcon:{left,width}}  = tt.getCustomButtonBoundingClientRect();
		return left+ parseInt(width);
	// #endif
	
	// #ifndef MP-TOUTIAO
		return 0
	// #endif	
}


export {
	getLeftIconLeft,
	getNavBarHeight,
	getStatusBarHeight,
	getTitleBarHeight,
}