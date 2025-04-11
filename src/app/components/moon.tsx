import Image from "next/image"
import { motion } from "framer-motion"
export const Moon = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}

            className="w-full absolute top-1/3 sm:top-1/5 lg:top-[18%] xl:top-[17%] ">
            <Image src='/moon.png' width={400} height={200} alt="moon" className="w-[300px] sm:w-[400px] lg:w-[500px] absolute left-1/2 transform -translate-x-1/2" />
        </motion.div>
    )
}

