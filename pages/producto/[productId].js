import Link from "next/link";
import Head from "next/head";
import { list } from "../../services/api";

import styles from "../../styles/Productoid.module.css";
import ButtonAdd from "../../components/ButtonAdd";

const productId = ({ product, similar }) => {
  return (
    <>
      <Head>
        <title>{product.nombre} | VanidosasEpaKeatinas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logoicon.ico" />
      </Head>
      <div className={styles.main}>
        <section className={styles.container}>
          <div className={styles.imgcontainer}>
            <img
              src={product.URL ? product.URL : "../../not-found-image.jpg"}
              alt={product.nombre}
              className={styles.imgproduct}
            />
          </div>
          <div className={styles.infocontainer}>
            <h2>{product.nombre}</h2>
            <ul className={styles.descripcion}>
              {product.descripcion.split(" + ").map((info) => {
                return (
                  <li key={info}>{info[0].toUpperCase() + info.slice(1)}</li>
                );
              })}
            </ul>
            <span>
              ${new Intl.NumberFormat("de-DE").format(product.precio)}
            </span>
          </div>
          <div className={styles.btnscontainer}>
            <div>
              <ButtonAdd data={product} styles={styles.btn_add} />
            </div>
            {similar.length > 0 ? (
              <div className={styles.similares}>
                <h3>Ver similares</h3>
                <ul className={styles.ul}>
                  {similar.map((simil) => {
                    return (
                      <li key={simil.id}>
                        <Link
                          href={`/producto/${simil.nombre.replace(/ /g, "-")}`}
                        >
                          <a>{simil.nombre}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <div className={styles.similares}>
                <h3>
                  Conoce lo mas nuevo{" "}
                  <Link href={`/nuevo`}>
                    <a>aquí</a>
                  </Link>
                </h3>
              </div>
            )}
          </div>
        </section>
      </div>
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
