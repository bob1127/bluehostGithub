"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";

import YouTubePlayer from '../../components/VideoPlayer/UH1.jsx';

// import { CldImage } from 'next-cloudinary';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import ReadMoreReact from 'read-more-react';
import JsonLd from '../../components/JsonLd.jsx';
import Image from 'next/image'
// import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Marquee from 'react-fast-marquee';
import SwiperSlider from '../../components/SwiperSliders/UH1Slider.jsx'
import FindSPE from '../../components/FindSPE.jsx'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";



import { Tabs, Tab } from "@nextui-org/react";

import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
import testPictureStatic from "../../public/images/SG01-Camera.webp";

import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CldImage } from 'next-cloudinary';

import Carousel from "../../components/Products/ProductCarouselUH1.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
import WhenUse from '../../components/WhenUse.jsx'
// import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
// import IMG01 from 'https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-07-%E6%84%9F%E6%B8%AC%E5%85%83%E4%BB%B6720x540.webp'
import { CldVideoPlayer } from "next-cloudinary";
import carousel001 from '../../public/images/截圖.webp'

import UP1002 from '../../public/images/截圖.webp'
import ReactSlick from '../../components/reactSlick.jsx'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
}
const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/image/DM/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/iso certification/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/brand/${src}?w=${width}?p=${placeholder}`
}
const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/product-01/${src}?w=${width}?p=${placeholder}`
}
const myLoader08 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})

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
    title: 'Humming Probe UH1免校正微量酸鹼電極',
    description: "免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH1具有無需使用校正液校正，打開即用的拋棄式設計。微升級的樣品需求量，適合只有珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。無電極保存液方便攜帶，適合戶外無電源使用。酸鹼測試電極",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-2/UH2-4-%E4%B8%80%E6%BB%B4%E9%87%8F%E6%B8%AC1000x1000.webp",
    positive01: "即開即用，精準免校正",
    positive02: "樣品使用量最少(10~20μL)",
    positive03: "拋棄式電極無交叉汙染",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
    BrandName: "UltraE",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};






// const ProductPost = {
//     title: 'Humming Probe UH1免校正微量酸鹼電極',
//     description: "免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH1具有無需使用校正液校正，打開即用的拋棄式設計。微升級的樣品需求量，適合只有珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。無電極保存液方便攜帶，適合戶外無電源使用。酸鹼測試電極",

//     image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
//     positive01: "即開即用，精準免校正",
//     positive02: "樣品使用量最少(10~20μL)",
//     positive03: "拋棄式電極無交叉汙染",
//     LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo.webp",
//     BrandName: "UltraE-hummingprobe",
//     mainEntityOfPage: {
//         "@type": "WebPage",
//         "@id": ""
//     }
// };






const Product = props => (


    <div className="relative">


        {/* 結構化資料  */}
        


        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UH1.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UH1.html" hreflang="en" />

        {/* meta seo tag */}   
        <title>蜂鳥探針-UH1｜免校正微量拋棄式pH酸鹼檢測電極｜微升級樣品｜Humming Probe｜超極生技UltraE
        </title>
        <meta key="description" name="description" content="免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH1具有無需使用校正液校正，打開即用的拋棄式設計。微升級的樣品需求量，適合只有珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。無電極保存液方便攜帶，適合戶外無電源使用。酸鹼測試電極" />
        <meta name='keywords' content='免校正微量酸鹼電極|酸鹼試片|酸鹼檢測|pH試片電極|pH電極|pH試片|' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


     
        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UH1.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="
蜂鳥探針-UH1｜免校正微量拋棄式pH酸鹼檢測電極｜微升級樣品｜Humming Probe｜超極生技UltraE
" />
        <meta property="og:description" content="免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH1具有無需使用校正液校正，打開即用的拋棄式設計。微升級的樣品需求量，適合只有珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。無電極保存液方便攜帶，適合戶外無電源使用。酸鹼測試電極
" />
        <meta property="og:image" content="https://ultraehp.com/images/Ultra Video/UH1/中文版/YouTube-UH1-中文.jpg" />

        {/*

{/*
        <AnimatedTabs /> */}
        {/* <MobileMenu/> */}


      
        



        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>



            <div>
                {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

                {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

                {/* JSON-LD for Blog Post */}










                {/* 結構化資料 UH2 */}






               <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "HummingProbe",
                "headline": ProductPost.title,
                "description": ProductPost.description,
                "datePublished": ProductPost.datePublished,
                "author": {
                    "@type": "Person",
                    "name": "HummingProbe"
                },
                "image": [ProductPost.image],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "5"
                },

                "brand": {
                    "@type": "Brand",
                    "name": ProductPost.BrandName,
                    "logo": ProductPost.LogoImg,
                },
                "positiveNotes": {
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
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": ProductPost.positive03
                        }
                    ]
                },


                "mainEntityOfPage": ProductPost.mainEntityOfPage
            }} />
            </div>
            <div>
              
                {/* <Script src="/path/to/your/script.js" strategy="beforeInteractive" /> */}
            </div>


           <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/en/UH1.html">
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
                            <Image className='mb-3 pr-20 ' src='earth.png' loader={myLoader08} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                            <a className='block w-full' href="https://www.ultraehp.com/hummingprobe/en/UH1.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='block w-full' href="https://www.ultraehp.com/hummingprobe/UH1.html">繁體中文</a>
                        </DropdownItem>
                     
                    </DropdownMenu>
                </Dropdown>


            </div>
            <Navigation />
            <div className='fullscreen relative mt-[20px] md:mt-0 pt-[60px]'>


                <a href="https://www.ultraehp.com/hummingprobe/">
                
                <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy'  className="fixed mt-2 ml-[20px] md:ml-[109px] z-50 top-[60px] left-10" alt='UltraP-logo' height={60}></Image> </a>

               

                <section className="section  mt-0 md:mt-[150px]">
                    <div className="Navgation hidden md:block mb-[30px] pl-[150px]"> <a href="https://ultraehp.com/" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href='#'>Humming Probe UH1 免校正微量酸鹼電極</a> </div>

                    <div className="container  w-full flex px-[0px] md:px-[20px] xl:px-[70px] flex-col md:flex-row justify-start items-start">
                      
                        <div className="left w-full md:w-1/2">
                          
                            <SwiperSlider />


                        </div>
                                            
                        <div className="right flex justify-center  md:justify-between md:pl-[50px] xl:pl-[80px] w-full md:w-1/2 flex-col  h-[480px]">
                            <div className="txt">
                                <h1 className="h1-u">Humming Probe UH1<br/>
                                    免校正微量酸鹼電極</h1>
                                <h2 className="model-u">酸鹼試片/酸鹼檢測/pH試片電極/pH電極/pH試片

                                </h2>
                                <p className="text-middle-u">全球首創免校正酸鹼量測的方法，創新技術將電極量測原理整合在單一試片上。採用試片電極檢測pH值，具備以下特色:
                                </p>
                                <ul>
                                    <li>・即開即用 ，精準免校正
                                    </li>
                                    <li>・樣品使用量最少(10~20μL)
                                    </li>
                                    <li>・拋棄式電極無交叉汙染
                                    </li>
                                    <li>・精準度可達 ±0.1 pH
                                    </li>
                                    <li>・每片試片內建溫度感測元件

                                    </li>
                                    <li>・易於攜帶

                                    </li>
                                </ul>
                            </div>
                            <div className="btn-wrap ">

                                <div className="w-full md:w-3/4 flex flex-col md:flex-row">
                                    <ModalBtn02 />

