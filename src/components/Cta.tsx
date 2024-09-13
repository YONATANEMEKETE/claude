import React from 'react';
import Wrapper from './Wrapper';
import { Button } from './ui/button';

const Cta = () => {
  return (
    <div className="py-20 bg-myaccent mt-20">
      <Wrapper className="flex flex-col gap-y-8 md:flex-row items-center justify-between px-4">
        <div className="md:basis-1/2 max-w-[600px] text-center md:text-start text-3xl lg:text-[2.5rem] lg:leading-relaxed text-white font-default font-semibold">
          Discover the full scale of{' '}
          <span className="underline underline-offset-4 decoration-myaccent2">
            Clause
          </span>{' '}
          Capablities
        </div>
        <div className="flex flex-col gap-y-5 min-[450px]:flex-row items-center gap-3">
          <Button
            variant={'default'}
            size={'lg'}
            className="bg-white hover:bg-white text-myaccent text-lg font-default font-semibold rounded-xl shadow-lg py-7"
          >
            Get a Demo
          </Button>
          <Button
            variant={'default'}
            size={'lg'}
            className="bg-myaccent2 hover:bg-myaccent2/80 text-myaccent text-lg font-default font-semibold rounded-xl shadow-lg py-7"
          >
            Start For Free
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cta;
