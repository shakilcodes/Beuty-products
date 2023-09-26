
import React from 'react';

const DownloadOurApps = () => {
    return (
        <div className='mt-[150px] lg:grid grid-cols-3 md:px-10 lg:mx-20 gap-20'>
            <div className='flex justify-center col-span-2'>
                <img src="https://scrantonsbdc.com/wp-content/uploads/2014/08/new-app-banner-slider-1024x300.jpg" alt="" />
            </div>
            <div className='px-5 md:px-0 '>
                <h1 className='mt-10 lg:mt-0'>Our mobile app</h1>
                <h1 className='text-3xl my-5 font-bold'>Download Our Mobile Apps</h1>
                <h1 className='mt-10'>Stay connected with us on the go! Download our mobile apps to access a world of beauty and self-care at your fingertips. Join our mobile community today and elevate your beauty routine with just a tap. Download now and unlock the power of convenience and beauty at your command!</h1>
                <p className='mt-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Get Our App</p>
            </div>
        </div>
    );
};

export default DownloadOurApps;