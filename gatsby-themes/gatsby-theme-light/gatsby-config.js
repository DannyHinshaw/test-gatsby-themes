const { gatsby, meta } = require("global/index").siteData;
const themeColor = "#663399";

console.log("CONFIG LIGHT THEME");
module.exports = {
	plugins: [
		gatsby.layout,
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
