'use client';

import React from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Trusted from '@/components/Trusted';
import Stats from '@/components/Stats';
import Cta from '@/components/Cta';
import BgPatterns from '@/components/BgPatterns';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from '@/components/animations';
import {
  Users,
  Scale,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Target,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Wrapper from '@/components/Wrapper';

const customers = [
  {
    id: 'sales',
    icon: TrendingUp,
    title: 'Sales Teams',
    subtitle: 'Accelerate your sales cycle',
    description:
      'Empower your sales team to close deals faster with streamlined contract processes. Reduce bottlenecks, automate approvals, and get contracts signed in record time.',
    benefits: [
      'Accelerate contract creation and approval',
      'Self-service contract generation for sales reps',
      'Automated routing for legal review',
      'Real-time contract status tracking',
      'Integration with CRM systems',
    ],
    stats: [
      { value: '65%', label: 'Faster contract cycles' },
      { value: '40%', label: 'Increase in deal velocity' },
      { value: '90%', label: 'Reduction in manual errors' },
    ],
    color: 'from-blue-500 to-indigo-600',
    features: [
      { icon: Clock, title: 'Quick Turnaround', desc: 'Close deals 3x faster' },
      { icon: Target, title: 'Hit Quotas', desc: 'More time selling' },
      { icon: Award, title: 'Win More', desc: 'Competitive edge' },
    ],
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal Teams',
    subtitle: 'Work smarter, not harder',
    description:
      'Transform your legal department into a strategic business enabler. Automate routine tasks, standardize contracts, and focus on high-value work.',
    benefits: [
      'Centralized contract repository',
      'Automated contract review and redlining',
      'Compliance tracking and reporting',
      'Collaborative negotiation workspace',
      'AI-powered risk assessment',
    ],
    stats: [
      { value: '75%', label: 'Time saved on reviews' },
      { value: '50%', label: 'Fewer contract revisions' },
      { value: '99%', label: 'Compliance rate' },
    ],
    color: 'from-emerald-500 to-teal-600',
    features: [
      { icon: Shield, title: 'Stay Compliant', desc: 'Reduce legal risk' },
      { icon: Zap, title: 'Move Fast', desc: 'Automate routine work' },
      { icon: Award, title: 'Best Practice', desc: 'Industry standards' },
    ],
  },
  {
    id: 'medium',
    icon: Building2,
    title: 'Medium Business',
    subtitle: 'Scale your operations efficiently',
    description:
      'Growing businesses need scalable solutions. Clause provides the tools to manage increasing contract volumes without adding headcount.',
    benefits: [
      'Scalable infrastructure that grows with you',
      'Customizable workflows for your processes',
      'Team collaboration tools',
      'Affordable pricing for growing teams',
      'Dedicated customer success support',
    ],
    stats: [
      { value: '3x', label: 'Contract volume capacity' },
      { value: '60%', label: 'Cost savings' },
      { value: '24/7', label: 'Support availability' },
    ],
    color: 'from-violet-500 to-purple-600',
    features: [
      { icon: TrendingUp, title: 'Scale Up', desc: 'Grow without limits' },
      { icon: Clock, title: 'Save Time', desc: 'Automate processes' },
      { icon: Target, title: 'Stay Focused', desc: 'Core business first' },
    ],
  },
  {
    id: 'enterprise',
    icon: Briefcase,
    title: 'Enterprise',
    subtitle: 'Enterprise-grade solutions',
    description:
      'Meet the complex demands of large organizations with enterprise-grade features. Advanced security, custom integrations, and unlimited scalability.',
    benefits: [
      'Advanced security and compliance certifications',
      'Custom integrations with existing systems',
      'Dedicated account manager',
      'Unlimited users and contracts',
      'Custom training and onboarding',
    ],
    stats: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '100+', label: 'Enterprise integrations' },
      { value: '500+', label: 'Global enterprises' },
    ],
    color: 'from-orange-500 to-amber-600',
    features: [
      {
        icon: Shield,
        title: 'Enterprise Security',
        desc: 'Bank-level protection',
      },
      { icon: Zap, title: 'Lightning Fast', desc: 'Global CDN' },
      { icon: Award, title: 'Premium Support', desc: 'Dedicated team' },
    ],
  },
];

const stats = [
  { value: '2021', label: 'Clause Founded' },
  { value: '50K+', label: 'Active Users' },
  { value: '1K+', label: 'Company Partners' },
];

