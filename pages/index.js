import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Head from "next/head";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import NextLink from "next/link";
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
    alignitems: "baseline",
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
  socialgrid: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head></Head>
      <CssBaseline />

      {/* Hero unit */}
      <Container
        justify="center"
        alignitems="center"
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
              src="assets/images/amarnathlogo.webp"
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

        <Grid container item xs={12} className={classes.socialgrid}>
          <Grid item xs={2} >
            <IconButton aria-label="upload picture" component="span">
              <Avatar>
                <GitHubIcon />
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={2} >
            <IconButton aria-label="upload picture" component="span">
              <Avatar>
                <LinkedInIcon />
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={2} >
            <IconButton aria-label="upload picture" component="span">
              <Avatar>
                <TwitterIcon />
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={2} >
            <IconButton aria-label="upload picture" component="span">
              <Avatar>
                <FacebookIcon />
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={2} >
            <IconButton aria-label="upload picture" component="span">
              <Avatar>
                <InstagramIcon />
              </Avatar>
            </IconButton>
          </Grid>
          <Grid item xs={2} >
            <IconButton aria-label="upload picture" component="span">
              <Avatar>
                <WhatsAppIcon />
              </Avatar>
            </IconButton>
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
    </React.Fragment>
  );
}
