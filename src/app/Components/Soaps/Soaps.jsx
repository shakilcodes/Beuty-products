import React from 'react';

const Soaps = () => {
    return (
        <div className='mt-[50px] md:mt-[150px] text-[#333333]'>
            <div className='md:w-[400px]  md:ms-20 px-5 md:px-0'>
                <h5 className=''>For the body
                </h5>
                <h1 className='text-3xl my-1 font-bold'>An expression of care
                </h1>
                <p className='mt-4'>Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.

                </p>
                <button className='mt-5'>See all Body Care
                </button>
            </div>

            <div className='grid grid-cols-3 items-center md:ms-[400px]'>
                <div className=''>
                    <img className='md:w-[400px] ' src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--LP0100_PM2_Front%20view.jpg?wid=750&hei=870" alt="" />
                    <div className='text-center'>
                        <h1>Nurture Bar Soap</h1>
                        <h1>Offers a mild yet effective cleanse</h1>
                    </div>
                </div>
                <div className=''>
                    <img className='md:w-[400px] ' src="https://i2-prod.rsvplive.ie/incoming/article20175209.ece/ALTERNATES/s615b/0_JENNY-GLOW.jpg" alt="" />
                    <div className='text-center'>
                        <h1>Nurture Bar Soap</h1>
                        <h1>Offers a mild yet effective cleanse</h1>
                    </div>
                </div>
                <div className=''>
                    <img className='md:w-[400px] ' src="https://static1.sabinacdn.com/12216-thickbox_default/mon-guerlain-bloom-of-rose.jpg" alt="" />
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