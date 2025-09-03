import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    env: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
        EMAIL_RECIPIENT: process.env.EMAIL_RECIPIENT,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
