'use client'

import { useRouter } from "next/navigation";
import Icon from "../../../../public/favicon.ico"
import IconAll from "../../../../public/images/icon_all.png"
import Image from "next/image";

const ServerAccess = () => {
    const router = useRouter();

    const nextPage = () => {
    router.push('/deposit/QuestionA')
    }
    return (
        <>
            <div className="flex items-center h-screen px-[10vw] py-[5vh] relative">
                <div className="flex flex-col md:gap-12 gap-4">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Image src={Icon} alt="Icon" className="md:w-10 md:h-10 w-6 h-6"></Image>
                        </div>
                        <div>
                            <p className="text-white md:text-4xl text-3xl font-bold">Node</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2">
                        <p className="sm:text-4xl text-3xl text-white">Server Access</p>
                        <p className="sm:text-lg text-sm text-[#BCBCBC]">In order to become you should have minimum 100 tomi tokens in your wallet</p>
                    </div>
                    <div className="flex flex-row flex-wrap md:gap-10 gap-6">
                        <div className="relative">
                            <div>
                                <input placeholder="Input your hostname in here" className=" sm:w-[400px] w-[200px] px-[17px] py-[12px] bg-background border-[2px] border-zinc-600 rounded-xl placeholder:text-sm"/>
                            </div>
                            <div className="md:text-lg text-sm absolute -top-3 left-4 bg-background">Host Name</div>
                        </div>
                        <div className="relative">
                            <div>
                                <input placeholder="22" className="w-[100px] px-[17px] py-[12px] bg-background border-[2px] border-zinc-600 rounded-xl  placeholder:text-sm"/>
                            </div>
                            <div className="md:text-base text-sm absolute -top-3 left-4 bg-background">Port</div>
                        </div> 
                    </div>
                    <div className="relative mr-10 mt-2">
                            <div>
                                <input placeholder="Input your username" className="md:w-[400px] w-[200px] px-[17px] py-[12px] bg-background border-[2px] border-zinc-600 rounded-xl  placeholder:text-sm"/>
                            </div>
                            <div className="md:text-base text-sm absolute -top-3 left-4 bg-background">Username</div>
                    </div>
                    <div className="relative mr-10 mt-2">
                            <select className="sm:w-[396px] w-[198px] px-[25px] py-[12px] bg-background  border-zinc-600 border-r-[20px] border-r-transparent outline-2 outline-zinc-600 outline rounded-xl  placeholder:text-sm">
                                <option>Yes</option>
                            </select>
                            <div className="md:text-base text-sm absolute -top-3 left-4 bg-background">Do you have GPU?</div>
                        </div>  
                    <div>
                        <button className="hover:bg-[#FF0083] focus:bg-[#FF0083] rounded-3xl md:px-10 md:py-4 px-6 py-2 text-center border-primary border" onClick={nextPage}>Next</button>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[25vw]">
                    <Image alt = "" src={IconAll} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default ServerAccess;