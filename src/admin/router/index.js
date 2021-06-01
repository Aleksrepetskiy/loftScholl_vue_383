import Router from 'vue-router'

const routes = [
	{
		path: '/',
		component: ()=>import('../components/about.vue')
	},
	{
		path: '/works',
		component: () => import('../components/works.vue')
	},
	{
		path: '/reviews',
		component: () => import('../components/reviews.vue')
	},
]

const router = new Router({
	routes
})

export default router;