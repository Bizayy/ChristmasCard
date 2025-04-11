import Image from "next/image"
import { motion } from "framer-motion"

function RightPineTrees() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-1/2 lg:w-[45%] xl:w-[45%] absolute bottom-0 right-0 translate-x-5 z-10">
            <Image src='/pineTrees.png' width={1000} height={100} alt="rightSideTrees" className="w-full scale-x-[-1] invert-[5%] brightness-19 absolute right-0 bottom-0 sm:-bottom-5 md:-botttom-10 xl:-bottom-16" />
        </motion.div>
    )
}

export default RightPineTrees
