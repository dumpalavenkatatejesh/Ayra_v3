/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            perspective: {
                '1000': '1000px',
            },
            transformStyle: {
                '3d': 'preserve-3d',
            },
            rotate: {
                'y-12': 'rotateY(12deg)',
            },
            translate: {
                'x-4': '1rem',
                'x-8': '2rem',
                'x-12': '3rem',
            },
            keyframes: {
                slideLeft: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                slideRight: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                }
            },
            animation: {
                slideLeft: 'slideLeft 0.5s ease-in-out',
                slideRight: 'slideRight 0.5s ease-in-out'
            }
        },
    },
    plugins: [
        require('tailwind-clip-path')
    ],
} 