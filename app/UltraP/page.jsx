"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import YouTubePlayer01 from '../../components/VideoPlayer/UltraP01.jsx';
import YouTubePlayer02 from '../../components/VideoPlayer/UltraP02.jsx';

import YouTubePlayer03 from '../../components/VideoPlayer/UltraP03.jsx';


// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
// import Spline from '@splinetool/react-spline/next';
import 'next-cloudinary/dist/cld-video-player.css';
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';

import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import SwiperSlider from '../../components/SwiperSliders/UltraPSlider.jsx'

import { Tabs, Tab} from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
import testPictureStatic from "../../public/images/SG01-Camera.webp";


import Carousel from "../../components/Products/ProductCarousel.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
// import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import JsonLd from '../../components/JsonLd.jsx';
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
// import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"

import carousel001 from '../../public/images/截圖.webp'

import UP1002 from '../../public/images/截圖.webp'
import ReactSlick from '../../components/reactSlick.jsx'
// iframe video 

import { Suspense } from "react";
import VideoComponent01 from '../../components/ui/VideoComponent01.jsx'
// import {Cloudinary} from '@cloudinary/url-gen';
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
// import { Video, CloudinaryContext } from "cloudinary-react";
// import { useEffect, memo } from "react";
// import { useInView } from "react-intersection-observer";
// import { VideoPlayer } from "../../components/VideoPlayer.jsx";
import { CldVideoPlayer } from "next-cloudinary";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}




// import realize import 
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";


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



const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};
const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};


const ProductPost = {
    title: '極安簡測-胃幽門桿菌尿素呼氣檢測系統(UBT-Pro)',
    description: "適用於診斷及檢測胃幽門螺旋桿菌，非侵入檢測方式,30分鐘立即獲得檢測成果,可用於評估治療前後效果, 自動判讀檢測成果,兩種版本: 專業版 / 居家檢測版本",

    image: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/輪播圖01.webp",
    positive01: "非侵入檢測方式",
    positive02: "30分鐘立即獲得檢測成果",
    positive03: "可用於評估治療前後效果",
    positive04: "自動判讀檢測成果",
    positive05: "兩種版本: 專業版 / 居家檢測版本",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/ultraP-logo.webp",
    BrandName: "UltraPeace",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};




