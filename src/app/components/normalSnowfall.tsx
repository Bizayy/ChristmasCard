function NormalSnowfall() {
    return (
        /* Snowfall */
        <div className="absolute bg-transparent w-full h-full top-0 right-0">

            <div className="w-4 h-4 bg-white rounded-full absolute left-[20%] animate-normalFall delay-150"></div>
            <div className="hidden md:block w-5 h-5 bg-white rounded-full absolute left-[13%] animate-normalFall delay-1000"></div>
            <div className="w-4 h-4 bg-white rounded-full absolute left-[4%] animate-normalFall [animation-delay:2.3s]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute left-[40%] animate-normalFall delay-1000"></div>
            <div className="hidden md:block w-3 h-3 bg-white rounded-full absolute left-[45%] animate-normalFall [animation-delay:4s]"></div>
            <div className="w-5 h-5 bg-white rounded-full absolute right-[4%] animate-normalFall [animation-delay:4s]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute right-[10%] animate-normalFall [animation-delay:2.6s]"></div>
            <div className="hidden md:block w-5 h-5 bg-white rounded-full absolute right-[30%] animate-normalFall [animation-delay:2s]"></div>
            <div className="hidden md:block w-4 h-4 bg-white rounded-full absolute right-[40%] animate-normalFall [animation-delay:3.5s]"></div>
            <div className="hidden md:block w-4 h-4 bg-white rounded-full absolute right-[18%] animate-normalFall [animatio-delay:3s]"></div>
            <div className="w-3 h-3 bg-white rounded-full absolute right-[22%] animate-normalFall [animation-delay:5s]"></div>
        </div>
    )
}

export default NormalSnowfall
