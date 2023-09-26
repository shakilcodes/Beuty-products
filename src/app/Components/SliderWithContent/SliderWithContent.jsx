'use client'

import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineArrowLeft , AiOutlineArrowRight } from "react-icons/ai";

const slides = [
    {
        id: 1,
        title: 'https://img.jakpost.net/c/2018/07/10/2018_07_10_49058_1531221556._large.jpg',
        content: <div>
            <h1 className='text-3xl font-semibold'>Uttara Location</h1>
            <p>Address: 123 Uttara Avenue, Uttara, Dhaka, Bangladesh</p>
            <p className='text-xl font-semibold mt-3'>Operating Hours:</p>
            <ul>
                <li>Monday to Friday: 10:00 AM - 8:00 PM</li>
                <li>Saturday: 11:00 AM - 7:00 PM</li>
                <li>Sunday: Closed</li>
            </ul>
            <p className='my-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Contact Us</p>
        </div>,
    },
    {
        id: 2,
        title: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg',
        content: <div>
        <h1 className='text-3xl font-semibold'>Dhanmondi Location</h1>
        <p>Address: 456 Dhanmondi Road, Dhanmondi, Dhaka, Bangladesh</p>
        <p className='text-xl font-semibold mt-3'>Operating Hours:</p>
        <ul>
            <li>Monday to Friday: 10:00 AM - 8:00 PM</li>
            <li>Saturday: 11:00 AM - 7:00 PM</li>
            <li>Sunday: 11:00 AM - 5:00 PM</li>
        </ul>
        <p className='my-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Contact Us</p>
    </div>,
    },
    {
        id: 3,
        title: 'https://im.whatshot.in/img/2018/Jul/sunshine-5-1531994981.jpeg?w=1336&h=890&cc=1',
        content: <div>
        <h1 className='text-3xl font-semibold'>Nikunja Location</h1>
        <p>Address: 789 Nikunja Plaza, Nikunja, Dhaka, Bangladesh</p>
        <p className='text-xl font-semibold mt-3'>Operating Hours:</p>
        <ul>
            <li>Monday to Friday: 10:00 AM - 8:00 PM</li>
            <li>Saturday: 11:00 AM - 7:00 PM</li>
            <li>Sunday: Closed</li>
        </ul>
        <p className='my-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Contact Us</p>
    </div>

        ,
    },
];

const SliderWithContent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 50,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (currentSlide) => {
            setActiveSlide(currentSlide);
        },
    };

    const goToPrevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div className="slider-container md:mt-[80px]">
            <div className="slider">
                <Slider {...settings} ref={sliderRef}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="slide">

                        </div>
                    ))}
                </Slider>
            </div>
            <div className='mt-10'>
                <div className="content lg:grid grid-cols-4 justify-between items-center md:mx-28 gap-5 px-5 md:px-0">
                    <div className='lg:ms-20 md:order-2 lg:order-1'>
                        <p>{slides[activeSlide].content}</p>
                    </div>

                    <div className='col-span-3 relative lg:ms-[200px] md:order-1'>
                        <div className=''>
                            <img className='w-full h-auto md:h-[400px] lg:h-[600px] rounded-xl' src={slides[activeSlide].title} alt="" />
                        </div>
                        <div className='flex justify-between'>
                            <div className='absolute top-[50%] md:-ms-14'>
                                <button onClick={goToPrevSlide} className="prev-button ">
                                    <AiOutlineArrowLeft className='text-5xl text-blue-500'></AiOutlineArrowLeft>
                                </button>
                            </div>
                            <div className='absolute z-[1] top-[50%] right-0 md:-mr-14'>
                                <button onClick={goToNextSlide} className="next-button">
                                    <AiOutlineArrowRight className='text-5xl text-blue-500'></AiOutlineArrowRight>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderWithContent;

