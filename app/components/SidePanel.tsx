import React from 'react';
import { NAVIGATION, NavigationItem } from '../constants/Content';

const SidePanel = () => {
  return (
    <div
      className="
        h-full w-full bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border 
        flex flex-col items-center justify-center overflow-hidden"
    >
      <div>Photo</div>
      <div className="flex flex-col items-center justify-center">
        {/* <div className="text-lg font-bold">Navigation</div> */}
        <div className="mt-6 flex flex-col items-center font-quattrocento">
          {NAVIGATION.map((item: NavigationItem) => (
            <div
              key={item.label}
              className=" hover:text-blue-700 cursor-pointer mt-2 text-white font-quattrocento font-bold text-lg"
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center text-white font-quattrocento font-bold text-lg">
          Short Intro / Title
        </div>

        <div className="mt-6 flex flex-row items-center">Social Icons</div>
      </div>
    </div>
  );
};

export default SidePanel;
