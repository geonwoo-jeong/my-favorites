import Head from "next/head";
import GlobalStyles from "../globalStyles";

export default ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
    </Head>
    <GlobalStyles />
  </>
);
