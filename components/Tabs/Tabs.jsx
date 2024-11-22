import React from "react";
import { CldVideoPlayer } from 'next-cloudinary';
import { Tabs, Tab, Card, CardBody, CardFooter, CardHeader, Button } from "@nextui-org/react";
import Image from 'next/image';
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/about/${src}?w=${width}?p=${placeholder}`
}
export default function App() {
    return (
        <div>
            <div className="">


                <div>
                    <div className="img  pr-0 md:pr-[30px]">
                        <div className="txt text-center mx-auto lg:w-[80%]">
                            <p>超極生技成立于2016年，團隊基於在生物感測器領域的30年開發及量產經驗。以專利技術Potentiostrip®為平台，專注於水質檢測和體外診斷醫療器材(IVD)產品的研發及製造。于2019年推出第一個品牌蜂鳥探針(Humming Probe)-免校正微量拋棄式酸鹼pH檢測系統，解決pH計校正繁瑣和微量測量不便等問題。並於2021年再次推出第二個產品線極安簡測UltraPeace-胃幽門桿菌尿素呼氣檢測系統，可在30分鐘內以非侵入式方式快速準確檢測胃幽門螺旋桿菌，有助於醫療人員迅速診斷並制定治療方案。</p> <br />
                            <p >
                                「超極⽣技」秉持著”超越感測界線，極致健康生活”的創業初衷做為公司之理念價值與發展圭臬，期望能發展對全⼈類健康有所助益之永續事業。
                            </p><br />


                        </div>

                    </div>
                    <div className="txt">

                    </div>
                   

                </div>
               
            </div>
        </div>
    );
}
