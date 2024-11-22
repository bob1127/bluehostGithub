
"use client"
import Hero from '@/components/hero'

import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import {motion} from 'framer-motion'
// import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CardFooter, Button } from "@nextui-org/react";

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const cld = new Cloudinary({
    cloud: {
        cloudName: 'dc9veqqhp'
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



const data = [
    {
        image:

            '/UX100/UX100_zp5m5y',

    },
    {
        image:
            '/UX100/UX100-03-UX100機身介紹1000x1000_t6owog'

    },
    {
        image:
            '/UX100/UX100-04-插入電擊1000x1000_fzv84t'

    },
    {
        image:
            '/UX100/UX100-07-雙模式1000x1000_j4twq5'

    },
    {
        image:
            '/UX100/UX100-05-500萬畫素1000x1000_bwb7hf'

    },
    {
        image:
            '/UX100/UX100-06-4.3彩色觸控螢幕1000x1000_bym4dc'

    },


];

export default function Home() {
    return (
        <div className='flex flex-col  justify-center items-center dark:bg-gray-200'>

            {/* metadata */}
            <title>文章列表 - 超極生技 UltraE
            </title>
            <link rel="alternate" href="https://ultraehp.com/ArticleList.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://ultraehp.com/en/ArticleList.html" hreflang="en" />

            <meta key="description" name="description" content="創新的免校正免收集拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH2-Gas具有無需預先收集氣體，無需使用校正液校正，打開即用的拋棄式設計。免收集氣體直接測試pH的設計適合連續氣體酸鹼值的偵測。酸鹼測試電極" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://ultraehp.com/ArticleList.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
文章列表 - 超極生技 UltraE
" />
            <meta property="og:description" content="創新的免校正免收集拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH2-Gas具有無需預先收集氣體，無需使用校正液校正，打開即用的拋棄式設計。免收集氣體直接測試pH的設計適合連續氣體酸鹼值的偵測。酸鹼測試電極
" />
            <meta property="og:image" content="https://ultraehp.com/images/Products-Detail-Img/Index/UH1-01-720x540.webp" />






            <div className="title  mt-[200px] ">

                <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>


               <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://ultraehp.com/en/ArticleList.html">
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
                                <a className="block w-full" href="https://www.ultraehp.com/en/ArticleList.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/ArticleList.html">繁體中文</a>
                            </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


                </div>
                <motion.div className="card"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.3 }}
                >

                    <motion.h1
                        className="text-center mb-4 text-2xl  tracking-tight text-gray-900 md:text-[32px] lg:text-[32px]  dark:text-white font-bold uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text"
                        variants={textAnimate}
                    > 文章列表</motion.h1>
                    <motion.p
                        className="text-center mb-4 text-[16px]  tracking-tight text-gray-600   "
                        variants={textAnimate}
                    > 超越感測界線，極致健康生活</motion.p>
                  



                </motion.div>
            </div>

{/* 
            <div className="navgation ">
                <a href="https://ultraehp.com/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> /
                <a href="https://ultraehp.com/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>文章列表</a> /
                <a href="#" className='text-gray-500 hover:font-black font-bold hover:text-black'>水性絕緣凡立水</a>
            </div> */}
            <section className='pb-[60px]  2xl:px-[150px]'>
               

               <div className="cardWrap flex justify-center px-10 flex-wrap">

                    <a className='hover:scale-105 duration-300 ' href="Article04.html">
                    <Card className="py-4 m-4">
                            <CardHeader className="pb-0  md:p-6  w-[340px] pt-2 px-4 flex-col items-start">


                                <b className="font-bold text-large">能斯特方程式(Nernst)與酸鹼度計關係·
                            </b>
                                <p className="text-tiny">免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係 ...</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image

                                loader={myLoader}
                                priority={true}
                                fetchPriority='high'
                                    loading='eager'

                                alt="Card background"
                                    className="object-cover rounded-2xl md:rounded-none"
                                    src="UH1-01-720x540.webp"
                                width={320}
                                height={600}

                            />
                        </CardBody>
                    </Card>
                    </a>

                    <a className='hover:scale-105 duration-300 ' href="Article02.html">
                        <Card className="py-4 m-4 ">
                            <CardHeader className="pb-0  md:p-6  w-[340px] pt-2 px-4 flex-col items-start">
                               
                             
                                <b className="font-bold text-large">只用一滴就能檢測酸鹼值的pH計
                                </b>
                                <p className="text-tiny">試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm的大小，樣品接觸到感應層 ...</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    loading='eager'
                                    loader={myLoader}
                                    alt="Card background"
                                    className="mt-[29px] object-cover rounded-2xl md:rounded-none"
                                    src="UH1-12-試片一滴720x540.webp"
                                    width={320}
                                    height={600}

                                />
                            </CardBody>
                        </Card>
                    </a>
                    <a className='hover:scale-105 duration-300 ' href="Article05.html">
                    <Card className="py-4 m-4">
                            <CardHeader className="pb-0 w-[340px]  md:p-6  pt-2 px-4 flex-col items-start">


                                <b className="font-bold text-large">水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制
                            </b>
                            <p className="text-tiny">凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類...</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <Image
                                    loading='eager'
                                    loader={myLoader}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src="UH1沾凡立水720x540.jpg"
                                    width={320}
                                    height={600}

                                />
                        </CardBody>
                    </Card>
                    </a>
                    <a className='hover:scale-105 duration-300 ' href="Article03.html">
                    <Card className="py-4 m-4">
                            <CardHeader className="pb-0  md:p-6  w-[340px] pt-2 px-4 flex-col items-start">


                                <b className="font-bold text-large">看完這一篇再也不用校正pH計
                            </b>
                                <p className="text-tiny">pH酸度計(pH測量儀)的精確度(pH值)和壽命很大一部分取決於pH電極。而且很多時候因為使用方法不當，致使pH測量不準 ...</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <Image
                                    loading='eager'
                                    loader={myLoader}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src="免校正-720x540.webp"
                                    width={320}
                                    height={600}

                                />
                        </CardBody>
                    </Card>
                    </a>
               </div>
            </section>

            
        </div>
    )
}
