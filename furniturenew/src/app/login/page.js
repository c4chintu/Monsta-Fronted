import React from 'react'
import MainHeading from '../compontes/comman/MainHeading'
import LogInRegister from '../compontes/login-comopenets/loginRegister'
export const metadata = {
  
};


export default function Loginpage() {
     metadata.title="Login-Register Page"
  return (
  <section>
    <MainHeading title={"Login-Ragister"} />
    <LogInRegister/>
  </section>
  )
}
