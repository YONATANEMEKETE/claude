import Image from 'next/image';
import React from 'react';

interface Props {
  logo: any;
}

const IntegrationCard = ({ logo }: Props) => {
  return (
    <div className="inline-grid place-content-center size-24 p-6 bg-white rounded-2xl shadow-xl flex-shrink-0">
      <Image src={logo} alt="logo" width={50} height={50} className="" />
    </div>
  );
};

export default IntegrationCard;
