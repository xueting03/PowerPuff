import React from "react";

import { Input, List, Text } from "components";

const VirtualFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-start justify-center w-[10%] md:w-full">
          <Text
            className="mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
            size="txtRobotoRomanBold24"
          >
            {props?.largerthan}
          </Text>
          <Text
            className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
            size="txtCourgetteRegular25"
          >
            {props?.i}
          </Text>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[88px] grid grid-cols-3 md:ml-[0] ml-[102px] w-[28%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-[27px] items-start justify-start w-full">
            <Text className="text-base text-white-A700" size="txtRobotoBold16">
              {props?.hometext}
            </Text>
            <Text
              className="text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.aboutustext}
            </Text>
            <Text
              className="text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.teamtext}
            </Text>
            <Text
              className="text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.whatwedotext}
            </Text>
            <Text
              className="text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.contacttext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text className="text-base text-white-A700" size="txtRobotoBold16">
              {props?.moretext}
            </Text>
            <Text
              className="mt-7 text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.projectstext}
            </Text>
            <Text
              className="mt-6 text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.eventstext}
            </Text>
            <Text
              className="mt-[26px] text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.donatetext}
            </Text>
            <Text
              className="mt-[27px] text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.blogtext}
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text className="text-base text-white-A700" size="txtRobotoBold16">
              {props?.connecttext}
            </Text>
            <Text
              className="mt-[27px] text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.facebooktext}
            </Text>
            <Text
              className="mt-[27px] text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.instagramtext}
            </Text>
            <Text
              className="mt-6 text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.twittertext}
            </Text>
            <Text
              className="mt-[25px] text-sm text-white-A700_a0"
              size="txtRobotoRegular14"
            >
              {props?.linkdintext}
            </Text>
          </div>
        </List>
        <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[143px] md:mt-0 my-11 w-[41%] md:w-full">
          <Text
            className="leading-[140.00%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[81%] sm:w-full"
            size="txtRobotoBold40"
          >
            {props?.subscribetoget}
          </Text>
          <div className="h-[59px] relative w-full">
            <div className="absolute bg-white-A700 flex flex-col md:h-auto h-full inset-y-[0] items-center justify-center my-auto sm:px-5 px-8 py-4 right-[0] rounded w-auto">
              {!!props?.subscribetext ? (
                <Text
                  className="text-base text-gray-900_01 text-right w-auto"
                  size="txtRobotoMedium16"
                >
                  {props?.subscribetext}
                </Text>
              ) : null}
            </div>
            <Input
              name="groupFiftyFive"
              placeholder="Your email"
              className="font-roboto leading-[normal] p-0 placeholder:text-indigo-50_63 text-base text-left w-full"
              wrapClassName="absolute inset-y-[0] left-[0] my-auto rounded w-[84%]"
              color="indigo_50_4c"
              size="md"
              variant="outline"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

VirtualFooter.defaultProps = {
  largerthan: "largerthan",
  i: "i",
  hometext: "Home",
  aboutustext: "About us",
  teamtext: "Team",
  whatwedotext: "What we do",
  contacttext: "Contact",
  moretext: "More",
  projectstext: "Projects",
  eventstext: "Events",
  donatetext: "Donate",
  blogtext: "Blog",
  connecttext: "Connect ",
  facebooktext: "Facebook",
  instagramtext: "Instagram",
  twittertext: "Twitter",
  linkdintext: "Linkdin ",
  subscribetoget: "Subscribe to get latest updates",
};

export default VirtualFooter;
