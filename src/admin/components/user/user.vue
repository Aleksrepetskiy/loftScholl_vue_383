<template>
  <div class="user-component">
	   <avatar size="2.7" :src="userPic" />
	   <div class="user-name">Александр Репецкий</div>
  </div>
</template>
<script>

import avatar from "../avatar"

export default {
	components: {
		avatar,
	},
	computed: {
		userPic() {
			return require("../../../images/content/user.jpg").default
		}
	}
 
}
</script>
<style lang="postcss" scoped>
	.user-component {
		display: flex;
		align-items: center;
		font-size: 18px;
		font-weight: bold;
	}
	.user-name {
		margin-left: 10px;
	}

</style>