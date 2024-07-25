import Icon from "../../../public/favicon.ico"
import Image from "next/image";

const BecomeProvider = () => {
    return (
        <>
            <div className="pt-[9%] pl-[15%] grid gap-[10px] mb-[10%]">
                <div className="flex flex-row gap-2 items-center">
                    <div>
                        <Image src={Icon} alt="Icon" className="w-[50px] h-[50px]"></Image>
                    </div>
                    <div>
                        <p className="text-white text-[54px] font-bold">Node</p>
                    </div>
                </div>
                <div >
                    <p className="text-[54px] text-white">Become an Akash Provider</p>
                    <p className="text-lg text-[#BCBCBC]">In order to become you should have minimum 100 tomi tokens in your wallet</p>
                </div>
                <div>
                    <button className="bg-[#FF0083] rounded-[170px] w-[125px] h-[42px] text-center">Connect</button>
                </div>
                <div>
                    <p className="text-lg text-[#BCBCBC]">Important: Selecting the GPU Sandbox option involves certain risks and shoulod be done only for experimental purposes</p>
                    <p className="text-lg text-[#BCBCBC]">Transactions and data on the GPU Sandbox are not real. Use GPU Sandbox at your own discretion.</p>
                </div>
                <div>
                    <select className="bg-black rounded-[170px] w-[149px] h-[38px] border-[#4A4A4A] border-[1px] text-sm cursor-pointer text-center">
                        <option>Mainnet</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default BecomeProvider;