{/* 
                                    <ModalBtn01 /> */}
                                </div>



                            </div>

                        </div>
                    </div>
                </section>

          
            </div>

            <div className="content-bottom">

                <section className="section-video">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                        <div className="row flex flex-col justify-center items-center mb-5">

                            <h2 className="h2-u">Operation</h2>
                            <p>Video</p>

                        </div>
                        <div>

                            <YouTubePlayer />
                        </div>
                    </div>
                </section>

               
               
                {/* <section className="  section_video01  p-0 m-0  flex justify-center">

                    <div className="container px-[20px] md:px-0 w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row mb-5 ">

                            <h2 className="h2-u">操作影片</h2>
                            <p className="text-center text-model-u">Operation</p>

                        </div>
                        <div className="row">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Products-Detail-Img/UH-1/YouTube-UH1-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl mx-auto' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UH1Video/UH1中文版_o0gbj3')} />

                        </div>










                    </div>
                </section> */}

                <section className="section mx-0 px-0">

                    <Image loader={myLoader06} className="hidden  xl:block  " placeholder="empty" loading="lazy" alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針可提供微升級的樣品測試/Humming Probe UH1/超極生技UltraE' src='UH1-banner-1920x768.webp' width={1920} height={768}></Image>

                    <Image loader={myLoader06} className="hidden  md:block  xl:hidden  " placeholder="empty" loading="lazy" alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針可提供微升級的樣品測試/Humming Probe UH1/超極生技UltraE' src='UH1-banner-1024x576.webp' width={1024} height={768}></Image>

                    <Image loader={myLoader06} className="block  md:hidden  " placeholder="empty" loading="lazy" alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針可提供微升級的樣品測試/Humming Probe UH1/超極生技UltraE' src='UH1-banner-640x640.webp' width={1920} height={768}></Image>
                </section>
                <section className=" seection_fit px-[20px] md:px-0">
                    <h2 className="h2-u">蜂鳥探針pH檢測電極為什麽可以免校正？

                    </h2>
                    <div className="card-wrap flex flex-wrap justify-center items-center  px-0 xl:px-20">
                        <div className="card mt-4 h-full md:m-4 py-4  overflow-hidden  w-full md:w-[42%]  border rounded-2xl">
                            <div className="  overflow-scroll txt p-8 flex flex-col justify-start items-center">

                                 <div className="title">
                                    <h3 className="text-[22px] text-center text-black">專利氫離子吸附膜設計



</h3>

                                    <h4 className="font-bold text-orange-500 text-center  text-[20px]">
                                        提供固定的電極反應面積





</h4>
                                 </div>
                                <ReadMoreReact 
                                  
                                    min={45}
                                    ideal={48}
                                    max={70}
                                    readMoreText="...."
                                    text="我們使用專利的氫離子吸附膜，除了可以選擇性讓樣品中氫離子通過，避免樣品中其他雜質吸附電極表面造成的鈍化，簡化樣品處理步驟。更可以通過氫離子吸附膜的設計精確控制能斯特方程式中會影響Ek’數值的表面可交換氫離子含量。"/>
                               



                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={500} placeholder="empty" loading='lazy' alt='專利氫離子吸附膜設計_UH1 ' className='mx-auto rounded-xl' height={300} src='UH1-01-720x540.webp'></Image>
                            </div>
                        </div>
                        <div className="card bg-white h-full md:m-4  mt-4 overflow-hidden  w-full md:w-[42%]  border rounded-2xl py-5">
                            <div className="txt p-8  overflow-scroll flex flex-col justify-start  items-center">
                                <div className="title">
                                    <h3 className="text-[22px] text-center text-black">預先出廠前校正




                                    </h3>

                                    <h4 className="font-bold text-center text-orange-500 text-[20px]">
                                        每一片試片在出廠前已完成分析級pH校正








                                    </h4>
                                </div>
                                <ReadMoreReact

                                    min={45}
                                    ideal={48}
                                    max={70}
                                    readMoreText="...."
                                    text="自動化生產機台，將研發成果快速導入生產製程，最有效率的銜接研發與生產。試片自動化生產機台(G1)，透過自動化生產模式，試片生產穩定性可達CV值3~5%以下。除此之外，針對不同製程需求，開發不同種類自動化機台，如溫度感測元件組裝機等，增加生產穩定性，品質始終如一。

" />
                        

                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={500} placeholder="empty" loading='lazy' alt='自動化生產技術_UH1' height={300} className='mx-auto rounded-xl' src='UH1-09-製程操控720x540.webp'></Image>
                            </div>
                        </div>

                        <div className="card bg-white h-full py-4 md:m-4 mt-4 overflow-hidden  w-full md:w-[42%]  border rounded-2xl">
                            <div className="  overflow-scroll txt p-8 flex flex-col justify-start items-center">
                                <div className="title">
                                    <h3 className="text-[22px] text-center text-black">每一片都設置獨立溫度感測元件




                                    </h3>

                                    <h4 className="font-bold text-orange-500 text-center text-[20px]">
                                        讓每一次測試都有智能的溫度補償








                                    </h4>
                                </div>
                                <ReadMoreReact

                                    min={45}
                                    ideal={48}
                                    max={70}
                                    readMoreText="...."
                                    text="我們使用NIST 認證可追溯性的pH 標準品在出廠前完成實驗室等級的校正並完成驗證，所以您只需從乾燥試片罐中取出電極，即可直接測試。

