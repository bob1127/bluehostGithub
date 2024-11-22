'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import ModalBtn02 from '../../components/ModalBtn-2'

import 'swiper/css'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}


export default function Page() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <section className=' '>
            <div className='container  flex-col lg:flex-row flex  w-full'>
                <div className="left px-0 lg:px-8 xl:px-12  w-full lg:w-1/2">
                    <Swiper
                        loop={true}

                        spaceBetween={5}
                        navigation={true}
                        thumbs={{
                            swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='h-[350px] sm:h-[400px] md:h-[430px] lg:h-[450px] w-full  '
                    >
                        <SwiperSlide >
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={450}
                                    height={450}
                                    src='輪播圖01.webp'
                                    loader={myLoader}

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH1/超極生技UltraE'


                                    className=''
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={450}
                                    height={450}
                                    loader={myLoader}
                                    src='輪播圖-04.webp'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極延長線cable示意圖/Humming Probe UH1'

                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={450}
                                    loader={myLoader}
                                    height={450}
                                    src='輪播圖02-01.webp'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='無線電化學分析儀/工作站/恆電位儀的外觀尺寸-Zensor R&D-ECWP100'
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={450}
                                    height={450}
                                    loader={myLoader}
                                    src='輪播圖-03.png'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH計酸鹼檢測儀的兩重電極接口Humming Probe UX100/超極生技UltraE'

                                    className=''
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={450}
                                    height={450}
                                    loader={myLoader}
                                    src='輪播圖-05-02.png'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH計酸鹼檢測儀的拍照功能記錄現場數據Humming Probe UX100/超極生技UltraE'

                                    className=''
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={450}
                                    height={450}
                                    loader={myLoader}
                                    src='輪播圖-06-05.png'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕Humming Probe UX100/超極生技UltraE'

                                    className=''
                                />
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>

                <div className="right items-start  flex flex-col pt-5 lg:pt-0 justify-between md:pr-[100px] xl:pr-[200px] w-full lg:w-1/2 ">
                    <div className="top">
                        <h1 className="text-left  w-full mb-5 md:mb-0 md:w-full">極安簡測-胃幽門桿菌尿素呼氣檢測系統</h1>
                        <h2 className="model">UBT-Professional / Home

                        </h2>

                        <ul>
                            <li>・非侵入檢測方式
                            </li>
                            <li>・30分鐘立即獲得檢測成果
                            </li>
                            <li>・可用於評估治療前後效果
                            </li>
                            <li>・自動判讀檢測成果
                            </li>
                            <li>・兩種版本: 專業版 / 居家檢測版本

                            </li>
                            {/* <li className="mt-6">
                                      <a href="blog" className="border bg-black px-5 py-2 rounded-[50px] border-black text-white px-5">
                                    檢測人員檢測資料→
                                </a>
                                </li> */}

                        </ul>
                        <div className="btn-wrap ">

                            <div className="w-full md:w-3/4 flex flex-col md:flex-row">
                                <ModalBtn02 />

                                {/* 
                                    <ModalBtn01 /> */}
                            </div>



                        </div>
                    </div>
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
                        className='thumbs pl-0 ml-0  pr-[70px] mt-3 w-full '
                    >

                        <SwiperSlide>
                            <button className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={400}
                                    height={300}
                                    src='輪播圖01.webp'
                                    loader={myLoader}

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH1/超極生技UltraE'


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
                                    src='輪播圖-04.webp'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的電極延長線cable示意圖/Humming Probe UH1'

                                />
                            </button>



                        </SwiperSlide>
                        <SwiperSlide>
                            <button className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={400}
                                    loader={myLoader}
                                    height={400}
                                    src='輪播圖02-01.webp'
                                    

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='無線電化學分析儀/工作站/恆電位儀的外觀尺寸-Zensor R&D-ECWP100'
                                />
                            </button>



                        </SwiperSlide>
                        <SwiperSlide>
                            <button className='flex h-full w-full items-center justify-center'>
                                <Image
                                    width={400}
                                    height={400}
                                    loader={myLoader}
                                    src='輪播圖-03.png'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH計酸鹼檢測儀的兩重電極接口Humming Probe UX100/超極生技UltraE'

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
                                    src='輪播圖-05-02.png'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH計酸鹼檢測儀的拍照功能記錄現場數據Humming Probe UX100/超極生技UltraE'

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
                                    src='輪播圖-06-05.png'

                                    priority={true}
                                    loading='eager'
                                    fetchPriority='height'


                                    alt='免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕Humming Probe UX100/超極生技UltraE'

                                    className=''
                                />
                            </button>



                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </section>
    )
}
