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
      <div className="relative">
        <div className="peer group flex items-center gap-1  cursor-pointer">
          <p className="text-base text-mytext font-default font-semibold hover:text-myaccent">
            {text}
          </p>
          <ChevronDown className="group-hover:rotate-180 transition-all duration-200" />
        </div>

        <div
          className="absolute top-12 -left-16  opacity-0 peer-hover:opacity-100 peer-hover:top-6 peer-hover:z-10 hover:z-10 hover:top-6 hover:opacity-100
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
    <div className="text-base text-mytext font-default font-semibold cursor-pointer hover:text-myaccent">
      {text}
    </div>
  );
};

export default NavLink;
