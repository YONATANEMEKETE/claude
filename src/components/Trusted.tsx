'use client';

import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import trustedhubspot from '../../public/trustedhubspot.svg';
import trusteddropbox from '../../public/trusteddropbox.svg';
import trustedsquare from '../../public/trustedsquare.svg';
import trustedintercome from '../../public/trustedintercome.svg';
import trustedgrammerly from '../../public/trustedgrammerly.svg';
import { FadeIn } from './animations';

const Trusted = () => {
  return (
    <Wrapper className="py-6 px-4 flex flex-col lg:flex-row gap-10 justify-between items-center mb-10">
      <FadeIn direction="left" duration={0.7}>
        <div className="max-w-[400px] lg:max-w-[200px] text-base min-[500px]:text-lg lg:text-xl text-mytext font-default font-semibold text-center lg:text-start">
          More than 100+ companies partners
        </div>
      </FadeIn>

      <div className="flex flex-wrap items-center justify-between gap-2 min-[400px]:gap-6 md:gap-12">
        <FadeIn direction="up" delay={0.1} duration={0.6}>
          <Image
            src={trustedhubspot}
            alt="hubspot logo"
            width={120}
            className="h-auto"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.2} duration={0.6}>
          <Image
            src={trusteddropbox}
            alt="dropbox logo"
            width={140}
            className="h-auto"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.3} duration={0.6}>
          <Image
            src={trustedsquare}
            alt="square logo"
            width={40}
            className="h-auto"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.4} duration={0.6}>
          <Image
            src={trustedintercome}
            alt="intercome logo"
            width={140}
            className="h-auto"
          />
        </FadeIn>
        <FadeIn direction="up" delay={0.5} duration={0.6}>
          <Image
            src={trustedgrammerly}
            alt="square logo"
            width={40}
            className="h-auto"
          />
        </FadeIn>
      </div>
    </Wrapper>
  );
};

export default Trusted;
