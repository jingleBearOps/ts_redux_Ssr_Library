interface IArticle {
    id: number
    name: string
    number: number
    category: string
  }
  
  type ArticleState = {
    articles: IArticle[]
  }
  
  type ArticleAction = {
    type: string
    article: IArticle
  }
  
  type DispatchType = (args: ArticleAction) => ArticleAction