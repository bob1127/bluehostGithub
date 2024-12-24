"use client";
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
// import { CldImage } from 'next-cloudinary';
import Image from "next/image";
import YouTubePlayer from "../../components/VideoPlayer/UH2-GAS.jsx";

import ReadMoreReact from "read-more-react";
import JsonLd from "../../components/JsonLd.jsx";
import { Card, CardHeader, CardBody, Tooltip } from "@nextui-org/react";
import OthersProducts from "../../components/ReactSlick/ImageSlider2.jsx";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";

import SwiperSlider from "../../components/SwiperSliders/UH2-gasSlider.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import ModalBtn05 from "../../components/ModalBtn-5.jsx";
import ModalBtn02 from "../../components/ModalBtn-2.jsx";
import FindSPE from "../../components/FindSPE.jsx";
const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`;
};

const myLoader001 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`;
};
const myLoader01 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`;
};
const myLoader02 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/iso certification/${src}?w=${width}?p=${placeholder}`;
};
const myLoader03 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/brand/${src}?w=${width}?p=${placeholder}`;
};
const myLoader04 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/product-01/${src}?w=${width}?p=${placeholder}`;
};
const myLoader05 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`;
};
const myLoader09 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`;
};
const myLoader06 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`;
};

const myLoader08 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/${src}?w=${width}?p=${placeholder}`;
};

import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
  cloud: {
    cloudName: "ducasbzsc",
  },
});

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 1,
    },
  },
};
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
    },
  },
};
const title02 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 1.4,
      delay: 0.3,
    },
  },
};
const title03 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 1,
      delay: 0.9,
    },
  },
};

