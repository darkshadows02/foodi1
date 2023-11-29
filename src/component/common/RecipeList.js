
import { Container, Header, Grid } from "semantic-ui-react";
 import RecipeListitem from "./RecipeListitem";
const RecipeList=({recipes, searchedQuery})=>{
     return (
        <>
          <Container>
             <Header 
                size="huge"
                content={`RECIPE LIST FOR ${searchedQuery}`}
                textAlign="center"
             />
             <Grid columns={4} doubling>
                {
                    recipes && recipes.map(recipe=>(
                        <Grid.Column>
                             <RecipeListitem recipe={recipe}/>
                        </Grid.Column>
                    )

                    )
                }
             </Grid>
 
          </Container>
        </>
     )
}
export default RecipeList;