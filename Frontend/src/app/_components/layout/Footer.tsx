import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/logo.png"
import Email from "@/assets/logos/email.png"
import Vector from "@/assets/logos/vector.png"

const Footer = () => {
  return (
    <div className="md:px-24 px-6  py-8 bg-black">
      <div className="flex justify-between flex-wrap border-b border-[#EFEFEF] pb-8">
        <div className="flex px-10 py-8 flex-[2]">
          <Image src={Logo} alt="logo" className="min-w-36 h-9" />
        </div>
        <div className="flex flex-row flex-[7] md:gap-10 gap-4 py-10 md:px-20 px-6 ">
          <div className="flex flex-col gap-2.5 mt-8 flex-1">
            <Link href="https://tomi.com/browser" className="text-sm" target="_blank">Browser</Link>
            <Link href="https://domains.tomi.com" className="text-sm" target="_blank">Domains</Link>
            <Link href="https://tomi.com/wallet" className="text-sm" target="_blank">Wallet</Link>
            <Link href="https://dao.tomi.com" className="text-sm" target="_blank">DAO</Link>
          </div>
          <div className="flex flex-col gap-2.5 mt-8 flex-1">
            <Link href="https://twitter.com/tomipioneers" className="text-sm" target="_blank">X</Link>
            <Link href="https://t.me/tomipioneers" className="text-sm" target="_blank">TG Announcement</Link>
            <Link href="https://t.me/tomi_official_chat" className="text-sm" target="_blank">TG Group</Link>
            <Link href="https://discord.com/invite/tomipioneers" className="text-sm" target="_blank">Discord</Link>
            <Link href="https://www.reddit.com/r/tomipioneers/?rdt=51853" className="text-sm" target="_blank">Reddit</Link>
            <Link href="" className="text-sm" target="_blank">Linkedin</Link>
            <Link href="https://tomiarmy.com" className="text-sm" target="_blank">tomiArmy</Link>
          </div>
          <div className="flex flex-col gap-2.5 mt-8">
            <Link href="https://tomi.com/news" className="text-sm" target="_blank">Blog</Link>
            <Link href="https://medium.com/tomipioneers" className="text-sm" target="_blank">Medium</Link>
            <Link href="https://www.youtube.com/@tomipioneers" className="text-sm" target="_blank">Youtube</Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 min-w-[30vw] relative bg-gradient-to-b from-[#FF0083] to-black md:p-12 p-4">
          <div>
            <div className="absolute bg-black top-px right-0 bottom-px left-px" />
            <div className="relative flex flex-col gap-2 z-2 p-10">
              <Link href="mailto:tomiteam@proton.me">
                <Image src={Email} alt="Email" />
              </Link>
              <h1 className="md:text-3xl text-xl font-bold mt-2">Email Us</h1>
              <p>
                Send your questions or suggestions securely via our encrypted email for
                prompt support and feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end px-2 pt-6 text-[#A5A5A5] text-sm">
        <p>&copy;2023 tomi, all rights reserved</p>
        <p>Terms of Use | Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer