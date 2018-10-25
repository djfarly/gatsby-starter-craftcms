const manifest = {
  name: 'Gatsby Starter Craftcms',
  short_name: 'hello!',
  start_url: '/',
  background_color: '#181818',
  theme_color: '#E9E9E9',
  display: 'minimal-ui',
  icon: 'static/img/favicon.png', // This path is relative to the root of the site.
};

module.exports = {
  siteMetadata: {
    siteTitle: 'Gatsby Starter Craftcms',
    title: 'Gatsby Starter Craftcms',
    hostname: 'https://www.yourdomain.com', // no trailing slash (used to create xml sitemap)
    manifest,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/wrapper/layout.js'),
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
      resolve: 'gatsby-source-graphql',
      options: {
        fieldName: 'craft',
        typeName: 'Craft',
        url: 'http://XXX/api/',
        headers: {
          Authorization: 'bearer XXXX',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifest,
    },
    'gatsby-plugin-offline',
  ],
};
