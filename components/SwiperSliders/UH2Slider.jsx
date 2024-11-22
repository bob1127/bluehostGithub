'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'



import 'swiper/css'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
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
                                src='UH2-4-一滴量測1000x1000.webp'
                                loader={myLoader}

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的超微量樣品液體pH測試示意圖/Humming Probe UH2'


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
                                src='UH2-05-即插即測1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極插口細節圖/Humming Probe UH2'

                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                loader={myLoader}
                                height={400}
                                src='UH2-06-搭配UX100-1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極延長線cable示意圖/Humming Probe UH2'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UH2-03.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極可穩定保存在乾燥罐中/Humming Probe UH2'

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
                                src='UH2-07-商品1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極外包裝/Humming Probe UH2/超極生技UltraE'

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
                    className='thumbs   mt-3 w-full '
                >

                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={300}
                                src='UH2-4-一滴量測1000x1000.webp'
                                loader={myLoader}

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的超微量樣品液體pH測試示意圖/Humming Probe UH2'


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
                                src='UH2-05-即插即測1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極可穩定保存在乾燥罐中/Humming Probe UH2'

                            />

                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                loader={myLoader}
                                height={400}
                                src='UH2-06-搭配UX100-1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極延長線cable示意圖/Humming Probe UH2'
                            />
                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UH2-03.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極可穩定保存在乾燥罐中/Humming Probe UH2'

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
                                src='UH2-07-商品1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極外包裝/Humming Probe UH2/超極生技UltraE'

                                className=''
                            />
                        </button>



                    </SwiperSlide>
                   

                </Swiper>
            </div>
        </section>
    )
}
