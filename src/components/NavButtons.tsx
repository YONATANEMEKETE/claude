'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import useSidebar from '@/Services/SidebarStore';

const NavButtons = () => {
  const { OpenSidebar } = useSidebar();

  return (
    <div className="flex items-center gap-x-4">
      <Link
        href="/login"
        className="hidden lg:block px-5 py-2.5 bg-white hover:bg-gray-50 text-myaccent text-base font-default font-semibold rounded-lg shadow-lg transition-colors"
      >
        Log In
      </Link>
      <Link
        href="/signup"
        className="hidden md:block px-5 py-2.5 bg-myaccent hover:bg-myaccent/90 text-myaccent2 text-base font-main font-semibold rounded-lg shadow-lg transition-colors"
      >
        Start Now
      </Link>
      <button
        className="lg:hidden p-2 text-myaccent cursor-pointer"
        onClick={() => OpenSidebar()}
      >
        <Menu className="size-6" />
      </button>
    </div>
  );
};

export default NavButtons;
