"use client"

import Tooltip from "../components/Tooltip"
import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
import JsonLd from '../components/JsonLd.jsx';
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import UP10001 from '../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import airbag from '../public/images/bag.png'
import Hero from '@/components/hero'
import Link from "next/link";
import { motion } from "framer-motion";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpForm from '../components/MailchimpForm.jsx'
import Head from "next/head";
import ReactSlick from '../components/ReactSlick/ImageSlider.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import ModalBtn from "../components/ModalBtn-6.jsx"
// import Features from '@/components/features'
// import FeaturesBlocks from '@/components/features-blocks'
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Features from '../components/features'

import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../components/Application/ApplicateCard'
import CardHover from '../components/CardHover'
import Cards from '../components/Cards/Cards'
import { properties } from "../constants/data";
import Accordion from "../components/Accordion/Accordion"
import SwiperCard from "../components/SwiperCarousel/SwiperCard"
import { CldVideoPlayer } from 'next-cloudinary';
// import ArticleBottomSection from '../components/ArticleBottomSection.jsx'


// import Head from "next/head"



// import SlickCard from '../components/slickCard/SlickCard'


import 'cloudinary-video-player/cld-video-player.min.css';

// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../styles/additional-styles/tab.css'

import { Cloudinary } from '@cloudinary/url-gen'
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dc9veqqhp'
  }
})

const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}
const myLoader00 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader06 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
  return `https://www.zensor.com.tw/images//Products-Detail-Img/ECWP100S/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
  return `https://www.zensor.com.tw/images//Products-Detail-Img/ECWP100S/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/carousel-img/640x640/${src}?w=${width}?p=${placeholder}`
}
const myLoader10= ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/carousel-img/1024x576/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/carousel-img/1920x768/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/icon/${src}?w=${width}?p=${placeholder}`
}
const myLoader09 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/${src}?w=${width}?p=${placeholder}`
}

const myLoader001 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
export default async function Home() {

  // const url = "//us14.admin.mailchimp.com/subscribe/post?u=zefzefzef&id=fnfgn";
  // const SimpleForm = () => <MailchimpSubscribe url={url} />
  // const CustomForm = () => (
  //   <MailchimpSubscribe
  //     url={url}
  //     render={({ subscribe, status, message }) => (
  //       <div>
  //         <SimpleForm onSubmitted={formData => subscribe(formData)} />
  //         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
  //         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
  //         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
  //       </div>
  //     )}
  //   />
  // )



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
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.6,
        ease: easing
      }
    }
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };


//結構化資料

