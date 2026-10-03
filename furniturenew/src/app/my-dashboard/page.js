import React from 'react'
import MainHeading from '../compontes/comman/MainHeading'
import DashboardPage from '../compontes/comman/my-dash-comonets/DeshSide';
export const metadata = {
  
};


export default function MyDeshboard() {
    metadata.title="My Deshbord"
    metadata.description="Home E-Commerce App for furniture details"
  return (
    <div >
        <MainHeading title={"My Dashboard"}/>
        <DashboardPage/>
    </div>
  )
}
