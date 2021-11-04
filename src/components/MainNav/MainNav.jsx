import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { Search, Tv } from "@material-ui/icons";
import TheatersIcon from "@material-ui/icons/Theaters";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

const MainNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/films");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Films"
        icon={<TheatersIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
};

export default MainNav;
