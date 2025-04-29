
"use client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import web1 from "../Images/clone/dr.png"
import web2 from "../Images/clone/hh.png"
import web3 from "../Images/clone/jk.png"
import web4 from "../Images/clone/loans.png"
import web5 from "../Images/clone/mnt.png"
export default function Try() {
  const project = [
    {id:1,img1:web1},
    {id:2,img1:web2},
    {id:3,img1:web3},
    {id:4,img1:web4},
    {id:5,img1:web5},
    // {id:6,img1:web6}
  ]
  return (
    <>
      {
        project.map((item) => {
          return (
            <>
            <CardContainer className="inter-var" key={item?.id}>
        <CardBody
          className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black   w-auto sm:w-[30rem] h-auto rounded-xl p-2   ">
          {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}
          <CardItem translateZ="100" className="w-full ">
            <img
              src={item?.img1}

              className="w-full object-cover  group-hover/card:shadow-xl"
              alt="thumbnail" />
          </CardItem>
          

        </CardBody>
      </CardContainer>
            </>
          )
        })
      }
    </>
  )
}



