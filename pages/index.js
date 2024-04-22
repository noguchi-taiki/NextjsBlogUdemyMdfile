import Head from "next/head";
import { Inter } from "next/font/google";
import Layout, { siteTiele } from "../components/Layout";
import utilsStyles from "../styles/utils.module.css"
import Link from "next/link";
import styles from "../styles/Home.module.css"
import { getPostsData } from "../lib/post";

const inter = Inter({ subsets: ["latin"] });

//ssgの場合
export async function getStaticProps(){
  const allPostsData = getPostsData(); //id,path,titile,thumbnail
  console.log(getPostsData);

  return{
    props:{
      allPostsData,
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTiele}</title>
        </Head>
        <section className={utilsStyles.headingMd}>
          <p>私はNextJs初学者です就職に向けてのポートフォリオ作りとしてこのようなブログサイトを制作しています</p>
        </section>

        <section>
          <h2 className={utilsStyles.headingMd}>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({id,title,date,thumbnail}) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img src={`${thumbnail}`} 
                  className={styles.thumbnailImage}
                  />
                </Link>
                <Link legacyBehavior href={`/posts/${id}`}>
                  <a className={utilsStyles.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilsStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </div>
        );
}
