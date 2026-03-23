'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Trusted from '@/components/Trusted';
import Cta from '@/components/Cta';
import { motion } from 'framer-motion';
import { FadeIn, ScaleIn } from '@/components/animations';
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Star,
  Building2,
  Briefcase,
  Crown,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams getting started',
    price: '$29',
    period: '/month',
    icon: Building2,
    color: 'from-blue-500 to-cyan-600',
    features: [
      { name: 'Up to 5 users', included: true },
      { name: '100 contracts/month', included: true },
      { name: 'Basic templates', included: true },
      { name: 'Email support', included: true },
      { name: 'AI-powered drafting', included: false },
      { name: 'Advanced analytics', included: false },
      { name: 'Custom integrations', included: false },
      { name: 'Priority support', included: false },
    ],
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Best for growing businesses',
    price: '$79',
    period: '/month',
    icon: Crown,
    color: 'from-violet-500 to-purple-600',
    features: [
      { name: 'Up to 20 users', included: true },
      { name: 'Unlimited contracts', included: true },
      { name: 'Advanced templates', included: true },
      { name: 'Priority email support', included: true },
      { name: 'AI-powered drafting', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: false },
      { name: 'Priority support', included: false },
    ],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    icon: Briefcase,
    color: 'from-orange-500 to-amber-600',
    features: [
      { name: 'Unlimited users', included: true },
      { name: 'Unlimited contracts', included: true },
      { name: 'Custom templates', included: true },
      { name: '24/7 dedicated support', included: true },
      { name: 'AI-powered drafting', included: true },
      { name: 'Advanced analytics', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Priority support', included: true },
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes, we offer a 14-day free trial on all plans. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your subscription anytime. Your access continues until the end of your billing period.',
  },
];

export default function PricingPage() {
  return (
    <main className="font-default relative overflow-clip min-h-screen">
      <Nav />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pb-24">
        <div className="mx-auto size-max flex flex-col items-center gap-10 lg:gap-12">
          <FadeIn direction="down" delay={0.1} duration={0.6}>
            <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
              <Zap className="size-5 text-myaccent" />
              <p className="text-base text-myaccent font-main font-semibold">
                PRICING
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4 lg:space-y-6">
            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <div className="text-2xl min-[400px]:text-[2rem] md:text-[3rem] lg:text-[5rem] leading-snug lg:leading-[5rem] text-mytext font-main font-semibold max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
                Simple,{' '}
                <span className="underline underline-offset-8 decoration-myaccent2">
                  transparent
                </span>{' '}
                pricing
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} duration={0.7}>
              <p className="text-sm min-[400px]:text-base md:text-lg lg:text-xl text-myaccent font-default font-medium max-w-[300px] min-[400px]:max-w-[400px] md:max-w-[600px] lg:max-w-[900px] text-center mx-auto">
                Choose the plan that fits your needs. All plans include a 14-day
                free trial.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4} duration={0.7}>
            <div className="flex items-center gap-4">
              <span className="text-myaccent font-default">Monthly</span>
              <div className="w-14 h-8 bg-myaccent rounded-full p-1">
                <div className="w-6 h-6 bg-white rounded-full" />
              </div>
              <span className="text-mytext font-default font-semibold">
                Annual
              </span>
              <span className="text-emerald-600 text-sm font-semibold bg-emerald-100 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <Trusted />

      {/* Pricing Cards */}
      <div className="bg-mybg pt-20 pb-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-3xl overflow-hidden ${
                  plan.popular
                    ? 'bg-white shadow-2xl ring-2 ring-myaccent scale-105 z-10'
                    : 'bg-white shadow-xl'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-myaccent py-2 text-center">
                    <span className="text-sm font-semibold text-myaccent2 flex items-center justify-center gap-1">
                      <Star className="size-4 fill-current" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 pt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`size-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}
                    >
                      <plan.icon className="size-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-main font-semibold text-mytext">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-myaccent">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-main font-bold text-mytext">
                      {plan.price}
                    </span>
                    <span className="text-myaccent">{plan.period}</span>
                  </div>

                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    className={`w-full rounded-xl mb-8 ${
                      plan.popular
                        ? 'bg-myaccent hover:bg-myaccent/90 text-myaccent2'
                        : 'border-myaccent text-myaccent hover:bg-myaccent/10'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="size-5 rounded-full bg-emerald-100 flex items-center justify-center">
                            <Check className="size-3 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="size-5 rounded-full bg-slate-100 flex items-center justify-center">
                            <X className="size-3 text-slate-400" />
                          </div>
                        )}
                        <span
                          className={
                            feature.included
                              ? 'text-mytext font-default'
                              : 'text-slate-400 font-default'
                          }
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-[800px] mx-auto px-4 mt-20">
          <FadeIn direction="up" duration={0.6}>
            <h2 className="text-3xl md:text-4xl text-mytext font-main font-semibold text-center mb-12">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScaleIn key={index} delay={index * 0.1} duration={0.5}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                  <h3 className="text-lg font-main font-semibold text-mytext mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-myaccent font-default">{faq.answer}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>

      <Cta />

      <Footer />
    </main>
  );
}
