import React, { useState, useEffect } from "react";
import { Placement, Control, Asset } from "@redventures/preamp-for-react";

import CustomHead from "../../components/CustomHead";

import OriginalContent from "./OriginalContent";
import VariantAContent from "./VariantA";
import styles from "../../styles/Home.module.css";

export default function About() {
  const [decisionTaken, setDecisionTaken] = useState(false);

  const event = () =>
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

  return (
    <div className={styles.container}>
      <CustomHead
        title="About page"
        description="this page is about our test"
      />
      <main className={styles.main}>
        {decisionTaken && (
          <Placement name="AboutContent">
            <Control>
              <OriginalContent />
            </Control>
            <Asset name="AboutContent-VariantA">
              <VariantAContent />
            </Asset>
          </Placement>
        )}
        <button onClick={event}>Evento</button>
      </main>
    </div>
  );
}
