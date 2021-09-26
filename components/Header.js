import { useContext } from "react";
import Link from "next/link";

import { carContext } from "../context/carContext";

import style from "../styles/Header.module.css";
import Carshopping from "./icons/Carshopping";
import InfoBaner from "./InfoBaner";
import FormBusqueda from "./FormBusqueda";

const Header = () => {
  const { car } = useContext(carContext);
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <div>
            <Link href="/">
              <a className={style.logoanchor}>
                <img className={style.img_logo} src="/logor.png" />
              </a>
            </Link>
          </div>
          <FormBusqueda />
          <div className={style.containerLinks}>
            <input type="checkbox" id="menu" className={style.checkbox} />
            <label className={style.MenuBars} htmlFor="menu"></label>
            <ul
              className={style.ul}
              onClick={() => {
                document.getElementById("menu").checked = false;
              }}
            >
              <li>
                <Link href="/nuevo">
                  <a>LO MÁS NUEVO</a>
                </Link>
              </li>
              <li>
                <Link href="/promociones">
                  <a>ESTE MES</a>
                </Link>
              </li>
              <li>
                <Link href="/nosotros">
                  <a>NOSOTROS</a>
                </Link>
              </li>
            </ul>
            <div className={style.shoppinCar}>
              <Link href="/compras">
                <a>
                  <span>
                    {car.reduce((acc, info) => Number(acc + info.cantidad), 0)}
                  </span>
                  <Carshopping width={26} height={26} />
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <InfoBaner />
    </>
  );
};

export default Header;
