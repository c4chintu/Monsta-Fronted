import axios from "axios";

let apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/web/";

export const getBaseUploadUrl = (backendPath, subfolder = "product") => {
  const baseOrigin = apiUrl.replace(/\/web\/?$/, "");
  if (!backendPath || (backendPath.includes("localhost:8000") && !apiUrl.includes("localhost:8000"))) {
    return `${baseOrigin}/uploads/${subfolder}/`;
  }
  return backendPath;
};

let ProductTabs = () => {
  return axios
    .get(`${apiUrl}home/products`)
    .then((res) => {
      let data = res.data;
      if (data && data.path) {
        data.path = getBaseUploadUrl(data.path, "product");
      }
      return data;
    })
    .catch((err) => ({ status: false, data: [] }));
};

let getAllProductsApi = () => {
  return axios
    .get(`${apiUrl}home/all-products`)
    .then((res) => {
      let data = res.data;
      if (data && data.path) {
        data.path = getBaseUploadUrl(data.path, "product");
      }
      return data;
    })
    .catch((err) => ({ status: false, data: [] }));
};

export { ProductTabs, getAllProductsApi };
