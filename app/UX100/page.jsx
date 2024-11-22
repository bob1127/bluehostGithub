"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import YouTubePlayer from '../../components/VideoPlayer/UX100.jsx';

// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import SwiperSliders from '../../components/SwiperSliders/page.jsx'
import { Tabs, Tab } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";

import SwiperSlider from '../../components/SwiperSliders/UX100Slider.jsx'
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CldImage } from 'next-cloudinary';
import HeroImg from '../../public/images/7.jpg'
import Carousel from "../../components/Products/ProductCarouselUX200.jsx";

import JsonLd from '../../components/JsonLd.jsx';
import Navigation from "../../components/Products/Navigation.jsx";

import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
import FindSPE from '../../components/FindSPE.jsx'
import WhenUse from '../../components/WhenUse.jsx'

import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/product-01/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}
const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}




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








//結構化資料

const ProductPost = {
    title: 'Humming Probe UX100',
    description: "免校正微量拋棄式pH計酸鹼檢測儀UX100搭配拋棄式電極只需超低樣品需求量，並且無需pH標準液校正即可完成酸鹼測試 。適合非常珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。單手可手持，觸控熒幕，直覺操作，且適合戶外無電源使用。",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-2/UH2-4-%E4%B8%80%E6%BB%B4%E9%87%8F%E6%B8%AC1000x1000.webp",
    positive01: "4.3”彩色觸控屏幕",
    positive02: "演算法自動終點判斷",
    positive03: "防水防塵等級",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
    BrandName: "UltraE",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};




// const ProductPost = {
//     title: 'Humming Probe UX100',
//     description: "免校正微量拋棄式pH計酸鹼檢測儀UX100搭配拋棄式電極只需超低樣品需求量，並且無需pH標準液校正即可完成酸鹼測試 。適合非常珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。單手可手持，觸控熒幕，直覺操作，且適合戶外無電源使用。",
//     image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
//     positive01: "4.3”彩色觸控屏幕",
//     positive02: "演算法自動終點判斷",
//     positive03: "防水防塵等級",
//     LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
//     BrandName: "UltraE",
//     mainEntityOfPage: {
//         "@type": "WebPage",
//         "@id": ""
//     }
// };





// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (


    <div className="relative">
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UX100.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UX100.html" hreflang="en" />

        {/*metadata */}
        <title>蜂鳥探針-UX100｜免校正微量拋棄式pH酸鹼檢測檢測儀｜Humming Probe｜超極生技UltraE

        </title>
        <meta key="description" name="description" content="免校正微量拋棄式pH計酸鹼檢測儀UX100搭配拋棄式電極只需超低樣品需求量，並且無需pH標準液校正即可完成酸鹼測試 。適合非常珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。單手可手持，觸控熒幕，直覺操作，且適合戶外無電源使用。" />

        <meta name="keywords" content="pH感測器/pH測量儀/pH meter/酸鹼度計/pH檢測器/pH值檢測計/可攜式 pH 計/桌上型pH計/pH測量儀 /pH電極/酸鹼度計/酸鹼測試/pH測試" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UX100.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="蜂鳥探針-UX100｜免校正微量拋棄式pH酸鹼檢測檢測儀｜Humming Probe｜超極生技UltraE" />
        <meta property="og:description" content="免校正微量拋棄式pH計酸鹼檢測儀UX100搭配拋棄式電極只需超低樣品需求量，並且無需pH標準液校正即可完成酸鹼測試 。適合非常珍貴樣品及易污染或鈍化pH電極表面和特殊樣品。單手可手持，觸控熒幕，直覺操作，且適合戶外無電源使用。" />
        <meta property="og:image" content="https://www.ultraehp.com//images/Products-Detail-Img/UX100/UX100.webp" />




        {/* 
        <AnimatedTabs /> */}
        {/* <MobileMenu/> */}

        {/* 
          <div className="flex justify-center items-center">
            <CardSlider/>
          </div> */}
        <div>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UX100 */}



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





        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>

            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/en/UX100.html">
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
                            <Image className='mb-3 pr-20' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                            <a className="block w-full" href="https://www.ultraehp.com/hummingprobe/en/UX100.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className="block w-full" href="https://www.ultraehp.com/hummingprobe/UX100.html">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <Navigation />
            <div className='fullscreen relative pt-[60px]'>
                   <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' className="fixed mt-2 ml-[20px] md:ml-[115px] z-50 top-[60px] left-10" alt='UltraP-logo' height={60}></Image> 


                <section className="section   mt-0 md:mt-[150px]">
                    <div className="Navgation mb-[30px] pl-0 hidden md:block lg:pl-[150px]"> <a href="https://www.ultraehp.com" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href='#'>Humming Probe UX100
                    </a> </div>
                    <div className="container w-full flex px-[0px] md:px-[20px] xl:px-[70px] flex-col md:flex-row justify-start items-start">
                        <div className="left   w-full md:w-1/2">
                            <SwiperSlider />



                        </div>

                        {/* <div className="block md:hidden left border border-black w-full md:w-1/2">
                            
                            <SlickCarousel/>
                    </div>  */}
                        <div className="right flex justify-center  md:justify-between  md:pl-[50px] xl:pl-[80px] w-full md:w-1/2 flex-col  h-[480px]">
                            <div className="txt">
                                <h1 className="h1-u md:mt-0 mt-[115px]">Humming Probe UX100
                                    <br />  免校正酸鹼檢測儀
