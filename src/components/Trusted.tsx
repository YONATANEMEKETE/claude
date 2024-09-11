import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import trustedhubspot from '../../public/trustedhubspot.svg';
import trusteddropbox from '../../public/trusteddropbox.svg';
import trustedsquare from '../../public/trustedsquare.svg';
import trustedintercome from '../../public/trustedintercome.svg';
import trustedgrammerly from '../../public/trustedgrammerly.svg';

const Trusted = () => {
  return (
    <Wrapper className="py-6 px-4 flex flex-col lg:flex-row gap-10 justify-between items-center">
      <div className="max-w-[400px] lg:max-w-[200px] text-base min-[500px]:text-lg lg:text-xl text-mytext font-default font-semibold text-center lg:text-start">
        More than 100+ companies partners
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 min-[400px]:gap-6 md:gap-12">
        <Image
          src={trustedhubspot}
          alt="hubspot logo"
          width={120}
          className="h-auto"
        />
        <Image
          src={trusteddropbox}
          alt="dropbox logo"
          width={140}
          className="h-auto"
        />
        <Image
          src={trustedsquare}
          alt="square logo"
          width={40}
          className="h-auto"
        />
        <Image
          src={trustedintercome}
          alt="intercome logo"
          width={140}
          className="h-auto"
        />
        <Image
          src={trustedgrammerly}
          alt="square logo"
          width={40}
          className="h-auto"
        />
      </div>
    </Wrapper>
  );
};

export default Trusted;
