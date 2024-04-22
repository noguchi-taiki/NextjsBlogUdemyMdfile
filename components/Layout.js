import Head from "next/head";
import styles from "./Layout.module.css"
import utilsStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "Noguchi Taiki";
export const siteTiele = "Next.js blog";

function Layout({ children , home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`} src="images/profile.png"/>
                        <h2 className={utilsStyles.heading2Xl}>{name}</h2>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <img src="/images/profile.png" className={utilsStyles.borderCircle}/>
                        </Link>
                        <h2 className={utilsStyles.heading2Xl}>
                            <Link href="/" legacyBehavior>
                                <a className={utilsStyles.colorInherit} >{name}</a>
                            </Link>
                        </h2>
                        
                    </>
                )}

            </header>
            <main>{children}</main>
            {!home &&
                <div>
                    <Link href="/">ホームへ戻る</Link>
                </div>
            }
        </div>
    );
}

export default Layout;