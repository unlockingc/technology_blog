const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Recreation Blog",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: "/technology_blog/",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 10,
    logo: "/logo.png",
    repo: "https://github.com/unlockingc/technology_blog",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    nav: [
      {
        text: "WEB",
        link: "/web/",
        items: [
          { text: "Introduction", link: "/web/index"},
          { text: "CSS", link: "/web/css" }],
      },
      {
        text: "Deep Learning",
        link: "/deep_learning/",
      },
    ],
    sidebar: {
      "/web/": ["", "css", "javascript", "vue"],
    },
  },

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"],
    plugins: {
      "markdown-it-footnote": {},
      "markdown-it-checkbox": {
        divWrap: true,
        divClass: "checkbox",
        idPrefix: "cbx_",
        ulClass: "task-list",
        liClass: "task-list-item",
      },
    },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-include"))
        // .use(require("markdown-it-multicolumn"))
        .use(require("markdown-it-emoji"))
        .use(require("markdown-it-sup"))
        .use(require("markdown-it-video"));
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
