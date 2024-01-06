import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Tiago Farias — Website</title>
                <meta name="title" content="Tiago Farias — Website" />
                <meta name="description" content="Apenas um desenvolvedor JavaScript brasileiro, que gosta de fotografia, gatos, jogos e programar tentando ser cada dia melhor." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://devtiago.xyz/" />
                <meta property="og:title" content="Tiago Farias — Website" />
                <meta property="og:description" content="Apenas um desenvolvedor JavaScript brasileiro, que gosta de fotografia, gatos, jogos e programar tentando ser cada dia melhor." />
                <meta property="og:image" content="undefined" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://devtiago.xyz/" />
                <meta property="twitter:title" content="Tiago Farias — Website" />
                <meta property="twitter:description" content="Apenas um desenvolvedor JavaScript brasileiro, que gosta de fotografia, gatos, jogos e programar tentando ser cada dia melhor." />
                <meta property="twitter:image" content="undefined" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}