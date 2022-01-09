import React, { useState } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { foodDesc } from "../FoodData/Data";
import { Button } from "../components/Button/Button";
import { DescContainer } from "./Mainstyle";
import Circle from "../components/Circle/Circle";
import { Images } from "../FoodData/Images";
import { Arrow } from "../components/Arrows/Arrow";

const Mainpage = () => {
  const [selectedfood, setSelectedfood] = useState(foodDesc[0]);
  const [imageindexing, setImageIndexing] = useState(2);

  const [curimage, setCurimage] = useState(1);

  const RightClick = () => {
    if (imageindexing < 2) {
      setCurimage(curimage - 1);
      setImageIndexing(imageindexing + 1);
      setSelectedfood(foodDesc[imageindexing + 1]);
    }
  };
  const LeftClick = () => {
    if (imageindexing > 0) {
      setCurimage(curimage + 1);
      setImageIndexing(imageindexing - 1);
      setSelectedfood(foodDesc[imageindexing - 1]);
    }
  };
  return (
    <div >
      <Navbar />
      <Circle color={selectedfood.color} images={Images} curimage={curimage} />
      <DescContainer color={selectedfood.color}>
        <h1>{selectedfood.price}</h1>
        <h2>{selectedfood.title}</h2>
        <p>{selectedfood.desc}</p>
        <Button imageindexing = {imageindexing} color={selectedfood.color} text="Order Now" />
      </DescContainer>
      <Arrow
        color={selectedfood.color}
        LeftClick={LeftClick}
        RightClick={RightClick}
      />
    </div>
  );
};

export default Mainpage;
