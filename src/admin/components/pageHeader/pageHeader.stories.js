import pageHeader from "./pageHeader.vue";

export default {
	title: "pageHeader",
	components: { pageHeader }
}

export const defaultView = () => ({
	components: { pageHeader },
	template: `
		<pageHeader>
		</pageHeader>

	`

});

defaultView.story = {
  name: "Стандартный вид"
}