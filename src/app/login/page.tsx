'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import logo from '../../../public/logo.png';
import { ArrowUpRight, Loader2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Login attempt:', formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--mybg))] flex items-center justify-center px-4 py-12">
      <motion.div
        className="w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="size-12 relative">
              <Image
                src={logo}
                alt="logo Clause"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-3xl text-[hsl(var(--mytext))] font-bold">
              Clause
            </span>
          </Link>
          <h1 className="text-[2rem] text-[hsl(var(--mytext))] font-bold mb-2">
            Welcome back
          </h1>
          <p className="text-[hsl(var(--mytextgray))] font-medium">
            Sign in to your account to continue
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-[0px_5px_15px_rgba(0,0,0,0.1)] p-8 space-y-6"
          variants={itemVariants}
        >
          <div className="space-y-2">
            <label className="text-[hsl(var(--mytext))] font-semibold text-sm">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border border-[hsl(var(--myaccent))]/30 rounded-xl py-5 bg-[hsl(var(--mybg))] text-base text-[hsl(var(--mytext))]"
              required
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[hsl(var(--mytext))] font-semibold text-sm">
              Password
            </label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border border-[hsl(var(--myaccent))]/30 rounded-xl py-5 bg-[hsl(var(--mybg))] text-base text-[hsl(var(--mytext))]"
              required
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full bg-[hsl(var(--myaccent))] hover:bg-[hsl(var(--myaccent))]/90 rounded-xl py-6 text-white font-semibold transition-colors duration-200"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                Login
                <ArrowUpRight className="ml-2" />
              </>
            )}
          </Button>

          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-center text-[hsl(var(--mytextgray))] font-medium text-sm">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="text-[hsl(var(--myaccent))] hover:underline"
            >
              Sign up
            </Link>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
