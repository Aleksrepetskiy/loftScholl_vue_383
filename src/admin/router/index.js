import Router from 'vue-router'

const usrWorks = {
	template: "<div>User works</div>",
}
const Error = {
	template: `
		<div>
			<div>404 Not found</div>
			<router-link to="/">На главную</router-link>
		</div>		
	`,
}

const routes = [
	{
		path: '/',
		component: ()=>import('../components/about.vue'),
	},
	{
		path: '/works',
		component: () => import('../components/works.vue'),
		children: [{
			path: 'profile',
			component: usrWorks
		}]
	},
	{
		path: '/reviews',
		component: () => import('../components/reviews.vue')
	},
	{
		path: '*',
		component: Error
	}
]

const router = new Router({
	routes
})

export default router;