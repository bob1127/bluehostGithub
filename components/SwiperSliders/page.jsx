'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'



import 'swiper/css'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
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
                                src='UX200.webp'
                                loader={myLoader01}

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX200/超極生技UltraE'


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
                                src='UX100-03-UX100機身介紹1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀的尺寸及接口介紹Humming Probe UX200/超極生技UltraE'

                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                loader={myLoader}
                                height={400}
                                src='UX200-02-插入電擊1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀和連續檢測使用的變頻磁力攪拌器Humming Probe UX200/超極生技UltraE'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UX100-07-雙模式1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀的兩種電極接口Humming Probe UX100/超極生技UltraE'

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
                                src='UX100-05-500萬畫素1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀的拍照功能記錄現場數據Humming Probe UX200/超極生技UltraE'

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
                                src='UX100-06-4.3彩色觸控螢幕1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕Humming Probe UX200/超極生技UltraE'

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
                    className='thumbs  mt-3  w-full '
                >
                  
                        <SwiperSlide>
                            <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={300}
                                src='UX200.webp'
                                loader={myLoader01}

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX200/超極生技UltraE'


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
                                src='UX100-03-UX100機身介紹1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='UX200機身介紹.webp'

                            />
                  
                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                loader={myLoader}
                                height={400}
                                src='UX200-02-插入電擊1000x1000.webp'

                                priority={true}
                                loading='eager'
                                alt='免校正微量拋棄式pH計酸鹼檢測儀的尺寸及接口介紹Humming Probe UX200/超極生技UltraE'
                            />
                        </button>



                    </SwiperSlide>
                    <SwiperSlide>
                        <button className='flex h-full w-full items-center justify-center'>
                            <Image
                                width={400}
                                height={400}
                                loader={myLoader}
                                src='UX100-07-雙模式1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀的兩種電極接口Humming Probe UX100/超極生技UltraE'


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
                                src='UX100-05-500萬畫素1000x1000.webp'

                                priority={true}
                                loading='eager'
                                alt='免校正微量拋棄式pH計酸鹼檢測儀的拍照功能記錄現場數據Humming Probe UX200/超極生技UltraE'

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
                                src='UX100-06-4.3彩色觸控螢幕1000x1000.webp'

                                priority={true}
                                loading='eager'

                                alt='免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕Humming Probe UX200/超極生技UltraE'

                                className=''
                            />
                        </button>



                    </SwiperSlide>
            
                </Swiper>  
            </div>
        </section>
    )
}
