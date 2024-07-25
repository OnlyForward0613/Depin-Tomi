"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/tomi-runner.png"
import Arrow from "@/assets/logos/arrow.png"
import Google from "@/assets/logos/google.png"
import Github from "@/assets/logos/github-icon.png"
import WalletConnect from "@/app/_components/auth/wallet-connect"
import { handleSignIn } from "@/app/_components/auth/action"

const LogIn = () => {
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-20 mb-24 mx-auto bg-gradient-to-b from-[#FFFFFF08] to-[#78787808] border border-border px-5 py-8 w-[600px] rounded-lg">
      <Image src={Logo} alt="logo" width={128} height={24} />
      <h2 className="font-semibold text-2xl">Sign In</h2>
      <div className="flex flex-col gap-4 w-full">
        <input type="text" placeholder="Email Address" className="text-sm p-4 rounded-lg outline-none border border-input color-[#696969] bg-transparent" />
        <input type="password" placeholder="Password" className="text-sm p-4 rounded-lg outline-none border border-input color-[#696969] bg-transparent" />
      </div>
      <Link
        className="flex items-center justify-center rounded-lg bg-primary gap-2.5 w-full p-5"
        href="/dashboard"
      >
        <div className="uppercase text-sm">Sign In</div>
        <Image src={Arrow} alt="arrow" width={16} height={16} />
      </Link>
      <div className="flex items-center gap-2.5 w-full">
        <hr className="border border-secondary-foreground w-1/2" />
        <p className="text-xs text-secondary-foreground whitespace-nowrap">Or Sign in with</p>
        <hr className="border border-secondary-foreground w-1/2" />
      </div>
      <div className="flex gap-6 w-full">
        <button
          className="flex items-center justify-center gap-3 p-4 w-1/2 bg-[#333333] rounded-lg"
          onClick={() => handleSignIn("google")}
        >
          <Image src={Google} alt="google" width={24} height={24} />
          <div className="text-sm">Google</div>
        </button>
        <button
          className="flex items-center justify-center gap-3 p-4 w-1/2 bg-[#333333] rounded-lg"
          onClick={() => handleSignIn("github")}
        >
          <Image src={Github} alt="github" width={24} height={24} />
          <div className="text-sm">Github</div>
        </button>
      </div>
      <button
        className="uppercase w-full p-4 text-center border border-primary rounded-lg text-sm hover:bg-primary"
        onClick={() => setOpenModal(true)}
      >
        Web3 Wallet
      </button>
      <div className="text-xs font-black text-secondary-foreground">
        Don't have an accont, yet? <Link href="/auth/signup" className="text-primary">Sign Up</Link>
      </div>

      <WalletConnect open={openModal} setOpen={setOpenModal} />
    </div>
  )
}

export default LogIn