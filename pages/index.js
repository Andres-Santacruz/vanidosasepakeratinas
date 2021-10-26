import Head from "next/head";
import ProductCard from "../components/ProductCard";
import Carrusel from "../components/Carrusel";
import styles from "../styles/Home.module.css";
import { list } from "../services/api";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Vanidosas Epa Keratinas</title>
        <link rel="icon" href="/logoicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Carrusel />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data.map((product) => {
              return <ProductCard data={product} key={product.id} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const data = await list("Home");
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
    revalidate: 3600 * 6,
  };
}
