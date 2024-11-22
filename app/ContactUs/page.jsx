
"use client"
import Hero from '@/components/hero'

import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

import { motion } from 'framer-motion'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/UP100/${src}?w=${width}?p=${placeholder}`
}
const cld = new Cloudinary({
    cloud: {
        cloudName: 'dc9veqqhp'
    }
})
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
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

            '/UX100/UX100_zp5m5y',

    },
    {
        image:
            '/UX100/UX100-03-UX100機身介紹1000x1000_t6owog'

    },
    {
        image:
            '/UX100/UX100-04-插入電擊1000x1000_fzv84t'

    },
    {
        image:
            '/UX100/UX100-07-雙模式1000x1000_j4twq5'

    },
    {
        image:
            '/UX100/UX100-05-500萬畫素1000x1000_bwb7hf'

    },
    {
        image:
            '/UX100/UX100-06-4.3彩色觸控螢幕1000x1000_bym4dc'

    },


];

export default function Home() {
    return (

        
      <div className='pb-[120px] bg-white'>


          <title>聯絡我們 - 超極生技 UltraE
            </title>
            <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>

           <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://ultraehp.com/en/ContactUs.html">
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
                            <a className="block w-full" href="https://www.ultraehp.com/en/ContactUs.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className="block w-full" href="https://www.ultraehp.com/ContactUs.html">繁體中文</a>
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>


            </div>
            <link rel="alternate" href="https://ultraehp.com/ContactUs.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://ultraehp.com/en/ContactUs.html" hreflang="en" />


            <div className='flex  xl:pl-[90px]  mt-[80px] 2xl:pl-[90px]   px-[15px] md:px-[0px]  flex-col justify-center items-center  dark:bg-gray-200'>
                {/* <div className="HeroBanner">
                <Image width={1920} height={768} src='/'></Image>
            </div> */}

                
                <h1 className='font-extrabold   md:mt-[70px] xl:mt-[100px] text-[32px] mt-[60px]'>聯絡我們</h1>
                <iframe src="https://www.ultraehp.com/customized-iframe-tw.html" className='w-full p-0 mt-[30px] h-[3800px] md:h-[1100px] xl:h-[1300px] 2xl:h-[2000px ] md:mt-[40px] ' frameborder="0"></iframe>

            </div>
           
      </div>

    )
}