</h1>
                                <h2 className="model-u">pH計/酸鹼度測定計/pH儀器



                                </h2>
                                <p className="text-middle-u">適用於全系列全球首創的免校正pH酸鹼電極



                                </p>
                                <ul>
                                    <li>・4.3”彩色觸控屏幕


                                    </li>
                                    <li>・演算法自動終點判斷


                                    </li>
                                    <li>・防水防塵等級


                                    </li>
                                    <li>・雙模式檢測片連結器


                                    </li>
                                    <li>・500萬畫素鏡頭可記錄原始環境資料

                                    </li>
                                    <li>・背面皮革紋防滑設計



                                    </li>
                                 
                                </ul>
                            </div>
                            <div className="btn-wrap">

                                <div className="w-full xl:w-3/4 flex flex-col md:flex-row">
                                    <ModalBtn02 />
                                </div>



                            </div>
                        </div>
                    </div>
                </section>


            </div>


            <div className="content-bottom">


                <section className="section_description   m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row">

                            <h2 className="h2-u">Product</h2>
                            <p>Description</p>

                        </div>
                        <div className="row flex justify-center ">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <Image src='UX100-Unboxing.webp' loader={myLoader01} width={600} height={600} placeholder="empty" alt='The unboxing & the contents of the calibration-free micro disposable pH meter/pH measurement system/Humming Probe UX100/UltraE ' loading="lazy"></Image>
                                </div>
                                <div className="flex justify-center pl-[30px] items-center">
                                    <div>
                                        <h4 className="h3-u text-left">What's Include ?


                                        </h4>
                                        <ul>
                                            <li>1.UX100:酸鹼檢測儀(一台)


                                            </li>
                                            <li>2.UH1:酸鹼檢測試片電極(內附一罐10片)

                                            </li>
                                            <li>3.外接試片電極傳輸線(一條)


                                            </li>
                                            <li>4.充電變壓器(一件)


                                            </li>
                                          

                                            <li> 5.簡易說明書</li>

                                            <li>6.Micro USB 線-充電&資料傳輸(一條)



                                            </li>
                                            <li>   7.詳細說明書，儲存於酸鹼檢測儀UX100記憶體內，<br/>可傳輸至電腦觀看


                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>




                        </div>










                    </div>
                </section>




                <section className="section_Appearance    m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row flex flex-col justify-center items-center mb-5">

                            <h2 className="h2-u">Product
                            </h2>
                            <p>Appearance</p>

                        </div>
                        <div className="row flex px-[20px] md:px-0 justify-center ">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <Image src='UX100-12-產品說明-720x540_工作區域 1.webp' placeholder="empty" width={650} height={400} loading="lazy" loader={myLoader01} alt='The introduction of the dimension and the interfaces of the calibration-free micro disposable pH meter/pH measurement system/ Humming Probe UX100/UltraE  '></Image>

                                </div>
                                <div>
                                    <Image src='UX100-13-產品說明-機身-720x540_工作區域 1.webp' placeholder="empty" width={650} height={400} loading="lazy" loader={myLoader01} alt='The introduction of the dimension and the interfaces of the calibration-free micro disposable pH meter/pH measurement system/ Humming Probe UX100/UltraE  '></Image>

                                </div>

                            </div>
                        </div>









                    </div>
                </section>



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


                {/*                 
                <section className="section_video01 section  m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row flex flex-col justify-center items-center mb-5">

                            <h2 className="">Introduction video
</h2>
                            <p>Operation</p>

                        </div>
                        <div className="row flex justify-center ">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Ultra Video/UX100/中文版/YouTube-UX100-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UX100Video/UX100中文版_fhhsj1')} /> 

                        </div>










                    </div>
                </section> */}

                <section className="">
                    <div className="container  px-5 lg:px-[50px] xl:px-[100px]">
                        <div className="row flex mt-5 sm:mt-4 md:mt-0 flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0 flex md:hidden items-center w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="h3-u text-center">直覺性操作指引
                                    </h2>
                                    <p className=" text-center mx-auto  w-3/4 lg:w-full ">4.3寸的全彩觸控螢幕，清楚簡明的圖形選單，提供直覺操作體驗，讓您立即進行測量。</p>
                                </div>

                            </div>
                            <div className="left   mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image height={300} loader={myLoader01} placeholder='empty' className="mx-auto" loading='lazy' alt='免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕的操作Humming Probe UX100/超極生技UltraE' width={500} src='UX100-02-手拿方便-02-720x540.webp'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">直覺性操作指引
                                    </h3>
                                    <p className="text-center w-3/4 mx-auto">4.3寸的全彩觸控螢幕，清楚簡明的圖形選單，提供直覺操作體驗，讓您立即進行測量。</p>
                                </div>

                            </div>

                        </div>
                        <div className="row flex mt-5 sm:mt-4 md:mt-0 flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">演算法自動判讀終點
                                    </h3>
                                    <p className="text-center  w-3/4 lg:w-full mx-auto">通常一般的pH計當測量值不波動時即認為當前量測值為終點值。UX100使用智能終點辨識功能（Auto read），使用演算法自動判定結果，可更快更準確的顯示量測結果，減少人為誤差。</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-08-智能結果判讀720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀演算法自動判讀pH值Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </div>
                        <div className="row flex mt-5 sm:mt-4 md:mt-0 flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 lg:mt-0  flex md:hidden  items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">開機自檢校正
                                        <br />  確保每次測量的可靠性
                                    </h3>
                                    <p className="mx-auto text-center w-3/4">內置自檢確效模擬電極，每次開機會全面自我檢測，排除系統誤差的可能性。</p>
                                </div>

                            </div>
                            <div className="left mt-2 lg:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-開機自檢校正720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀開機自動自檢校正Humming Probe UX100/超極生技UltraE'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">開機自檢校正
                                      <br/>  確保每次測量的可靠性
                                    </h3>
                                    <p className="text-center">內置自檢確效模擬電極，每次開機會全面自我檢測，排除系統誤差的可能性。</p>
                                </div>

                            </div>


                        </div>



                        <section className="  ">
                            <div className="Container px-0 md:px-[20px]  ">
                                <div className="grid  grid-cols-1">
                                   
                                    <div className="row">


                                        <div className="relative w-full grid md:grid-cols-2  ">

                                            <div className="mt-5 px-0 md:px-2">
                                                <Card className="py-4">

                                                    <CardBody className="overflow-visible py-2">
                                                        <div className="img mt-5">
                                                            <Image placeholder="empty" loader={myLoader01} loading='lazy' src='UX100-img04.webp' width={600} alt="免校正微量拋棄式pH計酸鹼檢測儀的試片插槽模式Humming Probe UX100/超極生技UltraE" height={600}></Image>
                                                        </div>
                                                        <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                            <h3 className="h3-u text-center">
                                                                試片插槽模式<br></br>(Strip Port):



                                                            </h3>
                                                            <p className=" text-center">使用電極蘸取或滴加樣品後，
                                                                插入主機進行pH值的檢測
                                                                。</p>

                                                        </div>

                                                    </CardBody>
                                                </Card>
                                            </div>
                                            <div className="mt-5 px-0 md:px-2">
                                                <Card className="py-4">

                                                    <CardBody className="overflow-visible py-2">
                                                        <div className="img mt-5">
                                                            <Image loader={myLoader01} src='UX100-img05.webp' placeholder="empty" loading='lazy' alt="免校正微量拋棄式pH計酸鹼檢測儀的外接傳輸線模式Humming Probe UX100/超極生技UltraE
