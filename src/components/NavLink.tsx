import { ChevronDown } from 'lucide-react';
import React from 'react';

interface Props {
  more?: boolean;
  links?: string[];
  text: string;
}

const NavLink = ({ more = false, text, links }: Props) => {
  if (more) {
    return (
      <div className="group  relative">
        <div className="flex items-center gap-1  cursor-pointer">
          <p className="text-base text-mytext font-default font-semibold">
            {text}
          </p>
          <ChevronDown className="group-hover:rotate-180 transition-all duration-200" />
        </div>

        <div
          className="opacity-0 top-16 group-hover:block group-hover:opacity-100 group-hover:top-7   absolute z-20 -left-12  
        p-1 w-[200px] bg-mycardbg  shadow-lg rounded-lg border border-myaccent transition-all duration-200"
        >
          {links?.map((link) => (
            <div
              key={link}
              className="px-2 py-2 w-full hover:bg-myaccent/60 text-mytext hover:text-myaccent2   text-base font-default font-semibold rounded-lg cursor-pointer"
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-base text-mytext font-default font-semibold cursor-pointer">
      {text}
    </div>
  );
};

export default NavLink;
