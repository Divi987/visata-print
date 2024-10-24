'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const [showHelp, setShowHelp] = useState(false);
    const [showCompany, setShowCompany] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('United States');

    const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany'];

    return (
      <footer className="text-white">
        {/* Upper section with gray background */}
        <div className="bg-gray-800 py-10 px-5">
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
            <div className="flex flex-col px-2">
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
                <Link href="#" className="text-gray-400 hover:text-white block">My Account</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Shipping</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Contact & Support</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">All Products</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Ideas & Advice</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Reseller Program</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Accessibility</Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col px-2">
              <h3
              className="font-semibold flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => setShowCompany(!showCompany)}>
                Our Company
                <span className='md:hidden right-2'>
                  {showCompany ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </span>
              </h3>
              <div className={`${showCompany ? 'block' : 'hidden'} md:block mt-2 space-y-2`}>
                <Link href="#" className="text-gray-400 hover:text-white block">About Us</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Careers</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Ambassador Program</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">For Investors</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">For Media</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Sustainability</Link>
                <Link href="#" className="text-gray-400 hover:text-white block">Do Not Sell or Share My Info</Link>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-gray-600 md:hidden flex flex-row justify-between items-center space-y-4">
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-white" />
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-white" />
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-white" />
              <FontAwesomeIcon icon={faPinterest} className="w-5 h-5 text-white" />
            </div>

            {/* Country Dropdown */}
            <div className="relative">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="bg-gray-800 border-none rounded-lg pl-4 pr-10 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
              >
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                {/* <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg> */}
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </div>
          </div>
        </div>

        {/* Lower section with black background */}
        <div className="bg-black py-8">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-6 md:flex-row flex-col-reverse md:space-y-0 md:justify-around">
            {/* Left section with legal links */}
            <div className="text-center md:text-left text-gray-400 text-sm mt-6 md:mt-0">
              <p>
                1.866.207.4955 <span className="mx-2">|</span>
                <Link href="#" className="hover:text-white">Home</Link> <span className="mx-2">|</span>
                <Link href="#" className="hover:text-white">Privacy and Cookie Policy</Link> <span className="mx-2">|</span>
                <Link href="#" className="hover:text-white">Terms and Conditions</Link> <span className="mx-2">|</span>
                <Link href="#" className="hover:text-white">Legal Notice</Link>
              </p>
              <p className="mt-2">
                A CIMPRESS company © 2001-2024 VistaPrint. All rights reserved.
              </p>
              <p className="mt-1">
                Unless stated otherwise, prices are exclusive of delivery and product options.
              </p>
            </div>

            {/* Payment methods */}
            <div className="flex justify-center space-x-4">
              <Image src="/images/mastercard.png" alt='Mastercard' height="40" width="40" />
              <Image src="/images/paypal.png" alt='PayPal' height="40" width="40" />
              <Image src="/images/visa.png" alt='Visa' height="40" width="40" />
            </div>

            {/* Social icons and country dropdown for desktop */}
            <div className="hidden md:flex items-center justify-center space-x-6">
              {/* Social Icons */}
              <div className="flex space-x-4">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-white" />
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-white" />
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-white" />
                <FontAwesomeIcon icon={faPinterest} className="w-5 h-5 text-white" />
              </div>

              {/* Country Dropdown */}
              <div className="relative">
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="text-gray-400 bg-gray-900 border-none rounded-lg pl-4 pr-10 py-2 text-sm appearance-none cursor-pointer focus:outline-none"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
