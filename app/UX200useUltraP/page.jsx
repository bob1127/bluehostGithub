"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';

import 'next-cloudinary/dist/cld-video-player.css';
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import SwiperSlider from '../../components/SwiperSliders/UltraPSlider.jsx'

import { Tabs, Tab } from "@nextui-org/react";
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
// const myLoader = ({ src, width, quality, placeholder }) => {
//     return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
// }

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
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



// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (


    <div className="relative">



        <title>極安簡測｜快速胃幽門螺旋桿菌檢測-UBTiw</title>
        <meta key="description" name="description" content="適用於診斷及檢測胃幽門螺旋桿菌，非侵入檢測方式,30分鐘立即獲得檢測成果,可用於評估治療前後效果, 自動判讀檢測成果,兩種版本: 專業版 / 居家檢測版本" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        <meta property="og:url" content="https://www.ultraehp.com/next/UltraP.html" />
     
        <meta property="og:type" content="article" />
        <meta property="og:title" content="極安簡測-胃幽門桿菌尿素呼氣檢測系統" />
        <meta property="og:description" content="胃幽門螺旋桿菌（Helicobacter pylori）是一種微小的革蘭氏陰性菌。胃幽門螺旋桿菌是螺旋狀且具有纖毛，這種形狀使得它能夠在胃部黏膜中穿梭移動。它表面的黏附分子能夠與胃部黏膜細胞表面的受體結合，這有助於它們固定在胃部黏膜上並避免被洗脫。這些特點使得胃幽門螺旋桿菌能夠在胃部環境中存活並定居，導致感染和相關的胃部問題。" />
        <meta property="og:image" content="https://asset.cloudinary.com/drmonozsf/6dc665fdc678c06ce447b5dfb772d746" />


        {/* <AnimatedTabs /> */}
        {/* <MobileMenu/> */}



        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <div className='fullscreen pt-[60px]'>

                <section className="section mt-[150px]">
                    <div className="container flex px-[0px] md:px-[40px] xl:px-[120px] flex-col md:flex-row justify-start items-start">

                        <div className="left   w-full md:w-1/2">
                            <SwiperSlider />



                        </div>

                        {/* <div className="block md:hidden left border border-black w-full md:w-1/2">
                            
                            <SlickCarousel/>
                    </div>  */}
                        <div className="right  w-full md:w-1/2 ">
                            <h1 className="text-left  w-full mb-5 md:mb-0 md:w-full">極安簡測-胃幽門桿菌尿素呼氣檢測系統</h1>
                            <h2 className="text-[18px] mt-3 text-left text-orange-500">(UBT-Pro)

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

                            </ul>
                            <div className="btn-wrap ">

                                <div className="w-full md:w-full md:w-3/4 flex flex-col md:flex-row">
                                    <ModalBtn02 />


                                    <ModalBtn01 />
                                </div>



                            </div>



                        </div>

                    </div>

                </section>


            </div>

            <div className="content-bottom md:p/x-10 xl:px-15 2xl:px-20">
           
                <section className="section_about" id="features">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row md:mt-10 lg:mt-20 flex items-center flex-col  justify-center">
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
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >


                                        <section className="section_Accessories section" id='inside'>


                                            <div className="flex flex-col w-full lg:px-[30px] xl:px-[80px] bg-gray-150">
                                                <div className="w-full text-center mb-3 flex  items-center justify-center flex-col ">
                                                    <h2 >
                                                        產品介紹
                                                    </h2>

                                                    <p className="">
                                                        About UX200



                                                    </p>
                                                </div>
                                                <div className="w-full flex px-0  flex-col lg:flex-row ">
                                                    <div className="w-full lg:w-1/2">

                                                        <div className="left py-16 border-gray-50 rounded-2xl shadow-md bg-black border  flex flex-col items-center justify-center h-auto group">
                                                            <div className="txt text-center p-1">

                                                                <p className="text-white text-normal">Main Machine </p>
                                                                <h3 className="text-white mt-2 text-center text-4xl font-bold uppercase">機身外觀
                                                                </h3>

                                                                <a href="#" className="mt-10">Learn More</a>
                                                            </div>

                                                            <Image
                                                                loading="lazy"
                                                                placeholder="empty"
                                                                loader={myLoader05}
                                                                src="UX200.webp"
                                                                alt="Picture of the author"
                                                                width={500}
                                                                height={500}
                                                            />

                                                            <p className="text-gray-300 w-2/3 text-center mt-10 hidden md:block ">7.0”彩色觸控屏幕，清楚簡明的圖形選單，提供直覺操作體驗，讓您立即進行測量。</p>
                                                        </div>


                                                    </div>
                                                    <div className="right w-full lg:w-1/2">
                                                        <div class='h-auto ml-0 flex flex-col  md:ml-5 mt-4  w-full border bg-UX200 bg-cover border-gray-50 bg-white  bg-center rounded-2xl p-8 shadow-md overflow-hidden  group '>
                                                            <div className="txt flex flex-col items-start justify-start  md:flex-col w-full md:w-full">

                                                                <h3 className="text-black mt-2 text-left text-3xl font-bold uppercase">What's Include ?</h3>
                                                                <b >產品內容物</b>
                                                                <div className="flex mt-4 w-full flex-row">
                                                                    <div>
                                                                        <p className="text-xs mr-3">1.UX200:酸鹼檢測儀(一台)</p>
                                                                        <p className="text-xs mr-3">2.UH1:酸鹼檢測試片電極(內附一罐10片)</p>
                                                                        <p className="text-xs mr-3">3.外接試片電極傳輸線(一條)</p>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-xs mr-3">4.充電變壓器(一件)</p>
                                                                        <p className="text-xs mr-3">5.簡易說明書</p>
                                                                        <p className="text-xs mr-3">6.Micro USB 線-充電&資料傳輸(一條)</p>
                                                                        <p className="text-xs mr-3">7.詳細說明書，儲存於酸鹼檢測儀UX200記憶體內，可傳輸至電腦觀看</p>
                                                                    </div>
                                                                </div>


                                                            </div>



                                                            <Image
                                                                className="rounded-xl mt-3"
                                                                loader={myLoader}
                                                                src="UX200-09-開箱1920x768.webp"
                                                                alt="Picture of the author"
                                                                width={1000}
                                                                height={500}
                                                                loading="lazy"
                                                                placeholder="empty"
                                                            />



                                                        </div>
                                                        <div className=" flex md:flex-row flex-col   w-full ">
                                                            <div className="w-full mt-4  ml-0 md:ml-5  h-1/2">
                                                                <Card isFooterBlurred className="w-full h-[300px] flex flex-col justify-center col-span-12 sm:col-span-5">


                                                                    {/* <AdvancedVideo poster='https://res.cloudinary.com/dc9veqqhp/image/upload/v1709543060/UX200/UX200-12-%E7%89%87%E9%A0%AD-720x540_bklrgx.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl scale-125' preload="flase" controls width={1000} height={600} cldVid={cld.video('/Video/4f640e99-893e-45d3-a7b3-b4ff05589316_y0jemm')} /> */}
                                                                    <Image
                                                                        loading="lazy"
                                                                        placeholder="empty"
                                                                        loader={myLoader}
                                                                        src="UX200-12-產品說明-720x540_工作區域 1.webp"
                                                                        alt="Picture of the author"
                                                                        width={1000}
                                                                        height={500}
                                                                    />


                                                                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between mt-3">
                                                                        <div>
                                                                            <p className="text-black text-tiny">觀看操作影片 </p>
                                                                            <p className="text-black text-tiny">→</p>
                                                                        </div>
                                                                        <Button className="text-tiny" color="primary" radius="full" size="sm">
                                                                            <a href="https://www.youtube.com">
                                                                                Go youtube
                                                                            </a>
                                                                        </Button>

                                                                    </CardFooter>
                                                                </Card>
                                                            </div>
                                                            <div className="w-full ml-0 mt-4 md:ml-5 mt-3 h-full">
                                                                <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">

                                                                    <Image
                                                                        width={300}
                                                                        height={300}
                                                                        loader={myLoader01}

                                                                        alt="UX100-DM"
                                                                        className="z-0 w-full h-full object-cover"
                                                                        src="UX100-dm.webp"
                                                                        loading="lazy"
                                                                        placeholder="empty"
                                                                    />
                                                                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                                                        <div className="flex flex-grow gap-2 items-center">
                                                                            <Image
                                                                                width={30}
                                                                                height={30}
                                                                                loader={myLoader01}

                                                                                alt="UX100-DM"
                                                                                className="z-0 w-full h-full "
                                                                                src="UX100-dm.webp"
                                                                                loading="lazy"
                                                                                placeholder="empty"
                                                                            />
                                                                            <div className="flex flex-col">
                                                                                <p className="text-tiny text-white/60">產品DM</p>

                                                                            </div>
                                                                        </div>
                                                                        <Button radius="full" size="sm">Download DM</Button>
                                                                    </CardFooter>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>



                                        </section>

                                    </motion.h2>


                                </motion.div>




                            </div>




                        </div>
                    </div>
                </section>
                <section className="section_video01 section  m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3  ">
                        <div className="row flex flex-col justify-center items-center mb-5">

                            <h2>操作影片</h2>
                            <p>Operation</p>

                        </div>
                        <div className="row">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Ultra Video/UX200/中文版/YouTube-UX200-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl mx-auto' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UX200Video/UX200-video中文_w6yl75')} />

                        </div>










                    </div>
                </section>


                <section className="section_infection section" id="features">
                    <div className="Container px-0 md:px-20">
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
                                        <section className="section section_clear_display" id="features">
                                            <div className="Container md:px-20">
                                                <div className="grid grid-cols-1">
                                                    <div className="row flex items-center flex-col  justify-center">

                                                        {/* 
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    > */}

                                                        <div className="container mx-auto md:w-full lg:w-2/3 flex flex-col justify-center items-center center">
                                                            <h2>滿足持續記錄的需求</h2>
                                                            <p className=" w-full text-center lg:w-2/3 ">UX200 除了具備UX100的全部功能，更增加了pH/電位趨勢記錄曲線，電位解析度更提高至0.1 mV。可以更精確判定酸鹼滴定終點。滿足連續或頻繁記錄pH變化的需求。使用者不需一直待在機器旁邊記錄數據，可以隨時回溯實驗階段每個時間點的pH變化。</p>
                                                        </div>
                                                        {/* 
                                    </motion.h2>





                                </motion.div> */}

                                                        {/* 
                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p> */}


                                                    </div>
                                                    <div className="row">
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

                                                        <div className="container center relative w-full  flex justify-center flex-col">


                                                            <Image
                                                                loading="lazy"
                                                                placeholder="empty"
                                                                loader={myLoader}
                                                                src="UX200-04-滿足持續記錄-02-1000x1000.webp"
                                                                alt="Picture of the author"
                                                                className="rounded-2xl border-none"
                                                                width={800}
                                                                height={500}
                                                            />


                                                            <div className="grid grod-cols-1 md:grid-cols-4 md:w-full  lg:w-2/3 border ">
                                                                <div className="p-1 lg:p-5">
                                                                    <Image loader={myLoader} loading="lazy"
                                                                        placeholder="empty" width={400} height={400} src='UX200.webp' alt='配製緩衝溶液 酸鹼滴定曲線'></Image>
                                                                    <p className=" text-[16px] text-center">配製緩衝溶液 酸鹼滴定曲線

                                                                    </p>
                                                                </div>

                                                                <div className="p-1 lg:p-5">
                                                                    <Image loader={myLoader} loading="lazy"
                                                                        placeholder="empty" width={400} height={400} src='application-2.webp' alt='廢水排放檢測'></Image>
                                                                    <p className="text-[16px] text-center">廢水排放檢測

                                                                    </p>
                                                                </div>
                                                                <div className="p-1 lg:p-5">
                                                                    <Image loader={myLoader} placeholder="empty" loading="lazy" width={400} height={400} src='application-3.webp' alt='廢水排放檢測'></Image>
                                                                    <p className="text-[16px] text-center">電鍍酸鹼度控制

                                                                    </p>
                                                                </div>
                                                                <div className="p-1 lg:p-5">
                                                                    <Image loader={myLoader} loading="lazy" placeholder="empty" width={400} height={400} src='application-1.webp' alt='養殖水質控制'></Image>
                                                                    <p className="text-[16px] text-center">養殖水質控制</p>
                                                                </div>
                                                            </div>




                                                        </div>



                                                        {/* 
                                    </motion.h2>


                                </motion.div> */}



                                                    </div>



                                                </div>
                                            </div>
                                        </section>



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

                                            <section>
                                                <div className="container section px-5 lg:px-[50px] xl:px-[100px]">
                                                    <div className="row flex flex-col md:flex-row  justify-center  w-full">
                                                        <div className="right mt-3 md:mt-0 flex md:hidden items-center w-full md:w-1/2">
                                                            <div className="container-text-wrap mx-auto">
                                                                <h2 className="text-[26px]">直覺性操作指引
                                                                </h2>
                                                                <p className="text-center w-3/4 md:w-full mx-auto">4.3寸的全彩觸控螢幕，清楚簡明的圖形選單，提供直覺操作體驗，讓您立即進行測量。</p>
                                                            </div>

                                                        </div>
                                                        <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                                            <Image height={300} loader={myLoader} placeholder='empty' loading='lazy' alt='直覺性操作指引' className="mx-auto" width={500} src='UX200-11-操作指引02-720x540.webp'></Image>

                                                        </div>
                                                        <div className="right hidden  md:flex items-center w-full md:w-1/2">
                                                            <div className="container-text-wrap mx-auto">
                                                                <h2 className="text-[26px]">直覺性操作指引
                                                                </h2>
                                                                <p className="text-center w-3/4 md:w-full mx-auto">4.3寸的全彩觸控螢幕，清楚簡明的圖形選單，提供直覺操作體驗，讓您立即進行測量。</p>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="row flex flex-col md:flex-row  justify-center  w-full">

                                                        <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-1/2">
                                                            <div className="container-text-wrap mx-auto">
                                                                <h2 className="text-[26px]">演算法自動判讀終點
                                                                </h2>
                                                                <p className="text-center w-3/4 md:w-full mx-auto">通常一般的pH計當測量值不波動時即認為當前量測值為終點值。UX100使用智能終點辨識功能（Auto read），使用演算法自動判定結果，可更快更準確的顯示量測結果，減少人為誤差。</p>
                                                            </div>

                                                        </div>
                                                        <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                                            <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX200-03-智能結果判讀720x540.webp' alt='智能結果判讀'></Image>

                                                        </div>

                                                    </div>
                                                    <div className="row flex flex-col md:flex-row justify-center   w-full">
                                                        <div className="right mt-3 md:mt-0  flex md:hidden  items-center  w-full md:w-1/2">
                                                            <div className="container-text-wrap mx-auto">
                                                                <h2 className="text-[26px]">開機自檢校正
                                                                    確保每次測量的可靠性
                                                                </h2>
                                                                <p className="text-center w-3/4 md:w-full mx-auto">內置自檢確效模擬電極，每次開機會全面自我檢測，排除系統誤差的可能性。</p>
                                                            </div>

                                                        </div>
                                                        <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                                            <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX100-開機自檢校正720x540.webp' alt='智能結果判讀'></Image>

                                                        </div>
                                                        <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                                            <div className="container-text-wrap mx-auto">
                                                                <h2 className="text-[26px] w-3/4 md:w-full mx-auto">開機自檢校正
                                                                    確保每次測量的可靠性
                                                                </h2>
                                                                <p className="text-center w-3/4 md:w-full mx-auto">內置自檢確效模擬電極，每次開機會全面自我檢測，排除系統誤差的可能性。</p>
                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                            </section>



                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>


                <section className="section_global section" id="features">
                    <div className="Container px-0 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  md:mt-10 lg:mt-20 flex items-center flex-col  justify-center">

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

                                        <section className="section_lens section">
                                            <div className=" flex flex-col justify-center items-center ">
                                                <div className="grid md:w-full  lg:w-2/3 grid-cols-1 md:px-[50px] xl:px-0">
                                                    <div className="row  flex items-center flex-col  justify-center">


                                                        <div className="container flex flex-col justify-center items-center center">
                                                            <h2 className="">內置鏡頭
                                                            </h2>
                                                            <p className=" mb-4 w-full text-center lg:w-2/3 ">可隨時記錄現場樣品狀態及測試環境。</p>
                                                        </div>





                                                    </div>
                                                    <div className="row">


                                                        <div className="container center relative w-full mt-2 md:mt-0 border flex justify-center">


                                                            <Image placeholder="empty" loader={myLoader} loading="lazy" alt="手持拍照" src='UX200-07-手持拍照-720x540.webp' width={1100} height={400} className="rounded-2xl" />




                                                        </div>





                                                    </div>



                                                </div>
                                            </div>
                                        </section>



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
                                            <section className="section">
                                                <div className="Container px-0 ">
                                                    <div className="grid grid-cols-1">
                                                        <div className="row  flex items-center flex-col  justify-center">

                                                            {/* 
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    > */}
                                                            <div className="container  w-full mx-auto flex flex-col justify-center items-center center">
                                                                <h2 >產品特點</h2>
                                                                <p className="text-base text-center text-gray-800 md:w-2/3 w-full mx-auto">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。</p>
                                                            </div>
                                                            {/* 
                                    </motion.h2> */}


                                                            {/* 
                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >

                                        <div className="order mt-10 mx-auto py-1 px-5 text-center w-[150px] bg-black rounded-full text-slate-200 border">
                                            UP100
                                        </div>

                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div>


                                    </motion.p> */}

                                                            {/* 
                                </motion.div> */}


                                                            <motion.p
                                                                className="text-m "
                                                                variants={title03}
                                                            >

                                                            </motion.p>


                                                        </div>
                                                        <div className="row">
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

                                                            <div className="relative w-full grid lg:grid-cols-2  md:px-0 lg:px-20">

                                                                <div className="mt-5 md:px-0 lg:px-10">
                                                                    <Card className="py-4">

                                                                        <CardBody className="overflow-visible py-2">
                                                                            <div className="img mt-5">
                                                                                <Image placeholder="empty" loader={myLoader01} loading='lazy' src='UX100-img04.webp' width={600} alt="可透過USB連接至電腦" height={600}></Image>
                                                                            </div>
                                                                            <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                                                <h3 className="text-[26px]">
                                                                                    試片插槽模式<br></br>(Strip Port):



                                                                                </h3>
                                                                                <p className=" text-center">使用電極蘸取或滴加樣品後，
                                                                                    插入主機進行pH值的檢測
                                                                                    。</p>

                                                                            </div>

                                                                        </CardBody>
                                                                    </Card>
                                                                </div>
                                                                <div className="mt-5 md:px-0 lg:px-10">
                                                                    <Card className="py-4">

                                                                        <CardBody className="overflow-visible py-2">
                                                                            <div className="img mt-5">
                                                                                <Image loader={myLoader} src='UX200-img05.webp' placeholder="empty" loading='lazy' alt="高效充電電池系統
