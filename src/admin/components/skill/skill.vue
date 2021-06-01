<template>
  <div class="skill-component" v-if="editMode === false">
	  <div class="title">{{skill.title}}</div>
	  <div class="percent">{{skill.percent}}</div>
	  <icon grayscale  symbol="pencil" class="btn" @click="editMode = true"/>
	  <icon grayscale  symbol="trash" class="btn" @click="$emit('remove', skill.id)"/>
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
	  <icon symbol="cross" class="btn" @click="editMode = false"/>
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
				id: 0,
				title: this.skill.title,
				percent: this.skill.percent,
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