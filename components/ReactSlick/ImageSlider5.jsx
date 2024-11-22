import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import Image from 'next/image';


const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com//images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}





export default function ImageSlider() {
    const settings = {
         autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };
    return (
        <div className="image-slider-container mt-[100px] ">
            <Slider {...settings} >
                <div className=' px-1 h-[510px]'>
                    <a href="https://www.ultraehp.com/Article02.html" aria-label="Link to product UX100">
                        <div className='card-item  bg-white group flex flex-col justify-start items-center  duration-400 hover:scale-105 '>
                            <div className=" img-wrap">
                                <Image width={280} 
                                    loader={myLoader}
                                    
                                
                                    placeholder='empty' loading='lazy' alt='只用一滴就能檢測酸鹼值的pH計' height={400} src="UH1-12-試片一滴720x540.webp" className='mx-auto rounded-xl' />
                            </div>
                            <div className="txt flex  hover:flex flex-col justify-center items-center mt-[20px] px-[40px]">
                                <p className='text-[16px] font-bold'>只用一滴就能檢測酸鹼值的pH計
                                </p>
                                <ul className='flex flex-col items-start'>
                                    試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm的大小，樣品接觸到感應層 ...
                                </ul>
                                <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-6 md:w-[120px] text-white duration-400 rounded-full   mx-auto py-1 text-center ' href="https://www.ultraehp.com/Article02.html">Detail</a>



                            </div>

                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[300px]'>
                    <a href="https://www.ultraehp.com/Article03.html" aria-label="Link to product UX100">
                        <div className='card-item  bg-white group flex flex-col justify-start items-center  duration-400 hover:scale-105 '>
                            <div className=" img-wrap">
                                <Image width={280}
                                    loader={myLoader}


                                    placeholder='empty' loading='lazy' alt='看完這一篇再也不用校正pH計/酸鹼檢測儀' height={400} src="免校正-720x540.jpg" className='mx-auto rounded-xl' />
                            </div>
                            <div className="txt flex  hover:flex flex-col justify-center items-center mt-[20px] px-[40px]">
                                <p className='text-[16px] font-bold'>看完這一篇再也不用校正pH計/酸鹼檢測儀
                                </p>
                                <ul className='flex flex-col items-start'>
                                    pH酸度計(pH測量儀)的精確度(pH值)和壽命很大一部分取決於pH電極。而且很多時候因為使用方法不當，致使pH測量不準 ...
                                </ul>
                                <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-6 md:w-[120px] text-white duration-400 rounded-full   mx-auto py-1 text-center ' href="https://www.ultraehp.com/Article03.html">Detail</a>



                            </div>

                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[300px]'>
                    <a href="https://www.ultraehp.com/Article04.html" aria-label="Link to product UX100">
                        <div className='card-item  bg-white group flex flex-col justify-start items-center  duration-400 hover:scale-105 '>
                            <div className=" img-wrap">
                                <Image width={280}
                                    loader={myLoader}


                                    placeholder='empty' loading='lazy' alt='能斯特方程式(Nernst equation)與酸鹼度計(pH Meter)關係' height={400} src="UH1-01-720x540.png" className='mx-auto rounded-xl' />
                            </div>
                            <div className="txt flex  hover:flex flex-col justify-center items-center mt-[20px] px-[40px]">
                                <p className='text-[16px] font-bold'>能斯特方程式(Nernst equation)與酸鹼度計(pH Meter)關係
                                </p>
                                <ul className='flex flex-col items-start'>
                                    免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...
                                </ul>
                                <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-6 md:w-[120px] text-white duration-400 rounded-full   mx-auto py-1 text-center ' href="https://www.ultraehp.com/Article04.html">Detail</a>



                            </div>

                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[300px]'>
                    <a href="https://www.ultraehp.com/Article05.html" aria-label="Link to product UX100">
                        <div className='card-item  bg-white group flex flex-col justify-start items-center  duration-400 hover:scale-105 '>
                            <div className=" img-wrap">
                                <Image width={280}
                                    loader={myLoader}


                                    placeholder='empty' loading='lazy' alt='水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制' height={400} src="UH1沾凡立水720x540.jpg" className='mx-auto rounded-xl' />
                            </div>
                            <div className="txt flex  hover:flex flex-col justify-center items-center mt-[20px] px-[40px]">
                                <p className='text-[16px] font-bold'>水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制
                                </p>
                                <ul className='flex flex-col items-start'>
                                    凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類...
                                </ul>
                                <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-6 md:w-[120px] text-white duration-400 rounded-full   mx-auto py-1 text-center ' href="https://www.ultraehp.com/Article05.html">Detail</a>



                            </div>

                        </div>
                    </a>


                </div>
               
               


            </Slider>
        </div>
    );
}
