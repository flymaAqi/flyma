<template>
	<view style="height: 100%;" :class="forComTit?'padding-left-sm padding-right-sm':''">
		<view class="cardCodeTxt">
			<view class="wrapCode">
				<view class="headCode">
					<text class="titleCode">
						<text class="cuIcon-activity text-blue"></text>
						{{titTxt}}
					</text>
					<view class="copy_toggle" @tap="copyTxt(valueTxt)">
						<text class="cuIcon-newshotfill text-blue"></text>
					</view>
				</view>
				<view class="bodyCode">
					<text class="preCode">
						<text style="color: #ffff00;">---&nbsp;</text>
						<text style="color: #e34ba9;">{{classTit}}</text>
						<text class="cmdCode text-cyan">
							{{preTxt}}"
							<text class="text-green">{{valueTxt}}</text>
							"{{nextTxt}}
						</text>
						<text class="cmdCode text-gray">
							{{ tipTxt?tipTxt:''}}
						</text>
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			classTit:{
				type:String,
				default:'class代码段提示'
			},
			forComTit:{
				type: Boolean,
				default: false
			},
			preTxt: {
				type: String,
				default: '<view class='
			},
			valueTxt: {
				type: String,
				default: 'text-xl'
			},
			nextTxt:{
				type: String,
				default: '></view>'
			},
			titTxt:{
				type: String,
				default: ''
			},
			tipTxt:{
				type: String,
				default: ''
			}
		},
		setup(){
			function copyTxt(en){
				uni.setClipboardData({
					data: en,
					success: (res) => {
						uni.showToast({
							title: '复制成功!',
							duration: 1000
						});
					}
				});
			};
			return{
				copyTxt
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cardCodeTxt {
		position: relative;
		padding: 10rpx;
		overflow: hidden;
		border: 0.25px solid #c5c5c5;
		border-bottom-right-radius: 10px;
		border-bottom-left-radius: 10px;
		background-color: navy;
	}

	.wrapCode {
		display: flex;
		width: 100%;
		flex-direction: column;
		position: relative;
		z-index: 10;
		border: 0.5px solid #525252;
		border-radius: 10px;
		overflow: hidden;
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
			"Liberation Mono", "Courier New", monospace;
	}

	

	.headCode {
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		min-height: 40px;
		padding-inline: 12rpx;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		background-color: #202425;
		.titleCode {
			display: flex;
			align-items: left !important;
			text-align: left !important;
			overflow: hidden;
			color: #e5e5e5;
		}
	}

	

	.copy_toggle {
		font-size: 50rpx;
		height: fit-content;
		border: 0.65px solid darkgrey;
		border-radius: 6px;
	}

	.bodyCode {
		display: flex;
		flex-direction: column;
		position: relative;
		border-bottom-right-radius: 15px;
		border-bottom-left-radius: 15px;
		padding: 1rem;
		background-color: black;
		white-space: nowrap;
	}

	.preCode {
		text-align: left;
	}

	.cmdCode {
		height: fit-content;
		position: relative;
		display: flex;
		align-items: center;
		word-break: break-all;
		white-space: pre-line;
		word-wrap: break-word;
	}

</style>