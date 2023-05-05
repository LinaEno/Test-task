import Clock from "../../images/clock.svg";
import {
  ArticleDate,
  ArticleDateBox,
  BigArticleDesc,
  BigArticleImg,
  BigArticleTitle,
  BigArticleWrapper,
  PersonData,
  PersonName,
} from "./ArticleSection.styled";

const BigArticle = ({ article }) => {
  return (
    <BigArticleWrapper>
      <BigArticleImg
        src={article.foto}
        alt="Article foto"
        style={{ marginBottom: 24 }}
      />
      <div>
        <PersonData>
          <img src={article.fotoPerson} alt="Person foto" width={32} />
          <PersonName>{article.fullName}</PersonName>
        </PersonData>
        <BigArticleTitle>{article.title}</BigArticleTitle>
        <BigArticleDesc>{article.desc}</BigArticleDesc>
        <ArticleDateBox>
          <img src={Clock} alt="Clock icon" />
          <ArticleDate>
            {article.time} | {article.date}
          </ArticleDate>
        </ArticleDateBox>
      </div>
    </BigArticleWrapper>
  );
};

export default BigArticle;
