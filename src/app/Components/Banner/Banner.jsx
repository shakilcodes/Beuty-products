import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(https://images.summitmedia-digital.com/preview/images/2021/12/22/preview-beauty-awards-skincare-nm.jpg)] md:bg-[url(https://i.postimg.cc/ZYBRnjmz/Wallpaper.jpg)] h-[70vh] md:w-[100%] bg-no-repeat	bg-cover flex gap-20 pl-10 pt-[120px] text-white'>
                <h1 className='text-5xl hidden md:block'>GlamourGlow</h1>
                <div className='w-[500px] hidden md:block'>
                    <h3 className='text-6xl font-bold'>A body care classic, reimagined</h3>
                    <p className='my-8 text-xl'>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <p className='mt-10 border w-[300px] p-3 cursor-pointer hover:bg-black hover:text-white text-xl font-semibold bg-black bg-opacity-75 flex items-center gap-8'>Discover more <AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></p>                </div>
            </div>
            <div>

            </div>
            <div className='bg-[#333333] md:hidden block text-white py-10'>
                <div className='block mt-[50px]  px-5 md:px-0'>
                    <div className=''>
                        <p>Bar Soaps</p>
                        <h3 className='text-3xl my-5'>A body care classic, reimagined</h3>
                        <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                        <p className='mt-10 border w-[300px] p-3 cursor-pointer'>Discover Bar Soaps</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;