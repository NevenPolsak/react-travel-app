import React from 'react'
import Navbar from './../components/Navbar';
import HeroImage from '../components/HeroImage';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage heading="CONTACT" text="Contact React Travel"/>
      <Form/>
    </div>
  )
}

export default Contact
