import React from "react";

import { Button, Img } from "components";

const TelehealthOneContent1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-center justify-center sm:px-5 px-6 py-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Button
              className="border border-indigo-50 border-solid flex h-8 items-center justify-center w-8"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-4"
                src="images/img_icondotsv.svg"
                alt="icondotsv"
              />
            </Button>
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

TelehealthOneContent1.defaultProps = {};

export default TelehealthOneContent1;
