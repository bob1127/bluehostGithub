import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.svg';
import Link from 'next/link';
import ReadMoreReact from 'read-more-react';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/product-01/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

export default function Header() {
    return (
        <div>
            <section className="px-[20px] md:px-0  flex center ">
                <div className=" container mx-auto md:px-10 lg:px-10">

                    <h1 className="mt-2  text-center text-4xl font-bold uppercase">


                    </h1>

                    <h2 id='fff' className="h2-u">  什麼時候需要使用蜂鳥探針pH檢測電極？

                    </h2>



                    <div className="  flex w-full  mt-[20px] justify-center">
                        <div className="card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:px-[50px] px-0">

                            <div className="border">
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <b className="font-bold text-[18px] text-large">生物實驗室
                                        </b>

                                        <ReadMoreReact text="培養基或者緩衝溶液的酸鹼值控制通常需要在0.1pH的範圍內調整酸鹼度。蜂鳥探針可以直接插入培養基中，精確控制及監測培養基酸鹼度。保證細胞及細菌等的培養所需的適合的環境。

"
                                            min={20}
                                            ideal={35}
                                            duration={500}
                                            max={45}
                                            readMoreText="...." />
                                      

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader02}
                                            alt="生物實驗室"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="FAQ-01.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>

                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <b className="font-bold text-[18px] text-large">戶外現場檢測</b>

                                        <ReadMoreReact text="傳統方法在監測戶外環境汙染問題，往往需要將樣品採樣至實驗室後進行檢測，直接現場檢測之方式較少採用，所需時間往往較長，無法於第一時間檢測出汙染問題。蜂鳥探針無須攜帶多種校正液體，只需攜帶檢測儀及試片電極，直接於現場檢測，快速得到檢測結果，大幅縮短檢測時程，第一時間了解汙染程度。

"
                                            min={20}
                                            ideal={35}
                                            duration={500}
                                            max={45}
                                            readMoreText="...." />

                                       

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader02}
                                            alt="戶外現場檢測"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="FAQ-02.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <b className="font-bold text-[18px] text-large">生醫檢測領域
                                        </b>

                                        <ReadMoreReact text="生醫檢測的樣品體積量通常比較微小，如:血液、尿液、組織液等，以傳統pH計檢測電極無法量測，故常以較為簡單的模式(如顯色法)進行，無法準確得到量測數據。蜂鳥探針可以在樣品體積只有1 - 20 微升時 仍可準確的量測生物反應中酸鹼值及電導度之變化。拋棄式的設計更可以避免交叉污染。蜂鳥探針系統也可以客製化方式嵌入至其他檢測產品中提供pH數值。

"
                                            min={20}
                                            ideal={35}
                                            duration={500}
                                            max={45}
                                            readMoreText="...." />
                                       

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader02}
                                            alt="生醫檢測領域"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="FAQ-03.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <b className="font-bold text-[18px] text-large">農業領域
                                        </b>
                                        <ReadMoreReact text="土壤的酸鹼度(pH值)是作物種植時重要的一步。蜂鳥探針可以直接在濕潤土壤或使用簡單水溶解介質中測試土壤的酸鹼度。協助植物生長管理或者土壤改良。

"
                                            min={20}
                                            ideal={35}
                                            duration={500}
                                            max={45}
                                            readMoreText="...." />
                                     
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            alt="農業領域"
                                            className="object-cover rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"

                                            loader={myLoader02}

                                            src="FAQ-04.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div><Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <b className="font-bold text-[18px] text-large">食品與飲料加工業
                                    </b>
                                    <ReadMoreReact text="土酸鹼值對於生產食品的製程中，會影響到成品的口味、新鮮度和保存期限。蜂鳥探針的專利離子膜及拋棄式電極的設計可以克服樣品中的成分複雜，通常需要前處理過程後才能精確測測試。提供如肉品、魚類、果醬、海鮮、牛奶、起司、優格、乳製品、醬汁、茶類等pH值的精確量測結果。
"
                                        min={20}
                                        ideal={35}
                                        duration={500}
                                        max={45}
                                        readMoreText="...." />
                                 
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loader={myLoader02}
                                        alt="食品與飲料加工業"
                                        className="object-cover rounded-xl"
                                        placeholder="empty"
                                        loading="lazy"
                                        src="FAQ-05.webp"
                                        width={500}
                                        height={300}
                                    />
                                </CardBody>
                            </Card></div>
                            <div><Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <b className="font-bold text-[18px] text-large">合成實驗室
                                    </b>
                                    <ReadMoreReact text="無論是有機，無機或是高分子合成實驗室，在控制反應條件及中間產物的管理中，會需要針對不同階段的產物進行pH酸鹼值的控制。拋棄式的蜂鳥探針可以在不同階段直接蘸取少量樣品即可獲得精確的pH值。拋棄式的設計也不用擔心雜質污染電極，或帶入污染物。
"
                                        min={20}
                                        ideal={35}
                                        duration={500}
                                        max={45}
                                        readMoreText="...." />
                                
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loader={myLoader02}
                                        placeholder="empty"
                                        loading="lazy"
                                        alt="合成實驗室"
                                        className="object-cover rounded-xl"
                                        src="FAQ-06.webp"
                                        width={500}
                                        height={300}
                                    />
                                </CardBody>
                            </Card></div>





                        </div>
                    </div>








                    {/* </motion.div> */}


                </div>



            </section>

        </div>
    );
}