" />

                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={500} placeholder="empty" loading='lazy' alt='預先出廠前校正_UH1' height={300} className='mx-auto rounded-xl'  src='UH1-09-製料720x540.webp'></Image>
                            </div>
                        </div>

                        <div className="card bg-white md:m-4 h-full py-4 mt-4 w-full  overflow-hidden  md:w-[42%]  border rounded-2xl">
                            <div className=" overflow-scroll txt p-8 flex flex-col justify-start items-center">
                                <div className="title">
                                    <h3 className="text-[22px] text-center text-black">自動化生產技術



                                    </h3>

                                    <h4 className="font-bold text-center text-orange-500 text-[20px]">
                                        讓每一片電極看起來"一模一樣"







                                    </h4>
                                </div>
                                <ReadMoreReact

                                    min={45}
                                    ideal={48}
                                    max={70}
                                    readMoreText="...."
                                    text="每一片試片嵌有獨立的小體積溫度感測元件，當樣品溫度在10-40度的範圍之內，即使在少量樣品量下，也具有自動溫度補償功能(ATC),解析度可達0.01 pH。" />
                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={500} placeholder="empty" loading='lazy' alt='每一片都設置獨立溫度感測元件_UH1' className='mx-auto rounded-xl' height={300} src='UH1-07-感測元件720x540.webp'></Image>
                            </div>
                        </div>

                    </div>
                </section>

                <section className=" section_special px-[20px] md:px-0">
                    <div className="container lg:px-10 xl:px-20 mx-auto">
                        <h2 className="h2-u ">蜂鳥探針pH檢測電極UH1
                            除了免校正外<br/>還有有什麼特別之處？</h2>
                        <div className="bottom flex flex-col  md:flex-row fjustify-end items-start">
                            <div className="left w-full md:w-[70%] xl:w-1/2">
                                <Image loader={myLoader06} src='UH1-01.webp' className="rounded-2xl m-0 p-0" placeholder="empty" loading='lazy' width={600} height={600} alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極樣品需求可降至微升級/Humming Probe UH1/超極生技UltraE'></Image>

                            </div>
                            <div className="right p-0 md:pl-[20px] md:w-[80%] xl:w-1/2">
                                <div className="top  mt-3  rounded-2xl p-[50px]  bg-orange-500">
                                    <b className="text-white">一滴即可測量
                                    </b>
                                    <br />
                                    <b>UH1電極尺寸降低至10 毫米
                                        樣品需求量更是可減少到10微升</b>
                                    <p className="mt-3 text-[14px]  w-full sm:w-[80%] md:w-full">生物樣品例如血液，唾液，腦髓液，組織液等都無法大量採樣。通常這類量少的樣品需要購買價格昂貴的超小型的玻璃pH計電極才能完成測試。UH1可通過取樣滴加，或是蘸取的方式完美提供解決方案。 *UH2提供更低至1微升的样品需求量 <a href="https://www.ultraehp.com/hummingprobe/UH2.html">（了解UH2）</a>

                                    </p>

                                </div>
                                <div className="bottom flex flex-col md:flex-row justify-start items-start">
                                   
                                    <div className="right w-full  md:w-1/2">
                                        <Image
                                            alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極可用於體液檢測/Humming Probe UH1/超極生技UltraE'
                                            loader={myLoader01}
                                            placeholder="empty" loading="lazy" width={400} height={400} src='UH1-31.webp'></Image>
                                        <p className="text-center">體液(汗液)檢測

