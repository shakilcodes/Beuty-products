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

const ThirdSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;



    return (
        <main className='mt-[150px] mx-20 grid grid-cols-5 text-[#333333]'>
            <div>
                <h1 className='text-2xl'>Store locator</h1>
                <p className='my-5'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                <p className='mt-10 border w-[300px] p-3 cursor-pointer'>Find a Nearby Store</p>
            </div>
            <div className='col-span-4'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    centeredSlides={false}
                    spaceBetween={30}

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='h-[500px] ' src="https://i.postimg.cc/6Q3MLfdP/Screenshot-2023-09-02-at-1-15-10-AM.png" alt="" />
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
            </div>


        </main>
    );
}
export default ThirdSlider