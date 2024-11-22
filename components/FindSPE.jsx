import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";

const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

export default function Header() {
    return (
       <div>
            <section className=" section_find px-3 xl:px-20 flex  flex-col justify-center items-center">
                <div className="text-center ">
                    <h2 className="h2-u">找到你的蜂鳥探針</h2>
                </div>
                <div className="w-full  flex flex-wrap  justify-center items-center align-middle">
                    <div className="item border-2  py-5 md:py-0 border-gray-300  rounded-xl md:border-none md:rounded-none flex flex-col mt-[30px ] xl:mt-8 align-middle items-center justify-center w-[400px]">
                        <p className='text-[20px] mb-3'>Most Popular

</p>
                        <div className="line mb-3  mx-auto w-[200px] border-t-1 border-black">

                        </div>
                        <Image loader={myLoader05} src='UH-1.webp' placeholder="empty"
                            loading="lazy" width={70} alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH1/超極生技UltraE' height={150}></Image>
                        <div className="txt flex flex-col justify-center items-center">
                            <b className="font-bold text-[20px]">Classic
                            </b>
                            <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b>
                        </div>
                        <ul className="mt-4">
                            <li className="mt-2">
                                適用於液體樣品
                            </li>
                            <li className="mt-2">
                                樣品使用量：10~20μL
                            </li>
                            <li className="mt-2">
                                適用單點&連續測試
                            </li>
                        </ul>
                        <Button radius="full" href='#' className="bg-gray-800 mt-3  text-white shadow-lg">
                            <a href="https://www.ultraehp.com/hummingprobe/UH1.html" className='font-black'>More</a>

                        </Button>
                    </div>
                    <div className="item border-2  py-5 md:py-0 border-gray-300  rounded-xl md:border-none md:rounded-none flex flex-col mt-[30px] xl:mt-8 align-middle items-center justify-center w-[400px]">
                        <p className='text-[20px] opacity-0 mb-3'>New</p>
                        <div className="line mb-3  mx-auto w-[200px] ">

                        </div>
                        <Image loader={myLoader05} src='UH2.webp' alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的超微量樣品液體pH測試示意圖/Humming Probe UH2' placeholder="empty"
                            loading="lazy" width={70} height={150}></Image>
                        <div className="txt flex flex-col justify-center items-center">
                            <b className="font-bold text-[20px]">Micro-sample

                            </b>
                            <p>適用於珍貴微量樣品

                            </p>
                            <b className="text-rose-700 text-normal">UH2 pH STRIP
                            </b>
                        </div>
                        <ul className="mt-4">
                            <li className="mt-2">
                                適用於液體樣品


                            </li>
                            <li className="mt-2">
                                樣品使用量：1~2μL
                            </li>
                            <li className="mt-2">
                                適用單點&連續測試
                            </li>
                        </ul>
                        <Button radius="full" href='#' className="bg-gray-800 mt-3  text-white shadow-lg">
                            <a href="https://www.ultraehp.com/hummingprobe/UH2.html" className='font-black'>More</a>

                        </Button>
                    </div>
                    <div className="item border-2  py-5 md:py-0 border-gray-300  rounded-xl md:border-none md:rounded-none flex flex-col mt-[30px] xl:mt-8 align-middle items-center justify-center w-[400px]">
                        <p className='text-[20px] mb-3'>New</p>
                        <div className="line mb-3  mx-auto w-[200px] border-t-1 border-black">
                            
                        </div>
                        <Image loader={myLoader05} src='UH2-Gas.webp' placeholder="empty"
                            loading="lazy" alt='免校正免收集拋棄式氣體pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH2-Gas/超極生技UltraE' width={70} height={150}></Image>
                        <div className="txt flex flex-col justify-center  items-center">
                            <h4 className="font-bold text-[20px]">Gas

                            </h4>
                            <p>適用於氣體</p>
                            <b className="text-rose-700 text-normal">UH2-Gas pH STRIP
                            </b>
                        </div>
                        <ul className="">
                            <li className="mt-2 text-[14px]">
                                適用於氣體樣品
                            </li>
                            <li className="mt-2 text-[14px]">
                                檢測下限低
                            </li>
                            <li className="mt-2 text-[14px]">
                                適用單點&連續測試
                            </li>
                        </ul>
                        <Button radius="full" href='#' className="bg-gray-800 mt-3  text-white shadow-lg">
                            <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" className='font-black'>More</a>

                        </Button>
                    </div>
                </div>

            </section>
            <section className="section_find px-[20px] xl:px-20  flex  flex-col justify-center items-center">
                <div className="text-center ">
                    <h2 className="h2-u">找到你的儀表及配件</h2>
                </div>
                <div className="w-full  flex flex-wrap justify-center items-center align-middle">
                    <div className="item border-2  py-5 md:py-0 border-gray-300  rounded-xl md:border-none md:rounded-none flex flex-col mt-5 align-middle items-center justify-center w-[400px]">

                        <div >
                            <h4 className="font-bold text-[20px]">UX100免校正酸鹼檢測儀
                            </h4>
                            {/* <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b> */}
                        </div>
                        <ul className="mt-4">
                            <li className="mt-2 text-[14px]">
                                4.3”彩色觸控屏幕

                            </li>
                            <li className="mt-2 text-[14px]">
                                演算法自動終點判斷

                            </li>
                            <li className="mt-2 text-[14px]">
                                500萬畫素鏡頭可編輯資料
                            </li>
                        </ul>
                        <Button radius="full" href='#' className="bg-gray-800 mt-3  text-white shadow-lg">
                            <a href="https://www.ultraehp.com/hummingprobe/UX100.html" className='font-black'>More</a>

                        </Button>
                        <Image loader={myLoader01} src='UX100.webp' placeholder="empty" width={470}
                            alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX100/超極生技UltraE'  loading="lazy" height={470}></Image>

                    </div>
                    <div className="item border-2  py-5 md:py-0 border-gray-300  rounded-xl md:border-none md:rounded-none flex flex-col mt-5 align-middle items-center justify-center w-[400px]">

                        <div >
                            <h4 className="font-bold text-[20px]">UX200免校正酸鹼檢測儀
                            </h4>
                            {/* <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b> */}
                        </div>
                        <ul className="">
                            <li className="mt-2 text-[14px]">
                                pH chart 曲線圖

                            </li>
                            <li className="mt-2 text-[14px]">
                                7.0”彩色觸控屏幕

                            </li>
                            <li className="mt-2 text-[14px]">
                                演算法自動終點判斷
                            </li>
                        </ul>
                        <Button radius="full" href='#' className="bg-gray-800 mt-3  text-white shadow-lg">
                            <a href="https://www.ultraehp.com/hummingprobe/UX200.html" className='font-black'>More</a>

                        </Button>
                        <Image loader={myLoader01} loading="lazy" placeholder="empty" src='UX200.webp' width={470} alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX200/超極生技UltraE'  height={470}></Image>

                    </div>
                    <div className="item border-2  py-5 md:py-0 border-gray-300  rounded-xl md:border-none md:rounded-none flex flex-col mt-5 align-middle items-center justify-center w-[400px]">

                        <div >
                            <h4 className="font-bold text-[20px]">CS200 磁石變頻攪拌器
                            </h4>
                            {/* <p>適用於大部分的檢測需求</p>
                            <b className="text-rose-700 text-normal">UH1 pH STRIP
                            </b> */}
                        </div>
                        <ul >
                            <li className="mt-2 text-[14px]">
                                可感測粘度自動調整的恆速磁力攪拌器

                            </li>
                            <li className="mt-2 text-[14px]">
                                恆溫定時加熱系統(20 ~ 40°C)
                            </li>
                            <li className="mt-2 text-[14px]">
                                轉速數位控制/顯示(400 ~ 1500rpm)
                            </li>
                        </ul>
                        <Button radius="full" href='#' className="bg-gray-800 mt-3  text-white shadow-lg">
                            <a href="https://www.ultraehp.com/hummingprobe/CS200.html" className='font-black'>More</a>

                        </Button>
                        <Image loader={myLoader01} loading="lazy" placeholder="empty" src='CS200.webp' width={470} alt='恆速磁石變頻攪拌器/Humming Probe 特制版CS200外觀/超極生技UltraE' height={470}></Image>

                    </div>
                </div>

            </section>
       </div>
    );
}
