import Search from "../component/common/Search";
import RecipeList from "../component/common/RecipeList";
import {getRecipes} from "../services/api" ;
import { useEffect, useState } from "react";

const Recipes=()=>{
      const [searchedQuery, setsearchedQuery]=useState('pizza');
      const [recipes, setrecipes]=useState([]);

      useEffect(()=>{
        getsearchResult();
      }, [searchedQuery]);
    const getsearchResult= async ()=>{
       let result =await getRecipes(searchedQuery);
       if(result && result.recipes){
          setrecipes(result.recipes);
       }
    }
   return(
    <>
         <Search setsearchedQuery={setsearchedQuery}/>
         <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
    </>
   )
}

export default Recipes;