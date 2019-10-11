import React from "react";
import articleContent from './article-content';
import ArticleList from '../ArticlesList';

export const ArticleListPage = () => {
  return (
    <React.Fragment>
      <h2>Articles</h2>
<ArticleList articles={articleContent}/>
    
    </React.Fragment>
  );
};
