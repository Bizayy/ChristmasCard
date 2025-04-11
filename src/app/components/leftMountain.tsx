import Image from "next/image"
import { motion } from "framer-motion"

function LeftMountain() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hidden sm:block w-full h-1/2 lg:h-1/2 absolute right-0 -bottom-5">
            <Image src='/leftMountain.png' width={1000} height={100} alt="rightMt" className="w-full h-full absolute bottom-0 scale-x-[-1]" />
        </motion.div>
    )
}

export default LeftMountain
