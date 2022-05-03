import { PreampProvider } from "@redventures/preamp-for-react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PreampProvider>
      <Component {...pageProps} />
    </PreampProvider>
  );
}

export default MyApp;
