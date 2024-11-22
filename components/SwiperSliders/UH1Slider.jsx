'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'



import 'swiper/css'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}


export default function Page() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <section className=' '>
            <div className='container'>
             <Swiper
                    loop={true}

                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='h-96 w-full'
                >
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={300}
                                src='UH1.webp'
                                loader={myLoader}

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH1/超極生技UltraE'


                                className=''
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UH1-01.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的微量液體樣品pH測試示意圖/Humming Probe UH1'

                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                loader={myLoader}
                                height={400}
                                src='UH1-05-2.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的微量液體樣品pH測試示意圖/Humming Probe UH1'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='即開即用.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極可穩定保存在乾燥罐中/Humming Probe UH1'

                                className=''
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UH1-02.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極外包裝/Humming Probe UH1/超極生技UltraE'

                                className=''
                            />
                        </div>
                    </SwiperSlide>
                    
                </Swiper>


                <Swiper

                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={12}
                    breakpoints={{
                        0: {
                            slidesPerView: 4,
                        },

                        768: {
                            slidesPerView: 5,
                        },
                        1920: {
                            slidesPerView: 6,
                        },
                    }}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='thumbs   mt-3 w-full'
                >

                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={300}
                                src='UH1.webp'
                                loader={myLoader}

                                priority={true}
                                loading='eager'

                                alt='無線電化學分析儀/工作站/恆電位儀一鍵控制方便使用及其電源狀態燈-Zensor R&D-ECWP100'


                                className=''
                            />
                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UH1-01.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH1/超極生技UltraE'

                            />

                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                loader={myLoader}
                                height={400}
                                src='UH1-05-2.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極延長線cable示意圖/Humming Probe UH1'
                            />
                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='即開即用.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極可穩定保存在乾燥罐中/Humming Probe UH1'

                                className=''
                            />
                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UH1-02.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極外包裝/Humming Probe UH1/超極生技UltraE'

                                className=''
                            />
                        </button>



                    </SwiperSlide>
                   

                </Swiper>
            </div>
        </section>
    )
}