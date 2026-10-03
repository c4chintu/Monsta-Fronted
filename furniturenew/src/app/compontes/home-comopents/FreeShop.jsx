import { CircleCheck, Clock, Globe2 } from "lucide-react";
import React from "react";

export default function FreeShop() {
  return (
    <>
      <section className="border bg-[#F8F9F9] border-[#ccc] my-2">
        <div className="max-w-[1320px] mx-auto my-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 flex flex-col text-center items-center justify-center">
            <figure className="border-2 border-black h-[80px] w-[80px] flex items-center justify-center rounded-[50%] p-4 hover:text-[#C09578] hover:border-[#C09578]">
              <Globe2 />
            </figure>
            <article className="mt-2">
              <h2 className="text-2xl font-medium mt-2">Free Shipping</h2>
              <p className="mt-4 font-light text-[18px] ">Free shipping on all order</p>
            </article>
          </div>
          <div className="p-4   flex flex-col text-center items-center  justify-center">
            <figure className="border-2 border-black h-[80px] w-[80px] flex items-center justify-center rounded-[50%] p-4 hover:text-[#C09578] hover:border-[#C09578]">
              <CircleCheck />
            </figure>
            <article className="mt-2">
              <h2 className="text-2xl font-medium mt-2">Money Return</h2>
              <p className="mt-4 font-light text-[18px] ">Back guarantee under 7 days</p>
            </article>
          </div>
          <div className="p-4   flex flex-col text-center items-center  justify-center">
            <figure className="border-2 border-black h-[80px] w-[80px] flex items-center justify-center rounded-[50%] p-4 hover:text-[#C09578] hover:border-[#C09578]">
              <Clock />
            </figure>
            <article className="mt-2">
              <h2 className="text-2xl font-medium mt-2">Online Support</h2>
              <p className="mt-4 font-light text-[18px] ">Support online 24 hours a dayr</p>
            </article>
          </div>
        </div>

        
      </section>
    </>
  );
}
