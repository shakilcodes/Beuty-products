import React from 'react';

const PostPoo = () => {
    return (
        <div className='grid grid-cols-[68rem_500px] mr-20 justify-between  gap-10 mt-[150px] text-[#333333]'>
            <div className=''>
                <img className='w-full h-[65vh]' src="https://i.postimg.cc/wvdDt4Pd/Screenshot-2023-09-01-at-11-20-12-PM.png" alt="" />
            </div>
            <div className=''>
                <h1 className='text-3xl my-5'>Post-Poo Drops has returned</h1>
                <h1 className='mt-10'>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</h1>
                <p className='mt-10 border w-[300px] p-3 cursor-pointer'>Discover Post Poo drops</p>
            </div>

        </div>
    );
};

export default PostPoo;