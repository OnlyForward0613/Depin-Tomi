import Icon from "../../../../public/favicon.ico"
import IconAll from "../../../../public/images/icon_all.png"
import Image from "next/image";

const QuestionC = () => {
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
                        <p className="md:text-2xl text-lg">3. What is the GPU configuration of your machine?</p>
                    </div>
                    <div className="flex flex-col items-start pl-7 gap-7">
                        <p className="text-[#BCBCBC] md:text-base text-sm">e.e. 4x RTX 4090 or 8x A100. Separated by commas</p>
                        <input className="w-[65vw] px-9 py-4 border-b-[1px] border-zinc-600 bg-inherit" placeholder="Type your answer here..."/>
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

export default QuestionC;