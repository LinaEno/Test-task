import Clock from "../../images/clock.svg";
import {
  ArticleDateBox,
  ArticleDate,
  PersonData,
  PersonName,
  SmallArticleTitle,
  SmallArticleWrapper,
  SmallArticleImg,
} from "./ArticleSection.styled";

const SmallArticle = ({ article }) => {
  return (
    <SmallArticleWrapper>
      <SmallArticleImg src={article.photo} alt="Article photo" />
      <div>
        <PersonData>
          <img src={article.photoPerson} alt="Person" width={32} />
          <PersonName>{article.fullName}</PersonName>
        </PersonData>
        <SmallArticleTitle>{article.title}</SmallArticleTitle>
        <ArticleDateBox>
          <img src={Clock} alt="Clock icon" />
          <ArticleDate>
            {article.time} | {article.date}
          </ArticleDate>
        </ArticleDateBox>
      </div>
    </SmallArticleWrapper>
  );
};

export default SmallArticle;