</p>
                                    </div>
                                    <div className="left w-full md:w-1/2">
                                        <Image
                                            alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極可用於活體檢測/Humming Probe UH1/超極生技UltraE'
                                            loader={myLoader01} placeholder="empty" loading="lazy" height={550} width={550} src='UH1-06.webp'></Image>
                                        <p className="text-center">發酵過程控制



                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="container mt-5 lg:px-10 xl:px-20 mx-auto  ">

                        <div className="bottom flex flex-col  md:flex-row fjustify-start items-start">
                            <div className="right p-0 md:pr-[20px] md:w-[80%] xl:w-1/2">
                                <div className="top  mt-3  rounded-2xl p-[70px] bg-orange-500">
                                    <b className="text-white">拋棄式設計，拓寬在各領域的應用

                                    </b>
                                    <br />

                                    <p className="mt-3 text-[14px]  w-full sm:w-[80%] md:w-full">每一次使用只需從密封罐內取出全新的試片，且在測試後無需費時清洗保養。對於粘稠或容易吸附的樣品或配合各種特殊處理，突破傳統pH玻璃電極種種限制，提供您更多的應用。



                                    </p>

                                </div>
                                <div className="bottom flex flex-col md:flex-row justify-start items-start">
                                     <div className="right w-full  md:w-1/2">
                                        <Image
                                            loader={myLoader01} alt="免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極可用以經過滅菌滅活處理測試培養基酸鹼值/Humming Probe UH1/超極生技UltraE" placeholder="empty" loading="lazy" height={450} width={450} src='UH1-03.webp'></Image>
                                        <p className="text-center">可配合進行殺菌滅活的特殊處理

</p>
                                    </div>
                                    <div className="right w-full  md:w-1/2">
                                        <Image
                                            loader={myLoader01}
                                            placeholder="empty" alt="免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極可用以用於測試粘稠不易清理樣品/Humming Probe UH1/超極生技UltraE" loading="lazy" width={550} height={550} src='UH1-04.webp'></Image>
                                        <p className="text-center mb-5 md:mb-0">測試黏稠不易清理的物品</p>
                                    </div>
                                </div>

                            </div>

                            <div className="left  md:w-[80%] xl:w-1/2">
                                <Image src='UH2-02-拋棄式720x540.webp' className="rounded-2xl" alt='拋棄式UH1' placeholder="empty" loading='lazy' loader={myLoader} width={800} height={800}></Image>

                            </div>

                        </div>

                    </div>
                </section>
                <section className="section  md:px-[100px] xl:px-0 ">
                    <div className="card-wrap  justify-center flex flex-wrap ">
                        <div className="card bg-white h-full shadow-xl  md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">更精確，測試範圍更廣

                                </b>
                                <ReadMoreReact text="我們提供高精度要求的pH量測，結果可以顯示至0.01，精確度可達±0.1 pH。測試pH值從0到14 ，皆可滿足。

"
                                    min={20}
                                    ideal={35}
                                    duration={500}
                                    max={45}
                                    readMoreText="...." />



                            </div>
                            <div className="img">
                                <Image loader={myLoader} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='UH2-3-正精確720x540.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card h-full shadow-xl md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">不使用液體的內參比電極

                                </b>
                                <ReadMoreReact text="我們使用獨特設計的印刷電極搭配離子膜。沒有內參比液滲漏的問題，不會與樣品發生反應（蛋白質樣品等）。適合更廣泛的樣品。提供穩定長時間連續測試達幾十小時。

"
                                    min={25}
                                    ideal={30}
                                    duration={500}
                                    max={35}
                                    readMoreText="...." />

                            </div>
                            <div className="img">
                                <Image width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='UH1-20-不使用液體的內參比電極720x540.webp' placeholder="empty" loading='lazy' loader={myLoader}></Image>
                            </div>
                        </div>
                        <div className="card h-full shadow-xl md:m-3 overflow-hidden border rounded-2xl  w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">便於攜帶和保存
                                </b>
                                <ReadMoreReact text="傳統的玻璃電極玻璃膜的厚度只有0.1-0.3mm，因此很容易破裂。蜂鳥探針的特殊設計，不含任何填充液體。體積小，利於攜帶，只要放置於試片罐中蓋緊即可，適合移動的戶外測試環境。

