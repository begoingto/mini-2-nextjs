/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // This is the property you need to add
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    images: {
        domains: [
            'picsum.photos',
            'i.redd.it',
            'cdn-icons-png.flaticon.com',
            'api.escuelajs.co',
            'img1.ak.crunchyroll.com',
            'bit.ly',
            'api.lorem.space',
            'i.pravatar.cc'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
        ]
    }
}

module.exports = nextConfig
