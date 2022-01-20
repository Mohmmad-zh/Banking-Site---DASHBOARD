import * as React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupIcon from "@mui/icons-material/Group"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { createTheme, ThemeProvider } from "@mui/material"
import { Link } from "react-router-dom"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react"
import BankContext from "../utils/BankContext"
import { IoCardSharp } from "react-icons/io5"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
    const {logout }= useContext(BankContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(160, 150, 140)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="My bank dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/my-account" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletIcon />
              </ListItemIcon>
              <ListItemText primary="Account" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/operations" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <SavingsIcon />
              </ListItemIcon>
              <ListItemText primary="Operations" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          <Link to="/cards" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
               <IoCardSharp />
              </ListItemIcon>
              <ListItemText primary="Cards" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/users" style={{textDecoration: "none"}}>
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="users" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>

       {!localStorage.tokenDashboardBank?(
        <List style={{ marginTop: "auto" }}>
          <Link to="/login">
            <ListItem button>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
        </List>
        ): <List style={{ marginTop: "auto" }}>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
        </List>
        }
      </Drawer>
    </ThemeProvider>
  )
}
