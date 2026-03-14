/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/dcudnuu04/image/upload',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
          },
        },
      ],
    });

    return config;
  },
  turbopack: {},
};
export default nextConfig;
