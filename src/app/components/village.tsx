import Image from "next/image"
import { motion } from "framer-motion"
function Village() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full sm:h-1/3 bottom-0 absolute z-20">
            <Image src='/village.png' width={1000} height={200} alt="houses" className="w-1/2 md:w-[45%] lg:w-[40%] absolute -bottom-2 md:-bottom-[10%] lg:-bottom-[15%] left-1/2 transform -translate-x-1/2" />
        </motion.div>
    )
}

export default Village
