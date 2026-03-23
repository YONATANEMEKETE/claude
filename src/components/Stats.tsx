'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './animations';

const stats = [
  { value: '2021', label: 'Clause Founded' },
  { value: '50K+', label: 'Active Users' },
  { value: '1K+', label: 'Company Partners' },
];

const Stats = () => {
  return (
    <div className="max-w-[1300px] min-[1300px]:mx-auto mx-4 mt-20 bg-mycardbg rounded-2xl py-10 px-20 lg:px-52 flex flex-col md:flex-row md:h-[300px] items-center justify-between gap-y-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex items-center flex-col gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          <motion.h1
            className="text-5xl lg:text-7xl text-myfooterbg font-default font-semibold"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15 + 0.2,
              type: 'spring',
              stiffness: 100,
            }}
          >
            {stat.value}
          </motion.h1>
          <FadeIn direction="up" delay={index * 0.15 + 0.4} duration={0.5}>
            <p className="text-xl text-myaccent font-default font-semibold text-center">
              {stat.label}
            </p>
          </FadeIn>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
