import Document, { Html, Head, Main, NextScript } from 'next/document'

// REMOVE [JSS] Rule is not linked WARNING FROM CONSOLE
if (typeof window === 'undefined') {
    const originalWarn = console.warn;
    console.warn = (...args) => {
        if (args[0] !== 'Warning: [JSS] Rule is not linked. Missing sheet option "link: true".') {
            originalWarn(...args);
        }
    };
}

export default class MyDocument extends Document {
    render() {
        return (
        <Html lang="en">
            <Head />
            <body className="transition-colors duration-300">
                <Main />
                <NextScript />
            </body>
        </Html>
        )
    }
}
