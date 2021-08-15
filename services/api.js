import axios from "axios";
import Papa from "papaparse";

const URL_INDEX =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=0&single=true&output=csv";
const URL_CARRUSEL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMghp3m4XnKhkTU4TcyEgTu_h0BC7UmL8f-x3_hsS-lSENtxM4ACjHwwRT-eE-cx_thC31A6y_1-5W/pub?gid=1833102332&single=true&output=csv";

export async function list(orden) {
  const peticion =
    (orden === "Home") | (orden === "Nuevos") ? URL_INDEX : URL_CARRUSEL;

  return axios.get(peticion, { responseType: "blob" }).then((res) => {
    return new Promise((resolve, reject) => {
      Papa.parse(res.data, {
        header: true,
        complete: (results) => {
          const response = results.data;
          if (orden === "Home" || orden === "Carrusel") {
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
