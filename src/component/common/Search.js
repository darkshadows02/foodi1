
import { Grid, Form, Input } from "semantic-ui-react";


import { useState } from "react";
const Search =({setsearchedQuery})=>{
     const [value, setvalue]=useState("");
     const onfromSumbit=()=>{
        setsearchedQuery(value);
     }
    return(
     <>
     <Grid column={2} textAlign="center" className="Search-box">
        <Grid.Column>
            <h2 className="Search-heading">Search recipes with
            <span  style={{color:'#2185D0'}}> our recipes</span></h2>
            <h4>input recipes seperated by comma</h4>
            <Form onSubmit={onfromSumbit}>
                <Input  placeholder="tomato, potato, pizza"
                    action={{icon:'Search', color:'blue'}}
                    onChange={(e)=>
                        setvalue(e.target.value)
                    }
                    value={value}
                />

            </Form>
        </Grid.Column>
     </Grid>
     </>
    )
}

export default Search;