'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Footer = () => {

    const [showHelp, setShowHelp] = useState(false);
    const [showCompany, setShowCompany] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('United States');

    const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany'];


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
            <span className='md:hidden'>
              {showHelp ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
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
            <span className='md:hidden'>
              {showCompany ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
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

        {/* Lower section */}
      <div className="col-span-1 md:col-span-4 mt-10 border-t border-gray-600 pt-5 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row flex-col-reverse justify-between items-center py-6">
        {/* Left section with legal links */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">1.866.207.4955 <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Home</a> <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Privacy and Cookie Policy</a> <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Terms and Conditions</a> <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Legal Notice</a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            A CIMPRESS company © 2001-2024 VistaPrint. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Unless stated otherwise, prices are exclusive of delivery and product options.
          </p>
        </div>

        {/* Payment methods */}
        <div className="flex space-x-4 mb-4 md:mb-0">
            <Image src="/images/mastercard.png" alt='Mastercard' height="40" width="40" />
            <Image src="/images/paypal.png" alt='PayPal' height="40" width="40" />
            <Image src="/images/visa.png" alt='Visa' height="40" width="40" />
        </div>

        {/* Social icons and country dropdown */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Social Icons */}
          <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} className="w-8 text-white" />
              <FontAwesomeIcon icon={faInstagram} className="w-8 text-white" />
              <FontAwesomeIcon icon={faTwitter} className="w-8 text-white" />
              <FontAwesomeIcon icon={faPinterest} className="w-8 text-white" />
          </div>

          {/* Country Dropdown */}
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="text-gray-400 bg-gray-900 mb-4 border-none rounded-lg pl-4 pr-10 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
        </div>
      </div>
      </div>
    
    </footer>
  );
};

export default Footer