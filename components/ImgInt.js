import { useState } from "react";
import { useModal } from "../hooks/useModal";
import styles from "../styles/ayuda.module.css";
import ModalImg from "./ModalImg";

const ImgInt = () => {
  const [imgState, setImgState] = useState("");
  const [isOpen, closeModal, openModal] = useModal();

  const handleOpenModal = (ruta = "") => {
    openModal();
    setImgState(ruta);
    /* window.scroll({ top: -50, behavior: "smooth" }); */
  };
  const handleIntoModal = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <ModalImg isOpen={isOpen} closeModal={closeModal}>
        {
          <img
            src={imgState}
            className={styles.imgModal}
            onClick={handleIntoModal}
          />
        }
        {/* <div style={{ backgroundImage: `url(${imgState})` }}></div> */}
      </ModalImg>
      <div className={styles.imgsSelect} onKeyDown={() => console.log("press")}>
        <ul className={styles.imgsSelect_content}>
          <li
            className={styles.imgsSelect_content_kera}
            onClick={() => handleOpenModal("../BOTOX-pasos.png")}
          >
            <span></span>Keratina
          </li>
          <li
            className={styles.imgsSelect_content_kera}
            onClick={() => handleOpenModal("../BOTOX-pasos.png")}
          >
            <span></span>Cirugìa
          </li>
          <li
            className={styles.imgsSelect_content_kera}
            onClick={() => handleOpenModal("../BOTOX-pasos.png")}
          >
            <span></span>Botox
          </li>
          <li
            className={styles.imgsSelect_content_kera}
            onClick={() => handleOpenModal("../BOTOX-pasos.png")}
          >
            <span></span>Keratina Niñas
          </li>
        </ul>
      </div>
    </>
  );
};

export default ImgInt;
