// Default site meta data for testing locally.
//  Actual production system will provide this
//  data via environment variable SITE_DATA
const defaultSiteData = {
  meta: {
    title: "ThemeExample",
    description: "Why won't SCSS shadowing work?!",
    author: "DannyHinshaw",
    url: "https://nulleffort.com"
  },
  gatsby: {
    layout: "gatsby-layout-default",
    theme: "gatsby-theme-light"
  }
};

const envMeta = process.env.SITE_DATA;
const siteData = envMeta
  ? JSON.parse(envMeta)
  : defaultSiteData;

module.exports = {
  siteData
};
