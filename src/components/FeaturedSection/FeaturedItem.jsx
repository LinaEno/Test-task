import {
  FeaturedImage,
  FeaturedSliderItem,
  FeaturedTag,
  PersonBox,
  PersonName,
  PersonPlace,
  SalaryBox,
  SalaryDesc,
  SalaryTitle,
} from "./FeaturedSection.styled";

const FeaturedItem = ({ item, onLoad }) => {
  const handleLoad = () => {
    onLoad(false);
  };

  return (
    <FeaturedSliderItem className="slider-featured">
      <FeaturedImage
        onLoad={handleLoad}
        src={item.photo}
        height={382}
        alt="photo"
        className="slider-featured-img"
      />
      <FeaturedTag text={item.tags.title}>
        <img src={item.tags.icon} alt="icon" />
        <p>{item.tags.title}</p>
      </FeaturedTag>
      <SalaryBox>
        <SalaryTitle>{item.name}</SalaryTitle>
        <SalaryDesc>
          $ {item.salary.toLocaleString("en-US").replace(/,/g, ".")}
        </SalaryDesc>
      </SalaryBox>
      <PersonBox>
        <img src={item.person.photo} alt="Person" />
        <div>
          <PersonName>{item.person.fullName}</PersonName>
          <PersonPlace>{item.person.place}</PersonPlace>
        </div>
      </PersonBox>
    </FeaturedSliderItem>
  );
};

export default FeaturedItem;
