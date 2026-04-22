import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Allow next/image to serve local images from /public without additional config
    images: {
        // All images are served from /public, so no remote domains needed
        // unoptimized: false — leave optimisation ON for best performance
        localPatterns: [
            {
                pathname: '/assets/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
