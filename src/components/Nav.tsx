'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.png';
import NavLink from './NavLink';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import useSidebar from '@/Services/SidebarStore';
import NavButtons from './NavButtons';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className="h-16 md:h-20 w-full max-w-[1400px] mx-auto">
      <div className="h-full w-full bg-transparent backdrop-blur-2xl rounded-full border border-white/20 px-6">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link href="/">
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="size-10 bg-myaccent rounded-lg grid place-content-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="text-myaccent text-2xl md:text-3xl font-main font-bold">
                  Clause
                </p>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <NavLink text="Solutions" href="/solutions" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <NavLink text="Customers" href="/customers" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <NavLink text="Pricing" href="/pricing" />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavButtons />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
