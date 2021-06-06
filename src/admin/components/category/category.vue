<template>
  <div class="category-component">
	<card slim>
		<editLine slot="title" 
			v-model="categoryTitle" 
			:editModeByDefault="empty" 
			@remove="$emit('remove', $event)"
			@approve="$emit('approve', $event)"
			:errorMessage="validation.firstError('categoryTitle')"
		/>
		<template slot="content">
			<ul class="skills" v-if="empty === false">
				<li class="item" v-for="skill in skills" :key="skill.id">
					<skill 
						:skill="skill"
						@remove="$emit('remove-skill', $event)"
						@approve="$emit('edit-skill', $event)"
					/>
				</li>
			</ul>
			<div class="bottom-line">
				<skillAddLine 
					@approve="$emit('create-skill', $event)"
					:blocked="empty" 
				/>
			</div>
		</template>
	</card>	
  </div>
</template>
<script>

import card from "../card"
import editLine from "../editLine"
import skill from "../skill"
import skillAddLine from "../skillAddLine"
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
	mixins: [ValidatorMixin],
	validators: {
		"categoryTitle": value => {
			return Validator.value(value).required("Введите название");
		}
	},
	components: {
		card,
		editLine,
		skill,
		skillAddLine
	},
	props: {
		empty: Boolean,
		title: {
			type: String,
			default: ""
		},
		skills: {
			type: Array,
			default: () => []
		},
	},
	data() {
		return {
			categoryTitle: this.title,
		}
	}
 
}
</script>
<style lang="postcss" scoped>
.category-component {
	height: 100%;
}
.bottom-line {
	padding-top: 70px;
	margin-top: auto;
	padding-left: 25%;
}
</style>