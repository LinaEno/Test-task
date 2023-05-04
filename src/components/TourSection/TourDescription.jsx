import Tour1 from "../../images/tour/tour1.svg";
import Tour2 from "../../images/tour/tour2.svg";
import Tour3 from "../../images/tour/tour3.svg";
import Tour4 from "../../images/tour/tour4.svg";
import Phone from "../../images/tour/phone.svg";
import Person from "../../images/persons/dianne.svg";

const TourDescription = () => {
  return (
    <div>
      <p>Ready to Sell!</p>
      <h2>Let’s tour and see our house!</h2>
      <p>
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </p>
      <p>House Detail</p>
      <ul>
        <li>
          <img src={Tour1} alt="icon" />
          <p>4 Bedrooms</p>
        </li>
        <li>
          <img src={Tour2} alt="icon" />
          <p>2 Bathrooms</p>
        </li>
        <li>
          <img src={Tour3} alt="icon" />
          <p>1 Carport</p>
        </li>
        <li>
          <img src={Tour4} alt="icon" />
          <p>2 Floors</p>
        </li>
      </ul>
      <div>
        <img src={Person} alt="Person foto" />
        <div>
          <p>Dianne Russell</p>
          <p>Manager Director</p>
        </div>
        <button type="button">
          <img src={Phone} alt="Person foto" />
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default TourDescription;
