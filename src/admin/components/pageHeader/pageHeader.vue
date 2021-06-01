<template>
	<div class="pageHeader-component">
		<headline title="Панель администрирования">
			<user/>
		</headline>
	</div>
</template>

<script>

import user from "../user"
import headline from "../headline"

export default {
	components: {
		user,
		headline,
	},
	props: {
		title: {
			type: String,
			default: "Панель администрирования"
		} 
	}
}
</script>

<style lang="postcss" scoped src="./pageHeader.pcss"></style>