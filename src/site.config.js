module.exports = {
  siteMetadata: {
    siteTitle: 'Evo Fitness',
    title: 'Evo Fitness',
    hostname: 'https://www.yourdomain.com', // no trailing slash (used to create xml sitemap)
    manifest: {
      name: 'Evo Fitness',
      short_name: 'hello!',
      start_url: '/',
      background_color: '#181818',
      theme_color: '#E9E9E9',
      display: 'minimal-ui',
      icon: 'static/img/favicon.png', // This path is relative to the root of the site.
    },
  },
  webfontconfig: {
    google: {
      families: ['Open Sans:400,700'],
    },
  },
};
