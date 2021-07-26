module.exports = {
    mode: 'jit',
    purge: ['./components/**/*.js', './pages/**/*.js'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'accent-1': '#FAFAFA',
                'accent-2': '#EAEAEA',
                'accent-7': '#333',
                'modalborder':"#39384A",
                'inputbg':"#080A0F",
                'inputborder':"#21262D",
                'myred':"#DF025E",
            },
            spacing: {
                28: '7rem',
                100: '25rem',
                186: '47rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem',
            },
            fontFamily: {
                sans: 'Inter, -apple-system, BlinkMacSystemFont',
            },
        },
    },
}
