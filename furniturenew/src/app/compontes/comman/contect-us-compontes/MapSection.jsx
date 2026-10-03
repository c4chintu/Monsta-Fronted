import React from "react";

export default function MapSection() {
  return (
    <section className="w-[1320px] border-t-2 m-auto border-[#ccc] ">
      <div className="w-full py-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3664769.885416234!2d73.55731900000002!3d26.233191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5b1dfafdd7%3A0xf992fd41c21a238e!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1784399445013!5m2!1sen!2sin"
           className="w-full"
          height={600}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
