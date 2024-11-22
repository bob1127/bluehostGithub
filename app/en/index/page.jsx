export const metadata = {
    title: 'Home - Simple',
    description: 'Page description',
}

import Tooltip from "../../../components/Tooltip"

import Image from 'next/image'
import Img01 from '../../../public/images/wix.jpg'
import Img02 from '../../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../../components/Application/ApplicateCard'
import CardHover from '../../../components/CardHover'
import Cards from '../../../components/Cards/Cards'
import { properties } from "../../../constants/data";

export default async function Home() {


    return (
        <>
            <div className="outWrap overflow-hidden ">


                <Hero />
                <section className=' px-5  md:px-15 lg:px-20'>

                    <CardHover />

                </section>




                <Features />

                <ApplicateCard />
                <div className="App">
                    {/* Section header */}
                    <div className="section-title flex flex-col w-full py-10 justify-center items-center">

                    </div>
                    <div className="properties flex flex-wrap   justify-center items-center">
                        {properties.map((item) => (
                            <Cards data={item} key={item.id} />
                        ))}
                    </div>
                </div>

                <img src='../../../../public/images/wix.jpg' alt="" className='w-full' />

                <div className="relative flex justify-center mb-8 border" data-aos="zoom-y-out" data-aos-delay="450">

                    <img src="https://www.zensor.com.tw/images/wix.jpg" alt="" />


                </div>
                <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                    <img src="https://www.zensor.com.tw/images/maven.jpg" alt="" />

                    {/* <img src='https://www.zensor.com.tw/images/maven.jpg' className='w-full' alt="" /> */}

                </div>

                <FeaturesBlocks />

                <div className="section mt-20 px-10">
                    <div className="row">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                            <div className='border col-span-5 text-6xl'>THE FUTURE OF HEALTH</div>
                            <div className='border'>e</div>

                            <div className='border col-span-2 flex align-middle'>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Natus hic sequi i Culpa, aspernatur laudantium?</p>
                            </div>
                            <div className='border text-6xl col-span-2'>IS CLEAR</div>

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
                            <div className='border'>
                                <div className="top relative">
                                    <img className='width-full' src="https://www.ritualzeroproof.com/cdn/shop/files/ritual-zero-proof-ritual-aperitif-ritual-aperitif-alternative-29861815025748_590x.jpg?v=1682951409" alt="" />
                                    <div className="top-img flex absolute top-1 right-1">
                                        <div className="circle border border-black rounded-full w-6 h-6 m-1">

                                        </div>
                                        <div className="circle border border-black rounded-full w-6 h-6 m-1">

                                        </div>


                                    </div>

                                </div>
                                <div className="bottom">
                                    <div className="txt">
                                        <p>Lorem ipsum dolor sit amet consectetur<b>accusamus asperiores</b>  excepturi </p>
                                    </div>
                                    <div className="icons">

                                    </div>
                                </div>



                            </div>
                            <div className='border col-span-3 relative'>
                                <div className=" border txt  border-red-500 absolute top-5 z-40 text-right text-white rigt-0 w-full ">
                                    <span className='mr-4 '>Potentiastat</span> <p></p>
                                    <span className='border border-whites rounded-full px-3 py-1 mt-4 mr-4'>Daily Shak 50+</span>

                                </div>
                                <div className="too absolute left-1/2 top-1/2">
                                    <Tooltip />
                                </div>
                                <div className="img ">
                                    <img className='width-full' src="https://www.ritualzeroproof.com/cdn/shop/articles/Ritual_Marg_2048x.jpg?v=1655927776" alt="" />

                                </div>

                            </div>
                            <div className='border'>333</div>

                        </div>
                    </div>

                </div>

                <section>
                    <div className="Container">
                        <div className="row center">
                            <h2 className="mx-auto text-center w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sint.</h2>
                        </div>
                        <div className="row">
                            <div className="hero-img border border-black p-5 relative">
                                <div className="rightTxt">
                                    <h2 className="text-white text-5xl absolute top-10 left-2/3">OMNEST:YOUR<br></br>JOURNEY TO<br></br>MINDFULNESS</h2>
                                    {/* <p className="text-white text-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab asperiores sit aliquam ullam saepe inventore veritatis animi adipisci iure.</p> */}
                                </div>
                                <img className="width-full w-full rounded-2xl " src="https://miro.medium.com/v2/resize:fit:1000/format:webp/0*2qOQIQfFefI2PeoK.png" alt="" />
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="border border-black w-full">
                                    <span className="text-4xl">DISCOVER</span><br></br>
                                    <span className="text-4xl">MINDFULNESS</span><br></br>
                                    <span className="text-4xl">THROUGH LESSONS</span>
                                </div>
                                <div className="border border-black">
                                    dddd
                                </div>
                                <div className="border border-black">
                                    dddd
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <Testimonials />



                <Newsletter />



            </div>
        </>
    )
}
