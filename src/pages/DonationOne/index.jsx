import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

import "react-circular-progressbar/dist/styles.css";

const DonationOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-jejuhallasan items-start justify-end mx-auto pt-[107px] w-full">
        <div className="flex flex-col items-center w-full">
          <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
        </div>
        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[93px] mt-11 md:px-5 w-[15%] md:w-full">
          <Line className="bg-black-900 h-px my-2.5 w-2/5" />
          <Text className="text-black-900 text-xl" size="txtJejuHallasan20">
            Buy a flower
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-[107px] items-center mt-[49px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1267px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                <div className="flex flex-col gap-7 items-start justify-start">
                  <div className="md:h-[218px] h-[377px] relative w-full">
                    <Text
                      className="absolute left-[0] md:text-5xl text-[110px] text-black-900 top-[0] w-[89%] sm:w-full"
                      size="txtJejuHallasan110"
                    >
                      HELP US HELP OTHERS
                    </Text>
                    <Text
                      className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                      size="txtJejuHallasan40"
                    >
                      with your generous donation, you empower us to create a
                      more valuable resources , support a thriving community ,
                      and reach more people in need.
                    </Text>
                  </div>
                  <Button
                    className="!text-gray-900_03 cursor-pointer leading-[normal] min-w-[331px] rounded-[35px] sm:text-[40px] md:text-[46px] text-[50px] text-center"
                    color="indigo_900_ed"
                    size="sm"
                    variant="fill"
                  >
                    DONATE NOW
                  </Button>
                </div>
                <Img
                  className="h-[475px] md:h-auto object-cover rounded-[20px]"
                  src="images/img_image2_475x426.png"
                  alt="imageTwo"
                />
              </div>
            </div>
          </div>
          <div className="md:h-[1080px] h-[1423px] sm:h-[756px] md:px-5 relative w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[138px] items-center justify-start mx-auto p-[61px] md:px-10 sm:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-end justify-start w-[98%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                    <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_02"
                        size="txtJejuHallasan48Gray90002"
                      >
                        DONATION OPTIONS
                      </Text>
                      <Text
                        className="leading-[160.00%] text-base text-blue_gray-700_02 w-full"
                        size="txtJejuHallasan16"
                      >
                        We offer several convenient and flexible options for you
                        to donate and make a meaningful impact on our mission to
                        support individuals dealing with depression. Choose the
                        option that suits you best
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-roboto items-center justify-start md:mt-0 mt-5 w-[49%] md:w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[90%] md:w-full">
                        <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-2 w-auto">
                          <Text
                            className="text-base text-gray-900_01 w-auto"
                            size="txtRobotoMedium16"
                          >
                            One-time Donation
                          </Text>
                        </div>
                        <div className="font-jejuhallasan h-[42px] ml-1 sm:ml-[0] relative w-[67%] sm:w-full">
                          <Button
                            className="common-pointer absolute bg-transparent cursor-pointer h-full inset-y-[0] min-w-[160px] my-auto right-[0] text-base text-blue_gray-700_02 text-center"
                            onClick={() => navigate("/donationthree")}
                            size="md"
                          >
                            Donation Tiers
                          </Button>
                          <Button
                            className="absolute bg-transparent cursor-pointer h-full inset-y-[0] left-[0] min-w-[225px] my-auto text-base text-blue_gray-700_02 text-center"
                            size="md"
                          >
                            Monthly Contributions
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col font-jejuhallasan gap-4 items-start justify-start ml-7 md:ml-[0] w-[96%] md:w-full">
                        <div className="flex flex-col relative w-[61%]">
                          <Line className="bg-gray-300 h-px mx-auto rotate-[-180deg] w-full" />
                          <Line className="bg-amber-300 h-0.5 mb-auto mt-[-1px] rotate-[-180deg] w-[33%] z-[1]" />
                        </div>
                        <Text
                          className="leading-[160.00%] text-2xl md:text-[22px] text-blue_gray-700_02 sm:text-xl w-full"
                          size="txtJejuHallasan24Bluegray70002"
                        >
                          Make a single contribution to support our cause
                          instantly.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[90px] w-[98%] md:w-full">
                  <Text
                    className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-gray-900_02 w-[33%] sm:w-full"
                    size="txtJejuHallasan48Gray90002"
                  >
                    How we use your donation
                  </Text>
                  <Text
                    className="leading-[160.00%] ml-12 md:ml-[0] text-base text-blue_gray-700_02 w-[28%] sm:w-full"
                    size="txtJejuHallasan16"
                  >
                    <>
                      Ensure the website&#39;s technical aspects are in good
                      shape. Use donations to cover expenses related to web
                      hosting, domain registration, security, and other
                      maintenance tasks.
                    </>
                  </Text>
                  <Text
                    className="leading-[160.00%] md:ml-[0] ml-[89px] text-base text-blue_gray-700_02 w-[29%] sm:w-full"
                    size="txtJejuHallasan16"
                  >
                    <>
                      Continuously improve the website&#39;s features and
                      functionality to provide a better user experience. This
                      can include mobile optimization, improved user interfaces,
                      and additional interactive tools.
                    </>
                  </Text>
                </div>
              </div>
              <Img
                className="h-[773px] mt-[-17px] mx-auto object-cover w-full z-[1]"
                src="images/img_rectangle1332.png"
                alt="rectangle1332"
              />
            </div>
            <div className="absolute bg-black-900 bottom-[18%] flex md:flex-col flex-row font-roboto md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[50px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start w-[59%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start">
                  <Text
                    className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                    size="txtRobotoBold48"
                  >
                    How we spend your donations and where it goes
                  </Text>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700_90 w-full"
                    size="txtRobotoRegular16"
                  >
                    We understand that when you make a  donation, you want to
                    know exactly where your money is going and we pledge to be
                    transparent.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-[38px] items-start justify-between w-3/5 md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-1/2 sm:w-full">
                          <div className="bg-green-A100 h-4 rounded w-4"></div>
                          <Text
                            className="text-base text-white-A700"
                            size="txtRobotoMedium16WhiteA700"
                          >
                            40% Technical Infrastructure
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-start justify-start w-[43%] sm:w-full">
                          <div className="bg-deep_purple-A100 h-4 mb-0.5 rounded w-4"></div>
                          <Text
                            className="text-base text-white-A700"
                            size="txtRobotoMedium16WhiteA700"
                          >
                            35% Raising Awareness
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-2 items-start justify-start w-[38%] md:w-full">
                        <div className="bg-yellow-100 h-4 mb-[3px] rounded w-4"></div>
                        <Text
                          className="text-base text-white-A700"
                          size="txtRobotoMedium16WhiteA700"
                        >
                          10% Community Building and Support
                        </Text>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[27px] items-start justify-start w-3/5 md:w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-[52%] sm:w-full">
                        <div className="bg-amber-300 h-4 mb-[3px] rounded w-4"></div>
                        <Text
                          className="text-base text-white-A700"
                          size="txtRobotoMedium16WhiteA700"
                        >
                          10% Continuous Improvement
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-[43%] sm:w-full">
                        <div className="bg-pink-200 h-4 rounded w-4"></div>
                        <Text
                          className="text-base text-white-A700"
                          size="txtRobotoMedium16WhiteA700"
                        >
                          5% Valuable Resources
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[375px] md:h-[421px] mr-[60px] md:mt-0 my-[46px] relative w-[375px] sm:w-full">
                <div className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible">
                  <CircularProgressbar
                    className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible"
                    value={37}
                    strokeWidth={23}
                    styles={{
                      trail: { strokeWidth: 23, stroke: "#bdf3c0" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(151deg)",
                        stroke: "#ac93f1",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
                <div className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible">
                  <CircularProgressbar
                    className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible"
                    value={9}
                    strokeWidth={23}
                    styles={{
                      trail: { strokeWidth: 23, stroke: "#bdf3c0" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(-74deg)",
                        stroke: "#fff0c9",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
                <div className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible">
                  <CircularProgressbar
                    className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible"
                    value={8}
                    strokeWidth={23}
                    styles={{
                      trail: { strokeWidth: 23, stroke: "#bdf3c0" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(-42deg)",
                        stroke: "#f8cf64",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
                <div className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible">
                  <CircularProgressbar
                    className="!w-[375px] absolute h-[375px] inset-[0] justify-center m-auto overflow-visible"
                    value={3}
                    strokeWidth={23}
                    styles={{
                      trail: { strokeWidth: 23, stroke: "#bdf3c0" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        transformOrigin: "center",
                        transform: "rotate(-11deg)",
                        stroke: "#f38ebf",
                      },
                    }}
                  ></CircularProgressbar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationOnePage;
