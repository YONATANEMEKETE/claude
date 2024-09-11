import { Zap } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <main className="h-max relative pt-20 pb-10 md:pb-16 lg:pb-24">
      <div className="mx-auto size-max flex flex-col items-center gap-10 lg:gap-12">
        <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
          <Zap className="size-6" fill="myaccent" stroke="myaccent" />
          <p className="text-base text-myaccent font-main font-semibold">
            CREATE FOR FAST
          </p>
        </div>

        <div className="space-y-4 lg:space-y-6">
          <div className="text-2xl min-[400px]:text-[2rem] md:text-[3rem] lg:text-[5rem] leading-snug lg:leading-[5rem] text-mytext font-main font-semibold max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
            One tool to{' '}
            <span className="underline underline-offset-8 decoration-myaccent2">
              manage
            </span>{' '}
            contracts and your team
          </div>

          <p className="text-sm min-[400px]:text-base md:text-lg lg:text-xl text-myaccent font-default font-medium max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
            Clause helps legal teams work faster, smarter, and more efficiently.
            delivering the vissiblity and data driven insights to mitigate risks
            and ensure compliance.
          </p>
        </div>

        <div className="flex flex-col min-[400px]:flex-row items-center gap-6 mx-auto text-center">
          <Button
            variant={'default'}
            size={'lg'}
            className="bg-myaccent hover:bg-myaccent/90 text-myaccent2 text-lg font-main  rounded-xl shadow-lg py-8"
          >
            Start for Free
          </Button>
          <Button
            variant={'default'}
            size={'lg'}
            className="bg-white hover:bg-white text-myaccent text-lg font-main font-semibold rounded-xl shadow-lg py-8"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
