import styles from '@/styles/Contact.module.css'
import 'balloon-css';
import Link from 'next/link';

export default function Home() {
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
            <main className={`${styles.container} ${styles.main}`}>
                <header className={styles.header}>
                    <h1 className={styles.headerTitle}>Contato</h1>
                    <p className={styles.headerDescription}>Esses são os melhores meios de entrar em contato comigo, não hesite em me chamar caso precise de algo.</p>
                </header>
                <div className={styles.contactBoxes}>
                    <a href="https://discord.com/users/852610866683445328" className={styles.contactBox}>
                        <div className={styles.boxLeft}>
                            <h4 className={styles.boxTitle}>Discord</h4>
                            <p className={styles.boxDescription}>Fale comigo via Mensagem Direta!</p>
                        </div>
                        <div className={styles.boxRight}>
                            <i className={`fa-brands fa-discord ${styles.boxIcon}`}></i>
                        </div>
                    </a>
                    <a href="https://instagram.com/tiagopictures" className={styles.contactBox}>
                        <div className={styles.boxLeft}>
                            <h4 className={styles.boxTitle}>Instagram</h4>
                            <p className={styles.boxDescription}>Me siga no Instagram!</p>
                        </div>
                        <div className={styles.boxRight}>
                            <i className={`fa-brands fa-instagram ${styles.boxIcon}`}></i>
                        </div>
                    </a>
                    <a href="https://github.com/tiaaago" className={styles.contactBox}>
                        <div className={styles.boxLeft}>
                            <h4 className={styles.boxTitle}>GitHub</h4>
                            <p className={styles.boxDescription}>Me siga no GitHub!</p>
                        </div>
                        <div className={styles.boxRight}>
                            <i className={`fa-brands fa-github ${styles.boxIcon}`}></i>
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/tiagoenzomarqs" className={styles.contactBox}>
                        <div className={styles.boxLeft}>
                            <h4 className={styles.boxTitle}>Linkedin</h4>
                            <p className={styles.boxDescription}>Se conecte comigo no Linkedin!</p>
                        </div>
                        <div className={styles.boxRight}>
                            <i className={`fa-brands fa-linkedin ${styles.boxIcon}`}></i>
                        </div>
                    </a>
                    <a href="mailto:contato@devtiago.xyz" className={styles.contactBox}>
                        <div className={styles.boxLeft}>
                            <h4 className={styles.boxTitle}>E-mail</h4>
                            <p className={styles.boxDescription}>Envie um e-mail para mim!</p>
                        </div>
                        <div className={styles.boxRight}>
                            <i className={`fa-regular fa-at ${styles.boxIcon}`}></i>
                        </div>
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p>&copy; 2023 - Tiago Farias</p>
                </div>
            </footer>
        </>
    )
}
