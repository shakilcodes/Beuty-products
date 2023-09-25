import React from 'react';

const PostPoo = () => {
    return (
        <div className='md:grid grid-cols-[68rem_500px] md:mr-20 justify-between  gap-10 mt-[50px] md:mt-[150px] text-[#333333]'>
            <div className=''>
                <img className='w-full h-[300px] md:h-[65vh]' src="https://7haircare.com/wp-content/uploads/2019/01/Shampoo-bowl-01.00_00_06_04.Still0031-1400x738.jpg" alt="" />
            </div>
            <div className='px-5 md:px-0'>
                <h1 className=''>For the Hair</h1>
                <h1 className='text-3xl my-5 font-bold'>Transform Your Tresses with Our Luxury Hair Care Collection</h1>
                <h1 className='mt-10'>Discover the secret to luscious locks and radiant hair with our meticulously crafted hair care products. Our luxurious collection is designed to pamper your strands, nourish your scalp, and unleash the full potential of your hair. Experience the ultimate in hair care innovation and let your mane steal the spotlight. Explore our range today and embark on a journey to hair perfection!</h1>
                <p className='mt-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Book an Appointment</p>
            </div>

        </div>
    );
};

export default PostPoo;