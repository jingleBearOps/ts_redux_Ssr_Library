import { Box, Paper, Typography, Grid, TextField, Button } from "@mui/material";


interface Props {
    article: IArticle | undefined;
    cancelEdit: () => void;
}
export default function ArticleForm({article, cancelEdit}: Props){
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
    return(
        // <>
        
        // <h1>
        //     {article == undefined ? <br/>  : article.name}
        // </h1>

        <Box component={Paper} sx={{p: 4}}>
            <Typography variant="h4" gutterBottom sx={{mb: 4}}>
                Product Details
            </Typography>
            <form onSubmit={()=>{}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField defaultValue={name} name='name' label='Name'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField defaultValue={number} name='number' label='Number'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField defaultValue={category} name='category' label='Category'/>
                </Grid>
{/* 
                above: dropdown select
                bottom: customized input */}

            </Grid>
            <Box display='flex' justifyContent='space-between' sx={{mt: 3}}>
                <Button onClick={cancelEdit} variant='contained' color='inherit'>Cancel</Button>
                <Button type = 'submit' variant='contained' color='success'>Submit</Button>
            </Box>
            </form>
        </Box>
    // </>
    )

}