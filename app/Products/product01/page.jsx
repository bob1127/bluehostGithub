"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'

import './head'


import { Table } from "@nextui-org/react";
import { useState } from "react";

import CarouselThumbs from "../../../components/CarouselThumbs";
import ProductImage from "../../../components/ProductImage";


import Carousel from "../../../components/Products/ProductCarousel";
import Navigation from "../../../components/Products/Navigation";

import styles from '../../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../../components/two-colum/data';

import Double from '../../../components/two-colum/Double';
import ModalBrn from "../../../components/ModalBtn";
import { CldVideoPlayer } from "next-cloudinary";





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
            "https://blenderartists.org/uploads/default/original/4X/5/4/f/54f2cbb9c456be76911967e686ca5898ac6a065d.jpeg",
        caption: `<div>
        San Francisco<br/><span>Next line</span>
      </div>`,
    },
    {
        image:
            "https://cdn.artstation.com/p/thumbnails/001/142/295/thumb.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://t3.ftcdn.net/jpg/05/34/83/84/360_F_534838467_DTE9QWKuWpXXgJMxzcfh6WVfimYWcNdO.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902891_1280.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_1280.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://img.freepik.com/premium-psd/psd-cartoon-character-3d-render-illustration_493627-96.jpg?w=2000",
        caption: "Darjeeling",
    },
    {
        image:
            "https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_1280.jpg",
        caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://img.freepik.com/premium-psd/psd-cartoon-character-3d-render-illustration_493627-96.jpg?w=2000",
        caption: "Darjeeling",
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


// export const metadata = {
//     openGraph: {
//         title: 'Next.js',
//         description: 'The React Framework for the Web',
//         url: 'https://nextjs.org',
//         siteName: 'Next.js',
//         images: [
//             {
//                 url: 'https://nextjs.org/og.png',
//                 width: 800,
//                 height: 600,
//             },
//         ],
//         locale: 'en-US',
//         type: 'website',
//     },
// };



const Product = props => (
    <>
    


    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <Navigation />
        <div className='fullscreen'>

            <div className='product  flex-col md:flex-row border py-9'>

                <Carousel
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: 200, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                    data={data}
                    time={3000}

                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={false}
                    // slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={false}
                    dots={false}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    // slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    showNavBtn={true}
                // style={{
                //     textAlign: "center",
                //     maxWidth: "850px",
                //     margin: "40px auto",
                // }}
                />
                {/* <motion.div
                    className='img'
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}>
                    <motion.img
                        key={props.product.image}
                        src={props.product.image}
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 200, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                    />
                    
                    
                </motion.div> */}
                <div className='product-details'>
                    <motion.div variants={stagger} className='inner w-full pl-5 pr-2'>
                        <Link href='../products'>
                            {/* <motion.div variants={fadeInUp}>
                                Back to products
                            </motion.div> */}
                        </Link>
                        <motion.div variants={fadeInUp}>
                            <span className='category'>Humming Probe UX200</span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp}>UX200｜酸鹼趨勢檢測儀</motion.h1>
                        <motion.p variants={fadeInUp}>

                            ・pH chart 曲線圖<br></br>
                            ・7.0”彩色觸控屏幕<br></br>
                            ・演算法自動終點判斷<br></br>
                            ・防水防塵等級



                        </motion.p>
                        <motion.div variants={fadeInUp} className='additonals'>
                            <span>Soy Free</span>
                            <span>Gluten Free</span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='qty-price'>
                            <div className='qty'>
                                <div className='minus'>-</div>
                                <div className='amount'>1</div>
                                <div className='add'>+</div>
                            </div>
                            <span className='price'></span>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='btn-row'>
                            <ModalBrn />
                            {/* <button className='add-to-cart rounded-full	 bg-pink-500 text-gray-100 dark:bg-gray-700'> Add to cart</button>
                            <button className='subscribe'> Subscribe</button> */}

                        </motion.div>

                    </motion.div>

                </div>
                <div>

                </div>
            </div>
        </div>
        <section className="w-full section-about border border-b-orange-700 ">
            <div className="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-3/4">


                    <motion.div className="card"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.3 }}
                    >
