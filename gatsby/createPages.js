const path = require('path');

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      craft {
        entries(orderBy: "postDate desc") {
          __typename
          title
          uri
          postDate
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
    const { uri } = entry;

    createPage({
      context: { uri },
      path: uri,
      component: path.resolve('src/templates/blog-post.js'),
    });
  });
};
