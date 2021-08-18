import { useContext } from "react";
import { useAlert } from "react-alert";
import { carContext } from "../context/carContext";
import { types } from "../reducers/types";

const ButtonAdd = ({ styles, data }) => {
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
    <button onClick={() => handleAddProduct(data)} className={styles}>
      <div>
        <img src="https://icongr.am/fontawesome/cart-plus.svg?size=15&color=bc7424" />
      </div>
      <p>Añadir</p>
    </button>
  );
};

export default ButtonAdd;
