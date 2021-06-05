<template>
   <nav class="navigation-component">
    <div class="container">
      <ul class="list">
        <li
          v-for="link in links" 
          :key="link.id"
		  
		  >
		  <!-- <div class="link" @click="changePage(link.alias, link.id)" :class="['link', {active: link.active}]">{{link.title}}</div> -->
		  	<div @click="setActiveTab(link.id)">
				<router-link  
				:to="`/${link.alias}`" 
				:class="['link', {active: link.active}]"
				>
					{{link.title}}
				</router-link>
			</div>
          	
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
const links = [
  { id: 0, title: "Обо мне", alias: "", active: false },
  { id: 1, title: "Работы", alias: "works", active: false },
  { id: 2, title: "Отзывы", alias: "reviews", active: false },
];
export default {
  data() {
    return {
      links,
    };
  },
  methods: {
	  changePage(way, id) {
		  this.setActiveTab(id); 
		  this.$router.push(`/${way}`);
	  },
	  setActiveTab(id) {
		  this.links = this.links.map((item)=>{
			  if (item.id === id) {
				  item.active = true
			  }else {
				  item.active = false
			  }
			  return item
		  })
	  }

  }
};
</script>
<style lang="postcss" scoped>
	@import "../../../styles/mixins.pcss";
	.navigation-component {
		background-color: #fff;
	}
	.list {
	display: flex;
	}

	.link {
	padding: 30px;
	font-size: 16px;
	font-weight: 600;
	display: block;
	text-decoration: none;
	color: #414C63;
	cursor: pointer;
		&:hover, &.active {
			color: #383bcf;
			position: relative;
			&:after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 3px;
			background: #383bcf;
			}
		}
		@include tablets {
			padding: 30px 18px ;
		}
	}

	.active {
	.link {
		color: #383bcf;
		position: relative;

		&:after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		background: #383bcf;
		}
	}
	}

</style>