import React from 'react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';

const Card1 = () => {
  return (
    <div className="relative bg-white mx-1 rounded-b-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl text-myaccent font-default font-semibold">
          Email notification
        </p>
        <div className="px-4 py-1 bg-myaccent2 rounded-md shadow-md text-base text-myaccent font-default font-semibold">
          Save
        </div>
      </div>
      <div className="h-[1px] bg-mycardbg mb-4"></div>
      <div className="space-y-4">
        <Checks title="New messages, comments, or replies" />
        <Checks title="Social emails" checked={false} />
        <Checks title="Announcement and updates" />
        <Checks title="remainders" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent rounded-xl"></div>
    </div>
  );
};

export default Card1;

type Props = {
  title?: string;
  checked?: boolean;
};

const Checks = ({ title, checked = true }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-mytextgray font-default font-semibold">
          {title}
        </p>
        <Switch checked={checked} />
      </div>
      <div className="h-[1px] bg-mycardbg"></div>
    </div>
  );
};
