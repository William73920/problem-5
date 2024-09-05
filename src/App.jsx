import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { GiAbstract038 } from "react-icons/gi";
import { GiAbstract027 } from "react-icons/gi";
import { GiAbstract031 } from "react-icons/gi";

const ScrollLogoAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isSplit, setIsSplit] = useState(false);
  const [isAbsolute, setIsAbsolute] = useState(false);

  // Track scroll position and set split state
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Split the logo layers smoothly when the user reaches Section 2
      if (window.scrollY >= 1200) {
        setIsSplit(true);
      } else {
        setIsSplit(false);
      }

      if (window.scrollY >= 1200) {
        setIsAbsolute(true);
      } else {
        setIsAbsolute(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {console.log(scrollY)}
      <div className="section1"></div>
      <div className={`section2 ${isAbsolute ? "isRelative" : ""}`}>
        <div className={`logo_container ${isAbsolute ? "isAbsolute" : ""} `}>
          <div className={`top ${isSplit ? "isSplit" : ""}`}>
            {" "}
            <GiAbstract038
              color="blue"
              size={100}
              strokeWidth={5}
              stroke="black"
            />
          </div>
          <div className={`middle ${isSplit ? "isSplit" : ""}`}>
            <GiAbstract027
              color="green"
              size={100}
              strokeWidth={5}
              stroke="black"
            />
          </div>
          <div className={`bottom ${isSplit ? "isSplit" : ""}`}>
            <GiAbstract031
              color="red"
              size={100}
              strokeWidth={5}
              stroke="black"
            />
          </div>
        </div>
        <div className="frames"></div>
        <div className="frames"></div>
        <div className="frames"></div>
      </div>

      <div className="section3"></div>
    </div>
  );
};

export default ScrollLogoAnimation;
