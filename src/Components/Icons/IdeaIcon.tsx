'use client';

import React from "react";

const IdeaIcon = ({ width = 32, height = 32, color = "#e0d7d7" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
    >
      <path
        d="M14.9061 17.4694C14.9655 17.1726 15.1583 16.922 15.4176 16.7659C17.2676 15.6519 18.5 13.8361 18.5 11.5C18.5 7.91015 15.5899 5 12 5C8.41015 5 5.5 7.91015 5.5 11.5C5.5 13.8361 6.73235 15.6519 8.58241 16.7659C8.84173 16.922 9.03452 17.1726 9.09388 17.4694L9.33922 18.6961C9.43271 19.1635 9.84312 19.5 10.3198 19.5H13.6802C14.1569 19.5 14.5673 19.1635 14.6608 18.6961L14.9061 17.4694Z"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M21 11.5H21.5M2.5 11.5H3M18.3633 5.13604L18.7168 4.78249M5 18.5L5.5 18M18.5 18L19 18.5M5.2832 4.78319L5.63676 5.13674M12 2.5V2"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 19.5V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21L10 19.5"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IdeaIcon;
