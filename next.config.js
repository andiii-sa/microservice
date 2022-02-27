/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");
const withImages = require("next-images");

const path = require("path");

// module.exports = nextConfig

module.exports = withPlugins([
  withImages({}),
  withReactSvg({
    include: path.resolve(__dirname, "./public/images"),
    webpack(config, options) {
      return config;
    },
  }),
]);
