"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import TextScroll from '../../components/textScroll/TextScroll.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";



import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
import testPictureStatic from "../../public/images/SG01-Camera.webp";


import Carousel from "../../components/Products/ProductCarousel.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'

import { CldVideoPlayer } from "next-cloudinary";
import carousel001 from '../../public/images/截圖.webp'

import UP1002 from '../../public/images/截圖.webp'

const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/carousel-img/1920x768/${src}?w=${width}?p=${placeholder}`
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



const data = [
    {
        image:
          
            'UX100/UX100_zp5m5y' ,
            caption:'test',
    },
    {
        image:
            'UX100/',
        caption: "test",
    },
    {
        image:
            '/輪播圖-04_iautsb.webp',
        caption: "test",
    },
    {
        image:
            '/輪播圖02-01_pbcdpq.webp',
        caption: "test",
    },
    {
        image:
            '/輪播圖01_lzft37.webp',
        caption: "test",
    },
    {
        image:
            '' 
        // caption: "Darjeeling",
    },


];
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

        <title>Ultrapeace｜ Instant H.pylori BUT test kit</title>
        <meta key="description" name="description" content="DESCRIPTION" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        <meta property="og:url" content="https://ithelp.ithome.com.tw/articles/10278469" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="#21 No-code 之旅 — 如何讓網站在分享時看起來漂亮和有吸引力？Open Graph (OG) 簡介" />
        <meta property="og:description" content="大家有沒有發現當有人在社群軟體分享網址的時候，通常除了網址本身還會看到一張縮圖加上網站的標題和描述？這就是用 Open Graph (OG) 設定出來的！今天會解釋一點點什麼是 OG tag (標籤)，加上怎麼在 Next.js 專案中設定 OG 標籤～" />
        <meta property="og:image" content="https://i.imgur.com/D9cZHL7.png" />

        <AnimatedTabs />
      <MobileMenu/>
      
      


  




        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Navigation />
            <div className='fullscreen'>

                {/* modal open  */}
                {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                <ModalBody>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Nullam pulvinar risus non risus hendrerit venenatis.
                                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                    <p>
                                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal> */}

                {/* ---------------------- */}

                <div className='product px-3 md:px-10  flex-col md:flex-row border py-9'>

                    <Carousel
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 200, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        data={data}
                        time={3000}

                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={false}
                        // slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={false}
                        dots={false}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        // slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        showNavBtn={true}
                    // style={{
                    //     textAlign: "center",
                    //     maxWidth: "850px",
                    //     margin: "40px auto",
                    // }}
                    />
                    {/* <motion.div
                    className='img'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}>
                    <motion.img
                        key={props.product.image}
                        src={props.product.image}
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 200, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    />
                    
                    
                </motion.div> */}




                    <div className='product-details  md:px-10 px-4 w-full'>
                        <motion.div variants={stagger} className='inner w-full pr-2'>
                            <Link href='../products'>
                                {/* <motion.div variants={fadeInUp}>
                                Back to products
                            </motion.div> */}
                            </Link>
                            <motion.div variants={fadeInUp}>
                                <span className=' '>Humming Probe UX200</span>
                                <Link href='../Products/product01'>CN</Link>
                            </motion.div>
                            <motion.h1 className="dark:text-white text-2xl font-extrabold" variants={fadeInUp}>極安簡測-胃幽門桿菌尿素呼氣檢測系統<br></br>
                                <ul className="mt-6 ml-0 pl-0">
                                    <li className="text-base font-normal dark:text-white"> ・非侵入檢測方式</li>
                                    <li className="text-base font-normal dark:text-white"> ・30分鐘立即獲得檢測成果
                                        Screen</li>
                                    <li className="text-base font-normal dark:text-white"> ・可用於評估治療前後效果Determination by Algorithm</li>
                                    <li className="text-base font-normal dark:text-white">   ・自動判讀檢測成果dustproof grade</li>
                                </ul>
                                <a href="#">    <CelebrateBTN className='border border-green-500' /></a>
</motion.h1>
                            <motion.p className="dark: text-slate-300 " variants={fadeInUp}>


                            






                            </motion.p>
                            {/* <motion.div variants={fadeInUp} className='additonals'>
                                <span>Soy Free</span>
                                <span>Gluten Free</span>
                            </motion.div> */}
                            {/* <motion.div variants={fadeInUp} className='qty-price'>
                                <div className='qty'>
                                    <div className='minus'>-</div>
                                    <div className='amount'>1</div>
                                    <div className='add'>+</div>
                                </div>
                                <span className='price'></span>
                            </motion.div> */}
                            <motion.div variants={fadeInUp} className='btn-row'>
                                <ModalBrn />
                                {/* <button className='add-to-cart rounded-full	 bg-pink-500 text-gray-100 dark:bg-gray-700'> Add to cart</button>
                            <button className='subscribe'> Subscribe</button> */}

                            </motion.div>

                        </motion.div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="content-bottom md:p/x-10 xl:px-15 2xl:px-20">
                <section className="w-full section-about border  ">
                    <TextScroll />
                    <div className="Container items-center flex justify-center w-full	pt-10">
                        <div className="wrap flex flex-col justify-center items-center w-3/4">


                            <motion.div className="card"
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ staggerChildren: 0.3 }}
                            >

                                <motion.h2
                                    className="text-center mb-4 text-3xl  tracking-tight text-gray-900 md:text-5xl lg:text-5xl lg:leading-loose  dark:text-white font-bold uppercase"
                                    variants={textAnimate}
                                > 關於胃幽門螺旋桿菌</motion.h2>


                            </motion.div>
                        </div>
                    </div>
                </section>
                <section className="section_Accessories ">

                    <div className="flex flex-col w-full px-[20px] md:px-20 bg-gray-150">
                        <div className="w-full text-center flex flex-col items-center justify-center py-10">
                            <h1 className="mt-2  text-center text-3xl md:text-5xl font-bold uppercase">
                                內容物配件
                            </h1>
                            <p className="text-sm text-center  text-gray-400">
                                極安簡測-胃幽門螺旋桿菌不同診斷方式比較

                            </p>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row ">
                            <div className="w-full lg:w-1/2">

                                <div className="left py-16 border-gray-50 rounded-2xl shadow-md bg-black border  flex flex-col items-center justify-center overflow-hidden group">
                                    <div className="txt text-center p-1">

                                        <p className="text-white text-normal">Stem Play</p>
                                        <h2 className="text-white mt-2 text-center text-4xl font-bold uppercase">Amazing sound. At </h2>

                                        {/* <a href="#" className="mt-10">Learn More</a> */}
                                    </div>
                                    <Image className="duration-500 group-hover:scale-110" src='/14_hvp4fq.png' alt='testImg' width={600} height={200}></Image>
                                    <p className="text-gray-300 w-2/3 text-center mt-10 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate laboriosam corporis repudiandae totam molestias eligendi autem accusamus delectus ex perspiciatis laborum earum quo necessitatibus dolores quae, quos impedit ipsum?</p>
                                </div>


                            </div>
                            <div className="right w-full lg:w-1/2">
                                <div class='h-1/2 ml-0 md:ml-5 mt-4  w-full border border-gray-50 bg-white flex rounded-2xl p-8 shadow-md overflow-hidden  group'>
                                    <div className="tx w-2/5">
                                        <h2 className="text-black mt-2 text-left text-3xl font-bold uppercase">Adipisicing elit. Explicabo</h2>
                                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo inventore incidunt iusto officiis eligendi unde tenetur, </p>
                                        
                                    </div>
                                    <div className="w-3/5 group-hover:scale-150 relative h-[300px] duration-500">
                                        <Image  src='/up100-12_xo64cf.webp' width={800} height={500} alt='testImg' className="absolute right-[-100px] scale-125 "></Image>
                                    </div>
                                    
                                   


                                </div>
                                <div className=" flex md:flex-row flex-col   w-full ">
                                    <div className="w-full mt-4  ml-0 md:ml-5 mt-3 h-1/2">
                                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                                                <h4 className="text-gray-200 font-medium text-2xl">Acme camera</h4>
                                            </CardHeader>
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                
                                                removeWrapper
                                                alt="Card example background"
                                                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                                                src="https://res.cloudinary.com/drmonozsf/video/upload/v1706671843/SPE_%E7%89%B9%E5%AF%AB_l6kafn.mp4"
                                            />
                                            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                                <div>
                                                    <p className="text-black text-tiny">Available soon.</p>
                                                    <p className="text-black text-tiny">Get notified.</p>
                                                </div>
                                                <Button className="text-tiny"  color="primary" radius="full" size="sm">
                                                    Notify Me
                                                </Button>
                                              
                                            </CardFooter>
                                        </Card>
                                    </div>
                                    <div className="w-full ml-0 mt-4 md:ml-5 mt-3 h-full">
                                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                                            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                                <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
                                                <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
                                            </CardHeader>
                                            <Image
                                                 width={500}
                                                 height={500}
                                                removeWrapper
                                                alt="Relaxing app background"
                                                className="z-0 w-full h-full object-cover"
                                                src="/截圖_tioow0.webp"
                                            />
                                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                                <div className="flex flex-grow gap-2 items-center">
                                                    <Image
                                                        width={600}
                                                        height={600}
                                                        alt="Breathing app icon"
                                                        className="rounded-full w-10 h-11 bg-black"
                                                        src="/A2343211_TD03_V1_3078x-2_dvhoa5.webp"
                                                    />
                                                    <div className="flex flex-col">
                                                        <p className="text-tiny text-white/60">Breathing App</p>
                                                        <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                                                    </div>
                                                </div>
                                                <Button radius="full" size="sm">Get App</Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>


                
                </section>
                <section>
                    <div className="Container px-5 md:px-20">
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
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <h2 className="mb-4 dark:text-white text-center text-3xl md:text-5xl leading-none font-bold uppercase">什麼是胃幽門螺旋桿菌？</h2>
                                        <p className="text-base text-gray-800 md:w-2/3 w-full mx-auto">胃幽門螺旋桿菌（Helicobacter pylori）是一種微小的革蘭氏陰性菌。胃幽門螺旋桿菌是螺旋狀且具有纖毛，這種形狀使得它能夠在胃部黏膜中穿梭移動。它表面的黏附分子能夠與胃部黏膜細胞表面的受體結合，這有助於它們固定在胃部黏膜上並避免被洗脫。這些特點使得胃幽門螺旋桿菌能夠在胃部環境中存活並定居，導致感染和相關的胃部問題。</p>

                                    </motion.h2>



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


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


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

                                        <div className="relative w-full border">
                                            {/* <img className="w-[1000px] mx-auto rotate-[-1.5deg]" src="https://www.ultraehp.com/images/Products-Detail-Img/UP100/up100-12.png" alt="" /> */}

                                            <Image  placeholder="empty" loading="lazy" alt="running people"  src='/up100-12_xo64cf.webp' width={1000} height={400} className="" />



                                            <div className="tooltip-wrap h-[100%] hidden lg:block w-[100%] hidden md:block">
                                                <div className="absolute left-[50%] top-[30%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">3.5 寸液晶顯示螢幕</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                                <div className="absolute left-[30%] top-[24%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">電源顯示燈</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                                <div className="absolute left-[30%] top-[40%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">開機按鈕</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>

                                                <div className="absolute left-[10%] top-[46%] ">
                                                    <Tooltip

                                                        content={
                                                            <div className="px-1 py-2">
                                                                <div className="text-small font-bold">試片插入口ＳＰＥ</div>
                                                                <div className="w-[30px] h-[30px] bg-black  rounded-full border "></div>
                                                            </div>
                                                        }
                                                    >
                                                        <Button className="btn-tooltip" variant="bordered">
                                                            Hover me
                                                        </Button>
                                                    </Tooltip>

                                                </div>
                                            </div>
                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>


                            
                        </div>
                    </div>
                </section>
                <section className=" section_slider h-[115vh]">
                    <div className="mb-10"> 
                        <div className="text-center ">
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://medium.com/@jeyprox"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the article
                            </Link>
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://github.com/jeyprox/framer-carousel"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the repo
                            </Link>
                        </div>
                        <h1 className="mt-2  text-center text-4xl font-bold uppercase">
                          

                        </h1>
                       
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

                              

                                <h2 className="mb-4 dark:text-white text-3xl text-center md:text-5xl leading-none font-bold uppercase">  胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>
                              

                            </motion.h2>



                            <motion.p
                                className="text-m "
                                variants={title02}
                            >

                                <div className="px-[20px]">
                                    <p className="text-black w-full md:w-1/2  text-m text-center mx-auto dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem officiis saepe accusamus error, sit maxime commodi officia, rerum temporibus laudantium culpa recusandae dolor, ipsa eveniet cupiditate natus vero non!</p>
                                </div>

                                <div className="flex justify-center">
                                    <p className="text-sm text-center bg-pink-500  rounded-full inline-block text-gray-100 mt-4 px-3 py-2 mx-auto ">
                                        幽門螺旋桿菌

                                    </p>
                                </div>

                            </motion.p>


                        </motion.div>
                       

                    </div>

                    <div className="flex-col lg:flex w-full p-[15px] px-20 relative">

                   

                    <div className="w-[90%] lg:w-[40%]  left-[5%]">

                        <div className="txt  pl-[20%]">
                            <h3>
                                    檢測原理
                            </h3>
                                <p className="mt-2 dark:text-white text-base text-gray-800">胃部感染胃幽門螺旋桿菌時，當我們服用尿素溶液後，胃幽門螺旋桿菌上的尿素酶會將尿素分解成二氧化碳和氨氣。我們通過檢測從呼吸中排出的氨氣，對比服用尿素前的背景數值，從而確定是否感染胃幽門螺旋桿菌。</p>
                        </div>

                    </div>
                    <div className=" w-[130%] lg:w-[100%] relative lg:absolute right-[24%] lg:right-[-20%]">
                        {/* <TwoColSlider /> */}
                    </div>
                    </div>
                  
                </section>

                <section className="section_double">
                    {/* <Double/> */}
                </section>
                 <section className="section_two px-20">
                    <div className="grid grid-cols-2">
                        <div>
                            <Image src='/Untitled-Camera-2_ww0a0t.png' alt='testImg' width={1200} height={1500}></Image>
                            
                        </div>
                        <div></div>
                        
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