const ProductPost = {
    title: '超極生技｜快速胃幽門螺旋桿菌檢測，拋棄式免校正pH儀器｜極安簡測 & 蜂鳥探針',
    description: "超越傳統感測技術，實現卓越的健康生活。我們引以為傲的PotentioStrip專利技術，為您帶來兩大品牌，第一款是針對醫療健康需求的極安簡測-胃幽門螺旋桿菌快速呼吸檢測組，第二款則是為改進檢測體驗而設計的拋棄式免校正pH檢測系列。",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-2/UH2-4-%E4%B8%80%E6%BB%B4%E9%87%8F%E6%B8%AC1000x1000.webp",
    positive01: "7.0”彩色觸控屏幕",
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
  //   title: '超極生技｜快速胃幽門螺旋桿菌檢測，拋棄式免校正pH儀器｜極安簡測 & 蜂鳥探針',
  //   positive01: "7.0”彩色觸控屏幕",
  //   positive02: "演算法自動終點判斷",
  //   positive03: "防水防塵等級",


  //   description: "超越傳統感測技術，實現卓越的健康生活。我們引以為傲的PotentioStrip專利技術，為您帶來兩大品牌，第一款是針對醫療健康需求的極安簡測-胃幽門螺旋桿菌快速呼吸檢測組，第二款則是為改進檢測體驗而設計的拋棄式免校正pH檢測系列。",
  //   image: "https://www.ultraehp.com/images/index/carousel-img/1920x768/UltraP核心技術圖-無字1920X768.webp",
   
  //   LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/ultrae-logo.png",
  //   BrandName: "超極生技",
  //   mainEntityOfPage: {
  //     "@type": "WebPage",
  //     "@id": ""
  //   },
   
    
  // };




  // const fadeInUp = {
  //   initial:{
  //     y:60,
  //     opacity: 0,
  //     transition: { duration: 0.6, ease: easing }


  //   }
  // }

  return (


    <div className='bg-white'>



      <link rel="alternate" href="https://www.ultraehp.com/" hreflang="zh-Hant" />
      <link rel="alternate" href="https://www.ultraehp.com/en/" hreflang="en" />


      {/* metadata */}
      <title>超極生技-UltraE｜快速胃幽門螺旋桿菌H. Pylori尿素呼吸檢測｜拋棄式免校正pH酸堿度檢測｜極安簡測 & 蜂鳥探針</title>
      <meta key="description" name="description" content="超越傳統感測技術，實現卓越的健康生活。我們引以為傲的PotentioStrip專利技術，為您帶來兩大品牌，第一款是針對醫療健康需求的極安簡測-胃幽門螺旋桿菌快速呼吸檢測組，第二款則是為改進檢測體驗而設計的拋棄式免校正pH檢測系列。  " />
      <meta name="keywords" content="胃幽門桿菌|H. Pylori/pH meter/pH感測器/pH測量儀/酸鹼度計/pH檢測器/pH值檢測計/可攜式 pH 計/桌上型pH計/pH測量儀 /pH電極/酸鹼度計/酸鹼測試/pH測試" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      {/* OG metadata */}
      <meta property="og:url" content="https://www.ultraehp.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="超極生技-UltraE｜快速胃幽門螺旋桿菌H. Pylori尿素呼吸檢測｜拋棄式免校正pH酸堿度檢測｜極安簡測 & 蜂鳥探針" />
      <meta property="og:description" content="超越傳統感測技術，實現卓越的健康生活。我們引以為傲的PotentioStrip專利技術，為您帶來兩大品牌，第一款是針對醫療健康需求的極安簡測-胃幽門螺旋桿菌快速呼吸檢測組，第二款則是為改進檢測體驗而設計的拋棄式免校正pH檢測系列。" />
      <meta property="og:image" content="https://www.ultraehp.com/images/index/UltraE-hero.webp?w=1920" />



      <div className="outWrap overflow-hidden ">

        <div>
    


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


{/* 
         <div className="mobile-lang fixed block md:hidden ml-[30px] top-[70px] z-[9999]">
          <a href="https://www.ultraehp.com/en/">
            <div className='w-[40px] h-[40px] text-[18px] bg-black text-white rounded-full flex justify-start pl-[11.5px] items-center'>en</div>
          </a>
        </div>  */}

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
                <a  className='block w-full' href="https://www.ultraehp.com/en">English</a>
              </DropdownItem>
              <DropdownItem key="new">
                <a href="https://www.ultraehp.com/ " className='block w-full'>繁體中文</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </div> 

        <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>
        <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
          <a href="https://ultraehp.com/en/">
            <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>en</div>
          </a>
        </div>
        <section className="section_HeroVideo p-0 relative h-auto md:h-[576px] 2xl:h-[768px] lg:h-[600px] mt-[100px]  " >



          <Image loading='eager' className="hidden lg:block" loader={myLoader05} priority={true} fetchPriority="high" placeholder="empty" alt="免校正微量拋棄式pH計酸鹼檢測儀開機自動自檢校正Humming" src='超極首頁輪播圖-無字1920X768.webp' width={1920} height={768} />

          <Image loading='eager' loader={myLoader10} priority={true} fetchPriority="high" placeholder="empty" alt="免校正微量拋棄式pH計酸鹼檢測儀開機自動自檢校正Humming" src='超極首頁輪播圖-無字1024X576.webp' width={1024} height={576} className="hidden md:block lg:hidden" />


          <Image loading='eager' loader={myLoader04} priority={true} fetchPriority="high" placeholder="empty" alt="快速胃幽門螺旋桿菌檢測-mobile" src='超極首頁輪播圖-無字640X640.webp' width={640} height={640} className="block md:hidden" /> 



          


          <div className="relative border border-black  w-full lg:w-[500px] h-auto lg:h-[500px] block md:hidden  ">

          </div>

          <div className="HeroTitle   pl-[20px] md:pl-[40px] top-[10%] md:top-[15%] lg:top-[15%] xl:top-[27%] w-full md:w-[90%] md:w-[50%] md:left-[7%] 2xl:left-[14%]  mt-[30px] md:mt-0 relative  md:absolute    ">

            <motion.div className="" initial='initial' animate='animate' exit={{ opacity: 0 }}>
              <motion.div variants={stagger} className='inner flex  flex-col md:justify-start justify-center md:items-start items-center w-full pr-2'>

                <motion.div variants={fadeInUp}>

                </motion.div>
                <motion.h1 className="text-gray-800 text-center md:text-left w-3/4 text-[26px] leading-normal md:text-[30px] lg:text-[50px]" variants={fadeInUp}>超越感測界線，極致健康生活
<br />
                </motion.h1>
                <motion.p className=" text-gray-800 mt-4 w-full md:w-1/2 xl:w-1/3 2xl:text-[22px] md:text-[16px] text-[16px]" variants={fadeInUp}>

                  我們針對食品與水質檢測發展與日常生活息息相關之感測器，以減少有害物質攝取與接觸 ，達到守護人類健康的願景



                </motion.p>

                <motion.div variants={fadeInUp} className='btn-row'>

                  <div className="mt-10">
                    <a href="https://www.ultraehp.com/aboutUs.html" className="bg-orange-500 text-white font-light text-[14px] text-center  rounded-full w-[150px] md:w-[180px] text-white px-4 mt-3 py-2 ">

關於超極生技</a>

                  </div>


                </motion.div>

              </motion.div>
            </motion.div>




          </div>

        </section>


        <section>
          <div className="line  mt-[50px] md:mt-[20px] p-4">
            <p className="text-[30px] blank02 font-bold text-center text-gray-800">- CORE TECH -</p>
          </div>

        </section>


        <section className="relative">
          {/* <Hero /> */}

          <Image loader={myLoader05} loading='lazy' fetchPriority="high" placeholder="empty" alt="免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針可提供微升級的樣品測試/Humming Probe UH1/超極生技UltraE" src='UltraP核心技術圖-無字1920X768.webp' width={1920} height={768} />
          <div className="txt w-full md:w-[35%] flex relative md:absolute right-0 md:right-[6%] xl:right-0 xl:ml-[50px]  sm:top-[22%] xl:top-[35%] items-center md:items-start justify-center md:justify-start py-[30px] flex-col">
            <h2 className="bg-sky-600 text-white relative text-[14px] px-4 py-2 rounded-[40px] w-[150px] md:w-[220px] font-normal  ">

              我們的核心技術-PotentioStrip <span className="border absolute border-white  rounded-full flex items-center justify-center right-[11px] md:right-[5px] top-[8px] text-[8px] w-[12px] text-white h-[12px]">R</span>




            </h2>
            <h2 className="text-black md:text-white font-normal xl:font-extrabold text-[16px] md:text-[20px] xl:text-[30px] text-center md:text-left mt-3">我們讓試片長出自己的電路系統
            </h2>
          </div>
        </section>


        <section className=' px-5  md:px-15 lg:px-20'>



        </section>


        <section className="hidden">
          <div className="container ">

            <div className="row center">


{/* 
              <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-4xl dark:text-white dark:text-rose-500  text-center"> Operation(專業使用版本kkkkkkkk)</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aperiam dolore nostrum, officia ipsam, in ullam vitae pariatur voluptates, incidunt porro saepe dolorem natus mollitia. Voluptatem reiciendis pariatur quae impedit. </p>

              </div> */}


            </div>


            <div className="row">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2">




                  <div className='flex justify-start  px-9 '>
                    <Image
                      src="/images/Untitled-Camera拷貝.png"
                      width={500}

                      height={600}
                      style={{ borderRadius: "15px" }}

                      alt="Picture of the author"
                    />

                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text flex flex-col  w-full">
                      <h2 className="text-4xl font-normal dark:text-rose-500 ">
                        UP100
                      </h2>
                      <p className="w-1/2 mb-10 dark:text-white">UltraPeace-Instant H. Pylori Urea Breath Test kit-Pro</p>
                    </div>
                    {/* <Accordion /> */}
                  </div>

                </div>
              </div>
            </div>
            <div className="row my-10 ">

              <div className="container">
                <div className="grid">
                  <h5 className="text-4xl dark:text-rose-500 text-center py-4">
                    胃幽門螺旋桿菌的快速尿素呼吸檢測法
                  </h5>

                </div>
                <div className="grid gap-4 grid-cols-1  md:grid-cols-2 flex justify-center items-center lg:grid-cols-3">
                  <div className=" dark:bg-slate-900  bg-[indexCard] rounded-3xl lg:h-[500px] justify-around flex flex-col items-center py-10">

                    <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl dark:text-white">ToothBaste Bits</b>
                        <p className='font-extralight dark:text-slate-200'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] border border-black">

                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='www.google.com ' className="go-btn ">
                          Go to Products
                        </a>
                      </div>
                    </div>








                  </div>
                  <div className="middleImg relative overflow:hidden  border border-black    rounded-3xl h-[500px] p-[1px] justify-around flex flex-col items-center ">
                    <div className=" absolute transition-transform  hover:rounded-3xl hover:transform w-full h-full rounded-3xl bg-center bg-cover bg-no-repeat  relative bg-[url('http://ultraehp.com/images/UP100/Untitled-Camera-2.png')] "></div>

                  </div>
                  <div className="border border-black rounded-3xl h-[500px] justify-around flex flex-col dark:bg-slate-900 items-center py-10">

                    <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl dark:text-white">ToothBaste Bits</b>
                        <p className='font-extralight dark:text-slate-200'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] ">
                        {/* <img src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_427322551_2878x.png?v=1695786640" className="w-auto h-[400px]" alt="" /> */}
                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='https://www.ultraehp.com/ultrapeace/en/' className="go-btn dark:text-slate-300">
                          Go to Products
                        </a>
                      </div>
                    </div>








                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>









        <section className=' px-5  md:px-15 lg:px-20'>



        </section>




        {/* <Features /> */}
        {/* <section>
          <div className="container mx-auto">
         
              <motion.div className="card"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.3 }}
              >

                <motion.h2
                  className="text-center mb-4 text-3xl font-extrabold px-4 lg:px-20 tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                  variants={title01}

                >

                  <div className="containerw-full flex flex-col justify-center items-center  ">


                  <h2 className="md:text-xl xl:text-3xl leading-[45px] 2xl:text-5xl text-center  text-black mt-[50px] font-extrabold ">
                    Ultra-Micro Electrode,<br/> Ultra-Healthy Life
                  </h2>
                    <h3 className="text-black  font-extrabold"></h3>
                  <p className="text-center w-full  lg:w-1/2">  Go beyond traditional sensing technology to achieve superior health.
                    We are proud of our patented PotentioStrip technology, which brings you two brands
                    </p>
                  <a href="https://www.ultraehp.com/en/ContactUs.html" class="bg-orange-500 font-light text-[14px] text-center mt-6 rounded-full w-[150px] text-white  py-2 ">Contact Us</a>
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

                    <div className="App">
                   
                     
                      <div className="properties flex flex-wrap   justify-center items-center">
                        {properties.map((item) => (
                          <Cards data={item} key={item.id} />
                        ))}
                      </div>
                    </div>




                  </motion.h2>


                </motion.div>



              </div>





           
          </div>



        </section>




        <Image loading='eager' loader={myLoader03} priority={true} fetchPriority="high" placeholder="empty" alt="免校正微量拋棄式pH計酸鹼檢測儀開機自動自檢校正Humming" src='chip-customized.png' width={1920} height={768} className="mt-[50px]" />


        

        <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
       

        </div>
    








        <video className="mt-20 mx-auto w-36 h-24" autoPlay muted loop >
          <source src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faebcdc568ab9443e8b5282e52d49a586%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&amp;token=aebcdc568ab9443e8b5282e52d49a586&amp;alt=media" />
        </video> */}
        {/* <SlickCard /> */}




        <section className="hidden">
          <div className="container ">

            <div className="row center">


