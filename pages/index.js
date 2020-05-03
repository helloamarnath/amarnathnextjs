import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import Head from "next/head";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import WorkIcon from "@material-ui/icons/Work";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    height: "15px",
    padding: "0",
    minWidth: "15px",
    borderRadius: "15px",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
function Copyright() {
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link color="inherit" href="https://material-ui.com/">
          Home
        </Link>
        {" | "}
        <Link color="inherit" href="https://material-ui.com/">
          About Me
        </Link>
        {" | "}
        <Link color="inherit" href="https://material-ui.com/">
          Work
        </Link>
        {" | "}
        <Link color="inherit" href="https://material-ui.com/">
          Contact Me
        </Link>
        {" | "}
        <Link color="inherit" href="https://material-ui.com/">
          HireMe
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </>
  );
}

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
  heroContent: {
    padding: theme.spacing(16, 0, 6),
    height: "100vh",
  },
  heroContent1full: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  heroContent1: {
    padding: theme.spacing(8, 0, 6),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(6),
    },
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

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

export default function Index() {
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
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"About Me"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <WorkIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Work"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ContactMailIcon />{" "}
          </ListItemIcon>
          <ListItemText primary={"Contact Me"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Button href="#" variant="outlined" className={classes.swipemenulink}>
          Hire Me
        </Button>
      </List>
    </div>
  );
  return (
    <React.Fragment>
      <Head></Head>
      <CssBaseline />
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
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Home
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                About Me
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Work
              </Link>
              <Link
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Contact Me
              </Link>
            </nav>
          </Hidden>
          <Button href="#" variant="outlined" className={classes.link}>
            Hire Me
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container
        justify="center"
        alignItems="center"
        maxWidth="sm"
        component="main"
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              src="assets/images/amarnathlogo.png"
              className={classes.large}
            />
          </StyledBadge>
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Amarnath TSR
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Web and Mobile App Developer
        </Typography>

        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={1} spacing={3}>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </Grid>
          <Grid item xs={1} spacing={3}>
            <Avatar>
              <LinkedInIcon />
            </Avatar>
          </Grid>
          <Grid item xs={1} spacing={3}>
            <Avatar>
              <FacebookIcon />
            </Avatar>
          </Grid>
          <Grid item xs={1} spacing={3}>
            <Avatar>
              <InstagramIcon />
            </Avatar>
          </Grid>
          <Grid item xs={1} spacing={3}>
            <Avatar>
              <WhatsAppIcon />
            </Avatar>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        component="main"
        className={classes.heroContent1full}
      >
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent1}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Hi,
            <Divider />
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            I'm a web designer / Mobile App developer based in TamilNadu, India.
            I have a passion for web design and love to create for web and
            mobile apps.
          </Typography>
        </Container>
      </Container>
      {/* End hero unit */}

      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
