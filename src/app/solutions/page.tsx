'use client';

import React from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Trusted from '@/components/Trusted';
import Stats from '@/components/Stats';
import Cta from '@/components/Cta';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from '@/components/animations';
import {
  Grid2x2X,
  Sparkles,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';

const solutions = [
  {
    id: 'features',
    icon: Grid2x2X,
    title: 'Features',
    subtitle: 'Powerful capabilities for modern legal teams',
    description:
      'Unlock the full potential of your legal operations with our comprehensive suite of features designed to streamline contract management, automate workflows, and enhance collaboration across your organization.',
    benefits: [
      'Smart contract templates with customizable fields',
      'Real-time collaboration and version control',
      'Advanced search and filtering capabilities',
      'Automated approval workflows',
      'Comprehensive audit trails',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'open-ai',
    icon: Sparkles,
    title: 'AI-Powered Intelligence',
    subtitle: 'Harness the power of artificial intelligence',
    description:
      'Transform how you work with contracts using cutting-edge AI technology. Our intelligent features help you draft, review, and analyze contracts faster than ever before.',
    benefits: [
      'AI-powered contract drafting assistance',
      'Intelligent clause suggestions',
      'Automated risk detection and flagging',
      'Smart summarization of lengthy documents',
      'Predictive analytics for contract outcomes',
    ],
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Enterprise-Grade Security',
    subtitle: 'Your data is protected with the highest standards',
    description:
      'Rest easy knowing your sensitive legal documents are protected by industry-leading security measures. Our platform complies with global security standards.',
    benefits: [
      'End-to-end encryption for all documents',
      'SOC 2 Type II certified infrastructure',
      'Role-based access controls',
      'Two-factor authentication',
      'Regular security audits and penetration testing',
    ],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'technology',
    icon: Cpu,
    title: 'Modern Technology Stack',
    subtitle: 'Built with cutting-edge technology',
    description:
      'Experience blazing-fast performance and seamless scalability with our modern technology infrastructure. Built to handle the most demanding legal operations.',
    benefits: [
      'Cloud-native architecture for maximum uptime',
      'RESTful API for seamless integrations',
      'Real-time synchronization across devices',
      'Automatic updates and feature releases',
      '99.9% uptime SLA guarantee',
    ],
    color: 'from-orange-500 to-amber-600',
  },
];

const stats = [
  { value: '2021', label: 'Clause Founded' },
  { value: '50K+', label: 'Active Users' },
  { value: '1K+', label: 'Company Partners' },
];

export default function SolutionsPage() {
  return (
    <main className="font-default relative overflow-clip min-h-screen">
      <Nav />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pb-24">
        <div className="mx-auto size-max flex flex-col items-center gap-10 lg:gap-12">
          <FadeIn direction="down" delay={0.1} duration={0.6}>
            <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
              <Grid2x2X className="size-5 text-myaccent" />
              <p className="text-base text-myaccent font-main font-semibold">
                SOLUTIONS
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4 lg:space-y-6">
            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <div className="text-2xl min-[400px]:text-[2rem] md:text-[3rem] lg:text-[5rem] leading-snug lg:leading-[5rem] text-mytext font-main font-semibold max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
                Comprehensive{' '}
                <span className="underline underline-offset-8 decoration-myaccent2">
                  solutions
                </span>{' '}
                for modern legal teams
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.7}>
              <p className="text-sm min-[400px]:text-base md:text-lg lg:text-xl text-myaccent font-default font-medium max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
                Discover how Clause empowers legal teams to work smarter, faster,
                and more efficiently with our suite of powerful solutions.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4} duration={0.7}>
            <div className="flex flex-col min-[400px]:flex-row items-center gap-6 mx-auto text-center">
              <Button
                variant={'default'}
                size={'lg'}
                className="bg-myaccent hover:bg-myaccent/90 text-myaccent2 text-lg font-main rounded-xl shadow-lg py-8"
                asChild
              >
                <Link href="/pricing">
                  Explore Features
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant={'default'}
                size={'lg'}
                className="bg-white hover:bg-white text-myaccent text-lg font-main font-semibold rounded-xl shadow-lg py-8"
                asChild
              >
                <Link href="/pricing">Watch Demo</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Trusted />

      {/* Stats Section */}
      <div className="max-w-[1300px] min-[1300px]:mx-auto mx-4 mt-20 bg-mycardbg rounded-2xl py-10 px-20 lg:px-52 flex flex-col md:flex-row md:h-[300px] items-center justify-between gap-y-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="flex items-center flex-col gap-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl text-myfooterbg font-default font-semibold"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
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

      {/* Solutions Section */}
      <div className="bg-mybg pt-20 pb-20 space-y-20">
        <div className="mx-auto size-max flex flex-col items-center gap-6">
          <FadeIn direction="down" duration={0.6}>
            <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
              <Zap className="size-5 text-myaccent" />
              <p className="text-base text-myaccent font-main font-bold">
                WHY CHOOSE US
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="up" delay={0.1} duration={0.7}>
              <div className="text-xl min-[400px]:text-2xl md:text-[2.5rem] lg:text-[3rem] lg:leading-tight text-mytext font-main font-semibold max-w-[300px] min-[450px]:max-w-[500px] lg:max-w-[700px] text-center mx-auto">
                Everything you need to transform your legal operations
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <p className="text-xs min-[400px]:text-sm md:text-base lg:text-lg text-myaccent font-default font-medium max-w-[300px] min-[450px]:max-w-[450px] lg:max-w-[600px] text-center mx-auto">
                Our comprehensive solutions are designed to streamline your workflow
                and maximize productivity across your organization.
              </p>
            </FadeIn>
          </div>
        </div>

        {solutions.map((solution, index) => (
          <Wrapper key={solution.id} className={`px-4 ${index % 2 === 1 ? 'flex flex-col md:flex-row-reverse' : 'flex flex-col md:flex-row'} items-center gap-12`}>
            <div className="md:basis-1/2 space-y-6">
              <FadeIn direction={index % 2 === 0 ? 'left' : 'right'} duration={0.6}>
                <div className="flex items-center gap-3">
                  <div
                    className={`size-16 rounded-2xl bg-gradient-to-br ${solution.color} grid place-content-center shadow-xl`}
                  >
                    <solution.icon className="size-8 text-white" />
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1} duration={0.6}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-mytext font-main font-semibold">
                  {solution.title}
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} duration={0.6}>
                <p className="text-lg text-myaccent font-default font-semibold">
                  {solution.subtitle}
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} duration={0.6}>
                <p className="text-base text-mytext/80 font-default leading-relaxed">
                  {solution.description}
                </p>
              </FadeIn>

              <ul className="space-y-3">
                {solution.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                    }}
                  >
                    <div className="size-6 rounded-full bg-myaccent/10 grid place-content-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="size-4 text-myaccent" />
                    </div>
                    <span className="text-mytext font-default">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <FadeIn direction="up" delay={0.5} duration={0.6}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-myaccent hover:bg-myaccent/90 text-myaccent2 font-main rounded-xl shadow-lg mt-2"
                >
                  Learn More
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </FadeIn>
            </div>

            <ScaleIn delay={0.3} duration={0.7} className="md:basis-1/2">
              <div className="relative h-[420px] md:h-[480px]">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <div className={`absolute top-4 left-4 w-24 h-24 rounded-2xl bg-gradient-to-br ${solution.color} opacity-20`} />
                  <div className={`absolute bottom-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br ${solution.color} opacity-10 blur-2xl`} />
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br ${solution.color} opacity-5 blur-3xl`} />
                </div>
                
                {/* Main glass card */}
                <div className="absolute inset-4 bottom-16 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-grid-slate-100/50" />
                  
                  {/* Top bar */}
                  <div className="h-12 border-b border-slate-200/50 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                  </div>
                  
                  {/* Content area */}
                  <div className="p-6 space-y-4">
                    {/* Feature rows */}
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-slate-200/30">
                      <div className={`size-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                        <solution.icon className="size-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-16 bg-slate-100 rounded" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-slate-200/30">
                      <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        <CheckCircle className="size-5 text-myaccent" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-20 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-28 bg-slate-100 rounded" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white/60 rounded-xl border border-slate-200/30">
                      <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center">
                        <CheckCircle className="size-5 text-myaccent" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-16 bg-slate-200 rounded mb-2" />
                        <div className="h-2 w-24 bg-slate-100 rounded" />
                      </div>
                    </div>
                    
                    {/* Stats bar */}
                    <div className="flex justify-between pt-4 border-t border-slate-200/30">
                      <div className="text-center">
                        <div className={`text-xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>99%</div>
                        <div className="text-xs text-slate-500">Efficiency</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-700">50+</div>
                        <div className="text-xs text-slate-500">Integrations</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-slate-700">24/7</div>
                        <div className="text-xs text-slate-500">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent card */}
                <motion.div
                  className="absolute -right-2 bottom-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`size-8 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                      <Zap className="size-4 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-700">Powered Up</div>
                      <div className="text-[10px] text-slate-500">AI Enabled</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScaleIn>
          </Wrapper>
        ))}
      </div>

      <Cta />

      <Footer />
    </main>
  );
}
