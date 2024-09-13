import React from 'react';
import Wrapper from './Wrapper';
import { Button } from './ui/button';

const Cta = () => {
  return (
    <div className="py-20 bg-myctabg mt-20">
      <Wrapper className="flex items-center justify-between">
        <div className="basis-1/2 text-[2.5rem] text-white font-default font-semibold">
          Discover the full scale of{' '}
          <span className="underline underline-offset-4 decoration-myaccent2">
            Clause
          </span>{' '}
          Capablities
        </div>
        <div className="flex items-center gap-3">
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
