import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import header from "./components/header";
import about from "./pages/about";
import login from "./pages/login";
import works from  "./pages/works";
import reviews from  "./pages/reviews";

// const usrWorks = {
// 	template: "<div>User works</div>",
// }
// const Error = {
// 	template: `
// 		<div>
// 			<div>404 Not found</div>
// 			<router-link to="/">На главную</router-link>
// 		</div>		
// 	`,
// }

const routes = [
	{
		path: '/',
		components: {
			header: header,
			default: about
		}
	},
	{
		path: '/login',
		component: login,
	},
	{
		path: '/works',
		components: {
			header: header,
			default: works
		}
		// children: [{
		// 	path: 'profile',
		// 	component: usrWorks
		// }]
	},
	{
		path: '/reviews',
		components: {
			header: header,
			default: reviews
		}
	},
	// {
	// 	path: '*',
	// 	component: Error
	// }
]

export default new VueRouter({ routes });