import styles from '@/styles/404.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Error() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarContent}>
                    <Link href="/" className={styles.navbarOption}>Início</Link>
                    <Link href="/projetos" className={styles.navbarOption}>Projetos</Link>
                    {/* <Link href="/misc" className={styles.navbarOption}>Miscelânea</Link> */}
                    <Link href="/contato" className={styles.navbarOption}>Contato</Link>
                </div>
            </nav>

            <div className={`${styles.container} ${styles.main}`}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Ops...</h1>
                    <p className={styles.headerDescription}>Sentimos muito, essa página não existe ou está fora do ar.</p>
                </header>
            </div>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2023 - Tiago Farias</p>
                </div>
            </footer>
        </>
    )
}