{/* 
              <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900  lg:text-4xl dark:text-white dark:text-rose-500  text-center"> Operation(專業使用版本kkkkkkkk)</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aperiam dolore nostrum, officia ipsam, in ullam vitae pariatur voluptates, incidunt porro saepe dolorem natus mollitia. Voluptatem reiciendis pariatur quae impedit. </p>

              </div> */}


            </div>


            <div className="row">
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2">




                  <div className='flex justify-start  px-9 '>
                    <Image
                      src="/images/Untitled-Camera拷貝.png"
                      width={500}

                      height={600}
                      style={{ borderRadius: "15px" }}

                      alt="Picture of the author"
                    />

                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text flex flex-col  w-full">
                      <h2 className="text-4xl font-normal dark:text-rose-500 ">
                        UP100
                      </h2>
                      <p className="w-1/2 mb-10 dark:text-white">ultraPeace-Instant H. Pylori Urea Breath Test kit-Pro</p>
                    </div>
                    {/* <Accordion /> */}
                  </div>

                </div>
              </div>
            </div>
            <div className="row my-10 ">

              <div className="container">
                <div className="grid">
                  <h5 className="text-4xl dark:text-rose-500 text-center py-4">
                    胃幽門螺旋桿菌的快速尿素呼吸檢測法
                  </h5>

                </div>
                <div className="grid gap-4 grid-cols-1  md:grid-cols-2 flex justify-center items-center lg:grid-cols-3">
                  <div className=" dark:bg-slate-900  bg-[indexCard] rounded-3xl lg:h-[500px] justify-around flex flex-col items-center py-10">

                    <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl dark:text-white">ToothBaste Bits</b>
                        <p className='font-extralight dark:text-slate-200'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] border border-black">

                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='www.google.com ' className="go-btn ">
                          Go to Products
                        </a>
                      </div>
                    </div>








                  </div>
                  <div className="middleImg relative overflow:hidden  border border-black    rounded-3xl h-[500px] p-[1px] justify-around flex flex-col items-center ">
                    <div className=" absolute transition-transform  hover:rounded-3xl hover:transform w-full h-full rounded-3xl bg-center bg-cover bg-no-repeat  relative bg-[url('http://ultraehp.com/images/UP100/Untitled-Camera-2.png')] "></div>

                  </div>
                  <div className="border border-black rounded-3xl h-[500px] justify-around flex flex-col dark:bg-slate-900 items-center py-10">

                    <div className="top-wrap">
                      <div className="txt flex flex-col items-center mb-5">
                        <b className="text-3xl dark:text-white">ToothBaste Bits</b>
                        <p className='font-extralight dark:text-slate-200'>from Ind / Month</p>
                      </div>
                      <div className="imgWrap overflow-hidden rounded-full w-[280px] h-[280px] ">
                        {/* <img src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_427322551_2878x.png?v=1695786640" className="w-auto h-[400px]" alt="" /> */}
                      </div>
                    </div>
                    <div className="bottom-wrap">
                      <div className="bottom w-full flex justify-between">
                        <div className="icon w-1/3 border rounded-2xl w-[150px] border-red-500">
                          lorem
                        </div>
                        <a href='UltraP.html' className="go-btn dark:text-slate-300">
                          Go to Products
                        </a>
                      </div>
                    </div>








                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="line mt-[44px]  p-4">
            <p className="text-[30px] text-center font-bold text-gray-800">- BRAND -</p>
          </div>

        </section>





     
        <section className="section_FullBanner01 px-[20px] lg:px-[px]  flex-col md:flex-row flex items-center justify-center">
          <div className="text-wrap w-full md:w-1/2  flex justify-center items-center  flex-col mb-4 md:mb-0  px-4 md:block   lg:hidden">
            <h2 className=" text-[20px] md:text-[22px] xl:text-2xl  text-left text-gray-800 font-bold">
              胃幽門桿菌快速檢測


            </h2>
            <p className="mt-2 text-[16px] sm:text-[18px] md:text-[22px]  mb-3">30分鐘立即獲得尿素呼吸測試結果


            </p>
            <a href="https://www.ultraehp.com/ultrapeace/" className="bg-[#964d78] font-light text-[14px] text-center  rounded-full w-[150px] md:w-[180px] text-white px-4 mt-3 py-2 "> 關於極安簡測</a>


          </div>
          <div className="container  w-full xs:w-[75%] md:w-1/2 lg:w-full lg:block h-[400px] md:h-[340px]  relative lg:h-[500px] 2xl:h-[768px] rounded-2xl overflow-hidden ">
            <div className="absolute top-0 left-0  mx-auto">


              <Image src='UltraP幽門桿菌人體胃痛視覺圖-無字1920X768.webp' width={1920} placeholder="empty" alt='幽門桿菌人體胃痛視覺圖' height={768} loading='lazy' loader={myLoader05} className="  mx-auto hidden lg:block">


              </Image>


              <Image src='UltraP幽門桿菌人體胃痛視覺圖-無字640X640.webp' width={650} loading='lazy' alt='幽門桿菌人體胃痛視覺圖' loader={myLoader04} placeholder="empty" height={650} className=" mx-auto block lg:hidden"></Image>
            </div>

            <div className="text-wrap  lg:absolute  w-full md:w-1/2 right-[20px] top-[10%] ">
              <h2 className=" text-[20px] md:text-[22px] xl:text-2xl  text-left text-gray-800 font-bold">
                胃幽門桿菌快速檢測


              </h2>
              <p className="mt-2 text-[16px] sm:text-[18px] text-gray-700 mb-3">30分鐘立即獲得尿素呼吸測試結果


              </p>
              <a href="https://www.ultraehp.com/ultrapeace/" className="bg-[#964d78] font-light text-[14px] text-center  rounded-full w-[150px] md:w-[180px] text-white px-4 mt-3 py-2 ">關於極安簡測</a>

            </div>



          </div>






        </section>


        <section className="section_FullBanner02  my-6 px-[20px] lg:px-[px] flex-col md:flex-row flex items-center justify-center">
          <div className="text-wrap w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:block lg:absolute  ">
            <h2 className=" text-[20px] md:text-[22px] xl:text-2xl  text-left text-gray-800 font-bold">
           免校正拋棄式pH電極
            </h2>
            <p className="mt-2 text-[16px] sm:text-[18px] text-gray-700 mb-3">
              滿足你對pH檢測的全面需求



            </p>
            <a href="https://www.ultraehp.com/hummingprobe" className="bg-[#b5a27e] font-light text-[16px] text-center  rounded-full mb-[30px] lg:mb-0 md:w-[250px] sm:w-[220px]  w-[150px] md:w-[180px] text-white px-4 mt-3 py-2 ">關於蜂鳥探針</a>


          </div>
          <div className="container   w-full md:w-1/2 lg:w-full lg:block h-[400px] md:h-[340px] relative lg:h-[500px] 2xl:h-[768px] rounded-2xl overflow-hidden ">
            <div className="absolute top-0 left-0  mx-auto">

              <Image alt='免校正拋棄式微量pH酸鹼檢測系統/蜂鳥探針 Humming Probe/超極生-UltraE' src='蜂鳥探針主視覺圖-無字1920X768.webp'  width={1920} height={768} loader={myLoader05} className=" mx-auto hidden lg:block"></Image>


              <Image loader={myLoader04} alt='免校正拋棄式微量pH酸鹼檢測系統/蜂鳥探針 Humming Probe/超極生-UltraE' src='蜂鳥探針主視覺圖-無字640X640.webp' width={640} height={640} className=" mx-auto block lg:hidden"></Image>
            </div>

            <div className="text-wrap mb-5 my-4 md:my-0 lg:absolute  w-full md:w-1/2 left-[150px] top-[25%] ">
              <h2 className="md:text-xl xl:text-3xl 2xl:text-5xl text-left text-gray-700 font-extrabold">
                免校正拋棄式pH電極

              </h2>
              <p className="mt-2 text-[22px] text-gray-700 mb-3">滿足你對pH檢測的全面需求


              </p>
              <a href="https://www.ultraehp.com/hummingprobe" className="bg-orange-500 font-light  text-center  rounded-full mt-4  w-[150px] md:w-[180px] text-[16px] text-white px-4  py-2 ">關於超極生技</a>


            </div>



          </div>






        </section>


        <section className="section_chip hidden pt-[20px] bg-black m-0 ">

          <div className="py-[30px] px-[25px] lg:px-0 mx-auto w-full md:2/3 lg:w-1/2">
            <div className="yxyx flex flex-col justify-center items-center border">
              <h2 className="text-[26px] text-white font-extrabold mx-auto">我們讓試片長出自己的電路系統</h2>
              <p className="text-white text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo expedita cupiditate libero quisquam ea ex repudiandae, magnam ab harum possimus hic recusandae commodi magni porro repellendus quis sequi obcaecati!</p>

              <ModalBtn />

              <a href="https://www.ultraehp.com/en/ContactUs.html">聯絡工程師討論</a>

            </div>
          </div>
          <a href="https://www.ultraehp.com/ultrapeace/en/">
            <Image src='A2343211_TD03_V1_3078x.png' width={1920} height={700} loading="lazy" loader={myLoader00} />
          </a>



        </section>










       


        <div className="">


        </div>

        <section className="mt-[70px]">
          <div className="container mx-auto flex flex-col justify-center items-center  rounded-3xl">
            <div className="row">
              <div className="colorwrap flex mb-[40px]  justify-center rounded-2xl  dark:bg-gray-100">

           

                    <div className="container flex flex-col justify-center items-center  ">


                      <h2 className="">多領域應用




                      </h2>
                      {/* <h2 className="text-white font-normal">超越感測界線，極致健康生活</h2> */}
                      <p className=" text-center">專利技術建構的生態系健康檢測平台






                      </p>
                      <div className="card-wrap flex flex-wrap">
                        <div className="card  m-4 h-[400px] border border-gray-300  flex flex-col  bg-[#f5f6f6] rounded-xl p-6 w-[350px] ">
                          <div className="img w-full h-full  md:h-[230px]">
                            <Image src='三大優勢小圖icon-01.webp' loading='lazy' alt='三大優勢' placeholder="empty" loader={myLoader06} width={400} height={300}></Image>

                          </div>
                          <div className="txt mt-[5px]">
                            <b className="text-[18px] ">生醫檢測

                            </b>
                            <ul className="flex flex-col justify-start items-start">
                              <li className="text-[14px] font-normal ">- 血糖</li>
                              <li className="text-[14px] font-normal ">- 尿液酸鹼</li>
                              <li className="text-[14px] font-normal ">- 尿酸</li>
                              <li className="text-[14px] font-normal ">- 糖化血色素</li>
                              <li className="text-[14px] font-normal ">- 膽固醇</li>

                              <li className="text-[14px] font-normal ">- 血液酸鹼</li>

                            </ul>
                          </div>
                        </div>

                        <div className="card  m-4 flex h-[400px] border border-gray-300  flex-col bg-[#f5f6f6] rounded-xl p-6 w-[350px] ">
                          <div className="img w-full h-full  md:h-[230px]">
                            <Image src='三大優勢小圖icon-02.webp' loading='lazy' alt='三大優勢' placeholder="empty" loader={myLoader06} width={400} height={300}></Image>

                          </div>
                          <div className="txt mt-[5px]">
                            <b className="text-[18px] ">食品安全


                            </b>
                            <ul className="flex flex-col justify-start items-start">
                              <li className="text-[14px] font-normal">- 農藥</li>
                              <li className="text-[14px] font-normal">- 亞硝酸鹽</li>
                              <li className="text-[14px] font-normal">- 瘦肉精</li>
                              <li className="text-[14px] font-normal">- 過敏原</li>
                              <li className="text-[14px] font-normal">- 生箘數</li>

                            </ul>
                          </div>
                        </div>
                        <div className="card  m-4 h-[400px] border border-gray-300 flex flex-col  bg-[#f5f6f6] rounded-xl p-6 w-[350px] ">
                          <div className="img w-full  md:h-[230px]">
                            <Image loading='lazy' placeholder="empty" loader={myLoader06} alt='三大優勢' width={400} height={300} src='三大優勢小圖icon-03.webp'></Image>

                          </div>
                          <div className="txt mt-[5px]">
                            <b className="text-[18px] ">環境污染

                            </b>
                            <ul className="flex flex-col justify-start items-start">
                              <li className="text-[14px] font-normal">- 重金屬</li>
                              <li className="text-[14px] font-normal">- 酸鹼</li>
                              <li className="text-[14px] font-normal">- 多氯聯苯</li>
                              <li className="text-[14px] font-normal">- 甲醛</li>
                              <li className="text-[14px] font-normal">- 氨氮</li>

                            </ul>
                          </div>
                        </div>
                      </div>



                    </div>




                <div className="row">
           

                </div>

              </div>
            </div>
          </div>
        </section>
        {/* <section className="section_feature section px-[100px]">
          <div className="container">
            <div className="row mx-auto w-[95%] md:w-[90%] xl:w-[85%]">
              <div className="top mt-5">
                <div className="left  flex-col flex md:flex-row  items-center justify-center w-full">
                  <div className="top  w-full  md:w-[40%]  flex flex-col  items-center justify-center">
                    <p className="text-[22px] font-bold">Hello OEM/ODM Customers

                    </p>
                    <div className="img flex  justify-center w-full md:w-2/5">
                      <Image alt='oem-icon' src='oem-icon.webp' loader={myLoader07} width={300} placeholder="empty"
                        loading="lazy" height={300}></Image>
                    </div>
                  </div>

                  <div className="txt w-full md:w-[60%]">
                    <div className="border mt-4 rounded-xl border-black p-10">
                      <h4 className="text-[26px] font-semibold">
                        Original Equipment Manufacturing/OEM
                      </h4>
                      <p>
                        Original Equipment Manufacturing/OEM


                      </p>

                    </div>
                    <div className="mt-4">
                      <div className="border rounded-xl border-black p-10">
                        <h4 className="text-[26px] font-semibold">
                          Original Design Manufacturing/ODM
                        </h4>
                        <p>
                          Original Design Manufacturing/ODM


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
                      <Image src='oem-icon.webp' alt='oem-icon' loader={myLoader07} width={300} placeholder="empty"
                        loading="lazy" height={300}></Image>
                    </div>
                  </div>

                  <div className="txt w-full md:w-3/5">
                    <div className="border rounded-xl bg-gray-800 mt-4 border-black p-10">
                      <h4 className="text-[26px] text-white font-bold">
                        Placement of Miniature Acid-base pH Detecting Components

                      </h4>
                      <p className=" text-white ">
                        Our pH detection module can be added to your product design


                      </p>

                    </div>
                    <div className="mt-4">
                      <div className="border bg-gray-800 rounded-xl border-black p-10">
                        <h4 className="text-[26px] text-white font-bold"> Water Quality Monitoring Device

                        </h4>
                        <p className="text-white">
                          pH value/ Dissolved Oxygen/ Temperature disposable device


                        </p>
                      </div>

                    </div>

                    <div className="mt-4">
                      <div className="border bg-gray-800 rounded-xl border-black p-10">
                        <h4 className="text-[26px] text-white font-bold">IVD Medical Device Cooperation Development

                        </h4>
                        <p className="text-white">

                          Sample or target with pH value shift






                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section> */}



        <section className="mb-[50px]" >
          <div className="container mx-auto px-6 flex  flex-col lg:flex-row justify-center items-center bg-slate-50 mt-10  w-full sm:w-[90%]  md:w-[80%] rounded-3xl">




            <div className="row lg:w-1/2 w-full">
              <div className="colorwrap flex md:py-0 md:mt-8 xl:py-40  justify-center rounded-2xl  dark:bg-gray-600">

                <motion.div className="card"
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.3 }}
                >

                  <motion.h2
                    className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-black"
                    variants={title01}

                  >

                    <section className="mx-[20px] ">
                      <div className="container py-6 flex flex-col justify-center  items-center  ">


                        <h3 className=" text-[22px] md:text-[30px] leading-[35px] font-normal text-black ">如果還不確定是否適用<br/>
                          立即聯絡專人體驗我們的產品


                        </h3>
                        <h4 className="font-normal  text-[16px]">快來跟我們聊聊吧!
