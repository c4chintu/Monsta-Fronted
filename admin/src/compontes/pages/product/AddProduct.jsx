import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";
import { useParams } from "react-router";
import Select from "react-select";
import { toast } from "react-toastify";

export default function AddProduct() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [parnet, setparent] = useState([]);
  let [subparent, setsubparent] = useState([]);
  let [subsubparent, setsubsubparent] = useState([]);
  let [colordata, setColorData] = useState([]);
  let [materialdata, setMaterialData] = useState([]);
  let [error, seterror] = useState(null);
  let [getEDit, setGetEDit] = useState(null);
  let [imagePreview, setPreviewImage] = useState("");
  let [galleryPreview, setGalleryImage] = useState([]);
  let { id } = useParams();
  let [data, setdata] = useState([]);
  let [path, setpath] = useState("");
  let [selectcolos, setselectcolos] = useState([]);
  let [selectmaterail, setselectmaterail] = useState([]);

  let savedata = (e) => {
    e.preventDefault();
    let formdata = new FormData(e.target);

    formdata.append(
      "color",
      JSON.stringify(selectcolos.map((obj) => obj.value)),
    );
    formdata.append(
      "material",
      JSON.stringify(selectmaterail.map((obj) => obj.value)),
    );

    if (id) {
      // updata
        let formdata = new FormData(e.target);
      axios
        .put(`${apiurl}product/update/${id}`, formdata)
        .then((res) => res.data)
        .then((finallyRes) => {
          if (finallyRes.status) {
            seterror(null);
            toast.success(finallyRes.message);
            seterror(finallyRes.error);
          } else {
            toast.error(finallyRes.message);
          }
        });
    } else {
      axios
        .post(`${apiurl}product/create`, formdata)
        .then((res) => res.data)
        .then((finellyRes) => {
          if (finellyRes.status) {
            seterror(null);
            toast.success(finellyRes.message);
          } else {
            seterror(finellyRes.data);
          }
        });
    }
  };

  let getCatparent = () => {
    axios
      .get(`${apiurl}product/parent`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setparent(finellyRes.data);
      });
  };

  let getSubCatparent = (event) => {
    let parentId = event.target.value;
    axios
      .get(`${apiurl}product/subparent/${parentId}`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setsubparent(finellyRes.data);
      });
  };

  // edit krte time phle se sub category selected rhe...
  let getSubCatparentEdit = (parentId) => {
    axios
      .get(`${apiurl}product/subparent/${parentId}`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setsubparent(finellyRes.data);
      });
  };

  // sub sub onchange par data dikhna....

  let getsubSubCatparent = (event) => {
    let subcatId = event.target.value;
    axios
      .get(`${apiurl}product/subsubcategoryparent/${subcatId}`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setsubsubparent(finellyRes.data);
      });
  };

  // edit krte time phle se  subsub category selected rhe...
  let getsubSubCatparentEdit = (subcatId) => {
    axios
      .get(`${apiurl}product/subsubcategoryparent/${subcatId}`)
      .then((res) => res.data)
      .then((finellyRes) => {
        setsubsubparent(finellyRes.data);
      });
  };

  let getcolors = () => {
    axios
      .get(`${apiurl}product/colors`)
      .then((res) => res.data)
      .then((finellyRes) => {
        // mulitpal data select karne kai liye....
        let selecetcolor = finellyRes.data.map((obj) => {
          return {
            value: obj._id,
            label: obj.name,
          };
        });
        // console.log(selecetcolor);

        setColorData(selecetcolor);
      });
  };

  let getmaterial = () => {
    axios
      .get(`${apiurl}product/materials`)
      .then((res) => res.data)
      .then((finellyRes) => {
        let selectmaterail = finellyRes.data.map((obj) => {
          return {
            value: obj._id,
            label: obj.name,
          };
        });
        setMaterialData(selectmaterail);
      });
  };

  let previewImage = (e) => {
    let imageFile = e.target.files[0];
    if (imageFile) {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      setPreviewImage(URL.createObjectURL(imageFile));
    }
  };

  let preGallery = (e) => {
    galleryPreview.forEach((preview) => URL.revokeObjectURL(preview));
    let galleryFiles = Array.from(e.target.files);
    setGalleryImage(galleryFiles.map((file) => URL.createObjectURL(file)));
  };

  let getProductDetails = () => {
    axios
      .get(`${apiurl}product/details/${id}`)
      .then((res) => res.data)
      .then((finellyRes) => {
        if (finellyRes.status) {
          setdata(finellyRes.data);
          setpath(finellyRes.path);
          getSubCatparentEdit(finellyRes.data.parent._id);
          getsubSubCatparentEdit(finellyRes.data.subparent._id);

          let Convertcolor = finellyRes.data.color.map((obj) => {
            return {
              value: obj._id,
              label: obj.name,
            };
          });
          setselectcolos(Convertcolor);

          let Convertmaterial = finellyRes.data.material.map((obj) => {
            return {
              value: obj._id,
              label: obj.name,
            };
          });
          setselectmaterail(Convertmaterial);

          setPreviewImage(finellyRes.path + finellyRes.data.image);

          setGalleryImage(
            finellyRes.data.gallery.map((ImgName) => finellyRes.path + ImgName),
          );
        }
      });
  };

  useEffect(() => {
    getCatparent();
    getcolors();
    getmaterial();
    if (id) {
      getProductDetails();
    } else {
      setdata(null);
      setselectcolos([]);
      setselectmaterail([]);
      setPreviewImage("");
      setGalleryImage([]);
    }
  }, [id]);
  return (
    <section className="w-full">
      <div className="overflow-y-scroll h-screen">
        <ul className="border-b sticky top-0 bg-white flex gap-3 text-[18px] items-center  px-5  py-2">
          <li className="hover:text-indigo-500">Home</li>
          <li>/</li>
          <li className="hover:text-indigo-500">Product</li>
          <li>/</li>
          <li className="font-medium">Add Product</li>
        </ul>
        <div className="w-7xl m-auto rounded-[10px] my-5 shadow-around ">
          <h2 className="bg-[#574CFB] p-2 text-white  rounded-t-[10px] text-2xl ">
            Add New Product
          </h2>
          <div className="px-4 py-6 grid  ">
            <form onSubmit={savedata}>
              <div className=" grid grid-cols-3 gap-4">
                <div>
                  <label> Parent Category</label>
                  <select
                    onChange={getSubCatparent}
                    name="parent"
                    // id="subCategory"
                    className="mt-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
                  >
                    <option value=""> Select Category </option>
                    {parnet.map((obj, index) => {
                      return (
                        <option
                          key={index}
                          selected={obj._id == data?.parent?._id}
                          value={obj._id}
                        >
                          {obj.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label>Sub Category</label>
                  <select
                    name="subparent"
                    onChange={getsubSubCatparent}
                    className="mt-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
                  >
                    <option value=""> Select Sub Category</option>
                    {subparent.map((obj, index) => {
                      return (
                        <option
                          key={index}
                          selected={obj._id == data?.subparent?._id}
                          value={obj._id}
                        >
                          {obj.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <label>Sub Sub Category</label>

                  <select
                    name="subsubparent"
                    className="mt-2 w-full py-3 px-2 border border-[#ccc] rounded-[10px] "
                  >
                    <option value=""> Select sub Sub Category</option>
                    {subsubparent.map((obj, index) => {
                      return (
                        <option
                          key={index}
                          selected={obj._id == data?.subsubparent?._id}
                          value={obj._id}
                        >
                          {obj.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className=" mt-4 grid grid-cols-4 gap-4">
                <div>
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={data?.name}
                    placeholder="Enter product name"
                    className="mt-2 w-full p-2 border border-[#ccc] rounded-[10px] "
                  />
                </div>
                <div>
                  <label> Product Type</label>
                  <select
                    name="productType"
                    className="mt-2 w-full p-2 border border-[#ccc] rounded-[10px] "
                  >
                    <option value="">Select Product Type</option>
                    <option value="1" selected={data?.productType == 1}>
                      Featured
                    </option>
                    <option value="2" selected={data?.productType == 2}>
                      New Arrivals
                    </option>
                    <option value="3" selected={data?.productType == 3}>
                      On Sale
                    </option>
                  </select>
                </div>
                <div>
                  <label>Order</label>
                  <input
                    type="number"
                    placeholder="Enter order"
                    required
                    defaultValue={data?.order}
                    name="order"
                    className="mt-2 w-full p-2 border border-[#ccc] rounded-[10px] "
                  />
                </div>
                <div>
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="Enter Price"
                    required
                    defaultValue={data?.price}
                    name="price"
                    className="mt-2 w-full p-2 border border-[#ccc] rounded-[10px] "
                  />
                </div>

                <div>
                  <label>colors</label>

                  <Select
                    options={colordata}
                    isMulti={true}
                    value={selectcolos}
                    onChange={setselectcolos}
                  />
                </div>
                <div>
                  <label> Materials</label>
                  <Select
                    options={materialdata}
                    isMulti={true}
                    value={selectmaterail}
                    onChange={setselectmaterail}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label>Short Description</label>
                <textarea
                  name="shortdescription"
                  defaultValue={data?.shortdescription}
                  placeholder="Enter short description"
                  className="mt-2 w-full p-2 border border-[#ccc] rounded-[10px]"
                ></textarea>
              </div>
              <div className="mt-4">
                <label>Description</label>
                <textarea
                  name="longdescription"
                  defaultValue={data?.longdescription}
                  placeholder="Enter description"
                  className="mt-2 h-30 w-full p-2 border border-[#ccc] rounded-[10px]"
                ></textarea>
              </div>

              <div className="my-4">
                <h2 className="font-medium">Image</h2>
              </div>
              <div className="flex mb-6 flex-col">
                <label className="block mb-2 text-md font-medium text-gray-700">
                  Image
                </label>
                <div className="relative w-60 h-60 border border-slate-200 rounded-lg overflow-hidden shadow bg-slate-100">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Product preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full overflow-hidden bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-4">
                      <div className="absolute inset-0 bg-slate-300 animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.8s_linear_infinite]" />
                      <div className="relative z-10 flex flex-col items-center gap-3">
                        <FaRegImage className="text-slate-600" size={55} />
                        <div className="w-28 h-3 bg-slate-400 rounded-full" />
                        <div className="w-20 h-3 bg-slate-400 rounded-full" />
                      </div>
                    </div>
                  )}
                  <input
                    onChange={previewImage}
                    type="file"
                    name="image"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex mb-6 flex-col">
                <label className="block mb-2 text-md font-medium text-gray-700">
                  Gallery
                </label>
                <div className="relative w-full min-h-44 border border-slate-200 rounded-lg overflow-hidden shadow bg-slate-100">
                  {galleryPreview.length ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-3">
                      {galleryPreview.map((preview, index) => {
                        return (
                          <div
                            key={preview}
                            className="h-32 rounded-lg overflow-hidden border border-slate-200 bg-white"
                          >
                            <img
                              src={preview}
                              name="gallery"
                              alt={`Gallery preview ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="min-h-44 bg-slate-200 rounded-lg flex flex-col items-center justify-center gap-4">
                      <FaRegImage className="text-slate-600" size={55} />
                      <div className="w-32 h-3 bg-slate-400 rounded-full" />
                      <div className="w-24 h-3 bg-slate-400 rounded-full" />
                    </div>
                  )}
                  <input
                    onChange={preGallery}
                    type="file"
                    name="gallery"
                    accept="image/*"
                    multiple
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="mt-3 cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-6 py-2.5 shadow-sm transition-all"
                >
                  {id ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
