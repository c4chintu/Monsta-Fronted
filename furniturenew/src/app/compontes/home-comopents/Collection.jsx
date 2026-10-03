import React from "react";

export default function Collection() {
  return (
    <section className="w-full p-5">
      <div className="max-w-[1320px] m-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="overflow-hidden relative">
          <div
            className=" h-[250px] sm:h-[300px] hover:scale-110 duration-1000 "
            style={{
              backgroundImage:
                "url(https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className=" p-5 absolute top-5 ">
            <p>Design Creative</p>
            <h2 className="font-medium text-2xl ">Chair Collection</h2>
          </div>
        </div>
        <div className="overflow-hidden relative  ">
          <div
            className=" h-[250px] sm:h-[300px] hover:scale-110 duration-1000 "
            style={{
              backgroundImage:
                "url(https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="text-black p-5 absolute top-5">
            <p>Bestselling Products</p>
            <h2 className="font-medium text-2xl ">Chair Collection</h2>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div
            className=" h-[250px] sm:h-[300px] hover:scale-110 duration-1000 "
            style={{
              backgroundImage:
                "url(https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className=" p-5 absolute top-5">
            <p>Onsale Products</p>
            <h2 className="font-medium text-2xl ">Chair Collection</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
