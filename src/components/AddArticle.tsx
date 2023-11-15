import * as React from "react"

type Props = {
  saveArticle: (article: IArticle | any) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>()

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    saveArticle(article)
  }
  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={handleArticleData}
      />
        <input
            type="number"
            id="number"
            placeholder="Name"
            onChange={handleArticleData}
        />
      <input
        type="text"
        id="category"
        placeholder="Category"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add article
      </button>
    </form>
  )
}