export default function CustomersPage() {
  return (
    <main className="font-default relative overflow-clip min-h-screen">
      <Nav />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pb-24">
        <div className="mx-auto size-max flex flex-col items-center gap-10 lg:gap-12">
          <FadeIn direction="down" delay={0.1} duration={0.6}>
            <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
              <Users className="size-5 text-myaccent" />
              <p className="text-base text-myaccent font-main font-semibold">
                CUSTOMERS
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4 lg:space-y-6">
            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <div className="text-2xl min-[400px]:text-[2rem] md:text-[3rem] lg:text-[5rem] leading-snug lg:leading-[5rem] text-mytext font-main font-semibold max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
                Built for teams{' '}
                <span className="underline underline-offset-8 decoration-myaccent2">
                  of all sizes
                </span>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.7}>
              <p className="text-sm min-[400px]:text-base md:text-lg lg:text-xl text-myaccent font-default font-medium max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
                From startups to Fortune 500 companies, Clause adapts to your
                needs and helps you achieve more with less effort.
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
                  Get Started Free
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                variant={'default'}
                size={'lg'}
                className="bg-white hover:bg-white text-myaccent text-lg font-main font-semibold rounded-xl shadow-lg py-8"
                asChild
              >
                <Link href="/pricing">Talk to Sales</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <BgPatterns />

      <Trusted />

      {/* Stats Section */}
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

      {/* Customers Section */}
      <div className="bg-mybg pt-20 pb-20 space-y-20">
        <div className="mx-auto size-max flex flex-col items-center gap-6">
          <FadeIn direction="down" duration={0.6}>
            <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
              <Zap className="size-5 text-myaccent" />
              <p className="text-base text-myaccent font-main font-bold">
                WHO WE SERVE
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn direction="up" delay={0.1} duration={0.7}>
              <div className="text-xl min-[400px]:text-2xl md:text-[2.5rem] lg:text-[3rem] lg:leading-tight text-mytext font-main font-semibold max-w-[300px] min-[450px]:max-w-[500px] lg:max-w-[700px] text-center mx-auto">
                Tailored solutions for every industry
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <p className="text-xs min-[400px]:text-sm md:text-base lg:text-lg text-myaccent font-default font-medium max-w-[300px] min-[450px]:max-w-[450px] lg:max-w-[600px] text-center mx-auto">
                Whether you're a startup or enterprise, we have the tools and
                expertise to help you succeed.
              </p>
            </FadeIn>
          </div>
        </div>

        {customers.map((customer, index) => (
          <Wrapper
            key={customer.id}
            className={`px-4 ${index % 2 === 1 ? 'flex flex-col md:flex-row-reverse' : 'flex flex-col md:flex-row'} items-center gap-12`}
          >
            <div className="md:basis-1/2 space-y-6">
              <FadeIn
                direction={index % 2 === 0 ? 'left' : 'right'}
                duration={0.6}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`size-16 rounded-2xl bg-gradient-to-br ${customer.color} grid place-content-center shadow-xl`}
                  >
                    <customer.icon className="size-8 text-white" />
                  </div>
                  <span className="text-sm text-myaccent font-main font-semibold uppercase tracking-wider">
                    {customer.subtitle}
                  </span>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1} duration={0.6}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-mytext font-main font-semibold">
                  {customer.title}
                </h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} duration={0.6}>
                <p className="text-lg text-myaccent font-default font-semibold">
                  {customer.subtitle}
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} duration={0.6}>
                <p className="text-base text-mytext/80 font-default leading-relaxed">
                  {customer.description}
                </p>
              </FadeIn>

              <ul className="space-y-3">
                {customer.benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                    }}
                  >
                    <div className="size-6 rounded-full bg-myaccent/10 grid place-content-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="size-4 text-myaccent" />
                    </div>
                    <span className="text-mytext font-default">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Feature Cards */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {customer.features.map((feature, i) => (
                  <ScaleIn key={i} delay={0.4 + i * 0.1} duration={0.5}>
                    <div className="bg-white rounded-xl p-4 shadow-lg border border-myaccent/10 text-center">
                      <feature.icon className="size-6 text-myaccent mx-auto mb-2" />
                      <h4 className="text-sm font-main font-semibold text-mytext">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-mytext/60 font-default mt-1">
                        {feature.desc}
                      </p>
                    </div>
                  </ScaleIn>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {customer.stats.map((stat, i) => (
                  <ScaleIn key={i} delay={0.5 + i * 0.1} duration={0.5}>
                    <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-myaccent/10">
                      <div className="text-2xl lg:text-3xl font-main font-bold text-myaccent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-mytext/70 font-default mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </ScaleIn>
                ))}
              </div>

              <FadeIn direction="up" delay={0.6} duration={0.6}>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-myaccent hover:bg-myaccent/90 text-myaccent2 font-main rounded-xl shadow-lg mt-2 w-full md:w-auto"
                >
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </FadeIn>
            </div>

            <ScaleIn delay={0.3} duration={0.7} className="md:basis-1/2">
              <div className="relative h-[420px] md:h-[520px]">
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                  <div
                    className={`absolute top-4 left-4 w-24 h-24 rounded-2xl bg-gradient-to-br ${customer.color} opacity-20`}
                  />
                  <div
                    className={`absolute bottom-8 right-8 w-32 h-32 rounded-full bg-gradient-to-br ${customer.color} opacity-10 blur-2xl`}
                  />
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br ${customer.color} opacity-5 blur-3xl`}
                  />
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
                      <div
                        className={`size-10 rounded-lg bg-gradient-to-br ${customer.color} flex items-center justify-center`}
                      >
                        <customer.icon className="size-5 text-white" />
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
                      {customer.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div
                            className={`text-xl font-bold bg-gradient-to-r ${customer.color} bg-clip-text text-transparent`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-slate-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating accent card */}
                <motion.div
                  className="absolute -right-2 bottom-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`size-8 rounded-lg bg-gradient-to-br ${customer.color} flex items-center justify-center`}
                    >
                      <Zap className="size-4 text-white" fill="currentColor" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-700">
                        {customer.title}
                      </div>
                      <div className="text-[10px] text-slate-500">Trusted</div>
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