const Product = props => (
    

    <div className="relative">

        <link rel="alternate" href="https://www.ultraehp.com/ultrapeace/" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/ultrapeace/en/" hreflang="en" />

        <title>極安簡測｜快速胃幽門螺旋桿菌檢測-UBTiw｜胃幽門桿菌｜胃幽門桿菌呼氣檢測

        </title>
        <meta key="description" name="description" content="適用於診斷及檢測胃幽門螺旋桿菌，非侵入檢測方式,30分鐘立即獲得檢測成果,可用於評估治療前後效果, 自動判讀檢測成果,兩種版本: 專業版 / 居家檢測版本" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        <meta property="og:url" content="https://www.ultraehp.com/ultrapeace/" />
       
        <meta property="og:type" content="article" />
        <meta property="og:title" content="極安簡測｜快速胃幽門螺旋桿菌檢測-UBTiw｜胃幽門桿菌｜胃幽門桿菌呼氣檢測" />
        <meta property="og:description" content="胃幽門螺旋桿菌（Helicobacter pylori）是一種微小的革蘭氏陰性菌。胃幽門螺旋桿菌是螺旋狀且具有纖毛，這種形狀使得它能夠在胃部黏膜中穿梭移動。它表面的黏附分子能夠與胃部黏膜細胞表面的受體結合，這有助於它們固定在胃部黏膜上並避免被洗脫。這些特點使得胃幽門螺旋桿菌能夠在胃部環境中存活並定居，導致感染和相關的胃部問題。" />
        <meta property="og:image" content="https://asset.cloudinary.com/drmonozsf/6dc665fdc678c06ce447b5dfb772d746" />


        {/* <AnimatedTabs /> */}
      {/* <MobileMenu/> */}


      
        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>

            <div>


                <JsonLd data={{
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": ProductPost.title,  // Adding 'name' field
                    "headline": ProductPost.title,
                    "description": ProductPost.description,
                    "image": [ProductPost.image],
                    "brand": {
                        "@type": "Brand",
                        "name": ProductPost.BrandName,
                        "logo": {
                            "@type": "ImageObject",
                            "url": ProductPost.LogoImg
                        }
                    },
                    "offers": {  // Adding 'offers' field
                        "@type": "Offer",
                        "priceCurrency": "USD",  // Example currency
                        "price": "0.00",  // Example price
                        "itemCondition": "https://schema.org/NewCondition",
                        "availability": "https://schema.org/InStock",
                        "seller": {
                            "@type": "Organization",
                            "name": "Seller Name"  // Replace with actual seller name
                        }
                    },
                    "review": {  // Adding 'review' field (example)
                        "@type": "Review",
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": "4",
                            "bestRating": "5"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Reviewer Name"  // Replace with actual reviewer name
                        },
                        "datePublished": "2024-07-02",
                        "reviewBody": "This is a sample review text."
                    },
                    "positiveNotes": {  // Adding 'positiveNotes' field
                        "@type": "ItemList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": ProductPost.positive01
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": ProductPost.positive02
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": ProductPost.positive03
                            },
                            
                            {
                                "@type": "ListItem",
                "position": 4,
                "name": ProductPost.positive04
                            },
                {
                    "@type": "ListItem",
                "position": 5,
                "name": ProductPost.positive05
                            }
                        ]
                    },
                    "mainEntityOfPage": ProductPost.mainEntityOfPage
                }} />

            </div>


 <div className="fixed mobile-lang w-full top-[10px] pr-5 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/ultrapeace/en/">
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
                            <a className="block w-full" href="https://www.ultraehp.com/ultrapeace/en/">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className="block w-full" href="https://www.ultraehp.com/ultrapeace/">繁體中文</a>
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>


            </div>
            <div className='fullscreen relative mt-[30px] pt-[90px] md:pt-[60px]'>

                <a href='https://www.ultraehp.com/ultrapeace/'>
                <Image loader={myLoader001} src='ultraP-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[109px] z-50 top-[60px] left-7" alt='UltraP-logo' height={60}></Image></a>


                <section className="section   mt-[200px]">
                    <div className="Navgation mb-[30px] hidden md:block pl-[150px]"> <a href="https://ultraehp.com/" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href='# '>胃幽門桿菌尿素呼氣檢測系統</a> </div>
                    <SwiperSlider />

                </section>


            </div>

            <div className="content-bottom md:p/x-10 xl:px-15 2xl:px-20">
                <div className="mainTitle">
                    <h2 className="">關於胃幽門螺旋桿菌</h2>
                </div>
                <section className="section_about" id="features">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row flex items-center flex-col  justify-center">
                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center  text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex justify-center flex-col items-center align-middle">
                                           

                                            <h3 className="h3-Hp">什麼是胃幽門螺旋桿菌？
