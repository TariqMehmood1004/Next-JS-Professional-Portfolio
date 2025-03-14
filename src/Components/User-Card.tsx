
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import {Button} from "@heroui/button";
import React from "react";


export default function UserCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="shadow-xl hidden group-hover:block w-full group-hover:transition-all group-hover:duration-300 md:w-[440px] absolute top-22 left-12 bg-[var(--primary)] p-3 rounded-lg text-white">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={"./Portfolio.png" }
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Tariq Mehmood</h4>
            <h5 className="text-small tracking-tight text-default-400">@tariqmehmood</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-slate-800 text-white text-sm border-default-200 px-4 py-2" : "bg-blue-800 text-white text-sm border-default-200 px-4 py-2"}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)} >
            {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>I’m a 𝐝𝐲𝐧𝐚𝐦𝐢𝐜 𝐒𝐨𝐟𝐭𝐰𝐚𝐫𝐞 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐰𝐢𝐭𝐡 𝐚 𝐟𝐥𝐚𝐢𝐫 𝐟𝐨𝐫 𝐢𝐧𝐧𝐨𝐯𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐚 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐟𝐨𝐫 𝐜𝐮𝐭𝐭𝐢𝐧𝐠-𝐞𝐝𝐠𝐞 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬. With expertise in C#, ASP.NET, Flutter, and a 𝐬𝐨𝐥𝐢𝐝 𝐟𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧 𝐢𝐧 𝐃𝐚𝐭𝐚 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 using Python and R, I bring a unique blend of 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 𝐩𝐫𝐨𝐟𝐢𝐜𝐢𝐞𝐧𝐜𝐲 𝐚𝐧𝐝 𝐚𝐧 𝐞𝐲𝐞 𝐟𝐨𝐫 𝐝𝐞𝐭𝐚𝐢𝐥. As a dedicated Machine Learning enthusiast, I thrive on pushing the boundaries of technology and continually challenge myself to create impactful solutions. In addition to my technical abilities, I’m deeply committed to sharing my knowledge as 𝐚 𝐧𝐚𝐭𝐢𝐯𝐞 𝐬𝐩𝐞𝐚𝐤𝐞𝐫 𝐚𝐧𝐝 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐭𝐞𝐚𝐜𝐡𝐞𝐫, empowering others to embrace the ever-evolving field of software engineering. My commitment to transforming ideas into impactful solutions speaks volumes about my unwavering dedication to the craft.</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <a href="https://github.com/TariqMehmood1004"
            className="bg-slate-800 text-white text-sm border-default-200 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-default-400 hover:text-default-400 hover:border-default-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tariq-mehmood-3ab013254/"
            className="bg-slate-800 text-white text-sm border-default-200 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-default-400 hover:text-default-400 hover:border-default-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://www.figma.com/@tariqmehmood/"
            className="bg-slate-800 text-white text-sm border-default-200 px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-default-400 hover:text-default-400 hover:border-default-400"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Figma Community
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

