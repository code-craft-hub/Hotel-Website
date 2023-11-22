import React from 'react';

import LogoWhite from '../assets/img/logo-white.svg'
const Footer = () => {
  return <footer className="bg-primary py-12">
    <div className='container mx-auto text-white flex justify-between'>
      {/* Logo */}
      <img src={LogoWhite} alt="" />
      <p className="bg-black">Copyright &copy; 2023. All rights reserved <b className='text-black'> KACHI </b>.</p>
    </div>
  </footer>;
};

export default Footer;
