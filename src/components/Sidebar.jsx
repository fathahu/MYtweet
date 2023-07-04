import { Box, ListItem, ListItemButton, ListItemIcon, List, ListItemText, Switch } from '@mui/material'
import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import Groups2Icon from '@mui/icons-material/Groups2';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = ({ mode, SetMode }) => {
  // const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }} >
      <Box position='fixed'>
        <List >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#home' >
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#pages' >
                <FindInPageIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#groups' >
                <Groups2Icon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#friends' >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#settings' >
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href='#profile' >
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <DarkModeIcon color='action' />
              <Switch sx={{marginLeft:3}}
                  onChange={e => SetMode(mode === 'light' ? 'dark' : 'light')} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar