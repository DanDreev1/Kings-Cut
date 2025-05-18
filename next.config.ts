/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Отключает ESLint во время сборки
  },
}

module.exports = nextConfig