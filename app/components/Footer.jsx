'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {

    const [showHelp, setShowHelp] = useState(false);
    const [showCompany, setShowCompany] = useState(false);


  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <p className="text-xl font-light">You need it. We print it. You love it.</p>
          <p className="mt-2">
            VistaPrint is <a href="#" className="underline">here to help</a> every step of the way.
          </p>
          <div className='border-t border-gray-600 mt-10'></div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col">
          <h3 
          className="font-semibold flex justify-between items-center cursor-pointer md:cursor-default"
          onClick={() => setShowHelp(!showHelp)}>
            Let Us Help
            <span className='md:hidden'>{showHelp ? '-' : '+'}</span>
          </h3>
          <div className={`${showHelp ? 'block' : 'hidden'} md:block mt-2 space-y-2`}>
            <a href="#" className="text-gray-400 hover:text-white block">My Account</a>
            <a href="#" className="text-gray-400 hover:text-white block">Shipping</a>
            <a href="#" className="text-gray-400 hover:text-white block">Contact & Support</a>
            <a href="#" className="text-gray-400 hover:text-white block">All Products</a>
            <a href="#" className="text-gray-400 hover:text-white block">Ideas & Advice</a>
            <a href="#" className="text-gray-400 hover:text-white block">Reseller Program</a>
            <a href="#" className="text-gray-400 hover:text-white block">Accessibility</a>
          </div>
          
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <h3
          className="font-semibold flex justify-between items-center cursor-pointer md:cursor-default"
          onClick={() => setShowCompany(!showCompany)}>
            Our Company
            <span className='md:hidden'>{showHelp ? '-' : '+'}</span>
          </h3>
          <div className={`${showCompany ? 'block' : 'hidden'} md:block mt-2 space-y-2`}>
            <a href="#" className="text-gray-400 hover:text-white block">About Us</a>
            <a href="#" className="text-gray-400 hover:text-white block">Careers</a>
            <a href="#" className="text-gray-400 hover:text-white block">Ambassador Program</a>
            <a href="#" className="text-gray-400 hover:text-white block">For Investors</a>
            <a href="#" className="text-gray-400 hover:text-white block">For Media</a>
            <a href="#" className="text-gray-400 hover:text-white block">Sustainability</a>
            <a href="#" className="text-gray-400 hover:text-white block">Do Not Sell or Share My Info</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="col-span-1 md:col-span-4 mt-10 border-t border-gray-600 pt-5 text-sm">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between">
            {/* Links Section */}
            <div className="mb-3 md:mb-0 flex space-x-4">
                <a href="#" className="hover:text-gray-400 underline">1.866.707.4955</a> 
                <a href="#" className="hover:text-gray-400 underline"> Home</a>  
                <a href="#" className="hover:text-gray-400 underline">Privacy and Cookie Policy</a>   
                <a href="#" className="hover:text-gray-400 underline">Terms and Conditions</a>
                <a href="#" className="hover:text-gray-400 underline">Legal Notice</a>
            </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center mt-5">
         {/* Copyright Section */}
         <div className="text-xs text-gray-400 mb-5 md:mb-0">
            <p>A CIMPRESS company © 2001–2024 VistaPrint. All rights reserved.</p>
            <p>Unless stated otherwise, prices are exclusive of delivery and product options.</p>
        </div>

        {/* Payment and Social Icons */}
            {/* Payment Options in the Center */}
            <div className="flex justify-center space-x-4 mb-5 md:mb-0">
                <Image src="/images/mastercard.png" alt='Mastercard' height="40" width="40" />
                <Image src="/images/paypal.png" alt='PayPal' height="40" width="40" />
                <Image src="/images/visa.png" alt='Visa' height="40" width="40" />
            </div>

            {/* Social Media Icons on the Right */}
            <div className="flex space-x-4">
                <FontAwesomeIcon icon={faFacebook} className="w-8 text-white" />
                <FontAwesomeIcon icon={faInstagram} className="w-8 text-white" />
                <FontAwesomeIcon icon={faTwitter} className="w-8 text-white" />
                <FontAwesomeIcon icon={faPinterest} className="w-8 text-white" />
            </div>
        </div>
    </div>     
      </div>
    
    </footer>
  );
};

export default Footer