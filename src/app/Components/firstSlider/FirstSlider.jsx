'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const FirstSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    

    return (
        <main className='mt-[150px] mx-20 text-[#333333]'>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
               
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <p className=''>For the skin</p>
                    <h1 className='text-3xl my-4'>Attention for all types</h1>
                    <p className='mt-10'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                    <button className='mt-10'>See All Skin Care</button>

                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='grid justify-center'>
                        <img className='h-[400px] ' src="https://i.postimg.cc/t4Y85bty/Screenshot-2023-09-02-at-12-46-00-AM.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1>Lucent Facial Concetrate</h1>
                        <h1>A Vitamin C-rich Layering serum</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='grid justify-center'>
                        <img className='h-[400px]  ' src="https://i.postimg.cc/rppGWySC/Screenshot-2023-09-02-at-12-46-12-AM.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1>Lucent Facial Concetrate</h1>
                        <h1>A Vitamin C-rich Layering serum</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='grid justify-center'>
                        <img className='h-[400px] ' src="https://i.postimg.cc/k4vnmCpz/Screenshot-2023-09-02-at-12-46-49-AM.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1>Lucent Facial Concetrate</h1>
                        <h1>A Vitamin C-rich Layering serum</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='grid justify-center'>
                        <img className='h-[400px] ' src="https://i.postimg.cc/t4Y85bty/Screenshot-2023-09-02-at-12-46-00-AM.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1>Lucent Facial Concetrate</h1>
                        <h1>A Vitamin C-rich Layering serum</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className='grid justify-center'>
                        <img className='h-[400px] ' src="https://i.postimg.cc/t4Y85bty/Screenshot-2023-09-02-at-12-46-00-AM.png" alt="" />
                    </div>
                    <div className='text-center'>
                        <h1>Lucent Facial Concetrate</h1>
                        <h1>A Vitamin C-rich Layering serum</h1>
                    </div>
                </SwiperSlide>
                
            </Swiper>

<hr className='mt-[80px]' />
        </main>
    );
}
export default FirstSlider