
import React from 'react';

const OffSection = () => {
    return (
        <div className='mt-[150px] grid grid-cols-3 md:mx-20 gap-20'>
            <div className='flex justify-center col-span-2'>
                <img src="https://as2.ftcdn.net/v2/jpg/02/10/41/17/1000_F_210411759_54AGM1ZMiqwijBnOMWAQQpT2j1Waxa9s.jpg" alt="" />
            </div>
            <div className='px-5 md:px-0 '>
                <h1 className=''>Our Special Offer</h1>
                <h1 className='text-3xl my-5 font-bold'> Summer Sizzle Sale! </h1>
                <h1 className='mt-10'>Embrace the heat with our scorching Summer Sizzle Sale! Dive into the season of sunshine with irresistible deals on all your favorite beauty and self-care products. From skincare essentials to luxurious fragrances, we've got your summer glow covered. Don't miss out on these hot savings—shop now and shine brighter all summer long!"</h1>
                <p className='mt-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Book an Appointment</p>
            </div>
        </div>
    );
};

export default OffSection;