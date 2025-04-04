import Head from "next/head";
import "@fortawesome/fontawesome-free/css/all.css";

import "highlight.js/styles/atom-one-dark.css";
import "../styles/variables.css";
import "../styles/footer.css";
import "../styles/courses.css";

import Layout from "../components/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/images/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-16x16.png`}
        />
        <link rel="icon" type="image/x-icon" href={`/images/favicon.ico`} />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
