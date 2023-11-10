import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-[110px] mr-[50px] my-24 w-[89%]">
          <div className="flex flex-col gap-[34px] items-start justify-start w-[61%] md:w-full">
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
                We understand that when you make a  donation, you want to know
                exactly where your money is going and we pledge to be
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
          <div className="h-[375px] relative w-[375px] sm:w-full">
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
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
