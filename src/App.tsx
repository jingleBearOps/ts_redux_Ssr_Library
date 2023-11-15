
import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./styles.css"

import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"
import ArticleForm from "./components/ArticleForm"
import { useState } from "react"
import { Button,  } from "@mui/material"


const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )
  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  )


  const [selectedProduct, setSelectedProduct] = useState<IArticle | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
  function handleSelectProduct(article: IArticle) {
    setSelectedProduct(article);
    setEditMode(true);
  }

  function cancelEdit() {
    if(selectedProduct) setSelectedProduct(undefined);
    setEditMode(false);
  }


  if(editMode) return <ArticleForm article={selectedProduct} cancelEdit={cancelEdit}/> 
  // if(editMode) return <ArticleForm /> 
  return (
    <main>
      <div className="center">
      <h1 color="red" >My Articles</h1>
      <Button onClick={() => setEditMode(true)} sx={{ m: 2 }} size='large' variant='contained'>Create</Button>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <>
        <div className="Article" key={article.id}>
          <div>
            <h1>{article.name}</h1>
            <h2>{article.number}</h2>
            <p>{article.category}</p>
          </div>
          <button onClick={() => handleSelectProduct(article)}>Edit</button>
          <button onClick={() => deleteArticle(article)}>Delete</button>
        </div>


        
        </>
      ))}
      </div>
    </main>
  )
}

export default App
