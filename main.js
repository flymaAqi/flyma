import App from './App'
import share from '@/common/share.js'
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.mixin(share)
	return {
		app
	}
}