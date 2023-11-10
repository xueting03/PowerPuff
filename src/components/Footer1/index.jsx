import React from "react";

import { Button, Input, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[89px] mt-[86px] mx-20 w-[89%]">
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
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    About us
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Team
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    What we do
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Contact
                  </Text>
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
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Projects
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Events
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Donate
                  </Text>
                </li>
                <li>
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Blog
                  </Text>
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
                  <Text
                    className="text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Facebook
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[27px] text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Instagram
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-6 text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Twitter
                  </Text>
                </li>
                <li>
                  <Text
                    className="mt-[25px] text-sm text-white-A700_a0"
                    size="txtRobotoRegular14"
                  >
                    Linkdin{" "}
                  </Text>
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
                className="absolute cursor-pointer font-medium font-roboto h-full inset-y-[0] leading-[normal] min-w-[136px] my-auto right-[0] rounded text-base text-center"
                color="white_A700"
                size="2xl"
                variant="fill"
              >
                Subscribe
              </Button>
              <Input
                name="groupSixtyTwo"
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
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
