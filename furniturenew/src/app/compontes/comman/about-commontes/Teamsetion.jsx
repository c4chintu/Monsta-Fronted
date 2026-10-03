import React from "react";

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Priya Mehta",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Rohan Kapoor",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Neha Verma",
    role: "Support Head",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Teamsetion() {
  return (
    <section className="w-full bg-[#f8f5f0] py-14">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-amber-600">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#2f241d]">
            Meet Our Creative Team
          </h2>
          <p className="mt-4 text-[#717171] leading-7">
            Our team works together to design stylish, comfortable, and useful
            furniture for every home.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-md border border-[#e5ded4] overflow-hidden text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="h-[350] object-cover overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover hover:scale-115 transition duration-1000"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#2f241d]">
                  {member.name}
                </h3>
                <p className="mt-2 text-sm text-[#717171]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
