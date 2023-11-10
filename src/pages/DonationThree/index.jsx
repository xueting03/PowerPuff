import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

import "react-circular-progressbar/dist/styles.css";

const DonationThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-blue_gray-100 flex flex-col font-jejuhallasan items-start justify-end mx-auto pt-[107px] w-full">
        <div className="flex flex-col items-center w-full">
          <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
        </div>
        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[100px] mt-[69px] md:px-5 w-[15%] md:w-full">
          <Line className="bg-black-900 h-px my-2.5 w-2/5" />
          <Text className="text-black-900 text-xl" size="txtJejuHallasan20">
            Buy a flower
          </Text>
        </div>
        <div className="flex flex-col md:gap-10 gap-28 items-center mt-[19px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1267px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
                <div className="flex flex-col gap-7 items-start justify-start">
                  <div className="md:h-[216px] h-[373px] relative w-full">
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
                    className="cursor-pointer leading-[normal] min-w-[331px] rounded-[35px] sm:text-[40px] md:text-[46px] text-[50px] text-center"
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
          <div className="flex flex-col font-roboto md:px-5 relative w-full">
            <div className="bg-white-A700 flex flex-col md:gap-10 gap-[86px] items-center justify-start mx-auto p-[58px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                  <div className="flex flex-col gap-[46px] items-start justify-start w-full">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900_02"
                      size="txtRobotoBold48Gray90002"
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
                <div className="flex flex-col gap-[18px] justify-start md:mt-0 mt-[23px] w-[49%] md:w-full">
                  <div className="font-roboto sm:h-[159px] h-[42px] relative w-[90%] sm:w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-evenly m-auto w-full">
                      <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-[72%] sm:w-full">
                        <Button
                          className="common-pointer bg-transparent cursor-pointer font-medium min-w-[183px] text-base text-center text-gray-900_01"
                          onClick={() => navigate("/donationone")}
                          size="md"
                        >
                          One-time Donation
                        </Button>
                        <Button
                          className="common-pointer bg-transparent cursor-pointer font-medium min-w-[208px] text-base text-blue_gray-700_02 text-center"
                          onClick={() => navigate("/donationtwo")}
                          size="md"
                        >
                          Monthly Contributions
                        </Button>
                      </div>
                      <div className="md:h-[35px] h-[42px] relative w-[29%] sm:w-full">
                        <Line className="absolute bg-amber-300 bottom-[5%] h-0.5 right-[0] rotate-[-180deg] w-[91%]" />
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto sm:px-5 px-6 py-2 w-auto">
                          <Text
                            className="text-base text-blue_gray-700_02 w-auto"
                            size="txtRobotoMedium16Bluegray70002"
                          >
                            Donation Tiers
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="absolute bg-gray-300 bottom-[5%] h-px left-[4%] rotate-[-180deg] w-[71%]" />
                  </div>
                  <Text
                    className="leading-[160.00%] ml-7 md:ml-[0] text-2xl md:text-[22px] text-blue_gray-700_02 sm:text-xl w-[96%] sm:w-full"
                    size="txtJejuHallasan24Bluegray70002"
                  >
                    Explore our donation tiers to find a level that aligns with
                    your generosity. Each tier may come with associated
                    benefits, such as exclusive updates, recognition, or special
                    mentions.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[113px] w-[98%] md:w-full">
                <Text
                  className="leading-[120.00%] text-5xl sm:text-[38px] md:text-[44px] text-gray-900_02 w-[33%] sm:w-full"
                  size="txtJejuHallasan48Gray90002"
                >
                  How we use your donation
                </Text>
                <Text
                  className="leading-[160.00%] md:ml-[0] ml-[49px] md:mt-0 mt-[3px] text-base text-blue_gray-700_02 w-[28%] sm:w-full"
                  size="txtRobotoRegular16Bluegray70002"
                >
                  <>
                    Ensure the website&#39;s technical aspects are in good
                    shape. Use donations to cover expenses related to web
                    hosting, domain registration, security, and other
                    maintenance tasks.
                  </>
                </Text>
                <Text
                  className="leading-[160.00%] md:ml-[0] ml-[90px] md:mt-0 mt-0.5 text-base text-blue_gray-700_02 w-[29%] sm:w-full"
                  size="txtRobotoRegular16Bluegray70002"
                >
                  <>
                    Continuously improve the website&#39;s features and
                    functionality to provide a better user experience. This can
                    include mobile optimization, improved user interfaces, and
                    additional interactive tools.
                  </>
                </Text>
              </div>
            </div>
            <Footer className="bg-black-900 flex items-center justify-center mt-[-71px] mx-auto w-full z-[1]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationThreePage;
