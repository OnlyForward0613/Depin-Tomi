'use client'
import { useRouter } from "next/navigation";
import Icon from "../../../../public/favicon.ico"
import IconAll from "../../../../public/images/icon_all.png"
import Image from "next/image";

const QuestionA = () => {
    let contents = ["AMD", "Intel", "Qualcomm", "Apple", "Other"];
    const router = useRouter();

    const nextPage = () => {
        router.push('/deposit/QuestionB')
    }
    return (
        <>
            <div className="flex items-center h-screen px-[10vw] pt-[8vw] pb-[20vw] relative" onClick={nextPage}>
                <div className="flex flex-col md:gap-16 gap-6">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Image src={Icon} alt="Icon" className="md:w-10 md:h-10 w-6 h-6"></Image>
                        </div>
                        <div>
                            <p className="text-white md:text-4xl text-3xl font-bold">Node</p>
                        </div>
                    </div>
                    <div>
                        <p className="md:text-2xl text-lg">1. What is the CPU manufacturer of your machine? *</p>
                    </div>
                    <div className="flex flex-col gap-2 pl-6">
                        {
                            contents.map(content=>(
                                <button key={content} className="hover:bg-[#FF0083] border-[1px] border-[#FF0083] rounded-3xl px-10 py-2 md:text-xl text-base w-[200px] text-left">{content}</button>
                            ))    
                        }
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[25vw]">
                    <Image alt = "" src={IconAll} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default QuestionA;