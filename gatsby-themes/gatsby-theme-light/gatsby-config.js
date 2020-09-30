const { meta } = require("global/index").siteData;
const themeColor = "#663399";

console.log("THIS IS BEING CALLED");
module.exports = {
	plugins: [
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: meta.title,
				start_url: "/",
				background_color: themeColor,
				theme_color: themeColor,
				display: "minimal-ui"
			}
		}
	]
};
