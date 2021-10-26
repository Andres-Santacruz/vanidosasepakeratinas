import Head from "next/head";
import WhatsappIcon from "../components/icons/WhatsappIcon";
import { list } from "../services/api";
import styles from "../styles/promociones.module.css";

const promociones = ({ dataArr }) => {
  const data = dataArr[0];
  return (
    <>
      <Head>
        <title>Maratones | VanidosasEpaKeratinas</title>
        <link rel="icon" href="/logoicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.main}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2>{data.titulo}</h2>
            <p>{data.informacion}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/573206917306?text=Quiero mas información de la promoción`}
              className={styles.btn}
            >
              <WhatsappIcon fill="#fff" />
              <p>Escríbenos</p>
            </a>
          </div>
          <div className={styles.imgcontent}>
            <img src={data.imagen} />
          </div>
        </div>
      </section>
    </>
  );
};

export default promociones;

export async function getServerSideProps(context) {
  const dataArr = await list("promociones");
  if (!dataArr) {
    return {
      notFound: true,
    };
  }
  return {
    props: { dataArr },
  };
}
