import styles from '@/styles/Project.module.css'
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
                    <h1 className={styles.headerTitle}>Projetos</h1>
                    <p className={styles.headerDescription}>Aqui se concentra a maior parte dos projetos que eu já gerenciei/participei.</p>
                </header>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <img className={styles.projectBanner} src="https://cdn.discordapp.com/attachments/824699568297345065/1192547490541604964/opera_qJaBzVTAwN.png" alt="" />
                        <div className={styles.projectBody}>
                            <div className={styles.tag}>Esse site!</div>
                            <h3 className={styles.projectTitle}>devtiago.xyz</h3>
                            <p className={styles.projectDescription}>Meu site pessoal contendo projetos e informações.</p>
                            <div className={styles.buttons}>
                                <Link href="/" className={styles.projectLink}><i className="fa-solid fa-link"></i>Website</Link>
                                <Link href="https://github.com/tiaaago/website" target='_blank' className={styles.projectLink}><i className="fa-brands fa-github"></i>GitHub</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.project}>
                        <img className={styles.projectBanner} src="https://cdn.discordapp.com/attachments/824699568297345065/1193016365825658931/opera_gODVfrqnIn.png" alt="" />
                        <div className={styles.projectBody}>
                            {/* <div className={styles.tag}>Esse site!</div> */}
                            <h3 className={styles.projectTitle}>EduCEL</h3>
                            <p className={styles.projectDescription}>Um portal do estudante para os alunos do Centro Educacional do Lago.</p>
                            <div className={styles.buttons}>
                                <Link href="/" className={styles.projectLink}><i className="fa-solid fa-link"></i>Website</Link>
                                <Link href="https://github.com/tiaaago/website" target='_blank' className={styles.projectLink}><i className="fa-brands fa-github"></i>GitHub</Link>
                            </div>
                        </div>
                    </div>
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
