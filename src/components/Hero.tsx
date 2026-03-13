'use client';

import { Zap } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import HeroAvatar from './HeroAvatar';
import { FadeIn } from './animations';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main className="h-max relative pt-20 pb-10 md:pb-16 lg:pb-24">
      <div className="mx-auto size-max flex flex-col items-center gap-10 lg:gap-12">
        <FadeIn direction="down" delay={0.1} duration={0.6}>
          <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
            <Zap className="size-6" fill="myaccent" stroke="myaccent" />
            <p className="text-base text-myaccent font-main font-semibold">
              CREATE FOR FAST
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4 lg:space-y-6">
          <FadeIn direction="up" delay={0.2} duration={0.7}>
            <div className="text-2xl min-[400px]:text-[2rem] md:text-[3rem] lg:text-[5rem] leading-snug lg:leading-[5rem] text-mytext font-main font-semibold max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
              One tool to{' '}
              <span className="underline underline-offset-8 decoration-myaccent2">
                manage
              </span>{' '}
              contracts and your team
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <p className="text-sm min-[400px]:text-base md:text-lg lg:text-xl text-myaccent font-default font-medium max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
              Clause helps legal teams work faster, smarter, and more efficiently.
              delivering the vissiblity and data driven insights to mitigate risks
              and ensure compliance.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.4} duration={0.7}>
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
        </FadeIn>
      </div>

      <motion.div
        className="absolute top-20 left-40 hidden min-[1200px]:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [-8, 0, -8] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <HeroAvatar
          position=""
          image="https://ik.imagekit.io/6qizpphtd1/Claude/34818.jpg"
          className="top-3/4 left-full rotate-180"
        />
      </motion.div>

      <motion.div
        className="absolute top-20 right-40 hidden min-[1200px]:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [-10, 0, -10] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.7 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <HeroAvatar
          position=""
          image="https://ik.imagekit.io/6qizpphtd1/Claude/5677.jpg"
          className="top-3/4 right-full -rotate-90"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-60 hidden min-[1200px]:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [-12, 0, -12] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <HeroAvatar
          position=""
          image="https://ik.imagekit.io/6qizpphtd1/Claude/129417.jpg"
          className="bottom-3/4 left-full rotate-90"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-60 hidden min-[1200px]:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [-9, 0, -9] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.9 },
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <HeroAvatar
          position=""
          image="https://ik.imagekit.io/6qizpphtd1/Claude/42003.jpg"
          className="bottom-3/4 right-full rotate-0"
        />
      </motion.div>
    </main>
  );
};

export default Hero;
