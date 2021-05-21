import Vue from 'vue';

const skillsItem = {
	props: ['skill'],
	template: "#skills-item",
	methods: {
		drawPercentedCircle() {
			const circle = this.$refs["colored_circle"];
			const dashArray = parseInt(
				getComputedStyle(circle).getPropertyValue("stroke-dasharray")
			);
			const percent = dashArray / 100 * (100 - this.skill.percent)
			circle.style.strokeDashoffset = percent;
		}
	},
	mounted() {
		this.drawPercentedCircle();
	}
}

const skillsRow = {
	props: ['category'],
	template: "#skills-row",
	components: {
		skillsItem: skillsItem
	}
}

new Vue ({
	el: "#skills-component",
	template: "#skills-list ",
	components: {
		skillsRow: skillsRow
	},
	data() {
		return {
			skills: []
		}
	},
	created() {
		this.skills = require("../data/skills.json");
	},
})