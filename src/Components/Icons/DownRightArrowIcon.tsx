import React from "react";

const DownRightArrowIcon = ({ size = 32, color = "#e0d7d7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      className="injected-svg"
    >
      <path
        opacity="0.4"
        d="M4 3V5.07692C4 7.07786 4 8.07833 4.14533 8.91545C4.94529 13.5235 8.90656 17.1376 13.9574 17.8674C14.8749 18 16.8068 18 19 18"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17 21C17.6068 20.4102 20 18.8403 20 18C20 17.1597 17.6068 15.5898 17 15"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default DownRightArrowIcon;
