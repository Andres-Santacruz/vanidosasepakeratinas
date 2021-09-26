import { useEffect } from "react";
import styles from "../styles/ayuda.module.css";

const ModalImg = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      });
    };
  }, []);

  return isOpen ? (
    <div
      className={styles.modal}
      onClick={closeModal}
      onKeyUp={() => console.log("tumama")}
    >
      <button onClick={closeModal} className={styles.btnClose}>
        X
      </button>
      <div className={styles.contentModal}>{children}</div>
    </div>
  ) : null;
};

export default ModalImg;
