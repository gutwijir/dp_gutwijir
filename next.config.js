// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-assignment, import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const withRoutes = require('nextjs-routes/config')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['ulab.kuubstudios.com'],
  },
}

module.exports = withRoutes(nextConfig)
