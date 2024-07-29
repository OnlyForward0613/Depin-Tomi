import Icon from "../../../../public/favicon.ico"
import IconAll from "../../../../public/images/icon_all.png"
import Image from "next/image";

const QuestionB = () => {
    let contents = ["H100", "A100", "V100", "A6000", "A5000","A4000", "A40", "A10","RTX4090", "RTX3090", "RTX3080","L40s"];
    return (
        <>
            <div className="flex items-center w-screen h-screen px-[10vw] pt-[8vw] pb-[20vw] relative">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Image src={Icon} alt="Icon" className="md:w-10 md:h-10 w-6 h-6"></Image>
                        </div>
                        <div>
                            <p className="text-white md:text-4xl text-3xl font-bold">Node</p>
                        </div>
                    </div>
                    <div className="pl-2">
                        <p className="md:text-2xl text-lg">2. Which of the GPUs do you have? *</p>
                    </div>
                    
                    <div className="flex flex-col pl-6 gap-6 md:w-[70vw] w-[80vw]">
                        <div>
                            <p className="text-[#BCBCBC] text-base">Choose as many as you like</p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-2">
                            {
                                contents.map(content=>(
                                    <button key={content} className="hover:bg-[#FF0083] border-[1px] border-[#FF0083] rounded-3xl px-10 py-2 md:text-xl text-base w-[370px] text-left">{content}</button>
                                ))    
                            }
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[25vw]">
                    <Image alt = "" src={IconAll} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default QuestionB;