import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Placement, Control, Asset } from "@redventures/preamp-for-react";

import CustomHead from "../components/CustomHead";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [decisionTaken, setDecisionTaken] = useState(false);

  const event = () => {
    preamp(
      "run",
      _Cohesion.preamp.siteId,
      _Cohesion.preamp,
      function (err, decision) {
        if (err) return console.error("Preamp Error", err);
        console.log("Preamp Decision", decision);
        setDecisionTaken(true);
      }
    );
  };

  return (
    <div className={styles.container}>
      <CustomHead
        title="Home"
        description="Estudo de implementação de teste A/B com PREAMP"
      />
      <main className={styles.main}>
        {decisionTaken && (
          <Placement name="Home">
            <Control>
              <Link href="/about">
                <a className={styles.linkA}>About</a>
              </Link>
            </Control>
            <Asset name="ButtonB">
              <Link href="/about">
                <a className={styles.linkB}>About</a>
              </Link>
            </Asset>
          </Placement>
        )}
        <button onClick={() => event()}>Disparar Evento</button>
      </main>
    </div>
  );
}
