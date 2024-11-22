// export const metadata = {
//     title: 'Home - Simple',
//     description: 'Page description',
// }

"use client"
import Image from 'next/image'
import Link from "next/link";
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import img01 from "../../public/images/brazil.webp";
import { Cloudinary } from "@cloudinary/url-gen";
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


const Index = props => (

    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <motion.div className="card"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.3 }}
        >

            {/* metadata */}
            <title>隱私權條款｜超極生技-UltraE</title>
            <meta key="description" name="description" content="非常歡迎您光臨「超極生技股份有限公司網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：" />

            <link rel="alternate" href="https://www.ultraehp.com/Policy.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/Policy.html" hreflang="en" />

            <meta name="keywords" content="蜂鳥探針｜pH試片電極支架/連續pH檢測實驗使用磁力攪拌器pH測試" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/CS200.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="隱私權條款｜超極生技-UltraE" />
            <meta property="og:description" content="非常歡迎您光臨「超極生技股份有限公司網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/CS200/CS200-首圖機身1000x1000.webp" />







            <section>
                {/* <Image></Image> */}
            </section>




            <section className="mt-[200px]  flex justify-center items-center">


                <a href="https://www.ultraehp.com/"><Image loader={myLoader001} src='Ultrae-logo.png' width={90} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[135px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={60}></Image> </a>

               <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://www.ultraehp.com/en/Policy.html">
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
                                <a className="block w-full" href="https://www.ultraehp.com/en/Policy.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className="block w-full" href="https://www.ultraehp.com/Policy.html">繁體中文</a>
                            </DropdownItem>

                        </DropdownMenu>
                    </Dropdown>


                </div>
                <div className="container w-full md:w-full 2xl:w-2/3 mx-[25px] px-[20px] md:mx-[50px]  py-[100px] bg-[#01a5d3] rounded-xl   border">
                  
                        <div className=" w-full lg:w-[800px]  mx-auto ">
                            <h1 className="text-white text-[22px] md:text-[32px] text-center font-extrabold">隱私權條款</h1>
                            <h2 className="text-white text-[20px] font-normal">Policy</h2>

                            <p className="text-gray-50 text-center w-full text-[14px]">非常歡迎您光臨「超極生技股份有限公司網站」（以下簡稱本網站），為了讓您能夠安心的使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：

</p>
                        </div>
                  
                </div>
            </section>
            <section className="pb-[140px] md:pb-0 px-[15px] md:px-[30px] lg:px-[70px]">
                <div className="container mx-auto py-0 md:py-[50px]  my-[50px]  p-[15px] md:p-[50px]  ">
                    <div className="row">
                        <div className="row mt-4  font-extrabold text-[26px]">
                            一、隱私權保護政策的適用範圍

                       </div>
                       <p className="text-[16px]">
                            隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。



                       </p>
                    </div>
                    <div className="row mt-4 font-extrabold">
                        <b className=" text-[26px]">  二、個人資料的蒐集、處理及利用方式</b>
                        <ul>
                            <li className="text-[16px] font-normal">• 當您造訪本網站或使用本網站所提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</li>
                            <li className="text-[16px] font-normal">• 本網站在您使用服務信箱、問卷調查等互動性功能時，會保留您所提供的姓名、電子郵件地址、聯絡方式及使用時間等。
</li>
                            <li className="text-[16px] font-normal">• 於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的IP位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。
</li>
                            <li className="text-[16px] font-normal">• 為提供精確的服務，我們會將收集的問卷調查內容進行統計與分析，分析結果之統計數據或說明文字呈現，除供內部研究外，我們會視需要公佈統計數據及說明文字，但不涉及特定個人之資料。
</li>
                        </ul>

                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]">  三、資料之保護
</b>
                        <p className="text-[16px]"></p>
                        <ul>
                            <li className="text-[16px] font-normal">• 本網站主機均設有防火牆、防毒系統等相關的各項資訊安全設備及必要的安全防護措施，加以保護網站及您的個人資料採用嚴格的保護措施，只由經過授權的人員才能接觸您的個人資料，相關處理人員皆簽有保密合約，如有違反保密義務者，將會受到相關的法律處分。
</li>
                            <li className="text-[16px] font-normal">• 如因業務需要有必要委託其他單位提供服務時，本網站亦會嚴格要求其遵守保密義務，並且採取必要檢查程序以確定其將確實遵守。

                            </li>
                        </ul>
                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]">  四、網站對外的相關連結

                        </b>
                        <p className="text-[16px]">本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。

</p>
                      
                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 五、與第三人共用個人資料之政策

                        </b>
                        <p className="text-[16px]">本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。


                        </p>
                        <br>
                        </br>
                        <p className="font-normal">前項但書之情形包括不限於：

</p>


                        <ul>
                            <li className="text-[16px] font-normal">• 經由您書面同意。
</li>
                            <li className="text-[16px] font-normal">• 法律明文規定。

                            </li>
                            <li className="text-[16px] font-normal">• 為免除您生命、身體、自由或財產上之危險。

                            </li>
                            <li className="text-[16px] font-normal">• 與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。

                            </li>
                            <li className="text-[16px] font-normal">• 當您在網站的行為，違反服務條款或可能損害或妨礙網站與其他使用者權益或導致任何人遭受損害時，經網站管理單位研析揭露您的個人資料是為了辨識、聯絡或採取法律行動所必要者。


                            </li>
                            <li className="text-[16px] font-normal">• 有利於您的權益。


                            </li>
                            <li className="text-[16px] font-normal">• 本網站委託廠商協助蒐集、處理或利用您的個人資料時，將對委外廠商或個人善盡監督管理之責。



                            </li>
                        </ul>
                    </div>

                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 六、Cookie之使用


                        </b>
                        <p className="text-[16px]">為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行 。



                        </p>

                    </div>
                    <div className="row mt-4  font-extrabold">
                        <b className="mt-[15px] text-[26px]"> 七、隱私權保護政策之修正


                        </b>
                        <p className="text-[16px]">為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的Cookie，若您不願接受Cookie的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕Cookie的寫入，但可能會導致網站某些功能無法正常執行 。



                        </p>

                    </div>
                    
                </div>
            </section>

          


        </motion.div>

     
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
