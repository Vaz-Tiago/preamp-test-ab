import React, { useEffect, useState } from "react";

import Head from "next/head";
import { Placement, Control, Asset } from "@redventures/preamp-for-react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [decisionTaken, setDecisionTaken] = useState(false);
  // useEffect(() => {
  //   let count = 0;
  //   const preampLoad = setInterval(() => {
  //     console.log("window._Preamp: ", window?._Preamp);
  //     if (count <= 10) {
  //       console.log("ready");
  //       count++;
  //     } else {
  //       setDecisionTaken(true);
  //       clearInterval(preampLoad);
  //     }
  //   }, 1000);
  // }, []);
  useEffect(() => {
    const preampDecisionInterval = setInterval(() => {
      if (window._Preamp?.actions?.experienceNumber) {
        setDecisionTaken(true);
        clearInterval(preampDecisionInterval);
      }
    }, 100);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Preamp Teste AB</title>
        <meta name="description" content="teste ab" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(co,h,e,s,i,o,n){var d='documentElement';var a='className';h[d][a]+=' preampjs fusejs';n.k=e;co._Cohesion=n;co._Preamp={k:s,start:new Date};co._Fuse={k:i}; co._Tagular={k:o};[e,s,i,o].map(function(x){co[x]=co[x]||function(){(co[x].q=co[x].q||[]).push([].slice.call(arguments))}}); h.addEventListener('DOMContentLoaded',function(){co.setTimeout(function(){var u=h[d][a];h[d][a]=u.replace(/ ?preampjs| ?fusejs/g,'')},3e3); co._Preamp.docReady=co._Fuse.docReady=!0});var z=h.createElement('script');z.async=1; z.src='https://www.allconnect.com/ext/cdn.cohesionapps.com/cohesion/cohesion-latest.min.js';h.head.appendChild(z);}
(window,document,'cohesion','preamp','fuse','tagular', {
  tagular:{
    apiKey: 'dc0c22a1-ea8a-45ae-ae9a-f63379366a5.22844c38-cb41-4423-8dd6-0527e0de19f1',
    writeKey: 'wk_1NT28Xs9LiZuknWRbR9cXPtucjV',
    sourceKey: 'src_1NT28RdkYcgBjTRFLTgYcWcrH1n',
    multiparty: true,
    apiHost: 'https://make-ingest.allconnect.com/v2/t',
    taggy: {
      enabled: true
    },
  },
  preamp:{
    siteId:"4yAVcjLowMHN3F1olp3w2y",
  },
})
            `,
          }}
        />
      </Head>

      <main className={styles.main}>
        {decisionTaken && (
          <Placement name="Home">
            <Control>
              <button className={styles.buttonA}>TESTE A</button>
            </Control>
            <Asset name="ButtonB">
              <button className={styles.buttonB}>TESTE B</button>
            </Asset>
          </Placement>
        )}
      </main>
    </div>
  );
}
