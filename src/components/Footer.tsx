import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { Linkedin, MessageSquare, PhoneMissed, X } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className="min-h-[400px] bg-myfooterbg pt-20 pb-10">
      <Wrapper className="flex flex-col gap-y-24 px-4">
        <div className="flex flex-col gap-y-16 md:flex-row items-start justify-between">
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
              <p className="text-white text-xl md:text-2xl  font-default font-semibold">
                Clause
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3 cursor-pointer">
                <MessageSquare className="text-white/90" />
                <p className="text-base text-white/90 font-default">
                  hello@Clause.com
                </p>
              </div>
              <div className="flex items-center gap-3 cursor-pointer">
                <PhoneMissed className="text-white/90" />
                <p className="text-base text-white/90 font-default">
                  +621987654321
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start flex-wrap justify-start gap-10 md:gap-20 lg:gap-40">
            <div className="space-y-10">
              <div className="text-lg text-white font-default font-semibold">
                Solution
              </div>
              <div className="space-y-5">
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Why cequence
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  features
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  OpenAI
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Technology
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Security
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="text-lg text-white font-default font-semibold">
                Customers
              </div>
              <div className="space-y-5">
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Procurment
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Sales
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Legal
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Medium
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Enterprize
                </p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="text-lg text-white font-default font-semibold">
                resources
              </div>
              <div className="space-y-5">
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Pricing
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Contact Sales
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Chanellog
                </p>
                <p className="text-base text-white/90 font-default cursor-pointer">
                  Blog
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white/80 font-default">
            &copy;Copyright 2024 Clause. All Rights reserved.
          </p>

          <div className="flex items-center gap-5 text-lg text-white">
            <FaTwitter className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <RiInstagramFill className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