" width={600} height={600}></Image>
                                                        </div>
                                                        <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                            <h3 className="h3-u text-center">
                                                                外接傳輸線


                                                            </h3>
                                                            <h3 className="h3-u opacity-0 text-center">
                                                                外接傳輸線


                                                            </h3>



                                                        </div>
                                                        <p className="text-center ">通過傳輸線可將試片插槽延伸

                                                        </p>
                                                        <p className="text-center opacity-0">通過傳輸伸

                                                        </p>

                                                    </CardBody>
                                                </Card>
                                            </div>







                                        </div>





                                    </div>



                                </div>
                            </div>
                        </section>





{/* 
                        <section className="grid section md:w-full mx-auto lg:w-4/5 grid-cols-1">
                            <div className="row flex items-center flex-col  justify-center">


                                <div className="container flex flex-col justify-center items-center center">
                                    <h2 className="">各種場都可提供清晰顯示

                                    </h2>
                                    <p className=" w-full text-center lg:w-2/3 ">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。

</p>
                                </div>




                            </div>
                            <div className="row">

                                <div className="container center relative w-full mt-2 md:mt-0 border flex justify-center">


                                    <Image placeholder="empty" loader={myLoader} loading="lazy" alt="免校正微量拋棄式pH計酸鹼檢測儀的高亮度熒幕適合戶外使用Humming Probe UX100/超極生技UltraE" src='UX100-02-手拿方便-03-720x540.webp' width={1100} height={400} className="rounded-2xl mt-3" />




                                </div>


                            </div>



                        </section>
                        
                        <section className="row section flex flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="mt-4 md:mt-0 text-[26px]">可透過USB連接至電腦

                                    </h2>
                                    <p className="text-center">內嵌大容量移記憶體空間，可記錄大量現場原始數據（照片，文件等）。也可作為一般移動硬碟使用。

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-09-USB-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀有大容量記憶空間可透過USB連接至電腦Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </section> */}
                        {/* <div className="row flex flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 lg:mt-0  flex md:hidden  items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="text-[26px] mt-4 lg:mt-0">高效充電電池系統

                                    </h2>
                                    <p className="text-center">內建高效充電電池，，充電後可使用數小時，滿足實驗室及野外，無電力系統環境下的各種移動檢測需求。

</p>
                                </div>

                            </div>
                            <div className="left mt-2 lg:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-01-高校充電電池720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀可不插電使用且有大容量電池系統Humming Probe UX100/超極生技UltraE'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="text-[26px] mt-4 md:mt-0">開機自檢校正
                                        確保每次測量的可靠性
                                    </h2>
                                    <p className="text-center">內置自檢確效模擬電極，每次開機會全面自我檢測，排除系統誤差的可能性。</p>
                                </div>

                            </div>


                        </div> */}
                    </div>
                </section>
                <section className="section_banner02 section h-[450px] relative mt-[50px] overflow-hidden lg:h-[576px] 2xl:h-[700px]">
                    <Image className="absolute hidden md:block z-20 top-0 left-0" src='UX200-10-方便攜帶-無字版-1920x768.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="免校正微量拋棄式pH計酸鹼檢測儀的便攜設計適合隨身攜帶Humming Probe UX100/超極生技UltraE" width={1920} height={768}></Image>
                    <Image className="absolute block md:hidden z-20 top-0 left-0" src='UX100-11-方便攜帶-無字版-640x640.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="免校正微量拋棄式pH計酸鹼檢測儀的便攜設計適合隨身攜帶Humming Probe UX100/超極生技UltraE" width={1920} height={768}></Image>


                    <div className="txt bg-[] absolute left-[15px] md:left-[80px] z-20 w-[90%] md:w-2/5 top-[25%] md:top-[14%] lg:top-[33%]">
                        <h3 className="text-[32px] font-semibold">輕鬆手持，方便攜帶
                        </h3>

                        <p className="text-white xl:w-4/5 w-full">250g 的輕巧重量，適合手持操作的大小。皮革質感防滑設計，可輕鬆單手完成操作。配合方便攜帶的拋棄式蜂鳥探針電極 <a href="UH1.html" className="border-b-2 hover:text-orange-500">(瞭解更多)</a> 無需層層保護，輕鬆移動。</p>
                    </div>
                </section>


                <section className="">
                    <div className="container  px-5 lg:px-[50px] xl:px-[100px]">
                        <div className="row flex mt-4 md:mt-0 py-0 md:py-8 flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">各種場所都可提供清晰顯示


                                    </h3>
                                    <p className="text-center">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。



                                    </p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0  w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-02-手拿方便-03-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀的高亮度熒幕適合戶外使用Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </div>
                        <div className="row flex mt-4 md:mt-0 py-0 md:py-8  flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0 flex md:hidden items-center w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="h3-u text-center">各種場所都可提供清晰顯示

                                    </h2>
                                    <p className="text-center">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。

