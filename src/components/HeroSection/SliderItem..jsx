import React from "react";

const SliderItem = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.img} alt="Hero slide" />
      </div>
      <div>
        <p>{item.title}</p>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default SliderItem;
