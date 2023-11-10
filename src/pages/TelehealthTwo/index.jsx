import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Radio, Text } from "components";
import TelehealthOneContent from "components/TelehealthOneContent";
import TelehealthOneContent1 from "components/TelehealthOneContent1";
import TelehealthOneHeader from "components/TelehealthOneHeader";
import TelehealthOneHeader1 from "components/TelehealthOneHeader1";
import TelehealthOneLeading from "components/TelehealthOneLeading";
import TelehealthOneRowframeone from "components/TelehealthOneRowframeone";
import TelehealthOneTab from "components/TelehealthOneTab";
import TelehealthOneTab1 from "components/TelehealthOneTab1";
import TelehealthTwoDatepickermenu from "components/TelehealthTwoDatepickermenu";

const TelehealthTwoPage = () => {
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
    { userprofession: "Psychiatry ", username: "Dr. Ang" },
    { userprofession: "Geriatric Psychiatry", username: "Dr. Chan" },
    { userprofession: "Adolescent Psychiatry", username: "Dr.Lim" },
  ];
  const telehealthOneContentPropList = [
    {
      description: "18 Iwaya Rd, Yaba 101245, Lagos",
      feelinguneasy: "Cottage Medicare Hospital",
    },
    {
      description: "48, Ijaiye road, Ogba, (Beside UBA, Ikeja)",
      feelinguneasy: "Blue Cross Hospital",
    },
    {
      description:
        "1B, Williams Street, Off Diya street, Behind GTBank, Sawmill, Gbagada,",
      feelinguneasy: "First City Hospital",
    },
    {
      description: "27, Aljahi Masha Road, By Masha B/stop, Surulere, Lagos.",
      feelinguneasy: "First Dominican Hospital",
    },
    {
      description: "A-5-5, 5th Floor, Tower A",
      feelinguneasy: "Sunway Medical Centre",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jejuhallasan items-center justify-end mx-auto pt-[82px] w-full">
        <div className="h-[110px] md:h-[691px] sm:h-[85px] md:px-5 relative w-full">
          <div className="absolute bg-white-A700 h-16 left-[7%] top-[0] w-[82%]"></div>
          <TelehealthOneRowframeone className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto w-full" />
        </div>
        <div className="bg-blue_gray-100 flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1383px] mt-10 mx-auto p-[21px] md:px-5 w-full">
          <Text
            className="ml-2.5 sm:ml-[0] sm:text-[31px] md:text-[37px] text-[41px] text-black-900 text-center"
            size="txtJejuHallasan41"
          >
            TELEHEALTH
          </Text>
          <Button
            className="common-pointer cursor-pointer flex items-center justify-center mb-0.5 min-w-[222px] sm:ml-[0] ml-[74px] rounded-[30px]"
            onClick={() => navigate("/")}
            leftIcon={
              <Img
                className="mr-1.5"
                src="images/img_icon_message_blue_gray_500.svg"
                alt="icon / message"
              />
            }
            color="indigo_900"
            size="md"
            variant="fill"
          >
            <div className="leading-[normal] text-center text-xl">
              Consult health professionals
            </div>
          </Button>
          <Input
            name="groupSeventy"
            placeholder="My appointments"
            className="leading-[normal] p-0 placeholder:text-white-A700 text-center text-xl w-full"
            wrapClassName="flex sm:flex-1 sm:ml-[0] ml-[27px] w-[17%] sm:w-full"
            prefix={
              <div className="mr-[5px] sm:w-full sm:mx-0 w-[4%] bg-deep_orange-500">
                <Img
                  className="my-auto"
                  src="images/img_trash.svg"
                  alt="trash"
                />
              </div>
            }
            shape="round"
            color="indigo_900"
            size="sm"
            variant="fill"
          ></Input>
          <Input
            name="groupSixtyNine"
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
        <div className="flex flex-col font-inter items-center justify-end max-w-[1120px] mt-[50px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                <div className="flex flex-col gap-[26px] items-start justify-start">
                  <div className="flex flex-col gap-0.5 h-[59px] md:h-auto items-start justify-start w-[368px]">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.48px] w-auto"
                      size="txtInterSemiBold24"
                    >
                      My Appointments
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      Check and filter all your medical appointments here
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-[7px] pr-[7px] w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-start justify-start max-w-[728px] w-full">
                      <TelehealthOneTab
                        className="bg-light_blue-50 border border-light_blue-50 border-solid flex flex-row gap-2 items-center justify-center p-3 rounded-md w-auto"
                        userimage="images/img_iconhealthplus_deep_orange_500.svg"
                        ongoingconsultationstext="All Visits"
                      />
                      <TelehealthOneTab1 className="bg-blue_gray-50 border border-blue_gray-100_01 border-solid flex flex-row gap-2 items-center justify-center p-3 rounded-md w-auto" />
                      <TelehealthOneTab1
                        className="bg-blue_gray-50 border border-blue_gray-100_01 border-solid flex flex-row gap-2 items-center justify-center p-3 rounded-md w-auto"
                        userimage="images/img_iconhomealt.svg"
                        visitcount="Canceled Visits"
                      />
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center mb-[76px] min-w-[182px] md:mt-0 mt-3.5"
                  leftIcon={
                    <Img
                      className="h-5 mr-2"
                      src="images/img_icon_pluscircle.svg"
                      alt="icon / plus-circle"
                    />
                  }
                  shape="round"
                  color="indigo_200_ed"
                  size="lg"
                  variant="fill"
                >
                  <div className="font-semibold text-center text-sm">
                    New appointment
                  </div>
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-4 h-[941px] md:h-auto items-start justify-start max-w-[1120px] w-full">
                <div className="bg-white-A700 border border-indigo-50 border-solid flex md:flex-1 flex-col gap-4 justify-start py-[25px] rounded-[12px] w-[32%] md:w-full">
                  <Text
                    className="ml-6 md:ml-[0] text-gray-900 text-lg"
                    size="txtInterSemiBold18"
                  >
                    Calendar
                  </Text>
                  <div className="flex flex-col items-center justify-start mb-[193px] w-full">
                    <Img
                      className="h-px"
                      src="images/img_separator.svg"
                      alt="dividers"
                    />
                    <TelehealthTwoDatepickermenu className="flex flex-col items-start justify-start mt-6 w-[307px]" />
                    <Line className="bg-indigo-50 h-px mt-6 w-full" />
                    <div className="flex flex-row gap-3 items-start justify-start mt-8 w-[307px]">
                      <Line className="bg-indigo-A100 h-[91px] rounded-[3px] w-1.5" />
                      <div className="flex flex-col gap-1 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-blue_gray-700 text-sm w-auto"
                            size="txtInterRegular14Bluegray700"
                          >
                            11.30 - 12.00 (30 min)
                          </Text>
                        </div>
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          Dr. Alison Ogaga
                        </Text>
                        <Text
                          className="leading-[145.00%] max-w-[289px] md:max-w-full text-blue_gray-700 text-sm"
                          size="txtInterRegular14Bluegray700"
                        >
                          Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245,
                          Lagos
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 h-[773px] md:h-auto items-end justify-start max-w-[734px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[695px] items-center justify-between w-full">
                    <Text
                      className="text-gray-900 text-lg w-auto"
                      size="txtInterSemiBold18"
                    >
                      All Professionals
                    </Text>
                    <div className="flex flex-1 flex-col items-center justify-end w-full">
                      <div className="flex flex-row gap-6 items-start justify-start w-auto">
                        <div className="flex flex-row gap-1 items-center justify-center px-1 py-0.5 w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_search.svg"
                            alt="search"
                          />
                          <Text
                            className="text-blue_gray-500 text-sm tracking-[-0.28px] w-auto"
                            size="txtInterMedium14"
                          >
                            Search
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-center px-1 py-0.5 w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_iconfilteralt.svg"
                            alt="iconfilteralt"
                          />
                          <Text
                            className="text-blue_gray-500 text-sm tracking-[-0.28px] w-auto"
                            size="txtInterMedium14"
                          >
                            Filter
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1 items-center justify-center px-1 py-0.5 w-auto">
                          <Img
                            className="h-4 w-4"
                            src="images/img_arrowup.svg"
                            alt="arrowup"
                          />
                          <Text
                            className="text-blue_gray-500 text-sm tracking-[-0.28px] w-auto"
                            size="txtInterMedium14"
                          >
                            Sort
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-indigo-50 border-solid flex md:flex-col flex-row md:gap-5 h-[616px] md:h-auto items-start justify-start max-w-[734px] rounded-[10px] w-full">
                    <div className="sm:h-[1170px] h-[616px] relative w-[70%] md:w-full">
                      <div className="sm:h-[1170px] h-[616px] m-auto w-full">
                        <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                            <div className="flex flex-col items-center justify-start w-[260px]">
                              <TelehealthOneHeader className="flex flex-col items-start justify-start w-full" />
                              <div className="flex flex-col items-start justify-start w-full">
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  {telehealthOneLeadingPropList.map(
                                    (props, index) => (
                                      <React.Fragment
                                        key={`TelehealthOneLeading${index}`}
                                      >
                                        <TelehealthOneLeading
                                          className="flex flex-1 flex-col items-start justify-start w-full"
                                          {...props}
                                        />
                                      </React.Fragment>
                                    ),
                                  )}
                                </List>
                                <Img
                                  className="h-px w-full"
                                  src="images/img_separator_blue_gray_50.svg"
                                  alt="leading"
                                />
                                <Img
                                  className="h-px w-full"
                                  src="images/img_separator_blue_gray_50.svg"
                                  alt="leading_One"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[249px]">
                              <TelehealthOneHeader1
                                className="flex flex-col h-[45px] md:h-auto items-start justify-start w-full"
                                conversationtext="Address"
                              />
                              <div className="flex flex-col items-start justify-start w-full">
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  {telehealthOneContentPropList.map(
                                    (props, index) => (
                                      <React.Fragment
                                        key={`TelehealthOneContent${index}`}
                                      >
                                        <TelehealthOneContent
                                          className="flex flex-1 flex-col items-start justify-start w-full"
                                          {...props}
                                        />
                                      </React.Fragment>
                                    ),
                                  )}
                                </List>
                                <List
                                  className="flex flex-col gap-px items-center w-full"
                                  orientation="vertical"
                                >
                                  <div
                                    className="bg-cover bg-no-repeat flex flex-1 flex-col h-[81px] items-start justify-start w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group71.svg')",
                                    }}
                                  >
                                    <div className="flex flex-col items-center justify-start mb-[39px] md:ml-[0] ml-[11px] w-[201px]">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-blue_gray-800 text-sm w-full"
                                          size="txtInterMedium14Bluegray800"
                                        >
                                          Sunway Medical Centre
                                        </Text>
                                        <Text
                                          className="text-blue_gray-500 text-sm w-full"
                                          size="txtInterRegular14"
                                        >
                                          A-5-5, 5th Floor, Tower A
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-10 md:h-auto items-center justify-start w-[201px]">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-blue_gray-800 text-sm w-full"
                                          size="txtInterMedium14Bluegray800"
                                        >
                                          Sunway Medical Centre
                                        </Text>
                                        <Text
                                          className="text-blue_gray-500 text-sm w-full"
                                          size="txtInterRegular14"
                                        >
                                          A-5-5, 5th Floor, Tower A
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                                <Img
                                  className="h-px w-full"
                                  src="images/img_group71.svg"
                                  alt="content"
                                />
                                <Img
                                  className="h-px w-full"
                                  src="images/img_group71.svg"
                                  alt="content_One"
                                />
                                <Img
                                  className="h-px w-full"
                                  src="images/img_group71.svg"
                                  alt="content_Two"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <TelehealthOneContent
                          className="absolute bottom-[28%] flex flex-col items-center justify-start right-[2%] w-[249px]"
                          feelinguneasy="Sunway Medical Centre"
                          description="A-5-5, 5th Floor, Tower A"
                        />
                      </div>
                      <TelehealthOneContent
                        className="absolute bottom-[41%] flex flex-col items-center justify-start right-[2%] w-[249px]"
                        feelinguneasy="Sunway Medical Centre"
                        description="A-5-5, 5th Floor, Tower A"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <Img
                        className="h-[45px] w-[225px]"
                        src="images/img_header_gray_50_01.svg"
                        alt="header_One"
                      />
                      <List
                        className="flex flex-col gap-2.5 h-[571px] items-start w-[225px] md:w-full"
                        orientation="vertical"
                      >
                        {new Array(7).fill({}).map((props, index) => (
                          <React.Fragment key={`TelehealthOneContent1${index}`}>
                            <TelehealthOneContent1
                              className="flex flex-col items-start justify-start my-0 w-full"
                              {...props}
                            />
                          </React.Fragment>
                        ))}
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TelehealthTwoPage;
