import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//import "./Header.css";

/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  theToolbar: {
    display: "flex",
    width: "100%",
  },
}));
*/

const useStyles = makeStyles({
  root: {
    //   width: "100%",
    backgroundColor: "#BE9EFF",
    //   justifyContent: "center",
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className="nav-buttons">
        <Button className="tabs" component={Link} to="/">
          <strong>Login</strong>
        </Button>
        <img
          style={{ height: "1.5rem" }}
          src={require("../../images/IconLogo.png")}
        />
        <Button className="tabs" component={Link} to="/register">
          <strong>Sign Up</strong>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
