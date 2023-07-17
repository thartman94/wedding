/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Alyssa & Ryan 2024`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Allura`,
            file: `https://fonts.googleapis.com/css2?family=Allura:wght@300;400&display=swap`,
          },
          {
            name: `Lora`,
            file: `https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap`,
          },
        ],
      },
    },
  ],
};