<h1 className=''>關於胃幽門螺旋桿菌</h1>
                         


                    </motion.div>
                </div>
            </div>
        </section>
        <div className="Container">
            <div className="row px-4 w-full border border-black mt-10">
                <div className=" mx-auto txtWrap max-width-screen-md border border-black  py-9 text-center  ">
                    <span className="text-center  py-2 text-xl md:text-2xl border  border-black rounded-full px-5">Introducing the Visual Headless CMS</span><br/>
                    <div className='mt-5 max-width-screen-md text-center '>Everything digital teams need to build high-performing digital experiences at scale, faster.</div>
                </div>
            </div>
            <div className="row px-4 mt-10">
                <div className="grid  w-4/5 mt-4 mx-auto grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="border ">
                        <div className="txt">
                            <h2 className="font-extrabold">Plug & Play</h2>
                            <p className="text-xl text-gray-600">Integrates with your existing sites & apps

</p>
                            <ul>
                                <li className="border-b border-black font-medium mt-5 pb-3">API-based infrastructure that is native to your tech stack
</li>
                                <li className="border-b border-black mt-5 pb-3">Works with any frontend or backend
</li>
                                <li className="border-b border-black mt-5 pb-3">Build with your own data, like product catalogs or customer data platforms, to create rich, dynamic experiences
