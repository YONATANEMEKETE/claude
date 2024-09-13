import { Quote } from 'lucide-react';
import React from 'react';

const Testimony = () => {
  return (
    <div className="mt-20 py-8 size-max mx-auto flex flex-col items-center gap-10">
      <Quote size={40} className="text-myaccent" />
      <p className="text-3xl text-myaccent font-default font-bold max-w-[900px] text-center leading-relaxed">
        &quot;Clause is helping our company to decrease operational expenses and
        turnaround time, while increasing the compeliance, resource allocations
        and effectivness of our contract managment.&quot;
      </p>
      <div className="size-max flex flex-col gap-3 items-center">
        <div className='size-12 rounded-full bg-no-repeat bg-cover bg-[url("https://ik.imagekit.io/6qizpphtd1/Claude/129417.jpg")]'></div>
        <div className="text-center">
          <h2 className="text-xl text-myaccent font-default font-bold">
            Darlene Robertson
          </h2>
          <p className="text-base text-mytext font-default font-semibold">
            Head of strategy at Mailchimp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
