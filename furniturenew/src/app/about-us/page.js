import React from "react";
import Teamsetion from "../compontes/comman/about-commontes/Teamsetion";
import MainHeading from "../compontes/comman/MainHeading";
export const metadata = {
  
};

export default function Aboutus() {
  metadata.title="About-us"
  return (
    <main>
      <MainHeading title="About us"/>
      <Teamsetion />
    </main>
  );
}
