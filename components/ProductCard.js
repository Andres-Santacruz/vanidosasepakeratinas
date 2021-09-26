import Link from "next/link";
import style from "../styles/CardProducto.module.css";
import ButtonAdd from "./ButtonAdd";

const ProductCard = ({ data, url = "" }) => {
  return (
    <div className={style.contenedor}>
      <Link href={`/producto/${data.nombre.replace(/ /g, "-")}`}>
        <a className={style.img}>
          <figure>
            <img
              src={data.URL ? data.URL : url + "./not-found-image.jpg"}
              alt={data.nombre}
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </figure>
        </a>
      </Link>
      <div className={style.main_info}>
        <Link href={`/producto/${data.nombre.replace(/ /g, "-")}`}>
          <a>
            <h2>{data.nombre}</h2>
          </a>
        </Link>
        <p className={style.descripcion}>{data.descripcion}</p>
      </div>
      <div className={style.price_info}>
        <div>
          <span>${new Intl.NumberFormat("de-DE").format(data.precio)}</span>
        </div>
        <div>
          <ButtonAdd data={data} styles={style.btn_add} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
