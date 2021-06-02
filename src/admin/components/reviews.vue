<template>
  <div class="reviews-container">
    <div class="header">
		<div class="title">Блок «Отзывы»</div>
	</div>
	<div class="review-new" v-if="show">
		<card title="Новый отзыв">
      		<div slot="content" class="review-new__box">
				  <div class="review-new__pic">
					  <avatar size="13" src="https://picsum.photos/300/300" class="review__avatar" />
					  <btn plain title="Добавить фото" />
				  </div>
				  <div class="review-new__data-box">
					  <div class="review-new__inputs">
						  <reviews-input title="Имя автора"></reviews-input>
						  <reviews-input title="Титул автора"></reviews-input>
					  </div>
					  <div>
						  <reviews-input title="Отзыв" fieldType="textarea"></reviews-input>
					  </div>
				  </div>
				  <div class="review-new__btns">
					  <btn plain title="Отмена" />
					  <btn title="Сохранить" @click="add" />
				  </div>
			</div>
    	</card>
	</div>
	<div class="reviews__list">
		<div class="reviews__add">
			<btn 
				type="square"
				title="Добавить работу" 
				@click="addReview"
			/>
		</div>
		<div class="reviews__item" v-for="review in reviews" :key="review.id">
			<card>
				<div class="review__head" slot="title">
					<avatar size="2.6" :src="review.pic" class="review__avatar" />
					<div class="review__head-info">
						<div class="review__head-name">
							{{review.name}}
						</div>
						<div class="review__head-occ">
							{{review.occ}}
						</div>
					</div>
				</div>
				<div class="review__content" slot="content">
					<div class="review__content-desk">
						<div class="review__desk">
							{{review.desk}}
						</div>
					</div>
					<div class="review__btn">
						<icon title="Править" symbol="pencil"/>
						<icon title="удалить" symbol="cross"/>
					</div>
				</div>
			</card>
		</div>
	</div>
  </div>
</template>	


<script>
export default {
  components: {
	  btn:()=>import('../components/button'),
	  card:()=>import('../components/card'),
	  avatar:()=>import('../components/avatar'),
	  icon:()=>import('../components/icon'),
	  reviewsInput:()=>import('../components/input'),

  },
  data() {
		return {
			reviews: [],
			show: false
		}

  },
  created() {
	  let data = require('../../data/reviews.json');
	  this.reviews = this.changeImgPath(data)
  },
  methods: {
	  changeImgPath(reviews) {
		  return reviews.map(item => {
			  item.pic = require(`../../images/content/${item.pic}`).default
			  return item;
		  })
	  },
	  addReview() {
		  this.show = true
	  },
	  add() {
		  this.show = false
	  }


  }

};
</script>

<style lang="postcss" scoped>
	.header {
		display: flex;
		margin-bottom: 60px;
	}
	.title {
		margin-right: 60px;
		font-size: 21px;
		font-weight: bold;
		color: #414C63;
	}
	.reviews {
		&__list {
			display: flex;
			flex-wrap: wrap;
		}
		&__add, &__item {
			width: calc((100%-56px)/3);
			min-height: 350px;
			margin-right: 28px;
			margin-bottom: 28px;
		}
		&__item {
			background-color: #fff;
			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
	.review {
		&__head {
			display: flex;
			&-name {
				font-weight: bold;
				font-size: 18px;
				line-height: 25px;
				color: #414C63;
				margin-bottom: 2px;
			}
			&-occ {
				font-weight: 600;
				font-size: 16px;
				line-height: 22px;
				color: rgba(65, 76, 99, 0.5);
			}
		}
		&__content {
			height: 100%;
			display: flex;
			flex-direction: column;
		}
		&__avatar {
			margin-right: 18px;
		}
		&__content-desk {
			margin-bottom: 18px;
		}

		&__btn {
			display: flex;
			justify-content: space-between;
			margin-top: auto;
			button {
				background-color: transparent;
			}
		}
	}
	.review-new {
		margin-bottom: 30px;
		&__box {
			padding-right: 20%;
		}
		&__inputs {
			display: flex;
			width: 100%;
			justify-content: space-between;
			margin-bottom: 30px;
			.input {
				width: calc((100% - 30px)/2);
			}
		} 
		&__pic {
			margin-right: 30px;
		}
		&__box {
			display: flex;
			flex-wrap: wrap;
		}
		&__data-box {
			flex: 1;
		}
		&__btns {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			margin-top: 30px;
		}
	}

</style>