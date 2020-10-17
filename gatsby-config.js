module.exports = {
  siteMetadata: {
    title: `Code With Luv`,
    name: `Codw With Luv`,
    siteUrl: `https://novela.narative.co`,
    description: `Learn Competiv`,
    hero: {
      heading: `Welcome to my blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `youtube`,
        url: `https://www.youtube.com/luvisme/`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/i._m_.luv/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/luvk1412/`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/luvk1412`,
      },
      {
        name: `github`,
        url: `https://github.com/luvk1412`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