</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border ">
                        <div className="video-wrap rounded-3xl overflow-hidden">
                            <video autoPlay muted loop><source src='https://www.devwares.com/static/windheader2-505dcd4c18d0bd3453594e8b1446a159.mp4' />Your browser does not support the video tag.</video>
                        </div>
                       



                        {/* <video playsInline autoPlay muted loop>
                            <source
                                src={
                                    width < 768
                                        ? "../videos/Mobile_2Mbs_v01.mp4"
                                        : "../videos/Desktop_4Mbs_v01.mp4"
                                }
                                type="video/mp4"
                            />
                        </video> */}
                    </div>
                
                </div>
            </div>

            <div className="row px-4 mt-10">
                <div className="grid w-4/5 md:w-3/4 mt-4 mx-auto grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="border ">
                        <img className="w-full" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F24a532318c2e4608bac8b634c2e3f9bf?width=2000&format=webp" alt="" />
                    </div>

                    <div className="border pl-3 md:pl-8">
                        <div className="txt">
                            <h2 className="font-extrabold">Plug & Play</h2>
                            <p className="text-xl text-gray-600">Integrates with your existing sites & apps

                            </p>
                            <ul>
                                <li className="border-b border-black font-medium mt-5 pb-3">API-based infrastructure that is native to your tech stack
                                </li>
                                <li className="border-b border-black mt-5 pb-3">Works with any frontend or backend
                                </li>
                                <li className="border-b border-black mt-5 pb-3">Build with your own data, like product catalogs or customer data platforms, to create rich, dynamic experiences
                                </li>
                            </ul>
                        </div>
                    </div>
                  
                </div>
            </div>



        </div>

        <div className="row mt-20">
            <div className="col-md-12">
                <div className="txt w-4/5 md:w-1/2 border border-black mx-auto" data-aos="fade-up" data-aos-delay="450">
                    <video className="w-20 mx-auto" src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Faebcdc568ab9443e8b5282e52d49a586%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=aebcdc568ab9443e8b5282e52d49a586&alt=media" autoplay nuted loop></video>
                    <h4 className="text-2xl text-center">lorem</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam, quasi est assumenda iste voluptatibus.</p>
               </div>
                <img className=" w-3/4 md:w-1/2 mx-auto mt-8" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fde69f0374d304d1ba65ef218a4398887?width=600" alt="" />
            </div>
            <div className="grid grid-cols-3 gap-3">
                
                <div></div>
                <div></div>
                <div></div>
           
                
            </div>
        </div>
        <section className="w-full section-about border border-b-orange-700 ">
            <div className="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">
                    {/* Section header */}
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                    <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                         



                        <h3>這是標題H3測試</h3>
                        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight  lg:text-4xl dark:text-white text-center">什麼是胃幽門螺旋桿菌</h2>
                            <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal  text-left md:text-center   dark:text-gray-400">感染幽門螺旋桿菌後，不同個體的反應會有所不同：某些個體可能不會出現明顯的症狀，即使他們已被幽門螺旋桿菌感染。另一些個體可能會因感染導致胃酸過量，進而引發幽門部胃炎和十二指腸潰瘍等併發症。另一類個體感染幽門螺旋桿菌後，可能進展為慢性胃炎，此狀況更增加罹患胃癌的風險。</p>

                    </div>
                    </div>

              



                     


                </div>
             


            </div>
        </section>
        <section className="w-full section-global border border-b-orange-700 ">
            <div className="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">

                    {/* Section header */}
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight   lg:text-4xl dark:text-white text-center">全球有幾乎一半的人感染胃幽門螺旋桿菌</h2>
                            <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal text-left md:text-center   dark:text-gray-400">胃幽門螺旋桿菌的感染方式主要通過飲食或口腔傳染。這種細菌可以存在於受感染者的唾液、口腔、嘔吐物或粪便中。它可以透過直接接觸、共用餐具、飲食中被污染的食物或水等途徑傳播。此外，感染者也可以通過接觸受感染者的嘔吐物或粪便而感染。</p>

                        </div>
                    </div>
                








                </div>



            </div>
        </section>

     
        <section>
            <div className="Container">
                <div className="border border-white row w-full bg-black h-64">
                   <div className="txt flex flex-col">
                        <h1 className="text-4xl font-extrabold  text-white text-center">EXPLORE STUNNING <svg className="graphic contentFace" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.0854 70.0004C53.5846 70.0004 68.5811 54.4541 68.5811 35.2767C68.5811 16.0993 53.5846 0.552979 35.0854 0.552979C16.5863 0.552979 1.58984 16.0993 1.58984 35.2767C1.58984 54.4541 16.5863 70.0004 35.0854 70.0004Z" fill="#EF6C41"></path>
                            <path d="M35.0307 70C28.1071 70.0061 21.3371 67.9585 15.5774 64.1164C9.81763 60.2742 5.32684 54.8101 2.67306 48.4152C0.0192846 42.0203 -0.678224 34.982 0.668789 28.1907C2.0158 21.3993 5.3468 15.16 10.2404 10.2621C15.134 5.3642 21.3704 2.02775 28.1606 0.674782C34.9507 -0.678191 41.9897 0.013126 48.3869 2.66129C54.7841 5.30945 60.2521 9.79544 64.0993 15.5518C67.9465 21.3082 70 28.0763 70 35C70 44.2773 66.3167 53.175 59.7596 59.7379C53.2025 66.3008 44.308 69.9919 35.0307 70ZM35.0307 1.43067C28.385 1.42946 21.8882 3.39905 16.3619 7.09033C10.8356 10.7816 6.52804 16.0288 3.98399 22.1683C1.43995 28.3077 0.773674 35.0638 2.06944 41.5819C3.36521 48.1001 6.56483 54.0876 11.2636 58.7873C15.9624 63.487 21.9494 66.6877 28.4673 67.9846C34.9852 69.2816 41.7414 68.6166 47.8813 66.0736C54.0213 63.5307 59.2692 59.2241 62.9615 53.6985C66.6538 48.1729 68.6246 41.6764 68.6246 35.0307C68.6148 26.1235 65.0726 17.5838 58.7748 11.2848C52.477 4.98591 43.9379 1.44205 35.0307 1.43067Z" fill="black"></path>
                            <path d="M36.1767 47.3116C35.9188 47.3116 35.6609 47.3116 35.3968 47.3116C31.0986 47.0782 27.2977 44.966 26.0021 42.0554C25.8775 41.7753 25.8693 41.4572 25.9793 41.171C26.0892 40.8849 26.3084 40.6541 26.5885 40.5296C26.8686 40.405 27.1867 40.3968 27.4729 40.5067C27.759 40.6167 27.9898 40.8358 28.1144 41.1159C29.0354 43.1852 32.1486 44.8002 35.5258 45.0089C37.3126 45.1072 41.7275 44.8984 44.1223 40.8212C44.1924 40.6793 44.2909 40.5532 44.4118 40.451C44.5327 40.3487 44.6734 40.2724 44.825 40.2269C44.9767 40.1813 45.136 40.1674 45.2933 40.186C45.4505 40.2047 45.6022 40.2555 45.739 40.3352C45.8758 40.415 45.9947 40.5221 46.0883 40.6498C46.1819 40.7775 46.2482 40.9231 46.2832 41.0775C46.3182 41.2319 46.321 41.3919 46.2915 41.5474C46.262 41.703 46.2008 41.8508 46.1117 41.9818C44.1223 45.3467 40.4503 47.3116 36.1767 47.3116Z" fill="black"></path>
                            <path d="M44.8003 32.1385C42.672 32.039 40.6244 31.2937 38.9302 30.0017C38.8116 29.9069 38.7129 29.7898 38.6397 29.6569C38.5664 29.524 38.52 29.3779 38.5032 29.2271C38.4864 29.0763 38.4995 28.9236 38.5416 28.7779C38.5838 28.6321 38.6543 28.4961 38.749 28.3775C38.8438 28.259 38.9609 28.1603 39.0938 28.087C39.2267 28.0138 39.3728 27.9674 39.5236 27.9506C39.6744 27.9338 39.827 27.9468 39.9728 27.989C40.1186 28.0312 40.2546 28.1016 40.3732 28.1964C40.4161 28.1964 42.5898 29.928 45.0091 29.8236C47.4284 29.7192 49.3872 27.8403 49.4056 27.8218C49.6272 27.626 49.9155 27.5226 50.2111 27.5331C50.5067 27.5436 50.7869 27.6671 50.9941 27.8782C51.2012 28.0893 51.3195 28.3718 51.3244 28.6675C51.3293 28.9632 51.2205 29.2496 51.0205 29.4674C50.9161 29.5718 48.4293 31.985 45.1073 32.1262L44.8003 32.1385Z" fill="black"></path>
                            <path d="M26.4839 32.1385C24.355 32.0421 22.3064 31.2965 20.6137 30.0017C20.4952 29.9069 20.3965 29.7898 20.3232 29.6569C20.25 29.524 20.2036 29.3779 20.1868 29.2271C20.17 29.0763 20.183 28.9236 20.2252 28.7779C20.2674 28.6321 20.3378 28.4961 20.4326 28.3775C20.5273 28.259 20.6445 28.1603 20.7774 28.087C20.9103 28.0138 21.0563 27.9674 21.2071 27.9506C21.358 27.9338 21.5106 27.9468 21.6564 27.989C21.8022 28.0312 21.9382 28.1016 22.0567 28.1964C22.0936 28.1964 24.2611 29.9218 26.6927 29.8236C29.1243 29.7254 31.0708 27.8403 31.0892 27.8218C31.3108 27.626 31.5991 27.5226 31.8947 27.5331C32.1902 27.5436 32.4705 27.6671 32.6777 27.8782C32.8848 28.0893 33.0031 28.3718 33.008 28.6675C33.0129 28.9632 32.9041 29.2496 32.7041 29.4674C32.5997 29.5718 30.1129 31.985 26.791 32.1262L26.4839 32.1385Z" fill="black"></path>
                        </svg> </h1>
                     <h1 className="text-ceter text-white font-rxtrabold">MADE IN TAIWAN</h1>
                   </div>
                </div>
            </div>
        </section>




        <section className="section-table">
            <div className="container">
                <div className="table-wrap border  mt-20">

                    <div className="w-4/5 mx-auto">
                        <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        {/* Section header */}
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                                <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight  lg:text-4xl dark:text-white text-center">胃幽門螺旋桿菌感染的診斷方式比較</h2>
                                <h3></h3>
                         

                        </div>
                        </div>


                        <div className="flex flex-col">
                            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                <div className="inline-block min-w-full align-middle">
                                    <div className="overflow-hidden ">
                                        <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                            <thead className="bg-gray-800 text-gray-100 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" className="p-4">
                                                        <div className="flex items-center">

                                                            <label for="checkbox-all" className="sr-only">checkbox</label>
                                                        </div>
                                                    </th>
                                                    <th scope="col" rowSpan={2} className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        侵入式 / 非侵入式
                                                    </th>
                                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        侵入式
                                                    </th>
                                                    <th scope="col" colSpan={4} className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    {/* <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        非侵入式
                                                    </th>
                                                    <th scope="col" className="p-4">
                                                        <span className="sr-only">Edit</span>
                                                    </th> */}
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">
                                                        <div className="flex items-center">

                                                            <label for="checkbox-table-1" className="sr-only">checkbox</label>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        <Image />
                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"> </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"></td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"></td>
                                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">

                                                    </td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">檢測方法</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">內視鏡</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">糞便抗體檢測</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">血清檢測</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">13C 尿素呼吸法</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                        <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">快速尿素呼吸法-UBT</a>
                                                    </td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">
                                                        <div className="flex items-center">

                                                            <label for="checkbox-table-2" className="sr-only">樣品型態</label>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">樣品型態</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">胃部組織</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">糞便</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">血液</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">呼出氣體</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">呼出氣體</td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">檢測時間</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1-2 hr</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">⌃ 1 hr </td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">費用/NT</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">中</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">中</td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">優缺點</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不舒服</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不能評估治療前後的療效，只能判斷是否曾經感染過HP</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">準確度</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">高</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>

                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <p className="mt-5">This table component is part of a larger, open-source library of Tailwind CSS components. Learn
                            more
                            by going to the official <a className="text-blue-600 hover:underline"
                                href="#" target="_blank">Flowbite Documentation</a>.
                        </p>

                    </div>
                </div>
            </div>
        </section>
        <a href="/en/index">連結到英文版</a>
        <section className="w-full section-about border border-b-orange-700 ">
            <div className="Container items-center flex flex-col ">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        {/* Section header */}
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                            <h3 className=" text-3xl font-extrabold leading-none tracking-tight   lg:text-4xl dark:text-white text-center">兩種版本的快速BUT檢測組滿足不同用戶需求</h3>


                        </div>
                    </div>
                  

                </div>

                <main >

                    <div className={styles.gallery}>
                        {/* <a href="https://www.google.com">
                                <Double projects={[projects[0], projects[1]]} />
                            </a> */}
                        <Double projects={[projects[2], projects[3]]} reversed={true} />
                        {/* <Double projects={[projects[4], projects[5]]} />
                            <Double projects={[projects[6], projects[7]]} reversed={true} /> */}
                    </div>
                </main>

            </div>
        </section>

        <main>
             {/* <CldVideoPlayer
        id='sea-turtle'
        width='1920'
        height='1020'
        src='sea-turtle'

        
        /> */}
        </main>
       
     

    </motion.div>
    </>
);


// Product.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res = await fetch(
//         `https://my-json-server.typicode.com/bob1127/next/products/${id}`
//     );
//     const product = await res.json();
//     return { product };


// };

export default Product;
