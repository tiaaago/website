import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import 'balloon-css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
    const [status, setStatus] = useState(null)

    useEffect(() => {
        const socket = new WebSocket("wss://api.lanyard.rest/socket");

        socket.addEventListener("open", () => console.log("opened socket connection"));

        function subscribeToUsers(ids) {
            let data = { subscribe_to_all: true };

            data = { subscribe_to_id: ids };

            if (socket.readyState == socket.OPEN) socket.send(JSON.stringify({ op: 2, d: data }));
        }

        socket.addEventListener("message", data => {
            const json = JSON.parse(data.data);

            switch (json.op) {
                case 1: {
                    subscribeToUsers("852610866683445328"); // One user

                    setInterval(() => {
                        if (socket.readyState == socket.OPEN)
                            socket.send(JSON.stringify({ op: 3 }));
                    }, json.d.heartbeat_interval);

                    break;
                }

                case 0: {
                    switch (json.t) {
                        case "INIT_STATE": {
                            setStatus(json.d);
                            console.log(json.d);
                            break;
                        }
                        case "PRESENCE_UPDATE": {
                            setStatus(json.d);
                            break;
                        }
                    }

                    break;
                }
            }
        });
    }, [])

    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };


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
                    <div className={styles.headerLeft}>
                        {
                            status && (
                                <>
                                    <div className={`${status ? styles.discordStatus : ''}`}>
                                        {
                                            status?.listening_to_spotify ? (
                                                <>
                                                    <i className={`fa-brands fa-spotify ${styles.spotifyIcon}`}></i>
                                                    <p className={styles.discordStatusText}>Ouvindo: <b>{status?.spotify.song}</b> — <b>{status?.spotify.artist.replaceAll(';', ',')}</b> {status?.activities.length - 1 > 0 ? `(+${status?.activities.length - 1} atividade${status?.activities.length - 1 > 1 ? 's' : ''})` : ''}</p>
                                                </>
                                            ) : (
                                                <>
                                                    {
                                                        isNaN(status?.activities.filter(activity => activity.name != "Custom Status")[0].large_image) && status?.activities.filter(activity => activity.name != "Custom Status")[0].large_image ? <img className={styles.activityImage} src={`https://cdn.discordapp.com/app-assets/${status?.activities[0].application_id}/${status?.activities[0].assets.large_image}.png`}></img> : <div className={`${styles[status.discord_status]}`}></div>
                                                    }
                                                    <p className={styles.discordStatusText}>{status?.activities.filter(activity => activity.name != "Custom Status").length > 0 ? (<>Jogando <b>{status?.activities[0].name}</b></>) : `${status.discord_status != "offline" ? "Online" : "Offline"}`}</p>
                                                </>
                                            )
                                        }
                                    </div>
                                </>
                            )
                        }
                        <h1 className={styles.headerTitle}>Olá, eu sou o Tiago!</h1>
                        <p className={styles.headerDescription}>Seja bem vindo ao meu cantinho pessoal na web! Entre, não precisa tirar os sapatos...</p>
                    </div>
                    <div className={styles.headerRight}>
                        <img src="/foto.jpg" alt="" className={styles.headerPfp} />
                    </div>
                </header>
                <div className={styles.aboutMe} id="sobre">
                    <h2 className={styles.aboutMeTitle}>Sobre Mim</h2>
                    <p className={styles.aboutMeDescription}>Um menino curioso, um sonho e um notebook, gosto de resumir minha história com a programação dessa forma. Sempre fui muito curioso quando o assunto era qualquer coisa voltada para a área das tecnologias, tanto hardware, quanto software. Me encontrei de verdade nesse sonho no meu primeiro contato com a programação de fato, quando fiz um bot para um servidor de amigos no Discord, desde então, nunca mais parei de aprimorar meus conhecimentos sobre essa área.<br /><br />Atualmente, com dezoito anos, pretendo me formar na área e continuar expandindo cada vez mais meu conhecimento, e ajudando pessoas, seja fazendo boas soluções para a web, ou até mesmo ajudar amigos e colegas com dicas e problemas, seguindo assim meu lema principal (desde 2019): faça coisas que façam do mundo um lugar melhor!</p>
                </div>
                <div className={styles.columnes}>
                    <div className={styles.experiences} id="experiencias">
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Experiências</h2>
                            <div className={styles.experiencesBox}>
                                <div className={styles.boxTop}>
                                    <h4 className={styles.boxTitle}>Fir3</h4>
                                    <p className={styles.boxDate}>12/2022 ~ 08/2023</p>
                                </div>
                                <div className={styles.boxBotton}>
                                    <p className={styles.boxDescription}>Criador e Desenvolvedor</p>
                                </div>
                            </div>
                            <div className={styles.experiencesBox}>
                                <div className={styles.boxTop}>
                                    <h4 className={styles.boxTitle}>Ganty</h4>
                                    <p className={styles.boxDate}>07/2022 ~ 05/2023</p>
                                </div>
                                <div className={styles.boxBotton}>
                                    <p className={styles.boxDescription}>Criador e Desenvolvedor</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.sectionTitle}>Educacional</h2>
                            <div className={styles.experiencesBox}>
                                <div className={styles.boxTop}>
                                    <h4 className={styles.boxTitle}>Senac EaD</h4>
                                    <p className={styles.boxDate}>2023 ~ Atualmente</p>
                                </div>
                                <div className={styles.boxBotton}>
                                    <p className={styles.boxDescription}>Análise e Desenvolvimento de Sistemas</p>
                                </div>
                            </div>
                            <div className={styles.experiencesBox}>
                                <div className={styles.boxTop}>
                                    <h4 className={styles.boxTitle}>CEL</h4>
                                    <p className={styles.boxDate}>2023 ~ 2023</p>
                                </div>
                                <div className={styles.boxBotton}>
                                    <p className={styles.boxDescription}>Coding Classroom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Tecnologias</h2>
                        <div className={styles.technologiesBoxes}>
                            <div className={styles.technologiesBox}>
                                <h4 className={styles.technologiesBoxTitle}>Desenvolvimento</h4>
                                <div className={styles.technologiesList}>
                                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target='_blank' aria-label="JavaScript" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target='_blank' aria-label="HTML" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target='_blank' aria-label="CSS" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://kotlinlang.org" target='_blank' aria-label="Kotlin (Aprendendo)" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" className={styles.technologyImg} /></a>
                                </div>
                            </div>
                            <div className={styles.technologiesBox}>
                                <h4 className={styles.technologiesBoxTitle}>Tecnologias</h4>
                                <div className={styles.technologiesList}>
                                    <a href="https://nodejs.org" target='_blank' aria-label="Node.js" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://nextjs.org" target='_blank' aria-label="Next.js" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://www.mongodb.com" target='_blank' aria-label="MongoDB" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://firebase.google.com" target='_blank' aria-label="Firebase" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" className={styles.technologyImg} /></a>
                                </div>
                            </div>
                            <div className={styles.technologiesBox}>
                                <h4 className={styles.technologiesBoxTitle}>Programas</h4>
                                <div className={styles.technologiesList}>
                                    <a href="https://code.visualstudio.com" target='_blank' aria-label="VSCode" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className={styles.technologyImg} /></a>
                                    <a href="https://www.figma.com" target='_blank' aria-label="Figma" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className={styles.technologyImg} /></a>
                                </div>
                            </div>
                            <div className={styles.technologiesBox}>
                                <h4 className={styles.technologiesBoxTitle}>Soluções</h4>
                                <div className={styles.technologiesList}>
                                    <a href="https://vercel.com" target='_blank' aria-label="Vercel" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png" className={styles.technologyImg} /></a>
                                    <a href="https://github.com" target='_blank' aria-label="Github" data-balloon-pos="up" onFocus={e => e.target.blur()}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className={styles.technologyImg} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.callToAction}>
                    <h2 className={styles.callToActionTitle}>Vamos trabalhar juntos?</h2>
                    <p className={styles.callToActionText}>Gostou de mim e do meu trabalho? Tem interesse em me contratar? Basta entrar em contato comigo!</p>
                    <Link href="/contato" className={styles.callToActionBtn}>Vamos conversar!</Link>
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
