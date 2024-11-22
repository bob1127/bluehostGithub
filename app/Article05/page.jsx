
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Script from 'next/script'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import Sticky from 'react-sticky-el';
import ArticleBottomSection from '../../components/ArticleBottomSection.jsx'
// import SomeChild from '../../components/'


const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/能斯特方程式截圖/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/blog/${src}?w=${width}?p=${placeholder}`
}
const myLoader033 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/${src}?w=${width}?p=${placeholder}`
}

const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
}
const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}

const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}







export default function Home() {


    return (
        <div className=' border-green-500 px- md:px-[20px] lg:px-[50px] 2xl:px-[100px]'>





            {/* metadata */}
            <title>水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制-|超極生技-UltraE
            </title>
            <link rel="alternate" href="https://ultraehp.com/ArticleList.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://ultraehp.com/en/ArticleList.html" hreflang="en" />

            <meta key="description" name="description" content="什麼是凡立水？
凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類、配方，有分為水性型、無溶劑型以及溶劑型。按使用範圍及形態分為：浸漬漆、覆蓋漆、矽鋼片漆、防電暈漆等四種需根據使用的特性需求、工藝方式、環境保護、法規安規認證等來選擇適合使用的凡立水。凡立水廣泛使用在所有類型的電氣設備中，如馬達、變壓器、線圈含浸等等，提供絕緣、防潮、防腐蝕、固定，甚至是散熱的功能。" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://ultraehp.com/Article05.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制｜文章|超極生技UltraE
" />
            <meta property="og:description" content="什麼是凡立水？
凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類、配方，有分為水性型、無溶劑型以及溶劑型。按使用範圍及形態分為：浸漬漆、覆蓋漆、矽鋼片漆、防電暈漆等四種需根據使用的特性需求、工藝方式、環境保護、法規安規認證等來選擇適合使用的凡立水。凡立水廣泛使用在所有類型的電氣設備中，如馬達、變壓器、線圈含浸等等，提供絕緣、防潮、防腐蝕、固定，甚至是散熱的功能。
" />
            <meta property="og:image" content="https://ultraehp.com/images/blog/UH1沾凡立水02-1920x1080.jpg" />


            

            <div className="content-wrap flex bg-white md:flex-row flex-col w-full mx-auto ">

                <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>



               <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://ultraehp.com/en/Article05.html">
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
                                <a className="block w-full" href="https://www.ultraehp.com/en/Article04.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/Article04.html">繁體中文</a>
                            </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


                </div>
                <div className="left w-full lg:w-[65%]">

                    <section className='section section-01 flex flex-col pt-[80px]'>
                        <div className="navgation ">
                            <a href="https://ultraehp.com/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> / 
                            <a href="https://ultraehp.com/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>文章列表</a> / 
                            <a href="#" className='text-gray-500 hover:font-black font-bold hover:text-black'>水性絕緣凡立水</a>
                        </div>
                      

                        <Image fetchPriority='high' priority={true} src='UH1沾凡立水02-1920x1080.jpg' loading='eager' width={1200} className='rounded-2xl md:rounded-none mt-5 ' placeholder='empty' alt='水性凡立水使用中pH酸堿值的控制/蜂鳥探針-超極生技UltraE' height={500} loader={myLoader03}></Image>
                    </section>
                    <section >
                        <div className=' inline-block p-5 w-full'>
                            <h1 className='article-title'> 水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制</h1>


                            <h2 className='article-h2'>什麼是凡立水？
</h2> 
                            <p>凡立水，即英文varnish的音譯。凡立水是絕緣漆的俗稱，在電氣絕緣行業又稱絕緣漆。絕緣凡立水根據不同的種類、配方，有分為水性型、無溶劑型以及溶劑型。按使用範圍及形態分為：浸漬漆、覆蓋漆、矽鋼片漆、防電暈漆等四種需根據使用的特性需求、工藝方式、環境保護、法規安規認證等來選擇適合使用的凡立水。凡立水廣泛使用在所有類型的電氣設備中，如馬達、變壓器、線圈含浸等等，提供絕緣、防潮、防腐蝕、固定，甚至是散熱的功能。</p>

                            <h2 className='article-h2'>凡立水的分類及其特性，如何挑選合適的凡立水？
</h2>

                            <p>我們可以根據使用的特性需求、公益方式、環境保護、法規安全認證等來選擇適合使用的凡立水

</p>
<ul>
                                <li>1. 凡立水依照材質，可大概區分為以下幾類：醇酸樹脂、環氧樹脂類、SilicoNe(膠類)
</li>
                                <li>2. 凡立水依照材料，可大概區分為以下幾類：溶劑型、無溶劑型、水溶性型
</li>
                                <li>3. 凡立水按耐溫等級之區分，常用的有：烘乾型凡立水和自乾型凡立水
</li>
    
</ul>

                            <p>按照最常使用的照稀釋劑的不同，我們來了解一下各自的特色：

</p>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>水性型：
                                </b>
                                <p>水性、無溶劑型安全不易燃，不揮發有機溶劑，符合環保要求，低有機揮發物質 (VOC)，無污染性，符合美國空氣清淨標準。 在使用上，水性絕緣凡立水以RO水/自來水依適當比例稀釋攪拌後，在 20至30%的樹脂固成分下，需控制pH值在pH 8.0 以上，必須經常檢查凡立水的黏度與 pH值。

                                </p>
                            </div>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>非溶劑型：

                            </b>
                            <p>非溶劑型凡立水和溶劑型凡立水相比，有著快速幹燥、低揮發較環保、低溫烘烤、方便儲存等優點。但非溶劑型凡立水在使用時，需要搭配固化劑(硬化劑)，如何因應生產條件，選擇適當的比例，來提升生產效率將是關鍵。正常情況下，硬化劑的添加量約為凡立水的1%~3%。硬化劑添加量越多，反應(固化)速度越快，效率越好，但同時應力變高，且成本略高。一般來說，因為配方不同，非溶劑型的氣味較溶劑型凡立水來的大。不過非溶劑型因揮發分較低，氣味並不會對人體造成傷害。</p>

                            </div>


                            <div className='mt-5'>
                                <b 
                                    className='mt-5 text-[20px]'>溶劑型：


                            </b>

                            <p>溶劑型凡立水含有較低的固含量，較高的有機溶劑含量。使用的溶劑型雖然較非溶劑型的氣味少一些，但揮發的氣體中，大部分具有一定毒性。屬於比較早期的產品，但因為使用簡單，成本低仍有一些市場份額。</p>
                            </div>

                            <Image width={800} loading='lazy' placeholder='empty' className='rounded-2xl md:rounded-none' height={500} src='油漆+UH1-中文-1920x1080.jpg' alt='什麼是水性凡立水及快速使用拋棄式pH電極控制凡立水pH值的方法/蜂鳥探針-超極生技UltraE' loader={myLoader03}></Image>

                            <h2 className='article-h2'>水性凡立水的使用方法及pH 酸堿值測量及控制方法
</h2>



                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>水性凡立水的使用保存方法：



                                </b>

                                <p>隨著這幾年對於環保法規及生產安全的考量，低毒性，較不容易易燃的非溶劑及水性凡立水符合美國空氣清新標準，漸漸會被廣泛應用。</p>
                                <p className='mt-3'>目前市面上用於馬達、變壓器等的水性凡利水(水性絕緣漆)之使用及保存環境皆必需要控制含浸槽的pH值。以ELANTAS1000-70 為例， 通常開封後：水性凡立水 pH 值需控制在 8.0 - 9.0 之間。隨時經常地檢查凡立水的黏度與 pH 時，保存就很容易。一旦發現凡立水變濃稠或不透明時，就表示需要立刻調整。藉由加水，黏度通常就可以恢復正常。必要時加 入少量的 DMEA pH 調整劑(Pedigree No.119539)，可提高凡立水之 pH 值。</p>
                            </div>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>水性凡立水的pH檢測方法：



                                </b>

                                <p>水性凡立水的pH的檢測一般有兩種方法，比色法和基於能斯特方程的電位法

</p>
                            </div>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>比色法測量水性凡立水的優缺點：


                                </b>
                                <p className='font-bold text-orange-500 mt-5'>pH試紙測量水性凡立水：
</p>

                                <p>檢驗時，取一張試紙在表面皿或玻璃片上，用潔凈的玻璃棒蘸取待測液點滴於試紙的中部，觀察變化穩定后的顏色，再與標準比色卡比較來確定溶液的pH。水性凡立水狀態類似膠水、黏稠度較高(凝膠狀)，不易被乾燥的pH試紙吸收，並且有些型號的水性凡立水會有淺黃色的顏色，會干擾最後的比色。按照說明書的要求控制在8.0-9.0 pH範圍之內。所以量測誤差會比較大。

</p>
                                <p className='font-bold text-orange-500 mt-5'>電位法測量-pH玻璃電極測量水性凡立水：
                                </p>
                                <p className='font-bold text-black'>電位法測定pH值可以達到不叫精確的要求。最常實驗室使用的pH玻璃電極的用法如下：

</p>

<ul>
                                    <li>1.將玻璃電極從保存液中取出，檢查電極表面是否有磨損或者氣泡，若外觀正常可使用蒸餾水或待測液體沖洗表面的鹽分後，吸乾備用。</li>
                                    <li>2.按照使用說明進行電極的兩點校正。
</li>
                                    <li>3.將玻璃pH電極前端及溫度感應電極完全浸沒於存有待測樣品的燒杯中，通常需要5-20mL的液體。
</li>
                                    <li>4.輕輕晃動小燒杯使液體可以和整個玻璃pH電極的表面充分接觸
</li>
                                    <li>5.若是自動酸鹼計等待儀器提示達到穩定狀態後進行讀值。若儀器不具備自動判定結果的功能待顯示結果不再變化後1分鐘左右進行讀值。
                                    </li>
</ul>


                                <p className='mt-5 font-bold'>對於使用玻璃pH電極測試水性凡立水的酸堿性有以下幾點需要特別注意：



                                </p>

                                <ul>
                                    <li>• 為了取得正確的檢測數值，使用人員需要進行pH玻璃電極的使用培訓，包括保養電極及校正電極。
</li>
                                 <li>• 水性凡立水為粘稠的樣品，使用後需要仔細清洗電極表面以防止玻璃膜孔洞被阻塞，從而使玻璃電極無法正常工作。，但不可用衛生紙或拭紙擦拭電極，會造成電極刮傷，應以拭紙輕輕吸乾電極上水份。

                                    </li>
                                    <li>• 電極不使用時應蓋住並使其保持濕潤，存放於飽和氯化鉀溶液中

                                    </li>
                                 
                                </ul>


<p></p>

                                <Image src='UH1-14-拋棄試1920x1080.jpg' loading='lazy' className='mt-5 rounded-2xl md:rounded-none' alt='玻璃電極無法用於粘稠液體的pH檢測的原因及如何解決/蜂鳥探針-超極生技UltraE' loader={myLoader03} placeholder='empty' width={800} height={400}></Image>






                                <p className='font-bold text-orange-500 mt-5'>使用拋棄式蜂鳥探針pH電極測量水性凡立水：

                                </p>
                                <p className=''>蜂鳥探針在出廠前皆使用NIST 認證可追溯性標準品進行校正檢驗，並將批次校正資訊以QRcode模式結合在試片罐上，首次使用時只需將pH檢測儀掃描


                                </p>
                                <p>試片罐上的QRcode後，即可直接進行pH量測。使⽤上不同於傳統pH玻璃電極，無需進行傳統繁雜的校正步驟,取出即可直接使用。另外，拋棄式的設計不用擔心粘稠的凡立水會污染電極難以保養和清洗。特別適合於沒有化學實驗室工作經驗的一般使用者進行精確的pH量測。</p>

                                <Image src='5.1.png' className='mt-5 ' height={350} width={600} loading='lazy' alt='如何使用免校正拋棄式pH電極控制凡立水pH的使用方法/蜂鳥探針-超極生技UltraE' placeholder='empty' loader={myLoader06}></Image>





                            </div>





                            










                        </div>
                    </section>
                    <div class="overflow-x-auto mt-[60px] md:mt-0 w-[95%]  mx-auto md:w-full  sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block md:w-full sm:px-6 lg:px-8 ">
                            <div class="overflow-hidden">
                                <table class="min-w-full rounded-2xl">
                                    <thead class="bg-orange-500 rounded-2xl border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                傳統pH玻璃電極
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                Humming Probe
                                            </th>
                                            <th scope="col" class="text-sm font-medium  text-white px-6 py-4 text-left">
                                                pH變色試紙

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">產品/項目</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Image src='table compare-01.webp' loading='lazy' placeholder='empty' loader={myLoader07} width={180} height={180}></Image>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Image src='table compare-02.webp' loading='lazy' placeholder='empty' loader={myLoader07} width={180} height={180}></Image>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Image src='table compare-03.webp' loading='lazy' placeholder='empty' loader={myLoader07} width={180} height={180}></Image>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">操作難易度	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                困難
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                簡單
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                簡單                                                </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">準確度	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                高
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                高
                                            </td>

                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">低                             </td>
                                        </tr>









                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">校正需求	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                需要
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                無
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                無
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">樣品量	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                困難
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                簡單
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                簡單
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">價格	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                高
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                低
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                低
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">交叉污染		</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                可能
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                無
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                無
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                    


                </div>

                <div className="right  h-full py-[30px] md:py-[30px] sm:px-[0px] overflow-hidden 2xl:px-[60px]  w-full md:w-[35%]">



                    <div className="wrap">
                        <div className="top p-6">
                            <a href="https://www.ultraehp.com/hummingprobe/UH2.html">
                                <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                            </a>
                            <a href="https://www.ultraehp.com/hummingprobe/UH1.html">   <Image src='UH1-banner-1024x576.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                            <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html">
                                <Image src='UH2GAS-banner-m.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader033} />
                            </a>



                        </div>


                         


                    

                    </div>

                </div>
            </div>

            <div className=" ">
                <ArticleBottomSection />

            </div>

        </div>
    )
}
