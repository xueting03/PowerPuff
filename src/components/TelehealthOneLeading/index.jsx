import React from "react";

import { Img, Text } from "components";

const TelehealthOneLeading = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-start sm:px-5 px-6 py-5 w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-center w-10">
              <div className="h-10 relative w-10">
                <Img
                  className="h-10 m-auto rounded-[50%] w-10"
                  src="images/img_image.png"
                  alt="image"
                />
                <div className="absolute bg-green-900 bottom-[0] h-2.5 outline outline-[1px] outline-white-A700 right-[5%] rounded-[50%] w-2.5"></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <Text
                className="text-gray-900 text-sm w-full"
                size="txtInterMedium14Gray900"
              >
                {props?.username}
              </Text>
              <Text
                className="text-blue_gray-700 text-sm w-full"
                size="txtInterRegular14Bluegray700"
              >
                {props?.userprofession}
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="h-px w-full"
          src="images/img_separator_blue_gray_50.svg"
          alt="separator"
        />
      </div>
    </>
  );
};

TelehealthOneLeading.defaultProps = {
  username: "Dr. Alison Ogaga",
  userprofession: "General Practioner ",
};

export default TelehealthOneLeading;
