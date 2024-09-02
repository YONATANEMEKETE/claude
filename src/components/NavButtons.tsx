'use client';

import React from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import useSidebar from '@/Services/SidebarStore';

const NavButtons = () => {
  const { OpenSidebar } = useSidebar();

  return (
    <div className="flex items-center gap-x-4">
      <Button
        variant={'default'}
        size={'lg'}
        className="hidden lg:block bg-white hover:bg-white text-myaccent text-base font-default font-semibold rounded-lg shadow-lg px-4"
      >
        Log In
      </Button>
      <Button
        variant={'default'}
        size={'lg'}
        className="hidden md:block px-4 lg:px-6 bg-myaccent hover:bg-myaccent/80 text-myaccent2 text-base font-main font-semibold rounded-lg shadow-lg"
      >
        Start Now
      </Button>
      <Button
        variant={'outline'}
        size="icon"
        className="lg:hidden bg-transparent hover:bg-transparent border-myaccent cursor-pointer"
        onClick={() => OpenSidebar()}
        asChild
      >
        <Menu />
      </Button>
    </div>
  );
};

export default NavButtons;
