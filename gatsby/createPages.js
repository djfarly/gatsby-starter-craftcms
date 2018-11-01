const path = require('path');
const fs = require('fs');
const templateDefault = path.resolve('src/templates/default.js');

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      craft {
        entries {
          id
          fullUri
          __typename
          section {
            handle
          }
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
    const { id, fullUri, section } = entry;
    const template = path.resolve(`src/templates/${section.handle}.js`);

    // Craft CMS section with slug "pages" and URI-Format "{parent.uri}/{slug}"
    if (fullUri) {
      createPage({
        context: { id },
        path: fullUri,
        component: fs.existsSync(template) ? template : templateDefault,
      });
    }
  });
};
