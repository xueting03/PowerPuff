import React from "react";

import { Img, Text } from "components";

const TelehealthOneTab = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img className="h-4 w-4" alt="iconchat" src={props?.userimage} />
        <Text
          className="text-center text-gray-900 text-sm w-auto"
          size="txtInterMedium14Gray900"
        >
          {props?.ongoingconsultationstext}
        </Text>
        <div className="bg-deep_orange-500 flex flex-col items-center justify-center px-2 rounded-lg w-auto">
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-center text-white-A700 text-xs tracking-[-0.06px] w-auto"
              size="txtInterMedium12"
            >
              {props?.ongoingconsultationsnumber}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TelehealthOneTab.defaultProps = {
  userimage: "images/img_iconchat.svg",
  ongoingconsultationstext: "Ongoing Consultations",
  ongoingconsultationsnumber: "0",
};

export default TelehealthOneTab;
