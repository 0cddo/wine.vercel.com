import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huam Alcoholic </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ✨ <strong>후암</strong>주점 🥂
        </h1>

        <p className={styles.description}>😋 손님 주종이 어떻게 되세요~?</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Wine 🍷</h2>
            <p>그대의 눈동자에 건배,,, 와인주세요</p>
            <img
              src="https://cdn.onews.tv/news/photo/202105/73003_74956_124.jpg"
              alt="wine"
              width="200px"
            />
          </div>

          <div className={styles.card}>
            <h2>Beer 🍺</h2>
            <p>시어언한 맥주주세요!!!</p>
            <img
              src="https://jjalbot.com/media/2016/10/HyWOrPaIR/20150826_55ddb4b4daac7.jpg"
              alt="beer"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
