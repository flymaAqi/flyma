/**
 * 验证十进制数字
 */
export function isNumber(value) {
	return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value)
}

export function addUnit(value = 'auto', unit = '') {
	if (!unit) {
		unit = 'px'
	}
	if (unit == 'rpx') {
		value = value * 2
	}
	value = String(value)
	// 用内置验证规则中的number判断是否为数值
	return isNumber(value) ? `${value}${unit}` : value
}

export function millisecondsToSeconds(milliseconds) {
    return Math.round(milliseconds / 1000 * 100) / 100; // 将结果四舍五入到两位小数
}