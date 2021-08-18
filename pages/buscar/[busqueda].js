import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoaderProdcut from "../../components/LoaderProduct";
import ProductCard from "../../components/ProductCard";
import { list } from "../../services/api";

const BusquedaScreen = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    list("Home").then((datos) => {
      setData(datos);
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    if (router.query.q || router.query.busqueda) {
      setQuery(true);
    }
  }, [router.query, data]);

  useEffect(() => {
    if (router.query.q || router.query.q === "") {
      if (router.query.q.length < 3) {
        router.replace("/", undefined);
      } else {
        console.log(data);
        const busqueda = data.filter((p) => {
          return p.nombre
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u0301]/g, "")
            .replace(/ /g, "")
            .includes(router.query.q.toLowerCase().replace(/ /g, ""));
        });
        setProducts(busqueda);
      }
    } else if (router.query.q === undefined) {
      console.log(query);
      if (query) {
        router.replace("/nuevo");
      }
    }
  }, [query, router.query, data]);

  return (
    <>
      <Head>
        <title>Encuentra tu producto | Vanidosas Epa Keratinas</title>
        <link rel="icon" href="/logoicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "1600px",
            marginTop: "0",
          }}
        >
          {!loading && <LoaderProdcut uniqueKey="loaderProduct" />}
          {(products.length === 0) & loading ? (
            <p style={{ fontSize: "20px", margin: "20px auto" }}>
              No se encontraron resultados para:{" "}
              <span style={{ fontWeight: "600" }}>"{router.query.q}"</span>
            </p>
          ) : (
            products.map((product) => {
              return <ProductCard data={product} key={product.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BusquedaScreen;
