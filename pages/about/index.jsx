import React, { useState, useEffect } from "react";
import { Placement, Control, Asset } from "@redventures/preamp-for-react";

import CustomHead from "../../components/CustomHead";

import OriginalContent from "./OriginalContent";
import VariantAContent from "./VariantA";
import styles from "../../styles/Home.module.css";

export default function About() {
  const [decisionTaken, setDecisionTaken] = useState(false);

  useEffect(() => {
    cohesion("ready", function () {
      setDecisionTaken(true);
    });
  }, []);

  return (
    <div className={styles.container}>
      <CustomHead
        title="About page"
        description="this page is about our test"
      />
      <main className={styles.main}>
        {decisionTaken && (
          <Placement name="Home">
            <Control>
              <OriginalContent />
            </Control>
            <Asset name="ButtonB">
              <VariantAContent />
            </Asset>
          </Placement>
        )}
      </main>
    </div>
  );
}
