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
  responsive: {
    breakpoints: {
      mobile: 0,
      tablet: 481,
      tabletFluid: 737,
      laptop: 977,
      desktop: 1441,
    },
    wrapSizes: {
      mobile: '100%',
      tablet: '100%',
      tabletFluid: 720,
      laptop: 960,
      desktop: 1240,
    },
  },
};