const card01 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 0.8,
      delay: 0,
    },
  },
};
const card02 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.3,
    },
  },
};
const card03 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.6,
    },
  },
};
const card04 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 0.8,
      delay: 0.9,
    },
  },
};
const card05 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 0.8,
      delay: 1.2,
    },
  },
};
const card06 = {
  offscreen: { y: 150, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "FadeUp",
      bounce: 0.4,
      duration: 0.8,
      delay: 1.5,
    },
  },
};
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
    },
  },
};

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
      staggerChildren: 0.05,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const data = [
  {
    image: "UH2-4-一滴量測1000x1000.webp",
  },
  {
    image: "UH2-05-即插即測1000x1000.webp",
  },
  {
    image: "UH2-06-搭配UX100-1000x1000.webp",
  },
  {
    image: "UH2-03.webp",
  },
  {
    image: "UH2-07-商品1000x1000.webp",
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

//結構化資料

const ProductPost = {
  title: "Humming Probe UH2-Gas免收集氣體酸鹼電極",
  description:
    "創新的免校正免收集拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH2-Gas具有無需預先收集氣體，無需使用校正液校正，打開即用的拋棄式設計。免收集氣體直接測試pH的設計適合連續氣體酸鹼值的偵測。酸鹼測試電極",
  image:
    "https://www.ultraehp.com/images/Products-Detail-Img/UH-2/UH2-4-%E4%B8%80%E6%BB%B4%E9%87%8F%E6%B8%AC1000x1000.webp",
  positive01: "即開即用，精準免校正",
  positive02: "適用於氣體樣品",
  positive03: "拋棄式電極無交叉汙染",
  LogoImg:
    "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
  BrandName: "UltraE",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "",
  },
};

const Product = (props) => (
  <div className="relative">
    {/* 結構化資料  */}
    <title>
      蜂鳥探針-UH2-Gas｜免校正免收集拋棄式氣體pH酸鹼檢測電極｜Humming
      Probe｜超極生技UltraE
    </title>
    <meta
      key="description"
      name="description"
      content="創新的免校正免收集拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH2-Gas具有無需預先收集氣體，無需使用校正液校正，打開即用的拋棄式設計。免收集氣體直接測試pH的設計適合連續氣體酸鹼值的偵測。酸鹼測試電極"
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta
      property="og:url"
      content="https://www.ultraehp.com/hummingprobe/UH2-GAS.html"
    />

    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="
蜂鳥探針-UH2-Gas｜免校正免收集拋棄式氣體pH酸鹼檢測電極｜Humming Probe｜超極生技UltraE
"
    />

    <link
      rel="alternate"
      href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html"
      hreflang="zh-Hant"
    />
    <link
      rel="alternate"
      href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html"
      hreflang="en"
    />
    <meta
      property="og:description"
      content="創新的免校正免收集拋棄式pH酸鹼檢測電極/蜂鳥探針Humming Probe UH2-Gas具有無需預先收集氣體，無需使用校正液校正，打開即用的拋棄式設計。免收集氣體直接測試pH的設計適合連續氣體酸鹼值的偵測。酸鹼測試電極
"
    />
    <meta
      property="og:image"
      content="https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-09-製程操控720x540.webp"
    />

    <motion.div
      className="dark:bg-black bg-gray-100 "
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Humming Probe UH2-Gas",
            headline: ProductPost.title,
            description: ProductPost.description,
            datePublished: ProductPost.datePublished,
            author: {
              "@type": "Person",
              name: "Humming Probe UH2-Gas",
            },
            image: [ProductPost.image],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "5",
            },

            brand: {
              "@type": "Brand",
              name: ProductPost.BrandName,
              logo: ProductPost.LogoImg,
            },
            positiveNotes: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: ProductPost.positive01,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: ProductPost.positive02,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: ProductPost.positive03,
                },
              ],
            },

            mainEntityOfPage: ProductPost.mainEntityOfPage,
          }}
        />
      </div>

      <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
        <a href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html">
          <div className="w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center ">
            en
          </div>
        </a>
      </div>

      <div className="langDropdown w-[10px]  text-right ml-[87.5vw]  top-[15px] fixed z-[999]">
        <div></div>

        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered p-0" className="w-[10px] p-0 m-0">
              <Image
                className="mb-3 pr-20 "
                src="earth.png"
                loader={myLoader09}
                loading="lazy"
                placeholder="empty"
                alt="language-switch"
                width={33}
                height={33}
              />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">
              <a
                className="block w-full"
                href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html"
              >
                English
              </a>
            </DropdownItem>
            <DropdownItem key="new">
              <a
                className="block w-full"
                href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html"
              >
                繁體中文
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Navigation />
      <div className="fullscreen relative pt-[60px]">
        <a href="https://www.ultraehp.com/hummingprobe/index.html">
          <Image
            loader={myLoader001}
            src="company-logo.webp"
            width={160}
            loading="lazy"
            className="fixed mt-2 ml-[20px] md:ml-[115px] z-50 top-[60px] left-10"
            alt="UltraP-logo"
            height={60}
          ></Image>
        </a>

        <section className="section   mt-0 md:mt-[150px]">
          <div className="Navgation mb-[30px] hidden md:block pl-[150px]">
            {" "}
            <a href="https://ultraehp.com/" className="hover:font-bold">
              Home
            </a>{" "}
            /{" "}
            <a className="hover: font-bold " href="# ">
              Humming Probe UH2-Gas 免收集氣體酸鹼電極
            </a>{" "}
          </div>

          <div className="container w-full flex px-[0px] md:px-[20px] xl:px-[70px] flex-col md:flex-row justify-start items-start">
            <div className="left   w-full md:w-1/2">
              <SwiperSlider />
            </div>

            {/* <div className="block md:hidden left border border-black w-full md:w-1/2">
                            
                            <SlickCarousel/>
                    </div>  */}
            <div className="right flex justify-center  md:justify-between md:pl-[50px] xl:pl-[80px] w-full md:w-1/2 flex-col  h-[480px]">
              <div className="txt">
                <h1 className="h1-u">
                  Humming Probe UH2-Gas
                  <br />
                  免收集氣體酸鹼電極
                </h1>
                <h3 className="model-u">
                  酸鹼試紙/酸鹼檢測/pH試片電極/pH電極/pH試紙
                </h3>
                <p className="text-middle-u">
                  業界首創氣體pH量測方法，利用特殊氣體交換薄膜，結合試片電極微小的特性，能夠快速簡便的測量氣體pH，為全球首創專業測量技術和創新的解決方案。
                </p>
                <ul>
                  <li>・即開即用，精準免校正</li>
                  <li>・適用於氣體樣品</li>
                  <li>・拋棄式電極無交叉汙染</li>
                  <li>・精準度可達 ±0.1 pH</li>
                  <li>・每片試片內建溫度感測元件</li>
                  <li>・易於攜帶</li>
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
        <section className="section">
          <div className="row">
            <h2 className=" w-2/3 md:w-1/2 mx-auto text-[32px] text-center ">
              獨創免收集氣體pH酸鹼檢測試片是如何運作的
            </h2>
          </div>
          <div className="pb-[50px] operation mt-3 px-0 md:px-[70px] lg:px-[90px] xl:px-[150px] 2xl:px-[300px]  w-full flex flex-col md:flex-row  ">
            <div className="left mr-3 flex flex-col overflow-hidden rounded-2xl w-full md:w-1/2">
              <div className="wrap bg-[#f0f1f7]  shadow-xl ">
                <div className="img">
                  <Image
                    loading="lazy"
                    alt="水凝膜|超極生技UltraE"
                    src="UH1-06-水凝膜720x540.webp"
                    width={650}
                    height={500}
                    loader={myLoader08}
                  ></Image>
                </div>
                <div className="txt flex flex-col justify-center    p-[40px]">
                  <b className="text-[18px] font-extrabold">
                    專利多孔氣體交換水凝膜設計
                  </b>
                  <p className="text-orange-500 font-bold">
                    氣體樣品無需預處理即可檢測
                  </p>
                  <p className="text-[14px]">
                    傳統pH量測屬於溶液相系統，但如果要測試揮發飄散至空氣中的揮發性酸鹼物質，通常會先收集這些揮發出來的酸鹼物質並且將其製成溶液後再進行pH的量測。專利的納米孔洞水凝膜，會藉由水凝膜交換氣體後，在電極表面進行水解後可以直接檢測揮發性酸鹼氣體的pH值
                  </p>
                </div>
              </div>
              <div className="wrap  bg-[#f0f1f7] mt-4 lg:mt-[50px] shadow-xl ">
                <div className="txt flex flex-col justify-center    p-[40px]">
                  <b className="text-[18px] font-extrabold">
                    專利多孔氣體交換水凝膜設計
                  </b>
                  <p className="text-orange-500 font-bold">
                    氣體樣品無需預處理即可檢測
                  </p>
                  <p className="text-[14px]">
                    傳統pH量測屬於溶液相系統，但如果要測試揮發飄散至空氣中的揮發性酸鹼物質，通常會先收集這些揮發出來的酸鹼物質並且將其製成溶液後再進行pH的量測。專利的納米孔洞水凝膜，會藉由水凝膜交換氣體後，在電極表面進行水解後可以直接檢測揮發性酸鹼氣體的pH值
                  </p>
                </div>
                <div className="img">
                  <Image
                    loading="lazy"
                    alt="氣體樣品無需預處理即可檢測|超極生技UltraE"
                    src="UH2gas-03-氣體交換720x540-01.webp"
                    width={650}
                    height={500}
                    loader={myLoader08}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="right mt-4 lg:mt-0 flex flex-col justify-center items-center bg-[#f0f1f7] rounded-2xl w-full md:w-1/2">
              <div className="img">
                <Image
                  src="UH2gas-03.webp"
                  alt="專利氫離子吸附膜設計|超極生技UltraE"
                  width={600}
                  height={700}
                  loader={myLoader08}
                  loading="lazy"
                ></Image>
              </div>
              <div className="txt flex flex-col justify-center    p-[40px]">
                <b className="text-[18px] font-extrabold">
                  專利氫離子吸附膜設計
                </b>
                <p className="text-orange-500 font-bold">
                  精確維持表面可交換氫離子的含量
                </p>
                <p className="text-[14px]">
                  使用專利的氫離子吸附膜，除了可以選擇性讓樣品中氫離子通過，避免樣品中其他雜質吸附電極表面造成的鈍化，簡化樣品處理步驟。更可以通過氫離子吸附膜的設計精確控制能斯特方程式中會影響Ek’數值的表面可交換氫離子含量。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section_four m-[20px] md:m-10 ">
          <div className="row grid  grid-cols-2 gap-3  mx-auto 2xl:w-[900px] xl:w-[600px] md:w-[500px] w-full md:grid-cols-4">
            <div className="flex p-2 md:p-0 flex-col justify-center items-center">
              <Image
                alt="免校正免收集拋棄式氣體pH酸鹼檢測電極/蜂鳥探針可應用於新鮮度，魚肉氨類或氮類物質酸鹼檢測/Humming Probe UH2-Gas/超極生技UltraE"
                src="UH2gas-07-新鮮度檢測1000x1000.webp"
                loading="lazy"
                loader={myLoader08}
                width={190}
                className="rounded-xl mx-3"
                height={190}
              ></Image>
              <span className="mt-2" alt="新鮮度檢測-UltraE">
                新鮮度檢測
              </span>
            </div>
            <div className="flex p-2 md:p-0 flex-col justify-center items-center">
              <Image
                src="UH2gas-08-廢氣排放檢測1000x1000.webp"
                loading="lazy"
                alt="免校正免收集拋棄式氣體pH酸鹼檢測電極/蜂鳥探針可應用廢氣(二氧化硫，二氧化氮）排放酸鹼檢測/Humming Probe UH2-Gas/超極生技UltraE     "
                loader={myLoader08}
                width={190}
                className="rounded-xl mx-3"
                height={190}
              ></Image>
              <span className="mt-2" alt="廢棄排放檢測-UltraE">
                廢棄排放檢測
              </span>
            </div>
            <div className="flex p-2 md:p-0 flex-col justify-center items-center">
              <Image
                src="UH2gas-09-發酵過程監測1000x1000.webp"
                loading="lazy"
                loader={myLoader08}
                width={190}
                className="rounded-xl mx-3"
                alt="免校正免收集拋棄式氣體pH酸鹼檢測電極/蜂鳥探針可應用發酵和熟成過程的酸鹼檢測/Humming Probe UH2-Gas/超極生技UltraE              "
                height={190}
              ></Image>
              <span className="mt-2">發酵過程監測</span>
            </div>
            <div className="flex p-2 md:p-0 flex-col justify-center items-center">
              <Image
                src="UH2gas-06-連續氣體檢測1000x1000.webp"
                loading="lazy"
                loader={myLoader08}
                width={190}
                className="rounded-xl mx-3"
                alt="免校正免收集拋棄式氣體pH酸鹼檢測電極/蜂鳥探針應用於連續排放氣體的檢測或監測/Humming Probe UH2-Gas/超極生技UltraE"
                height={190}
              ></Image>
              <span className="mt-2">連續氣體檢測</span>
            </div>
          </div>
          <div className="row flex flex-row justify-center items-center">
            <Image
              className="my-4"
              alt="UH2-GAS-試片電極測試數據"
              src="test-data.webp"
              width={850}
              height={500}
              loader={myLoader08}
              loading="lazy"
            ></Image>
          </div>
        </section>

        <section className=" seection_fit px-[20px] md:px-0">
          <h2 className="h2-u">蜂鳥探針pH檢測電極為什麽可以免校正？</h2>
          <div className="card-wrap flex flex-wrap justify-center items-center  px-0 xl:px-20">
            <div className="card bg-white mt-4 h-full md:m-4 py-4  overflow-hidden  w-full md:w-[42%]  border rounded-2xl">
              <div className="  overflow-scroll txt p-8 flex flex-col justify-start items-center">
                <div className="title">
                  <h3 className="text-[22px] text-center text-black">
                    專利氫離子吸附膜設計
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
                  text="我們使用專利的氫離子吸附膜，除了可以選擇性讓樣品中氫離子通過，避免樣品中其他雜質吸附電極表面造成的鈍化，簡化樣品處理步驟。更可以通過氫離子吸附膜的設計精確控制能斯特方程式中會影響Ek’數值的表面可交換氫離子含量。"
                />
              </div>
              <div className="img">
                <Image
                  loader={myLoader01}
                  width={500}
                  placeholder="empty"
                  loading="lazy"
                  alt="專利氫離子吸附膜設計_UH1 "
                  className="mx-auto rounded-xl"
                  height={300}
                  src="UH1-01-720x540.webp"
                ></Image>
              </div>
            </div>
            <div className="card bg-white h-full md:m-4  mt-4 overflow-hidden  w-full md:w-[42%]  border rounded-2xl py-5">
              <div className="txt p-8  overflow-scroll flex flex-col justify-start  items-center">
                <div className="title">
                  <h3 className="text-[22px] text-center text-black">
                    預先出廠前校正
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

