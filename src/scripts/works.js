import Vue from 'vue';

const thumbs = {
	props: ["currentWork", "works"],
	template: "#preview-thumbs",
	
}
const btns = {
	template: "#preview-btns",
	methods: {
		slide(direction) {
			this.$emit("slide", direction)
		}
	}
	
}
const display = {
	props: ["currentWork", "works", "currentIndex"],
	template: "#preview-display",
	components: {
		thumbs, btns
	},
	methods: {
		slide(direction) {
			this.$emit("slide", direction)
		}
	},
	computed: {
		reversedWorks() {
			const works = [...this.works]
			return works.slice(0, 4).reverse();

		}
	}
}
const tags = {
	props: ["tags"],
	template: "#preview-tags",
	
}
const info = {
	props: ["currentWork"],
	template: "#preview-info",
	components: {
		tags
	},
	computed: {
		taxtArray() {
			return this.currentWork.skills.split(",");
		}
	}
	
}
new Vue({
	el: "#works-component",
	template: "#preview-container",
	components: {
		display, info
	},
	data() {
		return {
			works: [],
			currentIndex: 0
		}
	},
	computed: {
		currentWork() {
			return this.works[0]
		}

	},
	watch: {
		currentIndex(value) {
			this.makeInfinityLoop(value)
		}

	},
	methods: {
		makeInfinityLoop(index){
			const worksNumber = this.works.length - 1;
			if (index < 0) this.currentIndex = worksNumber
			if (index > worksNumber) this.currentIndex = 0
		},
		requireImagesToArray(data) {
			return data.map( item=> {
				const requireImages = require(`../images/content/${item.photo}`).default;
				item.photo = requireImages;
				return item;
			})
		},
		slide(direction) {
			const lastItem = this.works[this.works.length - 1]
			switch (direction) {
				case "next":
					this.works.push(this.works[0]);
					this.works.shift();
					this.currentIndex++
					break;
				case "prev":
					this.works.unshift(lastItem);
					this.works.pop();
					this.currentIndex--
					break;
			}
		}
	},
	created() {
		const data = require("../data/works.json");
		this.works = this.requireImagesToArray(data);
		// this.currentWork = this.works[this.currentIndex];
	},
})