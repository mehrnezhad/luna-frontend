/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3001',
            pathname: '/uploads/images/**',
          },
          // Add more patterns as needed
        ],
      },
    
};

export default nextConfig;
