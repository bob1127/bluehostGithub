
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

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


// import { StickyContainer, Sticky } from 'react-sticky';

// import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/blog/${src}?w=${width}?p=${placeholder}`
}

const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
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
            <title>看完這一篇再也不用校正pH計/酸鹼檢測儀|超極生技-UltraE
            </title>
            <link rel="alternate" href="https://ultraehp.com/Article03.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://ultraehp.com/en/Article03.html" hreflang="en" />

            <meta key="description" name="description" content="這篇文章提供了對 pH計/酸鹼檢測儀校正的深入了解。無論您是專業用戶還是初學者，了解為什麼需要校正以及校正的原理和步驟都是至關重要的。如果您希望減少校正的頻率，可以考慮使用免校正的酸鹼檢測系統（H3），這將為您提供更大的方便性和精確性。該系統使用試片型電極，不僅方便使用，而且價格更經濟實惠。無論您選擇哪種方式來測量 pH 值，這篇文章都提供了詳盡的比較，以幫助您做出明智的選擇。
" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://ultraehp.com/Article05.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
看完這一篇再也不用校正pH計/酸鹼檢測儀|超極生技-UltraE
" />
            <meta property="og:description" content="這篇文章提供了對 pH計/酸鹼檢測儀校正的深入了解。無論您是專業用戶還是初學者，了解為什麼需要校正以及校正的原理和步驟都是至關重要的。如果您希望減少校正的頻率，可以考慮使用免校正的酸鹼檢測系統（H3），這將為您提供更大的方便性和精確性。該系統使用試片型電極，不僅方便使用，而且價格更經濟實惠。無論您選擇哪種方式來測量 pH 值，這篇文章都提供了詳盡的比較，以幫助您做出明智的選擇。

" />
            <meta property="og:image" content="https://ultraehp.com/images/blog/傳統pH校正液 1920X1080.jpg" />







        <div className='flex  pt-[100px] bg-white px-[15px] md:px-[60px]  justify-center  items-start  dark:bg-gray-200'>
                <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>


               <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://ultraehp.com/en/Article03.html">
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
                                <a className="block w-full" href="https://www.ultraehp.com/en/Article03.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/Article03.html">繁體中文</a>
                            </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


                </div>


            <section className='flex   flex-col  lg:flex-row w-full section-article'>
                <div className="left px-0 md:px-[30px] py-[30px]  rounded-m pr-0  md:pr-10 md:w-full  lg:w-2/3">

                        <section className=' flex flex-col pt-[20px]'>
                            <div className="navgation ">
                                <a href="https://ultraehp.com/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> / 
                                <a href="https://www.ultraehp.com/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>文章列表</a> /
                                <a href="#" className='text-gray-500 hover:font-black font-bold hover:text-black'>看完這一篇再也不用校正pH計/酸鹼檢測儀</a>
                            </div>

                            {/* <Image 
                            fetchPriority='high'
                            priority={true}
                            loading='eager'
                            src='You-don’t-need-to-calibarate-your-pH-meter.webp' alt='看完這一篇再也不用校正pH計了-超極生技UltraE|pH計/酸鹼度測定計/pH儀器' width={1000} className='rounded-xl mt-5 ' placeholder='empty' loader={myLoader} height={500} ></Image> */}
                            <Image alt='我們的pH檢測儀器不需要校正-超極生技UltraE|pH計/酸鹼度測定計/pH儀器' loading='eager'  src='pH酸鹼方式 1920X1080.webp' width={1000} className='rounded-xl mt-5 ' placeholder='empty' loader={myLoader} height={500} priority={true}></Image>
                        </section>

                
                        <h1 className='article-title leading-normal mt-5'>看完這一篇再也不用校正pH計/酸鹼檢測儀



                    </h1>
                        <h2 className='article-h2'>為什麼pH計/酸鹼檢測儀需要校正

                    </h2>

                    <p>pH酸度計(pH測量儀)的精確度(pH值)和壽命很大一部分取決於pH電極。而且很多時候因為使用方法不當，致使pH測量不準。例如pH酸度計使用過一段時間後，因為玻璃電極的孔洞阻塞或是因為磨損導致pH計電極不對稱，電位將會發生很大改變，故沒隔一段時間或是需要高精度量測的時候都重新校正。
                        另外在下列情況下，也必須再重新校正：</p>
                    <ul>
                        <li>1.更換新的pH電極</li>
                        <li>2.測量濃酸液（pH 小於 2）以後，或測量濃鹼液（pH  &gt; 12）以後。
