import { Grid2x2X, LayoutPanelLeft, Zap } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import FeaturesChart1 from './FeaturesChart1';
import FeaturesCard from './FeaturesCard';
import Card1 from './Card1';
import Card2 from './Card2';

const Features = () => {
  return (
    <div className="bg-mybg pt-20 space-y-20">
      <div className="mx-auto size-max flex flex-col items-center gap-6">
        <div className="px-4 py-1 bg-white border-[1px] border-myaccent/30 rounded-full flex items-center gap-2">
          <Grid2x2X className="size-5 text-myaccent" />
          <p className="text-base text-myaccent font-main font-bold">
            FEATURES
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-xl min-[400px]:text-2xl md:text-[2rem] lg:text-[3rem] lg:leading-tight  text-mytext font-main font-semibold max-w-[300px] min-[450px]:max-w-[500px] lg:max-w-[700px] text-center mx-auto">
            Latest Advanced technologies to ensure everything you need
          </div>

          <p className="text-xs min-[400px]:text-sm md:text-base lg:text-lg  text-myaccent font-default font-medium max-w-[300px] min-[450px]:max-w-[450px] lg:max-w-[600px] text-center mx-auto">
            Maximize your teams productivity ans security with our affordable,
            user friendly contract managment system.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="relative max-w-[1200px] mx-5 min-[1200px]:mx-auto px-12 pt-16 pb-8 bg-mycardbg rounded-xl">
          <div className="relative w-full lg:w-[40%] space-y-24 lg:ml-0 mx-auto lg:text-start text-center">
            <div className="space-y-6">
              <h1 className="text-[1.5rem] md:text-[2.5rem] text-mytext font-default font-bold">
                Dynamic Dashboard
              </h1>
              <p className="text-base text-myaccent font-main font-semibold">
                Clause helps legal teams work faster, smarter and more
                efficiently delivering the vissiblity and data driven insights
                to mitigate risks and ensure compliance.
              </p>
            </div>

            <Button
              variant={'default'}
              size={'lg'}
              className="bg-myaccent hover:bg-myaccent/90 text-myaccent2 text-base font-main rounded-lg"
            >
              Explore All
            </Button>
          </div>

          <FeaturesChart1 />
        </div>

        <div className="max-w-[1200px] mx-4 min-[1200px]:mx-auto flex flex-col md:flex-row gap-y-4 justify-between">
          <FeaturesCard
            title="Smart notifications"
            description="Easily accessible from the notification center, calendar or email with
        the relevant activities."
            below={<Card1 />}
          />
          <FeaturesCard
            title="Task management"
            description="Discuss contract queries, manage tasks, secure approvals and track progress in the workplace"
            below={<Card2 />}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
