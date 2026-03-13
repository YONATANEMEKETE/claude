'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';

interface Props {
  text: string;
  href?: string;
}

const NavLink = ({ text, href }: Props) => {
  return (
    <Link href={href || '#'} className="relative group cursor-pointer">
      <p className="text-base text-mytext font-default font-semibold hover:text-myaccent transition-colors duration-300">
        {text}
      </p>
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-myaccent"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </Link>
  );
};

export default NavLink;
