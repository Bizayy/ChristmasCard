import Image from "next/image"
import { motion } from "framer-motion"
function FrontMountain() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-1/3 sm:h-1/2 absolute bottom-0 right-0 z-30">
            <Image src='/frontMountains.png' width={1000} height={100} alt="frontMt" className="w-full h-full " />
        </motion.div>
    )
}

export default FrontMountain
