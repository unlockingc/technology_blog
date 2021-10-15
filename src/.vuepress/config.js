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
    /*favicon stuff start*/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/favicon/manifest.json" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],

    /*favicon stuff end*/
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
          { text: "Introduction", link: "/web/index" },
          { text: "CSS", link: "/web/css" },
          { text: "Javascript", link: "/web/javascript" },
          { text: "Vue3", link: "/web/vue/index" },
          { text: "Grocery", link: "/web/grocery" },
        ],
      },
      {
        text: "Deep Learning",
        link: "/deep_learning/",
      },
      {
        text: "Global Grocery",
        link: "/grocery",
      },
    ],
    sidebar: {
      "/web/": ["", "css", "javascript", "vue/", "grocery"],
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
      md.use(require("markdown-it-include"));
      md.use(require("markdown-it-markmap"))
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