</p>
                                </div>

                            </div>
                            <div className="left   mt-2 md:mt-0 p-0 w-full md:w-1/2">
                                <Image height={300} loader={myLoader01} placeholder='empty' className="mx-auto" loading='lazy' alt='免校正微量拋棄式pH計酸鹼檢測儀可不插電使用且有大容量電池系統Humming Probe UX100/超極生技UltraE' width={500} src='UX100-01-高校充電電池720x540.webp'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">高效充電電池系統

                                    </h3>
                                    <p className="text-center">內建高效充電電池，，充電後可使用數小時，滿足實驗室及野外，無電力系統環境下的各種移動檢測需求。

</p>
                                </div>

                            </div>

                        </div>
                        <div className="row flex mt-4 md:mt-0  py-0 md:py-8  flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">內置鏡頭

                                    </h3>
                                    <p className="text-center">可隨時記錄現場樣品狀態及測試環境。

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0  w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-10-手持拍照-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀具有鏡頭可以記錄原始數據Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </div>
                        <div className="row flex mt-4 md:mt-0 py-0 md:py-8  flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 lg:mt-0  flex md:hidden  items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">可透過USB連接至電腦

                                    </h3>
                                    <p className="text-center">內嵌大容量移記憶體空間，可記錄大量現場原始數據（照片，文件等）。也可作為一般移動硬碟使用。

