const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "https": require.resolve("https-browserify"),
    "http": require.resolve("stream-http"),
    "os": require.resolve("os-browserify/browser"),
    "path": require.resolve("path-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "fs": false,
    "url": require.resolve("url"),
    "buffer": require.resolve("buffer"),
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};