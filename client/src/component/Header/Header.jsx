import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/UserContext";
import Chat from "../chat/Chat";


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light" style={{ width: "100%" }}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="20"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          {user?.displayName ? (
            <button onClick={handleSignOut}>Logout</button>
          ) : AlertDialog()}
        </div>
      </nav>
      <div className="chat d-flex sticky-top" style={{ height: "0px", justifyContent: "end", width: "100" }}>
        <Chat />
      </div>
    </>
  );
};

export default Header;




function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link onClick={handleClickOpen}>
        Sign in
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"This website uses cookies"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We use cookies to personalise content and ads, 
            to provide social media features and to analyse our traffic. 
            We also share information about your use of our site with our social media,
             advertising and analytics partners who may combine it with other information that you’ve 
             provided to them or that they’ve collected from your use of their services.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Link to='/'>Disagree</Link>
          </Button>
          <Button onClick={handleClose} autoFocus>
            <Link to='/SignIn'>Agree</Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
