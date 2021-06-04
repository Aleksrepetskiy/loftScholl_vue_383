<template>
	<div class="app-container">
		<router-view name="header"/>
		<div class="page-content">
			<router-view />
		</div>
	</div>
</template>

<script>
export default ({
	data() {
		return{

		}
	},

})
</script>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
	@import "normalize.css";
	@import "../styles/mixins.pcss";
	@import "../styles/layout/base.pcss";
	body {
		color: #414C63;
	}
</style>

<style lang="postcss" scoped src="./app.pcss"></style>
