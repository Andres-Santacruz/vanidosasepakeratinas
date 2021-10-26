import axios from "axios";
import Papa from "papaparse";

const EXCEL_URL = {
  Home: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=0&single=true&output=csv",
  Nuevos:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=0&single=true&output=csv",
  Carrusel:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=1833102332&single=true&output=csv",
  Nosotros:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=1727532824&single=true&output=csv",
  promociones:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=1186749551&single=true&output=csv",
};

export async function list(orden) {
  const peticion = EXCEL_URL[orden];
  return axios.get(peticion, { responseType: "blob" }).then((res) => {
    return new Promise((resolve, reject) => {
      Papa.parse(res.data, {
        header: true,
        complete: (results) => {
          const response = results.data;
          if (orden !== "Nuevos") {
            return resolve(response);
          } else if (orden === "Nuevos") {
            const fillterData = response.filter((obj) => obj.nuevo === "1");
            return resolve(fillterData);
          }
        },
        error: (err) => reject(err.message),
      });
    });
  });
}