</h4>
                        <a href='https://www.ultraehp.com/en/ContactUs.html' className="w-4/5 md:w-2/3 mx-auto text-gray-600 text-center  lg:text-left">
                        </a>
                        <a href="https://www.ultraehp.com/ContactUs.html" className="bg-orange-500 text-[14px] text-center mt-6 rounded-full w-[150px] text-white  py-2 ">聯絡我們!</a>



                      </div>
                    </section>



                  </motion.h2>


                </motion.div>


              </div>
            </div>

            <div className="row  hidden md:flex w-full lg:w-1/2  pr-5  justify-center items-center h-full">
              {/*            
              <iframe className=" h-[500px] lg:h-[650px]" src='https://my.spline.design/untitled-e17fbea8704fb0489b816ed0e8953c2b/' frameborder='0' width='100%' height='800'></iframe> */}

              <Image width={350} alt='聯絡我們' height={350} src='contact-man.webp' placeholder="empty" loader={myLoader09} loading='lazy'></Image>



            </div>


          </div>
        </section>

        {/*    
        <section className="section section_banner">
          <a href='https://www.ultraehp.com/ultrapeace/en/' className="section_banner02">
            <div className="row border border-black  bg-cover bg-no-repeat bg-right md:bg-center bg-[url('https://www.zensor.com.tw/images/nextTest/up100-banner01.png')] h-[500px] w-full">
              <div className="grid grid-cols-2 h-full flex items-center justify-center">
                <div className="">
                  <div className="txt  flex items-center flex-col  justify-center">

                    <div className="relative pl-[30px] flex-col flex justify-center mb-8 pl-5" data-aos="fade-up" data-aos-delay="450">
                      <h2 className="text-white dark:text-rose-500  text-5xl ">Instant Helicobacter pylori</h2>
                      <ul>
                        <li className="text-white text-normal ">・Non-invasive testing method
                        </li>
                        <li className="text-white text-normal ">・Obtain results within 30 minutes</li>
                        <li className="text-white text-normal ">・Assess treatment effect before and after</li>
                      </ul>


                    </div>
                  </div>
                </div>
                <div className=""></div>

              </div>
            </div>
          </a>
        </section> */}

        {/* 
        <section className="section_features">
          <div className="container">
            <div className="row">
              <Features/>
            </div>
            
          </div>
          
          
        </section> */}




        {/* 
        <div className="row py-20 lg:px-10 px-5 xl:px-20 ">
          <SwiperCard />
       

        </div> */}
        {/* <MailchimpForm/> */}



      </div>
    </div>
  )
}
