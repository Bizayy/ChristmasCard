import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500']
})
export const TextSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5 }}
            className="w-full flex flex-col gap-2 items-center text-center text-white text-5xl sm:text-6xl font-bold absolute top-[3%] z-10">
            <h1 className={`${dancingScript.className} top-0`}>Merry Christmas</h1>
            <p className={`w-[85%] text-center text-white text-2xl lg:text-3xl font-normal ${dancingScript.className}`}>Wishing you a joyful Christmas filled with love and laughter.
                May the New Year bring you peace, success, and endless blessings.
                Cheers to beautiful memories and new adventures ahead! 🎄✨🥂</p>
        </motion.div>
    )
}

