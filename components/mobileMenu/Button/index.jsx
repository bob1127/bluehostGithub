import { motion } from 'framer-motion';
import styles from './style.module.scss';

export default function Button({ isActive, toggleMenu }) {
    return (
        <div className='flex border flex-row flex-nowrap'>

             <div className={styles.button}>
            <motion.div
                className={styles.slider}
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <div
                    className={styles.el}
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label="Buy Now" />
                   
                </div>
               
                <div
                    className={styles.el}
                    onClick={() => { toggleMenu() }}
                >
                    <PerspectiveText label="Close" />
                </div>
            </motion.div>
        </div>
            <div className='bg-pink-500 absolute flex top-[0] right-[-40px] justify-center p-5 items-center w-[40px] rounded-full h-[40px]'>
                <a href="#top" className='text-white text-xs delay-500 duration-500' >GoTop</a>
            </div>
        </div>
       
        
    )
}

function PerspectiveText({ label }) {
    return (
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}