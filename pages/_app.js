import '@styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-roboto',
});

export default ({ Component, pageProps }) => (
    <>
        { /* eslint-disable react/no-unknown-property */}
        <style jsx global>
            {`
                    html {
                        font-family: ${roboto.style.fontFamily};
                    }
                `}
        </style>
        <DefaultSeo
            defaultTitle="Build Your Computer"
            titleTemplate="%s | Build Your Computer"
            description=""
            openGraph={{
                type: 'website',
                title: 'Build Your Computer',
                description: 'Learn how computers work by building a real one from scratch',
                locale: 'en_US',
                url: 'https://buildyourcomputer.github.io',
                site_name: 'Build Your Computer',
                images: [
                    {
                        url: 'https://buildyourcomputer.github.io/logo.png',
                    },
                ],
            }}
        />
        <Component {...pageProps} />
    </>
);
