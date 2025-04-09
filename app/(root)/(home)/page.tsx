// app/(root)/(home)/page.tsx

import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react';
import CurrentTime from '@/components/Currenttime'; // Import the CurrentTime component

const Home = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal md:mb-8 lg:mb-0 md:m-8 lg:mt-0 lg:m-0">
          </h2>
          <CurrentTime /> {/* Use the CurrentTime component here */}
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
