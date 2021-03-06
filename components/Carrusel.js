import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { list } from "../services/api";
import CustomLoader from "./CustomLoader";
import styles from "../styles/carrusel.module.css";

const Carrusel = () => {
  const [loading, setLoading] = useState(false);
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    list("Carrusel").then((Arrayimgs) => {
      setImgs(Arrayimgs);
      setLoading(true);
    });
  }, []);

  const router = useRouter();

  const handleClik = (ruta) => {
    router.push(`/${ruta}`);
  };
  if (!loading) {
    return <CustomLoader uniqueKey="carrusel" />;
  }
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop
      interval={5000}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
    >
      {imgs.map((dataImgs) => {
        return (
          <div
            key={dataImgs.nombre}
            style={{ cursor: "pointer" }}
            onClick={() => handleClik(`${dataImgs.nombre}`)}
            className={styles.imgcontainer}
          >
            <img
              src={`${dataImgs.URL}`}
              loading="lazy"
              alt={`${dataImgs.nombre}`}
              className={styles.imgsMoviles}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Carrusel;