"
                />
              </div>
              <div className="img">
                <Image
                  loader={myLoader01}
                  width={500}
                  placeholder="empty"
                  loading="lazy"
                  alt="自動化生產技術_UH1"
                  height={300}
                  className="mx-auto rounded-xl"
                  src="UH1-09-製程操控720x540.webp"
                ></Image>
              </div>
            </div>

            <div className="card bg-white h-full py-4 md:m-4 mt-4 overflow-hidden  w-full md:w-[42%]  border rounded-2xl">
              <div className="  overflow-scroll txt p-8 flex flex-col justify-start items-center">
                <div className="title">
                  <h3 className="text-[22px] text-center text-black">
                    每一片都設置獨立溫度感測元件
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

"
                />
              </div>
              <div className="img">
                <Image
                  loader={myLoader01}
                  width={500}
                  placeholder="empty"
                  loading="lazy"
                  alt="預先出廠前校正_UH1"
                  height={300}
                  className="mx-auto rounded-xl"
                  src="UH1-09-製料720x540.webp"
                ></Image>
              </div>
            </div>

            <div className="card bg-white md:m-4 h-full py-4 mt-4 w-full  overflow-hidden  md:w-[42%]  border rounded-2xl">
              <div className=" overflow-scroll txt p-8 flex flex-col justify-start items-center">
                <div className="title">
                  <h3 className="text-[22px] text-center text-black">
                    自動化生產技術
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
                  text="每一片試片嵌有獨立的小體積溫度感測元件，當樣品溫度在10-40度的範圍之內，即使在少量樣品量下，也具有自動溫度補償功能(ATC),解析度可達0.01 pH。"
                />
              </div>
              <div className="img">
                <Image
                  loader={myLoader01}
                  width={500}
                  placeholder="empty"
                  loading="lazy"
                  alt="每一片都設置獨立溫度感測元件_UH1"
                  className="mx-auto rounded-xl"
                  height={300}
                  src="UH1-07-感測元件720x540.webp"
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section className="section_special section">
          <div className="container lg:px-10 xl:px-20 mx-auto "></div>
        </section>
        <section className="section_special px-[20px] md:px-0">
          <h2 className="h2-u ">
            蜂鳥探針pH檢測電極
            <br />
            UH2-GAS除了免校正外還有什麼特別之處？
          </h2>
          <div className="card-wrap justify-center flex flex-wrap ">
            <div className="card h-full shadow-xl  md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
              <div className="txt">
                <b className="text-[18px] text-center font-black">拋棄式設計</b>
                <ReadMoreReact
                  text="每一次使用只需從密封罐內取出全新的試片，且在測試後無需費時清洗保養。對於粘稠或容易吸附的樣品或配合各種特殊處理，突破傳統pH玻璃電極種種限制，提供您更多的應用。
