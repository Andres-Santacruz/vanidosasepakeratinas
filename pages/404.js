import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logoicon.ico" />
        <title>Página no encontrada. </title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </>
  );
}
