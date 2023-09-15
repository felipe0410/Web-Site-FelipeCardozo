/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    webpack: (config) => {
        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        });

        return config;
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/', // Redirige la ruta raíz "/" a "/home"
                permanent: true,
            },
            {
                source: '/propuestas',
                destination: '/propuestas', // Redirige "/propuestas" a "/proposals"
                permanent: true,
            },
            {
                source: '/trayectoria',
                destination: '/trayectoria', // Redirige "/trayectoria" a "/history"
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
