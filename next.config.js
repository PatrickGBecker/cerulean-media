/** @type {import('next').NextConfig} */
//require('dotenv').config();

const nextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL: process.env.EMAIL,
    VERIFIED_EMAIL: process.env.VERIFIED_EMAIL,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },


    // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.

  
  webpack: (config) => {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,

      fs: false, // the solution
    };
    return config;
},
}

module.exports = nextConfig
