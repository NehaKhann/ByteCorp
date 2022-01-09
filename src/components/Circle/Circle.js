import React from "react";
import { Circlestyle } from "./Circlestyle";

const Circle = ({ color, images, curimage }) => {
  return (
    <Circlestyle color={color}>
      <div className="box">
      <div className="main-image">
          <img
            // ref={currentBigImageAnimation.ref}
            src={images[curimage]}
            alt="image not found"
          />
          </div>
        <div class="bigCir">
          <div class="circle">
            <div class="inner-circle">
            {images.map((num, i) => (
                <img
                  key={i}
                  src={num}
                  alt=""
      
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Circlestyle>
  );
};

export default Circle;
