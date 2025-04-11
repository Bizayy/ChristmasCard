import Image from "next/image"
import { motion } from "framer-motion"
function SantaOnSleigh() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="w-full absolute top-1/4 sm:top-1/5 md:top-[15%] xl:top-15 z-10 animate-floating">
            <Image src='/santaSleigh.png' width={350} height={200} alt="santa" className="w-[225px] lg:w-1/4 top-10 absolute left-1/2 transform -translate-x-1/2" />
        </motion.div>
    )
}

export default SantaOnSleigh
