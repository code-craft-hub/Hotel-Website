import React from 'react';

import LogoWhite from '../assets/img/logo-white.svg'
const Footer = () => {
  return <footer className="bg-primary py-12">
    <div className='container mx-auto flex justify-between'>
      {/* Logo */}
      <img src={LogoWhite} alt="" />
      Copyright &copy; 2023. All rights reserved - <a href="https://codecrafthub.tech" className='text-accent'> CodeCraftHub </a>.
    </div>
  </footer>;
};

export default Footer;
