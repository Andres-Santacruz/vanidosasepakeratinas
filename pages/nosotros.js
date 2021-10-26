import Head from "next/head";
import WhatsappIcon from "../components/icons/WhatsappIcon";
import { list } from "../services/api";
import styles from "../styles/nosotros.module.css";

const Nosotros = ({ data }) => {
  return (
    <>
      <Head>
        <title>Conócenos | VanidosasEpaKeratinas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logoicon.ico" />
      </Head>
      <section className={styles.sectionabout}>
        <div className={styles.container}>
          <div className={styles.imgscontainer}>
            <img src={data[0].imagenes} className={styles.img1} />
            <img src={data[1].imagenes} className={styles.img2} />
            <img src={data[2].imagenes} className={styles.img3} />
          </div>
          <div className={styles.infocontainer}>
            <div className={styles.wraper_info}>
              <h2 className={styles.h2}>quiénes somos</h2>
              <p className={styles.pinfo}>{data[0].informacion}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionubicacion}>
        <img src="../wave.svg" />
        <div className={styles.containerabout}>
          <div className={styles.aboutwrapper}>
            <h2 className={styles.h2}>Nuestra Ubicación</h2>
            <div className={styles.mapscontainer}>
              <div className={styles.textinfo}>
                <p className={styles.pinfomaps}>Nos puedes encontrar en:</p>
                <span className={styles.direccion}>{data[0].ubicacion}</span>
                <span className={styles.direccion}>Camilo Torres</span>
                <p>
                  Agenda tu cita:
                  <span>
                    {" "}
                    <WhatsappIcon fill={"#0f0"} /> 317 6025 166
                  </span>
                </p>
              </div>
              <iframe
                id="ubicacion"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.543851966328!2d-76.62169148649566!3d2.448603628907881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30033f1d6b7139%3A0x3ed24680b8590ea2!2sCl.%204%20%2325-61%2C%20Popay%C3%A1n%2C%20Cauca!5e0!3m2!1ses!2sco!4v1632790122467!5m2!1ses!2sco"
                width="600"
                height="450"
                style={{ border: 0, width: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <img src="../wave.svg" style={{ transform: "scale(-1)" }} />
      </section>
    </>
  );
};

export default Nosotros;

export async function getServerSideProps(context) {
  const data = await list("Nosotros");
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