" width={600} height={600}></Image>
                                                                            </div>
                                                                            <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                                                <h3 className="text-[26px] text-center">
                                                                                    外接傳輸線


                                                                                </h3>
                                                                                <h3 className="text-[26px] opacity-0 text-center">
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


                                                            {/* 

                                    </motion.h2>


                                </motion.div> */}



                                                        </div>



                                                    </div>
                                                </div>
                                            </section>






                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>



                <section className="section_video01  section mt-10 flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-2/3 p-3 lg:p-5  ">





                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/極安簡測 介紹胃幽門螺旋桿菌由來-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UP100/極安簡測_介紹胃幽門螺旋桿菌由來-中文_ifyy3m')} />

                    </div>
                </section>


                <section className="section_global section" id="features">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row md:mt-10 lg:mt-20 flex items-center flex-col  justify-center">

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


                                            <h3 className="text-TitleText-500 text-[26px]">胃幽門螺旋桿菌不同診斷方式比較



                                            </h3>

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

                                            <div >


                                                <div className="flex pr-[40px] pl-[40px]  flex-col">
                                                    <div className="overflow-x-auto w-[370px] sm:w-[550px]  md:w-[920px] lg:w-[100%] ">
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
                                                                                    loader={myLoader} className="mx-auto" loading='lazy' placeholder="empty" alt="內視鏡-icon" width={80} height={80} />
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
                                                                                <Image src='13C尿素呼吸法.webp' loader={myLoader} alt="13C尿素呼吸法-icon" width={80} loading="lazy" placeholder="empty" height={80} className="mx-auto" />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='快速尿素呼吸法-UBTIW.webp' alt="快速尿素呼吸法-icon" width={80} loader={myLoader} loading="lazy" placeholder="empty" height={80} className="mx-auto" />
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


                                                                            <td className=" border-r break-words dark:border-neutral-500 bg-t-color-4">糞便抗體檢測		</td>
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





                <section className="section_Detection section" >
                    <div className="Container px-0 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row md:mt-10 lg:mt-20 flex items-center flex-col  justify-center">
                                <h2 className="text-center mb-[50px]">極安簡測-<br />胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>

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


                                            <h3 className="H3_ultraP">檢測原理



                                            </h3>
                                            <p className="  container-text-wrap">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。我們通過檢測從呼吸中排出的氨氣，對比服用尿素前的背景數值，從而確定是否感染胃幽門螺旋桿菌。
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
                <section className="section_Technology section" >
                    <div className="Container px-0 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row md:mt-10 lg:mt-20 flex items-center flex-col  justify-center">

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


                                            <h3 className="H3_ultraP">核心專利技術
                                                拋棄式氣體pH電化學試片


                                            </h3>
                                            <p className=" container-text-wrap ">專利的納米孔洞水凝膜，會藉由水凝膜交換氣體後，在電極表面進行水解後可以直接檢測揮發性酸鹼氣體的pH值
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



                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/3C-極安簡測核心技術介紹-中文版.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UP100/3C-極安簡測核心技術介紹-中文版_p6omsc')} />
                    </div>
                </section>







                <section className="section section_FastCheck ">
                    <div className="Container px-0  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">

                                <h2 class="">極安簡測-<br></br>胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>
                            </div>

                            <div className="row mt-10">
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

                                                <h3 class="H3_ultraP">用常規尿素替代<br></br>同位素標定的<sup>13</sup>C尿素<span></span></h3>
                                                <div className="px-0 lg:px-10 flex p-7 flex-col items-center m-3  ">
                                                    <Image placeholder="empty" loading="lazy" alt="常規尿素替代C13尿素" src='常規尿素替代C13尿素.webp' loader={myLoader} width={600} height={600}></Image>

                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 class="H3_ultraP">無需送樣品去檢驗中心，<br></br>30分鐘現場即可讀取報告</h3>
                                                <div className="px-0 lg:px-10 m-3 flex p-7 flex-col items-center ">
                                                    <Image loader={myLoader} src='30分鐘取報告.webp' placeholder="empty " alt='30分鐘取報告' loading="lazy" width={600} height={600}></Image>

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

                                <h2 class="">兩種版本的快速UBT檢測組滿足不同用戶需求</h2>
                            </div>

                            <div className="row mt-10">
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

                                                <h3 class="H3_ultraP mb-5">一鍵自動檢測
                                                </h3>
                                                <div className="px-0 lg:px-10 flex p-0 lg:p-7 flex-col items-center m-0 lg:m-3  ">
                                                    <Image placeholder="專業版產品" src='專業版產品圖-中文-01.webp' loading="lazy" alt='專業版胃幽門螺旋桿菌尿素呼吸檢測系統全部部件展示/極安簡測-UltraPeace/ 超極生技 UltraE' loader={myLoader} width={600} height={600}></Image>

                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 class="H3_ultraP mt-5 md:mt-0 mb-5">專利整合試片無需meter
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
                                <h2 class="w-2/3 md:w-3/4 text-center mx-auto">如何使用快速幽門螺旋桿菌尿素呼吸檢測組</h2>
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




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>


                <section className="section_video03 section  flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-2/3 p-3 lg:p-5  ">



                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/極安簡測 胃幽門桿菌產品介紹-中文版.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UP100/極安簡測_胃幽門桿菌產品介紹-中文版20231127_ojx0jd')} />
                    </div>

                </section>

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
