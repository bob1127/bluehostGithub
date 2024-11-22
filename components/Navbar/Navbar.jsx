"use client"
import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";
import Link from 'next/link'
// import { ThemeSwitcher } from "./ThemeSwitcher.tsx";
import { motion, AnimatePresence } from "framer-motion";
import ModalBtn02 from '../../components/ModalBtn-2.jsx'

import { useTheme } from 'next-themes';
// import Switcher from '../Switcher.js';
import Image from 'next/image';
import MobileMenu from '../MobileHeader/index.jsx';
// import modalBTN from '../../components//mobileMenu/index.jsx'
// import { ThemeSwitcher } from '@/app/ThemeSwitcher';
// import Switchers from '../Switcher.js/index.js'

// import MobileMenu from "../../components/Navbar/mobile-menu/MobileMenu.jsx";
const myLoader01 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}&q=${quality || 75}`
}
const myLoader02 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}&q=${quality || 75}`
}
const myLoader03 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
}
const myLoader04 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/mobile-nav/${src}?w=${width}&q=${quality || 75}`
}




export default function App() {


    const [open, setOpen] = useState(false);

    const isOpen = () => {
        setOpen(true);
    }

    const closeMenu = () => {
        setOpen(false);
    }
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;


    //lets start animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 1.2
            }
        }
    }


    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };

    return (
        <div className='fixed h-[40px] z-30 w-[100vw] '>
           <div className="navOutside flex flex-col max-w-[1920px] justify-center left-[50%] items-center mx-auto ">
                <div className="bg-[#01a5d3] block md:bg-[#01A5D3] md:hidden 	 py-4 w-full text-white text-center ">
                    我們讓試片長出了自己的電路系統
                </div>
                <div className="section_nav hidden  md:block  px-[0px] pt-2 bg-[#01A5D3] z-30  w-full"  maxWidth="full">
                    <div className="top  w-full flex">
                        <div className="left w-1/2 pl-[85px]">
                            <div className="link-wrap flex ">
                                <div className="link  pt-2 f link-Home w-[135px] ">
                                    <a href="https://www.ultraehp.com/" className="">
                                        <Image loader={myLoader01} alt='Home-logo' loading='lazy' placeholder='empty' src='Home-logo-white.png' width={250} height={300} />
                                    </a>
                                  
                                </div>
                                <div className="link pt-2 f link-Home w-[135px] ">
                                    <a href="https://www.ultraehp.com/ultrapeace/" className="">
                                        <Image 
                                        
                                            alt='ultraP-logo-white' placeholder='empty' loading='lazy' loader={myLoader02} src='ultraP-logo-white.png' width={250} height={300} />
                                    </a>
                                </div>
                                <div className="link pt-2 f  link-Home w-[135px] ">
                                    <a href="https://www.ultraehp.com/hummingprobe/index.html" className="">
                                        <Image alt='company-logo-white' loader={myLoader02} placeholder='empty' loading='lazy' src='company-logo-white.webp' width={250} height={300} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2 pr-[100px] pt-2">

                            <div className="icon-wrap flex justify-end w-full">
                                <div className="w-[1/3] flex">
                                    <div className="icon w-1/5 ">
                                        <a href="https://www.youtube.com/channel/UC-TjC_nXPCuCm19uXpPaylQ">

                                            <Image loader={myLoader03} src='youtube.png' alt='youtube-icon' loading='lazy' placeholder='empty' width={35} height={35} className="max-w-{35px}" />
                                        </a>

                                    </div>

                                    <div className="icon w-1/5 ">
                                        <a href="https://line.me/R/ti/p/%40qyk2932w">
                                            <Image loader={myLoader03} src='line.png' alt='line-icon' loading='lazy' placeholder='empty' width={35} height={35} />
                                        </a>
                                    </div>
                                    <div className="icon w-1/5 ">
                                        <a href="https://www.facebook.com/ULTRAE2020"> <Image src='facebook.png' loader={myLoader03} width={35} alt='facebook-icon' height={35} /></a>
                                    </div>

                                    <div className="icon hidden w-1/5">
                                        <Dropdown>
                                            <DropdownTrigger className="w-[35px] border-none p-0 m-0">
                                                <Button isIconOnly aria-label="Like" className="bg-transparent">

                                                    <Image loader={myLoader03} src='shopping-cart.png' loading='lazy' placeholder='empty' alt='shoppingCart-icon' width={35} height={35} />
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label="Static Actions">

                                                <DropdownItem key="new">
                                                    <a href="https://www.sciket.com/product/2640897">科研市集</a>
                                                </DropdownItem>
                                                <DropdownItem key="new">
                                                    <a href="https://www.taiwantrade.com/suppliers/detail.html?companyid=812129">台灣經貿網 </a>
                                                </DropdownItem>
                                                <DropdownItem key="new">
                                                    <a href="ContactUs.html">立即詢價 </a>
                                                </DropdownItem>
                                              
                                                
                                              
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <div className="icon w-1/5">
                                        <Dropdown>
                                            <DropdownTrigger className="w-[35px] border-none p-0 m-0">
                                                <Button isIconOnly aria-label="Like" className="bg-transparent">

                                                    <Image className='mb-3 ' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={30} height={30} />
                                                </Button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label="Static Actions">
                                                <DropdownItem key="new">
                                                    <a href="">English</a>
                                                </DropdownItem>
                                                <DropdownItem key="new">
                                                    <a href="">繁體中文</a>
                                                </DropdownItem>

                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    {/* <Switcher /> */}

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bottom flex flex-col">

                    </div>

                </div>
                <Navbar className=' z-20  px-[0px] md:px-[60px] w-full' maxWidth="full">


                    <NavbarBrand className=' w-1/2  ml-0'>
{/* 
                        <Image loader={myLoader01} src='ultraP-logo.webp' width={100} loading='lazy' placeholder='empty' alt='UltraP-logo' height={60}></Image> */}
                        {/* <AcmeLogo />
                <p className="font-bold text-inherit">ACME</p> */}


                    </NavbarBrand>

                    <NavbarContent className="hidden  md:flex  overflow-y-scroll   " justify="end">


                        <NavbarItem>
                            <a className='dark:text-white font-light duration-300 hover:font-bold' color="foreground" aria-label="Link to aboutUs page" href="https://www.ultraehp.com/">
                                首頁
                            </a>
                        </NavbarItem>
                        <NavbarItem >
                            <a href='https://www.ultraehp.com/aboutUs.html' color="foreground" className='ml-[15px] dark:text-white font-light duration-300 hover:font-bold' aria-label="Link to Articles page">
                                超極生技
                            </a>
                        </NavbarItem>

                        <Dropdown className='px-0  lg:h-auto overflow-y-scroll  w-[70vw] xs:w-[80vw] md:w-[80vw] bg-white md:right-[-300px] xl:w-[90vw] 2xl:w-[1600px] xl:left-[-1000px] 2xl:left-[-1400px] absolute dark:bg-grey-800  border  py-[25px]  border-gray-300 h-auto lg:max-w-[1600px]'>



                            <NavbarItem>
                                <DropdownTrigger className='relative p-0 m-0 w-[50px]'>
                                    <Button
                                        disableRipple
                                        className="w-[20px] p-0 m-0 bg-transparent data-[hover=true]:bg-transparent dark:text-white font-light duration-300 hover:font-bold text-[16px]"
                                        endContent={icons.chevron}
                                        radius="sm"
                                        variant="light"
                                    >
                                        產品
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu



                                aria-label="ACME features"
                                className=" h-[90vh]  overflow-y-scroll py-[50px] flex flex-col justify-center items-center gap-2  md:w-full xl:w-[90%] dropdown data-aos='zoom-y-out'"
                                itemClasses={{

                                    base: "gap-4",
                                }}
                            >



                                <DropdownItem className='dropdownn border py-[20px] px-[60px] bg-slate-50'>
                                    <div className="top ">

                                        <Image src='ultraP-logo.webp' loading='lazy' width={160} height={70} loader={myLoader01} alt='Logo'></Image>

                                    </div>
                                    <div className="grid  md:grid-cols-2 xl:grid-cols-3">
                                        <a href='https://www.ultraehp.com/ultrapeace/'>

                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader01} height={500} alt='UltraP' src='專業版產品圖-nav.webp' placeholder='empty'></Image>


                                                    <div className="txt pl-4">
                                                        <b className='mt-4 text-[13px]'>UBT- Professional </b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・幽門螺旋桿菌快速測試
                                                            </li>
                                                            <li className='text-[12px]'>・適用於醫療機構</li>
                                                            <li className='text-[12px]'>・自動獲取結果
                                                            </li>

                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                        <a href='https://www.ultraehp.com/ultrapeace/'>

                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader01} height={500} alt='專業版胃幽門螺旋桿菌尿素呼吸檢測系統全部部件展示/極安簡測-UltraPeace/ 超極生技 UltraE' src='家用版產品圖-nav.webp' placeholder='empty'></Image>


                                                    <div className="txt pl-4">
                                                        <b className='mt-4 text-[13px]'>UBT- Home </b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・幽門螺旋桿菌快速測試
                                                            </li>
                                                            <li className='text-[12px]'>・適用於個人居家測試</li>
                                                            <li className='text-[12px]'>・專利整合試片無需meter
                                                            </li>

                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                       

                                    </div>

                                </DropdownItem>


                                <DropdownItem className='dropdownn border  py-[20px] px-[60px] bg-slate-50'>
                                    <div className="top ">

                                        <Image src='company-logo.webp' loading='lazy' width={220} height={105} loader={myLoader02} alt='Logo' ></Image>

                                    </div>
                                    <div className="grid  md:grid-cols-2 xl:grid-cols-3">
                                        <a href='https://www.ultraehp.com/hummingprobe/UX100.html'>
                                        
                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader03} height={500} alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX100/超極生技UltraE' src='UX100.webp' placeholder='empty'></Image>


                                                    <div className="txt pl-4">
                                                        <b className='mt-4 text-[13px]'>UX100 </b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・4.3”彩色觸控屏幕
                                                            </li>
                                                            <li className='text-[12px]'>・防水防塵</li>
                                                            <li className='text-[12px]'>・雙模式檢測片連結器
                                                            </li>
                                                         
                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                        <a href='https://www.ultraehp.com/hummingprobe/UX200.html'>
                                            <div className="top">

                                            </div>
                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader03} height={500} alt='UX200' src='UX200.webp' placeholder='empty'></Image>


                                                    <div className="txt pl-4">
                                                        <b className='mt-4 text-[13px]'>UX200</b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・pH chart 曲線圖
                                                            </li>
                                                            <li className='text-[12px]'>・7”彩色觸控屏幕</li>
                                                            <li className='text-[12px]'>・防水防塵
                                                            </li>
                                                            <li className='text-[12px]'>・雙模式檢測片連接器
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                        <a href='https://www.ultraehp.com/hummingprobe/CS200.html'>
                                            <div className="top">

                                            </div>
                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader03} height={500} alt='恆速磁石變頻攪拌器/Humming Probe 特制版CS200外觀/超極生技UltraE' src='CS200.webp' placeholder='empty'></Image>


                                                    <div className="txt ">
                                                        <b className='mt-4 text-[13px]'>CS200｜磁石變頻攪拌器</b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・恆溫控制 (20 ~ 40°C)
                                                            </li>
                                                            <li className='text-[12px]'>・變頻恆速</li>
                                                            <li className='text-[12px]'>・磁石正反轉設計
                                                            </li>
                                                          
                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                        <a href='https://www.ultraehp.com/hummingprobe/UH1.html'>

                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader03} height={500} alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的微量液體樣品pH測試示意圖/Humming Probe UH1' src='UH1.webp' placeholder='empty'></Image>


                                                    <div className="txt pl-4">
                                                        <b className='mt-4 text-[13px]'>UH1｜酸鹼試片電極 </b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・即開即用免校正
                                                            </li>
                                                            <li className='text-[12px]'>・樣品使用量最少(10~20μL)</li>
                                                            <li className='text-[12px]'>・拋棄式無交叉汙染
                                                            </li>

                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                        <a href='https://www.ultraehp.com/hummingprobe/UH2.html'>
                                            <div className="top">

                                            </div>
                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader03} height={500} alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH2/超極生技UltraE' src='UH2.webp' placeholder='empty'></Image>


                                                    <div className="txt pl-4">
                                                        <b className='mt-4 text-[13px]'>UH2｜超微量酸鹼試片電極</b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                                ・即開即用免校正
                                                            </li>
                                                            <li className='text-[12px]'>・樣品使用量最少(1~2μL)</li>
                                                            <li className='text-[12px]'>・拋棄式無交叉汙染
                                                            </li>
                                                          
                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>
                                        <a href='https://www.ultraehp.com/hummingprobe/UH2-GAS.html'>
                                            <div className="top">

                                            </div>
                                            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 p-4">
                                                <di className='product-item flex'>

                                                    <Image loading='lazy' width={500} loader={myLoader03} height={500} alt='UH2-Gas' src='UH2-Gas.webp' placeholder='empty'></Image>


                                                    <div className="txt ">
                                                        <b className='mt-4 text-[13px]'>UH2-Gas｜氣體酸鹼試片電極</b>

                                                        <ul>
                                                            <li className='text-[12px]'>

                                                               ・即開即用免校正
                                                            </li>
                                                            <li className='text-[12px]'>・適用於氣體樣品</li>
                                                            <li className='text-[12px]'>・拋棄式無交叉汙染
                                                            </li>

                                                        </ul>
                                                    </div>

                                                </di>
                                            </div>
                                        </a>

                                    </div>

                                </DropdownItem>











                            </DropdownMenu>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque saepe officia voluptates vel sit corporis. Pariatur, placeat maxime deleniti eligendi officiis eaque reprehenderit aut eveniet, perspiciatis error architecto autem?</p>







                        </Dropdown>

                        <NavbarItem>
                            <a className='dark:text-white mr-[15px] font-light duration-300 hover:font-bold' color="foreground" href="https://www.ultraehp.com/Download.html" aria-label="Link to aboutUs page">
                                服務
                            </a>
                        </NavbarItem>
                        <NavbarItem>
                            <a color="foreground" className='dark:text-white mr-[15px] font-light duration-300 hover:font-bold' href="https://www.ultraehp.com/ArticleList.html" aria-label="Link to Articles page">
                                Blog
                            </a>
                        </NavbarItem>
                        <NavbarItem>
                            <a color="foreground" aria-label="Link to aboutUs page" className='dark:text-white font-light duration-300 hover:font-bold' href="https://www.ultraehp.com/ContactUs.html">
                                聯絡我們
                            </a>
                      
                        </NavbarItem>

                    </NavbarContent>




                    <MobileMenu />


                </Navbar>

                <div className='mobile-bottom-nav z-10 w-[100vw] fixed bottom-0 left-0  block md:hidden  bg-[#01a5d3]'>
                    <div className="wrap">
                        <div className="grid grid-cols-4">
                            <div className='flex p-4 justify-center items-center'>
                                <a href='mailto:mailto:UltraE@ultrae.com.tw'>
                                    <Image alt='email-icon' src='email.webp' placeholder='empty' loading='lazy' loader={myLoader04} width={48} height={48}></Image>
                                </a>
                            </div>
                            <div className='flex p-4 justify-center items-center'>
                                <a href='https://www.facebook.com/ULTRAE2020'>
                                    <Image alt='facebook-icon' src='facebook-app-symbol.webp' placeholder='empty' loading='lazy' loader={myLoader04} width={48} height={48}></Image>
                                </a>
                            </div>
                            <div className='flex p-4 justify-center items-center'>
                                <a href='https://line.me/R/ti/p/%40qyk2932w'>
                                    <Image alt='line-icon' src='line.webp' placeholder='empty' loading='lazy' loader={myLoader04} width={48} height={48}></Image>
                                </a>
                            </div>
                            <div className='flex p-4 justify-center items-center'>
                                <a href='ContactUs.html'>
                                    <Image alt='shoppingCart-icon' src='shopping-cart.webp' placeholder='empty' loading='lazy' loader={myLoader04} width={48} height={48}></Image>
                                </a>
                            </div>
                        

                        </div>
                    </div>
                </div>
           </div>
            
        </div>
    );
}
