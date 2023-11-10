import React from "react";

import { Button, Img, Text } from "components";

const TelehealthOneRowframeone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700_01 flex md:flex-col flex-row gap-[51px] items-center justify-start mb-[3px] p-[22px] sm:px-5 rounded-br-[10px] rounded-tr-[10px] shadow-bs w-[63%] md:w-full">
          <Text
            className="md:ml-[0] ml-[70px] md:mt-0 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
            size="txtJejuHallasan28"
          >
            {props?.home}
          </Text>
          <Text
            className="md:mt-0 my-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
            size="txtJejuHallasan28"
          >
            {props?.buymeaflower}
          </Text>
          <Text
            className="md:mt-0 my-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
            size="txtJejuHallasan28"
          >
            {props?.community}
          </Text>
          <Text
            className="md:mt-0 my-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
            size="txtJejuHallasan28"
          >
            {props?.contactus}
          </Text>
        </div>
        <Img
          className="h-10 md:ml-[0] ml-[66px]"
          src="images/img_frame1.svg"
          alt="frameOne"
        />
        <Button
          className="border-[5px] border-blue_gray-900_3f border-solid cursor-pointer font-jejuhallasan leading-[normal] mb-1 min-w-[145px] md:ml-[0] ml-[18px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-center"
          shape="round"
          color="red_600"
          size="3xl"
          variant="fill"
        >
          {props?.hotline}
        </Button>
        <div className="bg-white-A700 flex flex-col h-20 items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-1 p-2.5 rounded-[50%] shadow-bs w-20">
          <Img
            className="h-[60px] w-[60px]"
            src="images/img_user.svg"
            alt="user"
          />
        </div>
        <div className="bg-gray-50 h-[82px] ml-8 md:ml-[0] md:mt-0 mt-[3px] rounded-bl-[10px] rounded-tl-[10px] shadow-bs w-[10%]"></div>
      </div>
    </>
  );
};

TelehealthOneRowframeone.defaultProps = {
  home: "Home",
  buymeaflower: "Buy me a flower",
  community: "Community",
  contactus: "Contact Us",
  hotline: "HotLine",
};

export default TelehealthOneRowframeone;
