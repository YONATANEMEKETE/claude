import React from 'react';

const BgPatterns = () => {
  return (
    <div className="absolute -z-10 h-[125vh] inset-0 bg-mycardbg">
      <div className="absolute inset-0 z-0  bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="absolute  z-0 inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-transparent  to-mycardbg "></div>
    </div>
  );
};

export default BgPatterns;
