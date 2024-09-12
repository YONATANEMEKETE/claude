import { Plus } from 'lucide-react';
import React from 'react';

const Card2 = () => {
  return (
    <div className="mx-1 rounded-b-xl bg-white p-8 relative">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl text-myaccent font-default font-semibold">
          Activity
        </p>
        <div className="px-2 py-1 bg-myaccent2 rounded-md shadow-sm text-base text-myaccent font-default font-semibold flex items-center gap-2">
          <Plus />
          <p>Message</p>
        </div>
      </div>

      <div className="py-4 px-6 bg-white rounded-xl shadow-xl flex items-start gap-4 mb-4">
        <div className='size-8 shrink-0 rounded-full bg-no-repeat bg-cover bg-[url("https://ik.imagekit.io/6qizpphtd1/Claude/129417.jpg")]'></div>
        <div className="space-y-4 pt-1 grow">
          <div className="flex items-center justify-between">
            <p className="text-base text-myaccent font-default font-semibold">
              Bill Sanders
            </p>
            <div className="h-4 w-12 bg-mycardbg rounded-full"></div>
          </div>
          <p className="text-sm text-mytextgray font-default font-semibold">
            hello @Regip Diller, could you sign the contract before March 12,
            thank you in advance.
          </p>
        </div>
      </div>

      <div className="py-4 px-6 bg-white rounded-xl shadow-xl flex items-start gap-4">
        <div className='size-8 shrink-0 rounded-full bg-no-repeat bg-cover bg-[url("https://ik.imagekit.io/6qizpphtd1/Claude/42003.jpg")]'></div>
        <div className="space-y-4 pt-1 grow">
          <div className="flex items-center justify-between">
            <p className="text-base text-myaccent font-default font-semibold">
              Jane cooper
            </p>
            <div className="h-4 w-12 bg-mycardbg rounded-full"></div>
          </div>
          <p className="text-sm text-mytextgray font-default font-semibold">
            Uploaded new contact
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-xl"></div>
    </div>
  );
};

export default Card2;
