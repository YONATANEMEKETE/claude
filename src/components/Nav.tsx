import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import logo from '../../public/logo.png';
import NavLink from './NavLink';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import useSidebar from '@/Services/SidebarStore';
import NavButtons from './NavButtons';

const Nav = () => {
  return (
    <div className="bg-mycardbg h-16 md:h-20 lg:h-24 w-full">
      <Wrapper className="h-full flex items-center justify-between px-4">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="size-10 bg-myaccent rounded-lg grid place-content-center">
              <Image
                src={logo}
                alt="logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <p className="text-myaccent text-2xl md:text-3xl  font-main font-bold">
              Clause
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              text="Solutions"
              more
              links={['Features', 'Open AI', 'Security', 'Technology']}
            />
            <NavLink
              text="Customers"
              more
              links={['Sales', 'Legal', 'Medium', 'Enterprise']}
            />
            <NavLink text="Pricing" />
          </div>
        </div>

        <NavButtons />
      </Wrapper>
    </div>
  );
};

export default Nav;
