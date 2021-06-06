<template>
  <div 
    :class="['skill-add-line-component', {blocked: blocked}]"
  >
    <div class="title">
      <app-input 
	  	placeholder="Новый навык" 
		v-model="skill.title"
		:errorMessage="validation.firstError('skill.title')"
	/>
    </div>
    <div class="percent">
      <app-input
	  	type="number" 
		min="0" 
		max="100" 
		maxlength="3" s
		v-model="skill.percent"
		:errorMessage="validation.firstError('skill.percent')"
	  />
    </div>
    <div class="button">
      <round-button type="round" @click="handleClick"/>
    </div>
  </div>
</template>

<script>
import input from "../input";
import button from "../button";
import { Validator, mixin as ValidatorMixin } from "simple-vue-validator";
export default {
	mixins: [ValidatorMixin],
	validators: {
		"skill.title": value => {
			return Validator.value(value).required("Не может быть пустым");
		},
		"skill.percent": value => {
			return Validator.value(value)
			.integer("Должно быть число")
			.between(0, 100, "Некоректное значение")
			.required("Не может быть пустым");
		},
	},
  props: {
    blocked: Boolean
  },
  data() {
	  return {
		  skill: {
			  title: '',
			  percent: ''
		  }
	  }
  },
  components: {
    appInput: input,
    roundButton: button,
  },
  methods: {
	  async handleClick() {
		  if (await this.$validate() === false) return;
		  this.$emit('approve', this.skill)
	  },
  }
};
</script>

<style lang="postcss" scoped src="./skillAddLine.pcss"></style>