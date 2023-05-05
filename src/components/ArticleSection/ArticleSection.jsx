import { articles, bigArticle } from "../../constants/article";
import SmallArticle from "./SmallArticle";
import BigArticle from "./BigArticle";
import {
  ArticleContainer,
  ArticleContent,
  ArticlePreTitle,
  ArticleTitle,
  ArticleButton,
  SmallArticleBox,
} from "./ArticleSection.styled";
import { DesktopOnly } from "../Media/Media";

const ArticleSection = () => {
  return (
    <ArticleContainer>
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