</li>
                        <li>3.測量含有氟化物的溶液或較濃的有機溶液後。</li>
                        <li>4.被測溶液溫度與標準溶液溫度（或室溫）相差過大時。</li>
                       

                    </ul>



                   

                    <h2 className='article-h2'>pH計/酸鹼檢測儀校正的原理和步驟

                    </h2>
                    <p>pH值是用來量度物質中氫離子的活性。這一活性直接關繫到水溶液的酸性、中性和鹼性。pH計是以電位測定法來測量溶液pH值的，pH計的主要測量部件是玻璃電極和參比電極，玻璃電極對pH敏感，而參比電極的電位穩定。將pH計的這兩個電極一起放入同一溶液中，就構成了一個原電池。既然pH計的參比電極電位穩定，那麼在溫度保持穩定的情況下，溶液和電極所組成的原電池的電位變化，只和玻璃電極的電位有關，即產生了電位和pH之間的關係直線。因為上述提到的狀況會使電位和pH之間的關係直線產生偏差。所以當我們需要高精度檢測或是使用一段時間之後，我們需要用標準pH液體進行電位和pH之間的關係直線的重新校正。普遍使用的校正方法有兩點法校正和三點法校正。</p>
               

                    <h2 className='article-h2'>pH校正使用兩點法校正還是三點法校正呢？
</h2>

                    <p>無論何種類型的傳統pH計，pH=7這個點是必須校正的，而且在兩點校正的時候要先校正pH=7這個點。做校正時從7.0開始，選擇的標準液與要測定的溶液的pH值有關，使溶液的pH值能落在校正的pH範圍內。一般採用兩點就可以滿足要求，如果對其要求較高，才考慮第三點校正。通常用的是7，4，10的校正次序。先校酸後校鹼。詳細的校正步驟因參照每台說明書進行手動或自動校正。

</p>

                        <Image src='傳統pH校正液 1920X1080.jpg' className='mt-4 rounded-xl md:rounded-none' alt='玻璃pH電極多久需要校正？校正使用兩點法校正還是三點法校正？/蜂鳥探針-超極生技UltraE' loading='lazy' placeholder='empty' loader={myLoader} width={1000} height={500}></Image>

                    <h2 className='article-h2 w-full md:w-3/4'>如果不想要常常頻繁校正pH電極可以選用免校正pH酸鹼測試系統
</h2>

                    <p>如果每天要進行高精度測量，或是不想要準備標準溶液，市面上也有免校正的酸鹼電極可以選用。免校正酸鹼檢測系統使用的試片型電極原理與傳統pH玻璃電極相似，同樣透過溶液中氫離 子在電極上產生相對的電位差，經由電位差 轉換酸鹼值，而特別之處在於，以可拋式的 試片電極量測，使用後電極可以直接拋棄， 不會有電極被污染或污染樣品的問題，透過 嚴格的生產參數控制及穩定的自動化流程， 並於出廠時將批次資訊建立於試片包裝上， 首次使用時將資訊輸入檢測儀中，不需要經 過校正步驟即可使用，並且保證量測的精準 度。除此之外，試片電極因為流道體積小， 僅需要微量的樣品即可檢測，在許多傳統較 難使用的情況下也能直接使用，尤其適合使 用於需要量測極少量樣品的細胞與生化實驗 中，且可拋棄的特性，更不會造成樣品交叉 污染。另外由於電極免校正，在戶外檢測時 也不需要攜帶各種校正液，僅需攜帶檢測儀 以及試片電極即可，方便性大幅提升。

</p>

                        <Image alt='使用拋棄式微量pH電極可以不用校正直接使用/蜂鳥探針-超極生技UltraE' src='UH1不怕汙染 1920x1080.jpg' loader={myLoader} loading='lazy' placeholder='empty' className='mt-4 rounded-xl md:rounded-none' width={1000} height={500}></Image>

                    <h2 className='article-h2'>pH試紙、需校正玻璃pH電極及蜂鳥探針免校正pH電極使用方法及優缺點比較
</h2>
                    <h3 className='article-h3'>1. pH試紙
