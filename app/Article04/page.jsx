
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import Sticky from 'react-sticky-el';
import ArticleBottomSection from '../../components/ArticleBottomSection'
// import SomeChild from '../../components/'


const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/能斯特方程式截圖/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}



const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
}









export default function Home() {

   
    return (
        <div className='px- md:px-[20px] lg:px-[50px] 2xl:px-[100px]'>
        

            {/* metadata */}
            <title>能斯特方程式(Nernst equation)與酸鹼度計(pH Meter)關係|超極生技-UltraE
            </title>
            <link rel="alternate" href="https://ultraehp.com/Article04.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://ultraehp.com/en/Article04.html" hreflang="en" />

            <meta key="description" name="description" content="免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://ultraehp.com/Article05.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
能斯特方程式(Nernst equation)與酸鹼度計(pH Meter)關係|超極生技-UltraE
" />
            <meta property="og:description" content="免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係
" />
            <meta property="og:image" content="https://ultraehp.com/images/能斯特方程式截圖/010.png" />






            <div className="content-wrap bg-white flex md:flex-row flex-col w-full mx-auto ">

                <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>


               <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://ultraehp.com/en/Article04.html">
                        <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>en</div>
                    </a>
                </div>
                <div className="langDropdown w-[10px]  text-right ml-[87.5vw]  top-[15px] fixed z-[999]">

                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered p-0"
                                className="w-[10px] p-0 m-0"
                            >

                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/en/Article04.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/Article04.html">繁體中文</a>
                            </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


                </div>
                <div className="left w-full lg:w-[65%]">
                    <section className='section section-01 flex flex-col pt-[80px]'>
                        <div className="navgation ">

                            <a href="https://ultraehp.com/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> / 
                            <a href="https://ultraehp.com/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>文章列表</a> /
                            <a href="#" className='text-gray-500 hover:font-black font-bold hover:text-black'>能斯特方程式(Nernst equation)</a>
                        </div>

                        <h1 className=' article-title text-gray-800 mt-[40px]'>
                            能斯特方程式(Nernst equation)
                        </h1>


                        <Image src='010.png' width={1200}  className='rounded-xl mt-5 ' alt='pH電極工作原理玻璃膜內外離子交換產生的電位差/免校正拋棄式微量pH電極/蜂鳥探針-超極生技UltraE' placeholder='empty' fetchPriority='high' priority={true} loading="eager"  height={500} 
                         loader={myLoader}></Image>
                    </section>



                    
                 
                    <section >
                        <div className=' inline-block  p-5 w-full'>
                            <p>根據能斯特方程式，在化學反應中
                            </p>
                            <Image src='001.png' width={220} loading='lazy' loader={myLoader} height={50} />

                            <p>電位與反應平衡狀態關係為
</p>
                            <Image src='002.png' width={220} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>pH meter玻璃電極的方程式可表示為：
</p>
                            <Image src='003.png' width={320} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />
                            <p>其中玻璃電極內外層分別與玻璃電極內部及外部溶液進行氫離子交換，並量測其電位E1 & E2
</p>
                            <Image src='004.png' width={520} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />
                         
                            <p className='my-3'>透過量測內外玻璃膜電位差(Eb)與pH值作圖，可得以下關係式：</p>
                            <Image src='005.png' width={520} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />
                            <p>透過量測內外玻璃膜電位差(Eb)與pH值作圖，可得以下關係式：</p>
                            <Image src='006.png' width={500} height={40} loader={myLoader} placeholder='empty' loading='lazy'/>

                            <p>由於玻璃薄膜使用後表面可交換氫離子含量發生變化，以及內部溶液氫離子濃度改變，方程式中𝐸𝑘′數值會改變，進而產生誤差，因此玻璃電極使用前皆須進行校正</p>
                            <Image src='011.png' alt='網版印刷pH電極工作原理/拋棄式鹽橋參考電極/免校正拋棄式微量pH電極/蜂鳥探針-超極生技UltraE' width={1000} height={1000} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />


                            <p>依照能斯特方程式，在化學反應中
                            </p>  
                            <Image src='001.png' width={320} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>依照能斯特方程式，在化學反應中
                            </p>
                            <Image src='007.png' width={320} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>Humming Probe酸鹼檢測試片將氫離子吸附薄膜修飾於試片表面，其薄膜與溶液中氫離子發生氧化還原反應，方程式可表示為：
                            </p>
                            <Image src='008.png' width={420} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>根據能斯特方程式，可將電位表示為
                            </p>
                            <Image src='009.png' width={420} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />


                            {/* <div className='recommed-section mt-[30px] py-[50px] px-[30px] bg-gray-100 border rounded-2xl'>


                                <div className="txt flex justify-center items-center flex-col ">
                                    <h4 className='font-extrabold text-gray-800 text-[32px]'>覺得這篇文章不錯嘛？
                                    </h4>

                                    <p>瞭解更多我們的產品

                                    </p>
                                    <p></p>



                                    <Image loader={myLoader05} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto mt-4 rounded-xl" src='UX200-07-手持拍照-720x540.webp' alt='內置鏡頭'></Image>


                                    <a href="UX200.html" className='text-[14px] mt-4 text-center py-3 w-[200px] text-white border rounded-[40px] bg-[#4ba6db]'>Go Product</a>

                                </div>
                            </div> */}
                          







                            
                        </div>
                    </section>
                   
                </div>

                <div className="right h-full py-[100px] sm:px-[0px] overflow-hidden 2xl:px-[60px]  w-full md:w-[35%]">
                 
                    
                  
                    <div className="wrap">
                        <div className="top p-6">
                            <a href="https://www.ultraehp.com/hummingprobe/UH2.html">
                                <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                            </a>
                            <a href="https://www.ultraehp.com/hummingprobe/UH1.html"><Image src='UH1-banner-1024x576.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                            <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html">
                                <Image src='UH2GAS-banner-m.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader03} />
                           </a>
                           
                          
                            
                        </div>


                       


                    </div>
                   
                </div>
            </div>

            <div className=" ">
                <ArticleBottomSection />

            </div>
            
        </div>
    )
}
