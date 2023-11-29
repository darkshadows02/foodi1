import Header from "../component/Header";
import { Button } from "semantic-ui-react";
import {Link} from "react-router-dom";
const Home=()=>{
    return(
        <>
            <Header title="our recipe" bgClass="bg-image">
              <Button content="SEARCH RECIPES" 
                color="primary"
                as={Link}
                to="/recipes"
                size="big"
              /> 
            </Header>
        </>
    )
}

export default Home;