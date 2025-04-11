import Image from "next/image"
function SnowyGround() {
    return (
        <div className="w-full h-[5%] absolute bottom-0 z-20">
            <Image src='/snowGround.png' width={1000} height={100} alt="snowGround" className="w-full h-full absolute bottom-0" />
        </div>
    )
}

export default SnowyGround
