import React, { createContext, useState } from "react";
import Breakfast from "./component/Breakfast";
import Dinner from "./component/Dinner";
import Lunch from "./component/Lunch";
import Search from "./component/Search";
import Bill from "./component/Bill";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "./Layout/Layout";
const Output = createContext();
const SetOutput = createContext();
const theme = createTheme({
  palette: {
    primary: {
      main: "#69f0ae",
    },
    typography: {
      fontFamily: "Mate SC",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  },
});
const App = () => {
  const [data, setdata] = useState("");
  const [bill, setBill] = useState([]);
  console.log(bill)
  return (
    <ThemeProvider theme={theme}>
      <Output.Provider value={data}>
        <SetOutput.Provider value={setdata}>
            <Router>
              <Layout>
                <Switch>
                  <Route exact path="/Food/">
                    <Breakfast bill={bill} setBill={setBill} />
                  </Route>
                  <Route exact path="/Food/lunch">
                    <Lunch bill={bill} setBill={setBill} />
                  </Route>
                  <Route exact path="/Food/dinner">
                    <Dinner bill={bill} setBill={setBill}  />
                  </Route>
                  <Route exact path="/Food/search">
                    <Search bill={bill} setBill={setBill}/>
                  </Route>
                  <Route exact path="/Food/bill">
                    <Bill bill={bill}/>
                  </Route>
                </Switch>
              </Layout>
            </Router>
        </SetOutput.Provider>
      </Output.Provider>
    </ThemeProvider>
  );
};
export default App;
export { Output, SetOutput};
