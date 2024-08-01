// components/Drawer.js
import Link from 'next/link';
import React, { useState } from 'react';

const Drawer = ({wid}: any) => {
  const [isOpen, setIsOpen] = useState(true);
  const [hash, setHash] = useState("home");
  return (
    <div>
      {isOpen && (
        <div className={`flex flex-col fixed top-0 bottom-0 left-0 bg-background w-[${wid}vw] px-[10vw] py-10 gap-16 items-center justify-center z-20 fixed`}>
          <div className='flex w-full'>
            <button
                className="md:px-6 md:py-3 px-4 py-2 border rounded-3xl border-primary hover:bg-primary md:text-sm text-xs"
              >
                Deploy Now
            </button>
          </div>
          <div className='flex flex-col gap-10 w-full'>
          <Link
                href="/"
                className="py-1 w-[150px] h-[30px] md:text-xl text-base"     
                onClick={() => setHash("Network")}
              >
                {hash === "Network" ? <b>Network</b> : "Network"}
              </Link>
              <Link
                href="#features"
                className="py-1 w-[150px] h-[30px]  md:text-xl text-base"
                onClick={() => setHash("Development")}
              >
                {hash === "Development" ? <b>Development</b> : "Development"}
              </Link>
              <Link
                className="py-1 w-[150px] h-[30px] md:text-xl text-base"
                href="#pricing"
                onClick={() => setHash("Ecosystem")}
              >
                {hash === "Ecosystem" ? <b>Econsystem</b> : "Ecosystem"}
              </Link>
              <Link
                className="py-1 w-[150px] h-[30px] md:text-xl text-base"
                href="#pricing"
                onClick={() => setHash("GPU Pricing")}
              >
                {hash === "GPU Pricing" ? <b>GPU Pricing</b> : "GPU Pricing"}
              </Link>
          </div>
          <div className='flex w-full'>
            <button onClick={() => setIsOpen(false)} className='border-[1px] rounded-3xl px-4 py-2 text-sm border-[#FF0083]'>
              <div className='flex flex-row'>
                <svg
                  fill='none'
                  stroke='#fff'
                  strokeWidth={1.5}
                  style={{ width: '20px' }}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M6 18 18 6M6 6l12 12' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
                <span>Close</span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Drawer;
