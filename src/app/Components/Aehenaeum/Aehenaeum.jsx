import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Aehenaeum = () => {
    return (
        <div className='lg:grid md:px-10 lg:px-0 grid-cols-[500px_68rem] lg:ms-20 justify-between  gap-10 mt-[50px] md:mt-[150px] text-[#333333]'>
            <div className='px-5 md:px-0'>
                <h1 className=''>For the Skin Care</h1>
                <h1 className='text-3xl my-5 font-bold'>Transform Your Skin with Our Luxury Skincare Collection.</h1>
                <h1 className='mt-10'>Experience the pinnacle of skincare luxury with our meticulously curated collection. Our skincare products are crafted to rejuvenate, hydrate, and enhance the natural beauty of your skin. Immerse yourself in the world of exquisite self-care and discover the radiant, healthy complexion you deserve.</h1>
                <p className='mt-10 mb-10 lg:mb-0  border w-[300px] p-3 cursor-pointer hover:bg-gray-200 flex items-center gap-8 '>Find Skin care Products <AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></p>
            </div>
            <div className='mt-10 md:mt-0'>
                <img className='md:w-full md:h-[65vh] rounded-xl' src="https://bocabeautyacademy.edu/wp-content/uploads/2019/09/skin-care-hero.jpg" alt="" />
            </div>
        </div>
    );
};

export default Aehenaeum;