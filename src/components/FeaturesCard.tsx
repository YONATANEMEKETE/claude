import React from 'react';

interface Props {
  title: string;
  description: string;
  below?: React.ReactNode;
}

const FeaturesCard = ({ title, description, below }: Props) => {
  return (
    <div className="w-full md:w-[49%] bg-mycardbg rounded-2xl pt-12 pb-1">
      <h1 className="text-[1.5rem] md:text-[2rem] text-mytext font-default font-semibold mx-auto w-max mb-4">
        {title}
      </h1>
      <p className="text-base text-myaccent font-main font-semibold max-w-[70%] mx-auto text-center mb-10">
        {description}
      </p>

      {below}
    </div>
  );
};

export default FeaturesCard;