</p>
                                </div>

                            </div>
                            <div className="left mt-2 lg:mt-0 p-0 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-09-USB-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀有大容量記憶空間可透過USB連接至電腦Humming Probe UX100/超極生技UltraE'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">可透過USB連接至電腦

                                    </h3>
                                    <p className="text-center">內嵌大容量移記憶體空間，可記錄大量現場原始數據（照片，文件等）。也可作為一般移動硬碟使用。

</p>
                                </div>

                            </div>


                        </div>
                        </div>
                        </section>





               




                <section className="section  ">
                    <div className="Container px-0 md:px-[20px]  ">
                        <div className="grid grid-cols-1">

                            <div className="row md:px-[60px] xl:px-[150px]">


                                <div className="relative w-full grid md:grid-cols-2  ">

                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">

                                            <CardBody className="overflow-visible py-2">
                                                <div className="img mt-5">
                                                    <Image
                                                        alt="免校正微量拋棄式pH計酸鹼檢測儀可使用三角架實現桌上型pH計Humming Probe UX100/超極生技UltraE"
                                                        className="object-cover rounded-xl"
                                                        placeholder="empty"
                                                        loading="lazy"
                                                        loader={myLoader01}

                                                        src="UX100-img03.webp"
                                                        width={970}
                                                        height={500}
                                                    />
                                                </div>
                                                <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                    <h3 className="h3-u text-center">無論如何使用都得心應手

                                                    </h3>


                                                    <p className="text-default-500 text-gray-900">長時間連續監測
                                                    </p>
                                                    <p className="text-default-500 text-gray-900">三角力學活動架
                                                    </p>
                                                    <p className="text-default-500 text-gray-900">方便穩定的固定方式
                                                    </p>

                                                </div>

                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">

                                            <CardBody className="overflow-visible py-2">
                                                <div className="img mt-5">
                                                    <Image
                                                        loader={myLoader01}
                                                        alt="免校正微量拋棄式pH計酸鹼檢測儀具有防水防塵，適合戶外使用Humming Probe UX100/超極生技UltraE"
                                                        className="object-cover rounded-xl"
                                                        placeholder="empty"
                                                        loading="lazy"
                                                        src="UX100-img02.webp"
                                                        width={970}
                                                        height={500}
                                                    />
                                                </div>
                                                <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                    <h3 className="h3-u">IP54防水防塵等級
                                                    </h3>
                                                    <p className=" text-gray-900">不受天氣影響</p>
                                                    <p className=" text-gray-900">適合各種應用場合</p>
                                                    <p className=" text-gray-900">堅固耐用</p>
                                                    </div>

                                            </CardBody>
                                        </Card>
                                    </div>







                                </div>





                            </div>



                        </div>
                    </div>
                </section>

                <section className="section  ">
                    <div className="Container px-0 md:px-[20px]  ">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                              

                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                           



                        </div>
                    </div>
                </section>
                <section className=" section_slider section  hidden">
                    <div className="mb-10">
                      


                        <h2 id='fff' className="mb-4 dark:text-white text-3xl text-center md:text-5xl leading-none font-bold uppercase">  胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>



                        <div className="px-[20px]">
                            <p className="text-black w-full md:w-1/2  text-m text-center mx-auto dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem officiis saepe accusamus error, sit maxime commodi officia, rerum temporibus laudantium culpa recusandae dolor, ipsa eveniet cupiditate natus vero non!</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-sm text-center   rounded-full bg-orange-500 inline-block text-gray-100 mt-4 px-3 py-2 mx-auto ">
                                幽門螺旋桿菌

                            </p>
                        </div>

                     

                    </div>

                    <div className="flex w-full p-[15px] px-20 relative">



                        <div className="w-[60%] px-20 ">

                            <div className="txt  pl-[20%]">
                                <h3>
                                    輕鬆手持，方便攜帶
                                </h3>
                                <p className="mt-2 dark:text-white text-base text-gray-800">250g 的輕巧重量，適合手持操作的大小。皮革質感防滑設計，可輕鬆單手完成操作。配合方便攜帶的拋棄式蜂鳥探針電極 (瞭解更多) 無需層層保護，輕鬆移動。</p>
                            </div>

                        </div>
                        <div className="w-[40%]  ">
                            {/* <TwoColSlider /> */}

                            <Image src='/截圖_2024-02-01_下午3.59.25_gfj4te.webp' alt='輕鬆手持' width={400} height={1000} ></Image>
                        </div>
                    </div>

                </section>



                <section className="section_banner02 section h-[450px] relative mt-[50px] overflow-hidden lg:h-[576px] 2xl:h-[700px]">
                    <Image className="absolute hidden md:block z-20 top-0 left-0" placeholder="empty" loading="lazy" alt='最佳化的行動實驗室' loader={myLoader} src='UX200-13-最佳的行動實驗室-無字版-1920x768.webp' width={1920} height={768}></Image>
                    <Image className="absolute z-20 block md:hidden top-0 left-0" placeholder="empty" loading="lazy" alt='最佳化的行動實驗室' loader={myLoader} src='UX200-13-最佳的行動實驗室-無字版-640x640.jpg' width={1920} height={768}></Image>
                    <div className="txt  absolute right-[15px] md:right-[50px] z-20 w-[90%] md:w-2/5 top-[25%] md:top-[14%] lg:top-[33%]">
                        <h3 className="h3-u ">最佳化的行動實驗室
                        </h3>

                        <p className="text-white mt-4 text-[14px] md:text-[18px]">UX100提供拍攝功能，針對每一筆數據，可拍照記錄現場環境，樣品編號細節。滿足結果分析朔源，原始數據的管理需求。並可將數據輕鬆傳輸至電腦保存備份</p>
                    </div>
                </section>
                   <WhenUse/>
   
                    <FindSPE/>

            
                <div className="p-0 mt-[50px]">
                    <ModalBtn />
                </div>
              
                         
                              



                <section className=" px-[20px] lg:px-[50px] 2xl:px-[140px] pt-0">
                    <div className="Container md:px-20">
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

                                        <h2 className="h2-u">Humming Probe UX100
                                        </h2>
                                        <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">免校正酸鹼檢測儀
                                        </p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m flex center "
                                        variants={title02}
                                    >


                                        <a href='https://www.ultraehp.com/images/Download/DM.jpg' download='https://www.ultraehp.com/images/Download/DM.jpg' className="rounded-full text-center w-[150px] font-black bg-orange-500 text-white py-2 px-4 mx-auto mb-[50px]">
                                            DM 下載
                                        </a>
                                     

                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                             

                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="p-10 items-end flex flex-col">
                                        <Image loader={myLoader} src='UX01.webp' className="mr-0 md:mr-[100px] w-full  md:w-1/2" placeholder="empty" alt='UX100_酸鹼檢測器-尺寸圖' width={600} height={600}></Image>
                                        <Image src='UX02.webp' loader={myLoader} placeholder="empty" className="mr-0 md:mr-[100px] w-full  md:w-1/2" alt='UX100_酸鹼檢測器-尺寸圖' width={600} height={600}></Image>

                                    </div>
                                    <div>

                                        <div className="flex w-full flex-col">
                                            <Tabs aria-label="Options">

                                                <Tab key="技術規格
