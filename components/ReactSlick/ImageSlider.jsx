import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import Image from 'next/image';

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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
      
    };
    return (
        <div className="image-slider-container border px-10 border-red-500">
            <Slider {...settings} className='h-auto px-20 md:h-[650px] border border-black '>
                <div className=' px-1 h-[520px]'>
                    <a href="UltraP.html" className='p-3'>
                        <div className='card-item '>
                             <div className="txt flex flex-col justify-start items-start px-[20px]">
                                <h4 className='text-[20px] font-bold'>能斯特方程式(Nernst)與酸鹼度計關係</h4>
                                <p className='mt-3 font-normal text-[16px]'>免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...</p>

                            </div>
                            <div className=" img-wrap p-10">
                                <Image width={400} loading='lazy' className='rounded-xl' priority={true}  height={400} src="/blog/UH1-01-720x540_wqbrgd" />
                            </div>
                        </div>
                    </a>
                    
                  
                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="UltraP.html">
                        <div className='card-item '>
                            <div className="txt flex flex-col justify-center items-center px-[20px]">
                                <h4 className='text-[20px] font-bold'>看完這一篇再也不用校正pH計</h4>
                                <p className='mt-3 font-normal text-[16px]'>pH酸度計(pH測量儀)的精確度(pH值)和壽命很大一部分取決於pH電極。而且很多時候因為使用方法不當，致使pH測量不準 ...</p>

                            </div>
                            <div className=" img-wrap">
                                <Image width={400} loading='lazy' className='rounded-xl' alt='看完這一篇 就能校正' height={400} src="/blog/免校正-720x540_kosem8" />
                            </div>
                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="UltraP.html">
                        <div className='card-item '>
                            <div className="txt flex flex-col justify-center items-centerpx-[20px]">
                                <h4 className='text-[20px] font-bold'>只用一滴就能檢測酸鹼值的pH計</h4>
                                <p className='mt-3 font-normal text-[16px]'>試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm的大小，樣品接觸到感應層 ...</p>

                            </div>
                            <div className=" img-wrap">
                                <Image width={400} loading='lazy' className='rounded-xl' alt='一滴就能檢測 ' height={400} src="/blog/UH1-12-試片一滴720x540_ocz109" />
                            </div>
                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="UltraP.html">
                        <div className='card-item '>
                            <div className="txt flex flex-col justify-center items-center px-[20px]">
                                <h4 className='text-[20px] font-bold'>水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制</h4>
                                <p className='mt-3 font-normal text-[16px]'>凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類...</p>

                            </div>
                            <div className=" img-wrap">
                                <Image width={400} alt='水性絕緣凡立水' loading='lazy' className='rounded-xl'  height={400} src="/blog/UH1沾凡立水720x540_yqhl6v" />
                            </div>
                        </div>
                    </a>


                </div>
               
            </Slider>
        </div>
    );
}
