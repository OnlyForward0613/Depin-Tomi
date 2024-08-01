
'use client'

import { useRouter } from "next/navigation";
import Icon from "../../../../public/favicon.ico"
import IconAll from "../../../../public/images/icon_all.png"
import Image from "next/image";

const QuestionE = () => {
    const router = useRouter();

    const nextPage = () => {
        router.push('/deposit')
    }
    return (
        <>
            <div className="flex h-screen px-[10vw] justify-center pt-[25vh] relative">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Image src={Icon} alt="Icon" className="md:w-10 md:h-10 w-6 h-6"></Image>
                        </div>
                        <div>
                            <p className="text-white md:text-4xl text-3xl font-bold">Node</p>
                        </div>
                    </div>
                    <div>
                        <p className="md:text-2xl text-lg">5. What is the maximum available hard disk storage for a single server?</p>
                    </div>
                    <div className="flex flex-col items-start pl-7 gap-7">
                        <p className="text-[#BCBCBC] md:text-base text-sm">Please answer in GB. eg. 2500 GB for 2.5 TB</p>
                        <input className="w-[65vw] px-9 py-4 border-b-[1px] border-zinc-600 bg-inherit" placeholder="Type your answer here..."/>
                        <button className=" rounded-3xl md:px-10 md:py-3 px-6 py-2 bg-background border-[1px] border-[#FF0083] hover:bg-[#FF0083] md:text-base text-sm " onClick={nextPage}>OK</button>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[25vw]">
                    <Image alt = "" src={IconAll} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default QuestionE;