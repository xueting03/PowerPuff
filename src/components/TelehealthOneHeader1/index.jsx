import React from "react";

import { Img, Text } from "components";

const TelehealthOneHeader1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[45px] md:h-auto items-start justify-start w-full">
          <div className="bg-gray-50_01 flex flex-col h-11 md:h-auto items-center justify-start sm:px-5 px-6 py-3 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-blue_gray-800 text-xs tracking-[-0.06px] w-auto"
                size="txtInterMedium12Bluegray800"
              >
                {props?.conversationtext}
              </Text>
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

TelehealthOneHeader1.defaultProps = { conversationtext: "Conversation" };

export default TelehealthOneHeader1;
