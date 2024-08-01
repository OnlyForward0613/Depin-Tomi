"use client"
import Icon_close from "../../../../public/images/close-circle.png"
import Icon_tomi from "../../../../public/favicon.ico"
import Icon_meta from "../../../../public/images/metamask-icon 1.png"
import Icon_connect from "../../../../public/images/metamask-icon 1 (1).png"
import Icon_arrow from "../../../../public/images/Arrow_Up_Right_MD.png"

import Image from "next/image"
import { useRouter } from "next/navigation"

const ConnectWallet = () => {
    const router = useRouter();

    const nextPage = () => {
        router.push('/deposit/ServerAccess')
    }
    return(
        <>
            <div className="flex items-center bg-black lg:px-[30vw] md:px-[15vw] px-5 py-[22vh] h-screen">
                <div className="w-full bg-[#1E1E1E] rounded-xl p-5 flex flex-col gap-7 ">
                    <div className="flex flex-row flex-wrap items-center text-lg border-zinc-600 rounded-lg border-[2px] p-5 ">
                        <div className="flex-1 font-bold"><p>Connect Your Wallet</p></div>
                        <div><Image src={Icon_close} alt=""/></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row flex-wrap items-center text-lg border-zinc-600 hover:border-[#FF0083] rounded-lg border-[2px] p-7 text-left w-full" onClick={nextPage}>
                            <div className="mr-6"><Image src={Icon_tomi} alt=""/></div>
                            <div className="flex-[2]"><p>tomi Wallet</p></div>
                            <div className=""><Image src={Icon_arrow} alt=""/> </div>
                        </div>
                        <div className="flex flex-row flex-wrap items-center text-lg border-zinc-600 hover:border-[#FF0083] rounded-lg border-[2px] p-7 text-left w-full" onClick={nextPage}>
                            <div className="mr-6"><Image src={Icon_meta} alt=""/></div>
                            <div className="flex-[2]"><p>Metamask</p></div>
                            <div className=""><Image src={Icon_arrow} alt=""/> </div>
                        </div>
                        <div className="flex flex-row flex-wrap items-center text-lg border-zinc-600 hover:border-[#FF0083] rounded-lg border-[2px] p-7 text-left w-full" onClick={nextPage}>
                            <div className="mr-6"><Image src={Icon_connect} alt=""/></div>
                            <div className="flex-[2]"><p>Connect Wallet</p></div>
                            <div className=""><Image src={Icon_arrow} alt=""/> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectWallet