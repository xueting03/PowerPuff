import React from "react";

import { Img, Text } from "components";

const TelehealthOneHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-gray-50_01 flex flex-col items-center justify-start sm:px-5 px-6 py-3 w-full">
            <div className="flex flex-row gap-1 items-center justify-start w-full">
              <Text
                className="flex-1 text-blue_gray-800 text-xs tracking-[-0.06px] w-auto"
                size="txtInterMedium12Bluegray800"
              >
                {props?.username}
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_arrowup.svg"
                alt="arrowup"
              />
            </div>
          </div>
          <Img
            className="h-px w-full"
            src="images/img_separator.svg"
            alt="separator"
          />
        </div>
      </div>
    </>
  );
};

TelehealthOneHeader.defaultProps = { username: "Name" };

export default TelehealthOneHeader;
