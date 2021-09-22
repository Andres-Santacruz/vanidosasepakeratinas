import Head from "next/head";

import { useContext, useEffect, useMemo } from "react";
import Link from "next/link";

import { carContext } from "../context/carContext";
import { types } from "../reducers/types";

import BasuraIcon from "../components/icons/BasuraIcon";
import WhatsappIcon from "../components/icons/WhatsappIcon";

import style from "../styles/shoppingcar.module.css";

const compras = () => {
  const { car, dispatch } = useContext(carContext);

  useEffect(() => {
    localStorage.setItem("Car", JSON.stringify(car));
  }, [car]);

  const precioTotal = useMemo(() => {
    return car.reduce((acc, _data) => {
      return Number(_data.precio) * _data.cantidad + acc;
    }, 0);
  }, [car]);

  const mensajeWpp = useMemo(() => {
    return car
      .reduce(
        (mensaje, producto) =>
          mensaje.concat(`${producto.cantidad} - ${producto.nombre} %0A`),
        "Hola VanidosasEpaKeratinas me gustaría comprar: %0A %0A"
      )
      .concat(`%0A *TOTAL:* ${precioTotal}`);
  }, [car]);

  const handleSubmit = (e, carro) => {
    e.preventDefault();
    if (
      !isNaN(Number(e.target[0].value)) &&
      !(e.target[0].value === "") &&
      !(Number(e.target[0].value) < 0)
    ) {
      dispatch({
        type: types.ADD_MANUAL,
        payload: { ...carro, manual: e.target[0].value },
      });
    }
    e.target[0].value = "";
    e.target.children[0].blur();
  };

  const carLength = car.length > 0;

  return (
    <>
      <Head>
        <title>Carrito de compras | VanidosasEpaKeratinas</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={style.comprasscreen}>
        <div className={style.contenedor}>
          {carLength && <h2 className={style.cartitle}>TU CARRO</h2>}
          {carLength ? (
            car.map((carro) => {
              return (
                <div className={style.productcontenedor} key={carro.id}>
                  <button
                    className={style.btnclose}
                    title="Eliminar Producto"
                    onClick={() =>
                      dispatch({ type: types.REMOVEALL_CAR, payload: carro })
                    }
                  >
                    X
                  </button>
                  <div className={style.carcontainer}>
                    <div className={style.imgcontenedor}>
                      <img src={carro.URL} alt={carro.nombre} loading="lazy" />
                    </div>
                    <div className={style.main_info}>
                      <div className={style.title}>
                        <Link
                          href={`/producto/${carro.nombre.replace(/ /g, "-")}`}
                        >
                          <a>
                            <h2>{carro.nombre}</h2>
                          </a>
                        </Link>
                      </div>
                      <div className={style.price_info}>
                        <div className={style.btns}>
                          <button
                            className={style.btn}
                            onClick={() =>
                              dispatch({
                                type: types.REMOVE_CAR,
                                payload: carro,
                              })
                            }
                          >
                            {carro.cantidad === 1 ? <BasuraIcon /> : "-"}
                          </button>
                          <form onSubmit={(e) => handleSubmit(e, carro)}>
                            <input
                              className={style.input}
                              type="number"
                              placeholder={carro.cantidad}
                            />
                            <button
                              type="submit"
                              className={style.btnActulizar}
                            >
                              Actualizar
                            </button>
                          </form>
                          <button
                            className={style.btn}
                            onClick={() =>
                              dispatch({ type: types.ADD_CAR, payload: carro })
                            }
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <span className={style.precio}>
                            $
                            {new Intl.NumberFormat("de-DE").format(
                              Number(carro.precio) * carro.cantidad
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <section className={style.empty}>
              <h2>TU CARRO ESTÁ VACÍO</h2>
              <p>
                Continua comprando{" "}
                <Link href="/">
                  <a>aquí</a>
                </Link>
              </p>
            </section>
          )}
        </div>
        {carLength && (
          <div className={style.resumencontenedor}>
            <h2>DETALLES DE TU PEDIDO</h2>
            <p>
              Sub Total:{" "}
              <span className={style.resumenPrice}>
                ${new Intl.NumberFormat("de-DE").format(precioTotal)}
              </span>
            </p>
            <span className={style.resumenAlert}>
              * El domicilio no está incluido
            </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/573206917306?text=${mensajeWpp}`}
              className={style.btnwpp}
              className={style.btnwpp}
            >
              <WhatsappIcon />
              <p>Completa tu compra</p>
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default compras;
