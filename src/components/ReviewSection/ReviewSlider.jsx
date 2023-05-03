import Star from "../../images/star.svg";

const ReviewSlider = ({ review }) => {
  return (
    <>
      <div>
        <img src={review.image} alt="House foto" width={740} height={400} />
      </div>
      <div>
        <h3>{review.title}</h3>
        <p>{review.desc}</p>
        <div>
          <div>
            <img src={review.person.foto} alt="Person foto" />
          </div>
          <div>
            <p>{review.person.fullName}</p>
            <p>{review.person.desc}</p>
          </div>
          <div>
            <img src={Star} alt="Rate star" />
            <span>{review.person.rate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
