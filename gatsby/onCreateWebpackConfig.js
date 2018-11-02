const glob = require('glob');
const path = require('path');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const purgeCssConfig = {
  paths: glob.sync(`${path.join(__dirname, 'src')}/**/*.js`, { nodir: true }),
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },
      extensions: ['js'],
    },
  ],
  whitelist: [''],
  whitelistPatterns: [/body/, /headroom/, /ReactModal/, /ril/],
};
console.log(__dirname);
module.exports = ({ actions, stage, getConfig }) => {
  const prevConfig = getConfig();

  actions.replaceWebpackConfig({
    ...prevConfig,

    module: {
      ...prevConfig.module,
      // add rules for the svg sprite loader
      rules: [
        ...prevConfig.module.rules.map(item => {
          const { test } = item;

          if (
            test &&
            test.toString() === '/\\.(ico|svg|jpg|jpeg|png|gif|webp)(\\?.*)?$/'
          ) {
            return {
              ...item,
              test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
            };
          }

          return { ...item };
        }),
        {
          test: /\.svg$/,
          use: [
            {
              loader: require.resolve('svg-sprite-loader'),
            },
          ],
        },
      ],
    },
  });

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, '../src/'),
        components: path.resolve(__dirname, '../src/components/'),
        utils: path.resolve(__dirname, '../src/utils/'),
        'node-fetch$': 'node-fetch/lib/index.js', // https://github.com/bitinn/node-fetch/issues/493
      },
    },
  });

  if (stage.includes('develop')) return;

  // Add PurgeCSS in production
  // See: https://github.com/gatsbyjs/gatsby/issues/5778#issuecomment-402481270
  if (stage.includes('build')) {
    actions.setWebpackConfig({
      plugins: [
        new PurgeCssPlugin(purgeCssConfig),
        new OptimizeCSSAssetsPlugin({}),
      ],
    });
  }
};
