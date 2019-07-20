const webpack = require('webpack');

module.exports = {
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }, // resolves `import '../Foo'` to `../Foo/index.jsx`
  module: {
    rules: [
      // tell Webpack to use the .babelrc to know how to transform JS/JSX to ES2015 JS
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              cacheDirectory: true,
              presets: [],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /*
     * This replaces calls to logger.node.js with logger.web.js, a client
     * side replacement. This mimics the behaviour of the client side
     * bundle generation in webpack.config.client.js
     */
    new webpack.NormalModuleReplacementPlugin(
      /(.*)logger.node(\.*)/,
      resource => {
        // eslint-disable-next-line no-param-reassign
        resource.request = resource.request.replace(
          /logger.node/,
          `logger.web`,
        );
      },
    ),
  ],
};
