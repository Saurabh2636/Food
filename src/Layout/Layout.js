import React, { useEffect, useContext } from "react";
import { Output, SetOutput } from "../App";
import { makeStyles, alpha } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  SubjectOutlined,
  AddCircleOutlineOutlined,
  LocationDisabled,
} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
const drawerWidth = 180;
const useStyle = makeStyles((theme) => {
  return {
    page: {
      background: "#9e9e9e",
    },
    root: {
      display: "flex",
    },
    ListName: {
      marginTop: "5cm",
      marginLeft: "20px",
    },
    List: {
      marginTop: "15px",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#69f0ae",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    btn: {
      background: "#9e9e9e",
    },
    toolbar: theme.mixins.toolbar,
  };
});
const Layout = ({ children }) => {
  //const [data1, setdata1] = useState('')
  const History = useHistory();
  const location = useLocation();
  let data1 = useContext(Output);
  const setdata1 = useContext(SetOutput);
  console.log(location.pathname);
  useEffect(() => {
    setdata1("");
  }, [location]);
  const abc = () => {
    History.push("/Food/search");
  };
  console.log(data1);
  const menuItem = [
    {
      text: "Breakfast",
      icon: <SubjectOutlined color="secondary" />,
      path: "/Food/",
    },
    {
      text: "Lunch",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/Food/lunch",
    },
    {
      text: "Dinner",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/Food/dinner",
    },
  ];

  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h4">🍕Food🍮</Typography>
          {location.pathname !== "/Food/search" ? (
            <div style={{display: 'flex'}}>
              <div className={classes.search}>
                <InputBase
                  classname={classes.abc}
                  placeholder="Search…"
                  classes={{
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  value={data1}
                  onChange={(e) => {
                    setdata1(e.target.value);
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={() => {
                  abc();
                }}
              >
                Go
              </Button>
            </div>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <List className={classes.ListName}>
          {menuItem.map((item) => (
            <ListItem
              className={classes.List}
              button
              key={item.key}
              onClick={() => {
                History.push(item.path);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
