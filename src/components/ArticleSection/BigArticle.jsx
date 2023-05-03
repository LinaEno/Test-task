import Clock from "../../images/clock.svg";

const BigArticle = ({ article }) => {
  return (
    <div>
      <div>
        <img src={article.foto} alt="Article foto" />
      </div>
      <div>
        <img src={article.fotoPerson} alt="Person foto" />
        <span>{article.fullName}</span>
        <p>{article.title}</p>
        <p>{article.desc}</p>
        <p>
          <img src={Clock} alt="Clock icon" />
          {article.time} | {article.date}
        </p>
      </div>
    </div>
  );
};

export default BigArticle;
