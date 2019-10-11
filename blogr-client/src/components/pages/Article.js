import React from "react";
import articleContent from './article-content'
import ArticleList from '../ArticlesList';
import NotFoundPage from './NotFoundPage'



export const Article = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    
    if(!article) return <NotFoundPage/>
    const otherAricles = articleContent.filter(article => article.name !== name)
  return (
    <React.Fragment>
      <h2>{article.title}</h2>
      {article.content.map((paragraph, key) => {
          return (
              <p key={key}>{paragraph}</p>
          )
      })}
      <h3>Other Articles</h3>
    <ArticleList articles={otherAricles}/>
    </React.Fragment>
  );
};
