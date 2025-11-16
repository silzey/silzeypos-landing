

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  distDir: 'hosting',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  devIndicators: {
    // This allows for cross-origin requests in the development environment,
    // which is necessary for the cloud-based IDE.
    allowedDevOrigins: [
      '*.cloudworkstations.dev',
    ],
  },
  webpack: (config, { isServer }) => {
    // This resolves a module not found error in `@opentelemetry/sdk-node`.
    config.resolve.alias['@opentelemetry/exporter-jaeger'] = false;
    return config;
  },
};

/**
 * @returns {Promise<import('next/dist/server/config-shared').Header[]>}
 */
async function headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cross-Origin-Opener-Policy',
          value: 'same-origin-allow-popups',
        },
      ],
    },
  ];
}

module.exports = {
  ...nextConfig,
  headers,
};
