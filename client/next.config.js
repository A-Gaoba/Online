/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
 ...withPWA({
    pluginOptions: {
      dest: "public",
      register: true,
      skipWaiting: true,
    },
 }),
};

module.exports = nextConfig;