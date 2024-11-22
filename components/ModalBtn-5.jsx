import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import Image from "next/image";


const myLoader01 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com//images/Products-Detail-Img/product-01/${src}?w=${width}&q=${quality || 75}`
}
const myLoader02 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/modal/${src}?w=${width}&q=${quality || 75}`
}

export default function App() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");

    return (
        <div className=" ">

            <Button onPress={onOpen} className="h-full shadow-xl bg-white border-none w-full  rounded-2xl ">

                <div className=" flex py-8 lg:py-0  lg:flex-row flex-col justify-center items-center rounded-2xl p-[10px] w-full  ">
                    <Image loader={myLoader01}  height={300} alt='聯絡我們' className="" width={300} src='contact-icon.webp'></Image>

                    <div className="txt flex pl-[40px] flex-col justify-center items-center ">
                        <p className="font-extrabold text-gray-600  text-[30px]">Contact Us</p>
                        <b className="text-[28px] font-normal text-gray-600 mt-[20px]">聯絡我們</b>
                        <span className="opacity-0">限台灣地區</span>
                    </div>


                </div>





            </Button>



            <RadioGroup

                orientation="horizontal"
                value={modalPlacement}
                onValueChange={setModalPlacement}
            >
                {/* <Radio value="auto">auto</Radio>
                <Radio value="top">top</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="center">center</Radio>
                <Radio value="top-center">top-center</Radio>
                <Radio value="bottom-center">bottom-center</Radio> */}
            </RadioGroup>
            <Modal
                isOpen={isOpen}
                placement={modalPlacement}
                onOpenChange={onOpenChange}
                className='z-50 '
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">聯絡我們/立即購買</ModalHeader>
                            <ModalBody>
                                <iframe title='contact-forms' src="https://www.ultraehp.com/customized-iframe-tw.html" loading="lazy" className="w-[320px] md:w-[400px] h-[500px]" strategy='lazyOnload' frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>

                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
