"use client";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiFacebookFill,RiTwitterFill,RiInstagramFill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-black border-none text-white">
     
          <SheetHeader>
            <SheetTitle>
              <Link href="">
                <Image src="/assets/assets/logo.png" width={160} height={40} />
              </Link>
            </SheetTitle>
            <SheetDescription className="sr-only">menu</SheetDescription>
          </SheetHeader>
             <div className="flex flex-col  items-center justify-center h-full">
          <ul className="w-full flex flex-col gap-10 justify-center items-center ">
            {links.map((link,index)=>{
              return <li key={index} className="text-white uppercase font-[500] tracking-[1.5px]"><ScrollLink to={link.path} smooth spy duration={500} className='cursor-pointer' activeClass='text-accent' onClick={() => setIsOpen(false)}>{link.name}</ScrollLink></li>
            })}
          </ul>
         {/* Right Side: Social Icons */}
                   <div className="flex items-center gap-5 mt-12">
                     <a href="#" className="hover:scale-110 flex font-medium items-center gap-1 transition">
                       <RiTwitterFill className="w-8 h-8"/> 
                     </a>
                    <a href="#" className="hover:scale-110 flex font-medium items-center gap-1 transition">
                       <RiFacebookFill className="w-8 h-7 "/> 
                     </a>
                     <a href="#" className="hover:scale-110 flex font-medium items-center gap-1 transition">
                       <RiInstagramFill className="w-8 h-7 "/> 
                     </a>
                     {/* Add more as needed */}
                   </div>

          
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
