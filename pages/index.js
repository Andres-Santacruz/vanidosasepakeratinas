import Head from "next/head";
import ProductCard from "../components/ProductCard";
import Carrusel from "../components/Carrusel";
import styles from "../styles/Home.module.css";
import { list } from "../services/api";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Epa keratinas Cauca</title>
        <link rel="icon" href="/logoicon.ico" />
      </Head>
      <Carrusel />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            {data.map((product, i) => {
              return <ProductCard data={product} key={product.id} />;
            })}
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://www.instagram.com/vanidosasepakeratinas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vanidosasepakeratinas
          </a>
        </footer>
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
    //revalidate: 3600*4,
  };
}
