import { AppBar, Box, InputBase, Toolbar, Typography, styled ,Avatar} from '@mui/material'
import React from 'react'
import Pet from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
  })
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }))
  const Icons = styled(Box)(({ theme }) => ({
    display:'flex',
    gap:'13px',
    alignItems:'center'
  }))


  return (


    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h6'>
          LAMA DEV
        </Typography>
        <Pet sx={{ display: { xs: 'block', sm: 'none' } }}></Pet>
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon/>
          </Badge>
          <Avatar/>

        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar