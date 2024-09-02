'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import useSidebar from '@/Services/SidebarStore';

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div
      className={`fixed z-40 ${
        isOpen
          ? 'top-0 right-0 rounded-bl-none'
          : '-top-full -right-full rounded-bl-full'
      } lg:-top-full lg:-right-full  w-full min-h-[100vh] h-screen bg-mybg py-10 px-4 flex flex-col items-center justify-between text-center transition-all duration-700`}
    >
      <div className="flex flex-col items-center gap-12 md:gap-20">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="size-16 bg-myaccent rounded-lg grid place-content-center">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-myaccent text-5xl  font-main font-bold">Clause</p>
        </div>
        <div className="space-y-2 flex flex-col items-center gap-2">
          <div className="w-[250px] min-[500px]:w-[350px] md:w-[500px] px-2 py-2 border border-myaccent bg-transparent rounded-lg text-2xl text-myaccent font-main font-semibold cursor-pointer hover:bg-myaccent hover:text-myaccent2 transition-colors duration-200">
            Solutions
          </div>
          <div className="w-[250px] min-[500px]:w-[350px] md:w-[500px] px-2 py-2 border border-myaccent bg-transparent rounded-lg text-2xl text-myaccent font-main font-semibold cursor-pointer hover:bg-myaccent hover:text-myaccent2 transition-colors duration-200">
            Customers
          </div>
          <div className="w-[250px] min-[500px]:w-[350px] md:w-[500px] px-2 py-2 border border-myaccent bg-transparent rounded-lg text-2xl text-myaccent font-main font-semibold cursor-pointer hover:bg-myaccent hover:text-myaccent2 transition-colors duration-200">
            Pricing
          </div>
        </div>
      </div>
      <div className="w-full px-4 text-start">
        <Button
          variant={'outline'}
          size="icon"
          className={`bg-transparent hover:bg-myaccent hover:text-myaccent2 border-myaccent cursor-pointer ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => closeSidebar()}
          asChild
        >
          <X />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
