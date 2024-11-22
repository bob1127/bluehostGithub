import React, { useEffect } from 'react';
import gsap from 'gsap';
import Styles from './timeLine.scss'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    useEffect(() => {
        const container = document.querySelector(".container");
        const sections = gsap.utils.toArray(".container section");
        const mask = document.querySelector(".mask");

        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container",
                pin: true,
                scrub: 1,
                end: "+=3000",
                // markers: true,
            }
        });

        gsap.to(mask, {
            width: "100%",
            scrollTrigger: {
                trigger: ".wrapper",
                // start: "top left",
                scrub: 1
            }
        });

        sections.forEach((section) => {
            let text = section.querySelectorAll(".anim");

            if (text.length === 0) return;

            gsap.from(text, {
                y: -130,
                opacity: 0,
                duration: 2,
                ease: "elastic",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: section,
                    containerAnimation: scrollTween,
                    start: "left center",
                    // markers: true
                }
            });
        });
    }, []);

    return (

        <div>

               
      
        <div className="wrapper relative overflow-hidden">
            <div className="container h-[600px] flex w-[300vw]">


                    {/* <div className="title w-full flex justify-center border border-green-500">


                        <p className='text-xl font-bold my-[50px]  mx-auto'>公司里程碑：Company Milestones </p>
                    </div> */}
                <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[50%] left-[10vw] w-[50vw]">
                    <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />
                    <mask id="mask0_0_1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
                        <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_0_1)">
                        <rect className="mask" y="-49" height="99" fill="black" />
                    </g>
                </svg>





                <div>
                    
                </div>


                <section className="sec1 pin flex-shrink-0 w-[50vw] ">
                    {/* <span>公司里程碑：Company Milestones</span> */}
                    <h1 className="text-[22px] font-black">2024年：</h1>
                    <div className="col flex gap-12">
                        <p className="text-[14px]">獲得ISO13485國際醫療器材品質系統認證<br/>
                            取得四項專利，並獲得第一項美國專利
</p>
                      
                    </div>
                </section>

                <section className=" ">
                    <span className="anim">Advanced</span>
                    <h1 className="text-[22px] font-black">2023年</h1>
                    <div className="col flex gap-12">
                        <p className="text-[14px]">推出極安簡測UltraPeace-胃幽門螺旋桿菌呼氣檢測系統<br />
                            
                        </p>

                    </div>
                </section>

                <section className="sec1 pin flex-shrink-0 w-[50vw] ">
                    
                    <h1 className="text-[22px] font-black">2022年</h1>
                    <div className="col anim flex gap-12">
                        <p className="text-[14px]">
                                取得四項專利
                        </p>
                    </div>
                </section>
                <section className="sec1 pin flex-shrink-0 w-[50vw] ">

                    <h1 className="text-[22px] font-black">2021年</h1>
                    <div className="col anim flex gap-12">
                        <p className="text-[14px]">獲得ISO 9001：2015品質管理系統認證
                            取得四項專利

                        </p>
                    </div>
                </section>

                <section className="sec1 pin flex-shrink-0 w-[50vw] ">

                    <h1 className="text-[22px] font-black">2020年</h1>
                    <div className="col anim flex gap-12">
                        <p className="text-[14px]">擴展國際業務到日本、大陸、泰國、印度等國家
                            取得3項專利

                        </p>
                    </div>
                </section>

                <section className="sec1 pin flex-shrink-0 w-[50vw] ">

                    <h1 className="text-[22px] font-black">2018~2019年</h1>
                    <div className="col anim flex gap-12">
                        <p className="text-[14px]">擴展國際業務到日本、大陸、泰國、印度等國家
                            取得3項專利

                        </p>
                    </div>
                </section>

                <section className="sec1 pin flex-shrink-0 w-[50vw] ">

                    <h1 className="text-[22px] font-black">2017年</h1>
                    <div className="col anim flex gap-12">
                        <p className="text-[14px]">工廠設立並導入自動化產線
                        </p>
                    </div>
                </section>
                <section className="sec1 pin flex-shrink-0 w-[50vw] ">

                    <h1 className="text-[22px] font-black">2016年:</h1>
                    <div className="col anim flex gap-12">
                        <p className="text-[14px]">通過科技部研發成果萌芽計畫，超極生技創立
                            獲得第一項國內專利

                        </p>
                    </div>
                </section>
                
            </div>
        </div>
        </div>
    );
};

export default HorizontalScroll;
