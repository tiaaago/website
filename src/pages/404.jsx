import styles from '@/styles/404.module.css'

export default function Error() {
    return (
        <div className={`${styles.container} ${styles.main}`}>
            <header className={styles.header}>
                <h1 className={styles.headerTitle}>Ops...</h1>
                <p className={styles.headerDescription}>Sentimos muito, essa página não existe ou está fora do ar.</p>
            </header>
        </div>
    )
}
