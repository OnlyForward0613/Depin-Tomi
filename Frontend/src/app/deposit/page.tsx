"use client"

import { useRouter } from "next/navigation";
import Icon from "../../../public/favicon.ico"
import IconAll from "../../../public/images/icon_all.png"
import Image from "next/image";

const BecomeProvider = () => {
    const router = useRouter();

    const nextPage = () => {
        router.push('/deposit/ConnectWallet')
    }
    return (
        <>
            <div className="flex items-center w-screen h-screen px-[10vw] pt-[8vw] pb-[10vw] relative">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-2 items-center">
                        <div>
                            <Image src={Icon} alt="Icon" className="md:w-16 md:h-16 w-10 h-10"></Image>
                        </div>
                        <div>
                            <p className="text-white md:text-6xl text-4xl font-bold">Node</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="md:text-6xl text-4xl text-white">Become an Akash Provider</p>
                        <p className="text-lg text-[#BCBCBC]">In order to become you should have minimum 100 tomi tokens in your wallet</p>
                    </div>
                    <div>
                        <button className="bg-[#FF0083] rounded-3xl px-6 py-2 text-center" onClick={nextPage}>Connect</button>
                    </div>
                    <div>
                        <p className="text-lg text-[#BCBCBC]">Important: Selecting the GPU Sandbox option involves certain risks and shoulod be done only for experimental purposes</p>
                        <p className="text-lg text-[#BCBCBC]">Transactions and data on the GPU Sandbox are not real. Use GPU Sandbox at your own discretion.</p>
                    </div>
                    <div>
                        <select className="bg-background rounded-3xl w-[150px] py-[8px] pr-[12px] pl-[10px] border-[#4A4A4A] border-[1px] text-sm cursor-pointer text-center">
                            <option>Mainnet</option>
                        </select>
                    </div>
                </div>
                <div className="absolute right-0 bottom-0 w-[25vw]">
                    <Image alt = "" src={IconAll} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}

export default BecomeProvider;