"
                                    min={20}
                                    ideal={35}
                                    duration={500}
                                    max={45}
                                    readMoreText="...." />

                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='便於攜帶和保存-720x540.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                    </div>

                </section>


                <section className="px-[20px] md:px-0">
                    <div className="container mx-auto ">
                        <div className="section_table flex flex-col justify-center " >
                            <h2 className="h2-u">蜂鳥探針pH檢測電極準確度如何？
                            </h2>

                            <b className="text-[14px] mt-[20px] mb-3 text-center text-gray-600 font-light">將量測數據與NIST standard pH buffer數值比較，依線性迴歸方程式可得相關係數
                            </b>
                            <div className="wrap">

                            </div>
                        </div>



                        <div className="wrap p-0   xl:px-[200px] md:px-[60px] px-0" >
                            <Table aria-label="Example w-full md:w-[80%] lg:w-[70%]  static collection table">
                                <TableHeader>
                                    <TableColumn className="bg-orange-500 text-white">NIST standard pH buffer	</TableColumn>
                                    <TableColumn className="bg-orange-500 text-white">2	</TableColumn>
                                    <TableColumn className="bg-orange-500 text-white">7</TableColumn>
                                    <TableColumn className="bg-orange-500 text-white">12</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Sampling number	</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>10</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell >AVG(pH)	</TableCell>
                                        <TableCell>1.99	</TableCell>
                                        <TableCell>6.99	</TableCell>
                                        <TableCell>11.97	</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell >SD(pH)	</TableCell>
                                        <TableCell>0.01 </TableCell>
                                        <TableCell>0.02</TableCell>
                                        <TableCell>0.03</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell >CV(%)		</TableCell>
                                        <TableCell>0.75%</TableCell>
                                        <TableCell>0.35%</TableCell>
                                        <TableCell>0.26%</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell >Accuracy Rrange(pH)		</TableCell>
                                        <TableCell>0.05</TableCell>
                                        <TableCell>0.08</TableCell>
                                        <TableCell>0.09</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div className="bottom-table px-0 lg:px-[100px]  mt-5 w-full flex flex-col  lg:flex-row ">
                        <div className="left pl-0  2xl:pl-[55px] flex justify-center items-center w-full lg:w-2/3  ">
                            <div className=" w-full  px-0 md:px-10">
                                <Table aria-label="Example  static collection table">
                                    <TableHeader className="bg-none">
                                        <TableColumn colSpan={5} className=" border-b-black bg-white  border-b-2  text-center font-extrabold text-gray-800 text-[18px]">	UH1 測量數值與NIST pH Buffer 比較


                                        </TableColumn>
                                        <TableColumn className="bg-white">	</TableColumn>

                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1">
                                            <TableCell className="">量測範圍：		</TableCell>
                                            <TableCell>pH 0 - 14*
                                            </TableCell>

                                        </TableRow>
                                        <TableRow key="2">
                                            <TableCell >斜率：		</TableCell>
                                            <TableCell>	1.0029
                                            </TableCell>

                                        </TableRow>
                                        <TableRow key="3">
                                            <TableCell >截距：		</TableCell>
                                            <TableCell>-0.0521
                                            </TableCell>

                                        </TableRow>
                                        <TableRow key="4">
                                            <TableCell >相關係數(r)：			</TableCell>
                                            <TableCell>0.9999
                                            </TableCell>

                                        </TableRow>

                                    </TableBody>
                                </Table>
                                <p className="text-[14px] mt-1">*pH 0溶液為1.0 M HCl溶液
                                </p>
                                <p className="text-[14px] mt-1">pH 14溶液為 1.0 M NaOH溶液
                                </p>

                            </div>

                        </div>
                        <div className="right w-full    mt-3 md:mt-0 lg:w-1/2 flex md:justify-center md:items-center justify-start items-start  ">
                            <Image alt="IMG" width={400} height={300} loader={myLoader04} src='form-02.webp' loading="lazy"></Image>
                        </div>
                    </div>


                </section>
                <section className="p-0 mt-[50px]">
                    <div className="card-wrap justify-center flex flex-wrap ">
                        <div className="card shadow-xl  md:m-3 overflow-hidden border rounded-2xl w-[340px] p-6">
                            <div className="txt h-[70px]">
                                <p className="text-[18px] text-center font-black">線性關係


                                </p>
                                <p className="text-normal text-center text-[14px] ">Linearity</p>
                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='線性關係.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card  shadow-xl md:m-3 overflow-hidden border rounded-2xl w-[340px] p-6">
                            <div className="txt h-[70px]">
                                <p className="text-[18px] text-center font-black">精密度


                                </p>
                                <p className="text-normal text-[14px] text-center ">Precision</p>
                            </div>
                            <div className="img">
                                <Image loader={myLoader} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='精密度.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card shadow-xl md:m-3 overflow-hidden border rounded-2xl w-[340px] p-6">
                            <div className="txt h-[70px]">
                                <p className="text-[18px] text-center   font-black">準確度
                                </p>
                                <p className="text-normal text-center text-[14px]">Accuracy</p>
                            </div>
                            <div className="img">
                                <Image loader={myLoader} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='精確度.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                    </div>

                </section>
                
                <section className="section">
                    <div className="section_SSG">
                        <div className="container flex flex-col  sm:flex-row justify-center  mx-auto  w-full  xl:w-[80%]">
                            <div className="left flex flex-col justify-center items-center m-3 border rounded-2xl p-10 w-full xl:w-1/2">
                                <Image loader={myLoader02} placeholder="empty" loading="lazy" alt="iso-logo|超極生技" src='ISO-LOGO.png' width={600} height={600} className="rounded-2xl md:w-full lg:w-2/3 " />
                                <div className="txt font-normal text-[14px] text-center">
                                    在品質管理上，所有試片及儀器的生產皆由UltraE完成，除了精確掌握生產技術外，亦全程控管產品品質，試片由原料開始，從基底裸片印刷，到高分子薄膜製程，與溫度感測器組裝製程，並且以百分之百全檢的模式確保產品穩定性。亦有正式通過ISO 9001：2015 認證，向我們的合作夥伴確保品質無虞及標準化的流程。


                                </div>
                                <div href="" className="bg-orange-500 rounded-full w-[220px] text-center px-4 py-2  mt-3 text-white ">ISO 認證</div>

                            </div>
                            <div className="right m-3 flex flex-col justify-center border rounded-2xl  p-10 items-center w-full xl:w-1/2">
                                <Image loader={myLoader04} placeholder="empty" loading="lazy" alt="SGS 實驗室測試報告|超極生技" src='SGS-big.webp' width={400} height={700} className="rounded-2xl md:w-full lg:w-2/3 " />
                                <div href="" className="bg-orange-500 rounded-full w-[220px] text-center px-4 py-2  text-white mt-3">SGS 實驗室測試報告</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='hidden section'>
                    <div className="section_brand">
                        <div className="container">
                            <h2 className="h2-u ">Trusted by precision laboratory <br/>in universities and enterprises
                            </h2>
                            <div className="marqee">
                                <div class="relative flex overflow-x-hidden">
                                    <div class="py-12 animate-marquee whitespace-nowrap">
                                        <span class="mx-4 text-4xl">Marquee Item 1</span>
                                        <span class="mx-4 text-4xl">Marquee Item 2</span>
                                        <span class="mx-4 text-4xl">Marquee Item 3</span>
                                        <span class="mx-4 text-4xl">Marquee Item 4</span>
                                        <span class="mx-4 text-4xl">Marquee Item 5</span>
                                    </div>

                                    <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                                        <span class="mx-4 text-4xl">Marquee Item 1</span>
                                        <span class="mx-4 text-4xl">Marquee Item 2</span>
                                        <span class="mx-4 text-4xl">Marquee Item 3</span>
                                        <span class="mx-4 text-4xl">Marquee Item 4</span>
                                        <span class="mx-4 text-4xl">Marquee Item 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text=[26px] w-4/5 text-center mx-auto">Trusted by precision laboratory in universities and enterprises
                            </h2>
                        </div>
                        <div className="row ">
                            
                            <Marquee>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-08.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-09.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-03.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-01.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-02.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-03.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-12.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-07.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt='' src='brand-04.png' />
                                </div>
                            </Marquee>
                        </div>


                    </div>
                </section>


                <section className="">
                     <div className="container px-[15px] w-full xl:w-[1000px]  ">
                          <h2>如何使用蜂鳥探針pH檢測電極？
                        </h2>
                        <p className="w-full px-[20px] md:px-0 md:w-3/4 text-center mx-auto">蜂鳥探針在出廠前皆使用NIST 認證可追溯性標準品進行校正檢驗，並將批次校正資訊以QRcode模式結合在試片罐上，首次使用時只需將pH檢測儀掃描試片罐上QRcode後，即可直接進行pH量測。使⽤上不同於傳統pH玻璃電極，無需進行傳統繁雜的校正步驟。

