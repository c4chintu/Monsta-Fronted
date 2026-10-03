import axios from "axios";
import React, { useEffect, useState } from "react";

export default function EnquiryView() {
  let apiurl = import.meta.env.VITE_APIURLBACKEND;
  let [data, setdata] = useState([]);

  let getenquiryView=()=>{
    axios.get(`${apiurl}enquiry/view`)
    .then((res)=>res.data)
    .then((finallyRes)=>{
        if(finallyRes.status){
            setdata(finallyRes.data)
        }
    })
  }

  useEffect(()=>{
    getenquiryView()
  },[])


  return (
    <section className="w-full">
      <ul className="border-b flex gap-3 text-[18px] items-center px-5 py-2">
        <li className="hover:text-indigo-500">Home</li>
        <li>/</li>
        <li className="hover:text-indigo-500">Enquiry</li>
        <li>/</li>
        <li className="font-medium">View Enquiry</li>
      </ul>

      <div className="max-w-7xl m-auto mt-4 border border-[#ccc] rounded-t-[5px] bg-[#F1F5F9]">
        <div className="p-2 flex items-center justify-between">
          <h1 className="font-medium text-4xl">View Enquiry</h1>
        </div>
      </div>

      <div className="overflow-x-auto max-w-7xl border border-[#ccc] m-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="w-[100px] px-2 py-4">S. No.</th>
              <th className="px-2 py-4">Name</th>
              <th className="px-2 py-4">Email</th>
              <th className="px-2 py-4">Phone</th>
              <th className="px-2 py-4">Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((enquiry, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-4">{index + 1}</td>
                <td className="px-2 py-4">{enquiry.name}</td>
                <td className="px-2 py-4">{enquiry.email}</td>
                <td className="px-2 py-4">{enquiry.phone}</td>
                <td className="px-2 py-4">{enquiry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
