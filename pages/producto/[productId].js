import { list } from "../../services/api";
import Head from "next/head";

import styles from "../../styles/Productoid.module.css";

const productId = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.nombre} | Vanidosas Epa Keatinas Cauca</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.imgcontainer}>
          <img src={product.URL} alt={product.nombre} />
        </div>
        <div className={styles.infocontainer}>
          <h2>{product.nombre}</h2>
          <p>{product.descripcion}</p>
          <span>${new Intl.NumberFormat("de-DE").format(product.precio)}</span>
        </div>
        <div className={styles.btnscontainer}>
          <div>
            <span>ver similares</span>
          </div>
          <div>
            <button>Añadir al carro</button>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getStaticPaths() {
  const res = await list("Home");
  const paths = res.map((product) => ({
    params: { productId: product.nombre.replace(/ /g, "-") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await list("Home");
  console.log(params);
  const product = res.find(
    (product) => product.nombre === params.productId.replace(/-/g, " ")
  );

  return { props: { product } };
}

export default productId;