"
                  min={10}
                  ideal={25}
                  duration={500}
                  max={25}
                  readMoreText="...."
                />
              </div>
              <div className="img">
                <Image
                  loader={myLoader08}
                  width={400}
                  alt="不怕汙染"
                  className="rounded-2xl mt-3"
                  height={400}
                  src="UH1-18-不怕汙染720x540-2.webp"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </div>
            </div>
            <div className="card h-full shadow-xl md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
              <div className="txt ">
                <b className="text-[18px] text-center font-black">
                  纖細的檢測電極設計
                </b>
                <ReadMoreReact
                  text="纖細的電極設計，方便置入狹小管道，取樣口，或插入生物體內。
"
                  min={20}
                  ideal={35}
                  duration={500}
                  max={45}
                  readMoreText="...."
                />
              </div>
              <div className="img">
                <Image
                  width={400}
                  alt="纖細電極設計"
                  className="rounded-2xl mt-3"
                  height={400}
                  src="UH2gas-04-纖細電極設計720x540.webp"
                  placeholder="empty"
                  loading="lazy"
                  loader={myLoader08}
                ></Image>
              </div>
            </div>
            <div className="card  h-full shadow-xl md:m-3 overflow-hidden border rounded-2xl  w-full md:w-[340px] p-6">
              <div className="txt ">
                <b className="text-[18px] text-center font-black">
                  便於攜帶和保存
                </b>
                <ReadMoreReact
                  text="傳統的玻璃電極玻璃膜的厚度只有0.1-0.3mm，因此很容易破裂。蜂鳥探針的特殊設計，不含任何填充液體。體積小，利於攜帶，只要放置於試片罐中蓋緊即可，適合移動的戶外測試環境。