</h3>
                                            <p className="container-text-wrap text-Hp">胃幽門螺旋桿菌（Helicobacter pylori）是一種微小的革蘭氏陰性菌。胃幽門螺旋桿菌是螺旋狀且具有纖毛，這種形狀使得它能夠在胃部黏膜中穿梭移動。它表面的黏附分子能夠與胃部黏膜細胞表面的受體結合，這有助於它們固定在胃部黏膜上並避免被洗脫。這些特點使得胃幽門螺旋桿菌能夠在胃部環境中存活並定居，導致感染和相關的胃部問題。</p>
                                        </div>

                                    </motion.h2>
                                  

                                </motion.div>


                             

                            </div>
                            



                        </div>
                    </div>
                </section>
                <Image src='H.PyloriInfect.webp' loading="lazy" placeholder="empty" loader={myLoader} width={1920} height={768} alt='H.PyloriInfect' className="hidden lg:block"/>

                <Image src='H.PyloriInfect向量圖-1024x576.webp' loading="lazy" placeholder="empty" loader={myLoader} width={1024} height={576} alt='H.PyloriInfect' className="hidden md:block lg:hidden" />

                <Image src='H.PyloriInfect向量圖-640x640.webp' loading="lazy" placeholder="empty" loader={myLoader} width={640} height={640} alt='H.PyloriInfect' className="block md:hidden" />


                <section className="section_infection px-[20px]" id="features">
                    <div className="Container  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
                          
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex flex-col justify-center items-center center ">


                                            <h3 className="h3-Hp">感染胃幽門螺旋桿菌

                                            </h3>
                                            <p className=" container-text-wrap text-Hp">感染幽門螺旋桿菌後，不同個體的反應會有所不同：某些個體可能不會出現明顯的症狀，即使他們已被幽門螺旋桿菌感染。另一些個體可能會因感染導致胃酸過量，進而引發幽門部胃炎和十二指腸潰瘍等併發症。另一類個體感染幽門螺旋桿菌後，可能進展為慢性胃炎，此狀況更增加罹患胃癌的風險。
