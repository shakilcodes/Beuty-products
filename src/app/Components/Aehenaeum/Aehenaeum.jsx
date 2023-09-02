import React from 'react';

const Aehenaeum = () => {
    return (
        <div className='md:grid grid-cols-[500px_68rem] md:ms-20 justify-between  gap-10 mt-[50px] md:mt-[150px] text-[#333333]'>
            <div className='px-5 md:px-0'>
                <h1 className=''>The Athenaeum</h1>
                <h1 className='text-3xl my-5'>The Worm-Up</h1>
                <h1 className='mt-10'>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</h1>
                <p className='mt-10 border w-[300px] p-3 cursor-pointer'>Read more</p>
            </div>
            <div className='mt-10 md:mt-0'>
                <img className='md:w-full md:h-[65vh]' src="https://i.postimg.cc/Hk4Zs5jn/Aesop-Article-Summer-Skin-Care-2020-Mid-1-Desktop-2560x1440px-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Aehenaeum;