import Head from 'next/head'
import Link from "next/link";
import styles from '@/components/Default.module.css'
import { useEffect, useState } from 'react';

export default function Default({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");

    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <>
            <Head>
                <title>Tiago Farias</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <Link href="/" className={styles.navbarOption}>Início</Link>
                    {/* <Link href="/projetos" className={styles.navbarOption}>Projetos</Link>
                    <Link href="/misc" className={styles.navbarOption}>Miscelânea</Link> */}
                    <Link href="/contato" className={styles.navbarOption}>Contato</Link>
                </div>
            </nav>
            <main
                className={`${styles.content} ${styles[transitionStage]}`}
                onTransitionEnd={() => {
                    if (transitionStage === "fadeOut") {
                        setDisplayChildren(children);
                        setTransitionStage("fadeIn");
                    }
                }}
            >
                {displayChildren}
            </main>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2023 - Tiago Farias</p>
                </div>
            </footer>
        </>
    );
}