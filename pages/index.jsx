import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Tiago E.</title>
                <meta name="description" content="Mais sobre a vida e obra de Tiago Enzo." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='website'>
                <header className='header d-flex justify-content-center align-items-center gap-2'>
                    <h1 className='page-title pt-3 fw-700'>Welcome to montero!</h1>
                    <img src="https://emojigraph.org/media/whatsapp/cloud_2601-fe0f.png"></img>
                </header>

                <main className="content container px-5">
                    <section className="saudations d-flex flex-wrap-reverse align-items-center justify-content-between flex-wrap">
                        <div className='text-column'>
                            <h2 className="fw-bold">Olá! Eu sou Tiago!</h2>
                            <p>Seja bem vindo! Caso não me conheça, meu nome é<br />Tiago Enzo e eu sou um programador autodidata, atualmente,<br />com foco em javascript e desenvolvimento web. Tenho uma certa<br />habilidade com as ferramentas <a href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">Next.js</a> e <a href="https://firebase.google.com/" target="_blank" rel="noreferrer noopener">Firebase</a>.</p>
                        </div>
                        <img src="https://cdn.discordapp.com/attachments/949731811657936946/950097035539931156/tdejHFb.png"></img>
                    </section>

                    <section className="areas">
                        <div className="area mt-5">
                            <h4 className="fw-bold">Tiago por ai...</h4>
                            <div className="boxes d-flex flex-wrap pt-2 gap-3">
                                <div className="box rounded">
                                    <a href="https://instagram.com/tixagx" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Instagram</h6>
                                            <p>Mais sobre meu cotidiano, minha vida pessoal... Tudo aquilo que as blogueiras não mostram.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://discord.com/users/852610866683445328" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Discord</h6>
                                            <p>Quer entrar em contato comigo? Perguntar algo? Me chama no Discord, eu não mordo, haha!</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://github.com/tiaaago" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Github</h6>
                                            <p>O coração de todos os códigos! Acesse caso queira dar uma espiada em meus códigos. :)</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://ko-fi.com/gaelzero" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Doe para mim</h6>
                                            <p>Incentive um programador autodidata a continuar firme no ramo, doe, isso faz a diferença!</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="box rounded">
                                    <a href="https://open.spotify.com/playlist/6z1MXN6PpM6Fq8rEEnMZIH?si=61669f4157614fe5" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>Spotify Playlist</h6>
                                            <p>Essas são as músicas que não saem do meu fone atualmente, tem música para todos os gostos!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="area mt-5">
                            <h4 className="fw-bold">Projetos atuais</h4>
                            <div className="boxes d-flex flex-wrap pt-2 gap-3">
                                <div className="box rounded">
                                    <a href="https://gegbots.com/" target="_blank" rel="noreferrer noopener">
                                        <div className="box-content">
                                            <h6>G&G Bots</h6>
                                            <p>Uma loja de BOTs (e futuramente sites) no Discord. Clique aqui e saiba mais sobre o projeto!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="area mt-5">
                            <h4 className="fw-bold">Tecnologias que domino ou estou aprendendo</h4>
                            <div className="boxes d-flex flex-wrap pt-2 pb-3 gap-2">
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"></img>
                                        <h5 className="ps-2">Javascript</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png"></img>
                                        <h5 className="ps-2">HTML5</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"></img>
                                        <h5 className="ps-2">CSS3</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg"></img>
                                        <h5 className="ps-2">NPM</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://cdn.aglty.io/bwql7jyk/Attachments/NewItems/image_20211214122557_0.png"></img>
                                        <h5 className="ps-2">Next.js</h5>
                                    </div>
                                </div>
                                <div className="techs-box d-flex align-items-center justify-content-center rounded">
                                    <div className="techs-box-content">
                                        <img src="https://i.imgur.com/WEwaA6L.png"></img>
                                        <h5 className="ps-2">Firebase</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="footer d-flex align-items-center mt-5">
                    <div className="footer-content container px-5 pt-3">
                        <p>Website feito com ❤️ por Tiago, baseado em <a href="https://eggsy.xyz/"><b>Eggsy Website</b></a></p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
