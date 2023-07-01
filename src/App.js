import React from 'react'
import Navbar from './components/Navbar'
import RightBar from './components/RightBar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Box from '@mui/material/Box';
import { Stack } from '@mui/material'

const App = () => {
  return (
    <>
      <Box>
        <Navbar /> 
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <RightBar />
        </Stack>
      </Box>
    
    </>
  )
}

export default App