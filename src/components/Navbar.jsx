import { AppBar, Box, Toolbar, Typography, styled, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import Pet from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';


const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })
  // const Search = styled('div')(({ theme }) => ({
  //   backgroundColor: 'white',
  //   padding: '0 10px',
  //   borderRadius: theme.shape.borderRadius,
  //   width: '40%'
  // }))
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '13px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
      display: 'flex'
    }
  }))
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '13px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
      display: 'none'
    }
  }))

  const [open, SetOpen] = useState(false)
  return (


    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h6'>
          MYtweet
        </Typography>
        <Pet sx={{ display: { xs: 'block', sm: 'none' } }}></Pet>
        {/* <Search><InputBase placeholder='Search...' /></Search> */}
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar onClick={e => SetOpen(true)} alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-DufwTxA9eulu7Zf6fErMNiTj1W4t_pDUw&usqp=CAU' />
        </Icons>
        <UserBox>
          <Avatar onClick={e => SetOpen(true)} />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Box position={'fixed'} marginTop={5}>
        <Menu
          sx={
            { marginTop: '45px' }}
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => SetOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}

        >

          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Box>
    </AppBar>
  )
}

export default Navbar