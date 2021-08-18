import Head from "next/head";

import ProductCard from "../components/ProductCard";
import { list } from "../services/api";
import styles from "../styles/Home.module.css";

const Nuevos = ({ data }) => {
  return (
    <>
      <Head>
        <title>Productos Nuevos de Epa Colombia | VanidosasEpaKeratinas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
};

export default Nuevos;
export async function getStaticProps(context) {
  const data = await list("Nuevos");
  data.reverse();
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
