import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Text,
} from "components";
import MoodMixInfo from "components/MoodMixInfo";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";
import VirtualFooter from "components/VirtualFooter";

import "react-circular-progressbar/dist/styles.css";

const MoodMixPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-jejuhallasan gap-9 items-center justify-end mx-auto pt-[107px] w-full">
        <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
        <div className="flex flex-col md:gap-10 gap-[79px] items-center justify-start w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[1499px] items-center justify-start max-w-7xl mx-auto p-8 md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group11.png')" }}
          >
            <div className="flex flex-col items-center justify-start mb-[106px] w-full">
              <div className="flex flex-col items-start justify-start w-[94%] md:w-full">
                <Text
                  className="md:text-5xl text-6xl text-black-900 text-center"
                  size="txtJejuHallasan60"
                >
                  MoodMix
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-7 text-3xl sm:text-[26px] md:text-[28px] text-blue-900 w-full"
                  size="txtJejuHallasan30Blue900"
                >
                  A revolutionary music recommendation service designed to
                  enhance your emotional well-being through the power of music.
                </Text>
                <div className="flex flex-col gap-[5px] items-center justify-start ml-52 md:ml-[0] mt-[92px] w-[62%] md:w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                    size="txtJejuHallasan35"
                  >
                    How are you feeling today?
                  </Text>
                  <div className="bg-white-A700 border-[5px] border-indigo-900 border-solid flex flex-col items-end justify-start p-3 rounded-[20px] shadow-bs w-full">
                    <Img
                      className="h-[35px] mr-1.5 w-[35px]"
                      src="images/img_search_indigo_900.svg"
                      alt="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[42px] rounded-[20px] shadow-bs w-[96%] md:w-full">
                <Button
                  className="capitalize cursor-pointer leading-[normal] min-w-[219px] py-[30px] rounded-[20px] shadow-bs sm:text-[31px] md:text-[33px] text-[35px] text-center"
                  color="indigo_900"
                  variant="fill"
                >
                  Happy
                </Button>
                <Button
                  className="capitalize cursor-pointer leading-[normal] min-w-[215px] md:ml-[0] ml-[15px] py-[30px] rounded-[20px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                  color="cyan_800"
                  variant="fill"
                >
                  Sad
                </Button>
                <Button
                  className="capitalize cursor-pointer leading-[normal] min-w-[216px] md:ml-[0] ml-[18px] py-[30px] rounded-[20px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                  color="teal_200"
                  variant="fill"
                >
                  Stressed
                </Button>
                <Button
                  className="capitalize cursor-pointer leading-[normal] min-w-[216px] md:ml-[0] ml-[17px] py-[30px] rounded-[20px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                  color="blue_300_01"
                  variant="fill"
                >
                  Angry
                </Button>
                <Button
                  className="capitalize cursor-pointer leading-[normal] min-w-[216px] ml-4 md:ml-[0] py-[29px] rounded-[20px] sm:text-[31px] md:text-[33px] text-[35px] text-center"
                  color="deep_purple_400"
                  variant="fill"
                >
                  Energetic
                </Button>
              </div>
              <div className="flex flex-col font-misans items-center justify-start mt-[89px] w-full">
                <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[72px] justify-start w-3/5 md:w-full">
                    <div className="flex md:flex-col flex-row gap-[41px] items-start justify-end md:ml-[0] ml-[65px] w-[90%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px] w-[36%] md:w-full">
                        <Text
                          className="capitalize leading-[141.60%] sm:text-[40px] md:text-[46px] text-[50px] text-black-900 tracking-[2.75px]"
                          size="txtJejuHallasan50Black900"
                        >
                          <>
                            blinding
                            <br />
                            lights
                          </>
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[3px] mt-4 text-[7.31px] text-black-900 w-[53%] sm:w-full"
                          size="txtMiSansBold731"
                        >
                          the weekend
                        </Text>
                        <Text
                          className="capitalize leading-[141.60%] md:ml-[0] ml-[3px] mt-[15px] text-[15px] text-gray-400_01 tracking-[0.82px]"
                          size="txtJejuHallasan15"
                        >
                          <>
                            After the Night fall
                            <br />
                            While the Star Bliz
                            <br />
                            We will be here forever long
                          </>
                        </Text>
                        <PagerIndicator
                          className="flex h-[3px] md:ml-[0] ml-[3px] mt-[22px] w-[55px]"
                          count={4}
                          activeCss="inline-block cursor-pointer h-[3px] bg-gray-800_02 w-[27px]"
                          activeIndex={1}
                          inactiveCss="inline-block cursor-pointer h-[3px] bg-gray-400_02 w-1"
                          selectedWrapperCss="inline-block md:ml-[0] mx-[2.50px] sm:ml-[0]"
                          unselectedWrapperCss="inline-block md:ml-[0] mx-[2.50px] sm:ml-[0]"
                        />
                      </div>
                      <div className="md:h-[373px] h-[378px] relative w-[58%] md:w-full">
                        <div className="absolute md:h-[373px] h-[376px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute bottom-[0] md:h-[302px] h-[344px] inset-x-[0] mx-auto w-4/5">
                            <Img
                              className="absolute h-[302px] inset-x-[0] mx-auto object-cover rounded-[151px] top-[0] w-full"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne"
                            />
                            <Img
                              className="absolute bottom-[0] h-24 inset-x-[0] mx-auto w-[95px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                          <div className="!w-full absolute h-[373px] inset-[0] justify-center m-auto overflow-visible">
                            <CircularProgressbar
                              className="!w-full absolute h-[373px] inset-[0] justify-center m-auto overflow-visible"
                              value={22}
                              strokeWidth={2}
                              styles={{
                                trail: { strokeWidth: 1, stroke: "#dedede8e" },
                                path: {
                                  strokeLinecap: "square",
                                  height: "100%",
                                  transformOrigin: "center",
                                  transform: "rotate(-38deg)",
                                  stroke: "#9c9bbb",
                                },
                              }}
                            ></CircularProgressbar>
                          </div>
                        </div>
                        <div className="!w-full absolute h-[373px] inset-[0] justify-center m-auto overflow-visible">
                          <CircularProgressbar
                            className="!w-full absolute h-[373px] inset-[0] justify-center m-auto overflow-visible"
                            value={22}
                            strokeWidth={2}
                            styles={{
                              trail: { strokeWidth: 3, stroke: "#e75252" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(-38deg)",
                                stroke: "#9c9bbb",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="absolute bottom-[10%] flex flex-col md:gap-10 gap-[175px] items-center justify-start left-[2%] w-[17%]">
                          <Img
                            className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                            src="images/img_ellipse16.png"
                            alt="ellipseSixteen"
                          />
                          <Img
                            className="h-[62px] md:h-auto rounded-[50%] w-[62px]"
                            src="images/img_ellipse17.png"
                            alt="ellipseSeventeen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-start p-[27px] sm:px-5 rounded-[19px] shadow-bs3 w-[36%] md:w-full">
                        <div className="flex flex-col items-center justify-start mb-3 w-[79%] md:w-full">
                          <Img
                            className="h-[42px] md:h-auto object-cover rounded-[21px] w-[41px] sm:w-full"
                            src="images/img_ellipse22.png"
                            alt="ellipseTwentyTwo"
                          />
                          <Text
                            className="capitalize leading-[141.60%] text-[7.43px] text-pink-100 w-[64%] sm:w-full"
                            size="txtMiSansBold743"
                          >
                            Robert Fox
                          </Text>
                          <Text
                            className="capitalize leading-[141.60%] text-[3.75px] text-purple-300 w-[42%] sm:w-full"
                            size="txtMiSansNormal375"
                          >
                            Ronald Richards
                          </Text>
                          <div className="flex flex-col gap-8 items-center justify-start mt-[33px] w-full">
                            <Img
                              className="h-7"
                              src="images/img_group7.svg"
                              alt="groupSeven"
                            />
                            <div className="flex flex-row items-center justify-between w-full">
                              <div className="h-8 md:h-[31px] relative w-8">
                                <div className="bg-indigo-200_b7 h-7 my-auto rounded-[14px] w-[27px]"></div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[9px] w-8"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group12.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[9px] my-0.5"
                                    src="images/img_group4_indigo_400_01.svg"
                                    alt="groupFour"
                                  />
                                </div>
                              </div>
                              <Img
                                className="h-[66px] w-[65px]"
                                src="images/img_play.svg"
                                alt="play"
                              />
                              <div className="h-8 md:h-[31px] relative rotate-[180deg] w-8">
                                <div className="bg-indigo-200_b7 h-7 ml-auto my-auto rounded-[14px] w-[27px]"></div>
                                <div
                                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[9px] w-8"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group13.svg')",
                                  }}
                                >
                                  <Img
                                    className="h-[9px] my-0.5"
                                    src="images/img_group4_indigo_400_01_9x1.svg"
                                    alt="groupFour_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-100 flex md:flex-1 flex-col font-jejuhallasan items-center justify-start mb-[49px] rounded-[14px] shadow-bs4 w-[27%] md:w-full">
                        <div className="bg-gray-100 flex flex-col justify-center p-[21px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                          <Text
                            className="capitalize mr-[87px] mt-1 md:text-5xl text-6xl text-black-900"
                            size="txtJejuHallasan60"
                          >
                            01
                          </Text>
                          <Text
                            className="capitalize leading-[141.60%] mb-[117px] ml-2.5 md:ml-[0] mr-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                            size="txtJejuHallasan25"
                          >
                            <>
                              classical
                              <br />
                              music
                              <br />
                              collections
                            </>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-gray-100 font-jejuhallasan h-64 md:h-[110px] mb-[50px] p-[21px] sm:px-5 relative rounded-[14px] shadow-bs4 w-[27%] md:w-full">
                        <Text
                          className="absolute capitalize left-[8%] md:text-5xl text-6xl text-black-900 top-[11%]"
                          size="txtJejuHallasan60"
                        >
                          02
                        </Text>
                        <Text
                          className="absolute capitalize inset-x-[0] leading-[141.60%] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-black-900 top-[34%]"
                          size="txtJejuHallasan25"
                        >
                          <>
                            Pop
                            <br />
                            music
                            <br />
                            collections
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-jejuhallasan justify-start w-[38%] md:w-full">
                    <Text
                      className="capitalize md:ml-[0] ml-[52px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900"
                      size="txtJejuHallasan35"
                    >
                      download
                    </Text>
                    <div className="flex flex-col font-misans items-start justify-start md:ml-[0] ml-[29px] mt-11 w-[94%] md:w-full">
                      <div className="bg-deep_purple-50_01 flex flex-col items-start justify-end ml-1 md:ml-[0] p-3 rounded-[9px] shadow-bs5 w-[78%] md:w-full">
                        <div className="flex flex-row gap-[18px] items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[44%] md:w-full">
                          <Img
                            className="h-[46px] md:h-auto rounded-[50%] w-[47px]"
                            src="images/img_ellipse24.png"
                            alt="ellipseTwentyFour"
                          />
                          <div className="flex flex-col items-start justify-start mt-[5px]">
                            <Text
                              className="capitalize leading-[141.60%] text-[5.27px] text-black-900 w-[82%] sm:w-full"
                              size="txtMiSansBold527"
                            >
                              Estheras{" "}
                            </Text>
                            <Text
                              className="capitalize leading-[141.60%] mt-0.5 text-[4px] text-gray-900_4f w-full"
                              size="txtMiSansBold4"
                            >
                              Arlene McCoy
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50_01 flex flex-col items-start justify-end ml-1 md:ml-[0] mt-[21px] p-[7px] rounded-[9px] shadow-bs6 w-[78%] md:w-full">
                        <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[5px] w-[57%] md:w-full">
                          <Img
                            className="h-[57px] md:h-auto object-cover rounded-[28px] w-[31%]"
                            src="images/img_ellipse30.png"
                            alt="ellipseThirty"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-start">
                            <Text
                              className="capitalize leading-[141.60%] text-[6.9px] text-black-900 w-full"
                              size="txtMiSansBold69"
                            >
                              Eleanor Pena
                            </Text>
                            <Text
                              className="capitalize leading-[141.60%] text-[5px] text-gray-900_4f w-[78%] sm:w-full"
                              size="txtMiSansBold5"
                            >
                              Wade Warren
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50_10 flex flex-col items-start justify-start mt-[29px] p-[9px] rounded-[9px] shadow-bs7 w-full">
                        <div className="flex flex-row gap-3 items-center justify-start my-2 w-[51%] md:w-full">
                          <Img
                            className="h-[69px] md:h-auto rounded-[50%] w-[69px]"
                            src="images/img_ellipse29.png"
                            alt="ellipseTwentyNine"
                          />
                          <div className="flex flex-col gap-[7px] items-start justify-start">
                            <Text
                              className="capitalize leading-[141.60%] text-[6.9px] text-black-900 w-full"
                              size="txtMiSansBold69"
                            >
                              Esther Howard
                            </Text>
                            <Text
                              className="capitalize leading-[141.60%] md:ml-[0] ml-[3px] text-[6px] text-gray-900_4f w-[34%] sm:w-full"
                              size="txtMiSansBold6"
                            >
                              Guary{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-[69px] md:h-[94px] ml-1.5 md:ml-[0] mt-7 relative w-[83%]">
                        <Line className="absolute bg-gray-300 h-px right-[0] rotate-[-180deg] top-[19%] w-[95%]" />
                        <div className="absolute bg-indigo-50_02 flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-2.5 rounded-[9px] shadow-bs8 w-[94%]">
                          <div className="flex flex-row gap-[23px] items-start justify-start w-[67%] md:w-full">
                            <Img
                              className="h-[46px] md:h-auto rounded-[50%] w-[47px]"
                              src="images/img_ellipse28.png"
                              alt="ellipseTwentyEight"
                            />
                            <div className="flex flex-col gap-1.5 items-start justify-start">
                              <Text
                                className="capitalize leading-[141.60%] text-[6.9px] text-black-900_a2 w-full"
                                size="txtMiSansBold69Black900a2"
                              >
                                Ronald Richards
                              </Text>
                              <Text
                                className="capitalize leading-[141.60%] text-[5px] text-gray-900_4f w-[36%] sm:w-full"
                                size="txtMiSansBold5"
                              >
                                Darlene{" "}
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50_03 flex flex-col font-misans items-start justify-start md:ml-[0] ml-[19px] mr-[103px] mt-[27px] p-[9px] rounded-[9px] shadow-bs8 w-[74%] md:w-full">
                      <div className="flex flex-row gap-[17px] items-center justify-start w-[55%] md:w-full">
                        <Img
                          className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                          src="images/img_ellipse27.png"
                          alt="ellipseTwentySeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="capitalize leading-[141.60%] text-[6.9px] text-black-900_87 w-full"
                            size="txtMiSansBold69Black90087"
                          >
                            Albert Flores
                          </Text>
                          <Text
                            className="capitalize leading-[141.60%] mt-[5px] text-[5px] text-gray-900_4f w-[73%] sm:w-full"
                            size="txtMiSansBold5"
                          >
                            Eleanor Pena
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-50_04 flex flex-col font-misans items-start justify-end mr-[120px] mt-[26px] p-[9px] rounded-[9px] shadow-bs9 w-[74%] md:w-full">
                      <div className="flex flex-row items-start justify-start ml-1 md:ml-[0] mt-[3px] w-[93%] md:w-full">
                        <Img
                          className="h-[42px] md:h-auto mt-0.5 object-cover rounded-[21px] w-[41px]"
                          src="images/img_ellipse26.png"
                          alt="ellipseTwentySix"
                        />
                        <div className="flex flex-col items-start justify-start ml-[25px]">
                          <Text
                            className="capitalize leading-[141.60%] text-[6.9px] text-black-900_75 w-full"
                            size="txtMiSansBold69Black90075"
                          >
                            Darrell Steward
                          </Text>
                          <Text
                            className="capitalize leading-[141.60%] mt-[5px] text-[5px] text-gray-900_4f w-[28%] sm:w-full"
                            size="txtMiSansBold5"
                          >
                            Jenny{" "}
                          </Text>
                        </div>
                        <MoodMixInfo className="md:h-8 h-[23px] ml-[71px] mt-[9px] relative w-[23px]" />
                      </div>
                    </div>
                    <div className="bg-indigo-50_05 flex flex-col font-misans items-start justify-start md:ml-[0] ml-[9px] mr-[113px] mt-6 p-2 rounded-[9px] shadow-bs10 w-[74%] md:w-full">
                      <div className="flex flex-row gap-3.5 items-start justify-start my-1.5 w-[47%] md:w-full">
                        <Img
                          className="h-[37px] md:h-auto rounded-[50%] w-[37px]"
                          src="images/img_ellipse25.png"
                          alt="ellipseTwentyFive"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="capitalize leading-[141.60%] text-[5px] text-black-900_33 w-full"
                            size="txtMiSansBold5Black90033"
                          >
                            Darrell Steward
                          </Text>
                          <Text
                            className="capitalize leading-[141.60%] mt-[3px] text-[5px] text-black-900_0a w-[83%] sm:w-full"
                            size="txtMiSansBold5Black9000a"
                          >
                            Guy Hawkins
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <VirtualFooter className="bg-black-900_01 flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-end p-[72px] md:px-10 sm:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MoodMixPage;
