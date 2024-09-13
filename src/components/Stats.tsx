import React from 'react';

const Stats = () => {
  return (
    <div className="max-w-[1300px] min-[1300px]:mx-auto mx-4 mt-20  bg-mycardbg rounded-2xl py-10 px-20 lg:px-52 flex flex-col md:flex-row md:h-[300px] items-center justify-between gap-y-12">
      <div className="flex  items-center flex-col gap-2">
        <h1 className="text-5xl lg:text-7xl text-myfooterbg font-default font-semibold">
          2021
        </h1>
        <p className="text-xl text-myaccent font-default font-semibold text-center">
          Clause Founded
        </p>
      </div>
      <div className="flex items-center flex-col gap-2">
        <h1 className="text-5xl lg:text-7xl text-myfooterbg font-default font-semibold">
          50K+
        </h1>
        <p className="text-xl text-myaccent font-default font-semibold text-center">
          Active Users
        </p>
      </div>
      <div className="flex items-center flex-col gap-2">
        <h1 className="text-5xl lg:text-7xl text-myfooterbg font-default font-semibold">
          1K+
        </h1>
        <p className="text-xl text-myaccent font-default font-semibold text-center">
          Company Partners
        </p>
      </div>
    </div>
  );
};

export default Stats;
