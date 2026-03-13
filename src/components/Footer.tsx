'use client';

import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { MessageSquare, PhoneMissed } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { FadeIn } from './animations';
import Link from 'next/link';

const socialIcons = [
  { icon: FaTwitter, delay: 0.1 },
  { icon: FaLinkedinIn, delay: 0.2 },
  { icon: RiInstagramFill, delay: 0.3 },
  { icon: FaYoutube, delay: 0.4 },
];

const footerLinks = [
  {
    title: 'Solution',
    links: [
      { name: 'Why cequence', href: '/solutions#features' },
      { name: 'features', href: '/solutions#features' },
      { name: 'OpenAI', href: '/solutions#open-ai' },
      { name: 'Technology', href: '/solutions#technology' },
      { name: 'Security', href: '/solutions#security' },
    ],
  },
  {
    title: 'Customers',
    links: [
      { name: 'Procurment', href: '/customers#sales' },
      { name: 'Sales', href: '/customers#sales' },
      { name: 'Legal', href: '/customers#legal' },
      { name: 'Medium', href: '/customers#medium' },
      { name: 'Enterprize', href: '/customers#enterprise' },
    ],
  },
  {
    title: 'resources',
    links: ['Pricing', 'Contact Sales', 'Chanellog', 'Blog'],
  },
];

const Footer = () => {
  return (
    <div className="min-h-[400px] bg-myfooterbg pt-20 pb-10">
      <Wrapper className="flex flex-col gap-y-24 px-4">
        <div className="flex flex-col gap-y-16 md:flex-row items-start justify-between">
          <FadeIn direction="up" duration={0.6}>
            <div className="space-y-10">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="size-9 bg-myaccent2/40 rounded-lg grid place-content-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <p className="text-white text-xl md:text-2xl font-default font-semibold">
                  Clause
                </p>
              </div>
              <div className="space-y-5">
                <motion.div
                  className="flex items-center gap-3 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <MessageSquare className="text-white/90" />
                  <p className="text-base text-white/90 font-default">
                    hello@Clause.com
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <PhoneMissed className="text-white/90" />
                  <p className="text-base text-white/90 font-default">
                    +621987654321
                  </p>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          <div className="flex items-start flex-wrap justify-start gap-10 md:gap-20 lg:gap-40">
            {footerLinks.map((section, sectionIndex) => (
              <FadeIn
                key={section.title}
                direction="up"
                delay={0.15 + sectionIndex * 0.1}
                duration={0.6}
              >
                <div className="space-y-10">
                  <div className="text-lg text-white font-default font-semibold">
                    {section.title}
                  </div>
                  <div className="space-y-5">
                    {section.links.map((link, linkIndex) => (
                      <motion.p
                        key={typeof link === 'string' ? link : link.name}
                        className="text-base text-white/90 font-default cursor-pointer hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.15 + sectionIndex * 0.1 + linkIndex * 0.05,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        {typeof link === 'string' ? (
                          link
                        ) : (
                          <Link href={link.href} className="hover:text-white">
                            {link.name}
                          </Link>
                        )}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-white/80 font-default">
            &copy;Copyright 2024 Clause. All Rights reserved.
          </p>

          <div className="flex items-center gap-5 text-lg text-white">
            {socialIcons.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + social.delay,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <social.icon className="cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default Footer;
