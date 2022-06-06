const nextBuildId = require('next-build-id');

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config, { buildId, webpack }) {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_ID: JSON.stringify(buildId),
        },
      }),
    );

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/exercises',
        permanent: true,
      },
    ];
  },
};
