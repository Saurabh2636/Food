import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { Typography, Button, Grid, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "../App.css";
const Lunch = (props) => {
  const [data, setdata] = useState("");
  const YOUR_APP_ID = "c4d46ed9";
  const YOUR_APP_KEY = "039f52e1aada485b5cd90a404a383e2f";
  useEffect(async () => {
    const url = `https://api.edamam.com/search?q=lunch&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    await axios
      .get(url)
      .then((response) => {
        setdata(response.data.hits);
        console.log(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const abc = (name) => {
    props.setBill([...props.bill, name]);
    alert(`You order : ${name}`);
  };
  return (
    <>
      <Container>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          Lunch🍜
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {data
            ? data.map((item, ind) => {
                return (
                  <Grid
                    item
                    key={ind}
                    xs={"auto"}
                    md={4}
                    sm={6}
                    className="movie"
                  >
                    <Container maxWidth='xs'>
                      <img
                        className="photo"
                        width={400}
                        src={item.recipe.image}
                        alt="error"
                        onError={(e) => {
                          e.target.src =
                            "https://www.edamam.com/web-img/043/0435e5f2e9d306844325b3a866d5fbc1";
                        }}
                      />
                      <Container className="movie-over">
                        <Typography variant="h5" gutterBottom align="center">
                          {item.recipe.label}
                        </Typography>
                        <Typography variant="h6" gutterBottom align="center">
                          {item.recipe.source}
                        </Typography>
                        <Box textAlign="center">
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            startIcon={<AddIcon />}
                            onClick={() => abc(item.recipe.label)}
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
export default Lunch;
