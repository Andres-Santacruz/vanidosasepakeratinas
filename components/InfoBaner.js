import Link from "next/link";
const color = "5c241c";
const InfoBaner = () => {
  return (
    <section>
      <div className="contenedor">
        <div className="div_item">
          <Link href={"/ayuda"}>
            <a>
              <img
                src={`https://icongr.am/fontawesome/comments.svg?size=40&color=${color}`}
              />
              <span>¿Necesitas Ayuda?</span>
            </a>
          </Link>
        </div>
        <div className="div_item">
          <Link href={"/nosotros#ubicacion"}>
            <a>
              <img
                src={`https://icongr.am/fontawesome/truck.svg?size=40&color=${color}`}
              />
              <span> Envios a todo Colombia</span>
            </a>
          </Link>
        </div>
        <div className="div_item">
          <Link href={"/mayoristas"}>
            <a>
              <img
                src={`https://icongr.am/material/cash-usd-outline.svg?size=40&color=${color}`}
              />
              <span>Conviertete en Mayorista</span>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: var(--primary);
        }
        .contenedor {
          border: solid #f7e3d7;
          border-width: 1px 0px 0px 0px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin: auto;
          flex-wrap: wrap;
          max-width: 1400px;
        }
        .div_item {
          padding: 15px 5px;
        }
        .div_item,
        .div_item > a {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        img {
          width: 30px;
        }
        span {
          color: #5c241c99;
          margin-left: 5px;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 13px;
        }
        @media screen and (max-width: 700px) {
          span {
            margin-left: 5px;
            font-size: 14px;
          }
          img {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default InfoBaner;
