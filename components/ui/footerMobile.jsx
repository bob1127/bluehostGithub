import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}
export default function App() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <div className="pb-[10px] pt-[50px] px-[30px] bg-gray-600 block md:hidden">
            <Accordion >

                <AccordionItem
                    key="2"

                    className="border-none"

                    subtitle={
                        <span className="p-0 m-0 text-white  h-[20px] text-[20px]">
                            PRODUCTS
                        </span>
                    }

                >
                    <ul>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/ultrapeace/" className="text-[16px]  text-gray-300">UBT丨極安簡測-胃幽門桿菌尿素呼氣檢測系統
</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/hummingprobe/UH1.html" className="text-[16px]  text-gray-300">UH-1丨酸鹼試片電極</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/hummingprobe/UH2.html" className="text-[16px]  text-gray-300">UH-2丨超微量酸鹼試片電極</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" className="text-[16px]  text-gray-300">UH2-Gas丨氣體酸鹼試片電極</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/hummingprobe/UX100.html" className="text-[16px]  text-gray-300">UX100丨酸鹼檢測儀</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/hummingprobe/UX200.html" className="text-[16px]  text-gray-300">UX200丨酸鹼趨勢檢測儀</a>
                        </li>
                        <li className="mt-2">
                            <a href="https://www.ultraehp.com/hummingprobe/CS200.html" className="text-[16px]  text-gray-300">CS200丨磁石變頻攪拌器</a>
                        </li>
                    </ul>
                </AccordionItem>
                <AccordionItem
                    className="border-none"
                    key="1"

                    subtitle={
                        <span className="text-white text-[20px]">
                            SERVICE
                        </span>
                    }

                >
                    {/* <a href="UH2-GAS.html" className="mt-[20px]">
                        <Image width={400} className="mt-4" height={300} loader={myLoader} src='UX100-03.webp' />
                    </a> */}
                    <a href="https://www.ultraehp.com/aboutUs.html" className="mt-[20px]">
                        <Image width={400} className="mt-4" height={300} loader={myLoader} src='UX100-02.webp' />
                    </a>
                    <a href="https://www.ultraehp.com/Download.html" className="mt-[20px]">
                        <Image width={400} className="mt-4" height={300} loader={myLoader} src='UX100-05.webp' />
                    </a>
                </AccordionItem>

            </Accordion>
            <p className='text-white mt-4 font-bold text-[18px]'>Subscribe us</p>
            <iframe title='contact-form' loading='lazy' src='https://www.ultraehp.com/customized-iframe-footer.html' height={300} className='w-full'></iframe>
        </div>
    );
}
