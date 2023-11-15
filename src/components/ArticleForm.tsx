import { Box, Paper, Typography, Grid, TextField, Button } from "@mui/material";
import React from "react";


interface Props {
    article: IArticle | undefined;
    cancelEdit: () => void;
    saveArticle: (article: IArticle | any) => void
}
export default function ArticleForm({article, cancelEdit, saveArticle}: Props){
    let name;
    let number;
    let category;
     article == undefined ? 
        name = ""  :
        name = article.name;
        if(article == undefined){
            name = "";
            number = 0;
            category = "";
        }else{
            name = article.name;
            number = article.number;
            category = article.category;

        }
        const [newarticle, setArticle] = React.useState<IArticle | {}>()

        const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
          setArticle({
            ...newarticle,
            [e.currentTarget.id]: e.currentTarget.value,
          })
        }
      
        const addNewArticle = (e: React.FormEvent) => {
          e.preventDefault()
          saveArticle(newarticle)
        }
    return(
        // <>
        
        // <h1>
        //     {article == undefined ? <br/>  : article.name}
        // </h1>

        <Box component={Paper} sx={{p: 4}}>
            <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                Product Details
            </Typography>
            <form onSubmit={addNewArticle} className="Add-article">
                <input
                    type="text"
                    id="name"
                    placeholder={name}
                    onChange={handleArticleData}
                />
                    <input
                        type="number"
                        id="number"
                        placeholder={number.toString()}
                        onChange={handleArticleData}
                    />
                <input
                    type="text"
                    id="category"
                    placeholder={category}
                    onChange={handleArticleData}
                />
                <button disabled={article === undefined ? true : false}>
                    Add article
                </button>
                <Box display='flex' justifyContent='space-between' sx={{mt: 3}}>
                <Button onClick={cancelEdit} variant='contained' color='inherit'>Cancel</Button>
                <Button type = 'submit' variant='contained' color='success'>Submit</Button>
            </Box>
            </form>
        </Box>
    // </>
    )

}

