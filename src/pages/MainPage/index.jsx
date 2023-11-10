import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer1 from "components/Footer1";

const MainPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jejuhallasan justify-end mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[810px] items-center justify-start py-[107px] w-full"
            style={{ backgroundImage: "url('images/img_group63.png')" }}
          >
            <div className="flex flex-col md:gap-10 gap-[101px] items-center justify-start mb-[38px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="bg-white-A700_01 flex md:flex-1 md:flex-col flex-row gap-[51px] items-center justify-start mb-[3px] p-[22px] md:px-5 rounded-br-[10px] rounded-tr-[10px] shadow-bs w-[63%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[70px] md:mt-0 mt-[7px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                    size="txtJejuHallasan28"
                  >
                    Home
                  </Text>
                  <Text
                    className="common-pointer md:mt-0 my-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                    size="txtJejuHallasan28"
                    onClick={() => navigate("/donationone")}
                  >
                    Buy me a flower
                  </Text>
                  <Text
                    className="common-pointer md:mt-0 my-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                    size="txtJejuHallasan28"
                    onClick={() => navigate("/community")}
                  >
                    Community
                  </Text>
                  <Text
                    className="md:mt-0 my-[3px] sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center underline"
                    size="txtJejuHallasan28"
                  >
                    Contact Us
                  </Text>
                </div>
                <Img
                  className="h-10 md:ml-[0] ml-[66px]"
                  src="images/img_frame1.svg"
                  alt="frameOne"
                />
                <Button
                  className="border-[5px] border-blue_gray-900_3f border-solid cursor-pointer leading-[normal] mb-1 min-w-[145px] md:ml-[0] ml-[18px] rounded-[10px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  shape="round"
                  color="red_600"
                  size="3xl"
                  variant="fill"
                >
                  HotLine
                </Button>
                <div className="bg-white-A700 flex flex-col h-20 items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-1 p-2.5 md:px-5 rounded-[50%] shadow-bs w-20">
                  <Img
                    className="h-[60px] w-[60px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </div>
                <div className="bg-gray-50 h-[82px] ml-8 md:ml-[0] md:mt-0 mt-[3px] md:px-5 rounded-bl-[10px] rounded-tl-[10px] shadow-bs w-[10%]"></div>
              </div>
              <div className="flex flex-col items-center justify-start md:px-5 w-[58%] md:w-full">
                <Text
                  className="md:text-5xl text-[80px] text-black-900 text-center w-full"
                  size="txtJejuHallasan80"
                >
                  Do Your Best and Let the God do the Rest{" "}
                </Text>
                <Text
                  className="mt-[15px] sm:text-[31px] md:text-[33px] text-[35px] text-black-900 text-center"
                  size="txtJejuHallasan35"
                >
                  Express your thoughts
                </Text>
                <Text
                  className="mt-[9px] text-center text-gray-600_01 text-xl"
                  size="txtJejuHallasan20Gray60001"
                >
                  Tell me about your feelings today
                </Text>
                <div className="bg-gray-50_08 border-2 border-black-900_3f border-solid h-[74px] mt-[31px] rounded-[20px] shadow-bs w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[105px] mr-[1137px] mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
          size="txtJejuHallasan30Black900"
        >
          {" "}
          Explore more:
        </Text>
        <div className="flex flex-col font-roboto items-center mt-8 md:px-10 px-11 sm:px-5 w-full">
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-7xl mx-auto w-full"
            orientation="horizontal"
          >
            <div className="h-[421px] sm:ml-[0] relative w-full">
              <Img
                className="h-[421px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_unsplashcveohjjmee.png"
                alt="unsplashcveohjj"
              />
              <div className="absolute bg-black-900_6c flex flex-col h-full inset-[0] items-center justify-center m-auto p-12 md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col items-start justify-start mt-[39px] w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtRobotoBold28"
                  >
                    AI Compassion Bot
                  </Text>
                  <Text
                    className="leading-[160.00%] mt-[59px] text-base text-white-A700 w-full"
                    size="txtRobotoRegular16WhiteA700"
                  >
                    Meet our AI Compassion Bot, your caring friend in times of
                    need, here to listen, support, and bring comfort to you
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[146px] mt-16 rounded text-base text-center"
                    onClick={() => navigate("/aibot")}
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[421px] sm:ml-[0] relative w-full">
              <Img
                className="h-[421px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_unsplashiigovkrty8g.png"
                alt="unsplashiigovkr"
              />
              <div className="absolute bg-black-900_6c flex flex-col h-full inset-[0] items-center justify-center m-auto p-12 md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start mt-9 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtRobotoBold28"
                  >
                    Vission
                  </Text>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700 w-full"
                    size="txtRobotoRegular16WhiteA700"
                  >
                    Read emotions through facial expressions, fostering greater
                    emotional understanding and connection
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[146px] rounded text-base text-center"
                    onClick={() => navigate("/virtual")}
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[421px] sm:ml-[0] relative w-full">
              <Img
                className="h-[421px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_unsplash1aa2fadydc.png"
                alt="unsplash1aa2fad"
              />
              <div className="absolute bg-black-900_6c flex flex-col h-full inset-[0] items-center justify-center m-auto p-12 md:px-10 sm:px-5 rounded-[20px] w-full">
                <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start mt-9 w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtRobotoBold28"
                  >
                    MoodMix
                  </Text>
                  <Text
                    className="leading-[160.00%] text-base text-white-A700 w-full"
                    size="txtRobotoRegular16WhiteA700"
                  >
                    Your personalized playlist curation to match your mood and
                    elevate your happiness through the power of music
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[146px] rounded text-base text-center"
                    onClick={() => navigate("/moodmix")}
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </List>
          <Line className="bg-blue_gray-900_3f h-0.5 max-w-[1325px] mt-[74px] mx-auto w-full" />
          <div
            className="common-pointer flex flex-col font-jejuhallasan gap-[38px] justify-start max-w-[1282px] mt-[73px] mx-auto w-full"
            onClick={() => navigate("/premiumone")}
          >
            <Text
              className="md:ml-[0] ml-[9px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
              size="txtJejuHallasan30Black900"
            >
              {" "}
              Premium Plan:
            </Text>
            <div className="h-[252px] md:h-[334px] relative w-full">
              <Img
                className="h-[252px] m-auto object-cover rounded-[10px] w-full"
                src="images/img_rectangle47.png"
                alt="rectangleFortySeven"
              />
              <div className="absolute bg-blue_gray-100_4c flex flex-col h-full inset-[0] items-center justify-center m-auto p-[55px] md:px-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start mb-[29px] mt-5 w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                    <Text
                      className="sm:text-[33px] md:text-[35px] text-[37px] text-black-900"
                      size="txtJejuHallasan37"
                    >
                      <>
                        Grab Your Chance!
                        <br />
                        SUBSCRIBE Premium Plan with
                      </>
                    </Text>
                    <div className="flex flex-col justify-start">
                      <Text
                        className="mr-[90px] md:text-5xl text-[130px] text-center text-shadow-ts text-yellow-500"
                        size="txtJejuHallasan130"
                      >
                        RM19.90
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[529px] sm:text-[33px] md:text-[35px] text-[37px] text-black-900"
                        size="txtJejuHallasan37"
                      >
                        only!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-900_3f h-0.5 max-w-[1325px] mt-[62px] mx-auto w-full" />
        </div>
        <Text
          className="md:ml-[0] ml-[94px] mr-[1130px] mt-9 text-3xl sm:text-[26px] md:text-[28px] text-black-900 underline"
          size="txtJejuHallasan30Black900"
        >
          {" "}
          Advertisement
        </Text>
        <div className="flex flex-col font-inter items-center mt-[31px] pl-2.5 w-full">
          <div className="h-[409px] max-w-[1430px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[409px] m-auto object-cover w-full"
              src="images/img_rectangle1312.png"
              alt="rectangle1312"
            />
            <a
              href="www.healthcare.com"
              className="absolute bottom-[5%] left-[6%] text-cyan-900 text-xl"
              target="_blank"
              rel="noreferrer"
            >
              <Text size="txtInterBold20">www.healthcare.com</Text>
            </a>
          </div>
        </div>
        <div className="flex flex-col font-jejuhallasan items-end mt-[13px] md:px-10 sm:px-5 px-[70px] w-full">
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 underline"
            size="txtJejuHallasan25"
          >
            Interested in advertising with us?
          </Text>
        </div>
        <div className="flex flex-col font-jejuhallasan gap-[49px] items-center mt-12 w-full">
          <Line className="bg-blue_gray-900_3f h-0.5 max-w-[1325px] mx-auto w-full" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-yellow-100_02 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[49px] py-[49px] w-full">
                <div className="flex flex-col gap-11 justify-start mb-[17px] w-[98%] md:w-full">
                  <Text
                    className="ml-4 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                    size="txtJejuHallasan30Black900"
                  >
                    {" "}
                    Exclusive Access
                  </Text>
                  <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-[35%] md:w-full">
                      <Text
                        className="leading-[120.00%] md:text-5xl sm:text-[42px] text-[56px] text-gray-900_01 w-full"
                        size="txtJejuHallasan56"
                      >
                        Elevate your experience with exclusive features and
                        content available for a fee.
                      </Text>
                      <Button
                        className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[142px] rounded text-base text-center"
                        color="amber_300_02"
                        size="xl"
                        variant="fill"
                      >
                        Read more
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col gap-[50px] items-center justify-center p-[62px] md:px-10 sm:px-5 rounded-[20px] w-[63%] md:w-full">
                      <div
                        className="common-pointer flex md:flex-col flex-row gap-[54px] items-center justify-start mt-2 w-[94%] md:w-full"
                        onClick={() => navigate("/ebooksone")}
                      >
                        <Img
                          className="h-[218px]"
                          src="images/img_illustration.svg"
                          alt="illustration"
                        />
                        <div className="flex flex-col items-center justify-start w-[62%] md:w-full">
                          <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                            <Text
                              className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01"
                              size="txtJejuHallasan50Gray90001"
                            >
                              eBook
                            </Text>
                            <Text
                              className="leading-[160.00%] text-blue_gray-700_02 text-lg w-full"
                              size="txtRobotoRegular18"
                            >
                              Embark on Journeys Unseen: Each a gateway to
                              uncharted worlds and endless adventures, waiting
                              for your arrival.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div
                        className="common-pointer flex md:flex-col flex-row md:gap-10 items-end justify-between mb-[15px] w-full"
                        onClick={() => navigate("/")}
                      >
                        <Img
                          className="h-[157px] mb-[3px]"
                          src="images/img_group2063.svg"
                          alt="group2063"
                        />
                        <div className="flex flex-col gap-[18px] items-start justify-start md:mt-0 mt-[7px]">
                          <Text
                            className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-900_01"
                            size="txtJejuHallasan50Gray90001"
                          >
                            Telehealth
                          </Text>
                          <Text
                            className="leading-[160.00%] text-blue_gray-700_02 text-lg w-full"
                            size="txtRobotoRegular18"
                          >
                            Discover Serenity: Connect with our telehealth
                            mental health advisors – your oasis of support.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-itim items-end mt-[117px] md:px-10 sm:px-5 px-[386px] w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
            size="txtItimRegular48"
          >
            Give Us Your Honest Thought
          </Text>
        </div>
        <div className="flex flex-col font-jacquesfrancois gap-8 items-center mt-[9px] w-full">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-800_01"
            size="txtJacquesFrancoisRegular28"
          >
            How useful this page were to you ?
          </Text>
          <div className="sm:h-[1075px] h-[1076px] md:h-[376px] md:px-5 relative w-full">
            <div className="absolute font-jacquesfrancois sm:h-[1075px] h-[1076px] md:h-[174px] inset-y-[0] left-[30%] my-auto w-[36%] sm:w-full">
              <Text
                className="absolute left-[0] md:text-2xl sm:text-[22px] text-[26px] text-center text-gray-800_01 top-[10%]"
                size="txtJacquesFrancoisRegular26"
              >
                Can tell us more ? (optional)
              </Text>
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[83%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col md:gap-10 gap-[941px] items-end justify-start w-full">
                    <div className="flex flex-row items-center justify-between mr-[5px] w-[99%] md:w-full">
                      <Img
                        className="h-[57px] w-[57px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Img
                        className="h-[57px] w-[57px]"
                        src="images/img_airplane.svg"
                        alt="airplane_One"
                      />
                      <Img
                        className="h-[57px] w-[57px]"
                        src="images/img_airplane.svg"
                        alt="airplane_Two"
                      />
                      <Img
                        className="h-[57px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup"
                      />
                      <Img
                        className="h-[57px]"
                        src="images/img_thumbsup.svg"
                        alt="thumbsup_One"
                      />
                    </div>
                    <div className="flex flex-row gap-[34px] items-center justify-end w-[36%] md:w-full">
                      <Img
                        className="h-[77px]"
                        src="images/img_filter.svg"
                        alt="filter"
                      />
                      <Img
                        className="h-[77px]"
                        src="images/img_filter.svg"
                        alt="filter_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-gray-200 flex flex-col font-jacquesfrancois items-start justify-start p-[9px] right-[29%] rounded-[15px] top-[14%]">
              <Text
                className="mb-[222px] md:ml-[0] ml-[13px] text-base text-center text-gray-800_01"
                size="txtJacquesFrancoisRegular16"
              >
                Share your feedback here ......
              </Text>
            </div>
            <Footer1 className="absolute bg-black-900_01 bottom-[9%] flex font-roboto inset-x-[0] items-center justify-center mx-auto w-full" />
            <Button
              className="absolute cursor-pointer font-jejuhallasan inset-x-[0] min-w-[531px] sm:min-w-full mx-auto rounded-[14px] text-2xl md:text-[22px] text-center sm:text-xl top-[41%]"
              color="blue_gray_900_04"
              size="2xl"
              variant="fill"
            >
              Send Feedback
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPagePage;
