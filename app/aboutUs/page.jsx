
"use client"

import Tooltip from "../../components/Tooltip"
import './ultrae.scss'


import TimeLine from '../../components/TimeLine/timeLine.jsx'


import Marquee from 'react-fast-marquee'


import Image from 'next/image'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

// import Img01 from '../../public/images/wix.jpg'
// import Img02 from '../../public/images/up100-banner01.png'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { properties } from "../../constants/data";
import TabWrap from '../../components/Tabs/Tabs'
import scan from '../../public/images/scan.png'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from 'next/link'
import CardPage from '../../components/CardParallax/CardPage'
import Carousel from '../../components/Carousel/index.tsx'

import ModalBtn from '../../components/ModalBtn-2'

import '../../styles/additional-styles/tab.css'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader03 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
}

const myLoader05 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/about/${src}?w=${width}&q=${quality || 75}`
}


export default async function Home() {

    return (


        <div className="dark:bg-black  bg-white mx-auto ">

            {/* 結構化資料  */}
            <title>關於我們｜超極生技-UltraE
            </title>

            <meta name="keywords" content="蜂鳥探針｜pH感測器、pH測量儀、pH meter、酸鹼度計、pH檢測器、pH值檢測計、可攜式 pH計、桌上型pH計、pH測量儀 、pH電極、酸鹼度計、酸鹼測試、pH測試" />
            <meta key="description" name="description" content="超極生技UltraE以專利技術開發的的免校正蜂鳥探針pH meter 酸鹼度計。具有拋棄式的電極設計，微升級的樣品需求量，以IS9001的高規格生產提供您高精準度的測試結果適合珍貴及特殊樣品，可以突破傳統pH測量儀的眾多限制。更可客製化訂製此微型pH檢測感測元件，將其嵌入新的產品(OEM/ODM)| 關於我們 aboutus" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="https://www.ultraehp.com/ultra-logo.ico" type="image/ico"></link>


            <link rel="alternate" href="https://www.ultraehp.com/aboutUs.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/aboutUs.html" hreflang="en" />

            <meta property="og:url" content="https://www.ultraehp.com/en/aboutUs.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
超極生技以專利技術開發的 
免校正拋棄式 pH meter 酸鹼度計
" />
            <meta property="og:description" content="全球首創免校正酸鹼量測的方法，創新技術將電極量測原理整合在單一試片上。
" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-09-製程操控720x540.webp" />


            <section className="relative w-full flex justify-center ">

                <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://www.ultraehp.com/hummingprobe/en/aboutUs.html">
                        <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>en</div>
                    </a>
                </div>


                {/* <TimeLine /> */}
                <section className=" w-full xl:w-[90%]   px-0 md:px-[20px] md:px-0  pt-[150px] md:pt-[100px]">

                    <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>



                    <div className="row">
                        <div className="cintaiber flex px-[20px] flex-col justify-center items-center md:flex-row ">
                            <div className="txt mx-auto xl:w-3/4 mx-auto  rounded-2xl border-gray-800 border-3   px-0 md:px-10 py-10  mt-3 xl:mt-20">

                                <h2 className=" mx-auto w-full  md:w-1/2 text-center text-black dark:text-rose-500  font-bold ">

                                    ABOUT US



                                </h2>

                                <div className="content w-[80%] mx-auto">
                                    <p className="text-gray-800 text-[15px]">超極生技成立于2016年，團隊基於在生物感測器領域的30年開發及量產經驗。以專利技術Potentiostrip®為平台，專注於水質檢測和體外診斷醫療器材(IVD)產品的研發及製造。于2019年推出第一個品牌蜂鳥探針(Humming Probe)-免校正微量拋棄式酸鹼pH檢測系統，解決pH計校正繁瑣和微量測量不便等問題。並於2021年再次推出第二個產品線極安簡測(UltraPeace)-胃幽門桿菌尿素呼氣檢測系統，可在30分鐘內以非侵入式方式快速準確檢測胃幽門螺旋桿菌，有助於醫療人員迅速診斷並制定治療方案。</p><br />

                                    <p className="text-gray-800 text-[15px]">「超極⽣技」秉持著”超越感測界線，極致健康生活”的創業初衷做為公司之理念價值與發展圭臬，期望能發展對全⼈類健康有所助益之永續事業。</p><br />



                                </div>




                                <p className="text-m mx-auto text-center  w-full  md:w-3/4 lg:w-2/4 dark:text-slate-200">

                                </p>

                                <div className="img-wrap mt-[50px] mb-[30px] px-[30px] md:px-0 flex flex-row justify-center items-center ">
                                    <div className="mx-2">
                                        <Image loader={myLoader05} src='下載.png' loading='lazy' width={235} height={235} />
                                    </div>
                                    <div className="mx-2">
                                        <Image loader={myLoader05} src='9001.png' loading='lazy' width={260} height={260} />
                                    </div>
                                </div>

                                <div className="flex w-[240px] z-50 mx-auto justify-center">
                                    <ModalBtn /> </div>


                            </div>


                        </div>
                    </div>


                    <div className=" md:py-[50px] mt-[80px] py-[20px] flex justify-center items-center rounded-2xl  mx-auto  flex-col   w-[95%] ">
                        <h2 className="text-center mx-auto">公司里程碑：</h2>

                        {/* <div className="row">
                            <h2 className="absolute  left-[22%] top-[140px]">公司里程碑</h2>
                        </div> */}

                        <div className="row mx-auto w-[90%]  pb-[90px] flex flex-col ">

                            <div className="items flex flex-col  ">

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex flex-col  md:flex-row justify-start items-center ">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2024：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 獲得ISO13485國際醫療器材品質系統認證 

                                        </div>
                                        <div className="border-b border-black py-2 w-full ">
                                            - 取得四項專利，並獲得第一項美國專利
                                        </div>

                                    </div>

                                </div>

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2023：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 推出極安簡測UltraPeace-胃幽門螺旋桿菌呼氣檢測系統 

                                        </div>


                                    </div>

                                </div>
                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2022：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 取得四項專利

                                        </div>


                                    </div>

                                </div>
                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2021：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 獲得ISO 9001：2015品質管理系統認證



                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- 取得四項專利

                                        </div>


                                    </div>

                                </div>
                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2020：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 擴展國際業務到日本、大陸、泰國、印度等國家

                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- 取得3項專利

                                        </div>


                                    </div>

                                </div>

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2018<br/>~2019


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 推出蜂鳥探針Humming Probe酸鹼檢測系統，並於台灣市場銷售  
                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- 取得8項專利

                                        </div>


                                    </div>

                                </div>

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2017：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 工廠設立並導入自動化產線


                                        </div>



                                    </div>

                                </div>



                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2016：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- 通過科技部研發成果萌芽計畫，超極生技創立


                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- 獲得第一項國內專利


                                        </div>



                                    </div>


                                </div>












                            </div>
                        </div>
                    </div>
                </section>

            </section>




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
                                <a className="block w-full" href="https://www.ultraehp.com/en/aboutUs.html ">   English</a>
                        
                        </DropdownItem>
                        
                        <DropdownItem key="new">
                            <a className="block w-full"  href="https://www.ultraehp.com/aboutUs.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
          
         


            <h2 className="text-[32px] mt-[50px] mb-[10px] font-bold">
                參展資訊 - 新聞
            </h2>


            <div className="pb-[80px]">

            
                <Marquee>

                  
                       
                    <div className=" w-[600px] mx-5 flex justify-center">

                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        2022亞洲生技大展



                                    </h2>
                                    <b>超極生技於2022年07月28日至31日參與2022亞洲生技大展，推廣全球首創、免校正酸鹼檢測系統。






                                    </b>
                                    <p className="text-[14px] font-normal">展覽日期：2022/07/28(四) - 07/31(日)




                                    </p>
                                    <p className="text-[14px] font-normal">展覽時間:每日上午10時00分至下午6時00分,最後一日至下午5時






                                    </p>
                                    <p className="text-[14px] font-normal">展覽地點:台北南港展覽館2館4樓







                                    </p>

                                    <b>攤位號碼:S1333a




                                    </b>
                                </div>
                                <div className="img w-[90%]">
                                    <Image width={800} loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='pic-2021-04-20.jpg'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                  


                    <div className=" w-[600px] mx-5 flex justify-center">
                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        2021化學年會


                                    </h2>
                                    <b>超極生技於2021年03月13日至14日參與2021化學年會，推廣全球首創、免校正酸鹼檢測系統。



                                    </b>
                                    <p className="text-[14px] font-normal">展覽日期：2021/03/13(六) - 03/14(日)




                                    </p>
                                  
                                    <p className="text-[14px] font-normal">展覽地點:國立中央大學





                                    </p>

                                    <b>攤位號碼:A07



                                    </b>
                                </div>
                                <div className="img w-[90%]">
                                    <Image width={800} loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='pic-2021-03-13.jpg'></Image>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">
                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        2022亞洲生技大展



                                    </h2>
                                    <b>超極生技於2022年07月28日至31日參與2022亞洲生技大展，推廣全球首創、免校正酸鹼檢測系統。




                                    </b>
                                    <p className="text-[14px] font-normal">展覽日期：2022/07/28(四) - 07/31(日)


                                    </p>
                                    <p className="text-[14px] font-normal">展覽時間:每日上午10時00分至下午6時00分,最後一日至下午5時


                                    </p>
                                    <p className="text-[14px] font-normal">展覽地點:台北南港展覽館2館4樓




                                    </p>

                                    <b>攤位號碼:S1333a


                                    </b>
                                </div>
                                <div className="img w-[90%]">
                                    <Image width={800} loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='2022台北生技展bn2328x1162-英文版.webp'></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">

                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">

                            <div className="txt flex justify-center items-center flex-col">

                                <div className="txt h-1/2 w-1/2">
                                    <h2 className="text-[22px] font-bold">
                                        第十五屆台北國際儀器展

                                    </h2>
                                    <b>主辦單位：台北市儀器商業同業公會</b>
                                    <p className="text-[14px] font-normal">展覽日期：111.10.28(五)~10.31(一)
                                    </p>
                                    <p className="text-[14px] font-normal">展覽地點:台北市世貿中心展覽館一館B區

                                    </p>
                                </div>
                                <div className="img w-[90%]">
                                    <Image width={800} loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='2022台北儀器展bn2328x1162-中英文版-2.jpg'></Image>
                                </div>




                            </div>

                        </div>
                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic-2020-12-03.jpg' loader={myLoader05} loading='lazy' width={600} height={400} className="rounded-2xl"></Image>



                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic-2020-new-1.jpg' loader={myLoader05} loading='lazy' width={600} height={400} className="rounded-2xl"></Image>



                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic-2020-new-2.jpg' loader={myLoader05} loading='lazy' width={600} height={400} className="rounded-2xl"></Image>



                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic20200110.jpg' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic20190711.jpg' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic02.jpg' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic01.jpg' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>
                </Marquee>
                
            </div>







        </div>
    )
}
