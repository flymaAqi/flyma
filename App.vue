<script>
	export default {
	}
</script>

<style lang="scss">
	@import "pagesB2/commonB2/main.css";
	@import "pagesB2/commonB2/icon.css";
	.Jpage {
		background: linear-gradient(135deg, #5DCEB3 0%,#CBAFD8 48%,#6654F1 100%);
	}
	page{
		background: #a3a3a3;
	}
	.bg-img-new {
		position: absolute;
		width: 100%;
	}

	.scrollPage {
		height: 100%;
		min-height: 90vh;
		background-color: #fff;
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 36rpx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 20rpx;
		border-radius: 20rpx;
		width: 46%;
		margin: 0 1% 32rpx;
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
	}

	.nav-title {
		font-size: 30rpx;
		// font-weight: 680;
	}

	.nav-title::first-letter {
		font-size: 40rpx;
		margin-right: 4rpx;
	}

	.nav-name {
		font-size: 28rpx;
		text-transform: Capitalize;
		margin-top: 20rpx;
		position: relative;
	}

	.nav-des {
		font-size: 24rpx;
		text-transform: Capitalize;
		margin-top: 30rpx;
		position: relative;
	}

	.nav-name::before {
		content: '';
		position: absolute;
		display: block;
		width: 40rpx;
		height: 6rpx;
		background: #fff;
		bottom: 0;
		left: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: '';
		position: absolute;
		display: block;
		width: 90rpx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40rpx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36rpx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 24rpx;
		top: 16rpx;
		font-size: 52rpx;
		width: 60rpx;
		height: 60rpx;
		text-align: center;
		line-height: 60rpx;
	}

	.text-light {
		font-weight: 300;
	}

	.nav-lie {
		border-radius: 28rpx;
		width: 46%;
		margin: 0 1% 40rpx;
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-lie::after {
		content: '';
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		// border-radius: 10rpx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.image-bg-ui {
		min-height: 680rpx;
	}
	@keyframes show {
		0% {
			transform: translateY(-50px);
			opacity: 0.1;
		}

		60% {
			transform: translateY(40rpx);
			opacity: 0.6;
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
			opacity: 0.4;
		}

		60% {
			transform: translateY(40rpx);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>