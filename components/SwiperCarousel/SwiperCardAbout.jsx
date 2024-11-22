
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}
export default () => {
    // const sliderRef = useRef(null);
    // const handlePrev = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slidePrev();
    // }, []);

    // const handleNext = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slideNext();
    // }, []);

    return (
        <div className='w-full '>
            <div className="row">
                <div className="Container pl-[20px] m-4 grid grid-cols-2">

                    <div className="txt">
                        <h3 className='dark text-4xl text-black '>文章列表 </h3>
                        <a className='bg-black  dark:text-black rounded-xl w-[140px] px-4' href="">others</a>
                        <p className='  text-xs font-normal'>Article List</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <Swiper

               
                className='px-[100px]'
                // install Swiper modules
                breakpoints={{
                    0: {
                      
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 3,
                    },
                }}
                modules={[Navigation, Pagination,  A11y]}
                spaceBetween={1}

                navigation
                pagination={{ clickable: false }}
           
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide className='m-3'><li
                    className="  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                       
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <a href="Article03.html" className='hover:cursor'>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[220px] w-[350px]   overflow-y-scroll">
                                  <div className="txt  p-4">
                                        <p className="text-tiny uppercase font-bold">Article03</p>
                                        <h4 className="text-[22px] text-black font-bold  mb-3
                                       ">只用一滴就能檢測酸鹼值的pH計</h4>
                                        <samll className="text-[14px] font-light text-gray-800">試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm的大小，樣品接觸到感應層 ...</samll>
                                  </div>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="UH1-12-試片一滴720x540.webp"
                                        loader={myLoader01}
                                        width={500}
                                        height={300}
                                        
                                    />
                                </CardBody>
                            </Card>
                            </a>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                      
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <a href="Article04.html" className='hover:cursor'>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[220px] w-[350px]   overflow-y-scroll">
                                        <div className="txt  p-4">
                                            <p className="text-tiny uppercase font-bold">Article02</p>
                                            <h4 className="text-[22px] text-black font-bold  mb-3
                                       ">水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制</h4>
                                            <samll className="text-[14px] font-light text-gray-800">凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類...</samll>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loading='lazy'
                                            alt="Card background"
                                            className="rounded-xl"

                                            src="UH1沾凡立水720x540.jpg"
                                            loader={myLoader01}
                                            width={500}
                                            height={300}

                                        />
                                    </CardBody>
                                </Card>
                            </a>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                       
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <a href="Article03.html" className='hover:cursor'>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[220px] w-[350px]   overflow-y-scroll">
                                    <div className="txt  p-4">
                                        <p className="text-tiny uppercase font-bold">Article03</p>
                                        <h4 className="text-[22px] text-black font-bold  mb-3
                                       ">只用一滴就能檢測酸鹼值的pH計</h4>
                                        <samll className="text-[14px] font-light text-gray-800">試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm的大小，樣品接觸到感應層 ...</samll>
                                    </div>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="UH1-12-試片一滴720x540.webp"
                                        loader={myLoader01}
                                        width={500}
                                        height={300}

                                    />
                                </CardBody>
                            </Card>
                            </a>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
                <SwiperSlide className='m-3'><li
                    className="  p-5 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none "
                    style={{
                        
                    }}
                >
                    <div className="flex flex-1 flex-col pb-[50px]  ">
                        <div className="content flex flex-col shrink-0">



                            <h2 className="text-xl  text-gray-12">

                            </h2>
                            <a href="Article02.html" className='hover:cursor'>
                            <Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[220px] w-[350px]   overflow-y-scroll">
                                    <div className="txt  p-4">
                                        <p className="text-tiny uppercase font-bold">Article03</p>
                                        <h4 className="text-[22px] text-black font-bold  mb-3
                                       ">只用一滴就能檢測酸鹼值的pH計</h4>
                                        <samll className="text-[14px] font-light text-gray-800">試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm的大小，樣品接觸到感應層 ...</samll>
                                    </div>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl"
                                        src="UH1-12-試片一滴720x540.webp"
                                        loader={myLoader01}
                                        width={500}
                                        height={300}

                                    />
                                </CardBody>
                            </Card>
                            </a>

                        </div>

                    </div>

                </li>
                </SwiperSlide>
              
                
                ...
         
            </Swiper>
            {/* <div className="prev-arrow" onClick={handlePrev} />
            <div className="next-arrow" onClick={handleNext} /> */}
        </div>


        
    );
};