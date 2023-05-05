import { ItemBox, ItemDesc, ItemTitle } from "./HeroSection.styled";

const SliderItem = ({ item }) => {
  return (
    <ItemBox style={{ width: item.width }}>
      <div>
        <img src={item.img} alt="Hero slide" />
      </div>
      <div>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemDesc>{item.desc}</ItemDesc>
      </div>
    </ItemBox>
  );
};

export default SliderItem;
