import React from "react";

import { Img, Text } from "components";

const TelehealthOneContent = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-start sm:px-5 px-6 py-5 w-full">
          <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
            <div className="flex flex-row items-start justify-start w-auto">
              {!!props?.starone ? (
                <Img className="h-5 w-5" alt="iconstar" src={props?.starone} />
              ) : null}
              {!!props?.startwo ? (
                <Img
                  className="h-5 w-5"
                  alt="iconstar_One"
                  src={props?.startwo}
                />
              ) : null}
              {!!props?.starthree ? (
                <Img
                  className="h-5 w-5"
                  alt="iconstar_Two"
                  src={props?.starthree}
                />
              ) : null}
              {!!props?.starfour ? (
                <Img
                  className="h-5 w-5"
                  alt="iconstar_Three"
                  src={props?.starfour}
                />
              ) : null}
              {!!props?.iconstarFour ? (
                <Img
                  className="h-5 w-5"
                  alt="iconstar_Four"
                  src={props?.iconstarFour}
                />
              ) : null}
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-blue_gray-800 text-sm w-full"
                  size="txtInterMedium14Bluegray800"
                >
                  {props?.feelinguneasy}
                </Text>
                <Text
                  className="text-blue_gray-500 text-sm w-full"
                  size="txtInterRegular14"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="h-px w-full"
          src="images/img_separator_blue_gray_50.svg"
          alt="separator_One"
        />
      </div>
    </>
  );
};

TelehealthOneContent.defaultProps = {
  feelinguneasy: "I’m feeling uneasy",
  description: (
    <>
      Good morning. I&#39;m sorry to hear that you&#39;re not feeling well. Can
      you tell me more about your symptoms? How long have you been feeling this
      way?
    </>
  ),
};

export default TelehealthOneContent;
