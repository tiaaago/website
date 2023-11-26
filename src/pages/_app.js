import Default from '@/components/Default'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tiago Farias</title>
            </Head>
            <Default>
                <Component {...pageProps} />
            </Default>
        </>
    )
}
