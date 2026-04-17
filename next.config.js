/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_BUILD_TOKEN: process.env.NEXT_PUBLIC_SANITY_BUILD_TOKEN,
    NEXT_PUBLIC_FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
