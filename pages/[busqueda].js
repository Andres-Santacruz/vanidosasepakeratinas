import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { list } from "../services/api";

const BusquedaScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //    router.replace("/", undefined);

    console.log("query 1 vez", router.query.q);
    if (router.query.q) {
      if (router.query.q.length < 3) {
        router.replace("/", "/");
      } else {
        list("Home").then((product) => {
          const busqueda = product.filter((p) => {
            return p.nombre
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u0301]/g, "")
              .includes(router.query.q.toLowerCase());
          });
          console.log(busqueda);
          setProducts(busqueda);
          setLoading(true);
        });
      }
    } else if (router.query.q === undefined) {
      router.replace("/", "/");
    }
    console.log("query fuera", router.query.q);
  }, [router.query]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1100px",
          marginTop: "0",
        }}
      >
        {products.map((product) => {
          return <ProductCard data={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default BusquedaScreen;
