'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='bg-gray-100 w-full'>
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h2>
      <details className="mb-4" open={activeIndex === 0}>
        <summary className="p-2 font-semibold cursor-pointer flex items-center justify-between">
            Can I get free shipping with VistaPrint?
            <span>
            {activeIndex === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </span>
        </summary>
        <div className="p-2 text-black">
        Yes – you’ll get FREE standard shipping on orders of $100+ (excluding Alaska, Hawaii and Puerto Rico). 
        These shipping savings are available whether you’re shopping for custom marketing for your small 
        business or creating holiday cards or wall art for loved ones.
        </div>
      </details>
      <details className="mb-4" open={activeIndex === 0}>
        <summary className="p-2 font-semibold cursor-pointer flex items-center justify-between">
            Does VistaPrint offer promo codes?
            <span>
            {activeIndex === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </span>
        </summary>
        <div className="p-2 text-black">
        Yes, we often offer special VistaPrint coupons – we refer to them as “codes” on our site. You’ll 
        typically find codes on our homepage, on our Deals page and in emails.
        </div>
      </details>
      <details className="mb-4" open={activeIndex === 0}>
        <summary className="p-2 font-semibold cursor-pointer flex items-center justify-between">
            How do I apply a VistaPrint discount code?
            <span>
            {activeIndex === 0 ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </span>
        </summary>
        <div className="p-2 text-black">
        If you have one of our promotional codes, you’ll be able to use it after you’ve designed your products 
        and added them to your basket. In your personalized My basket, we’ll ask if you have a code to enter. 
        Just type it in and press “Apply” – we’ll take care of the rest.
        </div>
      </details>
      {/* Add more details elements for other FAQs */}
    </div>
    </div>
  );
};

export default Faq;