<template>
	<div class="app-container">
		<headline title="Панель администрирования">
			<user/>
		</headline>
		<navigation />
		<div class="page-content">
      		<div class="container">
        		<div class="header">
          			<div class="title">Блок "Обо мне"</div>
					<iconedButton type="iconed"  title="Добавить группу" @click="categoriAdIsShow = true" v-if="categoriAdIsShow === false"/>
				</div>
				<ul class="skills">
					<li class="item" v-if="categoriAdIsShow">
						<category empty @remove="categoriAdIsShow = false"/>
					</li>
					<li class="item" v-for="category in categories" :key="category.id">
						<category
							:title="category.category"
							:skills="category.skills"
						/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

import  user  from './components/user/user.vue'
import  headline  from './components/headline/headline.vue'
import  navigation  from './components/navigation/navigation.vue'
import  button  from './components/button/button.vue'
import  category  from './components/category/category.vue'

export default ({
	components: {
		user,
		headline,
		navigation,
		iconedButton: button,
		category
	},
	data() {
		return{
			categories: [],
			categoriAdIsShow: false
		}

	},
	created() {
		this.categories = require("./data/categories.json");
	}
	
})
</script>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
	@import "normalize.css";
	@import "../styles/mixins.pcss";
	@import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>
