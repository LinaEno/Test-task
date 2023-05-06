import { ReactComponent as Phone } from "../../images/tour/phone.svg";
import Tour1 from "../../images/tour/tour1.svg";
import Tour2 from "../../images/tour/tour2.svg";
import Tour3 from "../../images/tour/tour3.svg";
import Tour4 from "../../images/tour/tour4.svg";
import Person from "../../images/persons/dianne.png";

import {
  Button,
  TourDesc,
  TourDescriptionContainer,
  TourList,
  TourListItem,
  TourListText,
  TourListTitle,
  TourPersonBox,
  TourPersonInfo,
  TourPersonName,
  TourPersonPosition,
  TourPreTitle,
  TourTitle,
} from "./TourSection.styled";

const TourDescription = () => {
  return (
    <TourDescriptionContainer>
      <TourPreTitle>Ready to Sell!</TourPreTitle>
      <TourTitle>Let’s tour and see our house!</TourTitle>
      <TourDesc>
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </TourDesc>
      <TourListTitle>House Detail</TourListTitle>
      <TourList>
        <TourListItem>
          <img src={Tour1} alt="icon" />
          <TourListText>4 Bedrooms</TourListText>
        </TourListItem>
        <TourListItem>
          <img src={Tour2} alt="icon" />
          <TourListText>2 Bathrooms</TourListText>
        </TourListItem>
        <TourListItem>
          <img src={Tour3} alt="icon" />
          <TourListText>1 Carport</TourListText>
        </TourListItem>
        <TourListItem>
          <img src={Tour4} alt="icon" />
          <TourListText>2 Floors</TourListText>
        </TourListItem>
      </TourList>
      <TourPersonBox>
        <img src={Person} alt="Person foto" width={56} height={56} />
        <TourPersonInfo>
          <TourPersonName>Dianne Russell</TourPersonName>
          <TourPersonPosition>Manager Director</TourPersonPosition>
        </TourPersonInfo>
        <Button type="button">
          <Phone />
          Contact Now
        </Button>
      </TourPersonBox>
    </TourDescriptionContainer>
  );
};

export default TourDescription;
