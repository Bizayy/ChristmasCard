import Image from "next/image"
import { motion } from "framer-motion"
function LeftPineTrees() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-1/2 lg:w-[40%] xl:w-[45%] absolute bottom-0 -left-5 z-10 ">
            <Image src='/pineTrees.png' width={1000} height={50} alt="leftSideTrees" className="w-full invert-[5%] brightness-15 absolute left-0 bottom-0 sm:-bottom-5 md:-bottom-10 xl:-bottom-16" />
        </motion.div>
    )
}

export default LeftPineTrees