"
                  min={10}
                  ideal={25}
                  duration={500}
                  max={25}
                  readMoreText="...."
                />
              </div>
              <div className="img">
                <Image
                  loader={myLoader01}
                  width={400}
                  alt="便於攜帶"
                  className="rounded-2xl mt-3"
                  height={400}
                  src="便於攜帶和保存-720x540.webp"
                  placeholder="empty"
                  loading="lazy"
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <FindSPE />

        <section className="section">
          <div className="Container  md:px-20">
            <div className="grid grid-cols-1">
              <div className="rowflex items-center flex-col  justify-center">
                <motion.div
                  className="card"
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.3 }}
                >
                  <motion.h2
                    className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                    variants={title01}
                  >
                    <h2 className="h2-u">UH2-Gas 酸鹼試片電極</h2>
                  </motion.h2>

                  <motion.p className="text-m flex center " variants={title02}>
                    <a
                      href="https://www.ultraehp.com/images/DM/UH2-GAS單張DM-v1-OUT.jpeg"
                      download="https://www.ultraehp.com/images/DM/UH2-GAS單張DM-v1-OUT.jpeg"
                      className="rounded-full text-center w-[150px] font-black bg-orange-500 text-white py-2 px-4 mx-auto mb-[50px]"
                    >
                      DM 下載
                    </a>
                  </motion.p>
                </motion.div>

                <motion.p className="text-m " variants={title03}></motion.p>
              </div>
              <div className="row">
                <motion.div
                  className="card"
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.3 }}
                >
                  <motion.h2
                    className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                    variants={ImageAnimate}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-0 xl:p-10 items-end flex flex-col">
                        <Image
                          loader={myLoader08}
                          src="尺寸-UH2-GAS.webp"
                          loading="lazy"
                          placeholder="empty"
                          className="mr-[100px] w-full"
                          alt="UX100_酸鹼檢測器-尺寸圖"
                          width={600}
                          height={600}
                        ></Image>
                      </div>
                      <div>
                        <div className="flex w-full flex-col">
                          <Tabs aria-label="Options">
                            <Tab
                              key="UH2-GAS 酸鹼試片電極

