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
		/>
	</div>
	<div class="percent">
		<app-input
		v-model="currentSkill.percent"
		type="number"
		min="0"
		max="100"
		maxlength="3" 
    	/>
	</div>
	  <icon  symbol="tick" class="btn" @click="$emit('approve', currentSkill)"/>
	  <icon symbol="cross" class="btn" @click="currentSkill.editMode = false"/>
  </div>
</template>

<script>
import input from "../input"
import icon from "../icon"

export default {
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
	}
 
}
</script>
<style lang="postcss" scoped src="./skill.pcss"></style>