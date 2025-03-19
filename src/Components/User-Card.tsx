
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import {Button} from "@heroui/button";
import React from "react";
import Link from 'next/link'

export default function UserCard() {
  const [isFollowed, setIsFollowed] = React.useState(true);
  const [isFollowedString, setIsFollowedString] = React.useState("Follow");

  const toggleIsFollowed = () => {
    setIsFollowed(!isFollowed);
    if(isFollowed){
      setIsFollowedString("Unfollow")
    } else {
      setIsFollowedString("Follow")
    }
  };

  return (
    <Card className="shadow-xl hidden space-y-3 group-hover:block w-full group-hover:transition-all group-hover:duration-300 w-screen md:max-w-2xl z-50 absolute top-[3.5rem] md:top-[5.8rem] left-0 md:left-12 bg-[var(--primary)] p-3 rounded-lg text-white">
      <CardHeader className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex items-center gap-5">
          <Avatar
            isBordered
            radius="full"
            size="sm"
            className="w-16 h-16 md:w-20 md:h-20"
            src={"./Portfolio.png" }
          />
          <div className="flex flex-col gap-1 items-center justify-center">
            <h4 className="text-lg md:text-2xl font-semibold leading-none text-default-600">Tariq Mehmood</h4>
            <h5 className="text-lg md:text-2xl tracking-tight text-default-400">@tariqmehmood</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "w-full md:w-fit bg-slate-800 text-white text-sm border-default-200 px-4 py-2" : "w-full md:w-fit bg-blue-800 text-white text-sm border-default-200 px-4 py-2"}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={toggleIsFollowed} >
            {isFollowedString}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-sm md:text-xl text-default-400 line-clamp-10 md:line-clamp-full">
        <p>I’m a 𝐝𝐲𝐧𝐚𝐦𝐢𝐜 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐢𝐭𝐡 𝐚 𝐟𝐥𝐚𝐢𝐫 𝐟𝐨𝐫 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬. With expertise in C#, ASP.NET, Flutter, and a 𝐬𝐨𝐥𝐢𝐝 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐃𝐚𝐭𝐚 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 using Python and R, I bring a unique blend of 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐩𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐚𝐧𝐝 𝐚𝐧 𝐞𝐲𝐞 𝐟𝐨𝐫 𝐝𝐞𝐭𝐚𝐢𝐥. As a dedicated Machine Learning enthusiast, I thrive on pushing the boundaries of technology and continually challenge myself to create impactful solutions. In addition to my technical abilities, I’m deeply committed to sharing my knowledge as 𝐚 𝐧𝐚𝐭𝐢𝐯𝐞 𝐬𝐩𝐞𝐚𝐤𝐞𝐫 𝐚𝐧𝐝 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐭𝐞𝐚𝐜𝐡𝐞𝐫, empowering others to embrace the ever-evolving field of software engineering. My commitment to transforming ideas into impactful solutions speaks volumes about my unwavering dedication to the craft.</p>
      </CardBody>
      <CardFooter className="gap-5">
        <div className="w-full flex flex-col md:flex-row gap-2">
          <Link href="https://github.com/TariqMehmood1004"
            className="md:w-fit w-full bg-slate-800 text-white text-sm md:text-xl border-default-200 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-default-400 hover:text-default-400 hover:border-default-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/tariq-mehmood-3ab013254/"
            className="md:w-fit w-full bg-slate-800 text-white text-sm md:text-xl border-default-200 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-default-400 hover:text-default-400 hover:border-default-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link href="https://www.figma.com/@tariqmehmood/"
            className="md:w-fit w-full bg-slate-800 text-white text-sm md:text-xl border-default-200 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-default-400 hover:text-default-400 hover:border-default-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Figma Community
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

