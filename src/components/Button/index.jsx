import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-lg" };
const variants = {
  fill: {
    cyan_200: "bg-cyan-200 text-white-A700",
    red_600_dd: "bg-red-600_dd text-white-A700",
    amber_300_02: "bg-amber-300_02 text-black-900",
    blue_gray_900_04: "bg-blue_gray-900_04 text-white-A700",
    amber_300_03: "bg-amber-300_03 text-black-900",
    indigo_900: "bg-indigo-900 text-white-A700",
    cyan_800: "bg-cyan-800 shadow-bs text-white-A700",
    teal_200: "bg-teal-200 shadow-bs text-white-A700",
    blue_300_01: "bg-blue-300_01 shadow-bs text-white-A700",
    deep_purple_400: "bg-deep_purple-400 shadow-bs text-white-A700",
    white_A700: "bg-white-A700 text-gray-900_01",
    light_blue_500: "bg-light_blue-500",
    indigo_200_ed: "bg-indigo-200_ed text-white-A700",
    blue_300: "bg-blue-300 text-gray-50_09",
    red_600: "bg-red-600 shadow-bs text-white-A700",
    indigo_900_ed: "bg-indigo-900_ed text-white-A700",
  },
  outline: {
    amber_A200: "border border-amber-A200 border-solid text-indigo-900",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "pl-[7px] pr-[9px] py-[9px]",
  md: "pl-2.5 pr-[11px] py-[11px]",
  lg: "p-[13px]",
  xl: "p-4",
  "2xl": "p-[19px]",
  "3xl": "pl-[15px] pr-3.5 py-6",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "cyan_200",
    "red_600_dd",
    "amber_300_02",
    "blue_gray_900_04",
    "amber_300_03",
    "indigo_900",
    "cyan_800",
    "teal_200",
    "blue_300_01",
    "deep_purple_400",
    "white_A700",
    "light_blue_500",
    "indigo_200_ed",
    "blue_300",
    "red_600",
    "indigo_900_ed",
    "amber_A200",
  ]),
};

export { Button };
