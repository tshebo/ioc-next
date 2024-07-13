import { useEffect } from "react";
import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initLightboxJS("Insert your License Key here", "individual"); // or "team" if applicable
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
