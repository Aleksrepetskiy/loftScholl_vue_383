<template>
  <div class="skill-component" v-if="currentSkill.editMode === false">
	  <div class="title">{{skill.title}}</div>
	  <div class="percent">{{skill.percent}}</div>
	  <icon grayscale  symbol="pencil" class="btn" @click="currentSkill.editMode = true"/>
	  <icon grayscale  symbol="trash" class="btn" @click="$emit('remove', currentSkill)"/>
  </div>
  <div class="skill-component" v-else>
	<div class="title">
		<app-input 
			v-model="currentSkill.title" 
			noSidePaddings 
			:errorMessage="validation.firstError('currentSkill.title')"
		/>
	</div>
	<div class="percent">
		<app-input
		v-model="currentSkill.percent"
		:errorMessage="validation.firstError('currentSkill.percent')"
		type="number"
		min="0"
		max="100"
		maxlength="3" 
    	/>
	</div>
	  <icon  symbol="tick" class="btn" @click="approve"/>
	  <icon symbol="cross" class="btn" @click="currentSkill.editMode = false"/>
  </div>
</template>

<script>
import input from "../input"
import icon from "../icon"
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";

export default {
	mixins: [ValidatorMixin],
	validators: {
		"currentSkill.title": value => {
			return Validator.value(value).required("Не может быть пустым");
		},
		"currentSkill.percent": value => {
			return Validator.value(value)
			.integer("Должно быть число")
			.between(0, 100, "Некоректное значение")
			.required("Не может быть пустым");
		},
	},
	props: {
		skill: {
			type: Object,
			default: ()=>{},
			required: true
		}

	},
	data() {
		return {
			editMode: false,
			currentSkill: {
				id: this.skill.id,
				title: this.skill.title,
				percent: this.skill.percent,
				category: this.skill.category,
				editMode: false
			}
		}
	},
	components: {
		icon,
		appInput: input
	},
	methods: {
	  async approve() {
		  if (await this.$validate() === false) return;
		  this.$emit('approve', currentSkill)
	},
}

 
}
</script>
<style lang="postcss" scoped src="./skill.pcss"></style>