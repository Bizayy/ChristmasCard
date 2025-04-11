import { FaRegSnowflake } from "react-icons/fa";
function SnowflakesFall() {
    return (
        /* Snowfall */
        <div className="absolute bg-transparent w-full h-full top-0 right-0">
            <FaRegSnowflake size={30} className="absolute left-5 text-white animate-fallingIce inline-flex" style={{
                transform: "translateY(-120%) rotate(0deg)"
            }} />
            <FaRegSnowflake size={20} className="absolute left-[26%] text-white animate-fallingIce inline-flex delay-1000" style={{
                transform: "translateY(-120%) rotate(0deg)"
            }} />
            <FaRegSnowflake size={30} className="absolute left-[10%] text-white animate-fallingIce inline-flex [animation-delay:2s]" style={{
                transform: "translateY(-120%) rotate(0deg)"
            }} />
            <FaRegSnowflake size={20} className="absolute right-5 text-white animate-fallingIce inline-flex delay-300" style={{
                transform: "translateY(-120%) rotate(0deg)"
            }} />
            <FaRegSnowflake size={30} className="absolute right-[25%] text-white animate-fallingIce inline-flex [animation-delay:1.4s]" style={{
                transform: "translateY(-120%) rotate(0deg)"
            }} />
            <FaRegSnowflake size={25} className="absolute right-[20%] text-white animate-fallingIce inline-flex [animation-delay:2.4s]" style={{
                transform: "translateY(-120%) rotate(0deg)"
            }} />
        </div>
    )
}

export default SnowflakesFall
