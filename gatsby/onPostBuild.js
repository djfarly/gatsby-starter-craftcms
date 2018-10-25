const R = require('ramda');
const path = require('path');
const fs = require('fs');
const sitemap = require('sitemap');
const pify = require('pify');

module.exports = async ({ graphql }) => {
  const resp = await graphql(`
    {
      site {
        siteMetadata {
          hostname
        }
      }
      craft {
        entries {
          uri
        }
      }
    }
  `);

  const { entries } = resp.data.craft;
  const { hostname } = resp.data.site.siteMetadata;

  const saved = path.join('./public', '/sitemap.xml');

  const map = sitemap.createSitemap({
    hostname,
    urls: R.compose(
      R.map(uri => ({
        url: `${hostname}/${uri}/`,
        changefreq: 'daily',
        priority: 0.7,
      })),
      R.pluck('uri'),
    )(entries),
  });
  const writeFile = pify(fs.writeFile);

  return writeFile(saved, map.toString());
};
