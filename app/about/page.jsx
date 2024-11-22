
"use client"
import Tooltip from "../../components/Tooltip"
import './ultrae.scss'
import Image from 'next/image'
import Img01 from '../../public/images/wix.jpg'
import Img02 from '../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import Marquee from 'react-fast-marquee'
import fetchUI from '../../components/ui/fetchUI.jsx'
import SwiperCard1 from '../../components/SwiperCarousel/SwiperCardAbout'
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel'
import FindSPE from '../../components/FindSPE.jsx'
import ArticleBottomSection from '../../components/ArticleBottomSection'
import React from "react";
import HeroCarousel from '../../components/Carousel/index'


// import Lottie from "react-lottie";
// import LoadingSpinner from "../../../public/Lottie/contact.json";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { properties } from "../../constants/data";
import { Button } from "@nextui-org/react";
// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../../styles/additional-styles/tab.css'
// import '../../public/images/demo.png'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/carousel-img/1920x768/${src}?w=${width}?p=${placeholder}`
}

const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/brand/${src}?w=${width}?p=${placeholder}`
}


const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/${src}?w=${width}?p=${placeholder}`
}

const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}

const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}

const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/icon/${src}?w=${width}?p=${placeholder}`
}



export default async function Home() {


    const textAnimate = {
        offscreen: { y: 100, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1
            }
        }

    }
    const title01 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1.4,
                delay: 0,
            }
        }

    }
    const title02 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1.4,
                delay: .3,
            }
        }

    }
    const title03 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1,
                delay: .9,
            }
        }

    }

    const card01
        = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: .8,
                delay: 0,
            }
        }

    }
    const card02 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: .8,
                delay: .3,
            }
        }

    }
    const card03 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: .8,
                delay: .6,
            }
        }

    }
    const card04 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: .8,
                delay: .9,
            }
        }

    }
    const card05 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: .8,
                delay: 1.2,
            }
        }

    }
    const card06 = {
        offscreen: { y: 150, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: .8,
                delay: 1.5,
            }
        }

    }
    const ImageAnimate = {
        offscreen: { y: 200, opacity: 0 },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "FadeUp",
                bounce: 0.4,
                duration: 1.4,
                delay: 0.5,
            }
        }

    }

    const gallery = [
        { id: 1, imgUrl: "/images/Bed-1.webp" },
        { id: 2, imgUrl: "/images/Bed-2.webp" },
        { id: 3, imgUrl: "/images/Bed-3.webp" },
        { id: 4, imgUrl: "/images/Oak.webp" },
    ];



    let easing = [0.6, -0.05, 0.01, 0.99];

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0,
            transition: { duration: 0.6, ease: easing }
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing
            }
        }
    };



    return (
        


        <div className="dark:bg-black   bg-gray-100">
        
           


{/* 

            <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='UltraP-logo' height={60}></Image>  */}




            {/* 結構化資料  */}
            <title>蜂鳥探針｜pH儀器、pH試劑、免校正、pH Meter、Humming probe | 超極生技UltraE
            </title>

            <meta name="keywords" content="蜂鳥探針｜pH感測器、pH測量儀、pH meter、酸鹼度計、pH檢測器、pH值檢測計、可攜式 pH計、桌上型pH計、pH測量儀 、pH電極、酸鹼度計、酸鹼測試、pH測試"/>
            <meta key="description" name="description" content="超極生技UltraE以專利技術開發的的免校正蜂鳥探針pH meter 酸鹼度計。具有拋棄式的電極設計，微升級的樣品需求量，以IS9001的高規格生產提供您高精準度的測試結果適合珍貴及特殊樣品，可以突破傳統pH測量儀的眾多限制。更可客製化訂製此微型pH檢測感測元件，將其嵌入新的產品(OEM/ODM)." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="https://www.ultraehp.com/ultra-logo.ico" type="image/ico"></link>



            <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/aboutUs.html" hreflang="zh-Hant"/>
            <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/aboutUs.html" hreflang="en"></link>


            
            <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/index.html" />
        
            <meta property="og:type" content="website" />
            <meta property="og:title" content="
免校正超微量酸鹼電極
" />
            <meta property="og:description" content="超極生技UltraE以專利技術開發的的免校正蜂鳥探針pH meter 酸鹼度計。具有拋棄式的電極設計，微升級的樣品需求量，以IS9001的高規格生產提供您高精準度的測試結果適合珍貴及特殊樣品，可以突破傳統pH測量儀的眾多限制。更可客製化訂製此微型pH檢測感測元件，將其嵌入新的產品(OEM/ODM).
" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/Index/UH1-18-不怕汙染720x540-2.webp" />



          
           
            <section className="section_HeroVideo relative" >
                
             
            </section>



     


            {/* <section className="Bg-img w-full h-[80vh] bg-cover  bg-center bg-no-repeat  ">
                <div className="Container">
                    <div className="txt border shadow-md border-white flex justify-center py-10"  >
                       

                    </div>

                </div>
            </section> */}
            

            <section className=" mt-[10px]  h-[768px] md:h-[576px] 2xl:h-[760px] md:mt-0 ">
                <SlickCarousel/>
               
            </section>
            <section className="section_marquee section  w-full flex-col  justify-center items-center px-20">
                <div>
                    <h2 className="text-[32px] font-semibold text-center">
                        Trusted by precision flaboratory in universities and enterprises
                    </h2>
                </div>
                <div className=" w-full lg:w-4/5  py-10 mx-auto ">
                    <Marquee>
                       
                        <div className=" w-[200px] mx-5 flex justify-center ">

                            <Image loading="lazy" alt='banner07' height={50} width={140} loader={myLoader01} src='brand-07.png' />
                        </div>
                        <div className=" w-[200px] mx-5 flex justify-center ">   <Image loading="lazy" height={50} width={140} loader={myLoader01} alt='banner03' src='brand-03.png' /></div>
                        <div className=" w-[200px] mx-5 flex justify-center ">   <Image loading="lazy" height={50} width={140} loader={myLoader01} alt='banner-4' src='brand-04.png' /></div>
                        <div className=" w-[200px] mx-5 flex justify-center ">   <Image loading="lazy" height={50} width={140} loader={myLoader01} alt='banner-5' src='brand-05.png' /></div>
                    </Marquee>
                </div>
                <div className="flex justify-center">
                    <div className="grid  w-[90%] md:w-[70%] grid-cols-1 md:grid-cols-3 ">
                        <div className="text-center font-extrabold">
                            Analytical Laboratory


                        </div>
                        <div className="text-center font-extrabold">Colleges and universities

                        </div>
                        <div className="text-center font-extrabold">Enterprise

                        </div>

                    </div>
                </div>

            </section>

            <div>
                <FindSPE/>
            </div>
            <section className="section_whate section ">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center">什麼是蜂鳥探針?</h2>
                    </div>
                    <div className=" mt-4 flex justify-center">
                        <div className="card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-0 md:px-[40px] lg:px-[70px] 2xl:px-[150px] ">

                            <div className="">
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  h-[200px] items-start">
                                        <h4 className="font-bold text-large">每次使用全新的拋棄式電極
                                            -不怕污染
                                        </h4>
                                        <small className="text-default-500 text-gray-900">玻璃電極的損耗，常來自於玻璃膜孔洞的堵塞，或者因清洗造成表面磨損。蜂鳥探針的拋棄式設計，特別適用於會和內參比液反應的蛋白質樣品，很難清潔的粘稠樣品，以及需要戶外長途攜帶的需求。</small>

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader03}
                                            alt="不怕汙染"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="UH1-18-不怕汙染720x540-2.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>

                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  h-[200px]  items-start">
                                        <h4 className="font-bold text-large">無需pH校正標準液-即開即用</h4>
                                        <small className="text-default-500 text-gray-900">傳統的酸鹼度計玻璃薄膜使用後，薄膜表面可交換氫離子含量發生變化(阻塞，磨損)，以及內部溶液氫離子濃度改變(內參考液濃度及壓力改變)，進而產生誤差，因此玻璃電極在精確測量前皆須進行校正後才能使用。蜂鳥探針的每一片試片都已經為您預先校正完畢，讓您即開即用。
</small>

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">

                                        <Image
                                            loader={myLoader03}
                                            alt=" 無需pH校正標準液及pH電極保存液的免校正微量拋棄式pH酸鹼電極/蜂鳥探針-超極生技UltraE"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="無需pH校正標準液.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  h-[200px]  items-start">
                                        <h4 className="font-bold text-large">每一片都有溫度感測元件，
                                            精確校正
                                        </h4>
                                        <small className="text-default-500 text-gray-800">溫度補償的原因是因為不同溫度時，同一個pH的液體會因為解離常數改變造成pH讀值改變，所以透過溫度補償的模式把不同溫度校正回25度的pH值。蜂鳥探針每一片都有獨立的溫度感應元件，精確測定樣品溫度，並做智慧型數據補償，精準顯示樣品pH值。

                                        </small>

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader03}
                                            alt="具有溫度補償功能的免校正微量拋棄式pH酸鹼電極/蜂鳥探針-超極生技UltraE"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="免校正微量拋棄式pH酸鹼電極.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  h-[200px]  items-start">
                                        <h4 className="font-bold text-large">方便攜帶，易保存，無需保養

                                        </h4>
                                        <small className="text-default-500 text-gray-900">蜂鳥探針酸鹼檢測試片(pH計)，使用專利的氫離子吸附膜設計以此替代傳統pH玻璃電極內參考電極的設計。因此，沒有填充液，不需保養，也無需保存於保存液體中。
</small>

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader03}
                                            alt="不會像玻璃電極破損，無需pH電極保存液方便攜帶的免校正微量拋棄式pH酸鹼電極/蜂鳥探針-超極生技UltraE"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"

                                            src="無需pH電極保存液.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div><Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  h-[200px]  items-start">
                                    <h4 className="font-bold text-large">國際認證

                                    </h4>
                                    <small className="text-default-500 text-gray-900">通過ISO 9001：2015品質管理系統國際驗證並取得證書。全面性的品質控制、設備自動化的生產、嚴謹的生產流程管制，確保每一次的檢測的精準。

                                    </small>

                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loader={myLoader03}
                                        alt="經過SGS ISO9001品質管理系統認證的免校正微量拋棄式pH酸鹼電極/蜂鳥探針-超極生技UltraE"
                                        className="object-cover rounded-xl"
                                        placeholder="empty"
                                        loading="lazy"
                                        src="SGS ISO9001品質管理系統認證.webp"
                                        width={500}
                                        height={300}
                                    />
                                </CardBody>
                            </Card></div>
                            <div><Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  h-[200px]  items-start">
                                    <h4 className="font-bold text-large">樣品量降至微升級一滴即可量測

                                    </h4>
                                    <small className="text-default-500 text-gray-900">生物樣品例如血液，唾液，腦髓液，組織液等都無法大量採樣。因此蜂鳥探針的將電極尺寸降低至1 mm，樣品需求量更是可小到1微升(μL)。對於使用極微量樣品之情境有很大的幫助，特別是細胞工程、基因工程及生命科學領域，量測準確度在±0.1，解析度在±0.01，足以符合市場上大部分的量測需求。

                                    </small>

                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loader={myLoader03}
                                        placeholder="empty"
                                        loading="lazy"
                                        alt="合成實驗室"
                                        className="object-cover rounded-xl"
                                        src="一滴可量測.webp"
                                        width={500}
                                        height={300}
                                    />
                                </CardBody>
                            </Card></div>





                        </div>
                    </div>
                </div>
            </section>

            
            
           
            <section className="section_contact">
                <div>
                    <div>
                        {/* <div>
                            <Lottie options={options} height={400} width={400} />
                        </div> */}
                    </div>
                    <div></div>
                </div>
            </section>

            <section className="section_feature section px-[100px]">
                <div className="container">
                    <div className="row mx-auto w-[95%] md:w-[90%] xl:w-[85%]">
                        <div className="top mt-5">
                            <div className="left  flex-col flex md:flex-row  items-center justify-center w-full">
                                <div className="top  w-full  md:w-[40%]  flex flex-col  items-center justify-center">
                                    <p className="text-[22px] font-bold">Hello OEM/ODM Customers

                                    </p>
                                    <div className="img flex  justify-center w-full md:w-2/5">
                                        <Image alt='oem-icon' src='oem-icon.webp' loader={myLoader05} width={300} placeholder="empty"
                                            loading="lazy" height={300}></Image>
                                    </div>
                                </div>

                                <div className="txt w-full md:w-[60%]">
                                    <div className="border mt-4 rounded-xl border-black p-10">
                                        <h4 className="text-[26px] font-semibold">
                                            Original Equipment Manufacturing/OEM
                                        </h4>
                                        <p>
                                            按照您的規格和設計圖全程為您代工製造
                                        </p>

                                    </div>
                                    <div className="mt-4">
                                        <div className="border rounded-xl border-black p-10">
                                            <h4 className="text-[26px] font-semibold">
                                                Original Design Manufacturing/ODM
                                            </h4>
                                            <p>
                                                提供我們您的需求，我們也可以為您設計規格和外觀並客製化的製造
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="bottom mt-5">
                            <div className="right flex-col md:flex-row flex w-full">
                                <div className="top  w-full md:w-[40%]  flex flex-col  items-center justify-center">
                                    <p className="text-[22px] font-bold">Hello OEM/ODM Customers

                                    </p>
                                    <div className="img flex  justify-center w-2/5">
                                        <Image src='oem-icon.webp' alt='oem-icon' loader={myLoader05} width={300} placeholder="empty"
                                            loading="lazy" height={300}></Image>
                                    </div>
                                </div>

                                <div className="txt w-full md:w-3/5">
                                    <div className="border rounded-xl mt-4 border-black p-10">
                                        <h4 className="text-[26px] font-semibold">
                                            微型酸鹼pH檢測元件的置入
                                        </h4>
                                        <p>
                                            可以在您的產品設計中加入我們的酸鹼檢測模塊
                                        </p>

                                    </div>
                                    <div className="mt-4">
                                        <div className="border rounded-xl border-black p-10">
                                            <h4 className="text-[26px] font-semibold"> 關於水質檢測，酸鹼值相關感測器合作開發
                                            </h4>
                                            <p>

                                                基於蜂鳥探針的試片架構，合作開發更多應用
                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="section_toolip section px-0 md:px-20 flex  flex-col justify-center items-center">
                <div className="wrap flex flex-col  md:flex-row px-[150px]  bg-slate-100   rounded-3xl w-full py-[100px]">
                    <div className="w-full  md:w-1/2 ">
                        <Image src='contact-man.webp' loading="lazy" loader={myLoader02} width={400} alt='contact-man' height={400}></Image>

                    </div>
                    <div className="txt w-full md:w-1/2 flex flex-col justify-center items-center">
                        <h4 className="text-[32px] font-bold">
                            快來跟我們聊聊吧!
                        </h4>
                        <p>如果還不確定是否適用
                            立即聯絡專人體驗我們的產品</p>

                        <a href="ContactUs.html" className="bg-rose-600 mt-4 px-5 py-1 text-white rounded-full">ContactUs</a>
                        <div className="icon-wrap">

                           

                        </div>
                    </div>

                </div>

            </section>


          

            <section className="section">
                <div className="row px-0 md:px-[70px] lg:px-[100px] xl:px-[100px] ">
                    <div className="   ">

                        <div className="">
                            <ArticleBottomSection />
                          
                        </div>

                    </div>
                </div>
            </section>
        
          


        </div>
    )
}
