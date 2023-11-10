import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";
import VirtualFooter from "components/VirtualFooter";

const Virtual20Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-roboto h-[1736px] mx-auto relative w-full">
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="font-jejuhallasan h-[197px] sm:h-[465px] md:h-[803px] md:px-5 relative w-full">
              <Img
                className="absolute h-[158px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                src="images/img_rectangle1357.png"
                alt="rectangle1357"
              />
              <header className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-center mx-auto top-[9%] w-full">
                <ul className="bg-white-A700_01 flex md:flex-1 md:flex-col flex-row md:hidden items-start justify-end p-[22px] sm:px-5 rounded-br-[10px] rounded-tr-[10px] shadow-bs w-[63%] md:w-full common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                    >
                      <Text size="txtJejuHallasan28">Buy me a flower</Text>
                    </a>
                  </li>
                  <li>
                    <a className="ml-[59px] mt-1.5 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline">
                      <Text
                        className="common-pointer"
                        size="txtJejuHallasan28"
                        onClick={() => navigate("/community")}
                      >
                        Community
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="ml-[95px] mr-14 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                    >
                      <Text size="txtJejuHallasan28">Contact Us</Text>
                    </a>
                  </li>
                </ul>
                <Img
                  className="h-10 sm:ml-[0] ml-[57px] sm:mt-0 my-[21px]"
                  src="images/img_frame1.svg"
                  alt="frameOne"
                />
                <Button
                  className="border-[5px] border-blue_gray-900_3f border-solid cursor-pointer leading-[normal] min-w-[145px] sm:ml-[0] ml-[27px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  shape="round"
                  color="red_600"
                  size="3xl"
                  variant="fill"
                >
                  HotLine
                </Button>
                <div className="bg-white-A700 flex flex-col h-20 items-center justify-start ml-8 sm:ml-[0] p-1.5 rounded-[50%] shadow-bs w-20">
                  <Img
                    className="h-[68px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
                <div className="bg-gray-50 h-[82px] ml-8 sm:ml-[0] rounded-bl-[10px] rounded-tl-[10px] shadow-bs w-[10%]"></div>
              </header>
              <div className="absolute bg-blue_gray-100 flex flex-col h-full inset-[0] items-center justify-center m-auto py-[5px] w-full">
                <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[102px] w-full" />
              </div>
            </div>
            <Img
              className="h-[61px] mt-[43px]"
              src="images/img_visiondetector.svg"
              alt="visiondetector"
            />
            <Img
              className="h-[21px] max-w-[1313px] mt-11 mx-auto w-full"
              src="images/img_enhancingemotional.svg"
              alt="enhancingemotio"
            />
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1254px] mt-[85px] mx-auto md:px-5 w-full">
              <div className="h-[752px] relative w-[51%] md:w-full">
                <Img
                  className="h-[30px] ml-auto mr-[119px] mt-[252px]"
                  src="images/img_group8598.svg"
                  alt="group8598"
                />
                <Img
                  className="absolute h-[752px] inset-[0] justify-center m-auto object-cover rounded-[15px] w-full"
                  src="images/img_rectangle1360.png"
                  alt="rectangle1360"
                />
              </div>
              <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] items-center justify-start md:mt-0 mt-[61px] w-[43%] md:w-full">
                <div className="flex flex-col font-jejuhallasan gap-[23px] items-start justify-start w-[98%] md:w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900_02"
                    size="txtJejuHallasan28Gray90002"
                  >
                    AI-Driven Detection Outcome :
                  </Text>
                  <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-col font-kdamthmor gap-3 items-start justify-center p-[25px] sm:px-5 rounded-[5px] w-full">
                    <div className="h-12 md:h-[50px] mt-0.5 relative w-full">
                      <Text
                        className="m-auto text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl w-full"
                        size="txtKdamThmor24"
                      >
                        joy (18) amusement (15)
                      </Text>
                      <div className="absolute flex flex-row items-center justify-between left-[9%] top-[13%] w-[61%]">
                        <Img
                          className="h-[29px] md:h-auto object-cover w-[29px]"
                          src="images/img_grinningfacewith.png"
                          alt="grinningfacewit"
                        />
                        <Img
                          className="h-[29px] md:h-auto object-cover w-[29px]"
                          src="images/img_facewithtears.png"
                          alt="facewithtears"
                        />
                      </div>
                    </div>
                    <Text
                      className="mb-[5px] text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
                      size="txtKdamThmor24"
                    >
                      <span className="text-black-900 font-kdamthmor font-normal">
                        non- depression (92){" "}
                      </span>
                      <span className="text-gray-500_04 font-kdamthmor font-normal">
                        {" "}
                        depression (7)
                      </span>
                    </Text>
                  </div>
                </div>
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
                  size="txtKiwiMaruRegular24"
                >
                  <span className="text-black-900 font-kiwimaru font-normal">
                    Congratulations! This initial assessment suggests that you
                    are{" "}
                  </span>
                  <span className="text-lime-900 font-kiwimaru font-normal">
                    currently not experiencing depression
                  </span>
                  <span className="text-black-900 font-kiwimaru font-normal">
                    <>
                      , which is a positive sign. <br />
                      <br />
                      However, it&#39;s essential to remember that mental health
                      can be complex and may vary over time.Your mental health
                      matters, and we&#39;re here to support you on your journey
                      to well-being.
                    </>
                  </span>
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-bold font-inriasans leading-[normal] min-w-[371px] sm:min-w-full mt-[25px] rounded-[15px] text-2xl md:text-[22px] text-center sm:text-xl"
              color="cyan_200"
              size="2xl"
              variant="fill"
            >
              Upload another image
            </Button>
            <VirtualFooter
              className="bg-black-900_01 flex md:flex-col flex-row font-roboto md:gap-5 items-center justify-end mt-[27px] p-[46px] md:px-10 sm:px-5 w-full"
              subscribetext="Subscribe"
            />
          </div>
        </div>
        <footer className="absolute bg-black-900_01 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[89px] ml-[110px] mr-[49px] mt-[86px] w-[89%]">
            <div className="flex flex-row items-start justify-evenly w-[10%] md:w-full">
              <Text
                className="mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtRobotoRomanBold24"
              >
                largerthan
              </Text>
              <Text
                className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                size="txtCourgetteRegular25"
              >
                i
              </Text>
            </div>
            <div className="flex flex-row gap-[88px] items-center justify-center md:ml-[0] ml-[102px] w-[29%] md:w-full">
              <div className="flex flex-col gap-[27px] items-start justify-start w-[21%]">
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoBold16"
                >
                  Home
                </Text>
                <ul className="flex flex-col gap-[26px] items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">About us</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Team</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">What we do</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Contact</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-7 items-start justify-start w-[15%]">
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoBold16"
                >
                  More
                </Text>
                <ul className="flex flex-col gap-6 items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Projects</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Events</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Donate</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Blog</Text>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[27px] items-start justify-start w-[18%]">
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoBold16"
                >
                  Connect{" "}
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Facebook</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[27px] text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Instagram</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-6 text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Twitter</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[25px] text-sm text-white-A700_a0"
                    >
                      <Text size="txtRobotoRegular14">Linkdin </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[143px] md:mt-0 my-0.5 w-[43%] md:w-full">
              <Text
                className="leading-[140.00%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[81%] sm:w-full"
                size="txtRobotoBold40"
              >
                Subscribe to get latest updates
              </Text>
              <div className="h-[59px] relative w-full">
                <Button
                  className="absolute cursor-pointer font-medium h-full inset-y-[0] leading-[normal] min-w-[136px] my-auto right-[0] rounded text-base text-center"
                  color="white_A700"
                  size="2xl"
                  variant="fill"
                >
                  Subscribe
                </Button>
                <Input
                  name="groupFiftySix"
                  placeholder="Your email"
                  className="leading-[normal] p-0 placeholder:text-indigo-50_63 text-base text-left w-full"
                  wrapClassName="absolute inset-y-[0] left-[0] my-auto rounded w-[84%]"
                  type="email"
                  color="indigo_50_4c"
                  size="md"
                  variant="outline"
                ></Input>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Virtual20Page;
