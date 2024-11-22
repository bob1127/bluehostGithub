"use client"

import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

import img01 from "../../../public/images/brazil.webp";




let easing = [0.6, -0.05, 0.01, 0.99];


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

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Index = props => (

    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <div className='flex flex-col container center'>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className='title'>
                <h1 className="text-center">Products List</h1>
            </motion.div>
            <motion.div variants={stagger} className='product-row'>

                <Link

                    href='/en/Products/product01'
                >
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='card border border-slate-100 shadow-lg'>
                        <span className='text-5xl  font-medium category text-slate-600'>UP100</span>
                        <motion.img
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src='https://www.zensor.com.tw/images//Index-Img/Product-Img/EIWP100.webp'
                            width={250}
                        />
                        <div className='product-info'>
                            <h4></h4>
                            <span></span>
                        </div>
                    </motion.div>
                </Link>
                <Link

                    href=''
                >
                    <motion.div
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='card'>
                        <span className='category'>快速幽門螺琁桿菌尿素呼吸檢測組</span>
                        <motion.img
                            initial={{ x: 60, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src="https://www.ultraehp.com/images/Products-Detail-Img/UP100/家用版產品圖-nav.webp"

                            width={250}

                        />
                        <div className='product-info'>
                            <h4></h4>
                            <span></span>
                        </div>
                    </motion.div>
                </Link>

            </motion.div>
            <>

            </>
        </div>


        <Link href='/en/Products'>iggi</Link>
    </motion.div>


)

// Index.getInitialProps = async function () {
//     const res = await fetch(
//         "https://my-json-server.typicode.com/bob1127/next/products"
//     );
//     const data = await res.json();
//     return {
//         products: data
//     };
// };

export default Index;
