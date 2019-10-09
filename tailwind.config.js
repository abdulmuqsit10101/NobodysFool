module.exports = {
    theme: {
        container: {
            center: true,
            maxWidth: '1000px'
        },
        fontFamily: {
            'georgia': ['light-georgia', 'sans-serif'],
        },

        screens: {
            sm: '675px',
            md: '768px',
            xmd: '900px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            spacing: {
                sml: '1px',
                '30': '30px',
                '440': '440px',
                '80': '80px',
                '85': '85px',
                '50': '50%',
            },
            colors: {
                dark: {
                    '100': 'rgba(255,255,255,0.95)',
                    '200': '#f1f1f1',
                    '400': '#999999',
                    '500': '#787878',
                    '800': '#333333',
                    '900': '#2e2e2e'
                },
                orange: {
                    dark: '#db4a39'
                }
            }
        }
    },
    variants: {},
    plugins: []
};
