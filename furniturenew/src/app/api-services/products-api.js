import axios from "axios";

let apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/web/";

export const getBaseUploadUrl = (backendPath, subfolder = "product") => {
  const baseOrigin = apiUrl.replace(/\/web\/?$/, "");
  if (!backendPath || (backendPath.includes("localhost:8000") && !apiUrl.includes("localhost:8000"))) {
    return `${baseOrigin}/uploads/${subfolder}/`;
  }
  return backendPath;
};

let getproducts = async () => {
  try {
    let res = await axios.get(`${apiUrl}home/all-products`);
    if (res.data?.status && res.data?.data && res.data.data.length > 0) {
      let path = getBaseUploadUrl(res.data.path, "product");
      return res.data.data.map((item) => ({
        id: item._id,
        title: item.name,
        price: item.price,
        category: item.parent?.name || "Furniture",
        thumbnail: path + item.image,
        images:
          item.gallery && item.gallery.length > 0
            ? path + item.gallery[0]
            : path + item.image,
        description: item.shortdescription || item.longdescription || "",
        stock: item.status ? "In Stock" : "Out of Stock",
        rating: 4.8,
      }));
    }
  } catch (err) {
    console.error("Backend products fetch error, fallback:", err.message);
  }

  return axios
    .get(`https://dummyjson.com/products`)
    .then((res) => res.data)
    .then((finellyRes) => finellyRes.products);
};

let getProDeatils = async (pid) => {
  try {
    let res = await axios.get(`${apiUrl}home/product-details/${pid}`);
    if (res.data?.status && res.data?.data) {
      let item = res.data.data;
      let path = getBaseUploadUrl(res.data.path, "product");
      return {
        id: item._id,
        title: item.name,
        price: item.price,
        category: item.parent?.name || "Furniture",
        thumbnail: path + item.image,
        images:
          item.gallery && item.gallery.length > 0
            ? path + item.gallery[0]
            : path + item.image,
        description: item.longdescription || item.shortdescription || "",
        stock: item.status ? "In Stock" : "Out of Stock",
        rating: 4.8,
      };
    }
  } catch (err) {
    console.error("Backend product detail error:", err.message);
  }

  return axios
    .get(`https://dummyjson.com/products/${pid}`)
    .then((res) => res.data);
};

export { getProDeatils, getproducts };
