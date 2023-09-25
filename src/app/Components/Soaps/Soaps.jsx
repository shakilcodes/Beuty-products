'use client'


import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



const SpecialDish = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 3.5,
                spacing: 20,
            }
        },
        // const [sliderRef] = useKeenSlider({
        //     loop: true,

        // })
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 800)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className='mx-20 flex'>
            <div className='mt-20 '>
                <div className='md:w-[400px]  md:ms-20 px-5 md:px-0'><h5 className=''>For the body</h5>
                    <h1 className='text-3xl my-1 font-bold'>An expression of care           </h1><p className='mt-4'>At GlamorGlow, we're on a mission to bring out your inner radiance and elevate your self-care routine to a whole new level. Our exquisite formulations offer your body the pampering and care it truly deserves, designed to cleanse, replenish, and nourish your skin. </p>
                    <p className='mt-10 border w-[300px] p-3 cursor-pointer hover:bg-gray-200'>Explore All Products</p></div>
            </div>
            <div ref={sliderRef} className="keen-slider mt-[400px]">

                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=''>
                        <div className=' flex justify-center '>
                            <img className='w-[300px]' src="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_M/louis-vuitton--LP0100_PM2_Front%20view.jpg?wid=750&hei=870" alt="" />
                        </div>
                        <div className=' absolute bottom-5 right-[85px]'>
                            <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                            <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=' flex justify-center '>
                        <img className='w-[300px]' src="https://i2-prod.rsvplive.ie/incoming/article20175209.ece/ALTERNATES/s615b/0_JENNY-GLOW.jpg" alt="" />
                    </div>
                    <div className=' absolute bottom-5 right-[85px]'>
                        <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                        <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=' flex justify-center '>
                        <img className='w-[300px]' src="https://static1.sabinacdn.com/12216-thickbox_default/mon-guerlain-bloom-of-rose.jpg" alt="" />
                    </div>
                    <div className=' absolute bottom-5 right-[85px]'>
                        <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                        <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=' flex justify-center '>
                        <img className='w-[300px]' src="https://media1.popsugar-assets.com/files/thumbor/UX4cN8mJugPtvExgeHl3HjaYWyg/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/08/038/n/1922153/4f12d0af5e166c0da83fa6.34429903_/i/best-skincare-products-2020.jpg" alt="" />
                    </div>
                    <div className=' absolute bottom-5 right-[85px]'>
                        <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                        <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=' flex justify-center '>
                        <img className='w-[300px]' src="https://media1.popsugar-assets.com/files/thumbor/4Led_bhrb2DmuecvuaGWz8bfdHQ=/fit-in/1584x1584/filters:format_auto():upscale()/2023/01/06/902/n/1922153/8deedb3547dc6c97_netimgxbjov1.jpg" alt="" />



                    </div>
                    <div className=' absolute bottom-5 right-[85px]'>
                        <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                        <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=' flex justify-center '>
                        <img className='w-[300px]' src="https://media1.popsugar-assets.com/files/thumbor/M3Lp3rvzU5JhEmlxVzsuGazIbx8=/fit-in/792x792/filters:format_auto():upscale()/2023/01/06/902/n/1922153/0266c7a28dd3a169_netimgvgkJwi.webp" alt="" />
                    </div>
                    <div className=' absolute bottom-5 right-[85px]'>
                        <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                        <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 border h-[480px] text-center shadow-md relative">
                    <div className=' flex justify-center '>
                        <img className='w-[300px]' src="https://media1.popsugar-assets.com/files/thumbor/5MGxJLsUpg1AQuBwgZXY8j9uekY=/fit-in/1584x1584/filters:format_auto():upscale()/2023/01/06/902/n/1922153/daf24e8a0108bcdf_netimgTK8eDp.webp" alt="" />
                    </div>
                    <div className=' absolute bottom-5 right-[85px]'>
                        <h1 className='text-xl font-bold  text-yellow-400'>Price: $10</h1>
                        <button className='border-[2px] mt-2 rounded-full p-2 px-5 border-orange-500 text-xl font-bold text-orange-500 hover:text-white hover:bg-orange-500	'>Order Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpecialDish;