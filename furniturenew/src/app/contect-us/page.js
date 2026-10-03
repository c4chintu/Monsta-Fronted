import React from 'react'
import MainHeading from '../compontes/comman/MainHeading';
import MapSection from '../compontes/comman/contect-us-compontes/MapSection';
import ContactPage from '../compontes/comman/contect-us-compontes/EnquireySection';
export const metadata = {
  
};
export default function Contectus() {
    metadata.title="Contact-us E-Commeres"
  return (
    <div>
        <MainHeading title={'Contect us'}/>
        
        <MapSection/>
        <ContactPage/>
    </div>
  )
}
