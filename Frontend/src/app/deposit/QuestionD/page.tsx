import Icon from "../../../../public/favicon.ico"
import IconAll from "../../../../public/images/icon_all.png"
import Image from "next/image";

const QuestionD = () => {
    return (
        <>
            <div className="flex items-center w-screen h-screen px-[10vw] pt-[8vw] pb-[20vw] relative">
                <div className="flex flex-col md:gap-6 gap-16">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Image src={Icon} alt="Icon" className="md:w-10 md:h-10 w-6 h-6"></Image>
                        </div>
                        <div>
                            <p className="text-white md:text-4xl text-3xl font-bold">Node</p>
                        </div>
                    </div>
                    <div className="pl-2">
                        <p className="md:text-2xl text-lg">4. Are you interested in providing GPU supply during testnet? *</p>
                    </div>
                    <div className="flex flex-col items-start pl-7 gap-2">
                        <button className="hover:bg-[#FF0083] border-[1px] border-[#FF0083] rounded-3xl px-10 py-2 md:text-xl text-base w-[200px] text-left">Yes</button>
                        <button className="hover:bg-[#FF0083] border-[1px] border-[#FF0083] rounded-3xl px-10 py-2 md:text-xl text-base w-[200px] text-left">No</button>
                    </div>
                    <div  className="flex flex-col items-start pl-7 gap-7">
                        <button className=" rounded-3xl px-6 py-2 bg-background border-[1px] border-[#FF0083] hover:bg-[#FF0083] md:text-base text-sm ">OK</button>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[25vw]">
                    <Image alt = "" src={IconAll} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default QuestionD;