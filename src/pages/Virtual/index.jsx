import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";
import VirtualFooter from "components/VirtualFooter";

const VirtualPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-jejuhallasan h-[1736px] mx-auto relative w-full">
        <div className="flex flex-col h-full justify-start m-auto w-full">
          <div className="h-[197px] md:h-[532px] md:px-5 relative w-full">
            <div className="bg-blue_gray-100 h-[197px] m-auto w-full"></div>
            <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-full">
              <div className="bg-white-A700_01 flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-end p-[22px] sm:px-5 rounded-br-[10px] rounded-tr-[10px] shadow-bs w-[63%] md:w-full">
                <Text
                  className="md:mt-0 mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                  size="txtJejuHallasan28"
                >
                  Buy me a flower
                </Text>
                <Text
                  className="common-pointer md:ml-[0] ml-[59px] md:mt-0 mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                  size="txtJejuHallasan28"
                  onClick={() => navigate("/community")}
                >
                  Community
                </Text>
                <Text
                  className="md:ml-[0] ml-[95px] mr-14 md:mt-0 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                  size="txtJejuHallasan28"
                >
                  Contact Us
                </Text>
              </div>
              <Img
                className="h-10 md:ml-[0] ml-[57px]"
                src="images/img_frame1.svg"
                alt="frameOne"
              />
              <div className="bg-red-600 border-[5px] border-blue_gray-900_3f border-solid flex flex-col items-center justify-start md:ml-[0] ml-[27px] p-3.5 rounded-[10px] shadow-bs">
                <Text
                  className="mb-3 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtJejuHallasan30"
                >
                  HotLine
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col h-20 items-center justify-start ml-8 md:ml-[0] p-1.5 rounded-[50%] shadow-bs w-20">
                <Img
                  className="h-[68px]"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
              <div className="bg-gray-50 h-[82px] ml-8 md:ml-[0] rounded-bl-[10px] rounded-tl-[10px] shadow-bs w-[10%]"></div>
            </div>
          </div>
          <Img
            className="h-[61px] md:ml-[0] ml-[69px] mt-[82px]"
            src="images/img_visiondetector.svg"
            alt="visiondetector"
          />
          <Img
            className="h-[21px] max-w-[1313px] mt-11 mx-auto w-full"
            src="images/img_enhancingemotional.svg"
            alt="enhancingemotio"
          />
          <div className="h-[447px] sm:h-[530px] md:h-[748px] md:ml-[0] ml-[122px] mt-[83px] md:px-5 relative w-[57%] md:w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex md:flex-col flex-row gap-[37px] items-start justify-between w-full">
                <div className="bg-gray-50_03 flex md:flex-1 flex-col gap-[13px] items-center justify-end p-[98px] md:px-10 sm:px-5 rounded-[12px] w-[86%] md:w-full">
                  <Img
                    className="h-[97px] mt-[121px]"
                    src="images/img_group8596.svg"
                    alt="group8596"
                  />
                  <Img
                    className="h-[18px]"
                    src="images/img_ordropjpgimages.svg"
                    alt="ordropjpgimages"
                  />
                </div>
                <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:mt-0 mt-[47px] w-[11%] md:w-full">
                  <div className="bg-blue-100_02 flex flex-col h-[85px] items-center justify-end p-[15px] rounded-[42px] w-[85px]">
                    <Img
                      className="h-[50px] mt-[3px] w-[51px]"
                      src="images/img_contrast.svg"
                      alt="contrast"
                    />
                  </div>
                  <div className="bg-blue-100_02 flex flex-col h-[85px] items-center justify-end p-[18px] rounded-[42px] w-[85px]">
                    <Img
                      className="h-[43px] md:h-auto mt-1.5 object-cover w-[94%]"
                      src="images/img_image20.png"
                      alt="imageTwenty"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[447px] inset-y-[0] left-[0] my-auto"
              src="images/img_group8599.svg"
              alt="group8599"
            />
          </div>
          <div className="font-karma sm:h-[498px] h-[677px] md:h-[721px] mt-[122px] md:px-5 relative w-full">
            <Text
              className="absolute right-[4%] text-2xl md:text-[22px] text-gray-700_01 text-justify sm:text-xl top-[0]"
              size="txtKarmaRegular24"
            >
              <>
                -Please ensure that the image you upload is clear and well-lit.
                A clear image helps us accurately detect your emotions and
                depression levels.
                <br />
                -For accurate results, make sure your face is clearly visible in
                the picture. Our AI relies on facial expressions to assess
                emotions and depression, so a visible face is essential.
              </>
            </Text>
            <VirtualFooter className="absolute bg-black-900_01 bottom-[0] flex md:flex-col flex-row font-roboto md:gap-5 inset-x-[0] items-center justify-end mx-auto p-[49px] md:px-10 sm:px-5 w-full" />
          </div>
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto pb-[666px] w-full">
          <header className="bg-blue_gray-100 flex flex-col font-jejuhallasan items-center justify-center md:px-5 w-full">
            <TelehealthOneRowframeone className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mb-[5px] mt-[107px] w-full" />
          </header>
          <Img
            className="h-[61px] md:ml-[0] ml-[69px] mt-[82px]"
            src="images/img_visiondetector.svg"
            alt="visiondetector_One"
          />
          <Img
            className="h-[21px] max-w-[1313px] md:ml-[0] ml-[57px] mt-11 w-full"
            src="images/img_enhancingemotional.svg"
            alt="enhancingemotio_One"
          />
          <div className="h-[447px] sm:h-[530px] md:h-[650px] md:ml-[0] ml-[122px] mt-[83px] md:px-5 relative w-[57%] md:w-full">
            <div className="absolute flex md:flex-col flex-row gap-[37px] h-full inset-[0] items-start justify-between m-auto w-full">
              <div className="bg-gray-50_03 flex md:flex-1 flex-col gap-[13px] items-center justify-end p-[98px] md:px-10 sm:px-5 rounded-[12px] w-[86%] md:w-full">
                <Img
                  className="h-[97px] mt-[121px]"
                  src="images/img_group8596.svg"
                  alt="group8596_One"
                />
                <Img
                  className="h-[18px]"
                  src="images/img_ordropjpgimages.svg"
                  alt="ordropjpgimages_One"
                />
              </div>
              <div className="flex h-[85px] justify-end md:mt-0 mt-[147px] relative w-[85px]">
                <Img
                  className="h-[59px] mb-[7px] mt-auto mx-auto"
                  src="images/img_contrast.svg"
                  alt="contrast_One"
                />
                <div className="absolute bg-blue-100_02 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-[42px] w-[85px]">
                  <Img
                    className="h-[43px] md:h-auto mt-1.5 object-cover w-[94%]"
                    src="images/img_image20.png"
                    alt="imageTwenty_One"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[447px] inset-y-[0] left-[0] my-auto"
              src="images/img_group8599.svg"
              alt="group8599_One"
            />
          </div>
          <Text
            className="md:ml-[0] ml-[130px] mt-[122px] text-2xl md:text-[22px] text-gray-700_01 text-justify sm:text-xl"
            size="txtKarmaRegular24"
          >
            <>
              -Please ensure that the image you upload is clear and well-lit. A
              clear image helps us accurately detect your emotions and
              depression levels.
              <br />
              -For accurate results, make sure your face is clearly visible in
              the picture. Our AI relies on facial expressions to assess
              emotions and depression, so a visible face is essential.
            </>
          </Text>
        </div>
      </div>
    </>
  );
};

export default VirtualPage;
