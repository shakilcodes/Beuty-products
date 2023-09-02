import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='bg-[url(https://i.postimg.cc/tg9pcqQn/Screenshot-2023-09-01-at-10-37-28-PM.png)] lg:h-[50vh] w-[100%] bg-no-repeat	bg-cover flex gap-20 pl-20 items-center text-white'>
                <h1 className='text-3xl'>Aesop</h1>
                <div className='w-[400px]'>
                    <p>Bar Soaps</p>
                    <h3 className='text-3xl my-5'>A body care classic, reimagined</h3>
                    <p>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                    <button>Discover Bar Soaps</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;