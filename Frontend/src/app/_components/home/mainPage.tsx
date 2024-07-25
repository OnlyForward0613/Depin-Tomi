import Image from "next/image";
import Icon0 from "../../../../public/favicon.ico"
import Icon1 from "../../../assets/images/icon1.png"
import Icon2 from "../../../assets/images/icon2.png"
import Icon3 from "../../../assets/images/icon3.png"
import Image11 from "../../../assets/images/image11.png"
import Image12 from "../../../assets/images/image12.png"
import Icon4 from "../../../assets/images/twitter.png"
import Icon5 from "../../../assets/images/discord.png"
import Icon6 from "../../../assets/images/telegram.png"
import Icon7 from "../../../assets/images/github.png"

const MainPage = () => {
    return(
        <>
            <div className="bg-black w-full">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-[75px] md:px-[10vw] px-3 pt-[20vh]">
                        <div className="flex flex-col text-center gap-[30px]">
                            <p className="text-[21px] md:leading-[21px] leading-[10px]">WELCOME TO TOMI NODE</p>
                            <p className="md:text-6xl text-3xl md:leading-[60px] leading-10">The World’s Premiere Decentralised</p>
                            <p className="md:text-6xl text-3xl md:leading-[60px] leading-10 font-extrabold">Compute Marketplace</p>
                            <p className="text-[18px] leading-[23.4px] uppercase px-[10vw]">tomi Node is an open network that lets users buy and sell computing resources securely and efficiently. Purpose-built for public utility.</p>
                        </div>
                        <div className="flex flex-row flex-wrap justify-between gap-[30px] h-full items-stretch">
                            <div className="flex flex-col justify-between flex-1 w-[30%] bg-zinc-900 rounded-[15px] gap-[30px] p-[30px] min-w-[200px]">
                                <div className="flex flex-col gap-[30px]">
                                    <p className="text-[20px] leading-[22px]">Explore network resources and prices</p>
                                    <p className="text-[12px] leading-[15.6px] text-[#999999]">Browse a wide range of cloud resources and live network pricing</p></div>
                                <div className="flex flex-row flex-wrap gap-[10px]">
                                    <button className="px-[20px] py-[8px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">Explore Pricing</button>
                                    <button className="px-[20px] py-[8px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">View GPU Availability</button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-1 w-[30%] bg-zinc-900 rounded-[15px] gap-[30px] p-[30px] min-w-[200px]">
                                <div className="flex flex-col gap-[30px]">
                                    <p className="text-[20px] leading-[22px]">Provide compute and earn</p>
                                    <p  className="text-[12px] leading-[15.6px] text-[#999999]">Become a tomi Node Provider by offering your hardware on the network and earn when users deploy</p></div>
                                <div className="flex flex-row">
                                    <button className="px-[20px] py-[8px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">Become a Provider</button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between flex-1 w-[30%] bg-zinc-900 rounded-[15px] gap-[30px] p-[30px] min-w-[200px]">
                                <div className="flex flex-col gap-[30px]">
                                    <p className="text-[20px] leading-[22px]">Deploy with tomi Node control.</p>
                                    <p  className="text-[12px] leading-[15.6px] text-[#999999]">Browse a wide range of cloud resources and live network pricing</p>
                                </div>
                                <div className="flex flex-row">
                                    <button className="px-[20px] py-[8px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">Explore Pricing</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-[70px] gap-3 md:px-[10vw] px-4 md:py-[10vh] pt-10">
                        <div className="text-center">
                            <p className="md:text-4xl text-2xl leading-[38.5px] uppercase">Key features of the tomi node supercloud</p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-2 h-full">
                            <div className="flex flex-col flex-1 w-[30%] min-w-[260px] gap-7 md:pt-[30px] pt-4 md:px-[30px] px-4 pb-[35px] bg-zinc-900 rounded-[10px]">
                                <div>
                                    <Image src={Icon1} alt=""/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[22px] leading-[24.2px] uppercase">Infrastructure as code</p>
                                    <p className="text-[14px] leading-[18.2px]">Ab reiciendis autem sed incidunt minima non consequatur expedita est dolorum deserunt vel aliquam necessitatibus.</p>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 w-[30%] min-w-[260px] gap-7 md:px-[30px] px-4 pt-[30px] pb-[35px] bg-zinc-900 rounded-[10px]">
                                <div>
                                    <Image src={Icon2} alt=""/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[22px] leading-[24.2px] uppercase">kubernetes powered</p>
                                    <p className="text-[14px] leading-[18.2px]">Ab reiciendis autem sed incidunt minima non consequatur expedita est dolorum deserunt vel aliquam necessitatibus.</p>
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 w-[30%] min-w-[260px] gap-7 md:px-[30px] px-4 pt-[30px] bg-zinc-900 rounded-[10px]">
                                <div>
                                    <Image src={Icon3} alt=""/>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <p className="text-[22px] leading-[24.2px] uppercase">Persistent storage</p>
                                    <p className="text-[14px] leading-[18.2px]">Ab reiciendis autem sed incidunt minima non consequatur expedita est dolorum deserunt vel aliquam necessitatibus.</p>
                                </div>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className="pr-[15px] pb-[15px] pl-[15px] md:mt-0 mt-4">
                    <div className="flex flex-col md:gap-24 gap-10 mt:pt-[80px] pt-6 md:px-[110px] px-4 md:pb-[90px] pb-4 bg-zinc-900">
                        <div className="flex flex-row gap-7 flex-wrap">
                            <div className="flex flex-[6] flex-col justify-center gap-6 min-w-[200px]">
                                <p className="md:text-4xl text-2xl">Powerful, flexible, and designed for what’s next</p>
                                <p className="md:text-xl text-sm leading-[20.8px]">Create your own sovereign compute experience with the Supercloud. Seamlessly scale and access a global array services while keeping controlling your budget 
                                    with the tomi node ‘Reverse Auction’ system. Enjoy prices up to 85% lower than other public clouds, customized to your preferences.</p>
                            </div>
                            <div className="flex flex-[4] justify-center items-center min-w-[200px]">
                                <Image src={Image12} alt="" className="w-[full] h-[full]"/>
                            </div>
                        </div>

                        <div className="flex flex-row gap-7 flex-wrap">
                            <div className="flex flex-[4] justify-center items-center min-w-[200px]">
                                <Image src={Image11} alt=""/>
                            </div>
                            <div  className="flex flex-[6] flex-col justify-center gap-6 min-w-[200px]">
                                <p className="md:text-4xl text-2xl">Powerful, flexible, and designed for what’s next</p>
                                <p className="md:text-xl text-sm leading-[20.8px]">Create your own sovereign compute experience with the Supercloud. Seamlessly scale and access a global array services while keeping controlling your budget 
                                    with the tomi node ‘Reverse Auction’ system. Enjoy prices up to 85% lower than other public clouds, customized to your preferences.</p>
                                <p  className="md:text-xl text-sm leading-[20.8px]">The tomi Node protocol prioritizes user privacy and security, allowing anonymous deployment of applications, safeguarding the user’s identity.</p>
                            </div>
                        </div>
                    </div>            
                </div>
                <div className="flex flex-col md:px-[10vw] px-3 py-[10vh] md:gap-20 gap-10">
                    <div className="flex flex-col text-center h-full">
                        <p className=" md:text-4xl text-2xl uppercase">What’s possible with tomi node?</p>
                        <p className=" md:text-xl text-sm leading-[23.4px] uppercase ">tomi Node is a  community-owned and managed. As a free public service, its source code is available to everyone. The community actively oversees all aspects</p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                        <div className="flex flex-col flex-1 h-full pt-[5px] pr-[5px] pb-[20px] pl-[5px] bg-zinc-800 gap-5 rounded-[15px]">
                            <div className="flex flex-row h-[215px] min-w-[270px] bg-black justify-center items-center rounded-[12px] gap-4">
                                <Image src={Icon0} alt="" className=" md:w-[64px] md:h-[64px] w-[32px] h-[32px]"/>
                                <p className="md:text-6xl text-3xl font-extrabold">Node</p>
                            </div>
                            <div className="flex flex-col px-[15px] gap-4">
                                <p className="md:text-[16px] text-sm leading-[17.6px]">Sit ratione exercitationem sed rerum voluptatum dolores facilis qui architecto sunt voluptas aperiam</p>
                                <p className="text-[#999999] text-[12px]">12 Feb, 2024</p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 h-full pt-[5px] pr-[5px] pb-[20px] pl-[5px] bg-zinc-800 gap-5 rounded-[15px]">
                            <div className="flex flex-row h-[215px] min-w-[270px] bg-black justify-center items-center rounded-[12px] gap-4">
                                <Image src={Icon0} alt="" className=" md:w-[64px] md:h-[64px] w-[32px] h-[32px]"/>
                                <p className="md:text-6xl text-3xl font-extrabold">Node</p>
                            </div>
                            <div className="flex flex-col px-[15px] gap-4">
                                <p className="md:text-[16px] text-sm leading-[17.6px]">Sit ratione exercitationem sed rerum voluptatum dolores facilis qui architecto sunt voluptas aperiam</p>
                                <p className="text-[#999999] text-[12px]">12 Feb, 2024</p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 h-full pt-[5px] pr-[5px] pb-[20px] pl-[5px] bg-zinc-800 gap-5 rounded-[15px]">
                            <div className="flex flex-row h-[215px] min-w-[270px] bg-black justify-center items-center rounded-[12px] gap-4">
                                <Image src={Icon0} alt="" className=" md:w-[64px] md:h-[64px] w-[32px] h-[32px]"/>
                                <p className="md:text-6xl text-3xl font-extrabold">Node</p>
                            </div>
                            <div className="flex flex-col px-[15px] gap-4">
                                <p className="md:text-[16px] text-sm leading-[17.6px]">Sit ratione exercitationem sed rerum voluptatum dolores facilis qui architecto sunt voluptas aperiam</p>
                                <p className="text-[#999999] text-[12px]">12 Feb, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:px-[10vw] px-3 md:py-[10vh] py-5 gap-10">
                    <div className="flex flex-col text-center gap-5">
                        <p  className="md:text-4xl text-2xl uppercase">Join the Community</p>
                        <p  className="md:text-xl text-sm leading-[23.4px] uppercase">tomi Node is supported by a radically open community. As a free public servic, the network source code is open-source and available to everyone.</p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                        <button className="px-[20px] py-[8px] h-[41px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">
                            <div className="flex flex-row items-center gap-2">
                                <Image src = {Icon4} alt=""/>
                                <p>Twitter</p>
                            </div>
                        </button>
                        <button className="px-[20px] py-[8px] h-[41px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">
                            <div className="flex flex-row items-center gap-2">
                                <Image src = {Icon5} alt=""/>
                                <p>Discord</p>
                            </div>
                        </button>
                        <button className="px-[20px] py-[8px] h-[41px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">
                            <div className="flex flex-row items-center gap-2">
                                <Image src = {Icon6} alt=""/>
                                <p>Telegram</p>
                            </div>
                        </button>
                        <button className="px-[20px] py-[8px] h-[41px] rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">
                            <div className="flex flex-row items-center gap-2">
                                <Image src = {Icon7} alt=""/>
                                <p>Github</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="pl-[10vw] pr-[10vw] pb-[10vh] ">
                    <div className="w-full h-[500px] relative end_Background rounded-b-[20px]">
                        <div className="border-t-[1px] border-x-[1px] border-white border-opacity-20 rounded-[20px] absolute top-[10vh] w-full h-[380px] pt-[50px] pl-[30px]">
                            <p className="text-[35px] leading-[42px]">Experience the Supercloud.</p>
                            <button className="px-[20px] py-[8px] h-[32px] mt-4 rounded-[90px] border-[#FF0083] border-[1px] text-[12px] leading-[15.6px] hover:bg-[#FF0083]">Deploy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;