/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
        },
      ],
        domains: ['res.cloudinary.com', 'cms.cloudinary.vpsvc.com'],
        
      },
};

export default nextConfig;