" title="技術規格
">
                                                    <Card>
                                                        <CardBody>
                                                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                    <tbody>
                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                量測範圍
                                                                            </th>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH值：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.00~14.00 pH

                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                電位：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 1000.0 mV
                                                                            </td>



                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                溫度：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                10 ~ 40°C (小於10℃ 或 大於40℃ 顯示提示警語)

                                                                            </td>

                                                                        </tr>




                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                解析度
                                                                            </th>


                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH值：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.01 pH
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                電位：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.1 mV
                                                                            </td>



                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                溫度：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.1 °C
                                                                            </td>

                                                                        </tr>


                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                精準度
                                                                            </th>


                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH值：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 0.1 pH
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                電位：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.05 %
                                                                            </td>



                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                溫度：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 0.5°C
                                                                            </td>

                                                                        </tr>






                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>
                                                <Tab key="外觀規格" title="外觀規格">
                                                    <Card>
                                                        <CardBody>
                                                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                    <tbody>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                螢幕：
                                                                            </th>
                                                                            <td class="px-6 py-4 text-gray-800">
                                                                                4.3寸 彩色LCD螢幕
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                防水防塵等級：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                IP54
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                相機：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                500萬畫素

                                                                            </td>



                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                電源：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                5V DC，2A(Input 100/240V AC)(電池容量2500mAh)

                                                                            </td>


                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                尺寸（寬Ｘ長Ｘ高）：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                87 x 152 x 21 mm
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                重量：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                250g
                                                                            </td>

                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>

                                            </Tabs>
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
            
                <section className="section_others  hidden md:block">
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
                                        className="h2-u"
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


export default Product;
