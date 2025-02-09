import { withContentlayer } from 'next-contentlayer2';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    experimental: {
        turbo: {
            resolveAlias: {
                canvas: './empty-module.ts',
            },
        },
    },
};

export default withContentlayer(nextConfig)