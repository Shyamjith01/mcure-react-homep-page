import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb"; 
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../Logo/Logo";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  return (
    <AppBar position="static" style={{ background: "white", color: "black",borderRadius:'10px',width:'90%',marginLeft:'auto',marginRight:'auto' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{display:"flex",justifyContent:'space-between'}}>
            <Logo />
          <Box sx={{display:'flex',alignItems:'center'}}>
            <div style={{display:"flex",alignItems:'center',padding:'0 12px'}}>
                <LoginIcon style={{color:'#6240E8',fontSize:'16px'}}/>
                <span style={{paddingBottom:'3px',paddingLeft:'3px'}}>
                    Sign in
                </span>
            </div>
            <Button variant="contained" sx={{backgroundColor:'#6240E8',fontSize:'11px',borderRadius:'20px',padding:'0 12px',height:'2rem'}}>Register now</Button>
            <SearchIcon  style={{color:'#6240E8',fontSize:'45px',padding:'0 12px'}} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
