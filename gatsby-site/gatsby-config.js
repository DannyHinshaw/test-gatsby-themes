const { gatsby, meta } = require("global/index").siteData;

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author
  },
  plugins: [
    gatsby.theme,
	  gatsby.layout,
    "gatsby-plugin-sass",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline"
  ]
};
