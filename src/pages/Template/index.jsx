import React from "react";

import { Button, Img, Line, Text } from "components";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

const TemplatePage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-jejuhallasan sm:gap-10 md:gap-10 gap-[578px] items-start justify-end mx-auto py-[102px] w-full">
        <div className="flex flex-col items-center mt-[5px] w-full">
          <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
        </div>
        <div className="h-[667px] md:px-5 relative w-[90%] md:w-full">
          <Img
            className="absolute h-[667px] inset-[0] justify-center m-auto object-cover w-[98%]"
            src="images/img_rectangle5.png"
            alt="rectangleFive"
          />
          <Line className="absolute bg-gray-300 h-px right-[0] rotate-[-180deg] top-[36%] w-[28%]" />
        </div>
      </div>
    </>
  );
};

export default TemplatePage;
