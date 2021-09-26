import Head from "next/head";
import { useRef, useState } from "react";

import ElegirProductInt from "../components/ElegirProductInt";
import ImgInt from "../components/ImgInt";

import PlanchaIcon from "../components/icons/PlanchaIcon";
import BiotInt from "../components/BiotInt";
import CalendarInt from "../components/CalendarInt";

import styles from "../styles/ayuda.module.css";

const types = {
  Aplicación: "Aplicación",
  Elige: "Elige",
  Biotina: "Biotina",
  Saca: "Saca",
};

const opciones = [
  "Aplicación",
  "Elige el mejor producto",
  "Biotina",
  "Saca una cita",
];
const Ayuda = () => {
  const [option, setOption] = useState("");
  const interative = useRef(null);

  const handleClick = (tex) => {
    setOption(tex[0]);
    setTimeout(() => {
      window.scroll({ top: 620, left: 100, behavior: "smooth" });
    }, 200);
  };

  const handlecloseBnt = () => {
    setOption("");
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <Head>
        <title>
          Aprende a manejar nuestros productos | VanidosasEpaKeratinas
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logoicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.titlecontenedor}>
          <h2>Te ayudamos</h2>
        </div>
        <div className={styles.main}>
          {opciones.map((num, i) => {
            return (
              <div
                key={num.split(" ")}
                className={styles.card}
                onClick={() => handleClick(num.split(" "))}
              >
                <h3>
                  <span>
                    <PlanchaIcon />
                  </span>
                  {num}
                </h3>
                <p className={styles.card_info}>
                  bueno aqui va una corta descripcion de lo que se supone tengo
                  que decir
                </p>
              </div>
            );
          })}
        </div>
        {option !== "" && (
          <section className={styles.interactive}>
            <div className={styles.interactive_header}>
              <h1>Como usar...</h1>
              <button className={styles.btnClose} onClick={handlecloseBnt}>
                X
              </button>
            </div>
            {option === types.Aplicación && <ImgInt />}
            {option === types.Elige && <ElegirProductInt />}
            {option === types.Biotina && <BiotInt />}
            {option === types.Saca && <CalendarInt />}
          </section>
        )}
      </div>
    </>
  );
};

export default Ayuda;
