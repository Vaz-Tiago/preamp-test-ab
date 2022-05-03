import Head from "next/head";
import { Placement, Control, Asset } from "@redventures/preamp-for-react";
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
        <Placement name="Home">
          <Control>
            <button className={styles.buttonA}>TESTE A</button>
          </Control>
          <Asset
            name="ButtonB"
            lazy={<button className={styles.buttonB}>TESTE B</button>}
          />
        </Placement>
      </main>
    </div>
  );
}
