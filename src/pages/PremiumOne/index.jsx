import React from "react";

import { Button, Img, Text } from "components";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

const PremiumOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jejuhallasan gap-[25px] items-center justify-end mx-auto py-[49px] w-full">
        <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[58px] w-full" />
        <div className="flex flex-col items-center justify-start max-w-[1239px] mx-auto md:px-5 w-full">
          <div className="md:h-[503px] sm:h-[700px] h-[799px] relative w-full">
            <div className="absolute bg-blue_gray-100 md:h-[221px] h-[578px] inset-x-[0] mx-auto p-7 sm:px-5 rounded-[10px] top-[0] w-full">
              <Text
                className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center top-[5%] w-[86%] sm:w-full"
                size="txtJejuHallasan48"
              >
                <span className="text-black-900 font-jejuhallasan font-normal">
                  Discover{" "}
                </span>
                <span className="md:text-5xl text-black-900 font-jejuhallasan text-6xl font-normal">
                  Premium
                </span>
                <span className="text-black-900 font-jejuhallasan font-normal">
                  {" "}
                  Resources for a Healthier You
                </span>
              </Text>
              <Button
                className="absolute cursor-pointer inset-x-[0] leading-[normal] min-w-[251px] mx-auto rounded-[34px] sm:text-[33px] md:text-[35px] text-[37px] text-center top-[35%]"
                color="red_600_dd"
                size="xl"
                variant="fill"
              >
                SUBSCRIBE
              </Button>
            </div>
            <div className="absolute bg-yellow-100_01 bottom-[0] flex flex-col items-center justify-start left-[5%] p-[9px] rounded-[40px] w-[42%]">
              <div className="flex flex-col gap-[39px] items-center justify-start mb-5 mt-[17px] w-[97%] md:w-full">
                <Text
                  className="md:text-5xl text-8xl text-black-900 text-center underline"
                  size="txtJejuHallasan96"
                >
                  FREE
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                    <Img
                      className="sm:flex-1 h-[78px] md:h-auto rounded-[50%] w-[18%] sm:w-full"
                      src="images/img_image3_78x86.png"
                      alt="imageThree"
                    />
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
                      size="txtJejuHallasan30Black900"
                    >
                      Limited access to webinars
                    </Text>
                  </div>
                  <div className="flex mt-11 relative w-full">
                    <Img
                      className="h-[78px] my-auto rounded-[50%] w-[18%]"
                      src="images/img_image3_78x86.png"
                      alt="imageFour"
                    />
                    <Text
                      className="ml-[-15px] my-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[86%] sm:w-full z-[1]"
                      size="txtJejuHallasan30Black900"
                    >
                      Basic Meditation and Mindfulness Resources
                    </Text>
                  </div>
                  <div className="flex mt-[34px] relative w-[99%] sm:w-full">
                    <Img
                      className="h-[78px] my-auto rounded-[50%] w-[19%]"
                      src="images/img_image3_78x86.png"
                      alt="imageFive"
                    />
                    <Text
                      className="mb-1.5 ml-[-20px] mt-auto text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[87%] sm:w-full z-[1]"
                      size="txtJejuHallasan30Black900"
                    >
                      Paid Music Therapy Sessions
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-orange-200 bottom-[0] flex flex-col items-end justify-start p-[3px] right-[4%] rounded-[40px] w-[42%]">
              <div className="flex flex-col items-center justify-start mb-7 mt-[23px] w-[95%] md:w-full">
                <Text
                  className="md:text-5xl text-8xl text-black-900 text-center underline"
                  size="txtJejuHallasan96"
                >
                  PREMIUM
                </Text>
                <Text
                  className="text-black-900 text-center text-xl"
                  size="txtJejuHallasan20"
                >
                  RM 19.99 per month
                </Text>
                <div className="flex flex-col gap-[49px] items-center justify-start mt-6 w-full">
                  <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-start w-full">
                    <Img
                      className="h-[66px] md:h-auto sm:mt-0 mt-[7px] rounded-[50%] w-[66px]"
                      src="images/img_image9.png"
                      alt="imageNine"
                    />
                    <Text
                      className="sm:flex-1 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[85%] sm:w-full"
                      size="txtJejuHallasan30Black900"
                    >
                      Access to Expert Webinars and Workshops
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-start w-full">
                    <Img
                      className="h-[66px] md:h-auto rounded-[50%] w-[66px]"
                      src="images/img_image9.png"
                      alt="imageTen"
                    />
                    <Text
                      className="sm:flex-1 text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center w-[85%] sm:w-full"
                      size="txtJejuHallasan30Black900"
                    >
                      Comprehensive Mindfulness and Meditation Courses
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-start w-full">
                    <Img
                      className="h-[66px] md:h-auto rounded-[50%] w-[66px]"
                      src="images/img_image9.png"
                      alt="imageEleven"
                    />
                    <Text
                      className="sm:flex-1 sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center w-[85%] sm:w-full"
                      size="txtJejuHallasan28"
                    >
                      Exclusive Lucky Draw for Free Music Therapy Sessions
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-100 flex flex-col md:gap-10 gap-[72px] items-center justify-center mt-[50px] p-[51px] md:px-10 sm:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-col flex-row gap-[21px] items-end justify-start mt-[39px] p-6 sm:px-5 shadow-bs w-full">
              <Img
                className="md:flex-1 h-80 sm:h-auto mb-[18px] md:ml-[0] ml-[15px] object-cover w-[29%] md:w-full"
                src="images/img_download1.png"
                alt="downloadOne"
              />
              <div className="flex flex-col gap-[27px] items-center justify-start mb-4 md:mt-0 mt-[27px]">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtJejuHallasan48"
                >
                  Expert Webinars and Workshops
                </Text>
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtJejuHallasan32"
                >
                  Premium subscribers gain exclusive access to live and recorded
                  webinars and workshops hosted by mental health professionals
                  and experts. These sessions offer in-depth insights,
                  strategies, and the opportunity to interact with experts.
                </Text>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-[105px] items-center justify-start mb-[49px] w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] sm:px-5 shadow-bs w-full">
                <div className="flex md:flex-col flex-row gap-[23px] items-start justify-start mb-3.5 mt-[3px] w-full">
                  <Img
                    className="h-[309px] md:h-auto object-cover w-[309px]"
                    src="images/img_meditationthin.png"
                    alt="meditationthin"
                  />
                  <div className="flex flex-col gap-[26px] items-center justify-start md:mt-0 mt-[45px]">
                    <Text
                      className="sm:text-[32px] md:text-[38px] text-[42px] text-black-900 text-center"
                      size="txtJejuHallasan42"
                    >
                      Mindfulness and Meditation Courses
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-[99%] sm:w-full"
                      size="txtJejuHallasan32"
                    >
                      Premium members can participate in comprehensive
                      mindfulness and meditation courses, providing them with
                      structured guidance to improve their mental well-being.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[34px] sm:px-5 shadow-bs w-full">
                <div className="flex md:flex-col flex-row gap-[30px] items-end justify-start mb-[15px] w-full">
                  <Img
                    className="md:flex-1 h-[303px] sm:h-auto object-cover w-[30%] md:w-full"
                    src="images/img_download11.png"
                    alt="downloadEleven"
                  />
                  <div className="flex flex-col gap-[27px] items-center justify-start md:mt-0 mt-8">
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                      size="txtJejuHallasan48"
                    >
                      Music Therapy Sessions
                    </Text>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                      size="txtJejuHallasan32"
                    >
                      <>
                        Premium members have the opportunity to participate in a
                        lucky draw for free music therapy sessions. This means
                        they can potentially win access to music therapy
                        sessions without additional charges. It&#39;s a unique
                        benefit of the premium subscription.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-600_dd flex flex-col font-inter items-center justify-start mt-[13px] p-[37px] sm:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[97%] sm:w-full"
              size="txtInterMedium40"
            >
              <span className="text-white-A700 font-inter font-medium">
                You’ll be reminded 7 days before your trial ends. Recurring
                billing. By continuing, you verify that you are at least 18
                years old or under guidance. To proceed, please review and
                accept our{" "}
              </span>
              <a
                href="javascript:"
                className="text-indigo-900_02 font-inter font-medium underline"
              >
                Terms of Service and Privacy Policy
              </a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumOnePage;
