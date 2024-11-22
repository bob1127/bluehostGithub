
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            breakpoints={{
                0: {
                    width: 0,
                    slidesPerView: 3,
                },
                768: {
                    width: 768,
                    slidesPerView: 3,
                },
                1200: {
                    width: 1200,
                    slidesPerView: 3,
                },
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            // slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Link href="UX100.html">
                    <li
                        className="border border-stone-200 flex flex-1 flex-col  overflow-hidden bg-white rounded-[28px] cursor-grab select-none  max-w-[100%] md:max-w-[70vw] h-[300px]  xl:h-[300px]"
                        style={{
                            boxShadow:
                                "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                        }}
                    >
                        <div className="lg:flex  flex-col flex-1 pb-[50px] px-[50px] justify-between">
                            <div className="content w-1/2 lg:w-full flex flex-col shrink-0">
                                <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                                    We help you
                                </h1>
                                <h4 className="text-lg font-extrabold">
                                    能斯特方程式(Nernst)與酸鹼度計關係·

                                </h4>
                                <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">

                                    免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...

                                </div>
                            </div>

                        </div>
                        <div className="rounded-2xl overflow-hidden static lg:relative flex-1 ">
                            <img
                                draggable="false"
                                alt="Investing"
                                className="absolute w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                                src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png"
                            />
                        </div>
                    </li>
                </Link>

            </SwiperSlide>
            <SwiperSlide>
                <li
                    className="border border-stone-200 flex flex-1 flex-col  overflow-hidden bg-white rounded-[28px] cursor-grab select-none  max-w-[100%] md:max-w-[70vw] h-[300px]  xl:h-[300px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="lg:flex  flex-col flex-1 pb-[50px] px-[50px] justify-between">
                        <div className="content w-1/2 lg:w-full flex flex-col shrink-0">
                            <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                                We help you
                            </h1>
                            <h4 className="text-lg font-extrabold">
                                能斯特方程式(Nernst)與酸鹼度計關係·

                            </h4>
                            <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">

                                免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...

                            </div>
                        </div>

                    </div>
                    <div className="rounded-2xl overflow-hidden static lg:relative flex-1 ">
                        <img
                            draggable="false"
                            alt="Investing"
                            className="absolute w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png"
                        />
                    </div>
                </li>

            </SwiperSlide>
            <SwiperSlide>
                <li
                    className="border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none max-w-[85vw] max-w-[100%] md:max-w-[70vw] h-[300px] overflow-hidden xl:h-[300px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="lg:flex  flex-col flex-1 pb-[50px] px-[50px] justify-between">
                        <div className="content w-1/2 lg:w-full flex flex-col shrink-0">
                            <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                                We help you
                            </h1>
                            <h4 className="text-lg font-extrabold">
                                能斯特方程式(Nernst)與酸鹼度計關係·

                            </h4>
                            <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">

                                免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...

                            </div>
                        </div>

                    </div>
                    <div className="rounded-2xl overflow-hidden static lg:relative flex-1 ">
                        <img
                            draggable="false"
                            alt="Investing"
                            className="absolute w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png"
                        />
                    </div>
                </li>

            </SwiperSlide>
            <SwiperSlide>
                <li
                    className="border border-stone-200 flex flex-1 flex-col lg:flex-row overflow-hidden bg-white rounded-[28px] cursor-grab select-none max-w-[85vw] max-w-[100%] md:max-w-[70vw] h-[300px] overflow-hidden xl:h-[300px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                    <div className="lg:flex  flex-col flex-1 pb-[50px] px-[50px] justify-between">
                        <div className="content w-1/2 lg:w-full flex flex-col shrink-0">
                            <h1 className="text-2xl  text-transparent bg-clip-text bg-gradient-to-b from-gray-8 to-gray-9">
                                We help you
                            </h1>
                            <h4 className="text-lg font-extrabold">
                                能斯特方程式(Nernst)與酸鹼度計關係·

                            </h4>
                            <div className="mt-4 lg:mt-6 text-sm lg:text-md text-gray-11">

                                免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...

                            </div>
                        </div>

                    </div>
                    <div className="rounded-2xl overflow-hidden static lg:relative flex-1 ">
                        <img
                            draggable="false"
                            alt="Investing"
                            className="absolute w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png"
                        />
                    </div>
                </li>

            </SwiperSlide>
            ...
        </Swiper>
    );
};