</p>
                                          
                                        </div>

                                      

                                    </motion.h2>


                                </motion.div>
                                <div className="row">
                                    <motion.div className="card"
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ staggerChildren: 0.3 }}
                                    >

                                        <motion.h2
                                            className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                            variants={ImageAnimate}
                                        >

                                            <div className="container center relative w-full  flex justify-center">
                                              

                                                <Image loader={myLoader} loading="lazy" src='胃癌演化階段.webp' alt='胃癌演化階段' placeholder="empty" width={1000} height={768}></Image>




                                            </div>




                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>


                <section className="section_global" id="features">
                    <div className="Container px-[20px] md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex flex-col justify-center items-center center ">


                                            <h3 className="h3-Hp">全球有幾乎一半的人感染胃幽門螺旋桿菌


                                            </h3>
                                            <p className="  container-text-wrap text-Hp">胃幽門螺旋桿菌的感染方式主要通過飲食或口腔傳染。這種細菌可以存在於受感染者的唾液、口腔、嘔吐物或粪便中。它可以透過直接接觸、共用餐具、飲食中被污染的食物或水等途徑傳播。此外，感染者也可以通過接觸受感染者的嘔吐物或粪便而感染。

                                            </p>

                                        </div>



                                    </motion.h2>


                                </motion.div>
                                <div className="row">
                                    <motion.div className="card"
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ staggerChildren: 0.3 }}
                                    >

                                        <motion.h2
                                            className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                            variants={ImageAnimate}
                                        >

                                            <div className="container center relative w-full  flex justify-center">
                                               
                                                <Image loader={myLoader} src='世界地圖-01.webp' alt="世界地圖" placeholder="empty" loading="lazy" width={1000} height={768} />
                                              



                                            </div>
                                            <div>
                                                <ul>
                                                    <li className="text-xs text-gray-800 font-normal text-left">Ref：</li>
                                                    <li className="text-xs text-gray-800 font-normal text-left">1.JGH Open, Volume: 7, Issue: 1, Pages: 3-15, First published: 21 November 2022, DOI: (10.1002/jgh3.12843)</li>
                                                    <li className="text-xs text-gray-800 font-normal text-left">2. Ali Pormohammad, J Cell Physiol, 2019;234:1208–1218</li>
                                                </ul>
                                              
                                            </div>





                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>



                <section className="section_video01 flex justify-center">
                   <div className="w-full md:w-4/5 px-[20px] lg:w-2/3  blank  ">
                    <YouTubePlayer01/>

                      
                         
                    

                        
                   </div>
                </section>


                <section className="section_global" id="features">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >


                                    <h3 className="h3-Hp text-center">胃幽門螺旋桿菌不同診斷方式比較



                                    </h3>

                                </motion.div>
                                <div className="row">
                                    <motion.div className="card"
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ staggerChildren: 0.3 }}
                                    >

                                        <motion.h2
                                            className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                            variants={ImageAnimate}
                                        >

                                            <div >

                                              
                                                <div className="flex px-0 md:pr-[40px] md:pl-[40px]  flex-col">
                                                    <div className="overflow-x-auto w-[430px] sm:w-[550px]  md:w-[920px] lg:w-[100%] ">
                                                        <div className="inline-block   py-2 sm:px-6 lg:px-8">
                                                            <div className="overflow-x-scroll w-full">
                                                                <table
                                                                    
                                                                    className="p-2  md:ml-[0px] w-[1000px] md:w-[1100px] border text-center text-sm font-light dark:border-neutral-500">
                                                                   
                                                                    <tbody>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                
                                                                                rowSpan={2}
                                                                                className=" 
                                                                                bg-t-color-1
                                                                                
                                                                                border-r  font-medium dark:border-neutral-800">
                                                                                侵入式/非侵入式
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  font-medium dark:border-neutral-800 bg-t-color-2">
                                                                                侵入式
                                                                            </td>
                                                                            <td
                                                                                 colSpan={4}
                                                                                className=" border-r  font-medium dark:border-neutral-800 bg-t-color-2">
                                                                                非侵入式
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r p-0 md:p-4  font-medium dark:border-neutral-500">
                                                                                <Image src='內視鏡.webp' 
                                                                                loader={myLoader} className="mx-auto" loading='lazy' placeholder="empty" alt="內視鏡-icon" width={80} height={80}/>
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='糞便抗體檢測.webp' className="mx-auto" alt="內視鏡-icon" width={80} loader={myLoader} height={80} />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4  dark:border-neutral-500">
                                                                                <Image src='血清檢測.webp' alt="檢測ICON_工作區-icon" width={80} loading="lazy" placeholder="empty" height={80} className="mx-auto" loader={myLoader} />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='13C尿素呼吸法.webp' loader={myLoader} alt="13C尿素呼吸法-icon" width={80} loading="lazy" placeholder="empty"  height={80} className="mx-auto" />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='快速尿素呼吸法-UBTIW.webp' alt="快速尿素呼吸法-icon" width={80} loader={myLoader} loading="lazy" placeholder="empty"  height={80} className="mx-auto" />
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                檢測方法	
                                                                            </td>
                                                                            <td
                                                                            
                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                內視鏡
                                                                            </td>

                                                                         
                                                                            <td   className=" border-r break-words dark:border-neutral-500 bg-t-color-4">糞便抗體檢測		</td>
                                                                            <td className=" border-r bg-t-color-5 break-words dark:border-neutral-500">血清檢測		</td>
                                                                            <td className="bg-t-color-6  border-r break-words dark:border-neutral-500"><sup>13</sup>C 尿素呼吸法</td>
                                                                            <td className="bg-t-color-7  border-r break-words dark:border-neutral-500">快速尿素呼吸法-UBT<span >IW</span></td>
                                                                           
                                                                         

                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                樣品型態	
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                胃部組織	
                                                                            </td>


                                                                            <td className=" border-r  dark:border-neutral-500 bg-t-color-4">糞便			</td>
                                                                            <td className=" border-r bg-t-color-5  dark:border-neutral-500">血液		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">呼出氣體	</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500">呼出氣體
