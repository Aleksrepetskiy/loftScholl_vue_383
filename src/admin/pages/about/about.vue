<template>
  <div class="about-container" >
	<div class="container" v-if="categories.length">
		<div class="header">
			<div class="title">Блок "Обо мне"</div>
			<iconedButton type="iconed"  title="Добавить группу" @click="categoriAdIsShow = true" v-if="categoriAdIsShow === false"/>
		</div>
		<ul class="skills">
			<li class="item" v-if="categoriAdIsShow">
				<category 
					@remove="categoriAdIsShow = false"
					@approve="createCategory"
					empty 
				/>
			</li>
			<li class="item" v-for="category in categories" :key="category.id">
				<category
					:title="category.category"
					:skills="category.skills"
					@create-skill='createSkill($event, category.id)'
					@edit-skill='editSkill'
					@remove-skill='removeSkill'
				/>
			</li>
		</ul>
	</div>
	<div class="container" v-else>
		<h1>Loading....</h1>
	</div>
    
  </div>
</template>


<script>

import  button  from '../../components/button/button'
import  category  from '../../components/category/category'
import  {mapActions, mapState}  from 'vuex'
export default {
  components: {
		iconedButton: button,
		category

  	},
  	data() {
		return{
			categoriAdIsShow: false
		}

	},
	computed: {
		...mapState("categories",{
			categories: state => state.data
			
		})
	},
	methods: {
		...mapActions({
			createCategoryAction: "categories/create",
			fetchCategoryAction: "categories/fetch",
			addSkillAction: "skills/add",
			editSkillAction: "skills/edit",
			removeSkillAction: "skills/remove",
		}),
		async createSkill(skill, categoryId) {
			const newSkill = {
				...skill,
				category: categoryId
			}
			await this.addSkillAction(newSkill);
			skill.title = ''
			skill.percent = ''
		},
		async editSkill(skill) {
			await this.editSkillAction(skill);
			skill.editMode = false;
		},
		removeSkill(skill) {
			this.removeSkillAction(skill);
		},
		async createCategory(categoryTitle) {
			try {
				await this.createCategoryAction(categoryTitle);
				this.categoriAdIsShow = false;
			} catch (error) {
				console.log(error.message);
				
			}
		}
	},
	created() {
		this.fetchCategoryAction();
	}
};
</script>

<style lang="postcss" scoped src="./about.pcss"></style>
