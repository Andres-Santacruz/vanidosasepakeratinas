import { useRouter } from "next/router";
import { useState } from "react";
import style from "../styles/Header.module.css";

import LoupeIcon from "./icons/LoupeIcon";

const FormBusqueda = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length > 2) {
      router.push(`/bucar?q=${value}`);
    }
  };

  return (
    <div className={style.contentForm}>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <input
          className={style.search_input}
          type="text"
          placeholder="Buscar productos"
          value={value}
          onChange={handleChange}
        />
        <button className={style.btnLupa} type="submit">
          {/* <img className={style.loupeIcon} src="./loupe.svg" /> */}
          <LoupeIcon />
        </button>
      </form>
    </div>
  );
};

export default FormBusqueda;
