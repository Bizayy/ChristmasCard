import Image from "next/image"
import { motion } from "framer-motion"
function RightMountain() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hidden sm:block w-full h-1/2 lg:h-1/2 absolute bottom-2 left-0">
            <Image src='/rightMountain.png' width={1000} height={100} alt="leftMt" className="w-full h-full absolute bottom-0 scale-x-[-1]" />
        </motion.div>
    )
}

export default RightMountain
