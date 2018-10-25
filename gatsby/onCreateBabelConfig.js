module.exports = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-ramda',
  });

  actions.setBabelPlugin({
    name: 'babel-plugin-emotion',
    options: {
      extract: true,
    },
  });
};
