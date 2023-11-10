import React from "react";

import { Img, Text } from "components";

const TelehealthOneTab1 = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.userimage ? (
          <Img className="h-4 w-4" alt="iconhomealt" src={props?.userimage} />
        ) : null}
        {!!props?.visitcount ? (
          <Text
            className="text-blue_gray-800 text-center text-sm w-auto"
            size="txtInterMedium14Bluegray800"
          >
            {props?.visitcount}
          </Text>
        ) : null}
        <div className="bg-indigo-50 flex flex-col items-center justify-center px-2 rounded-lg w-auto">
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-blue_gray-800 text-center text-xs tracking-[-0.06px] w-auto"
              size="txtInterMedium12Bluegray800"
            >
              {props?.labelFive}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TelehealthOneTab1.defaultProps = { labelFive: "0" };

export default TelehealthOneTab1;
