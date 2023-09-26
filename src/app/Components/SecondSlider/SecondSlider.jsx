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

const SecondSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;



    return (
        <main className=' mt-[50px] md:mt-[150px]  md:mx-20 text-[#333333]'>
            <div className='hidden lg:block'>
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
                        <div className='md:ms-20'>
                            <p className=''>For the Home</p>
                            <h1 className='text-3xl my-4 font-bold'>Elevate Your Living Space with Our Home Collection</h1>
                            <p className='mt-10'>"Make your home a sanctuary of style and comfort with our carefully curated Home Collection. From chic decor accents to functional essentials, we offer a range of products to transform your living space into a haven of beauty and functionality. Explore our collection and find the perfect pieces to reflect your unique style and elevate your home to new heights of elegance."</p>
                            <p className='mt-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Explore Our Products</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/v/a/vaseline-intensive-care-cocoa-glow-body-lotions---400ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px]  ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/s/t/st._ives_rose_water_aloe_vera_refreshing_body_wash_473ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/3/6/3600541936782.png" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/e/d/ed_hardy_by_christian_audigier_-_perfume_for_men_-_3.4oz_100ml_-_edt_.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/b/e/beauty_formulas_brightening_vitamin_c_daily_facial_wash_150ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='hidden md:block lg:hidden'>
                <div className='px-5 md:px-0'>
                    <p>For the Home</p>
                    <h1 className='text-3xl my-4 font-bold'>Domestic pleasures</h1>
                    <p className='mt-10'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                    <p className='my-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Book an Appointment</p>
                </div>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={2}
                    centeredSlides={false}
                    spaceBetween={30}

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/v/a/vaseline-intensive-care-cocoa-glow-body-lotions---400ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px]  ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/s/t/st._ives_rose_water_aloe_vera_refreshing_body_wash_473ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/3/6/3600541936782.png" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/e/d/ed_hardy_by_christian_audigier_-_perfume_for_men_-_3.4oz_100ml_-_edt_.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/b/e/beauty_formulas_brightening_vitamin_c_daily_facial_wash_150ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='block md:hidden'>
                <div className='px-5 md:px-0'>
                    <p>For the Home</p>
                    <h1 className='text-3xl my-4'>Domestic pleasures</h1>
                    <p className='mt-10'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                    <p className='my-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Book an Appointment</p>                </div>
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
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/v/a/vaseline-intensive-care-cocoa-glow-body-lotions---400ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px]  ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/s/t/st._ives_rose_water_aloe_vera_refreshing_body_wash_473ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/3/6/3600541936782.png" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/e/d/ed_hardy_by_christian_audigier_-_perfume_for_men_-_3.4oz_100ml_-_edt_.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='md:h-[400px] ' src="https://www.banglashoppers.com/media/catalog/product/cache/01bd333ad217b4fec864ec3becb044c0/b/e/beauty_formulas_brightening_vitamin_c_daily_facial_wash_150ml.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <hr className='mt-[40px] md:mt-[80px]' />
        </main>
    );
}
export default SecondSlider