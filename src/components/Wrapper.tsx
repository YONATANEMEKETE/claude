import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn('max-w-[1200px] mx-auto', className)}>{children}</div>
  );
};

export default Wrapper;
