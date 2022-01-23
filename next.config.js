const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
    reactRemoveProperties: true,
    removeConsole: true
  },
  images: {
    formats: ['image/webp']
  },
  i18n: {
    locales: ["ru"],
    defaultLocale: "ru",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.optimization.minimizer.push(
      new CssMinimizerPlugin()
    );
    config.plugins.push(new MiniCssExtractPlugin());
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
});
