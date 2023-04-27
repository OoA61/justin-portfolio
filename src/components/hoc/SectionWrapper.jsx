import { motion } from 'framer-motion'
import {staggerContainer } from '../utils/motion'

const SectionWrapper = (Component, idName) => 
function HOC(){
    return (
        <motion.section>
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper
