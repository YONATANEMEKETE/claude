import { ChevronDown } from 'lucide-react';
import React from 'react';

const FeaturesChart1 = () => {
  return (
    <div className="hidden lg:block absolute z-0 bottom-[2px] right-[2px] h-[80%] bg-white w-[500px] rounded-br-xl">
      <div className="px-6 py-6 border-b border-mycardbg flex items-center justify-between mb-8">
        <div className="flex items-center gap-1">
          <p className="text-xl text-myaccent font-main font-semibold">
            Acme Inc.
          </p>
          <ChevronDown className="text-myaccent" />
        </div>

        <div className="flex items-center">
          <div className="size-8 rounded-full bg-[url('https://ik.imagekit.io/6qizpphtd1/Claude/129417.jpg')] bg-no-repeat bg-cover"></div>
          <div className="size-8 rounded-full bg-[url('https://ik.imagekit.io/6qizpphtd1/Claude/5677.jpg')] bg-no-repeat bg-cover -translate-x-2 ring-1 ring-white"></div>
          <div className="size-8 rounded-full bg-[url('https://ik.imagekit.io/6qizpphtd1/Claude/42003.jpg')] bg-no-repeat bg-cover -translate-x-4 ring-1 ring-white"></div>
        </div>
      </div>

      <div className="px-6">
        <div className="space-y-8 relative">
          <div className="text-sm text-myaccent font-default font-medium">
            10k
          </div>
          <div className="text-sm text-myaccent font-default font-medium">
            6k
          </div>
          <div className="text-sm text-myaccent font-default font-medium">
            2k
          </div>
          <div className="flex items-baseline justify-between">
            <div className="text-sm text-myaccent font-default font-medium">
              0
            </div>
            <div className="h-[1px] w-[93%] bg-mycardbg"></div>
          </div>

          <div className="absolute bottom-3 left-[8%] h-20 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[18%] h-28 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[28%] h-12 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[38%] h-8 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[48%] h-40 w-6 bg-myaccent rounded-lg"></div>
          <div className="absolute bottom-3 left-[58%] h-24 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[68%] h-28 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[78%] h-12 w-6 bg-mycardbg rounded-lg"></div>
          <div className="absolute bottom-3 left-[88%] h-8 w-6 bg-mycardbg rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesChart1;
