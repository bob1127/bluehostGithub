import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { MonitorMobileIcon } from "./MonitorMobileIcon";
import { ShieldSecurityIcon } from "./ShieldSecurityIcon";
import { InfoIcon } from "./InfoIcon";
import { InvalidCardIcon } from "./InvalidCardIcon";
import Image from "next/image";

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
export default function App() {
    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
    };

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


    return (
        <div>
            <div>
                <Accordion
                    showDivider={false}
                    className=" h-full  px-2 pt-[70px] flex flex-col gap-1 w-full  mt-[-40px] border  z-50 fixed"
                    variant="shadow"
                    itemClasses={itemClasses}
                >
                    <AccordionItem
                        key="1"
                        aria-label="產品列表"
                        title={<strong>產品列表</strong>}

                        
                    >

                        <Image quality={100} loading="lazy" placeholder="empty" loader={myLoader} alt="running people" src='ultraP-logo-banner01.webp' width={100} height={50} className="" />

                        <ul className="link-item mt-4">
                            <li className="my-4">
                                <a href="https://www.ultraehp.com/ultrapeace/" className="text-black text-normal dark:text-white">UBTiw-Pro|快速胃幽門螺旋桿菌檢測組(專業版)</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/ultrapeace/" className="text-black text-normal dark:text-white">UBTiw-Home|快速胃幽門螺旋桿菌檢測組(家用版)</a>
                            </li>


                        </ul>


                        <Image loading="lazy" placeholder="empty" loader={myLoader} alt="running people" src='company-logo-mobile01.webp' width={130} height={67} className="" />

                        <ul className="link-item mt-4">
                            <li className="my-4">
                                <a href="https://www.ultraehp.com/hummingprobe/UX100.html" className="text-black text-normal dark:text-white">UX100丨酸鹼檢測儀</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/hummingprobe/UX200.html" className="text-black text-normal dark:text-white">UX200丨酸鹼趨勢檢測儀</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/hummingprobe/CS200.html" className="text-black text-normal dark:text-white">CS200丨磁石變頻攪拌器</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/hummingprobe/UH1.html" className="text-black text-normal dark:text-white">UH1｜酸鹼試片電極</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/hummingprobe/UH2.html" className="text-black text-normal dark:text-white">UH2｜超微量酸鹼試片電極</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" className="text-black text-normal dark:text-white">UH2-Gas丨氣體酸鹼試片電極</a>
                            </li>


                        </ul>













                    </AccordionItem>
                    <AccordionItem
                        key="2"
                        aria-label="服務項目"

                        title={<strong>服務項目</strong>}
                    >
                        <ul className="link-item mt-4">
                            <li className="my-4">
                                <a href="https://www.ultraehp.com/Policy.html" className="text-black text-normal dark:text-white ">隱私權政策</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/ArticleList.html" className="text-black text-normal dark:text-white">Blog</a>
                            </li>
                            <li className="my-4">

                                <a href="https://www.ultraehp.com/Download.html" className="text-black text-normal dark:text-white">下載項目</a>
                            </li>



                        </ul>


                    </AccordionItem>
                    <AccordionItem
                        key="3"

                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://ultraehp.com/aboutUs.html';
                        }}


                        title={<strong>關於我們</strong>}
                    >

                    </AccordionItem>
                    <AccordionItem

                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://ultraehp.com/ContactUs.html';
                        }}

                        title={<strong>聯絡我們</strong>}
                    >

                    </AccordionItem>
                     {/* <AccordionItem>
                        <a href="" className="text-[20px]">English</a>
                    </AccordionItem> */}


                </Accordion>

            </div>
            <div>
         
            
            </div>
            
        </div>
    );
}