"
                              title="UH2-GAS 酸鹼試片電極

"
                            >
                              <Card>
                                <CardBody>
                                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                      <tbody>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                          <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            量測範圍：
                                          </th>
                                          <td class="px-6 font-normal py-4">
                                            pH 0 - 14
                                          </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                          <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            誤差：{" "}
                                          </th>
                                          <td class="px-6 font-normal py-4">
                                            ± 0.1 pH
                                          </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                          <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            操作溫度：
                                          </th>
                                          <td class="px-6 font-normal py-4">
                                            10 - 40℃
                                          </td>
                                        </tr>
                                        <tr>
                                          <th
                                            scope="row"
                                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                          >
                                            尺寸（寬Ｘ長Ｘ厚）：
                                          </th>
                                          <td class="px-6 font-normal py-4">
                                            12.6 x 50.0 x 1.0 mm
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </CardBody>
                              </Card>
                            </Tab>
                          </Tabs>
                          <p className="text-[14px] text-left">
                            注意事項·:pH
                            試片電極應密封放置於試片罐中，使用時才取出以維持品質。每罐含25片酸鹼試片電極，每盒含2罐。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.h2>
                </motion.div>
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
        <section className="section_others hidden md:block section">
          <div className="Container px-0 xl:px-10 ">
            <div className="grid grid-cols-1">
              <div className="row  flex items-center flex-col  justify-center">
                <motion.div
                  className="card"
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.3 }}
                >
                  <motion.h2
                    className="text-center mb-4 text-[26px] font-extrabold  tracking-tight text-gray-900 md:text-[30px] lg:text-[32px] lg:leading-loose  dark:text-white"
                    variants={title01}
                  >
                    您可能也會喜歡
                    <h2 className="text-black"></h2>
                    <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">
                      Others Products
                    </p>
                  </motion.h2>

                  <motion.p className="text-m " variants={title02}></motion.p>
                </motion.div>

                <motion.p className="text-m " variants={title03}></motion.p>
              </div>
              <div className="row  sm:px-[30px] xl:px-[80px]">
                <motion.div
                  className="card"
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
