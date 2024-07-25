'use client'
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logos/tomi-runner.png"
import HeaderList from "./header-list"
import { auth } from "@/utils/auth"
import { handleSignOut } from "../auth/action"
import { usePathname } from 'next/navigation';
import { useEffect } from "react"

const Header = () => {
  // const session = await auth()
  const pathname = usePathname();
  useEffect(() => {
    console.log("pathname-------> ", pathname)
  }, [pathname])

  return (
    <div className="fixed flex items-center justify-between bg-[#1010107F] px-24 py-4 w-full z-10 max-w-[1920px]">
      {/* <Link href="/">
        <Image src={Logo} alt="logo" width={128} height={24} />
      </Link> */}

      {/* <HeaderList user={session?.user?.id ?? ""} /> */}
      <HeaderList user={""} />

    </div>
  )
}

export default Header