</p>
                        <div className="grid  grid-cols-1 md:grid-cols-3">
                            <div className="p-4 mx-auto">
                                <Image loader={myLoader01} alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極的使用方法/Humming Probe UH1/超極生技UltraE' src='即開即用.webp' placeholder="empty" loading="lazy" width={400} height={400}></Image>
                                <b>於罐中取出酸鹼試片

                                </b>
                            </div>
                            <div className="p-4 mx-auto">
                                <Image loader={myLoader01} alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極的使用方法/Humming Probe UH1/超極生技UltraE' src='UH1-01.webp' placeholder="empty" loading="lazy" width={400} height={400}></Image>
                                <b>測量方式1.


                                </b>
                                <br></br>
                                <b className="text-center ">由檢測片直接吸取樣品後測試

</b>




                            </div>
                            <div className="p-4 mx-auto">
                                <Image loader={myLoader01} alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極的使用方法/Humming Probe UH1/超極生技UltraE' src='檢測方式.jpg' placeholder="empty" loading="lazy" width={400} height={400}></Image>
                                <b>測量方式2.



                                </b>
                                <br></br>
                                <b>或將檢測片置入樣品溶液中測試



                                </b>
                            </div>

                        </div>

                    </div>
                </section>


                  <WhenUse/>


                   <FindSPE/>
              
              
                <section>
                    <div className="Container md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
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


                                {/* <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    > */}

                                        <h2 className="h2-u">UH1-酸鹼試片電極

                                        </h2>

                                    {/* </motion.h2>



                                    <motion.p
                                        className="text-m flex center "
                                        variants={title02}
                                    > */}

                                <a download='https://www.ultraehp.com/images/DM/UH2-GAS單張DM-v1-OUT.jpeg' href='https://www.ultraehp.com/images/DM/UH2-GAS單張DM-v1-OUT.jpeg' className="rounded-full font-black mt-4 text-center w-[150px]  bg-orange-500 text-white py-2 px-4 mx-auto mb-[50px]">
                                            DM 下載
                                        </a>
                                        {/* 
                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div> */}
{/* 

                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p> */}


                            </div>
                            <div className="row px-[20px]">
                                {/* <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    > */}


                                        <div className="grid grid-cols-1 lg:grid-cols-2">
                                            <div className="p-0 xl:p-10 items-end flex flex-col">

                                        <Image loader={myLoader01} src='尺寸-UH1.webp' loading='lazy' placeholder="empty" className="mr-0 md:mr-[100px] w-full" alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針電極的尺寸規格及包裝規格/Humming Probe UH1/超極生技UltraE' width={600} height={600}></Image>

                                            </div>
                                            <div>


                                                <div className="flex w-full flex-col">
                                                    <Tabs aria-label="Options">
                                                        <Tab key="UH1-酸鹼試片電極
" title="UH1-酸鹼試片電極
">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        量測範圍：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                pH 0 - 14

                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        誤差：	                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                ± 0.1 pH
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        最小檢測<br/>體積：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                10 - 20μL

                                                                                    </td>



                                                                                </tr>
                                                                                
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        操作溫度：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                10 - 40℃

                                                                                    </td>


                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        尺寸（寬Ｘ長Ｘ厚）：
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                12.6 x 60.0 x 1.0 mm

                                                                                    </td>

                                                                                </tr>


                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Tab>



                                                    </Tabs>
                                            <p className="text-[14px] text-left">注意事項·:pH 試片電極應密封放置於試片罐中，使用時才取出以維持品質。每罐含25片酸鹼試片電極，每盒含2罐。</p>
                                                </div>





                                            </div>

                                        </div>






{/* 

                                    </motion.h2>


                                </motion.div>
 */}


                            </div>



                        </div>
                    </div>
                </section>


                <section className="section px-5">
                    <div className="Container mb-6 md:mb-0 md:px-20">

                        <div className="flex sm:flex-row flex-col justify-center items-center">
                            <div className="mt-4  mx-3 w-full  md:w-2/3">
                                <ModalBtn05 />
                            </div>

                        </div>
                    </div>
                </section>

                {/* <ReactSlick /> */}
                <section className="section_others section hidden md:block">
                    <div className="Container">

                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                            

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
                {/* <iframe
                    src="https://player.cloudinary.com/embed/?public_id=shoes_video&cloud_name=demo"
                    width="640"
                    height="360"
                    style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    frameborder="0"
                ></iframe> */}
                {/* <CldVideoPlayer
                    id="drmonozsf"
                    width="1920"
                    height="1080"
                    src="samples/sea-turtle`"
                />  */}




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