</td>



                                                                        </tr>

                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                檢測時間
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                1-2 hr
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">3-7 days</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">3-7 days		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">3-7 days	</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500">  小於 1 hr
                                                                            </td>



                                                                        </tr>

                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className="bg-t-color-2  border-r  font-medium dark:border-neutral-500">
                                                                                費用/NT	
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                高	
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">低</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">低		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">中	</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500"> 中
                                                                            </td>



                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                優缺點	
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                不舒服	
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">可評估治療前後療效	</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">不可評估治療前後療效，<br></br>
只可判斷是否曾經感染過HP		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">可評估治療前後療效		</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500"> 可評估治療前後療效

                                                                            </td>



                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                準確度	
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                高	
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">低	</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">低		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">高			</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500"> 高	

                                                                            </td>



                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                            




                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>

                {/* <section className="p-0 m-0">
                    <div className="banner01 p-0 m-0">
                        <Image src='banner0445.png' height={600} className="rounded-2xl mx-auto" width={1920} loader={myLoader} loadong='lazy' ></Image>
                    </div>
                </section> */}





                <section className="section_Detection " >
                    <div className="Container px-[20px] md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
                                <h2 className=" mainTitle">極安簡測-<br/>胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>

                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex flex-col px-4 justify-center items-center center ">


                                            <h3 className="h3-Hp">檢測原理



                                            </h3>
                                            <p className="  container-text-wrap text-Hp">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。我們通過檢測從呼吸中排出的氨氣，對比服用尿素前的背景數值，從而確定是否感染胃幽門螺旋桿菌。
                                            </p>

                                        </div>



                                    </motion.h2>


                                </motion.div>
                                <div className="row">
                                    <motion.div className="card"
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ staggerChildren: 0.3 }}
                                    >

                                        <motion.h2
                                            className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                            variants={ImageAnimate}
                                        >

                                            <div className="container center relative w-full  flex justify-center">


                                                <Image src='HPY 胃檢測說明-中文-01.webp' alt='胃檢測說明' placeholder="empty" loader={myLoader} loading="lazy" width={1000} height={768}></Image>





                                            </div>





                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>
                <section className="section_Technology " >
                    <div className="Container px-[20px] ">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex flex-col justify-center items-center px-0 md:px-[50px] center ">


                                            <h3 className="h3-Hp w-2/3 md:w-full">核心專利技術<br/>
                                                拋棄式氣體pH電化學試片


                                            </h3>
                                            <p className="w-[85%]">專利的納米孔洞水凝膜，會藉由水凝膜交換氣體後，在電極表面進行水解後可以直接檢測揮發性酸鹼氣體的pH值
                                            </p>

                                        </div>



                                    </motion.h2>


                                </motion.div>
                                <div className="row">
                                    <motion.div className="card"
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ staggerChildren: 0.3 }}
                                    >

                                        <motion.h2
                                            className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                            variants={ImageAnimate}
                                        >

                                            <div className="container center relative w-full  flex justify-center">

                                                <Image placeholder="empty" loader={myLoader} loading="lazy" alt="拋棄式氣體pH電化學試片" src='拋棄式氣體pH電化學試片.png' width={1220} height={768}></Image>




                                            </div>





                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>
                <section className="section_video02 section  flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-2/3 p-3 lg:p-5  ">

                                   <YouTubePlayer02 />

                     
{/* 
                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/3C-極安簡測核心技術介紹-中文版.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600}  cldVid={cld.video('/UP100/3C-極安簡測核心技術介紹-中文版_p6omsc')} /> */}
                    </div>
                </section>







                <section className=" section_FastCheck ">
                    <div className="Container px-[20px]  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">

                                <h2 class="mainTitle">極安簡測-<br></br>胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>
                            </div>
                           
                            <div className="row ">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >
                                     

                                        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 px-0 md:px-10 lg:px-20">
                                           
                                            <div className="flex flex-col ">
                                               
                                                <h3 class="h3-Hp">用常規尿素替代<br></br>同位素標定的<sup>13</sup>C尿素<span></span></h3>
                                                <div className="px-0 lg:px-10 flex flex-col items-center m-3  ">
                                                    <Image placeholder="empty" loading="lazy" alt="常規尿素替代C13尿素" src='常規尿素替代C13尿素.webp' loader={myLoader} width={600} height={600}></Image>

                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 class="h3-Hp">無需送樣品去檢驗中心，<br></br>30分鐘現場即可讀取報告</h3>
                                                <div className="px-0 lg:px-10 m-3 flex  flex-col items-center ">
                                                    <Image  loader={myLoader} src='30分鐘取報告.webp'  alt='30分鐘取報告' loading="lazy" width={600} height={600}></Image>

                                                </div>
                                            </div>
                                          

                                           




                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>

