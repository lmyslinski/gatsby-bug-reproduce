module.exports = {
  siteMetadata: {
    title: "Sentiwatch",
    description: "Instagram Influencer Search Engine",
    siteUrl: "https://sentiwatch.net"
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }
  ]
};
