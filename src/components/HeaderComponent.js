import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import WorkIcon from "@material-ui/icons/Work";
import NextLink from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  swipemenulink: {
    margin: theme.spacing(1, 1.5),
    width: "90%",
  },

  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NextLink href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NextLink>
        <NextLink href="/aboutme">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"About Me"} />
          </ListItem>
        </NextLink>
        <NextLink href="/work">
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Work"} />
          </ListItem>
        </NextLink>
        <NextLink href="/contactme">
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />{" "}
            </ListItemIcon>
            <ListItemText primary={"Contact Me"} />
          </ListItem>
        </NextLink>
      </List>
      <Divider />
      <List>
        <Button
          target="_blank"
          href="https://www.upwork.com/o/profiles/users/~0151f08e97cf39660b/"
          variant="outlined"
          className={classes.swipemenulink}
        >
          Hire Me
        </Button>
      </List>
    </div>
  );
  return (
    <div>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Hidden only={["xl", "lg"]}>
            {" "}
            <IconButton
              onClick={toggleDrawer("left", true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Amarnath TSR
          </Typography>
          <Hidden only={["sm", "xs"]}>
            <nav>
              <NextLink href="/">
                <Link
                  variant="button"
                  color="textPrimary"
                  className={classes.link}
                >
                  Home
                </Link>
              </NextLink>
              <NextLink href="/aboutme">
                <Link
                  variant="button"
                  color="textPrimary"
                  className={classes.link}
                >
                  About Me
                </Link>
              </NextLink>
              <NextLink href="/work">
                <Link
                  variant="button"
                  color="textPrimary"
                  className={classes.link}
                >
                  Work
                </Link>
              </NextLink>
              <NextLink href="/contactme">
                <Link
                  variant="button"
                  color="textPrimary"
                  className={classes.link}
                >
                  Contact Me
                </Link>
              </NextLink>
            </nav>
          </Hidden>

          <Button
            target="_blank"
            href="https://www.upwork.com/o/profiles/users/~0151f08e97cf39660b/"
            variant="outlined"
            className={classes.link}
          >
            Hire Me
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderComponent;
