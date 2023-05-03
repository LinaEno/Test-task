import { articles, bigArticle } from "../../constants/article";
import SmallArticle from "./SmallArticle";
import BigArticle from "./BigArticle";

const ArticleSection = () => {
  return (
    <section>
      <p>See tips and trick from our partnership</p>
      <h3>Find out more about selling and buying homes</h3>
      <button type="submit">More Article</button>
      {articles.map((article) => (
        <SmallArticle article={article} />
      ))}
      {bigArticle.map((article) => (
        <BigArticle article={article} />
      ))}
    </section>
  );
};

export default ArticleSection;
