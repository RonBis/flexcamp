/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  pwa: {
    dest: 'public',
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
})
