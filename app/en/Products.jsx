"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import { CldVideoPlayer } from 'next-cloudinary';


import 'cloudinary-video-player/cld-video-player.min.css';


import { Table } from "@nextui-org/react";
import { useState } from "react";
import Head from "next/head";
import CarouselThumbs from "../../../../components/CarouselThumbs";
import ProductImage from "../../../../components/ProductImage";



import Carousel from "../../../../components/Products/ProductCarousel";
import Navigation from "../../../../components/Products/Navigation";

import styles from '../../../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../../../components/two-colum/data';

import Double from '../../../../components/two-colum/Double';
import ModalBrn from "../../../../components/ModalBtn"
import { Cloudinary } from "@cloudinary/url-gen";



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
            "https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/業界最小的_無線_電化學分析儀-實擬功能.webp",
        //     caption: `<div>
        //     San Francisco<br/><span>Next line</span>
        //   </div>`,
    },
    {
        image:
            "https://www.zensor.com.tw/images//Products-Detail-Img/ECWP/carousel-18.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.zensor.com.tw/images/Products-Detail-Img/GTE100/突破性的玻碳膜材質.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.zensor.com.tw/images/Products-Detail-Img/FSPE/IMG/柔性_可撓式網版印刷拋棄式電極-可彎曲性.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.zensor.com.tw/images/Products-Detail-Img/FSPE/IMG/柔性_可撓式網版印刷拋棄式電極-產品介紹.webp",
        // caption: "<div>San Francisco</div>",
    },
    {
        image:
            "https://www.zensor.com.tw/images//Products-Detail-Img/ECAS100/電化學分析儀-模擬器-防滑材質.webp",
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
const Product = props => (
    <motion.div className="dark:bg-black" initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <Navigation />
        <div className='fullscreen'>

            <div className='product px-3 md:px-10  flex-col md:flex-row border py-9'>

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
                <div className='product-details md:px-10 px-4 w-full'>
                    <motion.div variants={stagger} className='inner w-full pr-2'>
                        <Link href='../products'>
                            {/* <motion.div variants={fadeInUp}>
                                Back to products
                            </motion.div> */}
                        </Link>
                        <motion.div variants={fadeInUp}>
                            <span className=' '>Humming Probe UX200</span>
                            <Link href='../Products/product01'>CN</Link>
                        </motion.div>
                        <motion.h1 className="dark:text-white" variants={fadeInUp}>UX200｜Acid/Base Trend Detector</motion.h1>
                        <motion.p className="dark: text-slate-300 " variants={fadeInUp}>


                            <ul>
                                <li className="text-m font-normal dark:text-white"> ・pH chart</li>
                                <li className="text-m font-normal dark:text-white"> ・7.0" Color Touch Screen</li>
                                <li className="text-m font-normal dark:text-white"> ・Automatic Terminal Determination by Algorithm</li>
                                <li className="text-m font-normal dark:text-white">   ・Waterproof and dustproof grade</li>
                            </ul>






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
        <section className="w-full section-about border  ">
            <div className="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-3/4">


                    <motion.div className="card"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.3 }}
                    >

                        <motion.h2
                            className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                            variants={textAnimate}
                        > About Helicobacter pylori</motion.h2>


                    </motion.div>
                </div>
            </div>
        </section>
        <section>
            <div className="Container px-5 md:px-20">
                <div className="grid grid-cols-1">
                    <div className="row">
                        <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  mt-5 lg:text-4xl dark:text-white text-center">What's in the Box</h3>
                    </div>
                    <div className="row">
                        <img className="w-full" src="https://cdn.shopify.com/s/files/1/0569/5147/2268/files/sku_11cf0b03-96ed-499a-b4ff-8bc4f13ace87_3838x.jpg?v=1690807720" alt="" />
                    </div>

                </div>
            </div>
        </section>
        <section>
            <div className="Container px-5 md:px-20 mt-10 md:mt-20">

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="row">
                        <div className="" data-aos="fade-up" data-aos-delay="50">
                            <h3 className="mb-4 text-3xl font-medium leading-none tracking-tight text-pink-600  mt-5 lg:text-4xl dark:text-white text-left">Instant Helicobacter pylori Urea Breath Test Kit</h3>
                        </div>

                        <div className="" data-aos="fade-up" data-aos-delay="450">

                            <h4>
                                Detection Principle
                            </h4>
                        </div>
                        <div className="" data-aos="fade-up" data-aos-delay="650">
                            <p className="">When the stomach is infected with Helicobacter pylori. The orally given urea is hydrolysed by the enzyme urease of H. pylori and carbon dioxide and ammonia gas is expired in breath . By analyzing the concentration of ammonia gas expired through breath and comparing it with the baseline value before drinking urea. It can help to determine the presence of Helicobacter pylori infection.</p>
                        </div>
                     
                    </div>
                    <div className="row p-9">

                        {/* <img className="w-full rounded-2xl" src="https://ultraehp.com/ultrapeace/images/Products-Detail-Img/UP100/SG01-Camera.png" alt="" /> */}
                        <Image
                            alt="running people"

                            width={1200}
                            height={1500}
                            quality={100}

                            placeholder="empty"
                            src='/images/SG01-Camera.webp'
                            loading="lazy"


                        />

                    </div>
                </div>
            </div>
        </section>

        <CldVideoPlayer
            autoPlay="true"
            width={1080}
            height={607}
            src='https://res.cloudinary.com/drmonozsf/video/upload/v1700535393/samples/mut4mlfncdywuj8eyza2.mp4'


        />
        <section className="section_video">
            <div className="Container">
                <div className="row">

                </div>
            </div>

        </section>
        <section className="w-full section-about border  ">
            <div className="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">
                    {/* Section header */}
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">


                            <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">What is Helicobacter pylori?</h3>


                            <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal  text-left md:text-center   dark:text-gray-400">Helicobacter pylori is a type of tiny Gram-negative bacterium. It has a spiral shape and flagella, which allows it to move around in the gastric mucosa. The adhesive molecules on its surface can bind to receptors on the surface of gastric mucosal cells, helping them to attach to the gastric mucosa and avoid being washed away. These characteristics enable Helicobacter pylori to survive and colonize in the stomach environment, leading to infections and related stomach problems.</p>

                        </div>
                    </div>








                </div>



            </div>
        </section>
        <section className="w-full section-global border ">
            <div className="Container items-center flex justify-center w-full	pt-10">
                <div className="wrap flex flex-col justify-center items-center w-4/5 md:w-3/5">

                    {/* Section header */}
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                            <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Almost half of the world's population is infected with Helicobacter pylori.</h3>
                            <p className="mb-6 text-m font-normal text-gray-800 lg:text-normal text-left md:text-center   dark:text-gray-400">The primary modes of transmission for Helicobacter pylori infection are through diet and oral contact. This bacterium can be present in the saliva, oral cavity, vomit, or feces of infected individuals. It can spread through direct contact, sharing utensils, consuming contaminated food or water, and more. Additionally, infection can occur through contact with the vomit or feces of an infected person.</p>

                        </div>
                    </div>









                </div>



            </div>
        </section>
        {/* <CloVideoPlayer
            id='sea-turtle'
           width={1080}
           height={600}
           src='sample/sea-turtle'

        
        /> */}




        <section className="section-table">
            <div className="container">
                <div className="table-wrap overflow-scroll px-10 w-full border  mt-20">

                    <div className=" w-full lg:w-4/5 mx-0 md:mx-auto">
                        <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                            {/* Section header */}
                            <div className="section-title flex flex-col w-full py-10 justify-center items-center">
                                <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Comparison of diagnostic modalities for gastric Helicobacter pylori infection</h3>


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
                                                        Intrusive / Non-Invasive
                                                    </th>
                                                    <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400">
                                                        intrusive
                                                    </th>
                                                    <th scope="col" colSpan={4} className="py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-100  uppercase dark:text-gray-400">
                                                        non-intrusive
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
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Detection Methods</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Gastroscopy	</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Stool Antigen Test	</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Serologic test</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">13C Urea breath test	</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">快速尿素呼吸法-UBT</td>


                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">
                                                        <div className="flex items-center">

                                                            <label for="checkbox-table-2" className="sr-only">樣品型態</label>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">樣品型態</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">胃部組織</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">糞便</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">血液</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">呼出氣體</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">呼出氣體</td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">檢測時間</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1-2 hr</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">3-7 day</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">⌃ 1 hr </td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">費用/NT</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900  whitespace-nowrap dark:text-white">中</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">中</td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">優缺點</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不舒服</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">不能評估治療前後的療效，<br />只能判斷是否曾經感染過HP</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">可評估治療前後的療效</td>

                                                </tr>
                                                <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <td className="p-4 w-4">

                                                    </td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">準確度</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">低</td>
                                                    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">高</td>
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
                            by going to the official
                        </p>

                    </div>
                </div>
            </div>
        </section>
        <section className="w-full mt-10 md:px-20 px-5 section-about border border-b-orange-700 ">
            <div className="Container items-center flex flex-col ">
                <div className="wrap flex flex-col justify-center items-center w-full ">
                    <div className="relative flex justify-center mb-8" data-aos="fade-up" data-aos-delay="450">
                        {/* Section header */}
                        <div className="section-title flex flex-col w-full py-2 justify-center items-center">
                            <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center">Two versions of the Quick BUT Inspection Kit to meet different user needs.</h3>


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


    </motion.div>

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
