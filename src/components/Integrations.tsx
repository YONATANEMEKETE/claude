'use client';

import { ArrowRight, Grid2x2X } from 'lucide-react';
import React from 'react';
import IntegrationCard from './IntegrationCard';
import int1 from '../../public/int1.svg';
import int2 from '../../public/int2.svg';
import int3 from '../../public/int3.svg';
import int4 from '../../public/int4.svg';
import int5 from '../../public/int5.svg';
import int6 from '../../public/int6.svg';
import int7 from '../../public/int7.svg';
import int8 from '../../public/int8.svg';
import int9 from '../../public/int9.svg';
import int10 from '../../public/int10.svg';
import int11 from '../../public/int11.svg';
import int12 from '../../public/int12.svg';
import int13 from '../../public/int13.svg';
import int16 from '../../public/int16.svg';
import int17 from '../../public/int17.svg';
import int18 from '../../public/int18.svg';
import int19 from '../../public/int19.svg';
import { motion } from 'framer-motion';
import { FadeIn } from './animations';

const integrations1 = [int1, int2, int3, int4, int5, int6, int7, int8, int9];
const integrations2 = [
  int7,
  int8,
  int9,
  int10,
  int11,
  int12,
  int13,
  int16,
  int17,
  int18,
  int19,
  int7,
  int8,
  int9,
];

const Integrations = () => {
  return (
    <div className="relative max-w-[1400px] min-[1400px]:mx-auto mt-28 mx-4 min-h-[100vh] bg-myfooterbg rounded-2xl overflow-clip">
      <div className="absolute z-0 inset-0 rounded-2xl">
        <div className="absolute rounded-2xl opacity-20 inset-0 z-0 bg-myaccent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="absolute rounded-2xl z-0 inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-myfooterbg to-[80%]"></div>
      </div>

      <div className="absolute z-20 inset-0 rounded-2xl pt-20">
        <div className="size-max mx-auto flex flex-col items-center gap-10 mb-12">
          <FadeIn direction="down" duration={0.6}>
            <div className="px-4 py-1 bg-myaccent border-[1px] border-mybg/30 rounded-full flex items-center gap-2">
              <Grid2x2X className="size-5 text-white" />
              <p className="text-base text-white font-main font-semibold">
                INTEGRATIONS
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4 text-center">
            <FadeIn direction="up" delay={0.1} duration={0.7}>
              <div className="text-xl min-[400px]:text-3xl lg:text-5xl text-white font-default font-semibold max-w-[300px] min-[450px]:max-w-[700px]">
                Dont Replace. Integrate.
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <p className="text-xs min-[400px]:text-sm lg:text-base text-white font-default max-w-[300px] min-[450px]:max-w-[400px] lg:max-w-[700px]">
                we understand the hussle of replacing the long used tools in your
                process. thats why we integrate tools that you use in your day to
                day life.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} duration={0.6}>
            <div className="flex items-center gap-2 underline decoration-white cursor-pointer">
              <p className="text-base text-white font-main font-semibold">
                All integration
              </p>
              <ArrowRight className="text-white" />
            </div>
          </FadeIn>
        </div>

        <div className="space-y-8 pt-6">
          <motion.div
            className="flex items-center gap-16 flex-nowrap justify-center mx-1 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {integrations1.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
              >
                <IntegrationCard logo={logo} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-16 flex-nowrap justify-center mx-1 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {integrations2.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
              >
                <IntegrationCard logo={logo} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
