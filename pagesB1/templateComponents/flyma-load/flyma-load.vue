<template>
	<view style="height: 100%;overflow: hidden;" class="flex align-center justify-center padding-tb-sm">
		<view class="loader-spanne-20" v-if="loadInx===0">
		  <text class="loader-spanneC loader-spanneC1" />
		  <text class="loader-spanneC loader-spanneC2" />
		  <text class="loader-spanneC loader-spanneC3" />
		  <text class="loader-spanneC loader-spanneC4" />
		  <text class="loader-spanneC loader-spanneC5" />
		  <text class="loader-spanneC loader-spanneC6" />
		  <text class="loader-spanneC loader-spanneC7" />
		</view>
		<view class="loaderFr" v-else-if="loadInx===1">
		  <view class="load-inner load-one"></view>
		  <view class="load-inner load-two"></view>
		  <view class="load-inner load-three"></view>
		  <!-- <text class="textLoad">Loading...</text> -->
		  <image mode="aspectFit" src="/static/flyma.png" class="ping"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "flymaLoad",
		props:{
			loadInx:{
				type:Number,
				default:0
			},
			loadTit:{
				type:String,
				default:'加载中'
			},
		},
		setup() {
			
		}
	}
</script>

<style lang="scss" scoped>
	.ping {
		-webkit-animation: ping 0.8s ease-in-out infinite both;
		        animation: ping 0.8s ease-in-out infinite both;
	}
	@-webkit-keyframes ping {
	  0% {
	    -webkit-transform: scale(0.2);
	            transform: scale(0.2);
	    opacity: 0.8;
	  }
	  80% {
	    -webkit-transform: scale(1.2);
	            transform: scale(1.2);
	    opacity: 0;
	  }
	  100% {
	    -webkit-transform: scale(2.2);
	            transform: scale(2.2);
	    opacity: 0;
	  }
	}
	@keyframes ping {
	  0% {
	    -webkit-transform: scale(0.3);
	            transform: scale(0.3);
	    opacity: 0.8;
	  }
	  80% {
	    -webkit-transform: scale(1.2);
	            transform: scale(1.2);
	    opacity: 0;
	  }
	  100% {
	    -webkit-transform: scale(2.3);
	            transform: scale(2.3);
	    opacity: 0;
	  }
	}
	/*
	  多米诺
	  
	*/
	.loader-spanne-20 {
	  position: relative;
	  width: 100px;
	  height: 30px;
	  padding: 0;
	}
	.loader-spanneC {
	  position: absolute;
	  right: 0;
	  width: 3px;
	  height: 30px;
	  background-color: rgb(116, 204, 197);
	  display: block;
	  border-radius: 3px;
	  transform-origin: 50% 100%;
	  animation: move 2.8s linear infinite;
	}
	.loader-spanneC1 {
	  animation-delay: -0.4s;
	}
	.loader-spanneC2 {
	  animation-delay: -0.8s;
	}
	.loader-spanneC3 {
	  animation-delay: -1.2s;
	}
	.loader-spanneC4 {
	  animation-delay: -1.6s;
	}
	.loader-spanneC5 {
	  animation-delay: -2s;
	}
	.loader-spanneC6 {
	  animation-delay: -2.4s;
	}
	.loader-spanneC7 {
	  animation-delay: -2.8s;
	}
	@keyframes move {
	  0% {
		opacity: 0;
		transform: translateX(0px) rotate(0deg);
	  }
	  20% {
		opacity: 1;
	  }
	  40% {
		transform: translateX(-40px) rotate(0deg);
	  }
	  50% {
		opacity: 1;
		transform: translateX(-50px) rotate(22deg);
	  }
	  85% {
		opacity: 1;
		transform: translateX(-85px) rotate(60deg);
	  }
	  100% {
		opacity: 0;
		transform: translateX(-100px) rotate(65deg);
	  }
	}
	/* 
	风刃
	
	*/
	.loaderFr {
	  position: relative;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  width: 150rpx;
	  height: 150rpx;
	  // margin: 130rpx 0;
	  // perspective: 780px;
	}
	
	.textLoad {
	  font-size: 20rpx;
	  font-weight: 700;
	  color: #cecece;
	  z-index: 10;
	}
	
	.load-inner {
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  box-sizing: border-box;
	  border-radius: 50%;
	}
	
	.load-inner.load-one {
	  left: 0%;
	  top: 0%;
	  border-bottom: 3px solid #5c5edc;
	  animation: rotate1 1.15s linear infinite;
	}
	
	.load-inner.load-two {
	  right: 0%;
	  top: 0%;
	  border-right: 3px solid #9147ff;
	  animation: rotate2 1.15s 0.1s linear infinite;
	}
	
	.load-inner.load-three {
	  right: 0%;
	  bottom: 0%;
	  border-top: 3px solid #3b82f6;
	  animation: rotate3 1.15s 0.15s linear infinite;
	}
	
	@keyframes rotate1 {
	  0% {
		transform: rotateX(45deg) rotateY(-45deg) rotateZ(0deg);
	  }
	  100% {
		transform: rotateX(45deg) rotateY(-45deg) rotateZ(360deg);
	  }
	}
	@keyframes rotate2 {
	  0% {
		transform: rotateX(45deg) rotateY(45deg) rotateZ(0deg);
	  }
	  100% {
		transform: rotateX(45deg) rotateY(45deg) rotateZ(360deg);
	  }
	}
	@keyframes rotate3 {
	  0% {
		transform: rotateX(-60deg) rotateY(0deg) rotateZ(0deg);
	  }
	  100% {
		transform: rotateX(-60deg) rotateY(0deg) rotateZ(360deg);
	  }
	}
</style>