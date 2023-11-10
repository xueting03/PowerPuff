import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const MoodMixInfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="!w-[23px] h-[23px] m-auto overflow-visible">
          <CircularProgressbar
            className="!w-[23px] h-[23px] m-auto overflow-visible"
            value={64}
            counterClockwise
            strokeWidth={4}
            styles={{
              trail: { strokeWidth: 4, stroke: "#ecebf1" },
              path: {
                strokeLinecap: "square",
                height: "100%",
                transformOrigin: "center",
                transform: "rotate(163deg)",
                stroke: "#000000",
              },
            }}
          ></CircularProgressbar>
        </div>
        <div className="absolute flex flex-row h-max inset-[0] items-center justify-center m-auto w-[7px]">
          <div className="bg-gray-900_05 h-[7px] w-[29%]"></div>
          <div className="bg-gray-900_05 h-[7px] ml-0.5 w-[29%]"></div>
        </div>
      </div>
    </>
  );
};

MoodMixInfo.defaultProps = {};

export default MoodMixInfo;
