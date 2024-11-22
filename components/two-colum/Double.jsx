'use client';
import styles from './two.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function Index({ projects, reversed }) {

    const firstImage = useRef(null);
    const secondImage = useRef(null);
    let requestAnimationFrameId = null;
    let xPercent = reversed ? 100 : 0;
    let currentXPercent = reversed ? 100 : 0;
    const speed = 0.15;

    const manageMouseMove = (e) => {
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;

        if (!requestAnimationFrameId) {
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        //Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed)

        //Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent = 66.66 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);
        console.log(secondImagePercent)
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`

        if (Math.round(xPercent) == Math.round(currentXPercent)) {
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else {
            window.requestAnimationFrame(animate)
        }
    }

    return (
        <div onMouseMove={(e) => { manageMouseMove(e) }} className={styles.double}>

          

            <div ref={firstImage} className={styles.imageContainer}>
                <div className={styles.body}>
                    <p>{projects[0].description}</p>

                    <h3 className='text-black dark:text-slate-2g00'>{projects[0].name}</h3>

                    <p>{projects[0].year}</p>
                    <a href="" className='border-2  border-gray-400 w-[200px] py-2 rounded-full hover:bg-gray-400 px-2'>Learn More</a>
                </div>
                <div className={styles.stretchyWrapper}>
  <Link className='w-full border border-white' href="/UltraE">
                    {/* <Image
                        loading='lazy'
                        src={`/images/${projects[0].src}`}
                        fill={true}
                        alt={"image"}
                    /> */}

                        <Image quality={100} placeholder="empty" loading="lazy" alt="running people" src='/SG01-Camera.e6e78f0d_rq2gaf.webp' width={500} height={400} className="" />

                        </Link>
                </div>
                
            </div>
        

            <div ref={secondImage} className={styles.imageContainer}>
                <div className={styles.body}>
                    <p>{projects[1].description}</p>

                    <h3 className='text-black dark:text-slate-2g00'>{projects[1].name}</h3>
                  
                    <p>{projects[1].year}</p>
                    <a href="" className='border-2  border-gray-400 w-[200px] py-2 rounded-full hover:bg-gray-500  px-2'>Learn More</a>
                </div>
                <div className={styles.stretchyWrapper}>
                    <Link className='w-full border border-white' href="/UltraE">
                    <p></p>

                        <Image quality={100} placeholder="empty" loading="lazy" alt="running people" src='/Untitled-Camera-2_unyaan.webp' width={500} height={400} className="" />
                    </Link>
                </div>
              
            </div>

        </div>
    )
}