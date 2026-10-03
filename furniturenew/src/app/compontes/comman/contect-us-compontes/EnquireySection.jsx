"use client";
import axios from "axios";
import { Building2, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  let apiUrl = process.env.NEXT_PUBLIC_API_URL;
  let [loading, setloading] = useState(false);

  let saveEnquire = (e) => {
    setloading(true);
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    axios
      .post(`${apiUrl}contect/enquiry`, obj)
      .then((res) => res.data)
      .then((finallyRes) => {
        if (finallyRes.status) {
          setloading(false);
          e.target.reset();
          alert("Enquiry sumitted Successfully");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-10">Contact Us</h2>

          <div className="border-t border-gray-200">
            {/* Address */}
            <div className="flex items-center gap-4 py-6 border-b border-gray-200">
              <Building2 size={22} className="text-gray-600" />

              <p className="text-gray-700 text-lg">
                Address : Claritas est etiam processus dynamicus
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 py-6 border-b border-gray-200">
              <Phone size={22} className="text-gray-600" />

              <p className="text-gray-700 text-lg">98745612330</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 py-6 border-b border-gray-200">
              <Mail size={22} className="text-gray-600" />

              <p className="text-gray-700 text-lg">furniture@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl font-bold mb-10">Tell Us Your Question</h2>

          <form onSubmit={saveEnquire} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-2">
                Your Name (required)
              </label>

              <input
                type="text"
                placeholder="Name *"
                name="name"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2">
                Your Email (required)
              </label>

              <input
                type="email"
                placeholder="Email *"
                name="email"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black transition"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block font-semibold mb-2">
                Your Mobile Number (required)
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Mobile Number *"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-black transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2">Your Message</label>

              <textarea
                rows={7}
                name="message"
                placeholder="Message *"
                className="w-full border border-gray-300 px-5 py-4 resize-none outline-none focus:border-black transition"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-md hover:bg-gray-800 transition"
            >
              {loading ? (
                <>
                  Sending
                  <span className="flex gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
