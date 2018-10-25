const path = require('path');

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      craft {
        entries {
          uri
          slug
          __typename
        }
      }
    }
  `);

  if (result.errors) {
    // eslint-disable-next-line no-console
    result.errors.forEach(e => console.error(e.toString()));
    return Promise.reject(result.errors);
  }

  // grab the entries off the result
  const { entries } = result.data.craft;

  entries.forEach(entry => {
    const { uri, slug, __typename } = entry;

    // Craft CMS section with slug "pages" and URI-Format "{parent.uri}/{slug}"
    if (__typename == 'Craft_Pages') {
      createPage({
        context: { slug },
        path: uri,
        component: path.resolve('src/templates/page.js'),
      });
    }
  });
};
