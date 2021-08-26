import React, { useState, useEffect,useContext } from "react";
import {Output} from '../App'
import axios from "axios";
import Container from "@material-ui/core/Container";
import { Typography, Button, Grid ,Box} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import "../App.css";
const Search = (props) => {
  const [data1, setdata1] = useState('')
  const data = useContext(Output)
  const YOUR_APP_ID = "c4d46ed9";
  const YOUR_APP_KEY = "039f52e1aada485b5cd90a404a383e2f";
 
  useEffect(async () => {
    const url = `https://api.edamam.com/search?q=${data}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    await axios
      .get(url)
      .then((response) => {
        setdata1(response.data.hits);
        console.log("hello world")
      })
      .catch((err) => {
        console.log(err);
      });
  },[data]);
  const abc=(name)=>{
    props.setBill([...props.bill,name])
    alert(`You order : ${name}`)
  }
  return (
    <>
      <Container>
       
        <Grid container spacing={2} justifyContent="center">
          {data1
            ? data1.map((item, ind) => {
                return (
                  <Grid
                    item
                    key={ind}
                    xs={"auto"}
                    md={4}
                    sm={6}
                    className="movie"
                  >
                    <Container className="container" maxWidth={"xs"}>
                      <img
                        className='photo'
                        width={400}
                        src={item.recipe.image}
                        alt="error"
                        onError={(e) => {
                          e.target.src =
                            "https://www.edamam.com/web-img/043/0435e5f2e9d306844325b3a866d5fbc1";
                        }}
                      />
                      <Container textAlign="center" className="movie-over">
                        <Typography variant="h5" gutterBottom align="center">
                          {item.recipe.label}
                        </Typography>
                        <Typography variant="h6" gutterBottom align="center">
                          {item.recipe.source}
                        </Typography>
                        <Box textAlign="center">
                        <Button variant="contained" 
                         color="secondary" size="small"  
                         startIcon={<AddIcon />}
                         onClick={()=>abc(item.recipe.label)}
                         >
                           Buy
                        </Button>
                        </Box>
                      </Container>
                    </Container>
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Container>
    </>
  );
};
export default Search;
