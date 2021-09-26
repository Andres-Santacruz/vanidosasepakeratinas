import Head from "next/head";
import styles from "../styles/nosotros.module.css";

const Nosotros = () => {
  return (
    <>
      <Head>
        <title>Conócenos | VanidosasEpaKeratinas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={styles.sectionabout}>
        <div className={styles.container}>
          <div className={styles.imgscontainer}>
            <img
              src="https://images.pexels.com/photos/1835927/pexels-photo-1835927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className={styles.img1}
            />
            <img
              src="https://images.pexels.com/photos/1909015/pexels-photo-1909015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className={styles.img2}
            />
            <img
              src="https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className={styles.img3}
            />
          </div>
          <div className={styles.infocontainer}>
            <div className={styles.wraper_info}>
              <h2 className={styles.h2}>Acerca de Nosotros</h2>
              <p className={styles.pinfo}>
                En esta parte yo digo algo relevante de nostros como por
                rellenar
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionubicacion}>
        <img src="../wave.svg" />
        <div className={styles.containerabout}>
          <div className={styles.aboutwrapper}>
            <h2>Nuestra Ubicación</h2>
          </div>
        </div>
        <img src="../wave.svg" style={{ transform: "scale(-1)" }} />
      </section>
    </>
  );
};

export default Nosotros;
