import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(https://images.summitmedia-digital.com/preview/images/2021/12/22/preview-beauty-awards-skincare-nm.jpg)] md:bg-[url(https://www.bwconfidential.com/wp-content/uploads/2020/02/unilever-to-review-beauty-brands.jpg)] h-[90vh] md:w-[100%] bg-no-repeat	bg-cover flex gap-20 pl-10 pt-[120px] text-black'>
                <h1 className='text-3xl hidden md:block'>GlamourGlow</h1>
                <div className='w-[400px] hidden md:block'>
                    <p>Bar Soaps</p>
                    <h3 className='text-3xl my-5'>A body care classic, reimagined</h3>
                    <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <button>Discover Bar Soaps</button>
                </div>
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