{/* 
                <section>
                    <div className="container">
                        <div className="left">

        <main>
                                <Spline
                                    scene="https://prod.spline.design/cPZDRSw-YP7AuzNs/scene.splinecode"
                                />
                            </main>
                            
                        </div>
                        <div className="right">
                            
                        </div>
                    </div>
                </section> */}




                <section className="">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">

                                <h2 class="mainTitle">兩種版本的快速UBT檢測組滿足不同用戶需求</h2>
                            </div>
                            
                            <div className="row ">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >


                                        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-20">

                                            <div className="flex flex-col ">

                                                <h3 class="h3-Hp">一鍵自動檢測
</h3>
                                                <div className="px-0 lg:px-10 flex p-0 lg:p-7 flex-col items-center m-0 lg:m-3  ">
                                                    <Image  src='專業版產品圖-中文-01.webp' loading="lazy" alt='專業版胃幽門螺旋桿菌尿素呼吸檢測系統全部部件展示/極安簡測-UltraPeace/ 超極生技 UltraE' loader={myLoader} width={600} height={600}></Image>

                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 class="h3-Hp ">專利整合試片無需meter
</h3>
                                                <div className="px-0 lg:px-10 flex p-0 lg:p-7 flex-col items-center m-0 lg:m-3  ">
                                                    <Image placeholder='empty' loading="lazy" src='家用版產品圖-中文-01.webp' width={600} alt='家用版胃幽門螺旋桿菌尿素呼吸檢測系統全部部件展示/極安簡測-UltraPeace/ 超極生技 UltraE' loader={myLoader} height={600}></Image>

                                                </div>
                                            </div>







                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>



              
                <section className="section">
                    
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">
                                <h2 class="mainTitle blank02">如何使用快速<br/>幽門螺旋桿菌尿素呼吸檢測組</h2>
                            </div>

                            <div className="row">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >

                                      <div className="flex  justify-center align-middle items-center flex-col">
                                            <Image src='UP100專業版使用步驟-cn.webp' placeholder="empty" loading="lazy" alt='UP100專業版使用步驟' loader={myLoader} width={1100} height={600}></Image>
                                            <Image className="mt-5" alt="UP100家用版使用步驟" src='UP100家用版使用步驟-cn.webp' placeholder="empty" loader={myLoader} loading="lazy" width={1100} height={600}></Image>
                                      </div>

                                      <span className="text-[14px] text-center font-normal">For Research Only</span>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>


                <section className="section_video03 section  flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-2/3 p-3 lg:p-5  ">

                                   <YouTubePlayer03 />

                     

                        {/* <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/極安簡測 胃幽門桿菌產品介紹-中文版.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UP100/極安簡測_胃幽門桿菌產品介紹-中文版20231127_ojx0jd')} /> */}
                    </div>
                   
                </section>

{/* 
                <div className="row">
                    <div>
                        <Image src='A2343211_TD03_V1_3078x.png' height={600} className="my-[30px] mx-auto" width={1000} loader={myLoader} loadong='lazy' ></Image>
                    </div>
                </div> */}

                <section className="section_others section hidden md:block">
                    <div className="Container ">

                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">

                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-[26px] font-extrabold  tracking-tight text-gray-900 md:text-[30px] lg:text-[32px] lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >您可能也會喜歡

                                        <h2 className="text-black">
                                        </h2>
                                        <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">Others Products
                                        </p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >


                                        {/* 
                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div> */}


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            
                            <div className="row  sm:px-[30px] xl:px-[80px]">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >


                                        <OthersProducts />









                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>

               


                
            </div>




        </motion.div>

    </div>

);


// Product.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res = await fetch(
//         `https://my-json-server.typicode.com/bob1127/next/products/${id}`
//     );
//     const product = await res.json();
//     return { product };


// };

export default Product;
