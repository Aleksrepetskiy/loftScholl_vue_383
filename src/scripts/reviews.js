import Vue from 'vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

new Vue({
	el: "#slider-component",
	template: "#slider-container",
	data() {
		return {
			reviews: [],
			disablePrev: true,
			disableNext: false,
			sliderOptions: {
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					480: {
						slidesPerView: 2,
					},
				}
			},
		}
	},
	components: {
		Swiper,
		SwiperSlide
	},
	directives: {
		swiper: directive
	},
	methods: {
		checkArrow(e){
			this.disablePrev = this.$refs.slider.$swiper.activeIndex === 0 ? true : false ;
			this.disableNext = this.$refs.slider.$swiper.activeIndex === this.$refs.slider.$swiper.snapGrid.length - 1 ? true : false;
			console.log(this.$refs.slider.$swiper.activeIndex)
			console.log(this.$refs.slider.$swiper.snapGrid)
		},
		requireImagesToArray(data) {
			return data.map((item) => {
				const requiredImages = require(`../images/content/${item.pic}`).default;
				item.pic = requiredImages;
				return item;
			})
		},
		slide(direction) {
			const slider = this.$refs["slider"].$swiper;
			switch (direction) {
				case "next":
					slider.slideNext();
					break;
				case "prev":
					slider.slidePrev();
					break;
			}
		}

	},
	created() {
		const data = require("../data/reviews.json");
		this.reviews = this.requireImagesToArray(data);
	},
})