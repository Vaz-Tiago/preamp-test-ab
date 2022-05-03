import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Preamp Teste AB</title>
        <meta name="description" content="teste ab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <button className={styles.buttonA}>TESTE A</button>
          <button className={styles.buttonB}>TESTE B</button>
        </div>
      </main>
    </div>
  );
}