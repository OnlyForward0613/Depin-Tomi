"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { handleSignOut } from "../auth/action"
import Image from "next/image"
import Icon from "../../../../public/favicon.ico"
import Drawer from "./Drawer"
import Menu_Icon from "../../../../public/images/menu_icon.svg"

const HeaderList = ({ user }: { user: string }) => {
  const [hash, setHash] = useState("home");
  const [visible, setVisible] = useState(true);
  const [drawerWid, setDrawerWid] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setVisible(true);// Show the drawer when the viewport is less than or equal to half the screen width
        setDrawerWid(100);
      } 
      else if(window.innerWidth > 500 && window.innerWidth <1000) {
        setVisible(true);
        setDrawerWid(40);
      }
      else {
        setVisible(false);
      }
    }
    
    window.addEventListener('resize', handleResize);
  
    // Call the handler immediately to set the initial state
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>  
      <div className="flex flex-row justify-between bg-black items-center md:px-20 px-[10vw] py-4">
        <div className="flex flex-row md:gap-4 gap-2 items-center h-full">
          <div className="md:w-8 w-5 md:h-8 h-5"><Image src={Icon} alt = ""/></div>
          <div><p className="md:text-2xl text-lg font-bold">Node</p></div>
        </div>
         <div className={`${visible ? "hidden" : "flex"} flex-row flex-1 justify-end pr-[7vw]`}>
              <Link
                href="/"
                className="px-4 py-1 w-[150px] h-[30px] text-center text-lg"
                onClick={() => setHash("Network")}
              >
                {hash === "Network" ? <b>Network</b> : "Network"}
              </Link>
              <Link
                href="#features"
                className="px-4 py-1 w-[150px] h-[30px] text-center text-lg"
                onClick={() => setHash("Development")}
              >
                {hash === "Development" ? <b>Development</b> : "Development"}
              </Link>
              <Link
                className="px-4 py-1 w-[150px] h-[30px] text-center text-lg"
                href="#pricing"
                onClick={() => setHash("Ecosystem")}
              >
                {hash === "Ecosystem" ? <b>Econsystem</b> : "Ecosystem"}
              </Link>
              <Link
                className="px-4 py-1 w-[150px] h-[30px] text-center text-lg"
                href="#pricing"
                onClick={() => setHash("GPU Pricing")}
              >
                {hash === "GPU Pricing" ? <b>GPU Pricing</b> : "GPU Pricing"}
              </Link>
            </div>
            
            <div className={`${visible ? "flex" : "hidden"} flex-row flex-1 justify-end`}>
              <button onClick={() => {
                setShowDrawer(!showDrawer)
              }}>
                <Image src={Menu_Icon} alt="" className="w-8 h-8"/>
              </button>
            </div>
            {
              showDrawer && <Drawer wid={drawerWid}/>
            }
           <div className={`${visible ? "hidden" : "block"}`}> 
            <button
                className="md:px-6 md:py-3 px-2 py-2 border rounded-3xl border-primary hover:bg-primary md:text-sm text-xs"
                // onClick={() => handleSignOut()}
              >
                Deploy Now
            </button>
          </div>
      </div>
    </>
  )
}

export default HeaderList