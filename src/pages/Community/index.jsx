import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

const CommunityPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-jejuhallasan gap-[53px] items-center justify-end mx-auto pt-[107px] w-full">
        <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
        <div className="sm:h-[1689px] h-[1754px] md:h-[2310px] md:px-5 relative w-full">
          <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[35px] sm:px-5 rounded-tl-[30px] rounded-tr-[30px] w-[89%]">
            <div className="flex flex-col items-start justify-start mb-[500px] w-[97%] md:w-full">
              <Text
                className="md:text-5xl text-6xl text-black-900 text-center"
                size="txtJejuHallasan60"
              >
                Community
              </Text>
              <div className="h-[238px] md:h-[246px] ml-1.5 md:ml-[0] mt-[37px] relative w-full">
                <div className="absolute bg-gray-200_01 flex flex-col gap-[17px] inset-x-[0] items-start justify-center mx-auto outline outline-[1px] outline-black-900_b2 p-5 rounded-[20px] shadow-bs top-[0] w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtJejuHallasan30Black900"
                  >
                    Generate new post
                  </Text>
                  <div className="bg-cyan-100_ba h-[75px] mb-[46px] md:ml-[0] ml-[7px] rounded-[37px] w-full"></div>
                </div>
                <Button
                  className="bottom-[0] cursor-pointer flex inset-x-[0] items-center justify-center min-w-[309px] mx-auto rounded-[30px]"
                  leftIcon={
                    <Img
                      className="h-[45px] mr-1.5 right-[1%] absolute"
                      src="images/img_frame.svg"
                      alt="Frame"
                    />
                  }
                  color="blue_300"
                  size="md"
                  variant="fill"
                >
                  <div className="leading-[normal] md:text-[28px] sm:text-[26px] text-3xl text-center">
                    Picture/Video
                  </div>
                </Button>
                <Button
                  className="bottom-[0] cursor-pointer flex items-center justify-center min-w-[309px] mr-[50px] right-[4%] rounded-[30px]"
                  leftIcon={
                    <div className="h-10 mr-[7px] w-10 bg-white-A700 right-[1%] absolute">
                      <Img
                        className="h-10 absolute"
                        src="images/img_car.svg"
                        alt="car"
                      />
                    </div>
                  }
                  color="blue_300"
                  size="lg"
                  variant="fill"
                >
                  <div className="!text-white-A700 leading-[normal] md:text-[28px] sm:text-[26px] text-3xl text-center">
                    Feeling/Emotion
                  </div>
                </Button>
              </div>
              <div className="flex flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[41px] mt-[52px] w-[93%] md:w-full">
                <div className="flex flex-col font-inter items-center justify-start mb-0.5 shadow-bs">
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <Img
                      className="h-[22px] md:h-auto ml-2 md:ml-[0] object-cover"
                      src="images/img_group4.png"
                      alt="groupFour"
                    />
                    <Text
                      className="bg-red-A700 h-[35px] justify-center sm:pl-5 pl-[30px] pr-[5px] py-1 rounded-[3px] text-amber-400 text-center text-xl w-[185px]"
                      size="txtInterMedium20"
                    >
                      <span className="text-amber-400 font-jejuhallasan font-normal">
                        Trending topics
                      </span>
                      <span className="text-amber-400 font-jejuhallasan font-normal">
                        {" "}
                      </span>
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-jejuhallasan leading-[normal] min-w-[134px] mt-[31px] rounded-[10px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                  shape="round"
                  color="amber_300_03"
                  size="xs"
                  variant="fill"
                >
                  More
                </Button>
              </div>
              <div className="bg-gray-200_01 flex flex-col gap-[5px] items-start justify-start mt-[38px] outline outline-[1px] outline-black-900_b2 p-6 sm:px-5 rounded-[20px] shadow-bs w-full">
                <div className="flex flex-row gap-2 items-start justify-start md:ml-[0] ml-[23px] w-[15%] md:w-full">
                  <Img
                    className="h-[21px]"
                    src="images/img_frame_black_900.svg"
                    alt="frame"
                  />
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtJejuHallasan25"
                  >
                    2 days ago
                  </Text>
                </div>
                <Text
                  className="mb-[22px] md:ml-[0] ml-[23px] sm:text-[35px] md:text-[41px] text-[45px] text-black-900"
                  size="txtJejuHallasan45"
                >
                  TOPIC: Meditation helps in Depression
                </Text>
              </div>
              <div className="flex flex-row font-inter items-center justify-between md:ml-[0] ml-[172px] mt-[15px] w-[70%] md:w-full">
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400_02"
                  size="txtInterRegular25"
                >
                  2k views
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400_02"
                  size="txtInterRegular25"
                >
                  235 votes
                </Text>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400_02"
                  size="txtInterRegular25"
                >
                  56 Ans
                </Text>
              </div>
              <List
                className="flex flex-col gap-[15px] items-center ml-0.5 md:ml-[0] mt-[37px] w-full"
                orientation="vertical"
              >
                <div className="bg-gray-200_01 flex flex-1 flex-col items-center justify-start outline outline-[1px] outline-black-900_b2 p-[21px] sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col font-jejuhallasan gap-4 items-center justify-start w-[14%] md:w-full">
                      <div className="bg-amber-200 h-[50px] rounded-[50%] w-[50px]"></div>
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtJejuHallasan20"
                      >
                        Anonymous Pineapple
                      </Text>
                    </div>
                    <Line className="bg-black-900 md:h-0.5 h-[85px] ml-10 md:ml-[0] md:mt-0 my-0.5 w-0.5 md:w-full" />
                    <Text
                      className="md:ml-[0] ml-[77px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[76%] sm:w-full"
                      size="txtInterRegular25Black900"
                    >
                      I quite agree with this statement. I have try this before
                      and it really help to calm me down
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px rotate-[-180deg] bg-gray-300 w-[31%]" />
                <div className="bg-gray-200_01 flex flex-1 flex-col items-center justify-start outline outline-[1px] outline-black-900_b2 p-[21px] sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col font-jejuhallasan gap-4 items-center justify-start w-[14%] md:w-full">
                      <div className="bg-red-200 h-[50px] rounded-[50%] w-[50px]"></div>
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtJejuHallasan20"
                      >
                        Anonymous Strawberry
                      </Text>
                    </div>
                    <Line className="bg-black-900 md:h-0.5 h-[85px] ml-10 md:ml-[0] md:mt-0 my-0.5 w-0.5 md:w-full" />
                    <Text
                      className="md:ml-[0] ml-[77px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[76%] sm:w-full"
                      size="txtInterRegular25Black900"
                    >
                      I have no idea about what is meditation and it sound not
                      practical to me.{" "}
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px rotate-[-180deg] bg-gray-300 w-[31%]" />
                <div className="bg-gray-200_01 flex flex-1 flex-col items-center justify-start outline outline-[1px] outline-black-900_b2 p-[21px] sm:px-5 rounded-[20px] shadow-bs w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                    <div className="flex flex-col font-jejuhallasan gap-4 items-center justify-start w-[14%] md:w-full">
                      <div className="bg-yellow-500_01 h-[50px] rounded-[50%] w-[50px]"></div>
                      <Text
                        className="text-black-900 text-center text-xl"
                        size="txtJejuHallasan20"
                      >
                        Anonymous Pisang
                      </Text>
                    </div>
                    <Line className="bg-black-900 md:h-0.5 h-[85px] ml-10 md:ml-[0] md:mt-0 my-0.5 w-0.5 md:w-full" />
                    <Text
                      className="md:ml-[0] ml-[77px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-[76%] sm:w-full"
                      size="txtInterRegular25Black900"
                    >
                      After all of the research, it seems like a tryable way for
                      me. I hope it can help me to release my stressed
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Footer1 className="absolute bg-black-900_01 bottom-[0] flex font-roboto inset-x-[0] items-center justify-center mx-auto w-full" />
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
