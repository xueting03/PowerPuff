import React from "react";

import { Button, Img, List, Text } from "components";

const TelehealthTwoDatepickermenu = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[280px]">
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="round"
                    size="sm"
                  >
                    <Img
                      className="h-5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </Button>
                  <Text
                    className="text-blue_gray-800 text-center text-lg w-auto"
                    size="txtInterSemiBold18Bluegray800"
                  >
                    {props?.julycounter}
                  </Text>
                  <Button
                    className="flex h-9 items-center justify-center w-9"
                    shape="round"
                    size="sm"
                  >
                    <Img
                      className="h-5"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-1 items-start w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-start justify-start my-0 w-full">
                    <div className="flex flex-col items-center justify-start p-[9px]">
                      <Text
                        className="my-[3px] text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.day}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dayOne}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[9px]">
                      <Text
                        className="my-1 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dayTwo}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[11px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dayThree}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dayFour}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dayFive}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.daySix}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start my-0 rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.date}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.dateOne}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.dateTwo}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.dateThree}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[11px]">
                      <Text
                        className="h-5 my-0.5 text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.dateFour}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.dateFive}
                      </Text>
                    </div>
                    <Button
                      className="!text-white-A700 cursor-pointer font-inter min-w-[43px] rounded-bl-[24px] rounded-tl-[24px] text-base text-center"
                      color="light_blue_500"
                      size="xl"
                      variant="fill"
                    >
                      {props?.one}
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start my-0 rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.date1}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dateone1}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datetwo1}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datethree1}
                      </Text>
                    </div>
                    <div className="bg-light_blue-500_33 flex flex-col items-center justify-end p-1 rounded-[21px] w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefour1}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefive1}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dateSix}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start my-0 rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.date2}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dateone2}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datetwo2}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datethree2}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefour2}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefive2}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datesix1}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start my-0 rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.date3}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dateone3}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datetwo3}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datethree3}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefour3}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefive3}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datesix2}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start my-0 rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.date4}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[11px]">
                      <Text
                        className="my-0.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dateone4}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datetwo4}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datethree4}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-end p-1 w-[15%]">
                      <Text
                        className="mt-2.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefour4}
                      </Text>
                      <div className="bg-indigo-A100 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datefive4}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-3">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.datesix3}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row items-start justify-start my-0 rounded-[20px] w-full">
                    <div className="flex flex-col items-center justify-start p-[11px]">
                      <Text
                        className="h-5 my-0.5 text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.date5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start p-[13px]">
                      <Text
                        className="text-base text-blue_gray-900_02 text-center"
                        size="txtInterRegular16"
                      >
                        {props?.dateone5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.datetwo5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.datethree5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.datefour5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.datefive5}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-end p-[13px]">
                      <Text
                        className="text-base text-blue_gray-300 text-center"
                        size="txtInterRegular16Bluegray300"
                      >
                        {props?.datesix4}
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TelehealthTwoDatepickermenu.defaultProps = {
  julycounter: "July 2023",
  day: "Mo",
  dayOne: "Tu",
  dayTwo: "We",
  dayThree: "Th",
  dayFour: "Fr",
  dayFive: "Sa",
  daySix: "Su",
  date: "26",
  dateOne: "27",
  dateTwo: "28",
  dateThree: "29",
  dateFour: "30",
  dateFive: "31",
  one: "1",
  date1: "2",
  dateone1: "3",
  datetwo1: "4",
  datethree1: "5",
  datefour1: "6",
  datefive1: "7",
  dateSix: "8",
  date2: "9",
  dateone2: "10",
  datetwo2: "11",
  datethree2: "12",
  datefour2: "13",
  datefive2: "14",
  datesix1: "15",
  date3: "16",
  dateone3: "17",
  datetwo3: "18",
  datethree3: "19",
  datefour3: "20",
  datefive3: "21",
  datesix2: "22",
  date4: "23",
  dateone4: "24",
  datetwo4: "25",
  datethree4: "26",
  datefour4: "27",
  datefive4: "28",
  datesix3: "29",
  date5: "30",
  dateone5: "31",
  datetwo5: "1",
  datethree5: "2",
  datefour5: "3",
  datefive5: "4",
  datesix4: "5",
};

export default TelehealthTwoDatepickermenu;
