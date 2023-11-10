import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Radio, Text } from "components";
import TelehealthOneContent from "components/TelehealthOneContent";
import TelehealthOneContent1 from "components/TelehealthOneContent1";
import TelehealthOneHeader from "components/TelehealthOneHeader";
import TelehealthOneHeader1 from "components/TelehealthOneHeader1";
import TelehealthOneLeading from "components/TelehealthOneLeading";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";
import TelehealthOneTab from "components/TelehealthOneTab";
import TelehealthOneTab1 from "components/TelehealthOneTab1";

const TelehealthOnePage = () => {
  const navigate = useNavigate();

  const telehealthOneLeadingPropList = [
    {},
    {
      userprofession: "Primary Care Physician",
      username: "Dr.Jennifer Johnson",
    },
    {
      userprofession: "Mental Health Professional",
      username: "Dr. Samuel Smith",
    },
    { userprofession: "Dermatologist", username: "Dr. Lily Chen" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jejuhallasan sm:gap-10 md:gap-10 gap-[77px] items-center justify-start mx-auto py-[73px] w-auto sm:w-full md:w-full">
        <TelehealthOneRowframeone className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full" />
        <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1383px] mx-auto p-[21px] md:px-5 w-full">
          <Text
            className="ml-2.5 sm:ml-[0] sm:text-[31px] md:text-[37px] text-[41px] text-black-900 text-center"
            size="txtJejuHallasan41"
          >
            TELEHEALTH
          </Text>
          <Input
            name="group2086"
            placeholder="Consult health professionals"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-center text-xl w-full"
            wrapClassName="flex sm:flex-1 mb-0.5 sm:ml-[0] ml-[74px] w-[17%] sm:w-full"
            prefix={
              <Img
                className="mr-1.5 my-auto"
                src="images/img_icon_message.svg"
                alt="icon / message"
              />
            }
            shape="round"
            color="indigo_900"
            size="xs"
            variant="fill"
          ></Input>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center min-w-[222px] sm:ml-[0] ml-[27px] rounded-[30px]"
            onClick={() => navigate("/telehealthtwo")}
            leftIcon={
              <div className="mr-[5px] bg-blue_gray-500">
                <Img src="images/img_calendar.svg" alt="calendar" />
              </div>
            }
            color="indigo_900"
            size="lg"
            variant="fill"
          >
            <div className="leading-[normal] text-center text-xl">
              My appointments
            </div>
          </Button>
          <Input
            name="groupFifty"
            placeholder="History"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-center text-xl w-full"
            wrapClassName="flex sm:flex-1 sm:ml-[0] ml-[46px] w-[17%] sm:w-full"
            prefix={
              <Img
                className="mr-7 my-auto"
                src="images/img_icon_file.svg"
                alt="icon / file"
              />
            }
            shape="round"
            color="indigo_900"
            size="sm"
            variant="fill"
          ></Input>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[222px] ml-9 sm:ml-[0] rounded-[30px]"
            leftIcon={
              <Img
                className="mr-1.5"
                src="images/img_icon_healthplus.svg"
                alt="icon / health-plus"
              />
            }
            color="indigo_900"
            size="xs"
            variant="fill"
          >
            <div className="leading-[normal] text-center text-xl">
              My Hospitals
            </div>
          </Button>
        </div>
        <div className="flex flex-col font-inter items-center justify-start max-w-[1308px] mx-auto md:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col font-jejuhallasan gap-[30px] justify-start">
                <div className="flex flex-col gap-[5px] items-start justify-start ml-3.5 md:ml-[0]">
                  <Text
                    className="ml-0.5 md:ml-[0] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                    size="txtJejuHallasan48"
                  >
                    Consult our health professionals
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                    size="txtJejuHallasan24"
                  >
                    Check and filter all your appointments here
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-inter gap-3 h-[54px] md:h-auto items-start justify-start w-[529px] sm:w-full">
                  <TelehealthOneTab className="bg-blue-100 border border-indigo-200 border-solid flex flex-row gap-2 h-[54px] md:h-auto items-center justify-center p-3 rounded-md w-[235px]" />
                  <TelehealthOneTab1 className="bg-blue_gray-50 border border-blue_gray-100_01 border-solid flex flex-row gap-2 h-[54px] md:h-auto items-center justify-center p-3 rounded-md w-[235px]" />
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center mb-[37px] min-w-[221px] md:mt-0 mt-[71px]"
                leftIcon={
                  <Img
                    className="h-5 mr-2"
                    src="images/img_icon_pluscircle.svg"
                    alt="icon / plus-circle"
                  />
                }
                shape="round"
                color="indigo_200_ed"
                size="2xl"
                variant="fill"
              >
                <div className="font-inter font-semibold text-center text-sm">
                  New Consultation
                </div>
              </Button>
            </div>
            <div className="border border-indigo-50 border-solid flex md:flex-col flex-row md:gap-5 h-[448px] md:h-auto items-start justify-start max-w-[1305px] rounded-[10px] w-full">
              <div className="flex flex-col h-[441px] md:h-auto items-center justify-start w-[284px]">
                <TelehealthOneHeader className="flex flex-col items-start justify-start w-full" />
                <List
                  className="flex flex-col items-start w-full"
                  orientation="vertical"
                >
                  {telehealthOneLeadingPropList.map((props, index) => (
                    <React.Fragment key={`TelehealthOneLeading${index}`}>
                      <TelehealthOneLeading
                        className="flex flex-1 flex-col items-start justify-start my-0 w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-px grid md:grid-cols-1 grid-cols-2 w-[64%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col h-[369px] md:h-auto items-start justify-start max-w-[689px] w-full">
                  <TelehealthOneHeader1 className="flex flex-col h-[45px] md:h-auto items-start justify-start w-full" />
                  <div className="flex flex-col items-start justify-start w-full">
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      starone="images/img_iconstar.svg"
                      startwo="images/img_iconstar.svg"
                      starthree="images/img_iconstar.svg"
                      starfour="images/img_iconstar.svg"
                      iconstarFour="images/img_iconstar.svg"
                    />
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="I have a rash"
                      description={
                        <>
                          Let&#39;s run some tests to understand better what
                          might be causing these symptoms.
                        </>
                      }
                    />
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="I’m suffering from anxiety"
                      description={
                        <>
                          Good afternoon. It&#39;s important that we address
                          this. Anxiety can significantly impact your quality of
                          life. Let&#39;s explore some strategies and perhaps
                          treatments that can help you manage your anxiety
                          effectively.
                        </>
                      }
                    />
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="I have a rash"
                      description={
                        <>
                          Hello, let&#39;s take a look at that rash. I&#39;ll
                          also ask you some questions about your symptoms and
                          any potential allergens or irritants you might have
                          been exposed to.
                        </>
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[137px]">
                  <TelehealthOneHeader1
                    className="flex flex-col h-[45px] md:h-auto items-start justify-start w-full"
                    conversationtext="Date and time"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="1 Jul, 2023"
                      description="1:00 PM"
                    />
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="1 Jul, 2023"
                      description="10:00 AM"
                    />
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="1 Jul, 2023"
                      description="4:00 PM"
                    />
                    <TelehealthOneContent
                      className="flex flex-col items-start justify-start w-full"
                      feelinguneasy="30 Jun, 2023"
                      description="8:00 AM"
                    />
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-start justify-start w-auto">
                <List
                  className="flex flex-col items-start w-full"
                  orientation="vertical"
                >
                  <Img
                    className="h-[45px] max-h-[45px] my-0"
                    src="images/img_header.svg"
                    alt="header"
                  />
                  <TelehealthOneContent1 className="flex flex-1 flex-col items-start justify-start my-0 w-full" />
                  <TelehealthOneContent1 className="flex flex-1 flex-col items-start justify-start my-0 w-full" />
                  <TelehealthOneContent1 className="flex flex-1 flex-col items-start justify-start my-0 w-full" />
                  <TelehealthOneContent1 className="flex flex-1 flex-col items-start justify-start my-0 w-full" />
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelehealthOnePage;
