/** @type {import('next').NextConfig} */
//require('dotenv').config();

const nextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL: process.env.EMAIL,
    VERIFIED_EMAIL: process.env.VERIFIED_EMAIL,
    NEXT_PUBLIC_SANITY_PROJECT_ID: 'bcjr23an',
    NEXT_PUBLIC_SANITY_BUILD_TOKEN: process.env.NEXT_PUBLIC_SANITY_BUILD_TOKEN,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_SANITY_DATASET: 'production',
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
