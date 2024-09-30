import React from 'react';
import { NAVIGATION, NavigationItem } from '../constants/Content';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidePanel = () => {
  return (
    <div
      className="
      h-full w-full bg-purple-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border 
      flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center space-y-3 ">
        <Image
          src="/profile_image.png"
          width={200}
          height={200}
          alt="Picture of the author"
          className="rounded-full overflow-hidden"
        />
        <text className="font-quattrocento text-2xl ">Kenn</text>
      </div>
      <div className="flex flex-col items-center justify-center ">
        {/* <div className="text-lg font-bold">Navigation</div> */}
        <div className="mt-6 flex flex-col items-center font-quattrocento space-y-2">
          {NAVIGATION.map((item: NavigationItem) => (
            <div
              key={item.label}
              className=" hover:text-blue-700 cursor-pointer text-white font-quattrocento font-bold text-xl"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col items-center text-white font-quattrocento text-lg text-center space-y-3 mt-6">
        <text className="text-2xl">Web Developer</text>
        <div className="mt-6 flex flex-row items-center"></div>
      </div>
    </div>
  );
};

export default SidePanel;
