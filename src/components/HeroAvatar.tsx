import { cn } from '@/lib/utils';
import { MousePointer2 } from 'lucide-react';
import React from 'react';

interface Props {
  className?: string;
  position?: string;
  image?: string;
}

const HeroAvatar = ({ className, position, image }: Props) => {
  const imageUrl = image;

  return (
    <div
      className={cn('absolute size-max hidden min-[1200px]:block', position)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="size-20 rounded-full drop-shadow-2xl  bg-no-repeat bg-cover bg-center ring-4 ring-white "
      ></div>
      <MousePointer2
        className={cn(
          'size-12 text-myaccent fill-myaccent stroke-white rounded-xl absolute ',
          className
        )}
      />
    </div>
  );
};

export default HeroAvatar;
