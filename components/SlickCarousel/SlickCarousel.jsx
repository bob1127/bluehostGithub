// src/reusable/image-gallery.component.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Styles from "./slick.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/carousel-img/1920x768/${src}?w=${width}?p=${placeholder}`
};



const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/carousel-img/1024x576/${src}?w=${width}?p=${placeholder}`
};

const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/carousel-img/640x640/${src}?w=${width}?p=${placeholder}`
};

class ImageGallaryComponent extends React.Component {
    render() {
        return (
            <div className="mt-[60px] relative">
                <Carousel
                    infiniteLoop
                    transitionTime={500}
                    className=""
                >
                    <div className='relative mt-[65px]'>
                        <div className="txt flex flex-col justify-start items-start z-50 absolute w-full left-[10%] top-[100px]">
                            <h2 className="text-[20px] leading-normal xl:text-[40px] text-left font-extrabold ">為什麼選擇蜂鳥探針檢測pH值?</h2>
                            <p className="text-left">我們的免校正專利試片技術讓你的每一次<br />酸鹼測試pH檢測數據都精準無比!</p>

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 lg:block hidden">
                            <Image
                                className="hidden "
                                loader={myLoader}
                                loading='eager'
                                alt='免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={1920}
                                height={768}
                                src='免校正微量拋棄式pH酸鹼電極-desktop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 hidden md:block lg:hidden">

                            <Image
                                className="hidden md:block lg:hidden"
                                loader={myLoader02}
                                loading='eager'
                                alt='免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={1024}
                                height={576}
                                src='免校正微量拋棄式pH酸鹼電極-loptop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 block md:hidden">

                            <Image
                                className="block md:hidden"
                                loader={myLoader03}
                                loading='eager'
                                alt='免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={640}
                                height={640}
                                src='免校正微量拋棄式pH酸鹼電極-mobile.webp'
                            />
                        </div>
                    </div>
                    <div className='relative mt-[80px]'>
                        <div className="txt flex flex-col justify-start items-start z-50 absolute w-full left-[10%] top-[100px]">
                            <h2 className="text-[20px] leading-normal xl:text-[40px] text-left font-extrabold ">氣體pH免校正電極新上市</h2>
                            <p className="text-left">無需預溶解即可直接測試氣體的酸鹼值<br />UH2-Gas</p>

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 lg:block hidden">
                            <Image
                                className=""
                                loader={myLoader}
                                loading='eager'
                                alt='免校正免收集拋棄式氣體pH酸鹼檢測電極|UltraP 超極生技'
                                priority={true}
                                width={1920}
                                height={768}
                                src='免校正免收集拋棄式氣體pH酸鹼檢測電極-desktop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 hidden md:block lg:hidden">

                            <Image
                                className="hidden md:block lg:hidden"
                                loader={myLoader02}
                                loading='eager'
                                alt='免校正免收集拋棄式氣體pH酸鹼檢測電極|UltraP 超極生技'
                                priority={true}
                                width={1024}
                                height={576}
                                src='免校正免收集拋棄式氣體pH酸鹼檢測電極-mobile.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 block md:hidden">

                            <Image
                                className="block md:hidden"
                                loader={myLoader03}
                                loading='eager'
                                alt='免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={640}
                                height={640}
                                src='免校正免收集拋棄式氣體pH酸鹼檢測電極-mobile.webp'
                            />
                        </div>

                    </div>
                    <div className='relative mt-[65px]'>
                        <div className="txt flex flex-col justify-start items-start z-50 absolute w-full left-[10%] top-[20px] md:top-[100px]">
                            <h2 className="text-[20px] leading-normal xl:text-[40px] text-left font-extrabold ">全系列免校正拋棄式pH電極</h2>
                            <p className="text-left">滿足你對pH檢測的全面的需求</p>



                            <div data-swiper-parallax="500" className="slide-btns flex flex-col justify-start items-start mt-5"><a href="https://www.ultraehp.com/hummingprobe/UH1.html" className="bg-orange-500 rounded-[40px] text-white  py-2 px-4 ">通用液體pH檢測電極 UH1</a><br /><a href="https://www.ultraehp.com/hummingprobe/UH2.html" className="bg-orange-500 rounded-[40px] text-white py-2 px-4 ">超微量液體pH檢測電極 UH2</a><br /><a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" className="bg-orange-500 rounded-[40px] text-white py-2 px-4 ">氣體pH檢測電極 UH2-Gas</a></div>
                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 lg:block hidden">
                            <Image
                                className="hidden md:block"
                                loader={myLoader}
                                loading='eager'
                                alt='不同型號的免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={1920}
                                height={768}
                                src='不同型號的免校正微量拋棄式pH酸鹼電極-desktop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 hidden md:block lg:hidden">

                            <Image
                                className="hidden md:block lg:hidden"
                                loader={myLoader02}
                                loading='eager'
                                alt='不同型號的免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={1024}
                                height={576}
                                src='不同型號的免校正微量拋棄式pH酸鹼電極-loptop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 block md:hidden">

                            <Image
                                className="block md:hidden"
                                loader={myLoader03}
                                loading='eager'
                                alt='不同型號的免校正微量拋棄式pH酸鹼電極|UltraP 超極生技'
                                priority={true}
                                width={640}
                                height={640}
                                src='不同型號的免校正微量拋棄式pH酸鹼電極-mobile.webp'
                            />
                        </div>

                    </div>
                    <div className='relative mt-[80px]'>
                        <div className="txt flex flex-col justify-start items-start z-50 absolute left-[40px] top-[50px] lg:top-[90px] lg:left-[90px]">
                            <h2 className="text-[20px] leading-normal xl:text-[40px] text-left font-extrabold ">為什麼選擇蜂鳥探針檢測pH值?</h2>
                            <p className="text-left">我們的免校正專利試片技術讓你的每一次<br />酸鹼測試pH檢測數據都精準無比!!</p>

                            <a href="https://www.ultraehp.com/hummingprobe/CS200.html" className="mt-5 bg-orange-500 rounded-[40px] text-white py-2 px-4 ">Learn More</a>




                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 lg:block hidden">
                            <Image
                                className="hidden md:block"
                                loader={myLoader}
                                loading='eager'
                                alt='免校正pH監測系統|UltraP 超極生技'
                                priority={true}
                                width={1920}
                                height={768}
                                src='免校正pH監測系統-desktop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 hidden md:block lg:hidden">

                            <Image
                                className="hidden md:block lg:hidden"
                                loader={myLoader02}
                                loading='eager'
                                alt='免校正pH監測系統|UltraP 超極生技'
                                priority={true}
                                width={1024}
                                height={576}
                                src='免校正pH監測系統-loptop.webp'
                            />

                        </div>
                        <div className="img-wrap w-full  absolute z-40 left-0 top-0 block md:hidden">

                            <Image
                                className="block md:hidden"
                                loader={myLoader03}
                                loading='eager'
                                alt='免校正pH監測系統|UltraP 超極生技'
                                priority={true}
                                width={640}
                                height={640}
                                src='免校正pH監測系統-mobile.webp'
                            />
                        </div>

                    </div>

                </Carousel>
            </div>
        );
    }
}

export default ImageGallaryComponent;
