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
        <main className='mt-[50px] md:mt-[150px]  md:mx-20 text-[#333333]'>
            <div className='hidden md:block'>
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={30}

                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide className=''>
                        <p className=''>For the skin</p>
                        <h1 className='text-3xl my-4'>Attention for all types</h1>
                        <p className='mt-10'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                        <button className='mt-10'>See All Skin Care</button>

                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='h-[400px] ' src="https://obsentum-prod.ams3.digitaloceanspaces.com/sylius_shop_product_original/dc/45/8edcd5395f6efb4c226c1e0ae15f.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='h-[400px]  ' src="https://reapp.com.gh/wp-content/uploads/2022/08/71CItz9AMYL._AC_SL1500_-e1659452597399.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='h-[400px] ' src="https://www.orental.ru/upload/resize_cache/catalog/victoria-s-secret/870_870_1/very-sexy-night-1.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='h-[400px] ' src="https://www.perfumeblvd.com/images/images/Romance%20De%20Provence%20Perfume%203.4oz.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className=''>
                        <div className='grid justify-center'>
                            <img className='h-[400px] ' src="https://euro-shock.ru/image/cache/catalog/server1/7/1/493247323-genskaya-parfyumernaya-voda-victoria-s-secret-bombshell-wild-flower-sn-700x700.jpg" alt="" />
                        </div>
                        <div className='text-center'>
                            <h1>Lucent Facial Concetrate</h1>
                            <h1>A Vitamin C-rich Layering serum</h1>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='blcok md:hidden'>
                <div className='px-5 md:px-0'>
                    <p className=''>For the skin</p>
                    <h1 className='text-3xl my-4'>Attention for all types</h1>
                    <p className='mt-10'>The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                    <button className='mt-10'>See All Skin Care</button>
                </div>
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
            </div>

            <hr className='mt-[40px] md:mt-[80px]' />
        </main>
    );
}
export default FirstSlider