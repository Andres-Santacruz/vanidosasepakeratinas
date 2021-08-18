import { list } from "../../services/api";
import Head from "next/head";

import styles from "../../styles/Productoid.module.css";
import ButtonAdd from "../../components/ButtonAdd";

const productId = ({ product, similar }) => {
  return (
    <>
      <Head>
        <title>{product.nombre} | VanidosasEpaKeatinas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            <ButtonAdd data={product} styles={styles.btn_add} />
          </div>
          <div>
            <h3>ver similares</h3>
            <div>
              {similar.map((simil) => {
                return <p key={simil.id}>{simil.nombre}</p>;
              })}
            </div>
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
  const product = res.find(
    (product) => product.nombre === params.productId.replace(/-/g, " ")
  );
  const filtro = res.filter((p) =>
    p.nombre.includes(params.productId.split("-")[0])
  );
  const similar = filtro.filter(
    (pr) => !pr.nombre.includes(params.productId.replace(/-/g, " "))
  );
  return { props: { product, similar } };
}

export default productId;
