import React from 'react';

const Soaps = () => {
    return (
        <div className='mt-[50px] md:mt-[150px] text-[#333333]'>
            <div className='md:w-[400px]  md:ms-20 px-5 md:px-0'>
                <h5 className=''>For the body
                </h5>
                <h1 className='text-3xl my-1'>An expression of care
                </h1>
                <p className='mt-4'>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.

                </p>
                <button className='mt-5'>See all Body Care
                </button>
            </div>

            <div className='md:flex md:ms-[500px]'>
                <div className=''>
                    <img className='md:w-[400px] ' src="https://i.postimg.cc/ZKtV8Chm/Screenshot-2023-09-01-at-10-56-17-PM.png" alt="" />
                    <div className='text-center'>
                        <h1>Nurture Bar Soap</h1>
                        <h1>Offers a mild yet effective cleanse</h1>
                    </div>
                </div>
                <div className=''>
                    <img className='md:w-[400px] ' src="https://i.postimg.cc/ZKtV8Chm/Screenshot-2023-09-01-at-10-56-17-PM.png" alt="" />
                    <div className='text-center'>
                        <h1>Nurture Bar Soap</h1>
                        <h1>Offers a mild yet effective cleanse</h1>
                    </div>
                </div>
                <div className=''>
                    <img className='md:w-[400px] ' src="https://i.postimg.cc/ZKtV8Chm/Screenshot-2023-09-01-at-10-56-17-PM.png" alt="" />
                    <div className='text-center'>
                        <h1>Nurture Bar Soap</h1>
                        <h1>Offers a mild yet effective cleanse</h1>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Soaps;