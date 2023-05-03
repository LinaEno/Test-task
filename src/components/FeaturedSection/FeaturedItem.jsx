import React from "react";

const FeaturedItem = ({ item }) => {
  return (
    <div>
      <img src={item.foto} width={340} height={382} alt="foto" />
      <div>
        <img src={item.tags.icon} alt="icon" />
        <p>{item.tags.title}</p>
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>${item.salary.toLocaleString("en-US").replace(/,/g, ".")}</p>
      </div>
      <div>
        <img src={item.person.foto} alt="foto" />
        <p>{item.person.fullName}</p>
        <p>{item.person.place}</p>
      </div>
    </div>
  );
};

export default FeaturedItem;
