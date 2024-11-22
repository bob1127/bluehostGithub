import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import Image from 'next/image';
const myLoader = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
}


export default function ImageSlider() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        
        
    
     
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 670,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
      
    };
    return (
        <div className="image-slider-container">
            <Slider {...settings} className='  '>
                <div className=' px-1 h-[450px]'>
                    <a href="https://www.ultraehp.com/hummingprobe/UX100.html" aria-label="Link to product UX100"> 
                          <div className='card-item bg-white group flex flex-col justify-start items-center   '>
                            <div className=" img-wrap  h-[250px] p-[15px]">
                                <Image loader={myLoader} width={220} placeholder='empty' loading='lazy' alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX100/超極生技UltraE' height={300} src="UX100.webp" className='mx-auto' />
                            </div>
                            <div className="txt flex flex-col h-[350px] justify-start items-start px-[20px] pt-[20px]">
                                <p className='text-[16px] font-bold'>Humming Probe UX100 <br></br> 免校正酸鹼檢測儀</p>
                                <ul className='h-[100px]   '>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 4.3”彩色觸控屏幕</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 演算法自動終點判斷</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 防水防塵等級</li>
                                 
                                </ul>
                                  <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-3 md:w-[120px] text-white duration-400 rounded-full  py-1 text-center mx-auto ' href="https://www.ultraehp.com/hummingprobe/UX100.html">Product Detail</a>
                              


                            </div>
                           
                        </div>
                    </a>
                    
                  
                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="https://www.ultraehp.com/hummingprobe/UX200.html" aria-label="Link to product UX200">
                          <div className='card-item bg-white group flex flex-col justify-start items-center   '>
                            <div className=" img-wrap  h-[250px] p-[15px]">
                                <Image loader={myLoader} alt='免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX200/超極生技UltraE' width={220} placeholder='empty' loading='lazy' height={300} src="UX200.webp" className='mx-auto' />
                            </div>
                            <div className="txt flex flex-col h-[350px] justify-start items-start px-[20px] pt-[20px]">
                                <p className='text-[16px] font-bold'>Humming Probe UX200 <br></br>免校正酸鹼檢測儀</p>
                                <ul className='h-[100px]   '>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 7.0”彩色觸控屏幕</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 演算法自動終點判斷</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 防水防塵等級</li>
                                  
                                </ul>
                                <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-3 md:w-[120px] text-white duration-400 rounded-full  py-1 text-center mx-auto ' href="https://www.ultraehp.com/hummingprobe/UX200.html">Product Detail</a>

                            </div>

                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[580px]'>
                    <a href="https://www.ultraehp.com/hummingprobe/UH2.html" aria-label="Link to product UH2">
                          <div className='card-item bg-white group flex flex-col justify-start items-center   '>
                            <div className=" img-wrap  h-[250px] p-[15px]">
                                <Image loader={myLoader} width={220} placeholder='empty' loading='lazy' alt='免校正超微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH2/超極生技UltraE' height={300} src="UH2.webp" className='mx-auto' />
                            </div>
                            <div className="txt flex flex-col h-[350px] justify-start items-start px-[20px] pt-[20px]">
                                <p className='text-[16px]  font-bold'>Humming Probe UH2<br></br>免校正超微量酸鹼電極 </p>
                                <ul className='h-[100px]   '>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 即開即用，精準免校正</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 樣品使用量業界最少(1~2μL)</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 每片 試片內建溫度感測元件</li>
                                 
                                </ul>
                                  <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-3 md:w-[120px] text-white duration-400 rounded-full  py-1 text-center mx-auto ' href="https://www.ultraehp.com/hummingprobe/UH2.html">Product Detail</a>

                            </div>

                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" aria-label="Link to product UH2-GAS">
                          <div className='card-item bg-white group flex flex-col justify-start items-center   '>
                            <div className=" img-wrap  h-[250px] p-[15px]">
                                <Image loader={myLoader} alt='免校正免收集拋棄式氣體pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH2-Gas/超極生技UltraE' width={220} placeholder='empty' loading='lazy' height={300} src="UH2-Gas.webp" className='mx-auto' />
                            </div>
                            <div className="txt flex flex-col h-[350px] justify-start items-start px-[20px] pt-[20px]">
                                <p className='text-[16px] font-bold'>Humming Probe UH2-Gas<br></br>免收集氣體酸鹼電極</p>
                                <ul className='h-[100px]   '>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 即開即用 ，精準免校正</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 適用於氣體樣品</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 拋棄式電極無交叉汙染</li>
                                   
                                </ul>
                                  <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-3 md:w-[120px] text-white duration-400 rounded-full  py-1 text-center mx-auto ' href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html">Product Detail</a>

                            </div>

                        </div>
                    </a>


                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="https://www.ultraehp.com/hummingprobe/UH1.html">
                          <div className='card-item bg-white group flex flex-col justify-start items-center   '>
                            <div className=" img-wrap  h-[250px] p-[15px]">
                                <Image width={220} 
                                loader={myLoader}
                                    placeholder='empty' loading='lazy' alt='免校正微量拋棄式pH酸鹼檢測電極/蜂鳥探針的外觀/Humming Probe UH1/超極生技UltraE' height={300} src="UH1.webp" className='mx-auto' />
                            </div>
                            <div className="txt flex flex-col h-[350px] justify-start items-start px-[20px] pt-[20px]">
                                <p className='text-[16px] font-bold'>Humming Probe UH1<br></br>免校正微量酸鹼電極</p>
                                <ul className='h-[100px]   '>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 即開即用 ，精準免校正</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 樣品使用量最少(10~20μL)片</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 拋棄式電極無交叉汙染</li>
                                 
                                </ul>
                                  <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-3 md:w-[120px] text-white duration-400 rounded-full  py-1 text-center mx-auto ' href="https://www.ultraehp.com/hummingprobe/UH1.html">Product Detail</a>

                            </div>

                        </div>
                    </a>

                </div>
                <div className=' px-1 h-[520px]'>
                    <a href="https://www.ultraehp.com/hummingprobe/CS200.html">
                        <div className='card-item bg-white group flex flex-col justify-start items-center   '>
                            <div className=" img-wrap  h-[250px] p-[15px]">
                                <Image loader={myLoader} width={220} placeholder='empty' loading='lazy' alt='恆速磁石變頻攪拌器/Humming Probe 特制版CS200外觀/超極生技UltraE' height={300} src="/CS200.webp" className='mx-auto' />
                            </div>
                            <div className="txt flex flex-col h-[350px] justify-start items-start px-[20px] pt-[20px]">
                                <p className='text-[16px] font-bold'>CS200 磁石變頻攪拌器 <br></br>(Humming Probe 特制版）
</p>
                                <ul className='h-[100px]   '>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 可感測粘度自動調整的恆速磁力攪拌器</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 恆溫定時加熱系統(20 ~ 40°C)</li>
                                    <li className='mt-3 text-left text-[14px] leading-3 font-normal'>- 轉速數位控制/顯示(400 ~ 1500rpm)</li>
                                  
                                </ul>
                                  <a className='bg-orange-500 font-light text-xs px-2 w-[130px] mt-3 md:w-[120px] text-white duration-400 rounded-full  py-1 text-center mx-auto ' href="https://www.ultraehp.com/hummingprobe/CS200.html">Product Detail</a>

                            </div>

                        </div>
                    </a>

                </div>
           
               
               
            </Slider>
        </div>
    );
}
