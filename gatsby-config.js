const env = require('dotenv').config().parsed;
const siteConfig = require('./src/site.config');

module.exports = {
  siteMetadata: siteConfig.siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/Layout.js'),
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        autoLabel: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: siteConfig.webfontconfig,
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: 'craft',
        typeName: 'Craft',
        url: env.API_URL,
        headers: {
          Authorization: env.API_TOKEN,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: siteConfig.siteMetadata.manifest,
    },
    'gatsby-plugin-offline',
  ],
};
