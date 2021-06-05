export default {
	namespaced: true,
	state: {
		data: []
	},
	mutations: {
		SET_CATEGORIES: (state, categories) => (state.data = categories),
		ADD_CATEGORY: (state, category) => state.data.unshift(category),
	},
	actions: {
		async create({commit},title) {
			try {
				const {data} = await this.$axios.post('/categories', { title: title});
				commit('ADD_CATEGORY', data)
			} catch (error) {
				throw new Error("произошла ошибка");
			}
		},
		async fetch({commit}) {
			try {
				const response = await this.$axios.get('/categories/462');
				commit('SET_CATEGORIES', response.data)
				console.log(response)
			} catch (error) {
				console.log(error)
			}
		},
	}
}