import { articles, bigArticle } from "../../constants/article";
import SmallArticle from "./SmallArticle";
import BigArticle from "./BigArticle";
import { DesktopOnly } from "../Media/Media";
import bg from "../../images/bg/blur3.svg";

import {
  ArticleContainer,
  ArticleContent,
  ArticlePreTitle,
  ArticleTitle,
  ArticleButton,
  SmallArticleBox,
  BgImage,
} from "./ArticleSection.styled";

const ArticleSection = () => {
  return (
    <ArticleContainer>
      <BgImage src={bg} all="bg image" />
      <ArticlePreTitle>See tips and trick from our partnership</ArticlePreTitle>
      <ArticleTitle>Find out more about selling and buying homes</ArticleTitle>
      <ArticleButton type="submit">More Article</ArticleButton>
      <ArticleContent>
        <SmallArticleBox>
          {articles.map((article) => (
            <SmallArticle article={article} />
          ))}
        </SmallArticleBox>
        <DesktopOnly>
          {bigArticle.map((article) => (
            <BigArticle article={article} />
          ))}
        </DesktopOnly>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default ArticleSection;
