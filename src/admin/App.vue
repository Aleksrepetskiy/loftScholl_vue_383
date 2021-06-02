<template>
	<div class="app-container">
		<pageHeader />
		<navigation />
		<div class="page-content">
      		<div class="container">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>

import  pageHeader  from './components/pageHeader/pageHeader.vue'
import  navigation  from './components/navigation/navigation.vue'


export default ({
	components: {
		pageHeader,
		navigation,
	},
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
