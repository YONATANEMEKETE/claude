'use client';

import { Quote } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations';

const Testimony = () => {
  return (
    <div className="mt-20 py-8 size-max mx-auto flex flex-col items-center gap-10">
      <FadeIn direction="down" duration={0.6}>
        <Quote size={40} className="text-myaccent" />
      </FadeIn>

      <FadeIn direction="up" delay={0.1} duration={0.8}>
        <p className="text-lg md:text-2xl lg:text-3xl text-myaccent font-default font-bold max-w-[300px] min-[450px]:max-w-[450px] md:max-w-[600px] lg:max-w-[900px] text-center leading-relaxed">
          &quot;Clause is helping our company to decrease operational expenses
          and turnaround time, while increasing the compeliance, resource
          allocations and effectivness of our contract managment.&quot;
        </p>
      </FadeIn>

      <motion.div
        className="size-max flex flex-col gap-3 items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="size-12 rounded-full bg-no-repeat bg-cover bg-[url('https://ik.imagekit.io/6qizpphtd1/Claude/129417.jpg')]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="text-center">
          <motion.h2
            className="text-xl text-myaccent font-default font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Darlene Robertson
          </motion.h2>
          <motion.p
            className="text-base text-mytext font-default font-semibold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Head of strategy at Mailchimp
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimony;
