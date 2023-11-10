import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer1 from "components/Footer1";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";

const AIBOTPage = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col font-jejuhallasan items-center justify-start mx-auto w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[718px] items-center justify-end py-[104px] w-full"
          style={{ backgroundImage: "url('images/img_group24.png')" }}
        >
          <div className="flex flex-col gap-[9px] justify-start mt-[3px] w-full">
            <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
            <Text
              className="ml-10 md:ml-[0] md:text-5xl text-9xl text-blue-100_01 text-center"
              size="txtJejuHallasan128"
            >
              <span className="text-white-A700 font-jomhuria font-normal">
                Welcome to
              </span>
              <span className="text-blue-100_01 font-jomhuria font-normal">
                {" "}
              </span>
              <span className="text-yellow-A400 font-jomhuria font-normal">
                AI Compassion Bot !
              </span>
            </Text>
            <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[57px] md:px-5">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue-50 text-center"
                size="txtJaldiRegular36"
              >
                The AI platform dedicated to addressing and alleviating
                depression.
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-white-A700_02 sm:text-xl w-full"
                size="txtJacquesFrancoisRegular24"
              >
                <span className="text-yellow-400 font-karla text-left font-normal">
                  Depression
                </span>
                <span className="text-white-A700_02 font-karla text-left font-normal">
                  {" "}
                  is a prevalent and severe medical condition that impacts your
                  emotions, thoughts, and behaviors negatively. It results in
                  feelings of sadness and a lack of interest in activities that
                  used to bring you joy. This condition can lead to various
                  emotional and physical challenges and impair your performance
                  both in your professional and personal life.
                </span>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-karla items-center justify-start mt-[73px] w-full">
          <div className="flex flex-col md:gap-10 gap-[69px] justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start md:ml-[0] ml-[60px] md:px-5 w-[68%] md:w-full">
              <Img
                className="h-[78px] sm:h-auto object-cover rounded-lg w-[9%] md:w-full"
                src="images/img_rectangle1344.png"
                alt="rectangle1344"
              />
              <Text
                className="md:mt-0 mt-[30px] text-2xl md:text-[22px] text-gray-50_02 sm:text-xl"
                size="txtKarlaRegular24"
              >
                <>
                  hello, I&#39;ve been feeling really down lately, and I
                  don&#39;t know how to handle it.
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-blue_gray-700_01 flex sm:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start p-11 md:px-10 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[78px] md:h-auto ml-4 sm:ml-[0] sm:mt-0 mt-[9px] object-cover rounded-lg w-[7%] sm:w-full"
                  src="images/img_rectangle1342.png"
                  alt="rectangle1342"
                />
                <Text
                  className="sm:flex-1 sm:mt-0 mt-[30px] text-2xl md:text-[22px] text-gray-50_02 sm:text-xl w-[67%] sm:w-full"
                  size="txtKarlaRegular24"
                >
                  <>
                    I&#39;m here to listen and help. I&#39;m sorry to hear that
                    you&#39;re feeling this way. It&#39;s important to talk
                    about these feelings. Have you talked to anyone in your life
                    about what you&#39;re going through?
                  </>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start md:ml-[0] ml-[60px] mt-[55px] md:px-5 w-[71%] md:w-full">
                <Img
                  className="h-[78px] sm:h-auto object-cover rounded-lg w-[9%] md:w-full"
                  src="images/img_rectangle1344.png"
                  alt="rectangle1349"
                />
                <Text
                  className="md:mt-0 mt-[19px] text-2xl md:text-[22px] text-gray-50_02 sm:text-xl"
                  size="txtKarlaRegular24"
                >
                  <>
                    I&#39;ve talked to a few friends, but I don&#39;t want to
                    burden them with my problems.
                  </>
                </Text>
              </div>
              <div className="bg-blue_gray-700_01 flex sm:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start mt-[74px] p-[49px] md:px-10 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[78px] md:h-auto sm:ml-[0] ml-[11px] sm:mt-0 mt-1.5 object-cover rounded-lg w-[7%] sm:w-full"
                  src="images/img_rectangle1342.png"
                  alt="rectangle1351"
                />
                <Text
                  className="sm:flex-1 sm:mt-0 mt-5 text-2xl md:text-[22px] text-gray-50_02 sm:text-xl w-[67%] sm:w-full"
                  size="txtKarlaRegular24"
                >
                  <>
                    Sharing your feelings with friends is a positive step, but
                    sometimes it&#39;s beneficial to talk to a mental health
                    professional who can provide guidance. It&#39;s essential to
                    take care of your mental well-being.
                  </>
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[82px] items-center justify-start md:ml-[0] ml-[60px] mt-[55px] md:px-5 w-2/5 md:w-full">
                <Img
                  className="h-[78px] md:h-auto object-cover rounded-lg w-[15%] sm:w-full"
                  src="images/img_rectangle1344.png"
                  alt="rectangle1353"
                />
                <Text
                  className="text-2xl md:text-[22px] text-gray-50_02 sm:text-xl"
                  size="txtKarlaRegular24"
                >
                  What can I do to start feeling better?
                </Text>
              </div>
              <div className="bg-blue_gray-700_01 flex sm:flex-col flex-row md:gap-10 gap-[82px] items-start justify-start mt-[75px] p-[49px] md:px-10 sm:px-5 w-full">
                <Img
                  className="sm:flex-1 h-[78px] md:h-auto sm:ml-[0] ml-[11px] sm:mt-0 mt-[5px] object-cover rounded-lg w-[7%] sm:w-full"
                  src="images/img_rectangle1342.png"
                  alt="rectangle1354"
                />
                <Text
                  className="sm:flex-1 sm:mt-0 mt-5 text-2xl md:text-[22px] text-gray-50_02 sm:text-xl w-[67%] sm:w-full"
                  size="txtKarlaRegular24"
                >
                  You can try some self-care practices like mindfulness
                  exercises, keeping a journal, or engaging in activities that
                  you used to enjoy. These can help alleviate some of your
                  emotional distress.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-karla items-end justify-start max-w-[1091px] mt-[145px] mx-auto md:px-5 w-full">
          <Text
            className="bg-blue_gray-900_01 border border-blue_gray-100_02 border-solid h-[57px] justify-center pb-2 pl-[35px] pr-[30px] pt-[19px] sm:px-5 rounded-lg text-2xl md:text-[22px] text-gray-50_02 sm:text-xl w-[221px]"
            size="txtKarlaRegular24"
          >
            Regenerate
          </Text>
          <div className="bg-gray-700 flex flex-row md:gap-10 items-center justify-between mt-[19px] p-[22px] sm:px-5 rounded-[10px] w-full">
            <Text
              className="ml-[5px] text-2xl md:text-[22px] text-gray-50_02 sm:text-xl"
              size="txtKarlaRegular24"
            >
              Tell us your feeling....
            </Text>
            <Img
              className="h-[51px] mr-2"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
          <Img
            className="h-[30px] mt-32"
            src="images/img_refresh.svg"
            alt="refresh"
          />
        </div>
        <Footer1 className="bg-black-900_01 flex font-roboto items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AIBOTPage;
