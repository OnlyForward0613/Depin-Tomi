"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Github from "@/assets/logos/github-icon.png"
import Card from "../_components/dashboard/card"
import Percent1 from "@/assets/logos/percent1.png"
import Percent2 from "@/assets/logos/percent2.png"
import Referral from "@/assets/logos/referral.svg"
import Wifi from "@/assets/logos/wifi.svg";
import Connected from "@/assets/logos/connected.svg";
import ClaimReward from "../_components/dashboard/claim-reward"
import ConfirmClaim from "../_components/dashboard/confirm-claim"
import AddFunds from "../_components/dashboard/add-funds"
import SuccessFunds from "../_components/dashboard/success-funds"
import AreaChart from "../_components/dashboard/area-chart"
import { Typography } from "@material-tailwind/react"

const Dashboard = () => {
  const [openReward, setOpenReward] = useState(false)
  const [openConfirmClaim, setOpenConfirmClaim] = useState(false)
  const [openAddFunds, setOpenAddFunds] = useState(false)
  const [openConfirmFunds, setOpenConfirmFunds] = useState(false)
  const [openSuccessFunds, setOpenSuccessFunds] = useState(false)
  const TABLE_HEAD = ["Name", "Job", "Employed", ""];
  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];

  return (
    <div className="flex flex-col px-24 py-20 gap-5">
      <Card className="flex w-full px-8 py-8 justify-between items-center">
        You can now connect your tomi wallet to grass on the Rewards Page. Resource usage will be tracked to your wallet address as we step into the next chapter of decentralizing the network
      </Card>
      <div className="flex w-full gap-5">
        <div className="flex flex-row gap-5 w-full">
          <div className="flex flex-col gap-4 w-[50%] justify-between">
            <Card className="flex flex-row px-8 py-8 justify-between items-center">
              <div className="flex flex-col gap-2">
                <div className="text-3xl font-bold">2.56K</div>
                <div className="text-[12px]">TOTAL POINTS</div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-[14px] text-gray-500"><span className="text-white">72K</span> TOTAL REFERRALS</div>
                <div className="border border-primary rounded-full flex flex-row justify-center gap-2 p-4 text-[12px] items-center">
                  <Image src={Referral} alt="referral"></Image>
                  <div>
                    REFERRAL LINK
                  </div>
                </div>
              </div>
            </Card>
            <Card className="flex px-8 py-8 flex-col gap-3">
              <div className="flex flex-row justify-between border-b-2 border-b-gray-600 pb-3">
                <div>Epock & Earnings</div>
                <div>21.42K</div>
              </div>
              <div className="flex flex-row justify-between">
                <div>Today's Earnings</div>
                <div>0.00</div>
              </div>
            </Card>
          </div>
          <Card className="flex px-8 py-8 flex-col w-[50%] justify-between gap-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-[22px] font-bold">
                  Your Balance
                </div>
                <div className="text-[14px]">
                  <span className="text-[#999999]">
                    Minimum Balance required ~
                  </span>
                  &nbsp;500 tomi
                </div>
              </div>
              <div className="border border-[#00FF1A] p-3 rounded-full px-6">Eligible</div>
            </div>
            <Card className="flex px-8 py-8 w-full flex-col gap-6">
              <div className="flex flex-row justify-between items-center">
                <div className="text-[#999999] text-[16px]">Balance</div>
                <div className="text-white text-[38px]">7,872.54 TOMI</div>
              </div>
              <div className="border border-primary rounded-full w-full p-4 text-center">
                Add funds to your account
              </div>
            </Card>
          </Card>
        </div>
      </div>
      <Card className="flex w-full px-8 py-8 justify-between flex-col gap-7">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <div className="text-[18px]">Connect more devices to earn more.</div>
            <div className="text-[12px] text-gray-400">You can always disconnect device in the profile tab.</div>
          </div>
          <div className="flex flex-row gap-5">
            <Image src={Wifi} alt="Wifi"></Image>
            <div className="border border-primary rounded-full flex flex-row p-3 gap-3">
              <Image src={Connected} alt="connected"></Image>
              <div>
                Connected
              </div>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded-full w-full p-1 text-center flex flex-row items-center justify-between">
          <div className="px-3">
            Device type: Grass lite node
          </div>
          <div className="bg-primary rounded-full p-3 px-6 text-white">1.00x</div>
        </div>
      </Card>
      <div className="flex w-full gap-5">
        <Card className="flex flex-col p-6 gap-8 w-1/2 py-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#999999] text-[14px]">Disk space Remaining</div>
              <div className="text-[43px]">49.5 TB</div>
            </div>
            <div className="border border-primary py-2 px-5 rounded-lg">Upgrade</div>
          </div>
          <div className="w-full bg-[#00FF1A] rounded-full h-2.5 dark:bg-gray-700 bg-opacity-10">
            <div className="bg-[#00FF1A] h-2.5 rounded-full w-[80%]"></div>
          </div>
        </Card>
        <Card className="flex flex-col p-6 gap-8 w-1/2 py-8">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <div className="text-[#999999] text-[14px]">Uptime Remaining</div>
              <div className="text-[43px]">25.6</div>
            </div>
          </div>
          <div className="w-full bg-[#00FF1A] rounded-full h-2.5 dark:bg-gray-700 bg-opacity-10">
            <div className="bg-[#00FF1A] h-2.5 rounded-full w-[80%]"></div>
          </div>
        </Card>
      </div>

      <Card className="flex w-full items-center justify-between p-8">
        <AreaChart></AreaChart>
      </Card>

      <div className="w-full gap-5">
        <Card className="p-8">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold">Your Networks</h3>
              <p className="text-sm text-secondary-foreground mt-2.5">Get Rewarded For Providing Compute Resources</p>
            </div>
            <div>
              <button className=" border-primary border rounded-lg px-2.5 py-3.5 text-sm font-semibold">View All</button>
            </div>
          </div>
          <div className="border border-border rounded-lg mt-6">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-1/6">Status</th>
                  <th className="w-1/6">Network Name</th>
                  <th className="uppercase w-1/6">IP</th>
                  <th className="uppercase w-1/6">Time Connected</th>
                  <th className="uppercase w-1/6">Network Score</th>
                  <th className="uppercase w-1/6 border-l border-border text-center">Points Earned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex flex-row items-center gap-2">
                    <div className="w-[15px] h-[15px] bg-[#00FF1A] rounded-full"></div>
                    <div>
                      connected
                    </div>
                  </td>
                  <td>97 minutes</td>
                  <td>US$ 0.00</td>
                  <td>US$ 0.00</td>
                  <td>US$ 0.00</td>
                  <td className="border-l border-border">US$ 0.39</td>
                </tr>
                <tr>
                  <td className="flex flex-row items-center gap-2">
                    <div className="w-[15px] h-[15px] bg-[#EA5757] rounded-full"></div>
                    <div>
                      disconnected
                    </div>
                  </td>
                  <td></td>
                  <td>US$ 0.00</td>
                  <td>US$ 0.00</td>
                  <td>Subtotal</td>
                  <td className="border-l border-border">US$ 0.39</td>
                </tr>
                <tr>
                  <td className="flex flex-row items-center gap-2">
                    <div className="w-[15px] h-[15px] bg-[#00FF1A] rounded-full"></div>
                    <div>
                      connected
                    </div>
                  </td>
                  <td></td>
                  <td>US$ 0.00</td>
                  <td>US$ 0.00</td>
                  <td>Provider Discount</td>
                  <td className="border-l border-border">US$ 0.39</td>
                </tr>
                <tr>
                  <td className="flex flex-row items-center gap-2">
                    <div className="w-[15px] h-[15px] bg-[#00FF1A] rounded-full"></div>
                    <div>
                      connected
                    </div>
                  </td>
                  <td></td>
                  <td>US$ 0.00</td>
                  <td>US$ 0.00</td>
                  <td>Total</td>
                  <td className="border-l border-border">US$ 0.39</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <ClaimReward open={openReward} setOpen={setOpenReward} setConfirm={setOpenConfirmClaim} />
      <ConfirmClaim open={openConfirmClaim} setOpen={setOpenConfirmClaim} />
      <AddFunds open={openAddFunds} setOpen={setOpenAddFunds} />
      <SuccessFunds open={openSuccessFunds} setOpen={setOpenSuccessFunds} />
    </div>
  )
}

export default Dashboard