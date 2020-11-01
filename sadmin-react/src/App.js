import React from 'react';
import logo from './logo.svg';
import './App.css';

/* App Bar */
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/* Logout Button */
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import SignIn from './components/SignIn';
/* Navigation Drawer */
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


/* table */
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/* card */
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


/* router */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 } from "react-router-dom";
 import { Redirect } from "react-router-dom";

 
import { useEffect } from "react";

import socketIOClient from "socket.io-client";
// const socketUrl = "http://127.0.0.1:5508";
const socketUrl = "https://shan-server.herokuapp.com/";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  table: {
    minWidth: 400,
  },

  card : {
    border : "0px solid",
    borderRadius : 20,
    padding : 20,
    margin : 20,
    backgroundColor: "#3F51B5",
    boxShadow : "10px 10px 10px 5px gray"
  },
  cardNumber : {
    fontSize : 72,
    color : "white",
  },
  cardUpdatedTime : {
    color : "gray"
  },
  

  tableSub : {
    border : 1,
    width : "100%"
  },
  tableSubTitle : {
    color : "gray",
  },
  tableSubTitleHighlight : {
    color : "white",
  },

  marquee : {
    paddingTop : 20
  }
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


var liveDataStructure = {
  live2d : 55,
  live2dUpdateTime : "2020-10-18 12:34 PM",
  morningSet : 23,
  morningValue : 34,
  morningDigit : 33,
  eveningSet : 67,
  eveningValue : 78,
  eveningDigit : 88,
  live3d : 558,
  live3dUpdateTime : "2020-10-18 12:34 PM",
}
function App(){
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [liveData, setLiveData] = React.useState(liveDataStructure);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['2D Live', '3D Live'].map((text, index) => (
          <Link to={index % 2 === 0 ? "2dlive" : "3dlive"} style={{textDecoration:"none"}}>
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function makeDigit(number,count){
    number = number + "";
    for(let i=number.length ; i < count; i++){
      number = "0"+number;
    }
    return number;
  }

  const socket = socketIOClient(socketUrl);

  /* life cycle or hook */
  useEffect(() => {

    /*
    setInterval(function(){ 
      setLiveData({
        live2d : makeDigit(randomIntFromInterval(0,99),2),
        live2dUpdateTime : "2020-10-18 12:34 PM",
        live3d : makeDigit(randomIntFromInterval(0,999),3),
        live2dUpdateTime : Date(),
        morningSet : randomIntFromInterval(0,99),
        morningValue : randomIntFromInterval(0,99),
        morningDigit : randomIntFromInterval(0,99),
        eveningSet : randomIntFromInterval(0,99),
        eveningValue : randomIntFromInterval(0,99),
        eveningDigit : randomIntFromInterval(0,99),
        live3dUpdateTime : Date(),
      });
    }, 3000);
    */
    
    socket.on("data", data => {
      console.log("socket data");
      console.log(data);
      setLiveData(data);
    });
  }, []);
  return (
    <Router basename="/2dlive">
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            2D / 3D Live
          </Typography>
          
        </Toolbar>
      </AppBar>
      
      <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
        {list("left")}
      </Drawer>


      <marquee className={classes.marquee}>ထိုင်း ၃ လုံးထိုးဖို့ ဒိုင်ရှာမရရင် Viber 09777698807 ကို ဆက်သွယ်ပေးပါခင်ဗျာ</marquee>
      <Switch>
        <Route path="/2dlive">

            <SignIn />
            <div className={classes.card}>
            <center className="blink"><span className={classes.cardNumber}>{liveData.live2d}</span></center>
            <center className={classes.cardUpdatedTime}>Updated on {liveData.live2dUpdateTime}</center>
            </div>
          
          <div className={classes.card}>
            <table  className={classes.tableSub}>
              <tr>
                <td colSpan="3"><center ><span className={classes.tableSubTitleHighlight}>12:00 PM</span></center></td>
              </tr>
              <tr>
                <td><span className={classes.tableSubTitle}>SET</span></td>
                <td><span className={classes.tableSubTitle}>Value</span></td>
                <td><span className={classes.tableSubTitle}>2D</span></td>
              </tr>
              <tr>
                <td><span className={classes.tableSubTitleHighlight}>{liveData.morningSet}</span></td>
                <td><span className={classes.tableSubTitleHighlight}>{liveData.morningValue}</span></td>
                <td><span className={classes.tableSubTitleHighlight}>{liveData.morningDigit}</span></td>
              </tr>
            </table>
          </div>
          
          <div className={classes.card}>
            <table  className={classes.tableSub}>
              <tr>
                <td colSpan="3"><center><span className={classes.tableSubTitleHighlight}>4:30 PM</span></center></td>
              </tr>
              <tr>
                <td><span className={classes.tableSubTitle}>SET</span></td>
                <td><span className={classes.tableSubTitle}>Value</span></td>
                <td><span className={classes.tableSubTitle}>2D</span></td>
              </tr>
              <tr>
                <td><span className={classes.tableSubTitleHighlight}>{liveData.eveningSet}</span></td>
                <td><span className={classes.tableSubTitleHighlight}>{liveData.eveningValue}</span></td>
                <td><span className={classes.tableSubTitleHighlight}>{liveData.eveningDigit}</span></td>
              </tr>
            </table>
          </div>
        </Route>

        <Route path="/3dlive">
            <div className={classes.card}>
            <center className="blink"><span className={classes.cardNumber}>{liveData.live3d}</span></center>
            <center className={classes.cardUpdatedTime}>Updated on {liveData.live3dUpdateTime}</center>
          </div>
        </Route>

        <Route path="/">
            <Redirect to="/2dlive" />
        </Route>
      </Switch>
    </div>
    </Router>
  )
}
export default App;
