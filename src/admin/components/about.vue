<template>
  <div class="about-container">
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
</template>


<script>

import  button  from '../components/button/button'
import  category  from '../components/category/category'
export default {
  components: {
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
		this.categories = require("../data/categories.json");
	}
};
</script>

<style lang="postcss" scoped>
	.header {
		display: flex;
		margin-bottom: 60px;
	}
	.skills {
		display: flex;
		flex-wrap: wrap;
	}

	.item {
		width: calc(100% / 2 - 30px);
		margin-right: 30px;
		margin-bottom: 30px;
	}
	.title {
		margin-right: 60px;
		font-size: 21px;
		font-weight: bold;
		color: #414C63;
		}
</style>