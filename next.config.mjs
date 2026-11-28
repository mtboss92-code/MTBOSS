import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

// Load env before Next inlines NEXT_PUBLIC_* values.
// Prefer `.env.local` (does not override vars already set by the shell), then `.env`, then `src/.env`.
dotenv.config({ path: path.join(projectRoot, ".env.local"), override: false });
dotenv.config({ path: path.join(projectRoot, ".env"), override: false });
dotenv.config({ path: path.join(projectRoot, "src", ".env"), override: false });

const isVercel = process.env.VERCEL === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  // This repository has its own lockfile inside a parent workspace. Explicitly
  // setting the tracing root prevents Next from selecting the parent project.
  outputFileTracingRoot: projectRoot,
  outputFileTracingIncludes: {
    '/api/admin/project-management/payments/route': ['./src/assets/invoice/**/*'],
    '/api/admin/project-management/payments/[id]/receipt/route': ['./src/assets/invoice/**/*'],
  },
  /* config options here */
  allowedDevOrigins: ["10.221.79.102"],

  // Skip typecheck during `next build` to avoid Vercel OOM at "Running TypeScript".
  // Re-enable after PartyProjectManagement.jsx is split into smaller modules.
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: false,

  experimental: {
    // On Windows local builds, keep Webpack in-process to avoid spawn failures.
    // On Vercel, run Webpack in a worker so peak RSS stays under the 8GB container limit.
    // webpackBuildWorker: isVercel,
    webpackBuildWorker: false,
    workerThreads: false,
    // Cap parallelism so compile + typecheck workers do not exhaust RAM.
    cpus: 1,
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
  },
  serverExternalPackages: ['pdfkit', 'pg', 'twilio', 'nodemailer', 'bcryptjs', 'jsonwebtoken'],
  // Keep development/HMR artifacts separate from production builds. Running
  // `next build` while `next dev` is open must not replace the live router
  // runtime, otherwise Next can dispatch Link prefetches against an old queue.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  // React Compiler + the 14k-line PartyProjectManagement.jsx spikes Babel memory
  // past Vercel's build container. Re-enable after that file is split.
  reactCompiler: false,
  images: {
    // Cloudinary images occasionally time out when fetched through Next's
    // development image-optimization proxy on Windows. Let the browser load
    // the already CDN-hosted images directly, which prevents /_next/image 500s
    // without changing any Image component or its URL.
    unoptimized: true,
    qualities: [70, 75, 80],
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: '**.pinimg.com' },
    ],
  },

  async redirects() {
    return [
      {
        source: '/construction',
        destination: '/Services/all',
        permanent: true,
      },
      {
        source: '/legal/mtboss-privacy-policy.pdf',
        destination: '/documents/mtboss-privacy-policy.pdf',
        permanent: true,
      },
      {
        source: '/legal/mtboss-return-refund-cancellation-policy.pdf',
        destination: '/documents/mtboss-return-refund-cancellation-policy.pdf',
        permanent: true,
      },
      {
        source: '/legal/mtboss-terms-and-conditions.pdf',
        destination: '/documents/mtboss-terms-and-conditions.pdf',
        permanent: true,
      },
      {
        source: '/legal/mtboss-trademark-certificate.pdf',
        destination: '/documents/mtboss-trademark-registration-certificate.pdf',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    if (!process.env.API_PROXY_URL) {
      return [];
    }

    return {
      beforeFiles: [
        {
          source: '/api/:path*',
          destination: `${process.env.API_PROXY_URL}/api/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
