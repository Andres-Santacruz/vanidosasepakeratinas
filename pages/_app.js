import { useEffect, useReducer } from "react";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "../components/AlertTemplate";

import Layout from "../components/Layout";
import { carContext } from "../context/carContext";
import { carReducer } from "../reducers/carReducer";
import { types as nombres } from "../reducers/types";
import "../styles/globals.css";

const options = {
  position: positions.TOP_CENTER,
  timeout: 1500,
  type: types.SUCCESS,
  offset: "10px",
  transition: transitions.SCALE,
};
const InitialStorage = () => [];

function MyApp({ Component, pageProps }) {
  const [car, dispatch] = useReducer(carReducer, [], InitialStorage);
  useEffect(() => {
    const dataInit = window.localStorage.getItem("Car");
    if (dataInit) {
      dispatch({
        type: nombres.ADD_CAR_LOCALS,
        payload: JSON.parse(dataInit),
      });
    }
  }, []);
  return (
    <carContext.Provider value={{ car, dispatch }}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertProvider>
    </carContext.Provider>
  );
}

export default MyApp;
