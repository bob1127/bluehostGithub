
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import { Card, CardHeader, CardBody } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import Sticky from 'react-sticky-el';
import ArticleBottomSection from '../../components/ArticleBottomSection'
// import SomeChild from '../../components/'



const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/blog/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}

const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
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

            '/UP100/輪播圖01_wudfzj',

    },
    {
        image:
            '/UP100/輪播圖-04_lf1ddj'

    },
    {
        image:
            '/UP100/輪播圖02-01_xcofnr'

    },
    {
        image:
            '/UP100/輪播圖-03_ku18ca'

    },
    {
        image:
            '/UP100/輪播圖-05-02_mgwrn7'

    },

    {
        image:
            '/UP100/輪播圖-06-05_q9bepc'

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



export default function Home() {
    return (
     <div>

         
            {/* metadata */}
            <title>只用一滴就能檢測酸鹼值的微量pH計|超極生技-UltraE
            </title>
            <link rel="alternate" href="https://ultraehp.com/Article02.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://ultraehp.com/en/Article02.html" hreflang="en" />

            <meta key="description" name="description" content="了解微量pH計的必要性及操作方法。在實驗室或製程中，樣本稀少、昂貴或為避免污染時，微量檢測pH酸鹼值至關重要。傳統方法可能需要大量樣本，而微量pH試片電極僅需極少量樣本即可，並無需繁複校正。相比之下，傳統pH玻璃電極需校正，且使用和保存較為繁複。試片型電極提供了方便、準確和成本效益的微量pH測量解決方案。
" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://ultraehp.com/Article02.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
只用一滴就能檢測酸鹼值的微量pH計|超極生技-UltraE
" />
            <meta property="og:description" content="了解微量pH計的必要性及操作方法。在實驗室或製程中，樣本稀少、昂貴或為避免污染時，微量檢測pH酸鹼值至關重要。傳統方法可能需要大量樣本，而微量pH試片電極僅需極少量樣本即可，並無需繁複校正。相比之下，傳統pH玻璃電極需校正，且使用和保存較為繁複。試片型電極提供了方便、準確和成本效益的微量pH測量解決方案。

" />
            <meta property="og:image" content="https://ultraehp.com/images/blog/傳統pH校正液 1920X1080.jpg" />







        <div className='flex pt-[70px] md:pt-[80px] bg-white xl:pt-[90px] px-[20px] xl:px-[30px] 2xl:px-[60px] justify-center  items-start  dark:bg-gray-200'>

               <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://ultraehp.com/en/Article02.html">
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
                                <a className="block w-full" href="https://www.ultraehp.com/en/Article02.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/Article02.html">繁體中文</a>
                            </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


                </div>



            <section className='flex flex-col  lg:flex-row w-full section-article'>


                    <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>
                  
                <div className="left  pr-0 md:pr-10 w-full lg:w-2/3">
                        <section className=' flex flex-col pt-[20px]'>
                            <div className="navgation mt-[80px] ">
                                <a href="https://ultraehp.com/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> / 
                                <a href="https://ultraehp.com/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>文章列表</a> /
                                <a href="#" className='text-gray-500 hover:font-black font-bold hover:text-black'>只用一滴就能檢測酸鹼值的微量pH計</a>
                            </div>


                            <Image fetchPriority='high'  src='UH2-10-活魚檢測.jpg' placeholder='empty' loading='eager' loader={myLoader01} alt='只用微升uL(or 毫升mL)級別樣品就能檢測酸鹼值的微量拋棄式pH計工作原理及應用/免校正拋棄式微量pH電極/蜂鳥探針-超極生技UltraE' width={1000} className='rounded-xl mt-5 '  height={500} priority={true}></Image>
                        </section>


                        <h1 className='article-title leading-normal mt-5'>只用一滴就能檢測酸鹼值的微量pH計
                         

                    </h1>
                    <h2 className='article-h2 '>什麼時候需要微量檢測pH酸鹼值？
                    </h2>

                    <p>實驗室或製程中，有時候因為樣本稀少且昂貴，例如：體液（含血液，組織液，汗液等 ）。或者為了避免樣品污染，採用取樣檢測的方式，為了不影響檢體或者原料做後續操作，我們只能通過微量取樣的方式來完成檢測。這樣的樣品量有時候只有幾個到幾十個微升。</p>
                        <Image src='一滴可量測-02-1920X1080.jpg' placeholder='empty' loader={myLoader} alt='只用微升uL(mL)級別樣品就能檢測酸鹼值的微量拋棄式pH計外觀/免校正拋棄式微量pH電極/蜂鳥探針-超極生技UltraE' width={1000}  className='rounded-xl mt-5 ' height={500} ></Image>





                    <h2 className='article-h2'>如何進行微量檢測pH酸鹼值？
</h2>
                    <p>傳統pH檢測使用的一般玻璃電極，體積大，需要較多的樣本量才能夠檢測，無法滿足微量檢測的需求，市面上也有專用的微量電極，但是電極價格動輒萬元起跳，而且保存不易，使用時也會有容易損壞的困擾。採用酸鹼試紙來大略了解pH也是一個解決方案，但是對於需要精準量測或連續量測的需求，試紙也是無法滿足的。還有一種方式就是pH試片型電極，提供微量檢測酸鹼的完美解決方案。試片型電極，採用相同於玻璃電極的原理，利用電化學技術，將酸鹼檢測感應層做到只有直徑3mm以下的大小，樣品接觸到感應層，就能夠精準的量測到酸鹼值，而且僅需20微升的樣本量，就可以量測到酸鹼值，量測準確度在±0.1，解析度在±0.01，足以符合市場上大部分的量測需求。</p>


                  
                    <h2 className='article-h2'>玻璃酸鹼電極檢測pH酸鹼值的原理
</h2>
                    <p>其中玻璃電極內外層分別與玻璃電極內部及外部溶液進行氫離子交換，測其內外電位E1 & E2，通過能斯特方程式計算出電位與pH值的關係，從而完成pH的檢測</p>


                    <div class="flex flex-col mt-5">
                        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
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
                                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                    pH變色試紙

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">產品/項目</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image alt='傳統玻璃pH電極規格價格優缺點/不同廠牌pH檢測系統比較/蜂鳥探針-超極生技UltraE' src='table compare-01.jpg' placeholder='empty' loading='lazy' loader={myLoader07} width={180} height={180}></Image>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image alt='傳統玻璃pH電極規格價格優缺點/不同廠牌pH檢測系統比較/蜂鳥探針-超極生技UltraE' src='table compare-02.jpg' loader={myLoader07} width={180} height={180} placeholder='empty' loading='lazy'></Image>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image alt='傳統玻璃pH電極規格價格優缺點/不同廠牌pH檢測系統比較/蜂鳥探針-超極生技UltraE' src='table compare-03.jpg' placeholder='empty' loading='lazy' loader={myLoader07} width={180} height={180}></Image>
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
                                                    簡單
                                                </td>
                                              
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
                                                   中
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


                    <h2 className='article-h2'>玻璃酸鹼電極檢測pH酸鹼值的原理
                    </h2>
                    <p>其中玻璃電極內外層分別與玻璃電極內部及外部溶液進行氫離子交換，測其內外電位E1 & E2，通過能斯特方程式計算出電位與pH值的關係，從而完成pH的檢測

</p>


                    <a href="Article04.html" className='mt-3 hover:font-bold text-orange-500'>推薦閱讀：能斯特方程式(Nernst)與pH酸鹼度計關係·</a>

                        <Image className='img-article rounded-2xl md:rounded-none' loading='lazy' loader={myLoader07} src='Article02-2.png' alt='能斯特方程-pH電極工作原理玻璃膜內外離子交換產生的電位差/免校正拋棄式微量pH電極/蜂鳥探針-超極生技UltraE' width={580} placeholder='empty' height={400}  ></Image>


                   <h2 className='article-h2'>試片型酸鹼電極微量檢測pH酸鹼值的原理？

                    </h2>
                    <p>pH微量酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，一樣以能斯特方程為基礎，透過能斯特方程式計算出電位與pH值的關係。微量檢測的試片型pH電極將酸鹼檢測感應層做到只有直徑3mm以下的大小，樣品接觸到感應層，就能夠精準的量測到酸鹼值，而且僅需幾微升的樣本量，量測準確度在±0.1，解析度在±0.001，可以媲美市面上昂貴的高端pH玻璃電極的主流參數。

                    </p>



                        <Image className='img-article rounded-2xl md:rounded-none' loading='lazy' alt='網版印刷pH電極工作原理/拋棄式鹽橋參考電極/免校正拋棄式微量pH電極/蜂鳥探針-超極生技UltraE' loader={myLoader07} src='article02-3.png' width={400} placeholder='empty' height={400}  ></Image>







                    <h2 className='article-h2'>玻璃pH電極和微量試片型pH電極在使用和保養上有什麼不同？
</h2>

                    <h3 className='article-h3'>傳統的玻璃pH電極-需要校正
</h3>
                    <p>因為保存狀況，電極老化，或者玻璃電極表面孔洞堵塞等狀況，pH電極的斜率會發生變化。所以依照使用頻率和精度，需要決定多久校正的一次。 儘管pH計種類很多，但其校準方法大多採用兩點校準法，即選擇兩種標準緩衝液：一種是pH7標準緩衝液，第二種是pH9標準緩衝液或pH4標準緩衝液。先用pH7標準緩衝液對電計進行定位，再根據待測溶液的酸鹼性選擇第二種標準緩衝液。如果待測溶液呈酸性，則選用pH4標準緩衝液；如果待測溶液呈鹼性，則選用pH9標準緩衝液。

</p>

                    <h3 className='article-h3'>玻璃pH電極使用方法：
</h3>
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
                    <h2 className='article-h2 '>玻璃pH電極保養與儲存方法：
</h2>
<ul>
                        <li>1.不要用手去碰觸玻璃球（glass bulb），球面上的油膜或刮痕會影響測值的準確度，手指上的油漬會降低電極的感度。每次使用玻璃pH電極時應先觀察電極表面有無痕電極導線有無外在毀損。</li>
                        <li>2.使用前，玻璃電極應徹底用去離子水清洗，不可用衛生紙或拭紙擦拭電極，會造成電極刮傷，應以拭紙輕輕吸乾電極上水份
</li>
                        <li>3.電極不使用時應蓋住並使其保持濕潤，存放於飽和氯化鉀溶液中
</li>
                        <li>4.玻璃電極球泡受到污染可能使電極響應時間加長。此時可CCl4或皂液除去污物，然後浸入蒸餾水一晝夜後繼續使用。污染嚴重時，可用5％HF溶液浸10～20分鐘，立即用水沖洗乾淨，然後，浸入0.1N HCl溶液一晝夜後繼續使用。</li>
</ul>



                        <Image alt='玻璃pH電極保養與儲存方法/蜂鳥探針-超極生技UltraE' className='img-articel02 rounded-2xl md:rounded-nonel mt-4' loading='lazy' placeholder='empty' src='傳統pH校正液 1920X1080.jpg' width={1000} height={600} loader={myLoader}></Image>

                    <h3 className='article-h3'>試片型的微量pH電極-無需校正
</h3>
                    <p>試片型的pH酸鹼電極，因為原理的不同，使用固體電極來作為參考電極，所以電位不會因為電解液濃度的改變而發生變化。所以試片型的pH酸鹼電極在工廠生產完畢之後，就會進行校正，之後存放於乾燥罐內保存。需要使用的時候只需從試片罐中直接拿出來即可使用。因為拋棄式的設計，所以也不用擔心，電極是否會被污染。</p>

                    <a href="">推薦閱讀：看完這一篇再也不用校正pH計</a>

                    <h3 className='article-h3'>試片型pH電極的使用方法
</h3>
                    <p>使用試片電極量測pH十分的簡單，從試片罐中取出試片依照使用的需求，有兩種方式選用。

</p>

<ul>
                        <li>第一種方式：將電極插入儀器後，取樣本滴入試片中直接進行量測。
</li>
                        <li>第二種方式：使用的吸樣口吸取或蘸取樣品後試片直接浸入樣品中
</li>
                        <li>第二種方式：是將試片直接浸入樣品中，以外接線連接到酸鹼儀，進行量測。
</li>

</ul>

                    <p>使用者可以根據使用情境及方便性，選擇其中一種方式。使用之後試片可以直接丟棄。

</p>

                        <Image src='5.1-en.png' alt='免校正拋棄式pH電極的使用方法/蜂鳥探針-超極生技UltraE' className='rounded-2xl md:rounded-none' loading='lazy' placeholder='empty' loader={myLoader07} width={600} height={300}></Image>
                    <span>試片可通過沾取樣品、滴入樣品以及浸泡於樣品中等模式，在不同樣品體積下準確量測pH值
</span>

                        <h3 className='article-h3'>試片型pH電極保養與儲存方法：
</h3>
                    <p>試片型pH電極為拋棄式設計，儲存於密封乾燥罐內。使用時候只需取出即可直接使用。所以不會有污染的問題，也無需電極保存液來儲存。</p>

                        <Image className='img-articel02 rounded-2xl md:rounded-none' placeholder='empty' loading='lazy' loader={myLoader} src='便於攜帶和保存-1920x1080.jpg' width={1000 } height={600}></Image>

                    {/* <div className='recommed-section mt-[30px] py-[50px] px-[30px] bg-gray-100 border rounded-2xl'>


                        <div className="txt flex justify-center items-center flex-col ">
                            <h4 className='font-extrabold text-gray-800 text-[32px]'>覺得這篇文章不錯嘛？
                            </h4>

                            <p>瞭解更多我們的產品

                            </p>
                            <p></p>



                            <Image loader={myLoader05} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto mt-4 rounded-xl" src='UX200-07-手持拍照-720x540.webp' alt='內置鏡頭'></Image>


                            <a href="UX200.html" className='text-[14px] mt-4 text-center py-3 w-[200px] text-white border rounded-[40px] bg-[#4ba6db]'>Go Product</a>

                        </div>
                    </div> */}

                   


                

                </div>
                <br></br>



                <div className="right h-auto py-0 md:py-[100px] sm:px-[0px] 2xl:px-[60px]  w-full md:w-[35%] ">






                    <div className="wrap">
                        <div className="top p-6">
                            <a href="UH2.html">
                                <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                            </a>
                            <a href="UH1.html">   <Image src='UH1-banner-1024x576.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                            <a href="UH2-GAS.html">
                                <Image src='UH2GAS-banner-m.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader03} />
                            </a>



                        </div>


                     
                            {/* <div>
                               
                                <div className="scrollarea" style={{ height: '200px', overflow: 'scroll' }}>
                                    <div className="container">
                                        
                                    </div>
                                </div>
                               
                            </div>

                      */}

                    </div>

                </div>

            </section>
           
            
            
         
          

        </div>
        
            <div className=" ">
                <ArticleBottomSection />

            </div>
         </div>
               
    )
}
