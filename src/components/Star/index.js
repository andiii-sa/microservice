import React from "react";

import propTypes from "prop-types";

import IconStar from "public/images/icon-star.svg";

export default function Star({ className, value, height, width }) {
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value; index++) {
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }

  const starPlacholder = [];
  for (let index = 0; index < 5; index++) {
    starPlacholder.push(
      <div
        className="star placholder"
        key={`starPlacholder-${index}`}
        style={{ left: index * width, height: height, width: width }}
      />
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlacholder}
        {star}
      </div>
      <IconStar />
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
};