</h3>
                    <p>pH試紙上有甲基紅、溴甲酚綠、百里酚藍這三種指示劑。甲基紅、溴甲內酚綠、百里酚藍和酚酞一樣，在容不同pH值的溶液中均會按一定規律變色。甲基紅的變色范圍是pH4.2(紅)--6.2(黃) ，溴甲酚綠的變色范圍是pH3.6（黃）--5.4（綠），百里酚藍的變色范圍是pH6.7(黃)--7.5(藍)。用定量甲基紅加定量溴甲酚綠加定量百里酚藍的混合指示劑浸漬中性白色試紙，晾乾後製得的pH試紙可用於測定溶液的pH值。pH試紙相較於傳統pH計來說，使用方便性高很多，價格也較便宜，平均每片價格約 USD0.1。但pH試紙為顏色辨識，缺點是會因不同人判讀產生誤差，無法提供較準確的pH量測數據，且不具備連續監控的性質
</p>


                
                        <Image width={800} alt='常見液體食物的pH值/蜂鳥探針-超極生技UltraE' className='mt-4 rounded-xl md:rounded-none' height={500} src='pH酸鹼數值 1920X1080.jpg' loading='lazy' loader={myLoader} placeholder='empty'></Image>





                        <h3 className='article-h3'>2. pH玻璃電極

                    </h3>
                    <p>pH電極法量測值準確，但由於玻璃電極特性，每次使用前皆需浸泡於pH4, 7, 10標準溶液進行校正步驟，且更換樣品時需清洗電極，但玻璃電極清洗不易，容易因為清洗不確實造成汙染及磨損（表面刮痕），而且整個操作過程繁瑣，需耗時5-10分鐘才可進行量測，使用上非常的不方便。另外校正過程需要嚴謹的作業，才能獲得正確的校正結果，如果有所偏差，會造成後續測量誤差。傳統pH計在操作上有一定的專業需求，須由技術人員操作，人為疏失很容易影響量測準確度。傳統pH玻璃電極的價格約在USD100~USD1000之間，價格較為昂貴。此外，玻璃電極的維護、保存也很麻煩，玻璃電極易乾燥造成準度失真，還要注意電極補充液是否足夠，也容易破裂，攜帶非常不便。
                    </p>



                        <Image width={800} height={500} className='mt-3 rounded-xl md:rounded-none' src='傳統電極儀器-1920x1080.webp' loading='lazy' alt='傳統玻璃pH電極(萬通/梅特勒/雷磁/蜂鳥探針-超極生技UltraE' loader={myLoader07} placeholder='empty'></Image>
                   
                    <h2 className='article-h2' >玻璃酸鹼電極檢測pH酸鹼值的原理
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
                                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 bg-[] text-left">
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
                                                    <Image alt='傳統玻璃pH電極規格價格優缺點/不同廠牌pH檢測系統比較/蜂鳥探針-超極生技UltraE' src='table compare-01.webp' loading='lazy' placeholder='empty' loader={myLoader07} width={180} height={180}></Image>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image alt='傳統玻璃pH電極規格價格優缺點/不同廠牌pH檢測系統比較/蜂鳥探針-超極生技UltraE' src='table compare-02.webp' loading='lazy' placeholder='empty' loader={myLoader07} width={180} height={180}></Image>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image alt='傳統玻璃pH電極規格價格優缺點/不同廠牌pH檢測系統比較/蜂鳥探針-超極生技UltraE' src='table compare-03.webp' loading='lazy' placeholder='empty' loader={myLoader07} width={180} height={180}></Image>
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





                </div>
                <br></br>

               
                <div className="right  py-[100px] sm:px-[0px] 2xl:px-[60px]  w-full md:w-[35%]">



                    <div className="wrap">
                        <div className="top p-0 md:p-6">
                            <a href="UH2.html">
                                <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                            </a>
                            <a href="UH1.html">   <Image src='UH1-banner-1024x576.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                                <a href="UH2-GAS.html">
                                <Image src='UH2GAS-banner-m.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader03} />
                            </a>



                        </div>


                     
                          

                       

                    </div>

                </div>

            </section>
            <section>
                {/* <ReactSlick/> */}
            </section>

            





        </div>

        <div className=" ">
                <ArticleBottomSection />
                
        </div>


</div>
    )
}
