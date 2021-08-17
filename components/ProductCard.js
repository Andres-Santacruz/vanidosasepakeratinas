import { useContext } from "react";
import { useAlert } from "react-alert";
import { carContext } from "../context/carContext";
import { types } from "../reducers/types";
import Link from "next/link";
import style from "../styles/CardProducto.module.css";

const ProductCard = ({ data }) => {
  const alert = useAlert();
  const { dispatch } = useContext(carContext);
  const handleAddProduct = (data) => {
    dispatch({
      type: types.ADD_CAR,
      payload: data,
    });
    alert.show("Añadido al carro");
  };
  return (
    <div className={style.contenedor}>
      <Link href={`/producto/${data.nombre.replace(/ /g, "-")}`}>
        <a className={style.img}>
          <figure>
            <img
              src={data.URL}
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
          <button
            onClick={() => handleAddProduct(data)}
            className={style.btn_add}
          >
            <div>
              <img src="https://icongr.am/fontawesome/cart-plus.svg?size=15&color=bc7424" />
            </div>
            <p>Añadir</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
